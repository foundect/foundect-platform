"use client";

import { useState } from "react";
import {
  Shield,
  Bell,
  Globe,
  DollarSign,
  Settings as SettingsIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lock,
  Smartphone,
  Monitor,
  Clock,
  Download,
  FileText,
  Activity,
  Key,
  CreditCard,
  LogOut,
  Trash2,
  PauseCircle,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function BusinessSettings() {
  // State for toggles
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [notifications, setNotifications] = useState({
    campaignPerformance: true,
    investorComments: true,
    fundraisingMilestones: true,
    financialActivity: true,
    platformAnnouncements: false,
  });
  const [payoutNotifications, setPayoutNotifications] = useState(true);

  // State for dropdowns
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Dhaka");
  const [currency, setCurrency] = useState("BDT");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");

  // State for modals
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  // State for collapsible sections
  const [advancedExpanded, setAdvancedExpanded] = useState(false);

  // Account summary data
  const accountSummary = {
    status: "Active",
    twoFactor: twoFactorEnabled,
    bankLinked: true,
    notificationPreference: "Custom",
  };

  // Login activity data
  const loginActivity = {
    lastLogin: "Dec 19, 2024 at 10:30 AM",
    device: "Windows PC - Chrome",
    location: "Dhaka, Bangladesh",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Settings
          </h1>
          <p className="text-gray-600">
            Manage your account preferences, security, and privacy
          </p>
        </div>

        {/* TOP SUMMARY CARD */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Account Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-gray-600">Account Status</p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  {accountSummary.status}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-600">Two-Factor Auth</p>
              <div className="flex items-center gap-2">
                {accountSummary.twoFactor ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Enabled
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Disabled
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-600">Bank Account</p>
              <div className="flex items-center gap-2">
                {accountSummary.bankLinked ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Linked
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Not Linked
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-600">Notifications</p>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  {accountSummary.notificationPreference}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 1️⃣ GENERAL SETTINGS */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                General Settings
              </h2>
              <p className="text-sm text-gray-600">
                Configure your basic preferences
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Language */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="English">English</option>
                  <option value="বাংলা">বাংলা (Bangla)</option>
                </select>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
                  <option value="Asia/Kolkata">Asia/Kolkata (GMT+5:30)</option>
                  <option value="UTC">UTC (GMT+0)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="BDT">BDT (৳)</option>
                </select>
              </div>

              {/* Date Format */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Format
                </label>
                <select
                  value={dateFormat}
                  onChange={(e) => setDateFormat(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ NOTIFICATION PREFERENCES */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Bell className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Notification Preferences
              </h2>
              <p className="text-sm text-gray-600">
                Choose what updates you want to receive
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Campaign Performance */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Campaign Performance Updates
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Get notified about funding progress and milestones
                </p>
              </div>
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    campaignPerformance: !notifications.campaignPerformance,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.campaignPerformance
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.campaignPerformance
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Investor Comments */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Investor Comments
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Receive alerts when investors comment or ask questions
                </p>
              </div>
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    investorComments: !notifications.investorComments,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.investorComments ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.investorComments
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Fundraising Milestones */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Fundraising Milestones
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Celebrate when you reach 25%, 50%, 75%, and 100% funding
                </p>
              </div>
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    fundraisingMilestones: !notifications.fundraisingMilestones,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.fundraisingMilestones
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.fundraisingMilestones
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Financial Activity */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Financial Activity Alerts
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Get notified about funds received and distributions
                </p>
              </div>
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    financialActivity: !notifications.financialActivity,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.financialActivity
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.financialActivity
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Platform Announcements */}
            <div className="flex items-center justify-between py-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Platform Announcements
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Stay updated on new features and platform updates
                </p>
              </div>
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    platformAnnouncements: !notifications.platformAnnouncements,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.platformAnnouncements
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications.platformAnnouncements
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* 3️⃣ SECURITY & ACCESS */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Security & Access
              </h2>
              <p className="text-sm text-gray-600">
                Manage your account security and login settings
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Change Password */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Change Password
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Update your password regularly for security
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowChangePasswordModal(true)}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Change
              </button>
            </div>

            {/* Two-Factor Authentication */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Add an extra layer of security to your account
                  </p>
                </div>
              </div>
              <button
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  twoFactorEnabled ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Login Activity */}
            <div className="py-3 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Login Activity
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Your recent login information
                  </p>
                </div>
              </div>
              <div className="ml-8 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4" />
                  <span>{loginActivity.lastLogin}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Monitor className="w-4 h-4" />
                  <span>{loginActivity.device}</span>
                </div>
              </div>
            </div>

            {/* Active Sessions */}
            <div className="py-3 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Active Sessions
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Devices currently logged into your account
                  </p>
                </div>
              </div>
              <div className="ml-8">
                <p className="text-sm text-gray-700 mb-3">1 active session</p>
                <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Log out from all devices
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ FINANCIAL SETTINGS */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Financial Settings
              </h2>
              <p className="text-sm text-gray-600">
                Configure your financial preferences
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Default Payout Bank */}
            <div className="py-3 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <p className="text-sm font-medium text-gray-900">
                  Default Payout Bank Account
                </p>
              </div>
              <div className="ml-8">
                <p className="text-sm text-gray-700 mb-2">
                  DBBL - **** **** **** 4523
                </p>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Change Bank Account
                </button>
              </div>
            </div>

            {/* Withdrawal Preferences */}
            <div className="py-3 border-b border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Withdrawal Preferences
              </label>
              <select className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="manual">Manual (On Request)</option>
                <option value="monthly">Monthly Automatic</option>
                <option value="quarterly">Quarterly Automatic</option>
              </select>
            </div>

            {/* Tax Residency */}
            <div className="py-3 border-b border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax Residency Country
              </label>
              <select className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="BD">Bangladesh</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Payout Notifications */}
            <div className="flex items-center justify-between py-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Payout Notifications
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Get notified when payouts are processed
                </p>
              </div>
              <button
                onClick={() => setPayoutNotifications(!payoutNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  payoutNotifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    payoutNotifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* 5️⃣ ADVANCED SETTINGS */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <button
            onClick={() => setAdvancedExpanded(!advancedExpanded)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <SettingsIcon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <h2 className="text-lg font-semibold text-gray-900">
                  Advanced Settings
                </h2>
                <p className="text-sm text-gray-600">
                  Technical features and data management
                </p>
              </div>
            </div>
            {advancedExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {advancedExpanded && (
            <div className="px-6 pb-6 space-y-4 border-t border-gray-100">
              {/* Activity Logs */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Activity Logs
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      View your account activity history
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View Logs
                </button>
              </div>

              {/* Export Data */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Export Business Data
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Download your data in CSV or PDF format
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    CSV
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    PDF
                  </button>
                </div>
              </div>

              {/* Legal Documents */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Legal Documents & Agreements
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      View terms, privacy policy, and signed agreements
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View
                </button>
              </div>

              {/* Audit Trail */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Audit Trail
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Complete history of account changes
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View Trail
                </button>
              </div>

              {/* API Access */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      API Access
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Programmatic access to your account
                    </p>
                  </div>
                </div>
                <button
                  disabled
                  className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          )}
        </section>

        {/* 6️⃣ ACCOUNT LIFECYCLE */}
        <section className="bg-white rounded-xl shadow-sm border border-red-200 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Account Lifecycle
              </h2>
              <p className="text-sm text-gray-600">
                Manage your account status
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Deactivate Account */}
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <PauseCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Deactivate Account
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    Temporarily pause your account activity. You can reactivate
                    it later.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 mb-3">
                    <li>• Your campaigns will be paused</li>
                    <li>• Investors won't be able to view your profile</li>
                    <li>• You can reactivate anytime</li>
                  </ul>
                  <button
                    onClick={() => setShowDeactivateModal(true)}
                    className="px-4 py-2 text-sm font-medium text-orange-700 bg-white border border-orange-300 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>

            {/* Delete Account */}
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <Trash2 className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Request Account Deletion
                  </h3>
                  <p className="text-xs text-gray-700 mb-2">
                    Permanently delete your account and all associated data.
                  </p>
                  <div className="bg-red-100 border border-red-200 rounded-lg p-3 mb-3">
                    <p className="text-xs font-semibold text-red-800 mb-2">
                      ⚠️ This action is irreversible
                    </p>
                    <ul className="text-xs text-red-700 space-y-1">
                      <li>• All your campaigns will be permanently removed</li>
                      <li>• Your business profile will be deleted</li>
                      <li>• Financial records will be archived (legal requirement)</li>
                      <li>• You cannot create a new account with the same details</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  >
                    Request Deletion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-8"></div>

        {/* MODALS */}
        {/* Change Password Modal */}
        {showChangePasswordModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Change Password
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowChangePasswordModal(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Deactivate Modal */}
        {showDeactivateModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <PauseCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Deactivate Account?
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Your account will be temporarily paused. You can reactivate it
                anytime by logging back in.
              </p>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowDeactivateModal(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
                  Deactivate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Delete Account Permanently?
                </h3>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm font-semibold text-red-800 mb-2">
                  This action cannot be undone
                </p>
                <p className="text-xs text-red-700">
                  All your campaigns, data, and business profile will be
                  permanently deleted. Financial records will be archived as per
                  legal requirements.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for deletion (required)
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Select a reason...</option>
                  <option value="no-longer-needed">No longer needed</option>
                  <option value="switching-platform">Switching platform</option>
                  <option value="privacy-concerns">Privacy concerns</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                  Confirm Deletion
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
