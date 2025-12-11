import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { StatCard } from "@/components/ui/StatCard";
import { TrendingUp, Briefcase, ArrowRight, DollarSign, Sparkles, Clock } from "lucide-react";
import Link from "next/link";

export default function InvestorHomePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold text-text-900">Welcome back, Investor</h1>
          <Sparkles className="h-6 w-6 text-accent-1" />
        </div>
        <p className="text-gray-600">Here's an overview of your investment portfolio</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 animate-fade-in animation-delay-500">
        <StatCard
          title="Total Invested"
          value="৳2,50,000"
          subtitle="Across 5 campaigns"
          icon={<DollarSign className="h-5 w-5" />}
          trend="+15%"
        />

        <StatCard
          title="Active Campaigns"
          value="5"
          subtitle="Currently invested"
          icon={<Briefcase className="h-5 w-5" />}
        />

        <StatCard
          title="Expected Returns"
          value="+12.5%"
          subtitle="Average projected"
          icon={<TrendingUp className="h-5 w-5" />}
          valueColor="text-green-600"
        />
      </div>

      {/* Quick Actions */}
      <GlassCard className="animate-fade-in animation-delay-1000">
        <GlassCardHeader>
          <GlassCardTitle className="text-xl">Next Steps</GlassCardTitle>
          <p className="text-gray-600">Grow your halal investment portfolio</p>
        </GlassCardHeader>
        <GlassCardContent className="space-y-3">
          <Link href="/explore">
            <div className="flex items-center justify-between p-4 glass-bg rounded-glass hover:scale-[1.02] transition-transform cursor-pointer group">
              <div className="flex-1">
                <h3 className="font-semibold text-text-900 mb-1">Explore New Campaigns</h3>
                <p className="text-sm text-gray-600">
                  Discover new Shari'ah-compliant investment opportunities
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/investor/dashboard">
            <div className="flex items-center justify-between p-4 glass-bg rounded-glass hover:scale-[1.02] transition-transform cursor-pointer group">
              <div className="flex-1">
                <h3 className="font-semibold text-text-900 mb-1">View Your Dashboard</h3>
                <p className="text-sm text-gray-600">
                  Track your investments and portfolio performance
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/investor/account">
            <div className="flex items-center justify-between p-4 glass-bg rounded-glass hover:scale-[1.02] transition-transform cursor-pointer group">
              <div className="flex-1">
                <h3 className="font-semibold text-text-900 mb-1">Complete Your Profile</h3>
                <p className="text-sm text-gray-600">
                  Add KYC information to increase investment limits
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </GlassCardContent>
      </GlassCard>

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
                <p className="font-medium text-sm text-text-900">Investment in Green Textile Manufacturing</p>
                <p className="text-xs text-gray-500 mt-1">2 days ago</p>
              </div>
              <span className="text-sm font-semibold text-blue-500">৳50,000</span>
            </div>
            <div className="flex items-center justify-between py-3 glass-bg rounded-glass px-4">
              <div className="flex-1">
                <p className="font-medium text-sm text-text-900">Profit share received from Tech Solutions Hub</p>
                <p className="text-xs text-gray-500 mt-1">5 days ago</p>
              </div>
              <span className="text-sm font-semibold text-green-600">+৳2,500</span>
            </div>
            <div className="flex items-center justify-between py-3 glass-bg rounded-glass px-4">
              <div className="flex-1">
                <p className="font-medium text-sm text-text-900">Investment in Organic Food Distribution</p>
                <p className="text-xs text-gray-500 mt-1">1 week ago</p>
              </div>
              <span className="text-sm font-semibold text-blue-500">৳75,000</span>
            </div>
          </div>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}

