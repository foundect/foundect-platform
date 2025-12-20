"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Building2,
  Calendar,
  Target,
  TrendingUp,
  Clock,
  Users,
  MessageCircle,
  Send,
  Bot,
  X,
  Info,
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Bell,
  BellOff,
  Play,
  Download,
  Image as ImageIcon,
} from "lucide-react";

// Mock campaign data
const campaignData = {
  id: "1",
  businessName: "Valéstrico Ltd.",
  businessLogo: "https://ui-avatars.com/api/?name=Valestrico&background=3b82f6&color=fff&size=256",
  campaignTitle: "Garments Import from Chinese Factory",
  sector: "Retail Clothing",
  status: "Open",
  fundingProgress: 64,
  raised: 3200000,
  target: 5000000,
  daysRemaining: 45,
  duration: "24 months",
  contractType: "Musharakah",
  investorCount: 48,
  
  // Financial transparency data
  estimatedAnnualizedReturn: 15.5,
  estimatedTotalReturn: 31.0,
  platformFee: 2.0,
  successFee: 0.5,
  serviceFee: 0.3,
  
  // Media assets
  coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
  additionalImages: [
    "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=800",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
  ],
  videoUrl: null, // Optional video
  pitchDeckUrl: "/documents/valestrico-pitch-deck.pdf", // Optional pitch deck
  
  // Tab content
  overview: {
    background: "Valéstrico Ltd. has been operating in the retail clothing sector for over 8 years, serving both local and international markets. We specialize in high-quality garments with a focus on ethical sourcing and sustainable practices.",
    fundingReason: "This campaign aims to secure funding for importing a bulk order of garments from a verified Chinese manufacturing partner. This strategic purchase will allow us to meet growing demand from our retail partners and expand our product line.",
    useOfFunds: "Funds will be used for: (1) Purchase of garment inventory from certified manufacturer (70%), (2) Shipping and logistics (15%), (3) Quality control and inspection (10%), (4) Working capital buffer (5%).",
    objectives: "Our primary objectives are to fulfill existing retail contracts, establish stronger supply chain relationships, and position Valéstrico as a reliable supplier in the Bangladesh retail market. This campaign will help us scale operations while maintaining our commitment to quality and ethical business practices.",
  },
  
  business: {
    model: "Valéstrico operates as a B2B garment importer and distributor. We source quality products from verified international manufacturers and supply them to retail chains, boutiques, and online marketplaces across Bangladesh.",
    revenue: "Revenue is generated through markup on imported goods, typically 25-35% depending on product category and volume. We maintain long-term contracts with 15+ retail partners, providing stable recurring revenue.",
    operations: "Our operations include supplier verification, bulk ordering, quality inspection, customs clearance, warehousing, and distribution. We employ 12 full-time staff and work with logistics partners for efficient delivery.",
    market: "We serve the mid-to-premium retail clothing market in Dhaka, Chittagong, and Sylhet. Our target customers are retail businesses seeking reliable suppliers with consistent quality and ethical sourcing practices.",
  },
  
  financial: {
    capitalUsage: "Investment capital will be deployed immediately upon campaign completion. The bulk order will be placed within 2 weeks, with delivery expected in 45-60 days. Inventory will be distributed to retail partners within 90 days of receipt.",
    profitGeneration: "Profit is generated from the markup on sold inventory. Based on existing contracts and market demand, we project inventory turnover within 6 months of receipt. Profit margins are derived from wholesale pricing advantages and established retail relationships.",
    distribution: "Profit distributions will occur quarterly, starting 6 months after campaign completion. Distributions are based on actual sales performance and agreed profit-sharing ratios. Investors will receive detailed financial reports before each distribution.",
    capitalReturn: "Capital will be returned gradually through profit distributions over the 24-month investment period. The final distribution will include any remaining capital plus final profit share. Early exit options are not available due to the nature of inventory-based investments.",
  },
  
  risks: [
    {
      type: "Operational Risk",
      description: "Delays in manufacturing, shipping, or customs clearance could impact inventory availability and sales timelines.",
      mitigation: "We work with verified suppliers with proven track records. We maintain buffer timelines in our projections and have backup logistics partners. Our team has 8+ years of import experience.",
    },
    {
      type: "Market Risk",
      description: "Changes in consumer demand, fashion trends, or economic conditions could affect sales volume and pricing.",
      mitigation: "We focus on classic, timeless garment styles with consistent demand. Our retail partners have long-term contracts. We maintain diversified product categories to spread market risk.",
    },
    {
      type: "Currency & Regulatory Risk",
      description: "Exchange rate fluctuations or changes in import regulations could impact costs and profitability.",
      mitigation: "We use forward contracts to hedge major currency exposure. We maintain close relationships with customs authorities and stay updated on regulatory changes. Our legal team reviews all compliance requirements.",
    },
    {
      type: "Liquidity Risk",
      description: "This is an illiquid investment. Funds are locked for the full 24-month period with no early exit mechanism.",
      mitigation: "Investors should only commit capital they can afford to lock for the full duration. We provide quarterly updates and maintain transparent communication throughout the investment period.",
    },
  ],
  
  shariah: {
    contractType: "Musharakah (Partnership)",
    explanation: "This campaign uses the Musharakah structure, a partnership where investors and the business share capital contribution, profits, and losses according to agreed ratios. Both parties participate in the business venture.",
    profitLoss: "Profits are shared based on pre-agreed ratios (outlined in the investment agreement). Losses are shared proportionally to capital contribution. This ensures fair risk-sharing aligned with Islamic principles.",
    foundectRole: "Foundect acts as a facilitator and platform, connecting investors with Shari'ah-compliant opportunities. We do not participate in profit-sharing or business operations. Our role is limited to platform services and compliance verification.",
    compliance: "This campaign has been reviewed and approved by Foundect's Shari'ah Advisory Board. The business operates in halal industries, avoids interest-based transactions, and follows ethical business practices. All contracts are structured according to Islamic finance principles.",
  },
  
  legal: {
    duration: "Investment duration is 24 months from campaign completion date. This period may be extended by up to 3 months with investor notification if operational circumstances require it.",
    contract: "The investment agreement is a legally binding contract between investors and Valéstrico Ltd. It outlines profit-sharing ratios, distribution timelines, reporting requirements, and dispute resolution mechanisms.",
    delays: "In case of operational delays, investors will be notified immediately with detailed explanations. Extended timelines may affect distribution schedules but not profit-sharing ratios. The business commits to transparent communication throughout.",
    losses: "In the event of losses, they will be shared proportionally according to capital contribution as per Musharakah principles. Investors may lose part or all of their invested capital. This is disclosed in the investment agreement.",
    finalAgreement: "Final agreement is accepted on the Investment Page. By proceeding to invest, you acknowledge that you have read and understood all campaign details, risks, and legal terms.",
  },
};

