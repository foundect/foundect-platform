import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Briefcase, ArrowRight, DollarSign } from "lucide-react";
import Link from "next/link";

export default function InvestorHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Investor</h1>
        <p className="text-gray-600">Here's an overview of your investment portfolio</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳2,50,000</div>
            <p className="text-xs text-muted-foreground">
              Across 5 campaigns
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Currently invested
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expected Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+12.5%</div>
            <p className="text-xs text-muted-foreground">
              Average projected
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>Grow your halal investment portfolio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Explore New Campaigns</h3>
              <p className="text-sm text-muted-foreground">
                Discover new Shari'ah-compliant investment opportunities
              </p>
            </div>
            <Link href="/explore">
              <Button>
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">View Your Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Track your investments and portfolio performance
              </p>
            </div>
            <Link href="/investor/dashboard">
              <Button variant="outline">
                Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Complete Your Profile</h3>
              <p className="text-sm text-muted-foreground">
                Add KYC information to increase investment limits
              </p>
            </div>
            <Link href="/investor/account">
              <Button variant="outline">
                My Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-sm">Investment in Green Textile Manufacturing</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
              <span className="text-sm font-medium">৳50,000</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-sm">Profit share received from Tech Solutions Hub</p>
                <p className="text-xs text-muted-foreground">5 days ago</p>
              </div>
              <span className="text-sm font-medium text-green-600">+৳2,500</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-sm">Investment in Organic Food Distribution</p>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
              <span className="text-sm font-medium">৳75,000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

