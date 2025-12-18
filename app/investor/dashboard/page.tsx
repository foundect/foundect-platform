"use client";

import {
  TrendingUp,
  DollarSign,
  Briefcase,
  Clock,
  CheckCircle2,
  AlertCircle,
  Users,
  Building2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock data for MVP
const portfolioData = {
  totalInvested: 250000,
  activeCampaigns: 4,
  profitDistributed: 12500,
  riskExposure: "Medium",
};

const progressData = [
  { month: "Jan", value: 200000 },
  { month: "Feb", value: 210000 },
  { month: "Mar", value: 220000 },
  { month: "Apr", value: 225000 },
  { month: "May", value: 235000 },
  { month: "Jun", value: 250000 },
];

const allocationByType = [
  { type: "Mudarabah", percentage: 45, color: "#3A8DFF" },
  { type: "Musharakah", percentage: 35, color: "#8B5CF6" },
  { type: "Murabaha", percentage: 20, color: "#10B981" },
];

const allocationBySector = [
  { sector: "Manufacturing", percentage: 40, color: "#0D3B66" },
  { sector: "Retail", percentage: 25, color: "#3A8DFF" },
  { sector: "Agriculture", percentage: 20, color: "#10B981" },
  { sector: "Services", percentage: 15, color: "#F4D35E" },
];

const activeInvestments = [
  {
    id: 1,
    logo: "/foundect-logo.png",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500",
    businessName: "Green Textile Manufacturing",
    type: "Mudarabah",
    riskScore: 7,
    progress: 65,
    investors: 32,
  },
  {
    id: 2,
    logo: "/foundect-logo.png",
    coverImage: "https://images.unsplash.com/photo-1560472355-536de3962603?w=500",
    businessName: "Organic Food Distribution",
    type: "Musharakah",
    riskScore: 4,
    progress: 78,
    investors: 45,
  },
  {
    id: 3,
    logo: "/foundect-logo.png",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
    businessName: "EdTech Platform",
    type: "Mudarabah",
    riskScore: 6,
    progress: 55,
    investors: 28,
  },
];

const recentActivity = [
  {
    id: 1,
    type: "profit",
    message: "Profit distributed from Green Textile Manufacturing",
    time: "Today",
  },
  {
    id: 2,
    type: "investment",
    message: "You invested in Organic Food Distribution",
    time: "This Week",
  },
  {
    id: 3,
    type: "milestone",
    message: "EdTech Platform reached funding milestone",
    time: "This Week",
  },
  {
    id: 4,
    type: "profit",
    message: "Profit distributed from Sustainable Packaging",
    time: "This Month",
  },
];

const radarData = [
  { axis: "Risk Exposure", value: 6 },
  { axis: "Liquidity", value: 7 },
  { axis: "Diversification", value: 8 },
  { axis: "Stability", value: 7 },
  { axis: "Ethical Alignment", value: 9 },
];

export default function InvestorDashboardPage() {
  const formatCurrency = (amount: number) => `৳${amount.toLocaleString()}`;

  return (
    <div className="space-y-8 pb-24 lg:pb-8">
      {/* ========================================
          1️⃣ HEADER
      ======================================== */}
      <div className="animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Dashboard</h1>
        <p className="text-slate-600 text-sm md:text-base">
          Overview of your investment participation and progress
        </p>
      </div>

      {/* ========================================
          2️⃣ PORTFOLIO SNAPSHOT (SUMMARY CARDS)
      ======================================== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in animation-delay-200">
        {/* Total Invested */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Total Invested</p>
          <p className="text-2xl font-bold text-slate-900">{formatCurrency(portfolioData.totalInvested)}</p>
        </div>

        {/* Active Campaigns */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Active Campaigns</p>
          <p className="text-2xl font-bold text-slate-900">{portfolioData.activeCampaigns}</p>
        </div>

        {/* Profit Distributed */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Profit Distributed</p>
          <p className="text-2xl font-bold text-slate-900">{formatCurrency(portfolioData.profitDistributed)}</p>
          <p className="text-xs text-slate-500 mt-1">To date</p>
        </div>

        {/* Risk Exposure */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-1">Risk Exposure</p>
          <p className="text-2xl font-bold text-slate-900">{portfolioData.riskExposure}</p>
          <p className="text-xs text-slate-500 mt-1">Overall assessment</p>
        </div>
      </div>

      {/* ========================================
          3️⃣ PORTFOLIO PROGRESS (LINE CHART)
      ======================================== */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg animate-fade-in animation-delay-400">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Portfolio Progress Over Time</h2>
        <p className="text-sm text-slate-600 mb-6">Long-term participation value summary</p>

        {/* Simple Line Chart (SVG) */}
        <div className="relative h-64">
          <svg viewBox="0 0 600 200" className="w-full h-full">
            {/* Grid lines */}
            <line x1="50" y1="0" x2="50" y2="180" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="50" y1="180" x2="600" y2="180" stroke="#e2e8f0" strokeWidth="2" />

            {/* Y-axis labels */}
            <text x="10" y="20" fill="#64748b" fontSize="12">৳250k</text>
            <text x="10" y="95" fill="#64748b" fontSize="12">৳225k</text>
            <text x="10" y="185" fill="#64748b" fontSize="12">৳200k</text>

            {/* Line path */}
            <path
              d="M 80,160 L 170,140 L 260,120 L 350,110 L 440,80 L 530,20"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Area under line */}
            <path
              d="M 80,160 L 170,140 L 260,120 L 350,110 L 440,80 L 530,20 L 530,180 L 80,180 Z"
              fill="url(#areaGradient)"
              opacity="0.2"
            />

            {/* Data points */}
            {progressData.map((point, i) => {
              const x = 80 + i * 90;
              const y = 180 - ((point.value - 200000) / 50000) * 160;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="4" fill="#3A8DFF" />
                  <text x={x} y="200" fill="#64748b" fontSize="12" textAnchor="middle">
                    {point.month}
                  </text>
                </g>
              );
            })}

            {/* Gradients */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D3B66" />
                <stop offset="100%" stopColor="#3A8DFF" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3A8DFF" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ========================================
          4️⃣ ALLOCATION OVERVIEW (DONUT CHARTS)
      ======================================== */}
      <div className="grid md:grid-cols-2 gap-6 animate-fade-in animation-delay-600">
        {/* Allocation by Investment Type */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Allocation by Investment Type</h3>
          <div className="flex items-center justify-center mb-6">
            <DonutChart data={allocationByType} />
          </div>
          <div className="space-y-2">
            {allocationByType.map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-700">{item.type}</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Allocation by Sector */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Allocation by Sector</h3>
          <div className="flex items-center justify-center mb-6">
            <DonutChart data={allocationBySector} />
          </div>
          <div className="space-y-2">
            {allocationBySector.map((item) => (
              <div key={item.sector} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-700">{item.sector}</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
          5️⃣ FINANCIALS SECTION
      ======================================== */}
      <div className="grid md:grid-cols-2 gap-6 animate-fade-in animation-delay-800">
        {/* Bank Account */}
        <Link href="/investor/settings">
          <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                Added
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Bank Account</h3>
            <p className="text-sm text-slate-600 mb-4">For profit withdrawals and distributions</p>
            <div className="flex items-center text-[#3A8DFF] font-medium text-sm group-hover:gap-2 transition-all">
              Manage Bank Account
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>

        {/* Financial Summary */}
        <Link href="/investor/financials">
          <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Financial Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total Invested</span>
                <span className="font-semibold text-slate-900">{formatCurrency(250000)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total Profit Shared</span>
                <span className="font-semibold text-green-600">{formatCurrency(12500)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Pending Distributions</span>
                <span className="font-semibold text-amber-600">{formatCurrency(2500)}</span>
              </div>
            </div>
            <div className="flex items-center text-[#3A8DFF] font-medium text-sm group-hover:gap-2 transition-all">
              View Financial Summary
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>
      </div>

      {/* ========================================
          6️⃣ RISK & ETHICAL PROFILE (RADAR CHART)
      ======================================== */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/40 shadow-lg animate-fade-in animation-delay-1000">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Risk & Ethical Profile</h2>
        <p className="text-sm text-slate-600 mb-6">Indicative Profile</p>

        <div className="flex items-center justify-center mb-6">
          <RadarChart data={radarData} />
        </div>

        <p className="text-xs text-slate-500 text-center">
          Based on disclosed business information and periodic updates.
        </p>
      </div>

      {/* ========================================
          7️⃣ ACTIVE INVESTMENTS (LIST VIEW)
      ======================================== */}
      <div className="animate-fade-in animation-delay-1200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Active Investments</h2>
          <Link href="/investor/portfolio">
            <button className="text-sm text-[#3A8DFF] hover:text-[#0D3B66] font-medium transition-colors">
              View All
            </button>
          </Link>
        </div>

        <div className="space-y-4">
          {activeInvestments.map((investment) => (
            <InvestmentCard key={investment.id} investment={investment} />
          ))}
        </div>
      </div>

      {/* ========================================
          8️⃣ RECENT ACTIVITY
      ======================================== */}
      <div className="animate-fade-in animation-delay-1400">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-slate-600" />
          <h2 className="text-xl font-bold text-slate-900">Recent Activity</h2>
        </div>

        <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 pb-4 border-b border-slate-200/50 last:border-0 last:pb-0"
            >
              <div
                className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === "profit"
                    ? "bg-green-500"
                    : activity.type === "investment"
                    ? "bg-blue-500"
                    : "bg-purple-500"
                }`}
              />
              <div className="flex-1">
                <p className="text-sm text-slate-900 font-medium">{activity.message}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================
          9️⃣ FOOTER MICRO-COPY
      ======================================== */}
      <div className="bg-slate-100/50 rounded-2xl p-6 border border-slate-200/50 animate-fade-in animation-delay-1600">
        <p className="text-xs text-slate-600 text-center leading-relaxed">
          Figures shown are indicative summaries based on available disclosures. Returns are not guaranteed and depend
          on business performance.
        </p>
      </div>
    </div>
  );
}

// ========================================
// DONUT CHART COMPONENT
// ========================================
interface DonutChartProps {
  data: Array<{ type?: string; sector?: string; percentage: number; color: string }>;
}

function DonutChart({ data }: DonutChartProps) {
  const size = 160;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let currentAngle = -90;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((item, index) => {
        const percentage = item.percentage;
        const angle = (percentage / 100) * 360;
        const startAngle = currentAngle;
        const endAngle = currentAngle + angle;

        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;

        const x1 = center + radius * Math.cos(startRad);
        const y1 = center + radius * Math.sin(startRad);
        const x2 = center + radius * Math.cos(endRad);
        const y2 = center + radius * Math.sin(endRad);

        const largeArc = angle > 180 ? 1 : 0;

        const pathData = [
          `M ${center} ${center}`,
          `L ${x1} ${y1}`,
          `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
          "Z",
        ].join(" ");

        currentAngle = endAngle;

        return <path key={index} d={pathData} fill={item.color} />;
      })}
      {/* Center circle (donut hole) */}
      <circle cx={center} cy={center} r={radius - strokeWidth} fill="white" />
    </svg>
  );
}

// ========================================
// RADAR CHART COMPONENT
// ========================================
interface RadarChartProps {
  data: Array<{ axis: string; value: number }>;
}

function RadarChart({ data }: RadarChartProps) {
  const size = 300;
  const center = size / 2;
  const maxRadius = 120;
  const levels = 5;
  const angleStep = (2 * Math.PI) / data.length;

  const getPoint = (value: number, index: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const radius = (value / 10) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  const dataPoints = data.map((item, i) => getPoint(item.value, i));
  const pathData = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circles */}
      {Array.from({ length: levels }).map((_, i) => {
        const r = ((i + 1) / levels) * maxRadius;
        return (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        );
      })}

      {/* Axis lines */}
      {data.map((item, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const x = center + maxRadius * Math.cos(angle);
        const y = center + maxRadius * Math.sin(angle);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="#cbd5e1"
            strokeWidth="1"
          />
        );
      })}

      {/* Data area */}
      <path d={pathData} fill="#3A8DFF" fillOpacity="0.3" stroke="#3A8DFF" strokeWidth="2" />

      {/* Data points */}
      {dataPoints.map((point, i) => (
        <circle key={i} cx={point.x} cy={point.y} r="4" fill="#0D3B66" />
      ))}

      {/* Labels */}
      {data.map((item, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const labelRadius = maxRadius + 30;
        const x = center + labelRadius * Math.cos(angle);
        const y = center + labelRadius * Math.sin(angle);
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fill="#64748b"
            fontWeight="500"
          >
            {item.axis}
          </text>
        );
      })}
    </svg>
  );
}

// ========================================
// INVESTMENT CARD COMPONENT
// ========================================
interface InvestmentCardProps {
  investment: {
    id: number;
    logo: string;
    coverImage: string;
    businessName: string;
    type: string;
    riskScore: number;
    progress: number;
    investors: number;
  };
}

function InvestmentCard({ investment }: InvestmentCardProps) {
  const typeColors: Record<string, string> = {
    Mudarabah: "bg-blue-100 text-blue-700",
    Musharakah: "bg-purple-100 text-purple-700",
    Murabaha: "bg-green-100 text-green-700",
  };

  return (
    <Link href={`/explore/${investment.id}`}>
      <div className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 hover:shadow-xl transition-all cursor-pointer overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative h-40 md:h-auto md:w-48 flex-shrink-0">
            <Image
              src={investment.coverImage}
              alt={investment.businessName}
              fill
              className="object-cover"
            />
            {/* Logo Overlay */}
            <div className="absolute bottom-3 left-3 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden">
              <Image src={investment.logo} alt={investment.businessName} fill className="object-contain p-1" />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold text-slate-900 text-lg">{investment.businessName}</h3>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${typeColors[investment.type]}`}>
                {investment.type}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-slate-600 mb-1">Risk Score</p>
                <p className="font-bold text-slate-900">{investment.riskScore}/10</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Investors</p>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-slate-600" />
                  <span className="font-bold text-slate-900">{investment.investors}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                <span>Campaign Progress</span>
                <span className="font-bold text-slate-900">{investment.progress}%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0D3B66] to-[#3A8DFF] rounded-full transition-all"
                  style={{ width: `${investment.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

