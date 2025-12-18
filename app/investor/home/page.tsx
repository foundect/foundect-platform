"use client";

import { Compass, LayoutDashboard, Info, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function InvestorHomePage() {
  const [showRiskTooltip, setShowRiskTooltip] = useState<number | null>(null);

  // Mock data for promising opportunities
  const opportunities = [
    {
      id: 1,
      businessName: "Green Textile Manufacturing",
      category: "Manufacturing",
      location: "Dhaka",
      contractType: "Mudarabah",
      riskScore: 4,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d5a?w=400&h=250&fit=crop",
      logo: "GT"
    },
    {
      id: 2,
      businessName: "Organic Food Distribution",
      category: "Agriculture",
      location: "Chittagong",
      contractType: "Musharakah",
      riskScore: 3,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop",
      logo: "OF"
    },
    {
      id: 3,
      businessName: "Tech Solutions Hub",
      category: "Technology",
      location: "Sylhet",
      contractType: "Murabaha",
      riskScore: 5,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      logo: "TS"
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-8">
      {/* ========================================
          GREETING SECTION
      ======================================== */}
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Welcome, Ahmed
        </h1>
        <p className="text-slate-600 text-base md:text-lg">
          Discover Shari'ah-compliant investment opportunities tailored for you.
        </p>
      </div>

      {/* ========================================
          QUICK ACTIONS SECTION (ONLY 2 TILES)
      ======================================== */}
      <div className="animate-fade-in animation-delay-300">
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          {/* Explore Opportunities */}
          <Link href="/explore">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/20 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <span className="font-semibold text-slate-900 text-base">Explore Opportunities</span>
              </div>
            </div>
          </Link>

          {/* Dashboard */}
          <Link href="/investor/dashboard">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/20 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <LayoutDashboard className="h-8 w-8 text-white" />
                </div>
                <span className="font-semibold text-slate-900 text-base">Dashboard</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ========================================
          PROMISING OPPORTUNITIES SECTION
      ======================================== */}
      <div className="animate-fade-in animation-delay-600">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Promising Opportunities</h2>
        
        {/* Horizontal scrollable container */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {opportunities.map((opportunity) => (
            <Link key={opportunity.id} href={`/explore/${opportunity.id}`}>
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all cursor-pointer min-w-[300px] md:min-w-[340px] snap-start">
                {/* Header with Logo and Badge */}
                <div className="p-4 flex items-start justify-between">
                  {/* Business Logo */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{opportunity.logo}</span>
                  </div>
                  
                  {/* Contract Type Badge */}
                  <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                    <span className="text-xs font-semibold text-[#0D3B66]">{opportunity.contractType}</span>
                  </div>
                </div>

                {/* Campaign Image */}
                <div className="px-4">
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-200">
                    <img 
                      src={opportunity.image} 
                      alt={opportunity.businessName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Business Info */}
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">{opportunity.businessName}</h3>
                  <p className="text-sm text-slate-600">
                    {opportunity.category} • {opportunity.location}
                  </p>

                  {/* Risk Score */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                    <span className="text-sm font-semibold text-slate-700">
                      Risk Level: {opportunity.riskScore} / 10
                    </span>
                    <div className="relative">
                      <button
                        onMouseEnter={() => setShowRiskTooltip(opportunity.id)}
                        onMouseLeave={() => setShowRiskTooltip(null)}
                        onClick={(e) => {
                          e.preventDefault();
                          setShowRiskTooltip(showRiskTooltip === opportunity.id ? null : opportunity.id);
                        }}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                      
                      {/* Tooltip */}
                      {showRiskTooltip === opportunity.id && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-slate-800 text-white text-xs rounded-lg p-3 shadow-xl z-10">
                          <p>Risk score is calculated based on business stability, market demand, and operational history.</p>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                            <div className="border-4 border-transparent border-t-slate-800"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ========================================
          PROMO / FEATURED BANNER
      ======================================== */}
      <div className="animate-fade-in animation-delay-900">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-[#3A8DFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Coming Soon</h3>
              <p className="text-sm text-slate-600">New ethical investment opportunities launching soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
