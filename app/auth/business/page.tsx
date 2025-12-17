"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, Upload, CheckCircle, ArrowLeft } from "lucide-react";

export default function BusinessSignupPage() {
  // ========================================
  // GLOBAL STATE
  // ========================================
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form data for all steps
  const [formData, setFormData] = useState({
    // Step 1
    businessName: "",
    businessEmail: "",
    countryCode: "+88",
    businessPhone: "",
    password: "",
    confirmPassword: "",
    
    // Step 2
    industry: "",
    businessAddress: "",
    website: "",
    description: "",
    
    // Step 3
    businessType: "",
    numberOfOwners: 1,
    owners: [{ fullName: "", role: "", ownershipPercentage: 100 }],
    
    // Step 4
    tradeLicense: null as File | null,
    nidDocument: null as File | null,
    registrationDocument: null as File | null,
    
    // Step 5
    shariahCompliant: false,
    agreeToTerms: false,
  });

  // Track step completion
  const [stepCompleted, setStepCompleted] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // ========================================
  // VALIDATION HELPERS
  // ========================================
  
  // Step 1 validation
  const isStep1Valid = () => {
    return (
      formData.businessName.trim() !== "" &&
      formData.businessEmail.trim() !== "" &&
      formData.businessPhone.trim() !== "" &&
      formData.password.length >= 8 &&
      formData.password === formData.confirmPassword
    );
  };

  // Step 2 validation
  const isStep2Valid = () => {
    return (
      formData.industry !== "" &&
      formData.businessAddress.trim() !== "" &&
      formData.description.trim().length >= 20 &&
      formData.description.trim().length <= 300
    );
  };

  // Step 3 validation
  const isStep3Valid = () => {
    if (formData.businessType === "") return false;
    
    const totalOwnership = formData.owners.reduce(
      (sum, owner) => sum + (parseFloat(owner.ownershipPercentage.toString()) || 0),
      0
    );
    
    const allOwnersFilled = formData.owners.every(
      (owner) => owner.fullName.trim() !== "" && owner.role.trim() !== ""
    );
    
    return totalOwnership === 100 && allOwnersFilled;
  };

  // Step 4 validation
  const isStep4Valid = () => {
    return (
      formData.tradeLicense !== null &&
      formData.nidDocument !== null &&
      formData.registrationDocument !== null
    );
  };

  // Step 5 validation
  const isStep5Valid = () => {
    return formData.shariahCompliant && formData.agreeToTerms;
  };

  // ========================================
  // HANDLERS
  // ========================================
  
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOwnerChange = (index: number, field: string, value: any) => {
    const updatedOwners = [...formData.owners];
    updatedOwners[index] = { ...updatedOwners[index], [field]: value };
    setFormData((prev) => ({ ...prev, owners: updatedOwners }));
  };

  const addOwner = () => {
    setFormData((prev) => ({
      ...prev,
      owners: [...prev.owners, { fullName: "", role: "", ownershipPercentage: 0 }],
    }));
  };

  const removeOwner = (index: number) => {
    if (formData.owners.length > 1) {
      const updatedOwners = formData.owners.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, owners: updatedOwners }));
    }
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleNext = () => {
    setStepCompleted((prev) => ({ ...prev, [currentStep]: true }));
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    console.log("Business Signup Form Data:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Business signup completed! Check console for form data.");
    }, 1000);
  };

  // Update number of owners when businessType changes
  useEffect(() => {
    if (formData.businessType === "Sole Proprietorship") {
      setFormData((prev) => ({
        ...prev,
        numberOfOwners: 1,
        owners: [{ fullName: "", role: "Owner", ownershipPercentage: 100 }],
      }));
    }
  }, [formData.businessType]);

  // Calculate total ownership percentage
  const totalOwnership = formData.owners.reduce(
    (sum, owner) => sum + (parseFloat(owner.ownershipPercentage.toString()) || 0),
    0
  );

  // ========================================
  // INDUSTRY OPTIONS
  // ========================================
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Real Estate",
    "Agriculture",
    "Food & Beverage",
    "Transportation",
    "Energy",
    "Other",
  ];

  // ========================================
  // RENDER FUNCTIONS
  // ========================================

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep} of 5
        </span>
        <span className="text-sm font-medium text-[#3A8DFF]">
          {Math.round((currentStep / 5) * 100)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#3A8DFF] to-[#0D3B66] h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / 5) * 100}%` }}
        />
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#0D3B66] mb-2">
        Business Account Setup
      </h2>
      <p className="text-gray-600 mb-6">
        Create your business account to get started
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business Name *
        </label>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) => handleInputChange("businessName", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
          placeholder="Enter business name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business Email *
        </label>
        <input
          type="email"
          value={formData.businessEmail}
          onChange={(e) => handleInputChange("businessEmail", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
          placeholder="business@example.com"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code
          </label>
          <input
            type="text"
            value={formData.countryCode}
            onChange={(e) => handleInputChange("countryCode", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Phone *
          </label>
          <input
            type="tel"
            value={formData.businessPhone}
            onChange={(e) => handleInputChange("businessPhone", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            placeholder="1234567890"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password *
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all pr-12"
            placeholder="Min 8 characters"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password *
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all pr-12"
            placeholder="Re-enter password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {formData.confirmPassword && formData.password !== formData.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={!isStep1Valid()}
        className="w-full bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed mt-6"
      >
        Continue
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#0D3B66] mb-2">
        Business Information
      </h2>
      <p className="text-gray-600 mb-6">
        Tell us more about your business
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Industry / Sector *
        </label>
        <select
          value={formData.industry}
          onChange={(e) => handleInputChange("industry", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
        >
          <option value="">Select industry</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business Address *
        </label>
        <textarea
          value={formData.businessAddress}
          onChange={(e) => handleInputChange("businessAddress", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all resize-none"
          rows={3}
          placeholder="Enter complete business address"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website (Optional)
        </label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => handleInputChange("website", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
          placeholder="https://example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Short Description * (20-300 characters)
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all resize-none"
          rows={4}
          placeholder="Describe what your business does"
          maxLength={300}
        />
        <div className="flex justify-between text-sm mt-1">
          <span className={formData.description.length < 20 ? "text-red-500" : "text-green-600"}>
            {formData.description.length < 20 ? `${20 - formData.description.length} more characters needed` : "✓ Minimum reached"}
          </span>
          <span className="text-gray-500">
            {formData.description.length}/300
          </span>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isStep2Valid()}
          className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#0D3B66] mb-2">
        Ownership Structure
      </h2>
      <p className="text-gray-600 mb-6">
        Define your business ownership details
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business Type *
        </label>
        <select
          value={formData.businessType}
          onChange={(e) => handleInputChange("businessType", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
        >
          <option value="">Select business type</option>
          <option value="Sole Proprietorship">Sole Proprietorship</option>
          <option value="Partnership">Partnership</option>
          <option value="Private Limited">Private Limited Company</option>
        </select>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Total Ownership:
          </span>
          <span
            className={`text-lg font-bold ${
              totalOwnership === 100 ? "text-green-600" : "text-red-600"
            }`}
          >
            {totalOwnership.toFixed(1)}%
          </span>
        </div>
        {totalOwnership !== 100 && (
          <p className="text-xs text-red-600 mt-1">
            Total must equal 100%
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Owners</h3>
          {formData.businessType !== "Sole Proprietorship" && (
            <button
              onClick={addOwner}
              className="text-[#3A8DFF] text-sm font-medium hover:underline"
            >
              + Add Owner
            </button>
          )}
        </div>

        {formData.owners.map((owner, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Owner {index + 1}
              </span>
              {formData.owners.length > 1 && (
                <button
                  onClick={() => removeOwner(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={owner.fullName}
                onChange={(e) =>
                  handleOwnerChange(index, "fullName", e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role *
              </label>
              <input
                type="text"
                value={owner.role}
                onChange={(e) =>
                  handleOwnerChange(index, "role", e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
                placeholder="e.g., CEO, Partner"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ownership Percentage *
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={owner.ownershipPercentage}
                  onChange={(e) =>
                    handleOwnerChange(
                      index,
                      "ownershipPercentage",
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
                  placeholder="0"
                  disabled={formData.businessType === "Sole Proprietorship"}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  %
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isStep3Valid()}
          className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#0D3B66] mb-2">
        Business Verification
      </h2>
      <p className="text-gray-600 mb-6">
        Upload required documents for verification
      </p>

      <div className="space-y-4">
        {/* Trade License */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trade License *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#3A8DFF] transition-all">
            <input
              type="file"
              id="tradeLicense"
              onChange={(e) =>
                handleFileChange("tradeLicense", e.target.files?.[0] || null)
              }
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="tradeLicense"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="text-gray-400 mb-2" size={32} />
              {formData.tradeLicense ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    {formData.tradeLicense.name}
                  </span>
                </div>
              ) : (
                <>
                  <span className="text-sm text-gray-600">
                    Click to upload Trade License
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    PDF, JPG, PNG (Max 5MB)
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* NID Document */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NID of Primary Owner *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#3A8DFF] transition-all">
            <input
              type="file"
              id="nidDocument"
              onChange={(e) =>
                handleFileChange("nidDocument", e.target.files?.[0] || null)
              }
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="nidDocument"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="text-gray-400 mb-2" size={32} />
              {formData.nidDocument ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    {formData.nidDocument.name}
                  </span>
                </div>
              ) : (
                <>
                  <span className="text-sm text-gray-600">
                    Click to upload NID
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    PDF, JPG, PNG (Max 5MB)
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Registration Document */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Registration Document *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#3A8DFF] transition-all">
            <input
              type="file"
              id="registrationDocument"
              onChange={(e) =>
                handleFileChange(
                  "registrationDocument",
                  e.target.files?.[0] || null
                )
              }
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="registrationDocument"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="text-gray-400 mb-2" size={32} />
              {formData.registrationDocument ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    {formData.registrationDocument.name}
                  </span>
                </div>
              ) : (
                <>
                  <span className="text-sm text-gray-600">
                    Click to upload Registration Document
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    PDF, JPG, PNG (Max 5MB)
                  </span>
                </>
              )}
            </label>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> All documents will be reviewed by our team.
          You'll be notified once verification is complete.
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isStep4Valid()}
          className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#0D3B66] mb-2">
        Shari'ah Compliance & Confirmation
      </h2>
      <p className="text-gray-600 mb-6">
        Final step to complete your business signup
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">
          Shari'ah Compliance Declaration
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          "I confirm that my business does not engage in haram activities and
          complies with Shari'ah principles. This includes avoiding interest
          (riba), gambling (maysir), excessive uncertainty (gharar), and any
          prohibited goods or services."
        </p>
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.shariahCompliant}
            onChange={(e) =>
              handleInputChange("shariahCompliant", e.target.checked)
            }
            className="mt-1 w-5 h-5 text-[#3A8DFF] border-gray-300 rounded focus:ring-2 focus:ring-[#3A8DFF]"
          />
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            I confirm that my business is <strong>Shari'ah-compliant</strong>{" "}
            and does not engage in any prohibited activities.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) =>
              handleInputChange("agreeToTerms", e.target.checked)
            }
            className="mt-1 w-5 h-5 text-[#3A8DFF] border-gray-300 rounded focus:ring-2 focus:ring-[#3A8DFF]"
          />
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            I agree to Foundect's{" "}
            <a href="#" className="text-[#3A8DFF] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#3A8DFF] hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-gray-700">
          <strong>Important:</strong> By completing this signup, you acknowledge
          that all information provided is accurate and that your business
          complies with Islamic finance principles.
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isStep5Valid()}
          className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Review & Submit
        </button>
      </div>
    </div>
  );

  const renderFinalScreen = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="text-green-600" size={48} />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#0D3B66] mb-3">
          Almost There!
        </h2>
        <p className="text-gray-600 text-lg">
          Review your information and complete your business signup
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-left space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Business Name:</span>
          <span className="text-sm font-semibold text-gray-800">
            {formData.businessName}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Email:</span>
          <span className="text-sm font-semibold text-gray-800">
            {formData.businessEmail}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Industry:</span>
          <span className="text-sm font-semibold text-gray-800">
            {formData.industry}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Business Type:</span>
          <span className="text-sm font-semibold text-gray-800">
            {formData.businessType}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Number of Owners:</span>
          <span className="text-sm font-semibold text-gray-800">
            {formData.owners.length}
          </span>
        </div>
      </div>

      <button
        onClick={handleFinalSubmit}
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#3A8DFF] to-[#0D3B66] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Processing..." : "Complete Business Signup"}
      </button>

      <button
        onClick={handleBack}
        className="w-full text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all"
      >
        Go Back to Review
      </button>
    </div>
  );

  // ========================================
  // MAIN RENDER
  // ========================================
  return (
    <div className="w-full max-w-[520px]">
      {/* Glassmorphic Card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          {/* Logo / Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0D3B66] to-[#3A8DFF] bg-clip-text text-transparent">
              Foundect
            </h1>
            <p className="text-gray-600 mt-2">Business Signup</p>
          </div>

          {/* Step Indicator (only show if not on final screen) */}
          {currentStep <= 5 && renderStepIndicator()}

          {/* Step Content */}
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          {currentStep === 6 && renderFinalScreen()}
        </div>

      {/* Footer Links */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/auth" className="text-[#3A8DFF] font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
