"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, CreditCard, Shield, CheckCircle, Lock, LogOut, Edit2, Camera, Plus, X, Trash2, Building2, FileText, Eye, AlertCircle, Users } from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { HoverButton } from "@/components/ui/hover-button";
import Image from "next/image";

// Bank Account Type
interface BankAccount {
  id: string;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  branch: string;
  isDefault: boolean;
}

// Nominee Type
interface Nominee {
  fullName: string;
  phoneNumber: string;
  relationship: string;
}

export default function InvestorAccountPage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Ahmed Rahman",
    username: "ahmed_rahman",
    phone: "+880 1712345678",
    address: "Dhaka, Bangladesh",
  });

  // Bank Account Management
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    {
      id: "1",
      bankName: "Islami Bank Bangladesh",
      accountHolderName: "Ahmed Rahman",
      accountNumber: "1234567890128765",
      branch: "Motijheel",
      isDefault: true,
    },
  ]);
  const [showBankModal, setShowBankModal] = useState(false);
  const [editingBankId, setEditingBankId] = useState<string | null>(null);
  const [bankFormData, setBankFormData] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    branch: "",
  });

  // KYC & Identity Data (Immutable)
  const [kycData] = useState({
    legalName: "Ahmed Rahman",
    nidNumber: "1234567890123456",
    nidDocumentFront: "/placeholder-nid.jpg", // Placeholder
    nidDocumentBack: "/placeholder-nid.jpg", // Placeholder
    eTinNumber: "123-456-789-012",
    eTinVerified: false,
  });
  const [showNIDModal, setShowNIDModal] = useState(false);
  const [showLockedFieldModal, setShowLockedFieldModal] = useState(false);
  const [isEditingETin, setIsEditingETin] = useState(false);
  const [eTinValue, setETinValue] = useState(kycData.eTinNumber);

  // Nominee Information
  const [nomineeData, setNomineeData] = useState<Nominee>({
    fullName: "Fatima Rahman",
    phoneNumber: "+880 1798765432",
    relationship: "Spouse",
  });
  const [isEditingNominee, setIsEditingNominee] = useState(false);
  const [nomineeFormData, setNomineeFormData] = useState<Nominee>({
    fullName: "",
    phoneNumber: "",
    relationship: "",
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

  // Bank Account Management Functions
  const maskAccountNumber = (accountNumber: string) => {
    if (accountNumber.length <= 4) return accountNumber;
    const lastFour = accountNumber.slice(-4);
    return `XXXX-XXXX-${lastFour}`;
  };

  const openAddBankModal = () => {
    setEditingBankId(null);
    setBankFormData({
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      branch: "",
    });
    setShowBankModal(true);
  };

  const openEditBankModal = (account: BankAccount) => {
    setEditingBankId(account.id);
    setBankFormData({
      bankName: account.bankName,
      accountHolderName: account.accountHolderName,
      accountNumber: account.accountNumber,
      branch: account.branch,
    });
    setShowBankModal(true);
  };

  const handleSaveBankAccount = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBankId) {
      // Edit existing account
      setBankAccounts(bankAccounts.map(acc => 
        acc.id === editingBankId 
          ? { ...acc, ...bankFormData }
          : acc
      ));
    } else {
      // Add new account
      const newAccount: BankAccount = {
        id: Date.now().toString(),
        ...bankFormData,
        isDefault: bankAccounts.length === 0,
      };
      setBankAccounts([...bankAccounts, newAccount]);
    }
    
    setShowBankModal(false);
    setBankFormData({
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      branch: "",
    });
  };

  const handleRemoveBankAccount = (id: string) => {
    const accountToRemove = bankAccounts.find(acc => acc.id === id);
    if (accountToRemove?.isDefault && bankAccounts.length > 1) {
      // If removing default account, set first remaining account as default
      const remainingAccounts = bankAccounts.filter(acc => acc.id !== id);
      remainingAccounts[0].isDefault = true;
      setBankAccounts(remainingAccounts);
    } else {
      setBankAccounts(bankAccounts.filter(acc => acc.id !== id));
    }
  };

  const handleSetDefaultAccount = (id: string) => {
    setBankAccounts(bankAccounts.map(acc => ({
      ...acc,
      isDefault: acc.id === id,
    })));
  };

  // KYC & Nominee Functions
  const maskNID = (nid: string) => {
    if (nid.length <= 4) return nid;
    const lastFour = nid.slice(-4);
    return `••••••••••••${lastFour}`;
  };

  const handleLockedFieldClick = () => {
    setShowLockedFieldModal(true);
  };

  const handleETinSave = () => {
    if (!kycData.eTinVerified) {
      console.log("E-TIN updated:", eTinValue);
      // TODO: Save to backend
      setIsEditingETin(false);
    }
  };

  const openEditNominee = () => {
    setNomineeFormData({ ...nomineeData });
    setIsEditingNominee(true);
  };

  const handleNomineeSave = (e: React.FormEvent) => {
    e.preventDefault();
    setNomineeData({ ...nomineeFormData });
    setIsEditingNominee(false);
    console.log("Nominee updated:", nomineeFormData);
    // TODO: Save to backend
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

      {/* Identity & Compliance (KYC) */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-gray-700" />
          <h2 className="text-xl font-bold text-gray-900">Identity & Compliance</h2>
        </div>
        <p className="text-xs text-gray-500 mb-6 italic">
          These details are collected for regulatory and Shari'ah compliance.
        </p>

        <div className="space-y-4">
          {/* Full Legal Name - Immutable */}
          <div className="flex items-start gap-3 py-3 border-b border-gray-100">
            <User className="h-5 w-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-gray-600">Full Legal Name</p>
                <Lock className="h-3 w-3 text-gray-400" title="Cannot be edited" />
              </div>
              <p className="font-medium text-gray-900">{kycData.legalName}</p>
              <p className="text-xs text-gray-500 mt-1">Must exactly match KYC record</p>
            </div>
            <button
              onClick={handleLockedFieldClick}
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors px-2 py-1 rounded hover:bg-gray-50"
            >
              Why locked?
            </button>
          </div>

          {/* NID Number - Immutable & Masked */}
          <div className="flex items-start gap-3 py-3 border-b border-gray-100">
            <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-gray-600">NID Number</p>
                <Lock className="h-3 w-3 text-gray-400" title="Cannot be edited" />
              </div>
              <p className="font-medium text-gray-900 font-mono">{maskNID(kycData.nidNumber)}</p>
              <p className="text-xs text-gray-500 mt-1">National ID verified</p>
            </div>
          </div>

          {/* NID Document - Immutable */}
          <div className="flex items-start gap-3 py-3 border-b border-gray-100">
            <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-gray-600">NID Document</p>
                <Lock className="h-3 w-3 text-gray-400" title="Cannot be replaced" />
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setShowNIDModal(true)}
                  className="relative w-32 h-20 rounded-lg border-2 border-gray-200 overflow-hidden hover:border-blue-500 transition-all group"
                >
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <Eye className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div className="absolute bottom-1 left-1 right-1 bg-black/60 text-white text-xs py-0.5 text-center rounded">
                    Front
                  </div>
                </button>
                <button
                  onClick={() => setShowNIDModal(true)}
                  className="relative w-32 h-20 rounded-lg border-2 border-gray-200 overflow-hidden hover:border-blue-500 transition-all group"
                >
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <Eye className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div className="absolute bottom-1 left-1 right-1 bg-black/60 text-white text-xs py-0.5 text-center rounded">
                    Back
                  </div>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Click to view full image</p>
            </div>
          </div>

          {/* E-TIN Number - Conditionally Editable */}
          <div className="flex items-start gap-3 py-3">
            <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-gray-600">E-TIN Number</p>
                {kycData.eTinVerified && (
                  <Lock className="h-3 w-3 text-gray-400" title="Verified and locked" />
                )}
                <span className="text-xs text-gray-500">(Optional)</span>
              </div>
              {isEditingETin && !kycData.eTinVerified ? (
                <div className="flex gap-2 mt-2">
                  <input
                    type="text"
                    value={eTinValue}
                    onChange={(e) => setETinValue(e.target.value)}
                    placeholder="XXX-XXX-XXX-XXX"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm"
                  />
                  <button
                    onClick={handleETinSave}
                    className="px-3 py-2 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingETin(false);
                      setETinValue(kycData.eTinNumber);
                    }}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{eTinValue || "Not provided"}</p>
                  {!kycData.eTinVerified && (
                    <button
                      onClick={() => setIsEditingETin(true)}
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                    >
                      <Edit2 className="h-3 w-3" />
                      Edit
                    </button>
                  )}
                </div>
              )}
              {kycData.eTinVerified && (
                <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Verified and locked
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Nominee Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Nominee Details</h2>
          </div>
          {!isEditingNominee && (
            <button
              onClick={openEditNominee}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              <Edit2 className="h-4 w-4" />
              Edit Nominee
            </button>
          )}
        </div>

        {isEditingNominee ? (
          <form onSubmit={handleNomineeSave} className="space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nominee Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={nomineeFormData.fullName}
                  onChange={(e) => setNomineeFormData({ ...nomineeFormData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nominee Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={nomineeFormData.phoneNumber}
                  onChange={(e) => setNomineeFormData({ ...nomineeFormData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship to Investor <span className="text-red-500">*</span>
                </label>
                <select
                  value={nomineeFormData.relationship}
                  onChange={(e) => setNomineeFormData({ ...nomineeFormData, relationship: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  required
                >
                  <option value="">Select relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Child">Child</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-800">
                <strong>Note:</strong> Changes to nominee details will not affect existing investments retroactively.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold rounded-lg transition-colors"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditingNominee(false)}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-start gap-3 py-3 border-b border-gray-100">
              <User className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Nominee Full Name</p>
                <p className="font-medium text-gray-900">{nomineeData.fullName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3 border-b border-gray-100">
              <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Nominee Phone Number</p>
                <p className="font-medium text-gray-900">{nomineeData.phoneNumber}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-3">
              <Users className="h-5 w-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Relationship to Investor</p>
                <p className="font-medium text-gray-900">{nomineeData.relationship}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Profit Withdrawal Destination */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Profit Withdrawal Destination</h2>
          </div>
          <button
            onClick={openAddBankModal}
            className="flex items-center gap-2 px-4 py-2 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Account
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">Manage bank accounts used for profit distribution.</p>

        {bankAccounts.length > 0 ? (
          <div className="space-y-4">
            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className={`p-5 rounded-xl border-2 transition-all ${
                  account.isDefault
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{account.bankName}</h3>
                        {account.isDefault && (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{maskAccountNumber(account.accountNumber)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditBankModal(account)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit account"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    {bankAccounts.length > 1 && (
                      <button
                        onClick={() => handleRemoveBankAccount(account.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove account"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Account Holder</p>
                    <p className="font-medium text-gray-900">{account.accountHolderName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Branch</p>
                    <p className="font-medium text-gray-900">{account.branch}</p>
                  </div>
                </div>

                {!account.isDefault && (
                  <button
                    onClick={() => handleSetDefaultAccount(account.id)}
                    className="mt-4 w-full px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                  >
                    Set as Default
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 mb-4">No bank accounts added yet</p>
            <button
              onClick={openAddBankModal}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Your First Account
            </button>
          </div>
        )}
      </div>

      {/* Logout */}
      <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6 sm:p-8">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Log Out
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          You'll need to log in again to access your account.
        </p>
      </div>

      {/* Bank Account Modal */}
      {showBankModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {editingBankId ? "Edit Bank Account" : "Add Bank Account"}
                  </h3>
                  <p className="text-sm text-gray-600">For profit withdrawals</p>
                </div>
              </div>
              <button
                onClick={() => setShowBankModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSaveBankAccount} className="p-6">
              <div className="space-y-5">
                {/* Bank Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={bankFormData.bankName}
                    onChange={(e) => setBankFormData({ ...bankFormData, bankName: e.target.value })}
                    placeholder="e.g., Islami Bank Bangladesh"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    required
                  />
                </div>

                {/* Account Holder Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Holder Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={bankFormData.accountHolderName}
                    onChange={(e) => setBankFormData({ ...bankFormData, accountHolderName: e.target.value })}
                    placeholder="e.g., Ahmed Rahman"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Must match your legal name</p>
                </div>

                {/* Account Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={bankFormData.accountNumber}
                    onChange={(e) => setBankFormData({ ...bankFormData, accountNumber: e.target.value })}
                    placeholder="e.g., 1234567890123456"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Will be masked for security</p>
                </div>

                {/* Branch */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branch <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={bankFormData.branch}
                    onChange={(e) => setBankFormData({ ...bankFormData, branch: e.target.value })}
                    placeholder="e.g., Motijheel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    required
                  />
                </div>

                {/* Security Notice */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">Secure & Encrypted</p>
                      <p className="text-xs text-blue-800">
                        Your bank details are encrypted and stored securely. They will only be used for profit distributions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold rounded-lg transition-colors"
                >
                  {editingBankId ? "Save Changes" : "Add Account"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowBankModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NID Document Viewer Modal */}
      {showNIDModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">NID Document</h3>
                  <p className="text-sm text-gray-600">National Identity Card</p>
                </div>
              </div>
              <button
                onClick={() => setShowNIDModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Front Side</p>
                <div className="w-full aspect-video bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">NID Front Image</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Back Side</p>
                <div className="w-full aspect-video bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">NID Back Image</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-2">
                <Lock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-900 mb-1">Document Locked</p>
                  <p className="text-xs text-amber-800">
                    This document cannot be replaced for legal and compliance reasons. Contact support if you need assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
              <button
                onClick={() => setShowNIDModal(false)}
                className="w-full px-4 py-3 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Locked Field Explanation Modal */}
      {showLockedFieldModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Why is this locked?</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-sm text-gray-700 mb-4">
                <strong>This information is locked for legal and compliance reasons.</strong>
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Ensures regulatory compliance with Bangladesh financial laws</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Maintains Shari'ah compliance and audit trail integrity</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Protects against identity fraud and unauthorized changes</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Required for tax reporting and profit distribution verification</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-800">
                  <strong>Need to update this information?</strong> Please contact our support team with valid documentation. Changes require manual verification.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowLockedFieldModal(false)}
                className="w-full px-4 py-3 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold rounded-lg transition-colors"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