// Mock comments
const mockComments = [
  {
    id: 1,
    author: "Investor A***",
    accountType: "Investor",
    message: "What is your experience with this Chinese manufacturer? Have you worked with them before?",
    timestamp: "2 days ago",
    reply: {
      author: "Valéstrico Ltd.",
      message: "Yes, we've completed 3 successful orders with this manufacturer over the past 2 years. They are certified and have consistently met quality standards. We can provide references upon request.",
      timestamp: "1 day ago",
    },
  },
  {
    id: 2,
    author: "Business User M***",
    accountType: "Business",
    message: "How do you handle quality control for imported garments?",
    timestamp: "3 days ago",
    reply: {
      author: "Valéstrico Ltd.",
      message: "We have a 3-stage quality control process: (1) Pre-shipment inspection in China, (2) Inspection upon arrival in Bangladesh, (3) Final check before distribution. We reject any items that don't meet our standards.",
      timestamp: "3 days ago",
    },
  },
];

export default function CampaignDetailsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [showAI, setShowAI] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [alertsEnabled, setAlertsEnabled] = useState(false);

  const tabs = [
    { id: "overview", label: "Campaign Overview" },
    { id: "business", label: "Business & Operations" },
    { id: "financial", label: "Financial Structure" },
    { id: "risks", label: "Risk Considerations" },
    { id: "shariah", label: "Shari'ah Structure" },
    { id: "legal", label: "Legal & Agreements" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-700";
      case "Closing Soon":
        return "bg-orange-100 text-orange-700";
      case "Fully Funded":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatCurrency = (amount: number) => {
    return `৳${(amount / 100000).toFixed(1)}L`;
  };

  const handleInvest = () => {
    router.push(`/invest/${campaignData.id}`);
  };

  const toggleAlerts = () => {
    setAlertsEnabled(!alertsEnabled);
    // TODO: Save alert preference to backend
  };

  // Financial calculations (based on example ৳100,000 investment)
  const exampleInvestment = 100000;
  const estimatedProfitAmount = (exampleInvestment * campaignData.estimatedTotalReturn) / 100;
  const totalChargesPercent = campaignData.platformFee + campaignData.successFee + campaignData.serviceFee;
  const totalCharges = (estimatedProfitAmount * totalChargesPercent) / 100;
  const netProfit = estimatedProfitAmount - totalCharges;
  const netRepayment = exampleInvestment + netProfit;
  const totalRepayment = exampleInvestment + estimatedProfitAmount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* 1. CAMPAIGN IDENTITY HEADER */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Business Logo */}
            <button
              onClick={() => router.push("/business/company")}
              className="flex-shrink-0 group"
              title="View company profile"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-blue-500 transition-colors">
                <Image
                  src={campaignData.businessLogo}
                  alt={campaignData.businessName}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </button>

            {/* Campaign Info */}
            <div className="flex-1 space-y-4">
              {/* Business Name */}
              <div>
                <button
                  onClick={() => router.push("/business/company")}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {campaignData.businessName}
                </button>
              </div>

              {/* Campaign Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {campaignData.campaignTitle}
              </h1>

              {/* Sector */}
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {campaignData.sector}
                </span>
              </div>

              {/* Status & Progress */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      campaignData.status
                    )}`}
                  >
                    {campaignData.status}
                  </span>
                  <span className="text-sm text-gray-600">
                    {campaignData.daysRemaining} days remaining
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">
                      {campaignData.fundingProgress}% funded
                    </span>
                    <span className="text-gray-600">
                      {formatCurrency(campaignData.raised)} of{" "}
                      {formatCurrency(campaignData.target)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${campaignData.fundingProgress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    {campaignData.investorCount} investors
                  </p>
                </div>
              </div>

              {/* Key Facts */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Target Amount</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {formatCurrency(campaignData.target)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Duration</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {campaignData.duration}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Contract Type</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {campaignData.contractType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ESTIMATED RETURNS & CHARGES */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Estimated Returns & Charges
          </h2>
          
          {/* Returns Estimates */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-xs text-blue-600 font-medium mb-1">Estimated Annualized Return</p>
              <p className="text-2xl font-bold text-blue-900">{campaignData.estimatedAnnualizedReturn}%</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <p className="text-xs text-green-600 font-medium mb-1">Estimated Total Return</p>
              <p className="text-2xl font-bold text-green-900">{campaignData.estimatedTotalReturn}%</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <p className="text-xs text-purple-600 font-medium mb-1">Estimated Profit Amount</p>
              <p className="text-2xl font-bold text-purple-900">{formatCurrency(estimatedProfitAmount)}</p>
              <p className="text-xs text-purple-600 mt-1">On ৳1L investment</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
              <p className="text-xs text-teal-600 font-medium mb-1">Total Repayment</p>
              <p className="text-2xl font-bold text-teal-900">{formatCurrency(totalRepayment)}</p>
              <p className="text-xs text-teal-600 mt-1">Capital + Profit</p>
            </div>
          </div>

          {/* Charges Breakdown */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Charges & Deductions</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Platform Fee</span>
                <span className="text-sm font-semibold text-gray-900">{campaignData.platformFee}%</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Success Fee</span>
                <span className="text-sm font-semibold text-gray-900">{campaignData.successFee}%</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Service Fee</span>
                <span className="text-sm font-semibold text-gray-900">{campaignData.serviceFee}%</span>
              </div>
              <div className="flex items-center justify-between py-3 bg-gray-50 rounded-lg px-3 mt-3">
                <span className="text-sm font-semibold text-gray-900">Total Charges</span>
                <span className="text-sm font-bold text-gray-900">{totalChargesPercent}% (৳{(totalCharges / 1000).toFixed(1)}K)</span>
              </div>
            </div>

            {/* Net Figures */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <p className="text-xs text-emerald-600 font-medium mb-1">Net Estimated Profit</p>
                <p className="text-xl font-bold text-emerald-900">{formatCurrency(netProfit)}</p>
                <p className="text-xs text-emerald-600 mt-1">After all charges</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <p className="text-xs text-indigo-600 font-medium mb-1">Net Estimated Repayment</p>
                <p className="text-xl font-bold text-indigo-900">{formatCurrency(netRepayment)}</p>
                <p className="text-xs text-indigo-600 mt-1">What you receive</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Disclaimer:</strong> Figures are estimated and may vary based on actual business performance and campaign terms. 
                Returns are not guaranteed and you may lose some or all of your invested capital.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CAMPAIGN MEDIA */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Campaign Media</h2>
          
          {/* Cover Image */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Cover Image</p>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={campaignData.coverImage}
                alt="Campaign cover"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Additional Images */}
          {campaignData.additionalImages && campaignData.additionalImages.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Gallery</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {campaignData.additionalImages.map((img, idx) => (
                  <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer">
                    <Image
                      src={img}
                      alt={`Gallery image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video (if available) */}
          {campaignData.videoUrl && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Campaign Video</p>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
                <button className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Play className="w-12 h-12" />
                  <span className="text-sm font-medium">Play Video</span>
                </button>
              </div>
            </div>
          )}

          {/* Pitch Deck */}
          {campaignData.pitchDeckUrl && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Pitch Deck</p>
              <a
                href={campaignData.pitchDeckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Business Pitch Deck</p>
                    <p className="text-xs text-gray-600">PDF Document</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          )}
        </section>

        {/* 4. PRIMARY CALL-TO-ACTION */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={handleInvest}
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Invest Now
          </button>
          <button
            onClick={toggleAlerts}
            className={`p-4 rounded-xl border-2 transition-all ${
              alertsEnabled
                ? "bg-blue-50 border-blue-500 text-blue-600"
                : "bg-white border-gray-300 text-gray-600 hover:border-gray-400"
            }`}
            title={alertsEnabled ? "Alerts enabled" : "Enable alerts"}
          >
            {alertsEnabled ? <Bell className="w-6 h-6" /> : <BellOff className="w-6 h-6" />}
          </button>
        </div>
        {alertsEnabled && (
          <div className="flex justify-center">
            <p className="text-xs text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
              ✓ You'll receive updates about this campaign
            </p>
          </div>
        )}

        {/* 5. TAB-BASED CONTENT SECTIONS */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab Bar */}
          <div className="border-b border-gray-200 overflow-x-auto scrollbar-hide">
            <div className="flex min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            {/* TAB 1: Campaign Overview */}
            {activeTab === "overview" && (
              <div className="space-y-6 max-w-4xl">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Business Background
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.overview.background}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why Funding is Required
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.overview.fundingReason}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Use of Funds
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.overview.useOfFunds}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Business Objectives
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.overview.objectives}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Business & Operations */}
            {activeTab === "business" && (
              <div className="space-y-6 max-w-4xl">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Business Model
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.business.model}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Revenue Streams
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.business.revenue}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Operational Structure
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.business.operations}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Market Served
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.business.market}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: Financial Structure */}
            {activeTab === "financial" && (
              <div className="space-y-6 max-w-4xl">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Capital Usage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.financial.capitalUsage}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Profit Generation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.financial.profitGeneration}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Distribution Method & Timing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.financial.distribution}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Capital Return Mechanics
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.financial.capitalReturn}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 4: Risk Considerations */}
            {activeTab === "risks" && (
              <div className="space-y-6 max-w-4xl">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-orange-900 mb-1">
                        Investment Risk Disclosure
                      </p>
                      <p className="text-sm text-orange-800">
                        All investments carry risk. Returns are not guaranteed
                        and you may lose some or all of your invested capital.
                        Please read all risk factors carefully.
                      </p>
                    </div>
                  </div>
                </div>

                {campaignData.risks.map((risk, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {risk.type}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {risk.description}
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm font-medium text-blue-900 mb-2">
                        Mitigation Strategy
                      </p>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        {risk.mitigation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 5: Shari'ah Structure */}
            {activeTab === "shariah" && (
              <div className="space-y-6 max-w-4xl">
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-teal-900 mb-1">
                        Shari'ah Compliant Investment
                      </p>
                      <p className="text-sm text-teal-800">
                        This campaign has been reviewed and approved by
                        Foundect's Shari'ah Advisory Board.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Contract Type: {campaignData.shariah.contractType}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.shariah.explanation}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Profit & Loss Sharing Principles
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.shariah.profitLoss}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Role of Foundect
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.shariah.foundectRole}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Shari'ah Compliance Confirmation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.shariah.compliance}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 6: Legal & Agreements */}
            {activeTab === "legal" && (
              <div className="space-y-6 max-w-4xl">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Investment Duration
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.legal.duration}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Contract Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.legal.contract}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Handling of Delays
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.legal.delays}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Handling of Losses
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {campaignData.legal.losses}
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">
                        Final Agreement
                      </p>
                      <p className="text-sm text-blue-800">
                        {campaignData.legal.finalAgreement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. AI CAMPAIGN ASSISTANT */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAI(true)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Bot className="w-5 h-5" />
            <span className="font-medium">Ask AI</span>
          </button>
        </div>

        {/* AI Modal */}
        {showAI && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      AI Campaign Assistant
                    </h3>
                    <p className="text-xs text-gray-600">
                      Ask questions about this campaign
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAI(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-800">
                    I can help explain campaign details, clarify risks, and
                    answer questions about Islamic finance terms. I cannot
                    recommend whether you should invest or predict returns.
                  </p>
                </div>
                <div className="text-center text-gray-500 text-sm">
                  Start a conversation by typing your question below.
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7. COMMENTS & PUBLIC QUESTIONS */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Questions & Comments
          </h2>

          {/* Comment Input */}
          <div className="mb-8">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Ask a question or leave a comment..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="flex justify-end mt-2">
              <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Post Comment
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {mockComments.map((comment) => (
              <div key={comment.id} className="space-y-4">
                {/* Main Comment */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {comment.author[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-medium text-gray-900 text-sm sm:text-base">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {comment.accountType}
                      </span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-500">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                      {comment.message}
                    </p>
                  </div>
                </div>

                {/* Reply */}
                {comment.reply && (
                  <div className="ml-8 sm:ml-14 flex gap-3 sm:gap-4 bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      V
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">
                          {comment.reply.author}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full whitespace-nowrap">
                          Business
                        </span>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs text-gray-500">
                          {comment.reply.timestamp}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                        {comment.reply.message}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}




