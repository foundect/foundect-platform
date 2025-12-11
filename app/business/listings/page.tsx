"use client";

import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { List, Plus, Eye, Edit, TrendingUp } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Green Textile Manufacturing Expansion",
    status: "Live",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    investors: 28,
    daysLeft: 45,
  },
  {
    id: 2,
    title: "Sustainable Packaging Solutions",
    status: "Live",
    targetAmount: 3500000,
    raisedAmount: 2100000,
    investors: 20,
    daysLeft: 60,
  },
  {
    id: 3,
    title: "Organic Food Distribution Network",
    status: "Under Review",
    targetAmount: 4000000,
    raisedAmount: 0,
    investors: 0,
    daysLeft: 0,
  },
  {
    id: 4,
    title: "Halal Restaurant Chain Phase 1",
    status: "Completed",
    targetAmount: 2500000,
    raisedAmount: 2500000,
    investors: 35,
    daysLeft: 0,
  },
];

export default function BusinessListingsPage() {
  const formatCurrency = (amount: number) => {
    return `৳${(amount / 100000).toFixed(1)}L`;
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Under Review":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <List className="h-7 w-7 text-blue-500" />
            <h1 className="text-3xl font-bold text-text-900">My Listings</h1>
          </div>
          <p className="text-gray-600">Manage your funding campaigns</p>
        </div>
        <GlassButton variant="primary" icon={<Plus className="h-5 w-5" />}>
          Create New Listing
        </GlassButton>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {listings.map((listing, index) => (
          <GlassCard
            key={listing.id}
            className="animate-fade-in hover:scale-[1.02] transition-transform"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            <GlassCardHeader>
              <div className="flex items-start justify-between mb-3">
                <GlassCardTitle className="text-lg flex-1">{listing.title}</GlassCardTitle>
                <span className={`glass-bg rounded-pill px-3 py-1 text-xs font-medium border ${getStatusColor(listing.status)}`}>
                  {listing.status}
                </span>
              </div>
            </GlassCardHeader>
            <GlassCardContent className="space-y-4">
              {/* Progress Bar */}
              {listing.status !== "Under Review" && (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-blue-500">
                      {getProgressPercentage(listing.raisedAmount, listing.targetAmount).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-pill h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-accent-1 h-2 rounded-pill transition-all duration-500"
                      style={{
                        width: `${getProgressPercentage(listing.raisedAmount, listing.targetAmount)}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatCurrency(listing.raisedAmount)} raised</span>
                    <span>{formatCurrency(listing.targetAmount)} goal</span>
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-bg rounded-glass p-3">
                  <p className="text-xs text-gray-600 mb-1">Investors</p>
                  <p className="text-lg font-semibold text-text-900">{listing.investors}</p>
                </div>
                {listing.status === "Live" && (
                  <div className="glass-bg rounded-glass p-3">
                    <p className="text-xs text-gray-600 mb-1">Days Left</p>
                    <p className="text-lg font-semibold text-text-900">{listing.daysLeft}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <GlassButton variant="secondary" size="sm" className="flex-1" icon={<Eye className="h-4 w-4" />}>
                  View
                </GlassButton>
                {listing.status !== "Completed" && (
                  <GlassButton variant="ghost" size="sm" className="flex-1" icon={<Edit className="h-4 w-4" />}>
                    Edit
                  </GlassButton>
                )}
              </div>
            </GlassCardContent>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
