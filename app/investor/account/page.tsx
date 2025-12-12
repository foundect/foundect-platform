"use client";

import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassInput } from "@/components/ui/GlassInput";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { HoverButton } from "@/components/ui/hover-button";
import { User, Mail, Phone, MapPin, CreditCard, Shield, CheckCircle, AlertCircle } from "lucide-react";

export default function InvestorAccountPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account information saved");
    // TODO: Hook up to Supabase profile table
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 text-text-900">My Account</h1>
        <p className="text-gray-600">Manage your personal information and preferences</p>
      </div>

      {/* Account Status */}
      <GlassCard className="animate-fade-in animation-delay-500">
        <GlassCardHeader>
          <GlassCardTitle className="text-xl">Account Status</GlassCardTitle>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-bg rounded-glass p-4">
              <p className="text-sm text-gray-600 mb-2">Verification Status</p>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-semibold text-green-700">Email Verified</span>
              </div>
            </div>
            <div className="glass-bg rounded-glass p-4">
              <p className="text-sm text-gray-600 mb-2">KYC Status</p>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <span className="font-semibold text-yellow-700">Pending</span>
              </div>
            </div>
            <div className="glass-bg rounded-glass p-4">
              <p className="text-sm text-gray-600 mb-2">Account Type</p>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-500" />
                <span className="font-semibold text-blue-700">Investor</span>
              </div>
            </div>
          </div>
        </GlassCardContent>
      </GlassCard>

      {/* Personal Information */}
      <GlassCard className="animate-fade-in animation-delay-1000">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Personal Information</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Update your personal details</p>
        </GlassCardHeader>
        <GlassCardContent>
          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <GlassInput
                label="Full Name"
                id="fullName"
                type="text"
                placeholder="John Doe"
                defaultValue="Ahmed Rahman"
              />

              <GlassInput
                label="Email"
                id="email"
                type="email"
                placeholder="your@email.com"
                defaultValue="ahmed.rahman@example.com"
              />

              <GlassInput
                label="Phone"
                id="phone"
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                defaultValue="+880 1712345678"
              />

              <GlassInput
                label="Address"
                id="address"
                type="text"
                placeholder="Your address"
                defaultValue="Dhaka, Bangladesh"
              />
            </div>

            <LiquidGlassButton type="submit" variant="primary" size="default">
              Save Changes
            </LiquidGlassButton>
          </form>
        </GlassCardContent>
      </GlassCard>

      {/* KYC Information */}
      <GlassCard className="animate-fade-in animation-delay-1500">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">KYC Information</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Complete KYC to increase investment limits</p>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="space-y-4">
            <div className="glass-bg rounded-glass p-4 border border-blue-500/20">
              <p className="text-sm text-gray-700 mb-3">
                <strong>Note:</strong> KYC verification is required to invest more than ৳50,000 per campaign.
              </p>
              <HoverButton variant="default">
                Upload KYC Documents
              </HoverButton>
            </div>
          </div>
        </GlassCardContent>
      </GlassCard>

      {/* Bank Details */}
      <GlassCard className="animate-fade-in animation-delay-2000">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Bank Details</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">For receiving profit shares</p>
        </GlassCardHeader>
        <GlassCardContent>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <GlassInput
                label="Bank Name"
                id="bankName"
                type="text"
                placeholder="e.g., Islami Bank Bangladesh"
              />

              <GlassInput
                label="Account Number"
                id="accountNumber"
                type="text"
                placeholder="XXXX-XXXX-XXXX"
              />

              <GlassInput
                label="Account Holder Name"
                id="accountHolder"
                type="text"
                placeholder="As per bank records"
              />

              <GlassInput
                label="Branch Name"
                id="branchName"
                type="text"
                placeholder="e.g., Motijheel"
              />
            </div>

            <div className="flex gap-3">
              <LiquidGlassButton type="submit" variant="primary" size="default">
                Save Bank Details
              </LiquidGlassButton>
              <HoverButton type="button" variant="ghost" size="default">
                Skip for Now
              </HoverButton>
            </div>
          </form>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}
