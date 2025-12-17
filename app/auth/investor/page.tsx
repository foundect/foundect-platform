"use client";

import { useState, useEffect } from "react";

export default function InvestorSignupPage() {
  // ========== GLOBAL STATE ==========
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    countryCode: "+88",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    // Step 2
    gender: "",
    dob: "",
    occupation: "",
    monthlyIncome: "",
    investmentExperience: "",
    preferredInvestmentType: "",
    // Step 3
    nidFront: null as File | null,
    nidBack: null as File | null,
    selfie: null as File | null,
    nomineeName: "",
    nomineePhone: "",
    nomineeRelationship: "",
    // Step 4
    bankName: "",
    branch: "",
    accountNumber: "",
    accountHolderName: "",
    // Step 5
    shariahAgree: false,
  });

  const [phoneVerified, setPhoneVerified] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otpInput, setOtpInput] = useState(["", "", "", "", "", ""]);
  const [bankSkipped, setBankSkipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });
  const [quizPassed, setQuizPassed] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // ========== PASSWORD VALIDATION ==========
  const validatePassword = (pwd: string) => {
    const hasMinLength = pwd.length >= 8;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    
    const score = [hasMinLength, hasUppercase, hasNumber, hasSpecial].filter(Boolean).length;
    let strength = "Weak";
    if (score === 4) strength = "Strong";
    else if (score >= 2) strength = "Medium";
    
    return { hasMinLength, hasUppercase, hasNumber, hasSpecial, strength };
  };

  const passwordValidation = validatePassword(formData.password);

  // ========== AGE VALIDATION ==========
  const calculateAge = (dob: string) => {
    if (!dob) return 0;
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // ========== STEP VALIDATION ==========
  const isStep1Valid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.includes("@") &&
      formData.phone.trim() !== "" &&
      formData.password !== "" &&
      formData.password === formData.confirmPassword &&
      passwordValidation.hasMinLength &&
      passwordValidation.hasUppercase &&
      passwordValidation.hasNumber &&
      passwordValidation.hasSpecial &&
      formData.agreeTerms &&
      phoneVerified
    );
  };

  const isStep2Valid = () => {
    const age = calculateAge(formData.dob);
    return (
      formData.gender !== "" &&
      formData.dob !== "" &&
      age >= 18 &&
      formData.occupation.trim() !== "" &&
      formData.monthlyIncome !== "" &&
      formData.investmentExperience !== "" &&
      formData.preferredInvestmentType !== ""
    );
  };

  const isStep3Valid = () => {
    return (
      formData.nidFront !== null &&
      formData.nidBack !== null &&
      formData.selfie !== null &&
      formData.nomineeName.trim() !== "" &&
      formData.nomineePhone.trim() !== "" &&
      formData.nomineeRelationship.trim() !== ""
    );
  };

  const isStep4Valid = () => {
    if (bankSkipped) return true;
    return (
      formData.bankName.trim() !== "" &&
      formData.branch.trim() !== "" &&
      formData.accountNumber.trim() !== "" &&
      formData.accountHolderName.trim() !== ""
    );
  };

  const isStep5Valid = () => {
    return formData.shariahAgree;
  };

  // ========== OTP TIMER ==========
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // ========== HANDLERS ==========
  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData({ ...formData, [field]: file });
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otpInput];
    newOtp[index] = value;
    setOtpInput(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const code = otpInput.join("");
    if (code === "123456") {
      setPhoneVerified(true);
      setOtpModalOpen(false);
      setOtpInput(["", "", "", "", "", ""]);
    } else {
      alert("Invalid OTP. Try 123456");
    }
  };

  const handleContinueStep1 = () => {
    if (!phoneVerified) {
      setOtpModalOpen(true);
      setResendTimer(60);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && isStep1Valid()) setCurrentStep(2);
    else if (currentStep === 2 && isStep2Valid()) setCurrentStep(3);
    else if (currentStep === 3 && isStep3Valid()) setCurrentStep(4);
    else if (currentStep === 4 && isStep4Valid()) setCurrentStep(5);
    else if (currentStep === 5 && isStep5Valid()) setCurrentStep(6);
  };

  const handleBackStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleQuizSubmit = () => {
    const correct = {
      q1: "follows",
      q2: "no",
      q3: "depends",
    };
    
    if (
      quizAnswers.q1 === correct.q1 &&
      quizAnswers.q2 === correct.q2 &&
      quizAnswers.q3 === correct.q3
    ) {
      setQuizPassed(true);
    } else {
      alert("Some answers are incorrect. Please review and try again.");
    }
  };

  const handleCompleteRegistration = () => {
    console.log("Form Data:", formData);
    console.log("Bank Skipped:", bankSkipped);
    console.log("Quiz Passed:", quizPassed);
    setShowSuccess(true);
  };

  // ========== RENDER ==========
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[520px] bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 transition-all duration-300">
        
        {/* ========== STEP INDICATOR ========== */}
        {!showSuccess && (
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Step {currentStep} of 6</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#3A8DFF] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* ========== STEP 1: ACCOUNT SETUP ========== */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-4">Create Your Account</h2>
            
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            />
            
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            />
            
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) => handleInputChange("countryCode", e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              >
                <option value="+88">+88</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              />
              {formData.password && (
                <div className="mt-2 space-y-1 text-xs">
                  <p className={passwordValidation.hasMinLength ? "text-green-600" : "text-red-600"}>
                    ✓ Min 8 characters
                  </p>
                  <p className={passwordValidation.hasUppercase ? "text-green-600" : "text-red-600"}>
                    ✓ 1 uppercase letter
                  </p>
                  <p className={passwordValidation.hasNumber ? "text-green-600" : "text-red-600"}>
                    ✓ 1 number
                  </p>
                  <p className={passwordValidation.hasSpecial ? "text-green-600" : "text-red-600"}>
                    ✓ 1 special character
                  </p>
                  <p className="font-semibold mt-2">
                    Strength: <span className={
                      passwordValidation.strength === "Strong" ? "text-green-600" :
                      passwordValidation.strength === "Medium" ? "text-yellow-600" : "text-red-600"
                    }>{passwordValidation.strength}</span>
                  </p>
                </div>
              )}
            </div>
            
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            />
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-xs text-red-600">Passwords do not match</p>
            )}
            
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                I agree to the Terms & Conditions and Shari'ah Policy
              </span>
            </label>
            
            {phoneVerified && (
              <p className="text-sm text-green-600 font-semibold">✓ Phone Verified</p>
            )}
            
            <button
              onClick={phoneVerified ? handleNextStep : handleContinueStep1}
              disabled={!formData.fullName || !formData.email || !formData.phone || !formData.password || 
                       formData.password !== formData.confirmPassword || !formData.agreeTerms ||
                       !passwordValidation.hasMinLength || !passwordValidation.hasUppercase ||
                       !passwordValidation.hasNumber || !passwordValidation.hasSpecial}
              className="w-full bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {phoneVerified ? "Continue" : "Verify Phone"}
            </button>
          </div>
        )}

        {/* ========== STEP 2: INVESTOR PROFILE ========== */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-4">Investor Profile</h2>
            
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            
            <div>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => handleInputChange("dob", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              />
              {formData.dob && calculateAge(formData.dob) < 18 && (
                <p className="text-xs text-red-600 mt-1">You must be at least 18 years old</p>
              )}
            </div>
            
            <input
              type="text"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={(e) => handleInputChange("occupation", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            />
            
            <select
              value={formData.monthlyIncome}
              onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            >
              <option value="">Monthly Income Range</option>
              <option value="0-25k">৳0 - ৳25,000</option>
              <option value="25k-50k">৳25,000 - ৳50,000</option>
              <option value="50k-100k">৳50,000 - ৳1,00,000</option>
              <option value="100k+">৳1,00,000+</option>
            </select>
            
            <select
              value={formData.investmentExperience}
              onChange={(e) => handleInputChange("investmentExperience", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            >
              <option value="">Investment Experience</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
            
            <select
              value={formData.preferredInvestmentType}
              onChange={(e) => handleInputChange("preferredInvestmentType", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
            >
              <option value="">Preferred Investment Type</option>
              <option value="short">Short-term</option>
              <option value="long">Long-term</option>
              <option value="both">Both</option>
            </select>
            
            <div className="flex gap-2">
              <button
                onClick={handleBackStep}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!isStep2Valid()}
                className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ========== STEP 3: KYC + NOMINEE ========== */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-4">KYC & Nominee</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">NID Front</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload("nidFront", e.target.files?.[0] || null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              />
              {formData.nidFront && (
                <p className="text-xs text-green-600 mt-1">✓ {formData.nidFront.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">NID Back</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload("nidBack", e.target.files?.[0] || null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              />
              {formData.nidBack && (
                <p className="text-xs text-green-600 mt-1">✓ {formData.nidBack.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Selfie</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload("selfie", e.target.files?.[0] || null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              />
              {formData.selfie && (
                <p className="text-xs text-green-600 mt-1">✓ {formData.selfie.name}</p>
              )}
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold text-gray-700 mb-3">Nominee Information</h3>
              
              <input
                type="text"
                placeholder="Nominee Full Name"
                value={formData.nomineeName}
                onChange={(e) => handleInputChange("nomineeName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all mb-3"
              />
              
              <input
                type="tel"
                placeholder="Nominee Phone"
                value={formData.nomineePhone}
                onChange={(e) => handleInputChange("nomineePhone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all mb-3"
              />
              
              <input
                type="text"
                placeholder="Relationship"
                value={formData.nomineeRelationship}
                onChange={(e) => handleInputChange("nomineeRelationship", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleBackStep}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!isStep3Valid()}
                className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ========== STEP 4: BANK SETUP ========== */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-4">Bank Setup (Optional)</h2>
            
            <input
              type="text"
              placeholder="Bank Name"
              value={formData.bankName}
              onChange={(e) => handleInputChange("bankName", e.target.value)}
              disabled={bankSkipped}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all disabled:bg-gray-100"
            />
            
            <input
              type="text"
              placeholder="Branch"
              value={formData.branch}
              onChange={(e) => handleInputChange("branch", e.target.value)}
              disabled={bankSkipped}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all disabled:bg-gray-100"
            />
            
            <input
              type="text"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={(e) => handleInputChange("accountNumber", e.target.value)}
              disabled={bankSkipped}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all disabled:bg-gray-100"
            />
            
            <input
              type="text"
              placeholder="Account Holder Name"
              value={formData.accountHolderName}
              onChange={(e) => handleInputChange("accountHolderName", e.target.value)}
              disabled={bankSkipped}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all disabled:bg-gray-100"
            />
            
            <button
              onClick={() => setBankSkipped(!bankSkipped)}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-all"
            >
              {bankSkipped ? "Add Bank Details" : "Skip for now"}
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={handleBackStep}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!isStep4Valid()}
                className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ========== STEP 5: SHARI'AH DECLARATION ========== */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-4">Shari'ah Declaration</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                "I confirm my funds are halal and I agree to Shari'ah-compliant investing."
              </p>
            </div>
            
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.shariahAgree}
                onChange={(e) => handleInputChange("shariahAgree", e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                I confirm and agree to the above declaration
              </span>
            </label>
            
            <div className="flex gap-2">
              <button
                onClick={handleBackStep}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!isStep5Valid()}
                className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ========== STEP 6: KNOWLEDGE CHECK (QUIZ) ========== */}
        {currentStep === 6 && !quizPassed && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-4">Knowledge Check</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700 mb-2">
                  Q1: What does Shari'ah-compliant investing mean?
                </p>
                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="follows"
                    checked={quizAnswers.q1 === "follows"}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q1: e.target.value })}
                  />
                  <span className="text-sm">It follows Islamic principles</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="other"
                    checked={quizAnswers.q1 === "other"}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q1: e.target.value })}
                  />
                  <span className="text-sm">It guarantees high returns</span>
                </label>
              </div>
              
              <div>
                <p className="font-medium text-gray-700 mb-2">
                  Q2: Can returns be guaranteed?
                </p>
                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="yes"
                    checked={quizAnswers.q2 === "yes"}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q2: e.target.value })}
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="no"
                    checked={quizAnswers.q2 === "no"}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q2: e.target.value })}
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
              
              <div>
                <p className="font-medium text-gray-700 mb-2">
                  Q3: Can funds be withdrawn anytime?
                </p>
                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q3"
                    value="yes"
                    checked={quizAnswers.q3 === "yes"}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                  />
                  <span className="text-sm">Yes, always</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q3"
                    value="depends"
                    checked={quizAnswers.q3 === "depends"}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                  />
                  <span className="text-sm">Depends on contract</span>
                </label>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleBackStep}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleQuizSubmit}
                disabled={!quizAnswers.q1 || !quizAnswers.q2 || !quizAnswers.q3}
                className="flex-1 bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        )}

        {/* ========== QUIZ PASSED BADGE ========== */}
        {currentStep === 6 && quizPassed && !showSuccess && (
          <div className="space-y-6 text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-xl p-6">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Congratulations!</h3>
              <p className="text-lg font-semibold text-green-600">
                Ethical Investor – Level 1
              </p>
            </div>
            
            <button
              onClick={handleCompleteRegistration}
              className="w-full bg-[#F4D35E] text-[#0D3B66] py-3 rounded-lg font-bold hover:bg-[#f4d35ecc] transition-all"
            >
              Complete Registration
            </button>
          </div>
        )}

        {/* ========== SUCCESS SCREEN ========== */}
        {showSuccess && (
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-[#0D3B66]">Registration Complete!</h2>
            <p className="text-gray-600">
              Your investor account has been successfully created.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This is a UI demo. Check the console for form data.
              </p>
            </div>
          </div>
        )}

        {/* ========== OTP MODAL ========== */}
        {otpModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h3 className="text-2xl font-bold text-[#0D3B66] mb-2">Verify Your Phone</h3>
              <p className="text-gray-600 mb-6">
                Enter the OTP sent to {formData.countryCode} {formData.phone.replace(/\d(?=\d{4})/g, "*")}
              </p>
              
              <div className="flex gap-2 justify-center mb-6">
                {otpInput.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A8DFF] focus:border-transparent outline-none transition-all"
                  />
                ))}
              </div>
              
              <button
                onClick={handleVerifyOtp}
                disabled={otpInput.join("").length !== 6}
                className="w-full bg-[#3A8DFF] text-white py-3 rounded-lg font-semibold hover:bg-[#0D3B66] transition-all disabled:bg-gray-300 disabled:cursor-not-allowed mb-3"
              >
                Verify
              </button>
              
              <button
                onClick={() => setResendTimer(60)}
                disabled={resendTimer > 0}
                className="w-full text-[#3A8DFF] py-2 rounded-lg font-medium hover:bg-blue-50 transition-all disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
              </button>
              
              <button
                onClick={() => {
                  setOtpModalOpen(false);
                  setOtpInput(["", "", "", "", "", ""]);
                }}
                className="w-full text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all mt-2"
              >
                Cancel
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Demo: Use code <strong>123456</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}