"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, CreditCard } from "lucide-react";

export default function InvestorAccountPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account information saved");
    // TODO: Hook up to Supabase profile table
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Account</h1>
        <p className="text-gray-600">Manage your personal information and preferences</p>
      </div>

      {/* Account Status */}
      <Card>
        <CardHeader>
          <CardTitle>Account Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Verification Status</p>
              <Badge variant="secondary">Email Verified</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">KYC Status</p>
              <Badge variant="outline">Pending</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Account Type</p>
              <Badge variant="default">Investor</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    defaultValue="Ahmed Rahman"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    defaultValue="ahmed.rahman@example.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    defaultValue="+880 1712-345678"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="address"
                    type="text"
                    placeholder="Your address"
                    defaultValue="Dhaka, Bangladesh"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>

      {/* KYC Information */}
      <Card>
        <CardHeader>
          <CardTitle>KYC Information</CardTitle>
          <CardDescription>
            Complete your KYC to unlock higher investment limits
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>KYC Required:</strong> Please complete your KYC verification to invest more than ৳50,000 per campaign.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nid">National ID Number</Label>
              <Input
                id="nid"
                type="text"
                placeholder="Enter your NID number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
              />
            </div>

            <Button variant="outline">
              {/* TODO: Add file upload for KYC documents */}
              Upload ID Documents
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bank Details */}
      <Card>
        <CardHeader>
          <CardTitle>Bank Details</CardTitle>
          <CardDescription>
            For receiving profit shares and withdrawals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                type="text"
                placeholder="e.g., Islami Bank Bangladesh"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="accountNumber"
                    type="text"
                    placeholder="XXXX-XXXX-XXXX"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountName">Account Holder Name</Label>
                <Input
                  id="accountName"
                  type="text"
                  placeholder="As per bank records"
                />
              </div>
            </div>

            <Button variant="outline">
              {/* TODO: Save bank details to Supabase */}
              Save Bank Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

