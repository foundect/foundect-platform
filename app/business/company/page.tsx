"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  MapPin,
  Calendar,
  ExternalLink,
  Linkedin,
  Globe,
  Facebook,
  Twitter,
  Users,
  Target,
  TrendingUp,
  Info,
  Edit,
  Eye,
  Shield,
  FileCheck,
  Building2,
  Clock,
} from "lucide-react";

// Mock company data
const companyData = {
  name: "Dhaka Textile Mills Ltd",
  logo: "https://ui-avatars.com/api/?name=Dhaka+Textile&background=3b82f6&color=fff&size=256",
  coverImage: "https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=1200",
  industry: "Textile Manufacturing",
  location: "Dhaka, Bangladesh",
  memberSince: "January 2023",
  verified: true,
  description:
    "Dhaka Textile Mills is a leading textile manufacturer in Bangladesh, specializing in sustainable and ethical fabric production. With over 15 years of experience, we serve both local and international markets with a commitment to quality and environmental responsibility. Our state-of-the-art facilities employ over 500 skilled workers and produce a wide range of textile products including cotton, linen, and blended fabrics.",
  website: "https://dhakatextile.com",
  socialMedia: {
    linkedin: "https://linkedin.com/company/dhaka-textile",
    facebook: "https://facebook.com/dhakatextile",
    twitter: "https://twitter.com/dhakatextile",
  },
  yearsInOperation: 15,
  campaignsLaunched: 3,
  totalInvestors: 147,
  activeSectors: ["Textile", "Manufacturing", "Export"],
};

// Mock founders data
const founders = [
  {
    id: 1,
    name: "Ahmed Rahman",
    role: "Founder & CEO",
    background:
      "20+ years in textile manufacturing. Previously led operations at Bangladesh Textile Group.",
    linkedin: "https://linkedin.com/in/ahmed-rahman",
  },
  {
    id: 2,
    name: "Fatima Khatun",
    role: "Co-Founder & CFO",
    background:
      "Former financial director at National Garments Ltd. Expert in ethical finance and Shari'ah compliance.",
    linkedin: "https://linkedin.com/in/fatima-khatun",
  },
  {
    id: 3,
    name: "Karim Hassan",
    role: "Managing Director",
    background:
      "15 years in export management. Established key partnerships with European and Middle Eastern markets.",
    linkedin: null,
  },
];

// Mock verification items
const verificationItems = [
  {
    id: 1,
    label: "Trade License Verified",
    icon: FileCheck,
    tooltip: "Government-issued trade license verified and up to date",
  },
  {
    id: 2,
    label: "Business Identity Verified",
    icon: Building2,
    tooltip: "Business registration and legal identity confirmed",
  },
  {
    id: 3,
    label: "Shari'ah Compliance Confirmed",
    icon: Shield,
    tooltip: "Business operations reviewed and confirmed Shari'ah-compliant",
  },
  {
    id: 4,
    label: "Operational History Verified",
    icon: CheckCircle2,
    tooltip: "Business track record and operational history validated",
  },
];

// Mock active campaigns
const activeCampaigns = [
  {
    id: 1,
    title: "Textile Manufacturing Expansion",
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
    title: "Sustainable Fabric Production Line",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    logo: "https://ui-avatars.com/api/?name=Dhaka+Textile&background=3b82f6&color=fff&size=128",
    type: "Musharakah",
    risk: 5,
    raised: 1500000,
    target: 3000000,
    investors: 32,
    status: "Live",
  },
];

// Mock past campaigns
const pastCampaigns = [
  {
    id: 1,
    title: "Tech Equipment Procurement",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
    type: "Murabaha",
    status: "Completed",
    raised: 5000000,
    investors: 67,
    duration: "12 months",
  },
];

