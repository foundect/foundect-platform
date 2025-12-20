"use client";

import { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  PieChart,
  Activity,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Target,
  Wallet,
  BarChart3,
  Info,
} from "lucide-react";

// Dummy data for campaign finances
const campaignFinances = {
  totalRaised: 10000000, // ৳100L
  allocated: 7500000, // ৳75L
  available: 2500000, // ৳25L
  pendingDistributions: 1200000, // ৳12L
};

const campaignsList = [
  {
    id: 1,
    name: "Textile Manufacturing Expansion",
    raised: 3200000,
    investors: 48,
    allocationStatus: "Fully Allocated",
    distributionStatus: "Scheduled",
  },
  {
    id: 2,
    name: "Organic Food Distribution Network",
    raised: 1800000,
    investors: 32,
    allocationStatus: "Partially Allocated",
    distributionStatus: "Pending",
  },
  {
    id: 3,
    name: "Tech Equipment Procurement",
    raised: 5000000,
    investors: 67,
    allocationStatus: "Fully Allocated",
    distributionStatus: "Completed",
  },
];

const financialActivity = [
  {
    id: 1,
    type: "received",
    description: "Funds received from 5 new investors",
    campaign: "Textile Manufacturing Expansion",
    amount: 500000,
    date: "2024-12-18",
  },
  {
    id: 2,
    type: "allocated",
    description: "Funds allocated to equipment purchase",
    campaign: "Tech Equipment Procurement",
    amount: 2000000,
    date: "2024-12-15",
  },
  {
    id: 3,
    type: "distributed",
    description: "Quarterly profit distribution sent",
    campaign: "Tech Equipment Procurement",
    amount: 450000,
    date: "2024-12-10",
  },
  {
    id: 4,
    type: "received",
    description: "Campaign funding milestone reached",
    campaign: "Organic Food Distribution Network",
    amount: 800000,
    date: "2024-12-05",
  },
];

// Dummy data for investments
const investmentData = {
  totalInvested: 3500000, // ৳35L
  activeInvestments: 4,
  distributionsReceived: 420000, // ৳4.2L
};

const investedCampaigns = [
  {
    id: 1,
    businessName: "Green Valley Farms",
    campaignName: "Organic Agriculture Expansion",
    type: "Mudarabah",
    invested: 1000000,
    status: "Active",
    risk: "Low",
  },
  {
    id: 2,
    businessName: "Tech Solutions BD",
    campaignName: "Software Development Center",
    type: "Musharakah",
    invested: 1500000,
    status: "Distribution Ongoing",
    risk: "Medium",
  },
  {
    id: 3,
    businessName: "Artisan Crafts Ltd",
    campaignName: "Export Market Expansion",
    type: "Murabaha",
    invested: 500000,
    status: "Active",
    risk: "Low",
  },
  {
    id: 4,
    businessName: "Digital Marketing Hub",
    campaignName: "Regional Office Setup",
    type: "Musharakah",
    invested: 500000,
    status: "Completed",
    risk: "Medium",
  },
];

const distributionTimeline = [
  {
    id: 1,
    date: "2024-12-15",
    campaign: "Software Development Center",
    business: "Tech Solutions BD",
    amount: 180000,
  },
  {
    id: 2,
    date: "2024-11-20",
    campaign: "Organic Agriculture Expansion",
    business: "Green Valley Farms",
    amount: 120000,
  },
  {
    id: 3,
    date: "2024-10-15",
    campaign: "Software Development Center",
    business: "Tech Solutions BD",
    amount: 120000,
  },
];

const investmentActivity = [
  {
    id: 1,
    type: "investment",
    description: "Investment made in Software Development Center",
    business: "Tech Solutions BD",
    amount: 1500000,
    date: "2024-08-10",
  },
  {
    id: 2,
    type: "distribution",
    description: "Distribution received from Organic Agriculture",
    business: "Green Valley Farms",
    amount: 120000,
    date: "2024-11-20",
  },
  {
    id: 3,
    type: "completed",
    description: "Regional Office Setup campaign completed",
    business: "Digital Marketing Hub",
    amount: 0,
    date: "2024-11-01",
  },
];

