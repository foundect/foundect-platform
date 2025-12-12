"use client";

import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { ShinyButton } from "@/components/ui/shiny-button";
import { HoverButton } from "@/components/ui/hover-button";
import { Tile } from "@/components/ui/tile";
import { StatCard } from "@/components/ui/StatCard";
import { Building2, TrendingUp, Users, DollarSign, Sparkles, ArrowRight, Clock, Plus, FileText } from "lucide-react";
import Link from "next/link";

export default function BusinessHomePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold text-text-900">Welcome back, Business Name</h1>
          <Sparkles className="h-6 w-6 text-accent-1" />
        </div>
        <p className="text-gray-600">Manage your funding campaigns and track progress</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 animate-fade-in animation-delay-500">
        <StatCard
          title="Active Listings"
          value="2"
          subtitle="Currently fundraising"
          icon={<Building2 className="h-5 w-5" />}
        />

        <StatCard
          title="Total Funds Raised"
          value="৳5,50,000"
          subtitle="Across all campaigns"
          icon={<DollarSign className="h-5 w-5" />}
          valueColor="text-green-600"
          trend="+25%"
        />

        <StatCard
          title="Total Investors"
          value="48"
          subtitle="Supporting your business"
          icon={<Users className="h-5 w-5" />}
        />
      </div>

      {/* Quick Actions - Using Tiles */}
      <div className="grid md:grid-cols-3 gap-6 animate-fade-in animation-delay-1000">
        <Link href="/business/listings">
          <Tile
            icon={Plus}
            title="Create Listing"
            description="Start a new funding campaign for your business"
            href="/business/listings"
            badge="NEW"
          />
        </Link>
        <Link href="/business/listings">
          <Tile
            icon={FileText}
            title="View Listings"
            description="Manage your active and completed campaigns"
            href="/business/listings"
          />
        </Link>
        <Link href="/business/company">
          <Tile
            icon={Building2}
            title="Company Profile"
            description="Keep your business information up to date"
            href="/business/company"
          />
        </Link>
      </div>

      {/* Main CTA */}
      <div className="flex justify-center gap-4 animate-fade-in animation-delay-1200">
        <Link href="/business/listings">
          <ShinyButton variant="premium" size="default">
            Apply for Funding
          </ShinyButton>
        </Link>
        <Link href="/business/listings">
          <HoverButton variant="outline" size="default">
            View Listings
          </HoverButton>
        </Link>
      </div>

      {/* Recent Activity */}
      <GlassCard className="animate-fade-in animation-delay-1500">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Recent Activity</GlassCardTitle>
          </div>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 glass-bg rounded-glass px-4">
              <div className="flex-1">
                <p className="font-medium text-sm text-text-900">New investment received</p>
                <p className="text-xs text-gray-500 mt-1">Green Textile Manufacturing - 1 hour ago</p>
              </div>
              <span className="text-sm font-semibold text-green-600">+৳25,000</span>
            </div>
            <div className="flex items-center justify-between py-3 glass-bg rounded-glass px-4">
              <div className="flex-1">
                <p className="font-medium text-sm text-text-900">Campaign milestone reached</p>
                <p className="text-xs text-gray-500 mt-1">50% funding goal achieved - 2 days ago</p>
              </div>
              <span className="text-sm font-semibold text-blue-500">50%</span>
            </div>
            <div className="flex items-center justify-between py-3 glass-bg rounded-glass px-4">
              <div className="flex-1">
                <p className="font-medium text-sm text-text-900">New investor joined</p>
                <p className="text-xs text-gray-500 mt-1">Sustainable Packaging Solutions - 3 days ago</p>
              </div>
              <span className="text-sm font-semibold text-blue-500">+1</span>
            </div>
          </div>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}
