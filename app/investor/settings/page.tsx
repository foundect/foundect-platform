"use client";

import { useState } from "react";
import {
  Lock,
  Shield,
  Bell,
  CreditCard,
  ChevronDown,
  ChevronUp,
  ChevronRight,
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
  Plus,
  X,
  Globe,
} from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { HoverButton } from "@/components/ui/hover-button";

// Bank Account Type
interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  isDefault: boolean;
}

export default function InvestorSettingsPage() {
  // General Settings
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Dhaka");
  const [currency, setCurrency] = useState("BDT");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");

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
  const [withdrawalTiming, setWithdrawalTiming] = useState("scheduled");

  // Advanced Settings
  const [advancedExpanded, setAdvancedExpanded] = useState(false);
  const [experimentalFeatures, setExperimentalFeatures] = useState(false);

  // Bank Account Management (Read-only for display)
  const [bankAccounts] = useState<BankAccount[]>([
    { id: "1", bankName: "Islami Bank Bangladesh", accountNumber: "XXXX-XXXX-8765", isDefault: true },
  ]);

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

      {/* 1️⃣ General Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Globe className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">General Settings</h2>
            <p className="text-sm text-gray-600">Configure your basic preferences</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Language & Timezone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              >
                <option value="English">English</option>
                <option value="বাংলা">বাংলা (Bangla)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              >
                <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
                <option value="Asia/Kolkata">Asia/Kolkata (GMT+5:30)</option>
                <option value="UTC">UTC (GMT+0)</option>
              </select>
            </div>
          </div>

          {/* Currency & Date Format */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              >
                <option value="BDT">BDT (৳)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Format
              </label>
              <select
                value={dateFormat}
                onChange={(e) => setDateFormat(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 2️⃣ Security & Access */}
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
            <button 
              type="submit"
              className="px-6 py-3 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D3B66] focus:ring-offset-2"
            >
              Update Password
            </button>
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

      {/* 3️⃣ Investment Preferences */}
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

      {/* 4️⃣ Notification Preferences */}
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

      {/* 5️⃣ Financial Controls */}
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

        {/* Bank Account Management */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">Bank Account Management</h3>
            <a
              href="/investor/account"
              className="text-sm font-medium text-[#0D3B66] hover:text-[#3A8DFF] transition-colors"
            >
              Manage in Account →
            </a>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            {bankAccounts.find(acc => acc.isDefault) ? (
              <>
                <p className="text-sm font-medium text-gray-700 mb-1">Default Bank Account</p>
                <p className="text-base font-semibold text-gray-900">
                  {bankAccounts.find(acc => acc.isDefault)?.bankName}
                </p>
                <p className="text-sm text-gray-600">
                  {bankAccounts.find(acc => acc.isDefault)?.accountNumber}
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Manage bank accounts from your Account page
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600 mb-2">No bank account added yet</p>
                <p className="text-xs text-gray-500 italic">
                  Add bank accounts from your Account page
                </p>
              </>
            )}
          </div>
        </div>

        {/* Profit Withdrawal Timing */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Profit Withdrawal Timing
          </label>
          <div className="space-y-3">
            {/* Scheduled Distribution */}
            <button
              onClick={() => setWithdrawalTiming("scheduled")}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                withdrawalTiming === "scheduled"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                  withdrawalTiming === "scheduled"
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-gray-300 bg-white"
                }`}>
                  {withdrawalTiming === "scheduled" && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div>
                  <p className={`font-semibold mb-1 ${
                    withdrawalTiming === "scheduled" ? "text-emerald-700" : "text-gray-900"
                  }`}>
                    Scheduled Distribution
                  </p>
                  <p className="text-sm text-gray-600">
                    Profits are released automatically based on the campaign's predefined distribution schedule.
                  </p>
                </div>
              </div>
            </button>

            {/* On Availability */}
            <button
              onClick={() => setWithdrawalTiming("onAvailability")}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                withdrawalTiming === "onAvailability"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                  withdrawalTiming === "onAvailability"
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-gray-300 bg-white"
                }`}>
                  {withdrawalTiming === "onAvailability" && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div>
                  <p className={`font-semibold mb-1 ${
                    withdrawalTiming === "onAvailability" ? "text-emerald-700" : "text-gray-900"
                  }`}>
                    On Availability
                  </p>
                  <p className="text-sm text-gray-600">
                    Withdraw profits immediately once they are declared and available.
                  </p>
                </div>
              </div>
            </button>

            {/* End-of-Campaign Payout */}
            <button
              onClick={() => setWithdrawalTiming("endOfCampaign")}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                withdrawalTiming === "endOfCampaign"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                  withdrawalTiming === "endOfCampaign"
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-gray-300 bg-white"
                }`}>
                  {withdrawalTiming === "endOfCampaign" && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div>
                  <p className={`font-semibold mb-1 ${
                    withdrawalTiming === "endOfCampaign" ? "text-emerald-700" : "text-gray-900"
                  }`}>
                    End-of-Campaign Payout
                  </p>
                  <p className="text-sm text-gray-600">
                    All profits are withdrawn together at the end of the investment period.
                  </p>
                </div>
              </div>
            </button>
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

      {/* 6️⃣ Advanced Settings */}
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
          <div className="border-t border-gray-200">
            {/* Activity Logs Section */}
            <div className="px-6 sm:px-8 pt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Activity Logs</h3>
              <div className="divide-y divide-gray-100 -mx-6 sm:-mx-8">
                {/* Login History */}
                <button className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">View Login History</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>

                {/* Security Events */}
                <button className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">View Security Events</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Data & Exports Section */}
            <div className="px-6 sm:px-8 pt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Data & Exports</h3>
              <div className="divide-y divide-gray-100 -mx-6 sm:-mx-8">
                {/* Export as PDF */}
                <button className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Export Investment Summary (PDF)</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>

                {/* Export as CSV */}
                <button className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Export Investment Summary (CSV)</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Privacy Controls Section */}
            <div className="px-6 sm:px-8 pt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Privacy Controls</h3>
              <div className="divide-y divide-gray-100 -mx-6 sm:-mx-8">
                {/* Clear Cached Data */}
                <button 
                  onClick={() => console.log("Clearing cache...")}
                  className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Trash2 className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Clear Cached Data</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Experimental Features - Toggle Row */}
            <div className="px-6 sm:px-8 pt-6 pb-6 sm:pb-8">
              <div className="pt-6 border-t border-gray-200">
                <button className="w-full flex items-center justify-between py-2 group">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 text-left">Experimental Features</h3>
                    <p className="text-xs text-gray-600 text-left">
                      Try new features before they're released
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 ml-4">
                    <input
                      type="checkbox"
                      checked={experimentalFeatures}
                      onChange={(e) => setExperimentalFeatures(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </button>
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

        {/* Action Rows */}
        <div className="divide-y divide-gray-100">
          {/* Leave a Review */}
          <button className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors group">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Leave a Review</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>

          {/* Ask a Question / Contact Support */}
          <button className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors group">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Ask a Question / Contact Support</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>

          {/* Share Foundect with Friends & Family */}
          <button className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors group">
            <div className="flex items-center gap-3">
              <Share2 className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Share Foundect with Friends & Family</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>
        </div>

        {/* Follow Us Section */}
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
