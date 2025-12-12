"use client";

import { useState } from "react";
import Link from "next/link";
import { PublicHeader } from "@/components/layouts/PublicHeader";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { HoverButton } from "@/components/ui/hover-button";
import { GlassTile } from "@/components/ui/GlassTile";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { ArrowRight, Building2, TrendingUp, Shield, Users, Sparkles, CheckCircle } from "lucide-react";

export default function BangladeshLandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f2ff]/70 via-[#f7fbff]/40 to-[#e8f2ff]/70 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10" />
      
      <PublicHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-bg rounded-pill px-4 py-2 mb-6 animate-float">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-text-900">Bangladesh's First Halal Investment Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-accent-1 bg-clip-text text-transparent leading-tight">
            Halal SME Investing for Everyone in Bangladesh
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with Shari'ah-compliant investment opportunities. Support local businesses, earn halal returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <LiquidGlassButton variant="primary" size="default" className="w-full sm:w-auto min-w-[200px]">
              Start Investing
            </LiquidGlassButton>
            <HoverButton variant="default" size="default" className="w-full sm:w-auto min-w-[200px]">
              Explore Campaigns
            </HoverButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>100% Shari'ah Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Verified SMEs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Transparent Returns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-900">Why Foundect?</h2>
          <p className="text-lg text-gray-600">
            Bangladesh's first Shari'ah-aligned digital platform connecting SMEs with micro-investors. 
            We facilitate halal funding without interest (riba), enabling ethical wealth growth for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <GlassTile
            title="100% Halal"
            description="All investments are Shari'ah-compliant with no interest, no riba, and no conventional lending."
            icon={<Shield className="h-6 w-6 text-blue-500" />}
            badge="VERIFIED"
          />
          
          <GlassTile
            title="Support SMEs"
            description="Help local businesses grow while earning expected profit shares from their success."
            icon={<Building2 className="h-6 w-6 text-blue-500" />}
          />
          
          <GlassTile
            title="Transparent Returns"
            description="Clear projected returns with full transparency on how your funds are being used."
            icon={<TrendingUp className="h-6 w-6 text-blue-500" />}
          />
        </div>
      </section>

      {/* For Investors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <GlassCard size="lg" className="p-8">
                <div className="inline-flex items-center gap-2 glass-bg rounded-pill px-3 py-1 mb-4">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-xs font-medium text-blue-500">For Investors</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-900">
                  Start Your Halal Investment Journey
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Start investing with as little as ৳1,000. Diversify your portfolio across multiple halal campaigns 
                  and earn expected profit shares aligned with Islamic finance principles.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "Low minimum investment amounts",
                    "Vetted Shari'ah-compliant opportunities",
                    "Track your portfolio in real-time",
                    "Transparent profit-sharing model"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-1 bg-blue-50 rounded-full mt-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/auth">
                  <LiquidGlassButton variant="primary" size="default" className="w-full sm:w-auto">
                    Start as Investor
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </LiquidGlassButton>
                </Link>
              </GlassCard>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="glass-card p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-accent-1/10" />
                <Users className="h-40 w-40 text-blue-500 opacity-20 relative z-10 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="glass-card p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-1/10 to-blue-500/10" />
                <Building2 className="h-40 w-40 text-blue-500 opacity-20 relative z-10 animate-float [animation-delay:0.5s]" />
              </div>
            </div>
            
            <div>
              <GlassCard size="lg" className="p-8">
                <div className="inline-flex items-center gap-2 glass-bg rounded-pill px-3 py-1 mb-4">
                  <Building2 className="h-4 w-4 text-blue-500" />
                  <span className="text-xs font-medium text-blue-500">For Businesses</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-900">
                  Raise Halal Funding for Your SME
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Access halal funding for your business growth without conventional loans. 
                  Raise capital through profit-sharing arrangements that align with Islamic principles.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "No interest-based loans",
                    "Flexible profit-sharing terms",
                    "Connect with ethical investors",
                    "Fast approval process"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-1 bg-blue-50 rounded-full mt-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/auth">
                  <LiquidGlassButton variant="primary" size="default" className="w-full sm:w-auto">
                    List Your Business
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </LiquidGlassButton>
                </Link>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard size="lg" className="max-w-4xl mx-auto text-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-accent-1/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-900">
                Ready to Start Your Halal Investment Journey?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of investors and businesses building ethical wealth through Shari'ah-compliant finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth">
                  <LiquidGlassButton variant="primary" size="default" className="w-full sm:w-auto">
                    Get Started Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </LiquidGlassButton>
                </Link>
                <Link href="/explore">
                  <HoverButton variant="default" size="default" className="w-full sm:w-auto">
                    Explore Opportunities
                  </HoverButton>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-bg border-t border-white/10 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-accent-1 bg-clip-text text-transparent mb-2">
                  Foundect
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Bangladesh's first Shari'ah-aligned digital platform for halal SME investing.
                </p>
                <div className="flex gap-2">
                  <div className="glass-bg rounded-pill px-3 py-1 text-xs text-gray-600">
                    100% Halal
                  </div>
                  <div className="glass-bg rounded-pill px-3 py-1 text-xs text-gray-600">
                    Verified
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-900 mb-3">Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/explore" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Explore Campaigns
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-900 mb-3">Get Started</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/auth" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6 text-center">
              <p className="text-gray-500 text-sm">
                © 2024 Foundect. All rights reserved. | Shari'ah-compliant investing platform
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
