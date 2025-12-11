"use client";

import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassInput } from "@/components/ui/GlassInput";
import { Settings, Lock, Bell, Download, Trash2, Users } from "lucide-react";
import { useState } from "react";

export default function BusinessSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [investorUpdates, setInvestorUpdates] = useState(true);
  const [campaignAlerts, setCampaignAlerts] = useState(true);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change submitted");
    // TODO: Implement password change with Supabase
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Settings className="h-7 w-7 text-blue-500" />
          <h1 className="text-3xl font-bold text-text-900">Settings</h1>
        </div>
        <p className="text-gray-600">Manage your business account preferences</p>
      </div>

      {/* Security Settings */}
      <GlassCard className="animate-fade-in animation-delay-500">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Security</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Update your password</p>
        </GlassCardHeader>
        <GlassCardContent>
          <form onSubmit={handlePasswordChange} className="space-y-5">
            <GlassInput
              label="Current Password"
              id="currentPassword"
              type="password"
              placeholder="••••••••"
              required
            />
            <GlassInput
              label="New Password"
              id="newPassword"
              type="password"
              placeholder="••••••••"
              required
            />
            <GlassInput
              label="Confirm New Password"
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
            />
            <GlassButton type="submit" variant="primary">
              Change Password
            </GlassButton>
          </form>
        </GlassCardContent>
      </GlassCard>

      {/* Notification Preferences */}
      <GlassCard className="animate-fade-in animation-delay-1000">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Notification Preferences</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Choose how you want to be notified</p>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 glass-bg rounded-glass">
              <div>
                <h4 className="font-semibold text-text-900">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive campaign updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 glass-bg rounded-glass">
              <div>
                <h4 className="font-semibold text-text-900">Investor Updates</h4>
                <p className="text-sm text-gray-600">Get notified about new investors</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={investorUpdates}
                  onChange={(e) => setInvestorUpdates(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 glass-bg rounded-glass">
              <div>
                <h4 className="font-semibold text-text-900">Campaign Alerts</h4>
                <p className="text-sm text-gray-600">Milestone and deadline reminders</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={campaignAlerts}
                  onChange={(e) => setCampaignAlerts(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>
        </GlassCardContent>
      </GlassCard>

      {/* Team Management */}
      <GlassCard className="animate-fade-in animation-delay-1500">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Team Management</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Manage team access (Coming Soon)</p>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="glass-bg rounded-glass p-4 text-center">
            <p className="text-sm text-gray-600">Team management features will be available soon.</p>
          </div>
        </GlassCardContent>
      </GlassCard>

      {/* Data & Privacy */}
      <GlassCard className="animate-fade-in animation-delay-2000">
        <GlassCardHeader>
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5 text-blue-500" />
            <GlassCardTitle className="text-xl">Data & Privacy</GlassCardTitle>
          </div>
          <p className="text-gray-600 mt-1">Manage your business data</p>
        </GlassCardHeader>
        <GlassCardContent>
          <div className="space-y-3">
            <GlassButton variant="secondary" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Download Business Data
            </GlassButton>
            <GlassButton variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50">
              <Trash2 className="mr-2 h-4 w-4" />
              Deactivate Business Account
            </GlassButton>
          </div>
        </GlassCardContent>
      </GlassCard>
    </div>
  );
}
