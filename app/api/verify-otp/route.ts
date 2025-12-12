// app/api/verify-otp/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const { phone, email, otp, countryCode } = await request.json();

    if (!otp || (!phone && !email)) {
      return NextResponse.json(
        { error: 'OTP and phone/email are required' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    const fullPhone = phone && countryCode ? `${countryCode}${phone}` : phone;

    // Find OTP record
    const { data: otpRecord, error: fetchError } = await supabase
      .from('otp_verifications')
      .select('*')
      .eq(phone ? 'phone' : 'email', fullPhone || email)
      .eq('otp_code', otp)
      .eq('verified', false)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (fetchError || !otpRecord) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // Check expiry
    const expiresAt = new Date(otpRecord.expires_at);
    if (new Date() > expiresAt) {
      return NextResponse.json(
        { error: 'OTP has expired. Please request a new one.' },
        { status: 400 }
      );
    }

    // Check attempts
    if (otpRecord.attempts >= otpRecord.max_attempts) {
      return NextResponse.json(
        { error: 'Maximum verification attempts exceeded' },
        { status: 429 }
      );
    }

    // Verify OTP
    const { error: updateError } = await supabase
      .from('otp_verifications')
      .update({
        verified: true,
        attempts: otpRecord.attempts + 1,
      })
      .eq('id', otpRecord.id);

    if (updateError) {
      console.error('Update error:', updateError);
      return NextResponse.json(
        { error: 'Failed to verify OTP' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      verified: true,
    });
  } catch (error: any) {
    console.error('OTP verify error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}


