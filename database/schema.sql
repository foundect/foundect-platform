-- database/schema.sql
-- Foundect Database Schema for Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (links Supabase Auth users to investor/business records)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('investor', 'business')),
  linked_investor_id UUID,
  linked_business_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Investors table
CREATE TABLE IF NOT EXISTS investors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT NOT NULL,
  country_code TEXT DEFAULT '+88',
  phone_verified BOOLEAN DEFAULT FALSE,
  dob DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  occupation TEXT,
  income_range TEXT,
  investment_experience TEXT,
  preferred_investment TEXT,
  nid_front TEXT,
  nid_back TEXT,
  selfie_url TEXT,
  nominee_name TEXT,
  nominee_phone TEXT,
  nominee_relationship TEXT,
  bank_name TEXT,
  bank_branch TEXT,
  account_number TEXT,
  account_holder_name TEXT,
  bank_skipped BOOLEAN DEFAULT FALSE,
  shariah_declaration BOOLEAN DEFAULT FALSE,
  quiz_results JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Businesses table
CREATE TABLE IF NOT EXISTS businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name TEXT NOT NULL,
  business_email TEXT UNIQUE NOT NULL,
  business_phone TEXT NOT NULL,
  country_code TEXT DEFAULT '+88',
  industry TEXT,
  address TEXT,
  website TEXT,
  description TEXT,
  registration_purpose TEXT,
  business_type TEXT,
  owners JSONB, -- Array of owner objects
  primary_owner_nid TEXT,
  nid_front TEXT,
  nid_back TEXT,
  trade_license_number TEXT,
  trade_license_url TEXT,
  years_in_operation INTEGER,
  shariah_declaration BOOLEAN DEFAULT FALSE,
  shariah_cert_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- OTP storage (ephemeral - cleaned up after expiry)
CREATE TABLE IF NOT EXISTS otp_verifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone TEXT NOT NULL,
  email TEXT,
  otp_code TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  attempts INTEGER DEFAULT 0,
  max_attempts INTEGER DEFAULT 3,
  resend_count INTEGER DEFAULT 0,
  max_resends INTEGER DEFAULT 3,
  last_resend_at TIMESTAMPTZ,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_investors_email ON investors(email);
CREATE INDEX IF NOT EXISTS idx_businesses_email ON businesses(business_email);
CREATE INDEX IF NOT EXISTS idx_otp_phone ON otp_verifications(phone);
CREATE INDEX IF NOT EXISTS idx_otp_email ON otp_verifications(email);
CREATE INDEX IF NOT EXISTS idx_otp_expires ON otp_verifications(expires_at);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_investors_updated_at BEFORE UPDATE ON investors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON businesses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE investors ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE otp_verifications ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Investors policies
CREATE POLICY "Investors can view their own data"
  ON investors FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.linked_investor_id = investors.id
    )
  );

CREATE POLICY "Investors can insert their own data"
  ON investors FOR INSERT
  WITH CHECK (true); -- Allow during signup

CREATE POLICY "Investors can update their own data"
  ON investors FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.linked_investor_id = investors.id
    )
  );

-- Businesses policies
CREATE POLICY "Businesses can view their own data"
  ON businesses FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.linked_business_id = businesses.id
    )
  );

CREATE POLICY "Businesses can insert their own data"
  ON businesses FOR INSERT
  WITH CHECK (true); -- Allow during signup

CREATE POLICY "Businesses can update their own data"
  ON businesses FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.linked_business_id = businesses.id
    )
  );

-- OTP policies (restrictive - only server can access)
CREATE POLICY "OTP table is server-only"
  ON otp_verifications FOR ALL
  USING (false)
  WITH CHECK (false);

-- Cleanup function for expired OTPs (run via cron or edge function)
CREATE OR REPLACE FUNCTION cleanup_expired_otps()
RETURNS void AS $$
BEGIN
  DELETE FROM otp_verifications
  WHERE expires_at < NOW() - INTERVAL '1 hour';
END;
$$ LANGUAGE plpgsql;


