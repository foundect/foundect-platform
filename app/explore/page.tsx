"use client";

import { useState } from "react";
import Image from "next/image";
import { PublicHeader } from "@/components/layouts/PublicHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { Search, Info } from "lucide-react";

// Dummy campaign data with enhanced details
const campaigns = [
  {
    id: 1,
    name: "Green Textile Manufacturing",
    businessName: "Green Textile Ltd.",
    sector: "Textile",
    location: "Dhaka, Bangladesh",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    status: "Open",
    expectedReturn: "12–15%",
    duration: "24 months",
    investors: 48,
    riskScore: 3,
    riskLevel: "Low",
    shariahStructure: "Mudarabah",
    logo: "https://ui-avatars.com/api/?name=Green+Textile&background=10b981&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800&h=400&fit=crop",
    fundingStage: "Mid-stage",
  },
  {
    id: 2,
    name: "Organic Food Distribution Network",
    businessName: "Fresh Harvest Co.",
    sector: "Agriculture",
    location: "Chittagong, Bangladesh",
    targetAmount: 3000000,
    raisedAmount: 2800000,
    status: "Almost Funded",
    expectedReturn: "10–12%",
    duration: "18 months",
    investors: 62,
    riskScore: 4,
    riskLevel: "Low",
    shariahStructure: "Musharakah",
    logo: "https://ui-avatars.com/api/?name=Fresh+Harvest&background=22c55e&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=400&fit=crop",
    fundingStage: "Near completion",
  },
  {
    id: 3,
    name: "Tech Solutions Hub",
    businessName: "TechHub Bangladesh",
    sector: "Technology",
    location: "Dhaka, Bangladesh",
    targetAmount: 8000000,
    raisedAmount: 1500000,
    status: "Early Stage",
    expectedReturn: "15–18%",
    duration: "36 months",
    investors: 23,
    riskScore: 6,
    riskLevel: "Moderate",
    shariahStructure: "Mudarabah",
    logo: "https://ui-avatars.com/api/?name=TechHub&background=3b82f6&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    fundingStage: "Early",
  },
  {
    id: 4,
    name: "Halal Restaurant Chain Expansion",
    businessName: "Barakah Foods",
    sector: "Food & Beverage",
    location: "Sylhet, Bangladesh",
    targetAmount: 4000000,
    raisedAmount: 2600000,
    status: "Open",
    expectedReturn: "14–16%",
    duration: "24 months",
    investors: 55,
    riskScore: 5,
    riskLevel: "Moderate",
    shariahStructure: "Musharakah",
    logo: "https://ui-avatars.com/api/?name=Barakah+Foods&background=f59e0b&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop",
    fundingStage: "Mid-stage",
  },
  {
    id: 5,
    name: "E-commerce Platform for Artisans",
    businessName: "Crafted Bangladesh",
    sector: "Technology",
    location: "Dhaka, Bangladesh",
    targetAmount: 6000000,
    raisedAmount: 800000,
    status: "Early Stage",
    expectedReturn: "16–20%",
    duration: "30 months",
    investors: 15,
    riskScore: 7,
    riskLevel: "Moderate",
    shariahStructure: "Mudarabah",
    logo: "https://ui-avatars.com/api/?name=Crafted+BD&background=8b5cf6&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    fundingStage: "Early",
  },
  {
    id: 6,
    name: "Sustainable Packaging Solutions",
    businessName: "EcoPack Industries",
    sector: "Manufacturing",
    location: "Gazipur, Bangladesh",
    targetAmount: 3500000,
    raisedAmount: 2100000,
    status: "Open",
    expectedReturn: "11–13%",
    duration: "20 months",
    investors: 41,
    riskScore: 4,
    riskLevel: "Low",
    shariahStructure: "Murabaha",
    logo: "https://ui-avatars.com/api/?name=EcoPack&background=059669&color=fff&size=80",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop",
    fundingStage: "Mid-stage",
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

  const formatCurrency = (amount: number) => {
    return `৳${(amount / 100000).toFixed(0)}L`;
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";
      case "Almost Funded":
        return "bg-blue-50 text-blue-700 border border-blue-200";
      case "Early Stage":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      default:
        return "bg-gray-50 text-gray-700 border border-gray-200";
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "Low":
        return "text-emerald-600";
      case "Moderate":
        return "text-amber-600";
      case "High":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const sectors = ["All", "Textile", "Agriculture", "Technology", "Food & Beverage", "Manufacturing"];

  // Filter campaigns based on search and sector
  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.businessName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === "All" || campaign.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f2ff]/70 via-[#f7fbff]/40 to-[#e8f2ff]/70 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl -z-10" />
      
      <PublicHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Explore Campaigns
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Browse Shari'ah-compliant investment opportunities from verified SMEs
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 space-y-4 sm:space-y-5">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Sector Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSector === sector
                    ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign List - Vertical Layout */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {filteredCampaigns.map((campaign) => (
            <GlassCard key={campaign.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-4 sm:p-6 space-y-4">
                {/* 1. Header Row: Logo + Name + Status */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                    <Image
                      src={campaign.logo}
                      alt={campaign.businessName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-0.5 truncate">
                      {campaign.businessName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {campaign.sector} • {campaign.location}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${getStatusBadgeStyle(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </div>

                {/* 2. Campaign Image */}
                <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden">
                  <Image
                    src={campaign.image}
                    alt={campaign.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 3. Micro-Badge (Shari'ah Structure) */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                    {campaign.shariahStructure}
                  </span>
                </div>

                {/* 4. Risk Indicator */}
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700">
                        Risk Level: <span className="font-semibold">{campaign.riskScore} / 10</span>
                      </span>
                      <span className={`text-sm font-medium ${getRiskLevelColor(campaign.riskLevel)}`}>
                        ({campaign.riskLevel})
                      </span>
                      <div className="relative">
                        <button
                          onMouseEnter={() => setShowTooltip(campaign.id)}
                          onMouseLeave={() => setShowTooltip(null)}
                          onClick={() => setShowTooltip(showTooltip === campaign.id ? null : campaign.id)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Info className="h-4 w-4" />
                        </button>
                        {showTooltip === campaign.id && (
                          <div className="absolute left-0 top-6 z-10 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg">
                            Based on business maturity, sector stability, and cash flow predictability.
                            <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Funding Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-medium">
                      {getProgressPercentage(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}% funded
                    </span>
                    <span className="text-xs text-gray-500 px-2 py-1 bg-gray-50 rounded-full">
                      {campaign.fundingStage}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{
                        width: `${getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {formatCurrency(campaign.raisedAmount)} raised • {formatCurrency(campaign.targetAmount)} goal
                  </p>
                </div>

                {/* 6. Investment Snapshot (Inline) */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 py-3 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Expected Return</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{campaign.expectedReturn}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Duration</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{campaign.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Investors</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{campaign.investors} investors</p>
                  </div>
                </div>

                {/* 7. Call to Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <LiquidGlassButton
                    variant="primary"
                    size="default"
                    className="flex-1"
                    onClick={() => console.log(`Invest in campaign ${campaign.id}`)}
                  >
                    Invest Now
                  </LiquidGlassButton>
                  <button
                    onClick={() => console.log(`View details ${campaign.id}`)}
                    className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <GlassCard className="max-w-md mx-auto p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 text-sm">Try adjusting your search or filters</p>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
}

