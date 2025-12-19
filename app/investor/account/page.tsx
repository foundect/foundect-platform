"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, CreditCard, Shield, CheckCircle, Lock, LogOut, Edit2, Camera } from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { HoverButton } from "@/components/ui/hover-button";

export default function InvestorAccountPage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Ahmed Rahman",
    username: "ahmed_rahman",
    phone: "+880 1712345678",
    address: "Dhaka, Bangladesh",
  });

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    setIsEditingProfile(false);
    // TODO: Hook up to Supabase profile table
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // TODO: Implement logout with Supabase auth
    window.location.href = "/auth";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cover / Background Banner - Full and complete */}
        <div className="h-40 sm:h-48 bg-gradient-to-r from-[#0D3B66] via-[#1E5A8E] to-[#3A8DFF] relative">
          {/* Subtle pattern overlay for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        
        {/* Profile Identity - Completely separate from banner */}
        <div className="px-6 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
            {/* Avatar - Overlaps banner slightly for visual interest */}
            <div className="relative flex-shrink-0 -mt-20 sm:-mt-24">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] flex items-center justify-center text-white text-3xl sm:text-4xl font-bold border-4 border-white shadow-xl">
                AR
              </div>
              <button 
                className="absolute bottom-1 right-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all"
                aria-label="Change profile picture"
              >
                <Camera className="h-4 w-4 text-gray-700" />
              </button>
            </div>

            {/* Identity Info - Clear space from banner, beside avatar on desktop */}
            <div className="flex-1 text-center sm:text-left w-full">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {profileData.fullName}
              </h1>
              <p className="text-gray-600 mb-3">@{profileData.username}</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-[#0D3B66]">
                  Individual Investor
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {profileData.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification & Trust Status */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Verification & Trust Status</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">KYC Status</p>
              <p className="font-semibold text-emerald-700">Verified ✓</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email Status</p>
              <p className="font-semibold text-emerald-700">Verified ✓</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          Your account is fully verified and trusted on Foundect. All investment limits are unlocked.
        </p>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
          {!isEditingProfile && (
            <button
              onClick={() => setIsEditingProfile(true)}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </button>
          )}
        </div>

        {isEditingProfile ? (
          <form onSubmit={handleProfileSave} className="space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.fullName}
                  onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-gray-500 text-xs">(locked)</span>
                </label>
                <input
                  type="email"
                  value="ahmed.rahman@example.com"
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  value={profileData.address}
                  onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <LiquidGlassButton type="submit" variant="primary" size="default">
                Save Changes
              </LiquidGlassButton>
              <HoverButton
                type="button"
                variant="ghost"
                size="default"
                onClick={() => setIsEditingProfile(false)}
              >
                Cancel
              </HoverButton>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-start gap-3 py-3 border-b border-gray-100">
              <User className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-medium text-gray-900">{profileData.fullName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3 border-b border-gray-100">
              <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">ahmed.rahman@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3 border-b border-gray-100">
              <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="font-medium text-gray-900">{profileData.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium text-gray-900">{profileData.address}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Profit Withdrawal Destination */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-5 w-5 text-gray-700" />
          <h2 className="text-xl font-bold text-gray-900">Profit Withdrawal Destination</h2>
        </div>
        <p className="text-sm text-gray-600 mb-6">Used only for profit distribution.</p>

        <div className="space-y-4">
          <div className="flex items-start gap-3 py-3 border-b border-gray-100">
            <div className="flex-1">
              <p className="text-sm text-gray-600">Bank Name</p>
              <p className="font-medium text-gray-900">Islami Bank Bangladesh</p>
            </div>
          </div>
          <div className="flex items-start gap-3 py-3 border-b border-gray-100">
            <div className="flex-1">
              <p className="text-sm text-gray-600">Account Number</p>
              <p className="font-medium text-gray-900">XXXX-XXXX-8765</p>
            </div>
          </div>
          <div className="flex items-start gap-3 py-3 border-b border-gray-100">
            <div className="flex-1">
              <p className="text-sm text-gray-600">Account Holder Name</p>
              <p className="font-medium text-gray-900">Ahmed Rahman</p>
            </div>
          </div>
          <div className="flex items-start gap-3 py-3">
            <div className="flex-1">
              <p className="text-sm text-gray-600">Branch</p>
              <p className="font-medium text-gray-900">Motijheel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Access */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-5 w-5 text-gray-700" />
          <h2 className="text-xl font-bold text-gray-900">Security & Access</h2>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all text-left">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Change Password</p>
                <p className="text-sm text-gray-600">Update your account password</p>
              </div>
            </div>
            <span className="text-gray-400">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all text-left">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Change Phone Number</p>
                <p className="text-sm text-gray-600">Update your registered phone</p>
              </div>
            </div>
            <span className="text-gray-400">→</span>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6 sm:p-8">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 transition-all text-red-600 font-semibold"
        >
          <LogOut className="h-5 w-5" />
          Logout from Foundect
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          You'll need to log in again to access your account.
        </p>
      </div>
    </div>
  );
}