export default function BusinessFinancials() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "investments">("campaigns");

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
      case "Scheduled":
        return "bg-green-100 text-green-700";
      case "Distribution Ongoing":
      case "Pending":
        return "bg-orange-100 text-orange-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "High":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getAllocationColor = (status: string) => {
    switch (status) {
      case "Fully Allocated":
        return "bg-green-100 text-green-700";
      case "Partially Allocated":
        return "bg-orange-100 text-orange-700";
      case "Not Allocated":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatCurrency = (amount: number) => {
    return `৳${(amount / 100000).toFixed(1)}L`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Financials
          </h1>
          <p className="text-gray-600 text-lg">
            A transparent overview of your business finances and investments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200 inline-flex gap-2">
          <button
            onClick={() => setActiveTab("campaigns")}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeTab === "campaigns"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Your Campaign Finances
          </button>
          <button
            onClick={() => setActiveTab("investments")}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeTab === "investments"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Your Investments
          </button>
        </div>

        {/* TAB 1: YOUR CAMPAIGN FINANCES */}
        {activeTab === "campaigns" && (
          <div className="space-y-8 animate-fade-in">
            {/* Section A: Financial Snapshot */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Financial Snapshot
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Funds Raised
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(campaignFinances.totalRaised)}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Funds Allocated
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(campaignFinances.allocated)}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Wallet className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Available Balance
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(campaignFinances.available)}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Pending Distributions
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(campaignFinances.pendingDistributions)}
                  </p>
                </div>
              </div>
            </section>

            {/* Section B: Funds Breakdown */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Funds Breakdown
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="space-y-4">
                  {/* Visual Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden flex">
                    <div
                      className="bg-green-500 flex items-center justify-center text-white text-xs font-medium"
                      style={{
                        width: `${(campaignFinances.allocated / campaignFinances.totalRaised) * 100}%`,
                      }}
                    >
                      Allocated
                    </div>
                    <div
                      className="bg-blue-500 flex items-center justify-center text-white text-xs font-medium"
                      style={{
                        width: `${(campaignFinances.available / campaignFinances.totalRaised) * 100}%`,
                      }}
                    >
                      Available
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Allocated
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatCurrency(campaignFinances.allocated)} (75%)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Available
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatCurrency(campaignFinances.available)} (25%)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section C: Profit & Distribution Overview */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Profit & Distribution Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Distribution Model
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Mudarabah & Musharakah
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Varies by campaign
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Last Distribution
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Dec 10, 2024
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Quarterly cycle</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Next Expected Distribution
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Mar 10, 2025
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Estimated window</p>
                </div>
              </div>
            </section>

            {/* Section D: Campaign-wise Financial Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Campaign-wise Financial Summary
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Campaign Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Raised Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Investors
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Allocation Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Distribution Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {campaignsList.map((campaign) => (
                        <tr key={campaign.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {campaign.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {formatCurrency(campaign.raised)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {campaign.investors}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${getAllocationColor(
                                campaign.allocationStatus
                              )}`}
                            >
                              {campaign.allocationStatus}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                campaign.distributionStatus
                              )}`}
                            >
                              {campaign.distributionStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-gray-200">
                  {campaignsList.map((campaign) => (
                    <div key={campaign.id} className="p-4 space-y-3">
                      <h3 className="font-semibold text-gray-900">
                        {campaign.name}
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-600">Raised</p>
                          <p className="font-medium text-gray-900">
                            {formatCurrency(campaign.raised)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Investors</p>
                          <p className="font-medium text-gray-900">
                            {campaign.investors}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getAllocationColor(
                            campaign.allocationStatus
                          )}`}
                        >
                          {campaign.allocationStatus}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            campaign.distributionStatus
                          )}`}
                        >
                          {campaign.distributionStatus}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section E: Financial Activity */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Financial Activity
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="space-y-6">
                  {financialActivity.map((activity, index) => (
                    <div key={activity.id} className="flex gap-4">
                      {/* Icon */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`p-2 rounded-full ${
                            activity.type === "received"
                              ? "bg-green-100"
                              : activity.type === "allocated"
                              ? "bg-blue-100"
                              : "bg-purple-100"
                          }`}
                        >
                          {activity.type === "received" ? (
                            <ArrowDownRight
                              className={`w-4 h-4 ${
                                activity.type === "received"
                                  ? "text-green-600"
                                  : ""
                              }`}
                            />
                          ) : activity.type === "allocated" ? (
                            <Target className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-purple-600" />
                          )}
                        </div>
                        {index < financialActivity.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 mt-2" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {activity.description}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.campaign}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">
                              {formatCurrency(activity.amount)}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: YOUR INVESTMENTS */}
        {activeTab === "investments" && (
          <div className="space-y-8 animate-fade-in">
            {/* Divider Title */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-gray-300 flex-1"></div>
              <p className="text-sm font-medium text-gray-600">
                Investments Made by Your Business
              </p>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            {/* Section A: Investment Snapshot */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Investment Snapshot
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Invested
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(investmentData.totalInvested)}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Active Investments
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {investmentData.activeInvestments}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      Distributions Received
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(investmentData.distributionsReceived)}
                  </p>
                </div>
              </div>
            </section>

            {/* Section B: Invested Campaigns */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Invested Campaigns
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {investedCampaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-4"
                  >
                    {/* Header */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {campaign.campaignName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {campaign.businessName}
                      </p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                          campaign.type
                        )}`}
                      >
                        {campaign.type}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          campaign.status
                        )}`}
                      >
                        {campaign.status}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(
                          campaign.risk
                        )}`}
                      >
                        Risk: {campaign.risk}
                      </span>
                    </div>

                    {/* Amount */}
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm text-gray-600">Amount Invested</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatCurrency(campaign.invested)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section C: Distribution Timeline */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Distribution Timeline
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="space-y-6">
                  {distributionTimeline.map((distribution, index) => (
                    <div key={distribution.id} className="flex gap-4">
                      {/* Date Badge */}
                      <div className="flex flex-col items-center">
                        <div className="p-2 bg-green-100 rounded-full">
                          <Calendar className="w-4 h-4 text-green-600" />
                        </div>
                        {index < distributionTimeline.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 mt-2" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {distribution.campaign}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {distribution.business}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-green-600">
                              +{formatCurrency(distribution.amount)}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {distribution.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section D: Investment Activity */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Investment Activity
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="space-y-6">
                  {investmentActivity.map((activity, index) => (
                    <div key={activity.id} className="flex gap-4">
                      {/* Icon */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`p-2 rounded-full ${
                            activity.type === "investment"
                              ? "bg-blue-100"
                              : activity.type === "distribution"
                              ? "bg-green-100"
                              : "bg-gray-100"
                          }`}
                        >
                          {activity.type === "investment" ? (
                            <ArrowUpRight className="w-4 h-4 text-blue-600" />
                          ) : activity.type === "distribution" ? (
                            <ArrowDownRight className="w-4 h-4 text-green-600" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-gray-600" />
                          )}
                        </div>
                        {index < investmentActivity.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 mt-2" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {activity.description}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.business}
                            </p>
                          </div>
                          <div className="text-right">
                            {activity.amount > 0 && (
                              <p
                                className={`text-sm font-semibold ${
                                  activity.type === "investment"
                                    ? "text-blue-600"
                                    : "text-green-600"
                                }`}
                              >
                                {activity.type === "investment" ? "-" : "+"}
                                {formatCurrency(activity.amount)}
                              </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Shari'ah Disclaimer */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Investment outcomes depend on campaign performance. Returns are
                  not guaranteed.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}





