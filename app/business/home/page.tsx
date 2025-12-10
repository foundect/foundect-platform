import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, List, ArrowRight, DollarSign, Users } from "lucide-react";
import Link from "next/link";

export default function BusinessHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Green Textile Manufacturing</h1>
        <p className="text-gray-600">Manage your funding campaigns and business profile</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Funds Raised</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳32,00,000</div>
            <p className="text-xs text-muted-foreground">
              From 2 campaigns
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
            <List className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Currently live
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              Supporting your business
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your business on Foundect</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Create New Listing</h3>
              <p className="text-sm text-muted-foreground">
                Start a new funding campaign for your business
              </p>
            </div>
            <Button>
              {/* TODO: Implement create listing flow */}
              Create <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">View Your Listings</h3>
              <p className="text-sm text-muted-foreground">
                Manage and update your active campaigns
              </p>
            </div>
            <Link href="/business/listings">
              <Button variant="outline">
                View Listings <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Update Company Profile</h3>
              <p className="text-sm text-muted-foreground">
                Keep your business information up to date
              </p>
            </div>
            <Link href="/business/company">
              <Button variant="outline">
                Company Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
          <CardDescription>Overview of your active campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Green Textile Manufacturing - Expansion</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Target: ৳50,00,000</span>
                  <span>Raised: ৳32,00,000</span>
                  <span className="text-green-600 font-medium">64% funded</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-primary rounded-full h-2" style={{ width: "64%" }} />
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Sustainable Product Line Launch</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Target: ৳30,00,000</span>
                  <span>Raised: ৳8,50,000</span>
                  <span className="text-yellow-600 font-medium">28% funded</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-primary rounded-full h-2" style={{ width: "28%" }} />
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
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
                <p className="font-medium text-sm">New investment received</p>
                <p className="text-xs text-muted-foreground">Ahmed R. invested in your campaign</p>
              </div>
              <span className="text-sm font-medium text-green-600">+৳25,000</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium text-sm">Campaign milestone reached</p>
                <p className="text-xs text-muted-foreground">Your campaign reached 50% funding</p>
              </div>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-sm">Update posted</p>
                <p className="text-xs text-muted-foreground">Q4 progress report shared with investors</p>
              </div>
              <span className="text-xs text-muted-foreground">5 days ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

