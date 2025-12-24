"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { User, Building2 } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const handleAccountTypeSelect = (type: "investor" | "business") => {
    if (type === "investor") {
      router.push("/auth/investor");
    } else {
      router.push("/auth/business");
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Create a New Account
          </h1>
          <p className="text-gray-600 text-sm">
            Choose how you want to join Foundect
          </p>
        </div>

        {/* Account Type Cards */}
        <div className="space-y-4 mb-6">
          {/* Individual Investor Card */}
          <button
            onClick={() => handleAccountTypeSelect("investor")}
            className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 rounded-xl p-6 text-left transition-all group hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Individual Investor
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Invest ethically in Shari'ah-aligned opportunities
                </p>
                <span className="inline-block text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  Continue as Individual →
                </span>
              </div>
            </div>
          </button>

          {/* Business Card */}
          <button
            onClick={() => handleAccountTypeSelect("business")}
            className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 rounded-xl p-6 text-left transition-all group hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Business
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Raise funds or invest as a business entity
                </p>
                <span className="inline-block text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  Continue as Business →
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Existing User Flow */}
        <div className="text-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}



