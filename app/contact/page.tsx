"use client";

import { useState } from "react";
import { PublicHeader } from "@/components/layouts/PublicHeader";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassTextarea } from "@/components/ui/GlassTextarea";
import { GlassSelect } from "@/components/ui/GlassSelect";
import { GlassNavBar } from "@/components/ui/GlassNavBar";
import { AIChatDrawer } from "@/components/ui/AIChatDrawer";
import { Mail, MessageSquare, Phone, Send, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [aiDrawerOpen, setAIDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Contact form submitted");
    // TODO: Implement contact form backend (email service or Supabase)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    alert("Thank you for your message! We'll get back to you soon.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
      
      <PublicHeader />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-accent-1 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <GlassCard className="p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-pill glass-bg mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <GlassCardTitle className="text-lg mb-2">Email</GlassCardTitle>
              <p className="text-sm text-gray-600">support@foundect.com</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-pill glass-bg mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-blue-500" />
              </div>
              <GlassCardTitle className="text-lg mb-2">Phone</GlassCardTitle>
              <p className="text-sm text-gray-600">+880 1XXX-XXXXXX</p>
            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-pill glass-bg mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <GlassCardTitle className="text-lg mb-2">Support Hours</GlassCardTitle>
              <p className="text-sm text-gray-600">24/7 Online Support</p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 md:p-10">
            <GlassCardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="h-6 w-6 text-blue-500" />
                <GlassCardTitle className="text-2xl">Send us a message</GlassCardTitle>
              </div>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </GlassCardHeader>
            <GlassCardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <GlassInput
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />

                  <GlassInput
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <GlassSelect
                  label="Topic"
                  id="topic"
                  options={[
                    { value: "general", label: "General Inquiry" },
                    { value: "investor", label: "Investor Support" },
                    { value: "business", label: "Business Listing" },
                    { value: "technical", label: "Technical Issue" },
                    { value: "partnership", label: "Partnership Opportunity" },
                  ]}
                  placeholder="Select a topic"
                  required
                />

                <GlassTextarea
                  label="Message"
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  required
                />

                <GlassButton 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  loading={loading}
                  icon={<Send className="h-5 w-5" />}
                >
                  {loading ? "Sending..." : "Send Message"}
                </GlassButton>

                <p className="text-xs text-center text-gray-500">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </GlassCardContent>
          </GlassCard>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-900 mb-2">Office Location</h3>
                  <p className="text-sm text-gray-600">
                    Dhaka, Bangladesh<br />
                    (Full address coming soon)
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-900 mb-2">Quick Response</h3>
                  <p className="text-sm text-gray-600">
                    For urgent inquiries, please use our AI chat assistant available 24/7 on all pages.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <GlassNavBar onAIClick={() => setAIDrawerOpen(true)} />
      
      {/* AI Chat Drawer */}
      <AIChatDrawer open={aiDrawerOpen} onClose={() => setAIDrawerOpen(false)} />
    </div>
  );
}

