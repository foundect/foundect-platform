"use client";

import { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Bell,
  Eye,
  Send,
  FileText,
  DollarSign,
  Target,
  Activity,
  CheckCircle2,
  Clock,
  Rocket,
  UserPlus,
  TrendingDown,
  Info,
} from "lucide-react";

// Dummy data for campaigns
const campaigns = [
  {
    id: 1,
    name: "Textile Manufacturing Expansion",
    businessName: "Dhaka Textile Mills",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=500",
    logo: "https://ui-avatars.com/api/?name=Dhaka+Textile&background=3b82f6&color=fff&size=128",
    type: "Mudarabah",
    risk: 6,
    raised: 3200000,
    target: 5000000,
    investors: 48,
    status: "Live",
  },
  {
    id: 2,
    name: "Organic Food Distribution Network",
    businessName: "Green Valley Foods",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500",
    logo: "https://ui-avatars.com/api/?name=Green+Valley&background=10b981&color=fff&size=128",
    type: "Musharakah",
    risk: 4,
    raised: 1800000,
    target: 2500000,
    investors: 32,
    status: "Live",
  },
  {
    id: 3,
    name: "Tech Equipment Procurement",
    businessName: "Digital Solutions Ltd",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
    logo: "https://ui-avatars.com/api/?name=Digital+Solutions&background=8b5cf6&color=fff&size=128",
    type: "Murabaha",
    risk: 3,
    raised: 5000000,
    target: 5000000,
    investors: 67,
    status: "Completed",
  },
];

// Dummy data for investor engagement
const investorInteractions = [
  {
    id: 1,
    investor: "Investor A***",
    campaign: "Textile Manufacturing Expansion",
    type: "Question",
    message: "What is the expected timeline for expansion completion?",
    time: "2 hours ago",
  },
  {
    id: 2,
    investor: "Investor M***",
    campaign: "Organic Food Distribution Network",
    type: "Comment",
    message: "Great progress on the distribution network!",
    time: "5 hours ago",
  },
  {
    id: 3,
    investor: "Investor R***",
    campaign: "Textile Manufacturing Expansion",
    type: "Question",
    message: "Can you provide more details on the machinery procurement?",
    time: "1 day ago",
  },
];

// Dummy data for recent activity
const recentActivity = [
  {
    id: 1,
    type: "milestone",
    icon: Target,
    description: "Textile Manufacturing reached 65% funding",
    time: "3 hours ago",
  },
  {
    id: 2,
    type: "investor",
    icon: UserPlus,
    description: "5 new investors joined Organic Food Distribution",
    time: "6 hours ago",
  },
  {
    id: 3,
    type: "update",
    icon: FileText,
    description: "Posted quarterly update for Tech Equipment campaign",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "launch",
    icon: Rocket,
    description: "Organic Food Distribution Network went live",
    time: "3 days ago",
  },
  {
    id: 5,
    type: "complete",
    icon: CheckCircle2,
    description: "Tech Equipment Procurement reached 100% funding",
    time: "5 days ago",
  },
];

