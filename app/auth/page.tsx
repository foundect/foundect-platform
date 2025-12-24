"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    if (error) setError("");
  };

  const handleLogin = () => {
    // Basic validation
    if (!formData.emailOrPhone.trim() || !formData.password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    // Mock login logic (replace with actual authentication)
    console.log("Login attempt:", formData);

    // For demo purposes, check if it's a business or investor
    // In production, this would be determined by backend response
    const isBusiness = formData.emailOrPhone.includes("business");
    
    if (isBusiness) {
      router.push("/business/home");
    } else {
      router.push("/investor/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/foundect-logo.png"
            alt="Foundect"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Log In</h1>
          <p className="text-gray-600 text-sm">
            Welcome back. Please enter your details to continue.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {/* Email or Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email or phone
            </label>
            <input
              type="text"
              value={formData.emailOrPhone}
              onChange={(e) => handleInputChange("emailOrPhone", e.target.value)}
              placeholder="Email address or phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <button
                type="button"
                onClick={() => router.push("/auth/forgot-password")}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-12"
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

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-sm text-red-600 text-center">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!formData.emailOrPhone.trim() || !formData.password.trim()}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Log In
          </button>
        </div>

        {/* New User Flow */}
        <div className="mt-6 text-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">
            New to Foundect?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
