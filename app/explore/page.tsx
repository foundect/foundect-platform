"use client";

import { useState } from "react";
import { PublicHeader } from "@/components/layouts/PublicHeader";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent, GlassCardFooter } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassNavBar } from "@/components/ui/GlassNavBar";
import { AIChatDrawer } from "@/components/ui/AIChatDrawer";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Filter, Search, Clock } from "lucide-react";

// Dummy campaign data
const campaigns = [
  {
    id: 1,
    name: "Green Textile Manufacturing",
    sector: "Textile",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    status: "Open",
    expectedReturn: "12-15%",
    duration: "24 months",
  },
  {
    id: 2,
    name: "Organic Food Distribution",
    sector: "Agriculture",
    targetAmount: 3000000,
    raisedAmount: 2800000,
    status: "Open",
    expectedReturn: "10-12%",
    duration: "18 months",
  },
  {
    id: 3,
    name: "Tech Solutions Hub",
    sector: "Technology",
    targetAmount: 8000000,
    raisedAmount: 1500000,
    status: "Open",
    expectedReturn: "15-18%",
    duration: "36 months",
  },
  {
    id: 4,
    name: "Halal Restaurant Chain Expansion",
    sector: "Food & Beverage",
    targetAmount: 4000000,
    raisedAmount: 4000000,
    status: "Funded",
    expectedReturn: "14-16%",
    duration: "24 months",
  },
  {
    id: 5,
    name: "E-commerce Platform",
    sector: "Technology",
    targetAmount: 6000000,
    raisedAmount: 0,
    status: "Coming Soon",
    expectedReturn: "16-20%",
    duration: "30 months",
  },
  {
    id: 6,
    name: "Sustainable Packaging Solutions",
    sector: "Manufacturing",
    targetAmount: 3500000,
    raisedAmount: 2100000,
    status: "Open",
    expectedReturn: "11-13%",
    duration: "20 months",
  },
];

export default function ExplorePage() {
  const [aiDrawerOpen, setAIDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");

  const formatCurrency = (amount: number) => {
    return `৳${(amount / 100000).toFixed(1)}L`;
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Funded":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  const sectors = ["All", "Textile", "Agriculture", "Technology", "Food & Beverage", "Manufacturing"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      
      <PublicHeader />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-accent-1 bg-clip-text text-transparent">
            Explore Campaigns
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Browse Shari'ah-compliant investment opportunities from verified SMEs
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input w-full pl-12"
              />
            </div>
          </div>

          {/* Sector Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`glass-nav-item px-4 py-2 text-sm transition-all ${
                  selectedSector === sector ? "active" : ""
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {campaigns.map((campaign) => (
            <GlassCard key={campaign.id} className="flex flex-col hover:scale-[1.02] transition-transform">
              <GlassCardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-blue-50 rounded-glass">
                    <Building2 className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className={`glass-bg rounded-pill px-3 py-1 text-xs font-medium border ${getStatusColor(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </div>
                <GlassCardTitle className="text-lg mb-1">{campaign.name}</GlassCardTitle>
                <p className="text-sm text-gray-600">{campaign.sector}</p>
              </GlassCardHeader>

              <GlassCardContent className="flex-grow space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-blue-500">
                      {getProgressPercentage(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-pill h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-accent-1 h-2 rounded-pill transition-all duration-500"
                      style={{
                        width: `${getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatCurrency(campaign.raisedAmount)} raised</span>
                    <span>{formatCurrency(campaign.targetAmount)} goal</span>
                  </div>
                </div>

                {/* Expected Return */}
                <div className="flex items-center gap-2 glass-bg rounded-glass p-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-600">Expected Return</p>
                    <p className="font-semibold text-green-600">{campaign.expectedReturn}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{campaign.duration}</span>
                </div>
              </GlassCardContent>

              <GlassCardFooter>
                <GlassButton
                  variant={campaign.status === "Open" ? "primary" : "ghost"}
                  className="w-full"
                  disabled={campaign.status !== "Open"}
                  onClick={() => console.log(`View campaign ${campaign.id}`)}
                >
                  {campaign.status === "Open" ? "View Details" : campaign.status}
                </GlassButton>
              </GlassCardFooter>
            </GlassCard>
          ))}
        </div>

        {/* Empty State (if no results) */}
        {campaigns.length === 0 && (
          <div className="text-center py-12">
            <GlassCard className="max-w-md mx-auto p-8">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 text-sm">Try adjusting your search or filters</p>
            </GlassCard>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <GlassNavBar onAIClick={() => setAIDrawerOpen(true)} />
      
      {/* AI Chat Drawer */}
      <AIChatDrawer open={aiDrawerOpen} onClose={() => setAIDrawerOpen(false)} />
    </div>
  );
}

