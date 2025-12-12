"use client";

import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassTextarea } from "@/components/ui/GlassTextarea";
import { GlassSelect } from "@/components/ui/GlassSelect";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { HoverButton } from "@/components/ui/hover-button";
import { Building2, Globe, MapPin, FileText } from "lucide-react";

export default function BusinessCompanyPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Company profile saved");
    // TODO: Save company profile to Supabase
  };

  const industries = [
    { value: "textile", label: "Textile & Garments" },
    { value: "agriculture", label: "Agriculture" },
    { value: "technology", label: "Technology" },
    { value: "food", label: "Food & Beverage" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="h-7 w-7 text-blue-500" />
          <h1 className="text-3xl font-bold text-text-900">Company Profile</h1>
        </div>
        <p className="text-gray-600">Manage your business information</p>
      </div>

      <GlassCard className="animate-fade-in animation-delay-500">
        <GlassCardHeader>
          <GlassCardTitle className="text-xl">Business Information</GlassCardTitle>
          <p className="text-gray-600 mt-1">Keep your company details up to date</p>
        </GlassCardHeader>
        <GlassCardContent>
          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <GlassInput
                label="Company Name"
                id="companyName"
                type="text"
                placeholder="Your Business Ltd."
                defaultValue="Green Textile Manufacturing"
              />

              <GlassSelect
                label="Industry"
                id="industry"
                options={industries}
                placeholder="Select industry"
                defaultValue="textile"
              />

              <GlassInput
                label="Registration Number"
                id="registrationNumber"
                type="text"
                placeholder="XXXXXXXX"
                defaultValue="12345678"
              />

              <GlassInput
                label="Registration Country"
                id="country"
                type="text"
                placeholder="Bangladesh"
                defaultValue="Bangladesh"
              />

              <GlassInput
                label="Website"
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
              />

              <GlassInput
                label="Contact Email"
                id="email"
                type="email"
                placeholder="contact@business.com"
                defaultValue="contact@greentextile.com"
              />
            </div>

            <GlassTextarea
              label="Company Description"
              id="description"
              placeholder="Describe your business..."
              rows={4}
              defaultValue="Leading sustainable textile manufacturer in Bangladesh, committed to eco-friendly production practices."
            />

            <GlassTextarea
              label="Address"
              id="address"
              placeholder="Full business address"
              rows={3}
              defaultValue="123 Industrial Area, Dhaka, Bangladesh"
            />

            <LiquidGlassButton type="submit" variant="primary" size="default">
              Save Company Profile
            </LiquidGlassButton>
          </form>
        </GlassCardContent>
      </GlassCard>

      <GlassCard className="animate-fade-in animation-delay-1000">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Business Documents</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Upload verification documents</p>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="space-y-3">
            <div className="glass-bg rounded-glass p-4 border border-blue-500/20">
              <p className="text-sm text-gray-700 mb-3">
                <strong>Required Documents:</strong> Trade license, Company registration certificate, Bank statement
              </p>
              <HoverButton variant="default" size="default">
                Upload Documents
              </HoverButton>
            </div>
          </div>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}
