"use client";

import { Plus, Compass, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BusinessHomePage() {
  // Mock data - replace with real data later
  const businessName = "Green Textile Manufacturing";
  const hasCampaigns = true; // Set to false to test empty state

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-8">
      {/* ========================================
          GREETING SECTION
      ======================================== */}
      <div className="animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
          Welcome back, {businessName}
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-snug">
          Manage your campaigns, track progress, and explore new opportunities
        </p>
      </div>

      {/* ========================================
          PRIMARY ACTION TILES (2 LARGE TILES)
      ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in animation-delay-200">
        {/* Create New Campaign */}
        <Link href="/business/listings">
          <div className="group relative bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plus className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Create New Campaign</h3>
              <p className="text-white/80 text-xs md:text-sm mb-3">
                Launch a new funding campaign and reach potential investors
              </p>
              <div className="flex items-center text-white font-medium text-xs md:text-sm">
                Get Started <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* Explore Opportunities */}
        <Link href="/explore">
          <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-5 md:p-6 shadow-md border border-white/40 hover:shadow-lg transition-all cursor-pointer overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-200/30 to-blue-200/30 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Compass className="h-5 w-5 md:h-6 md:w-6 text-[#0D3B66]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5">Explore Opportunities</h3>
              <p className="text-slate-600 text-xs md:text-sm mb-3">
                Invest in other Shari'ah-compliant businesses and diversify
              </p>
              <div className="flex items-center text-[#0D3B66] font-medium text-xs md:text-sm">
                Browse Now <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ========================================
          YOUR CAMPAIGNS SECTION
      ======================================== */}
      <div className="animate-fade-in animation-delay-400">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Your Campaigns</h2>
          <Link href="/business/listings">
            <button className="text-sm text-[#3A8DFF] hover:text-[#0D3B66] font-medium transition-colors">
              View All
            </button>
          </Link>
        </div>

        {hasCampaigns ? (
          <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
            <div className="flex gap-4 pb-2">
              {/* Campaign Card 1 */}
              <CampaignCard
                logo="/foundect-logo.png"
                coverImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500"
                businessName="Green Textile Manufacturing"
                campaignType="Mudarabah"
                riskScore={7}
                fundingProgress={65}
                investorCount={32}
                href="/business/listings"
              />

              {/* Campaign Card 2 */}
              <CampaignCard
                logo="/foundect-logo.png"
                coverImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
                businessName="Sustainable Packaging Solutions"
                campaignType="Musharakah"
                riskScore={5}
                fundingProgress={42}
                investorCount={18}
                href="/business/listings"
              />

              {/* Campaign Card 3 */}
              <CampaignCard
                logo="/foundect-logo.png"
                coverImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500"
                businessName="Tech Innovation Hub"
                campaignType="Murabaha"
                riskScore={6}
                fundingProgress={28}
                investorCount={12}
                href="/business/listings"
              />
            </div>
          </div>
        ) : (
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/40">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Plus className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No Campaigns Created</h3>
            <p className="text-slate-600 text-sm mb-6">
              Start your first campaign and connect with investors
            </p>
            <Link href="/business/listings">
              <button className="px-6 py-3 bg-gradient-to-r from-[#0D3B66] to-[#3A8DFF] text-white rounded-xl font-medium hover:shadow-lg transition-all">
                Create Now
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* ========================================
          PROMISING OPPORTUNITIES (TO INVEST)
      ======================================== */}
      <div className="animate-fade-in animation-delay-600">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Promising Opportunities</h2>
          <Link href="/explore">
            <button className="text-sm text-[#3A8DFF] hover:text-[#0D3B66] font-medium transition-colors">
              Explore All
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
          <div className="flex gap-4 pb-2">
            {/* Opportunity Card 1 */}
            <CampaignCard
              logo="/foundect-logo.png"
              coverImage="https://images.unsplash.com/photo-1560472355-536de3962603?w=500"
              businessName="Organic Food Distribution"
              campaignType="Mudarabah"
              riskScore={4}
              fundingProgress={78}
              investorCount={45}
              href="/explore"
            />

            {/* Opportunity Card 2 */}
            <CampaignCard
              logo="/foundect-logo.png"
              coverImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500"
              businessName="EdTech Platform"
              campaignType="Musharakah"
              riskScore={6}
              fundingProgress={55}
              investorCount={28}
              href="/explore"
            />

            {/* Opportunity Card 3 */}
            <CampaignCard
              logo="/foundect-logo.png"
              coverImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500"
              businessName="Clean Energy Solutions"
              campaignType="Murabaha"
              riskScore={5}
              fundingProgress={89}
              investorCount={67}
              href="/explore"
            />
          </div>
        </div>
      </div>

      {/* ========================================
          RECENT ACTIVITY
      ======================================== */}
      <div className="animate-fade-in animation-delay-800">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-slate-600" />
          <h2 className="text-xl font-bold text-slate-900">Recent Activity</h2>
        </div>

        <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 space-y-4">
          {/* Activity Item 1 */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/50 last:border-0 last:pb-0">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="font-semibold text-slate-900 text-sm">New investment received</p>
              </div>
              <p className="text-xs text-slate-500 ml-4">Green Textile Manufacturing • 1 hour ago</p>
            </div>
            <span className="text-sm font-bold text-green-600 whitespace-nowrap">+৳25,000</span>
          </div>

          {/* Activity Item 2 */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/50 last:border-0 last:pb-0">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <p className="font-semibold text-slate-900 text-sm">Campaign milestone reached</p>
              </div>
              <p className="text-xs text-slate-500 ml-4">50% funding goal achieved • 2 days ago</p>
            </div>
            <span className="text-sm font-bold text-blue-600 whitespace-nowrap">50%</span>
          </div>

          {/* Activity Item 3 */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/50 last:border-0 last:pb-0">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <p className="font-semibold text-slate-900 text-sm">New investor joined</p>
              </div>
              <p className="text-xs text-slate-500 ml-4">Sustainable Packaging Solutions • 3 days ago</p>
            </div>
            <span className="text-sm font-bold text-slate-600 whitespace-nowrap">+1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CAMPAIGN CARD COMPONENT
// ========================================
interface CampaignCardProps {
  logo: string;
  coverImage: string;
  businessName: string;
  campaignType: "Mudarabah" | "Musharakah" | "Murabaha";
  riskScore: number;
  fundingProgress: number;
  investorCount: number;
  href: string;
}

function CampaignCard({
  logo,
  coverImage,
  businessName,
  campaignType,
  riskScore,
  fundingProgress,
  investorCount,
  href,
}: CampaignCardProps) {
  const typeColors = {
    Mudarabah: "bg-blue-100 text-blue-700",
    Musharakah: "bg-purple-100 text-purple-700",
    Murabaha: "bg-green-100 text-green-700",
  };

  return (
    <Link href={href}>
      <div className="group min-w-[280px] max-w-[280px] bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 hover:shadow-xl transition-all cursor-pointer overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-32 overflow-hidden">
          <Image
            src={coverImage}
            alt={businessName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Logo Overlay */}
          <div className="absolute bottom-2 left-2 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden">
            <Image src={logo} alt={businessName} fill className="object-contain p-1" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-slate-900 text-sm mb-2 line-clamp-1">{businessName}</h3>

          {/* Type Badge & Risk Score */}
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${typeColors[campaignType]}`}>
              {campaignType}
            </span>
            <span className="text-xs text-slate-600">
              Risk: <span className="font-bold text-slate-900">{riskScore}/10</span>
            </span>
          </div>

          {/* Funding Progress */}
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
              <span>Funded</span>
              <span className="font-bold text-slate-900">{fundingProgress}%</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0D3B66] to-[#3A8DFF] rounded-full transition-all"
                style={{ width: `${fundingProgress}%` }}
              />
            </div>
          </div>

          {/* Investors Count */}
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <Users className="h-3 w-3" />
            <span>{investorCount} investors</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
