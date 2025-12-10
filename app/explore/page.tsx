"use client";

import { PublicHeader } from "@/components/layouts/PublicHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp } from "lucide-react";

// Dummy campaign data
const campaigns = [
  {
    id: 1,
    name: "Green Textile Manufacturing",
    sector: "Textile",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    status: "Open",
    expectedReturn: "12-15%",
    duration: "24 months",
  },
  {
    id: 2,
    name: "Organic Food Distribution",
    sector: "Agriculture",
    targetAmount: 3000000,
    raisedAmount: 2800000,
    status: "Open",
    expectedReturn: "10-12%",
    duration: "18 months",
  },
  {
    id: 3,
    name: "Tech Solutions Hub",
    sector: "Technology",
    targetAmount: 8000000,
    raisedAmount: 1500000,
    status: "Open",
    expectedReturn: "15-18%",
    duration: "36 months",
  },
  {
    id: 4,
    name: "Halal Restaurant Chain Expansion",
    sector: "Food & Beverage",
    targetAmount: 4000000,
    raisedAmount: 4000000,
    status: "Funded",
    expectedReturn: "14-16%",
    duration: "24 months",
  },
  {
    id: 5,
    name: "E-commerce Platform",
    sector: "Technology",
    targetAmount: 6000000,
    raisedAmount: 0,
    status: "Coming Soon",
    expectedReturn: "16-20%",
    duration: "30 months",
  },
  {
    id: 6,
    name: "Sustainable Packaging Solutions",
    sector: "Manufacturing",
    targetAmount: 3500000,
    raisedAmount: 2100000,
    status: "Open",
    expectedReturn: "11-13%",
    duration: "20 months",
  },
];

export default function ExplorePage() {
  const formatCurrency = (amount: number) => {
    return `৳${(amount / 100000).toFixed(1)}L`;
  };

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore Campaigns</h1>
          <p className="text-gray-600">
            Browse Shari'ah-compliant investment opportunities from verified SMEs
          </p>
        </div>

        {/* TODO: Add filters for sector, status, expected returns, etc. */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Building2 className="h-10 w-10 text-primary" />
                  <Badge
                    variant={
                      campaign.status === "Open"
                        ? "default"
                        : campaign.status === "Funded"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{campaign.name}</CardTitle>
                <CardDescription>{campaign.sector}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {getProgressPercentage(campaign.raisedAmount, campaign.targetAmount).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{
                          width: `${getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{formatCurrency(campaign.raisedAmount)} raised</span>
                      <span>{formatCurrency(campaign.targetAmount)} target</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-600">
                      {campaign.expectedReturn}
                    </span>
                    <span className="text-muted-foreground">expected return</span>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Duration: {campaign.duration}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  disabled={campaign.status !== "Open"}
                  onClick={() => console.log(`View campaign ${campaign.id}`)}
                >
                  {campaign.status === "Open" ? "View Details" : campaign.status}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

