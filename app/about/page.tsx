"use client";

import { useState } from "react";
import { PublicHeader } from "@/components/layouts/PublicHeader";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassTile } from "@/components/ui/GlassTile";
import { GlassNavBar } from "@/components/ui/GlassNavBar";
import { AIChatDrawer } from "@/components/ui/AIChatDrawer";
import { Shield, Heart, TrendingUp, Users, CheckCircle, Sparkles, Target, Award } from "lucide-react";

export default function AboutPage() {
  const [aiDrawerOpen, setAIDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
      
      <PublicHeader />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-pill glass-bg border border-white/30 text-sm font-medium text-blue-500">
            <Sparkles className="h-4 w-4 text-accent-1" />
            About Foundect
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-accent-1 bg-clip-text text-transparent">
            Building Bangladesh's First Shari'ah-Aligned Investment Platform
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connecting ethical investors with halal SME opportunities, one campaign at a time.
          </p>
        </div>

        {/* Our Mission */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-900">Our Mission</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-accent-1 mx-auto rounded-pill" />
          </div>
          <GlassCard className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl" />
            <Target className="h-12 w-12 text-blue-500 mb-6 relative z-10" />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10">
              Foundect exists to <strong className="text-blue-500">democratize access to halal investment opportunities</strong> while empowering 
              SMEs across Bangladesh. We believe that ethical, Shari'ah-compliant finance should be 
              accessible to everyone – from micro-investors seeking halal returns to small businesses 
              needing growth capital without resorting to interest-based loans.
            </p>
          </GlassCard>
        </section>

        {/* Why Shari'ah-compliant */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-900">Why Shari'ah-Compliant?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-accent-1 mx-auto rounded-pill" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassTile
              title="No Riba (Interest)"
              description="All our funding mechanisms are structured to avoid interest-based transactions, adhering strictly to Islamic finance principles."
              icon={<Shield className="h-8 w-8" />}
              badge="VERIFIED"
            />

            <GlassTile
              title="Ethical Investments"
              description="We only list businesses that operate in halal sectors and follow ethical business practices aligned with Islamic values."
              icon={<Heart className="h-8 w-8" />}
            />

            <GlassTile
              title="Profit Sharing"
              description="Returns are based on profit-sharing arrangements (Mudarabah/Musharakah), where investors share in the actual business outcomes."
              icon={<TrendingUp className="h-8 w-8" />}
            />

            <GlassTile
              title="Community Impact"
              description="Every investment supports local businesses, creates jobs, and contributes to the economic development of Bangladesh."
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </section>

        {/* How Foundect Works */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-900">How Foundect Works</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-accent-1 mx-auto rounded-pill" />
          </div>
          <GlassCard className="p-8 md:p-10">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-pill glass-bg flex items-center justify-center text-blue-500 font-bold text-lg border border-blue-500/20">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-text-900">For Investors</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sign up, browse vetted campaigns, and invest in businesses you believe in. 
                    Track your portfolio and receive profit shares as businesses grow.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-pill glass-bg flex items-center justify-center text-blue-500 font-bold text-lg border border-blue-500/20">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-text-900">For Businesses</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Apply to list your funding campaign, undergo our Shari'ah compliance review, 
                    and connect with ethical investors who want to support your growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-pill glass-bg flex items-center justify-center text-blue-500 font-bold text-lg border border-blue-500/20">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-text-900">Transparent Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All campaigns include detailed business information, projected returns, 
                    and regular updates. We ensure full transparency throughout the investment lifecycle.
                  </p>
                </div>
              </div>

              <div className="glass-bg rounded-glass p-4 mt-6 border border-blue-500/20">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> This is an MVP (Minimum Viable Product). 
                  Payment processing is simulated, and we're currently focused on Bangladesh. 
                  Full functionality including Supabase integration and real transactions will be added in future releases.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Values */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-900">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-accent-1 mx-auto rounded-pill" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-pill glass-bg mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <GlassCardTitle className="mb-3">Integrity</GlassCardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                We operate with complete transparency and honesty in all our dealings.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-pill glass-bg mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
              <GlassCardTitle className="mb-3">Accessibility</GlassCardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                Making halal investing accessible to everyone, regardless of investment size.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-pill glass-bg mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-500" />
              </div>
              <GlassCardTitle className="mb-3">Community</GlassCardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building a community of ethical investors and entrepreneurs.
              </p>
            </GlassCard>
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <GlassNavBar onAIClick={() => setAIDrawerOpen(true)} />
      
      {/* AI Chat Drawer */}
      <AIChatDrawer open={aiDrawerOpen} onClose={() => setAIDrawerOpen(false)} />
    </div>
  );
}