export default function BusinessDashboard() {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  // Calculate total metrics
  const totalFundsRaised = campaigns.reduce((sum, c) => sum + c.raised, 0);
  const totalInvestors = campaigns.reduce((sum, c) => sum + c.investors, 0);
  const activeCampaigns = campaigns.filter((c) => c.status === "Live").length;

  const getRiskLabel = (risk: number) => {
    if (risk <= 3) return "Low";
    if (risk <= 6) return "Moderate";
    return "High";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      case "Draft":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Mudarabah":
        return "bg-purple-100 text-purple-700";
      case "Musharakah":
        return "bg-blue-100 text-blue-700";
      case "Murabaha":
        return "bg-teal-100 text-teal-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* 1️⃣ HEADER SECTION */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Dashboard
            </h1>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Active Business
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            Manage your campaigns, investors, and distributions
          </p>
        </div>

        {/* 2️⃣ KEY METRICS SUMMARY */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Business Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Active Campaigns */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-600">
                  Active Campaigns
                </p>
              </div>
              <p className="text-3xl font-bold text-gray-900">{activeCampaigns}</p>
              <p className="text-xs text-gray-500 mt-1">Currently live</p>
            </div>

            {/* Total Funds Raised */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-600">
                  Total Funds Raised
                </p>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                ৳{(totalFundsRaised / 100000).toFixed(1)}L
              </p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +12% this cycle
              </p>
            </div>

            {/* Total Investors */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-600">
                  Total Investors
                </p>
              </div>
              <p className="text-3xl font-bold text-gray-900">{totalInvestors}</p>
              <p className="text-xs text-gray-500 mt-1">Across all campaigns</p>
            </div>

            {/* Next Profit Cycle */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-600">
                  Next Profit Cycle
                </p>
              </div>
              <p className="text-2xl font-bold text-gray-900">Jan 15, 2025</p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                Scheduled
              </span>
            </div>
          </div>
        </section>

        {/* 3️⃣ CAMPAIGN PERFORMANCE SECTION */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Your Campaigns</h2>
          <div className="space-y-4">
            {campaigns.map((campaign) => {
              const fundingPercentage = (campaign.raised / campaign.target) * 100;

              return (
                <div
                  key={campaign.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="grid md:grid-cols-[240px_1fr] gap-0">
                    {/* Campaign Image */}
                    <div className="relative h-48 md:h-auto bg-gray-100">
                      <Image
                        src={campaign.image}
                        alt={campaign.name}
                        fill
                        className="object-cover"
                      />
                      {/* Business Logo Overlay */}
                      <div className="absolute bottom-3 left-3">
                        <div className="relative w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden bg-white">
                          <Image
                            src={campaign.logo}
                            alt={campaign.businessName}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Campaign Details */}
                    <div className="p-6 space-y-4">
                      {/* Header Row */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {campaign.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {campaign.businessName}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            campaign.status
                          )}`}
                        >
                          {campaign.status}
                        </span>
                      </div>

                      {/* Micro-badge & Risk */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(
                            campaign.type
                          )}`}
                        >
                          {campaign.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <Info className="w-4 h-4" />
                          <span>
                            Risk: {campaign.risk} / 10{" "}
                            <span className="text-gray-500">
                              ({getRiskLabel(campaign.risk)})
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Funding Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-900">
                            {fundingPercentage.toFixed(0)}% funded
                          </span>
                          <span className="text-gray-600">
                            ৳{(campaign.raised / 100000).toFixed(1)}L raised · ৳
                            {(campaign.target / 100000).toFixed(0)}L goal
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          {campaign.investors} investors
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Campaign
                        </button>
                        <button className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Post Update
                        </button>
                        <button className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Manage Profit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4️⃣ PROFIT & DISTRIBUTION OVERVIEW */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Profit & Distribution
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-600 mb-2">
                Last Distribution
              </p>
              <p className="text-2xl font-bold text-gray-900">Oct 15, 2024</p>
              <p className="text-xs text-gray-500 mt-1">Quarterly cycle</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-600 mb-2">
                Distribution Model
              </p>
              <p className="text-lg font-semibold text-gray-900">
                Profit-sharing based
              </p>
              <p className="text-xs text-gray-500 mt-1">Per campaign terms</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-600 mb-2">
                Next Expected Cycle
              </p>
              <p className="text-2xl font-bold text-gray-900">Jan 15, 2025</p>
              <p className="text-xs text-gray-500 mt-1">In 27 days</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-sm text-blue-800 flex items-start gap-2">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                Distributions are managed manually according to campaign terms.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Activity className="w-4 h-4" />
              View Distribution History
            </button>
            <button
              disabled
              className="px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Configure Distribution
              <span className="text-xs">(Coming Soon)</span>
            </button>
          </div>
        </section>

        {/* 5️⃣ INVESTOR ENGAGEMENT */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Investor Engagement
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {investorInteractions.map((interaction) => (
                <div
                  key={interaction.id}
                  className="p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-medium text-gray-900">
                          {interaction.investor}
                        </span>
                        <span className="text-sm text-gray-500">·</span>
                        <span className="text-sm text-gray-600">
                          {interaction.campaign}
                        </span>
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            interaction.type === "Question"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {interaction.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        {interaction.message}
                      </p>
                      <p className="text-xs text-gray-500">{interaction.time}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6️⃣ RECENT ACTIVITY FEED */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="space-y-6">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      {index < recentActivity.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-2" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <p className="text-sm text-gray-900 font-medium">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center py-8">
          <p className="text-sm text-gray-500">
            Dashboard data updates every 5 minutes
          </p>
        </div>
      </div>
    </div>
  );
}





