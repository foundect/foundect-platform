"use client";

import { useState } from "react";
import {
  Lock,
  Shield,
  Bell,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Monitor,
  Download,
  FileText,
  Trash2,
  AlertTriangle,
  Mail,
  MessageSquare,
  Share2,
  LogOut,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { HoverButton } from "@/components/ui/hover-button";

export default function InvestorSettingsPage() {
  // Security & Access
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Investment Preferences
  const [preferredContracts, setPreferredContracts] = useState<string[]>(["Mudarabah"]);
  const [riskTolerance, setRiskTolerance] = useState("Balanced");
  const [investmentHorizon, setInvestmentHorizon] = useState("Medium-term");

  // Notification Preferences
  const [notificationPrefs, setNotificationPrefs] = useState({
    investmentUpdates: { email: true, sms: false, inApp: true },
    campaignMilestones: { email: true, sms: false, inApp: true },
    profitDistributions: { email: true, sms: true, inApp: true },
    platformAnnouncements: { email: false, sms: false, inApp: true },
  });

  // Financial Controls
  const [withdrawalFrequency, setWithdrawalFrequency] = useState("Monthly");

  // Advanced Settings
  const [advancedExpanded, setAdvancedExpanded] = useState(false);
  const [experimentalFeatures, setExperimentalFeatures] = useState(false);

  // Modals
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change submitted");
  };

  const toggleContract = (contract: string) => {
    setPreferredContracts((prev) =>
      prev.includes(contract) ? prev.filter((c) => c !== contract) : [...prev, contract]
    );
  };

  const toggleNotification = (category: keyof typeof notificationPrefs, channel: "email" | "sms" | "inApp") => {
    setNotificationPrefs((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [channel]: !prev[category][channel],
      },
    }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Manage your account preferences, security, and privacy
        </p>
      </div>

      {/* 1️⃣ Security & Access */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Lock className="h-5 w-5 text-[#0D3B66]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Security & Access</h2>
            <p className="text-sm text-gray-600">Protect your account and investments</p>
          </div>
        </div>

        {/* Change Password */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Change Password</h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <LiquidGlassButton type="submit" variant="primary" size="default">
              Update Password
            </LiquidGlassButton>
          </form>
        </div>

        {/* Two-Step Verification */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">Two-Step Verification (2FA)</h3>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                Add an extra layer of security to your account
              </p>
              <p className="text-xs text-gray-500 italic">
                Required for profit withdrawals and sensitive actions
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input
                type="checkbox"
                checked={twoFactorEnabled}
                onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>
        </div>

        {/* Active Sessions */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Monitor className="h-5 w-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Active Sessions</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Sign out from all devices except this one
          </p>
          <HoverButton
            variant="default"
            size="default"
            onClick={() => console.log("Logging out from other devices")}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Log Out from All Other Devices
          </HoverButton>
        </div>
      </div>

      {/* 2️⃣ Investment Preferences */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Investment Preferences</h2>
            <p className="text-sm text-gray-600">Personalize your investment discovery</p>
          </div>
        </div>

        {/* Preferred Investment Contracts */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Preferred Investment Contracts
          </label>
          <div className="flex flex-wrap gap-3">
            {["Mudarabah", "Musharakah", "Murabaha"].map((contract) => (
              <button
                key={contract}
                onClick={() => toggleContract(contract)}
                className={`px-4 py-2 rounded-lg border-2 transition-all font-medium text-sm ${
                  preferredContracts.includes(contract)
                    ? "border-blue-500 bg-blue-50 text-[#0D3B66]"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                {contract}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">
            This helps us show you relevant opportunities. Not a filter.
          </p>
        </div>

        {/* Risk Tolerance */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Risk Tolerance
          </label>
          <div className="grid grid-cols-3 gap-3">
            {["Conservative", "Balanced", "Growth"].map((risk) => (
              <button
                key={risk}
                onClick={() => setRiskTolerance(risk)}
                className={`px-4 py-3 rounded-lg border-2 transition-all font-medium text-sm ${
                  riskTolerance === risk
                    ? "border-blue-500 bg-blue-50 text-[#0D3B66]"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                {risk}
              </button>
            ))}
          </div>
        </div>

        {/* Investment Horizon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Investment Horizon
          </label>
          <div className="grid grid-cols-3 gap-3">
            {["Short-term", "Medium-term", "Long-term"].map((horizon) => (
              <button
                key={horizon}
                onClick={() => setInvestmentHorizon(horizon)}
                className={`px-4 py-3 rounded-lg border-2 transition-all font-medium text-sm ${
                  investmentHorizon === horizon
                    ? "border-blue-500 bg-blue-50 text-[#0D3B66]"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                {horizon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3️⃣ Notification Preferences */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
            <Bell className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
            <p className="text-sm text-gray-600">Choose how you want to stay informed</p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            { key: "investmentUpdates", label: "Investment Updates", desc: "New investments and status changes" },
            { key: "campaignMilestones", label: "Campaign Milestones", desc: "Funding goals and project progress" },
            { key: "profitDistributions", label: "Profit Distributions", desc: "When profits are credited to your account" },
            { key: "platformAnnouncements", label: "Platform Announcements", desc: "New features and important updates" },
          ].map((item) => (
            <div key={item.key} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { channel: "email", icon: Mail, label: "Email" },
                  { channel: "sms", icon: MessageSquare, label: "SMS" },
                  { channel: "inApp", icon: Bell, label: "In-app" },
                ].map(({ channel, icon: Icon, label }) => (
                  <label key={channel} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notificationPrefs[item.key as keyof typeof notificationPrefs][channel as "email" | "sms" | "inApp"]}
                      onChange={() => toggleNotification(item.key as keyof typeof notificationPrefs, channel as "email" | "sms" | "inApp")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <Icon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4️⃣ Financial Controls */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
            <CreditCard className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Financial Controls</h2>
            <p className="text-sm text-gray-600">Manage your financial preferences</p>
          </div>
        </div>

        {/* Default Bank Account */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-1">Default Bank Account</p>
          <p className="text-base font-semibold text-gray-900">Islami Bank Bangladesh</p>
          <p className="text-sm text-gray-600">XXXX-XXXX-8765</p>
          <p className="text-xs text-gray-500 mt-2 italic">
            To update bank details, visit your Account page
          </p>
        </div>

        {/* Profit Withdrawal Frequency */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Profit Withdrawal Frequency
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Weekly", "Monthly", "Quarterly", "Annually"].map((freq) => (
              <button
                key={freq}
                onClick={() => setWithdrawalFrequency(freq)}
                className={`px-4 py-3 rounded-lg border-2 transition-all font-medium text-sm ${
                  withdrawalFrequency === freq
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </div>

        {/* Currency Display */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Currency Display
          </label>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-base font-semibold text-gray-900">BDT (৳)</p>
            <p className="text-xs text-gray-500 mt-1">Bangladeshi Taka</p>
          </div>
        </div>
      </div>

      {/* 5️⃣ Advanced Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => setAdvancedExpanded(!advancedExpanded)}
          className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <FileText className="h-5 w-5 text-gray-600" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-900">Advanced Settings</h2>
              <p className="text-sm text-gray-600">For power users</p>
            </div>
          </div>
          {advancedExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </button>

        {advancedExpanded && (
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 space-y-6">
            {/* Logs */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Activity Logs</h3>
              <div className="space-y-2">
                <HoverButton variant="default" size="default" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  View Login History
                </HoverButton>
                <HoverButton variant="default" size="default" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  View Security Events
                </HoverButton>
              </div>
            </div>

            {/* Export Data */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Export Investment Summary</h3>
              <div className="flex gap-3">
                <HoverButton variant="default" size="default" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Export as PDF
                </HoverButton>
                <HoverButton variant="default" size="default" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Export as CSV
                </HoverButton>
              </div>
            </div>

            {/* Privacy Controls */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Privacy Controls</h3>
              <HoverButton
                variant="ghost"
                size="default"
                className="w-full justify-start"
                onClick={() => console.log("Clearing cache...")}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cached Data
              </HoverButton>
            </div>

            {/* Experimental Features */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Experimental Features</h3>
                  <p className="text-sm text-gray-600">
                    Try new features before they're released
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={experimentalFeatures}
                    onChange={(e) => setExperimentalFeatures(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6️⃣ Community & Support */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Community & Support</h2>
            <p className="text-sm text-gray-600">Get help and share Foundect</p>
          </div>
        </div>

        <div className="space-y-3">
          <HoverButton variant="default" size="default" className="w-full justify-start">
            <MessageSquare className="h-4 w-4 mr-2" />
            Leave a Review
          </HoverButton>
          <HoverButton variant="default" size="default" className="w-full justify-start">
            <Mail className="h-4 w-4 mr-2" />
            Ask a Question / Contact Support
          </HoverButton>
          <HoverButton variant="default" size="default" className="w-full justify-start">
            <Share2 className="h-4 w-4 mr-2" />
            Share Foundect with Friends & Family
          </HoverButton>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-3">Follow Us</p>
          <div className="flex gap-3">
            {["Facebook", "Twitter", "LinkedIn"].map((platform) => (
              <button
                key={platform}
                className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 7️⃣ Account Controls (Danger Zone) */}
      <div className="bg-white rounded-2xl shadow-sm border-2 border-red-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-red-900">Account Controls</h2>
            <p className="text-sm text-red-600">Proceed with caution</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Deactivate Account */}
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Deactivate Account</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Temporarily disable your account. You can reactivate it anytime by logging in again.
                </p>
                <p className="text-xs text-gray-500 italic">
                  Your investments will remain active during deactivation.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowDeactivateModal(true)}
              className="w-full px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-all text-amber-800 font-medium text-sm"
            >
              Deactivate My Account
            </button>
          </div>

          {/* Delete Account */}
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-start gap-3 mb-3">
              <Trash2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 mb-1">Delete Account (Permanent)</h3>
                <p className="text-sm text-red-700 mb-2 font-medium">
                  This action is irreversible
                </p>
                <p className="text-xs text-red-600">
                  All your data, investments, and account history will be permanently deleted.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="w-full px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 border border-red-300 transition-all text-red-800 font-medium text-sm"
            >
              Permanently Delete My Account
            </button>
          </div>
        </div>
      </div>

      {/* Deactivate Modal */}
      {showDeactivateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Deactivate Account?</h3>
            <p className="text-sm text-gray-600 mb-6">
              Your account will be temporarily disabled. You can reactivate it by logging in again.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  console.log("Account deactivated");
                  setShowDeactivateModal(false);
                }}
                className="flex-1 px-4 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all"
              >
                Deactivate
              </button>
              <button
                onClick={() => setShowDeactivateModal(false)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-900">Delete Account Permanently?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              This action <strong>cannot be undone</strong>. All your data will be permanently deleted.
            </p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why are you leaving? (Optional)
              </label>
              <select
                value={deleteReason}
                onChange={(e) => setDeleteReason(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
              >
                <option value="">Select a reason</option>
                <option value="not_using">Not using the platform</option>
                <option value="privacy">Privacy concerns</option>
                <option value="switching">Switching to another platform</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  console.log("Account deleted", deleteReason);
                  setShowDeleteModal(false);
                }}
                className="flex-1 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-all"
              >
                Delete Forever
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
