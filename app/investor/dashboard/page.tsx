import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Briefcase, PieChart, BarChart3 } from "lucide-react";

// Dummy investment data
const investments = [
  {
    id: 1,
    campaign: "Green Textile Manufacturing",
    amount: 50000,
    date: "2024-11-15",
    status: "Active",
    expectedReturn: "12-15%",
    currentValue: 52500,
  },
  {
    id: 2,
    campaign: "Organic Food Distribution",
    amount: 75000,
    date: "2024-11-01",
    status: "Active",
    expectedReturn: "10-12%",
    currentValue: 77250,
  },
  {
    id: 3,
    campaign: "Tech Solutions Hub",
    amount: 100000,
    date: "2024-10-20",
    status: "Active",
    expectedReturn: "15-18%",
    currentValue: 106000,
  },
  {
    id: 4,
    campaign: "Sustainable Packaging Solutions",
    amount: 25000,
    date: "2024-12-01",
    status: "Active",
    expectedReturn: "11-13%",
    currentValue: 25500,
  },
];

export default function InvestorDashboardPage() {
  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalCurrentValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalGain = totalCurrentValue - totalInvested;
  const gainPercentage = ((totalGain / totalInvested) * 100).toFixed(2);

  const formatCurrency = (amount: number) => {
    return `৳${amount.toLocaleString()}`;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 text-text-900">Investment Dashboard</h1>
        <p className="text-gray-600">Track and manage your portfolio</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in animation-delay-500">
        <StatCard
          title="Portfolio Value"
          value={formatCurrency(totalCurrentValue)}
          subtitle={`+${gainPercentage}% gain`}
          icon={<DollarSign className="h-5 w-5" />}
          trend={`+${gainPercentage}%`}
          valueColor="text-blue-500"
        />

        <StatCard
          title="Total Invested"
          value={formatCurrency(totalInvested)}
          subtitle="Principal amount"
          icon={<Briefcase className="h-5 w-5" />}
        />

        <StatCard
          title="Active Investments"
          value={investments.length.toString()}
          subtitle="Campaigns"
          icon={<PieChart className="h-5 w-5" />}
        />

        <StatCard
          title="Total Gain"
          value={formatCurrency(totalGain)}
          subtitle="Unrealized gain"
          icon={<TrendingUp className="h-5 w-5" />}
          valueColor="text-green-600"
        />
      </div>

      {/* Chart Placeholder */}
      <GlassCard className="animate-fade-in animation-delay-1000">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Portfolio Performance</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Your investment growth over time</p>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="h-64 flex items-center justify-center glass-bg rounded-glass border-2 border-dashed border-white/30">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 font-medium">
                Chart visualization coming soon
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {/* TODO: Add chart library (e.g., recharts) for portfolio visualization */}
                Connect charting library to display performance
              </p>
            </div>
          </div>
        </GlassCardContent>
      </GlassCard>

      {/* My Investments Table */}
      <GlassCard className="animate-fade-in animation-delay-1500">
        <GlassCardHeader>
          <GlassCardTitle className="text-xl">My Investments</GlassCardTitle>
          <p className="text-gray-600 mt-1">All your active investments</p>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-text-900">Campaign</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-text-900">Invested</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-text-900">Current Value</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-text-900">Expected Return</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-text-900">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-text-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {investments.map((investment) => {
                  const gain = investment.currentValue - investment.amount;
                  const gainPercent = ((gain / investment.amount) * 100).toFixed(1);
                  
                  return (
                    <tr key={investment.id} className="border-b border-white/10 hover:glass-bg transition-colors">
                      <td className="py-4 px-4 font-medium text-text-900">{investment.campaign}</td>
                      <td className="py-4 px-4 text-gray-700">{formatCurrency(investment.amount)}</td>
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-semibold text-text-900">{formatCurrency(investment.currentValue)}</div>
                          <div className="text-xs text-green-600 font-medium">+{gainPercent}%</div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700">{investment.expectedReturn}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {new Date(investment.date).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4">
                        <span className="glass-bg rounded-pill px-3 py-1 text-xs font-medium text-green-700 border border-green-500/20">
                          {investment.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}

