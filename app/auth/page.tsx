"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { GlassInput } from "@/components/ui/GlassInput";
import { Building2, User, ArrowRight, Shield, Sparkles } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login submitted");
    
    // TODO: Implement Supabase authentication
    // Simulated login - redirect to investor dashboard after 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/investor/home");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Auth Form */}
        <div className="rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/40 shadow-xl p-8 md:p-10">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">
                {activeTab === "login" ? "Welcome Back" : "Get Started"}
              </h2>
            </div>
            <p className="text-gray-600">
              {activeTab === "login" 
                ? "Sign in to your Foundect account" 
                : "Choose your account type to begin"}
            </p>
          </div>

          <div>
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8 glass-bg rounded-pill p-1">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 px-4 rounded-pill text-sm font-medium transition-all ${
                activeTab === "login"
                  ? "bg-gradient-to-r from-blue-500 to-accent-1 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2 px-4 rounded-pill text-sm font-medium transition-all ${
                activeTab === "signup"
                  ? "bg-gradient-to-r from-blue-500 to-accent-1 text-white shadow-md"
                  : "text-text-900 hover:text-blue-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="space-y-5 animate-fade-in">
              <div className="space-y-2">
                <label htmlFor="login-email" className="text-sm font-medium text-slate-900">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-white/40 border border-white/20 shadow-inner rounded-xl px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="login-password" className="text-sm font-medium text-slate-900">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full bg-white/40 border border-white/20 shadow-inner rounded-xl px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex justify-end">
                <Link href="#" className="text-sm text-blue-500 hover:text-blue-600">
                  Forgot password?
                </Link>
              </div>

              <LiquidGlassButton
                type="submit"
                variant="default"
                size="default"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </LiquidGlassButton>

              <p className="text-xs text-center text-gray-500">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("signup")}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Sign up
                </button>
              </p>
            </form>
          )}

          {/* Signup - Account Type Selection */}
          {activeTab === "signup" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-center text-sm text-gray-600 mb-6">
                Choose your account type to continue:
              </p>

              <Link href="/auth/investor">
                <GlassCard className="p-6 cursor-pointer hover:scale-[1.02] transition-transform group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-pill glass-bg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <User className="h-7 w-7 text-blue-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-text-900 mb-1">Individual Investor</h3>
                      <p className="text-sm text-gray-600">
                        Invest in halal SME campaigns
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </GlassCard>
              </Link>

              <Link href="/auth/business">
                <GlassCard className="p-6 cursor-pointer hover:scale-[1.02] transition-transform group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-pill glass-bg flex items-center justify-center group-hover:bg-accent-1 transition-colors">
                      <Building2 className="h-7 w-7 text-accent-1 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-text-900 mb-1">Business / SME</h3>
                      <p className="text-sm text-gray-600">
                        Raise halal funding for your business
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-accent-1 transition-colors" />
                  </div>
                </GlassCard>
              </Link>

              <p className="text-xs text-center text-gray-500 mt-6">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Login
                </button>
              </p>
            </div>
          )}
          </div>
        </div>

      {/* Right Side - Decorative/Info */}
      <div className="hidden md:block relative">
        <div className="rounded-3xl bg-gradient-to-br from-blue-500/20 via-accent-1/20 to-blue-500/20 backdrop-blur-2xl border border-white/30 p-8 h-full min-h-[500px] flex flex-col justify-center">
        <div className="space-y-6">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-pill glass-bg border border-white/30 text-sm font-medium text-blue-500">
              <Sparkles className="h-4 w-4 text-accent-1" />
              Trusted by thousands
            </span>
            <h2 className="text-4xl font-bold mb-4 text-text-900">
              Join the Halal Investment Revolution
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Connect with Shari'ah-compliant opportunities and support local businesses while earning ethical returns.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in animation-delay-500">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-pill glass-bg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-text-900 mb-1">100% Shari'ah-Compliant</h4>
                <p className="text-sm text-gray-600">All investments verified to be halal and interest-free</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-pill glass-bg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-text-900 mb-1">Transparent & Secure</h4>
                <p className="text-sm text-gray-600">Full visibility into where your funds are going</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-pill glass-bg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-text-900 mb-1">Support Local SMEs</h4>
                <p className="text-sm text-gray-600">Help businesses grow while earning profit shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

