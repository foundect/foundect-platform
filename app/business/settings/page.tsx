"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function BusinessSettingsPage() {
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change requested");
    // TODO: Implement password change with Supabase auth
  };

  const handleDeactivate = () => {
    if (confirm("Are you sure you want to deactivate your business account? This will pause all active campaigns.")) {
      console.log("Account deactivation requested");
      // TODO: Implement account deactivation
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your business account preferences</p>
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
                  Add an extra layer of security to your business account
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

      {/* Team Access */}
      <Card>
        <CardHeader>
          <CardTitle>Team Access</CardTitle>
          <CardDescription>Manage who can access your business account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Coming Soon:</strong> Add team members to help manage your campaigns and respond to investors.
              </p>
            </div>

            <Button variant="outline" disabled>
              {/* TODO: Implement team member management */}
              Add Team Member
            </Button>
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
                Receive updates about your campaigns via email
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New Investment Alerts</p>
              <p className="text-sm text-muted-foreground">
                Get notified immediately when someone invests in your campaign
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Milestone Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive alerts when your campaign reaches funding milestones
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Investor Questions</p>
              <p className="text-sm text-muted-foreground">
                Get notified when investors ask questions about your campaign
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Update Reminders</p>
              <p className="text-sm text-muted-foreground">
                Reminders to post regular updates for your investors
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Marketing Communications</p>
              <p className="text-sm text-muted-foreground">
                Receive tips and best practices for successful campaigns
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

      {/* Business Account Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Business Account Controls</CardTitle>
          <CardDescription>Manage your business account status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Download Business Data</p>
              <p className="text-sm text-muted-foreground">
                Export all your campaign data and investor information
              </p>
            </div>
            <Button variant="outline">
              {/* TODO: Implement data export */}
              Download
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Pause All Campaigns</p>
              <p className="text-sm text-muted-foreground">
                Temporarily pause all active campaigns
              </p>
            </div>
            <Button variant="outline">
              {/* TODO: Implement campaign pause functionality */}
              Pause Campaigns
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-destructive rounded-lg">
            <div>
              <p className="font-medium text-destructive">Deactivate Business Account</p>
              <p className="text-sm text-muted-foreground">
                Temporarily disable your business account and all campaigns
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

