"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function InvestorSettingsPage() {
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change requested");
    // TODO: Implement password change with Supabase auth
  };

  const handleDeactivate = () => {
    if (confirm("Are you sure you want to deactivate your account?")) {
      console.log("Account deactivation requested");
      // TODO: Implement account deactivation
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences</p>
      </div>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your password and security settings</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit">Change Password</Button>
          </form>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button variant="outline">
                {/* TODO: Implement 2FA */}
                Enable 2FA
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose what notifications you want to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive updates about your investments via email
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Investment Updates</p>
              <p className="text-sm text-muted-foreground">
                Get notified when campaigns you invested in post updates
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Profit Share Alerts</p>
              <p className="text-sm text-muted-foreground">
                Receive alerts when you receive profit shares
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New Campaign Alerts</p>
              <p className="text-sm text-muted-foreground">
                Get notified about new investment opportunities
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Marketing Communications</p>
              <p className="text-sm text-muted-foreground">
                Receive newsletters and promotional content
              </p>
            </div>
            <Switch />
          </div>

          <Button variant="outline">
            {/* TODO: Save notification preferences to Supabase */}
            Save Preferences
          </Button>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>Manage your account status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Download Your Data</p>
              <p className="text-sm text-muted-foreground">
                Export all your investment data and account information
              </p>
            </div>
            <Button variant="outline">
              {/* TODO: Implement data export */}
              Download
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-destructive rounded-lg">
            <div>
              <p className="font-medium text-destructive">Deactivate Account</p>
              <p className="text-sm text-muted-foreground">
                Temporarily disable your account
              </p>
            </div>
            <Button variant="destructive" onClick={handleDeactivate}>
              Deactivate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

