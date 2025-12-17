// app/api/send-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabaseClient';

// SMS Provider (Twilio example - replace with your provider)
async function sendSMS(phone: string, code: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    // Fallback to email if SMS not configured
    throw new Error('SMS provider not configured. Using email fallback.');
  }

  // TODO: Implement Twilio SMS sending
  // const client = require('twilio')(accountSid, authToken);
  // await client.messages.create({
  //   body: `Your Foundect verification code is: ${code}`,
  //   from: fromNumber,
  //   to: phone,
  // });

  // For now, log the code (remove in production!)
  console.log(`[SMS] OTP for ${phone}: ${code}`);
}

// Email OTP (using Supabase SMTP)
async function sendEmailOTP(email: string, code: string) {
  const supabase = createServerClient();
  
  // Use Supabase Edge Function or external email service
  // For now, we'll use a simple approach
  // TODO: Implement email sending via Supabase Functions or SendGrid/Resend
  
  console.log(`[Email] OTP for ${email}: ${code}`);
  
  // In production, use Supabase Edge Function:
  // await supabase.functions.invoke('send-email-otp', {
  //   body: { email, code }
  // });
}

export async function POST(request: NextRequest) {
  try {
    const { phone, email, countryCode } = await request.json();

    if (!phone && !email) {
      return NextResponse.json(
        { error: 'Phone or email is required' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    // Check for existing OTP
    const fullPhone = countryCode ? `${countryCode}${phone}` : phone;
    
    const { data: existing } = await supabase
      .from('otp_verifications')
      .select('*')
      .eq(phone ? 'phone' : 'email', phone || email)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    // Check resend cooldown (60 seconds)
    if (existing && existing.last_resend_at) {
      const lastResend = new Date(existing.last_resend_at);
      const cooldownEnd = new Date(lastResend.getTime() + 60 * 1000);
      
      if (new Date() < cooldownEnd) {
        const secondsLeft = Math.ceil((cooldownEnd.getTime() - Date.now()) / 1000);
        return NextResponse.json(
          { error: `Please wait ${secondsLeft} seconds before resending` },
          { status: 429 }
        );
      }
    }

    // Check max resends
    if (existing && existing.resend_count >= 3) {
      return NextResponse.json(
        { error: 'Maximum resend attempts reached. Please try again later.' },
        { status: 429 }
      );
    }

    // Store OTP in database
    const { error: dbError } = await supabase
      .from('otp_verifications')
      .insert({
        phone: phone ? fullPhone : null,
        email: email || null,
        otp_code: otp,
        expires_at: expiresAt.toISOString(),
        resend_count: existing ? existing.resend_count + 1 : 0,
        last_resend_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to store OTP' },
        { status: 500 }
      );
    }

    // Send OTP via SMS or Email
    try {
      if (phone) {
        await sendSMS(fullPhone, otp);
      } else if (email) {
        await sendEmailOTP(email, otp);
      }
    } catch (sendError: any) {
      // If SMS fails, try email fallback
      if (phone && email) {
        await sendEmailOTP(email, otp);
      } else {
        throw sendError;
      }
    }

    return NextResponse.json({
      success: true,
      message: `OTP sent to ${phone ? fullPhone : email}`,
      // In development, return OTP (remove in production!)
      ...(process.env.NODE_ENV === 'development' && { otp }),
    });
  } catch (error: any) {
    console.error('OTP send error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send OTP' },
      { status: 500 }
    );
  }
}










