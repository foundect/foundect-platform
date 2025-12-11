"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassSelect } from "@/components/ui/GlassSelect";
import { GlassTextarea } from "@/components/ui/GlassTextarea";
import { Building2, ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react";

export default function BusinessSignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    industry: "",
    description: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("Business signup submitted:", formData);
    
    // TODO: Implement Supabase authentication with business role
    // Simulated signup
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Redirect to business dashboard
    router.push("/business/home");
    setIsLoading(false);
  };

  const industries = [
    { value: "textile", label: "Textile & Garments" },
    { value: "agriculture", label: "Agriculture" },
    { value: "technology", label: "Technology" },
    { value: "food", label: "Food & Beverage" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail" },
    { value: "services", label: "Services" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <GlassCard className="p-8 md:p-10">
        <GlassCardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-pill glass-bg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-accent-1" />
            </div>
            <div>
              <GlassCardTitle className="text-2xl">Business Sign Up</GlassCardTitle>
              <p className="text-sm text-gray-600">Step {step} of 3</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-pill h-2 mt-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-accent-1 h-2 rounded-pill transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </GlassCardHeader>

        <GlassCardContent>
          <form onSubmit={handleNextStep} className="space-y-6">
            {/* Step 1: Business Information */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-text-900 mb-2">Business Information</h3>
                  <p className="text-sm text-gray-600">Tell us about your business</p>
                </div>

                <GlassInput
                  label="Business Name"
                  id="businessName"
                  type="text"
                  placeholder="Your Business Ltd."
                  value={formData.businessName}
                  onChange={(e) => handleInputChange("businessName", e.target.value)}
                  required
                />

                <GlassSelect
                  label="Industry"
                  id="industry"
                  options={industries}
                  placeholder="Select your industry"
                  value={formData.industry}
                  onChange={(e) => handleInputChange("industry", e.target.value)}
                  required
                />

                <GlassTextarea
                  label="Business Description"
                  id="description"
                  placeholder="Briefly describe your business and what you do..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                />

                <div className="flex items-start gap-2 glass-bg rounded-glass p-3 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p>All businesses undergo Shari'ah compliance review before listing campaigns.</p>
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-text-900 mb-2">Contact Information</h3>
                  <p className="text-sm text-gray-600">How can we reach you?</p>
                </div>

                <GlassInput
                  label="Business Email"
                  id="email"
                  type="email"
                  placeholder="contact@yourbusiness.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />

                <GlassInput
                  label="Business Phone"
                  id="phone"
                  type="tel"
                  placeholder="+880 1XXX-XXXXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />

                <div className="glass-bg rounded-glass p-4">
                  <p className="text-sm text-gray-600">
                    <strong className="text-text-900">Note:</strong> This contact information will be used for 
                    verification and communication regarding your funding campaigns.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Account Security */}
            {step === 3 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-text-900 mb-2">Account Security</h3>
                  <p className="text-sm text-gray-600">Create a strong password</p>
                </div>

                <GlassInput
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  required
                />

                <GlassInput
                  label="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  required
                />

                <div className="glass-bg rounded-glass p-4 space-y-2">
                  <p className="text-sm font-medium text-text-900 mb-2">Password Requirements:</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>At least 8 characters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Include uppercase and lowercase letters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Include at least one number</span>
                    </div>
                  </div>
                </div>

                <div className="glass-bg rounded-glass p-3 border border-blue-500/20">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1" />
                    <span className="text-xs text-gray-600">
                      I agree to Foundect's{" "}
                      <Link href="#" className="text-blue-500 hover:text-blue-600">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-blue-500 hover:text-blue-600">
                        Privacy Policy
                      </Link>
                      . I confirm that my business operates in accordance with Shari'ah principles and will provide 
                      accurate information for all funding campaigns.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {step > 1 ? (
                <GlassButton
                  type="button"
                  variant="ghost"
                  size="lg"
                  onClick={() => setStep(step - 1)}
                  icon={<ArrowLeft className="h-5 w-5" />}
                  className="flex-1"
                >
                  Back
                </GlassButton>
              ) : (
                <Link href="/auth" className="flex-1">
                  <GlassButton
                    type="button"
                    variant="ghost"
                    size="lg"
                    icon={<ArrowLeft className="h-5 w-5" />}
                    className="w-full"
                  >
                    Back
                  </GlassButton>
                </Link>
              )}

              <GlassButton
                type="submit"
                variant="primary"
                size="lg"
                className="flex-1"
                loading={isLoading}
                icon={step === 3 ? <CheckCircle className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
              >
                {isLoading ? "Creating Account..." : step === 3 ? "Create Account" : "Continue"}
              </GlassButton>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              Already have an account?{" "}
              <Link href="/auth" className="text-blue-500 hover:text-blue-600 font-medium">
                Login
              </Link>
            </p>
          </form>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}