export default function BusinessCompany() {
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

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
      case "Live":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      case "Closed":
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
        {/* 1️⃣ COMPANY OVERVIEW (HERO SECTION) */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Cover Image */}
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-600 to-blue-400">
            <Image
              src={companyData.coverImage}
              alt="Company cover"
              fill
              className="object-cover opacity-40"
            />
          </div>

          {/* Company Info */}
          <div className="relative px-6 pb-6">
            {/* Logo */}
            <div className="relative -mt-16 mb-4">
              <div className="w-32 h-32 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-white">
                <Image
                  src={companyData.logo}
                  alt={companyData.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Header Row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {companyData.name}
                  </h1>
                  {companyData.verified && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-medium">
                        Verified Business
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>{companyData.industry}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{companyData.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {companyData.memberSince}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Public
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ VERIFICATION & COMPLIANCE */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Verification & Compliance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verificationItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  onMouseEnter={() => setShowTooltip(item.id)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-900">
                          {item.label}
                        </p>
                        <Info className="w-3.5 h-3.5 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs text-green-600">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  {showTooltip === item.id && (
                    <div className="absolute z-10 bottom-full left-0 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg">
                      {item.tooltip}
                      <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 3️⃣ FOUNDERS & MANAGEMENT */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Founders & Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {founder.role}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      {founder.background}
                    </p>
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4️⃣ ACTIVE CAMPAIGNS */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Active Campaigns
          </h2>
          {activeCampaigns.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {activeCampaigns.map((campaign) => {
                const fundingPercentage =
                  (campaign.raised / campaign.target) * 100;

                return (
                  <div
                    key={campaign.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  >
                    {/* Campaign Image */}
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={campaign.image}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      {/* Logo Overlay */}
                      <div className="absolute bottom-3 left-3">
                        <div className="relative w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden bg-white">
                          <Image
                            src={campaign.logo}
                            alt="Company logo"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            campaign.status
                          )}`}
                        >
                          {campaign.status}
                        </span>
                      </div>
                    </div>

                    {/* Campaign Details */}
                    <div className="p-5 space-y-4">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900">
                        {campaign.title}
                      </h3>

                      {/* Badges */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(
                            campaign.type
                          )}`}
                        >
                          {campaign.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <Info className="w-4 h-4" />
                          <span>Risk: {campaign.risk} / 10</span>
                        </div>
                      </div>

                      {/* Funding Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-900">
                            {fundingPercentage.toFixed(0)}% funded
                          </span>
                          <span className="text-gray-600">
                            {formatCurrency(campaign.raised)} raised
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min(fundingPercentage, 100)}%`,
                            }}
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          {campaign.investors} investors
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
              <Target className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">
                This business currently has no active campaigns.
              </p>
            </div>
          )}
        </section>

        {/* 5️⃣ PAST CAMPAIGNS */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Past Campaigns</h2>
          {pastCampaigns.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastCampaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  >
                    {/* Campaign Image */}
                    <div className="relative h-40 bg-gray-100">
                      <Image
                        src={campaign.image}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            campaign.status
                          )}`}
                        >
                          {campaign.status}
                        </span>
                      </div>
                    </div>

                    {/* Campaign Details */}
                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-gray-900">
                        {campaign.title}
                      </h3>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                          campaign.type
                        )}`}
                      >
                        {campaign.type}
                      </span>
                      <div className="grid grid-cols-2 gap-3 text-sm pt-2 border-t border-gray-100">
                        <div>
                          <p className="text-gray-600 text-xs">Raised</p>
                          <p className="font-semibold text-gray-900">
                            {formatCurrency(campaign.raised)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-xs">Investors</p>
                          <p className="font-semibold text-gray-900">
                            {campaign.investors}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Duration: {campaign.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-800 flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Past campaign outcomes do not guarantee future results.
                  </span>
                </p>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
              <p className="text-gray-600">No past campaigns to display.</p>
            </div>
          )}
        </section>

        {/* 6️⃣ BUSINESS DESCRIPTION & MEDIA */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Business Description & Media
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                About the Business
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {companyData.description}
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Online Presence
              </h3>
              <div className="flex flex-wrap gap-3">
                {companyData.website && (
                  <a
                    href={companyData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {companyData.socialMedia.linkedin && (
                  <a
                    href={companyData.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {companyData.socialMedia.facebook && (
                  <a
                    href={companyData.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                )}
                {companyData.socialMedia.twitter && (
                  <a
                    href={companyData.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </a>
                )}
              </div>
            </div>

            {/* Helper Text */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>This information is visible to investors.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 7️⃣ BUSINESS HIGHLIGHTS */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Business Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {companyData.yearsInOperation}
              </p>
              <p className="text-sm text-gray-600">Years in Operation</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {companyData.campaignsLaunched}
              </p>
              <p className="text-sm text-gray-600">Campaigns Launched</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {companyData.totalInvestors}
              </p>
              <p className="text-sm text-gray-600">Total Investors</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {companyData.activeSectors.length}
              </p>
              <p className="text-sm text-gray-600">Active Sectors</p>
            </div>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
