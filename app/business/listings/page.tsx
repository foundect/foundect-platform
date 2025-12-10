"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, MoreVertical } from "lucide-react";

// Dummy listings data
const listings = [
  {
    id: 1,
    title: "Green Textile Manufacturing - Expansion",
    status: "Live",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    investors: 87,
    createdDate: "2024-10-15",
    endDate: "2025-04-15",
  },
  {
    id: 2,
    title: "Sustainable Product Line Launch",
    status: "Live",
    targetAmount: 3000000,
    raisedAmount: 850000,
    investors: 40,
    createdDate: "2024-11-20",
    endDate: "2025-05-20",
  },
  {
    id: 3,
    title: "Equipment Upgrade Project",
    status: "Under Review",
    targetAmount: 4000000,
    raisedAmount: 0,
    investors: 0,
    createdDate: "2024-12-01",
    endDate: null,
  },
  {
    id: 4,
    title: "Export Market Expansion",
    status: "Draft",
    targetAmount: 6000000,
    raisedAmount: 0,
    investors: 0,
    createdDate: "2024-12-05",
    endDate: null,
  },
  {
    id: 5,
    title: "Working Capital 2024 Q1",
    status: "Completed",
    targetAmount: 2000000,
    raisedAmount: 2000000,
    investors: 65,
    createdDate: "2024-01-10",
    endDate: "2024-07-10",
  },
];

export default function BusinessListingsPage() {
  const formatCurrency = (amount: number) => {
    return `৳${(amount / 100000).toFixed(1)}L`;
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Live":
        return "default";
      case "Completed":
        return "secondary";
      case "Under Review":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Listings</h1>
          <p className="text-gray-600">Manage your funding campaigns</p>
        </div>
        <Button>
          {/* TODO: Implement create listing flow */}
          <Plus className="mr-2 h-4 w-4" />
          Create New Listing
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{listings.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Live Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {listings.filter(l => l.status === "Live").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Raised</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(listings.reduce((sum, l) => sum + l.raisedAmount, 0))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {listings.reduce((sum, l) => sum + l.investors, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Listings Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
          <CardDescription>View and manage your funding campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {listings.map((listing) => (
              <div key={listing.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{listing.title}</h3>
                      <Badge variant={getStatusVariant(listing.status)}>
                        {listing.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Created: {new Date(listing.createdDate).toLocaleDateString()}</span>
                      {listing.endDate && (
                        <span>Ends: {new Date(listing.endDate).toLocaleDateString()}</span>
                      )}
                      <span>{listing.investors} investors</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => console.log(`View listing ${listing.id}`)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => console.log(`Edit listing ${listing.id}`)}
                      disabled={listing.status === "Completed"}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {listing.status !== "Draft" && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Funding Progress</span>
                      <span className="font-medium">
                        {formatCurrency(listing.raisedAmount)} / {formatCurrency(listing.targetAmount)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{
                          width: `${getProgressPercentage(listing.raisedAmount, listing.targetAmount)}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>
                        {getProgressPercentage(listing.raisedAmount, listing.targetAmount).toFixed(1)}% funded
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* TODO: Add filters for status */}
      {/* TODO: Add search functionality */}
      {/* TODO: Add pagination */}
    </div>
  );
}

