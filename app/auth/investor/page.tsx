"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassInput } from "@/components/ui/GlassInput";
import { User, ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react";

export default function InvestorSignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("Investor signup submitted:", formData);
    
    // TODO: Implement Supabase authentication with investor role
    // Simulated signup
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Redirect to investor dashboard
    router.push("/investor/home");
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <GlassCard className="p-8 md:p-10">
        <GlassCardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-pill glass-bg flex items-center justify-center">
              <User className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <GlassCardTitle className="text-2xl">Investor Sign Up</GlassCardTitle>
              <p className="text-sm text-gray-600">Step {step} of 2</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-pill h-2 mt-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-accent-1 h-2 rounded-pill transition-all duration-500"
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>
        </GlassCardHeader>

        <GlassCardContent>
          <form onSubmit={handleNextStep} className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-text-900 mb-2">Personal Information</h3>
                  <p className="text-sm text-gray-600">Tell us about yourself</p>
                </div>

                <GlassInput
                  label="Full Name"
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                />

                <GlassInput
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />

                <GlassInput
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="+880 1XXX-XXXXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />

                <div className="flex items-start gap-2 glass-bg rounded-glass p-3 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p>Your information is secure and will only be used for account verification.</p>
                </div>
              </div>
            )}

            {/* Step 2: Account Security */}
            {step === 2 && (
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
                      . I confirm that all investments will be made in accordance with Shari'ah principles.
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
                icon={step === 2 ? <CheckCircle className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
              >
                {isLoading ? "Creating Account..." : step === 2 ? "Create Account" : "Continue"}
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

