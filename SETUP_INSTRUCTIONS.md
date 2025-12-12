# Foundect Sign-Up Flows - Setup Instructions

## 📦 Step 1: Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install @supabase/supabase-js react-hook-form zod @hookform/resolvers zxcvbn
```

**Optional but recommended:**
```bash
npm install @tanstack/react-query swr
```

## 🔐 Step 2: Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# SMS Provider (Optional - for OTP)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890

# Or use Vonage/Nexmo
VONAGE_API_KEY=your_vonage_key
VONAGE_API_SECRET=your_vonage_secret

# Email OTP Fallback (uses Supabase SMTP if SMS not configured)
# No additional config needed - uses Supabase email settings
```

## 🗄️ Step 3: Database Setup

Run the SQL script in `database/schema.sql` in your Supabase SQL Editor to create all required tables.

## 📁 Step 4: Storage Buckets

In Supabase Dashboard → Storage, create these buckets:

1. **investor_verifications** (Private)
   - Enable RLS
   - Max file size: 5MB
   - Allowed MIME types: image/jpeg, image/png, image/webp, application/pdf

2. **business_verifications** (Private)
   - Enable RLS
   - Max file size: 5MB
   - Allowed MIME types: image/jpeg, image/png, image/webp, application/pdf

3. **public/logos** (Public, optional)
   - For business logos

## 🚀 Step 5: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/auth` to see the sign-up flows.

## ✅ Verification Checklist

- [ ] All dependencies installed
- [ ] Environment variables configured
- [ ] Database tables created
- [ ] Storage buckets created with RLS
- [ ] Supabase client connects successfully
- [ ] OTP API route works (test with Postman/curl)
- [ ] File uploads work to Supabase Storage

## 🔧 Troubleshooting

**OTP not sending?**
- Check SMS provider credentials
- Verify Supabase SMTP settings (for email fallback)
- Check API route logs

**File uploads failing?**
- Verify storage bucket permissions
- Check RLS policies
- Ensure file size < 5MB

**Database errors?**
- Verify table names match schema
- Check RLS policies allow inserts
- Verify foreign key constraints


