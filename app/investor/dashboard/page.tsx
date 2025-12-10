import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Briefcase, PieChart } from "lucide-react";

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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Investment Dashboard</h1>
        <p className="text-gray-600">Track and manage your portfolio</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalCurrentValue)}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +{gainPercentage}% gain
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalInvested)}</div>
            <p className="text-xs text-muted-foreground">
              Principal amount
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{investments.length}</div>
            <p className="text-xs text-muted-foreground">
              Campaigns
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gain</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(totalGain)}
            </div>
            <p className="text-xs text-muted-foreground">
              Unrealized gain
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
          <CardDescription>Your investment growth over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed">
            <div className="text-center">
              <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                {/* TODO: Add chart library (e.g., recharts) for portfolio visualization */}
                Chart visualization coming soon
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* My Investments Table */}
      <Card>
        <CardHeader>
          <CardTitle>My Investments</CardTitle>
          <CardDescription>All your active investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm">Campaign</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Invested</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Current Value</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Expected Return</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {investments.map((investment) => {
                  const gain = investment.currentValue - investment.amount;
                  const gainPercent = ((gain / investment.amount) * 100).toFixed(1);
                  
                  return (
                    <tr key={investment.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{investment.campaign}</td>
                      <td className="py-3 px-4">{formatCurrency(investment.amount)}</td>
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium">{formatCurrency(investment.currentValue)}</div>
                          <div className="text-xs text-green-600">+{gainPercent}%</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{investment.expectedReturn}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {new Date(investment.date).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="default">{investment.status}</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

