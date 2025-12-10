"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Mail, Phone, Globe, MapPin } from "lucide-react";

export default function BusinessCompanyPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Company profile saved");
    // TODO: Save company profile to Supabase
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Company Profile</h1>
        <p className="text-gray-600">Manage your business information</p>
      </div>

      {/* Verification Status */}
      <Card>
        <CardHeader>
          <CardTitle>Verification Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Business Verification</p>
              <Badge variant="default">Verified</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Shari'ah Compliance</p>
              <Badge variant="default">Approved</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Account Type</p>
              <Badge variant="secondary">Business</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Your company's public profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Your Company Ltd."
                  defaultValue="Green Textile Manufacturing"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Select defaultValue="textile">
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="textile">Textile & Garments</SelectItem>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationCountry">Registration Country *</Label>
                <Select defaultValue="bd">
                  <SelectTrigger id="registrationCountry">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bd">Bangladesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Company Description *</Label>
              <Textarea
                id="description"
                placeholder="Tell investors about your business..."
                rows={5}
                defaultValue="Green Textile Manufacturing is a leading sustainable textile manufacturer in Bangladesh, specializing in eco-friendly fabrics and garments. We are committed to ethical production practices and environmental sustainability."
                required
              />
            </div>

            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>How investors can reach your business</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Business Email *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="contact@company.com"
                defaultValue="info@greentextile.com.bd"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Business Phone *</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="+880 2-XXXX-XXXX"
                defaultValue="+880 2-9876543"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="website"
                type="url"
                placeholder="https://yourcompany.com"
                defaultValue="https://greentextile.com.bd"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Business Address *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="address"
                type="text"
                placeholder="Full business address"
                defaultValue="123 Industrial Area, Dhaka 1000, Bangladesh"
                className="pl-10"
              />
            </div>
          </div>

          <Button variant="outline">Save Contact Info</Button>
        </CardContent>
      </Card>

      {/* Business Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Business Documents</CardTitle>
          <CardDescription>
            Upload required documents for verification
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Trade License</Label>
            <div className="flex items-center gap-2">
              <Input type="file" accept=".pdf,.jpg,.png" />
              <Badge variant="default">Verified</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Label>TIN Certificate</Label>
            <div className="flex items-center gap-2">
              <Input type="file" accept=".pdf,.jpg,.png" />
              <Badge variant="default">Verified</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Bank Statement (Last 6 months)</Label>
            <div className="flex items-center gap-2">
              <Input type="file" accept=".pdf" />
              <Badge variant="default">Verified</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Shari'ah Compliance Certificate (if applicable)</Label>
            <div className="flex items-center gap-2">
              <Input type="file" accept=".pdf,.jpg,.png" />
              <Badge variant="default">Verified</Badge>
            </div>
          </div>

          <Button variant="outline">
            {/* TODO: Implement document upload to Supabase storage */}
            Upload Documents
          </Button>
        </CardContent>
      </Card>

      {/* Financial Information */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Information</CardTitle>
          <CardDescription>
            Key financial metrics (for internal review)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="annualRevenue">Annual Revenue (৳)</Label>
              <Input
                id="annualRevenue"
                type="number"
                placeholder="e.g., 50000000"
                defaultValue="75000000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <Input
                id="employees"
                type="number"
                placeholder="e.g., 50"
                defaultValue="120"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="established">Year Established</Label>
              <Input
                id="established"
                type="number"
                placeholder="e.g., 2015"
                defaultValue="2015"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrationNumber">Business Registration Number</Label>
              <Input
                id="registrationNumber"
                type="text"
                placeholder="XXXXXXXX"
                defaultValue="BD-12345678"
              />
            </div>
          </div>

          <Button variant="outline">
            {/* TODO: Save financial info to Supabase */}
            Save Financial Info
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

