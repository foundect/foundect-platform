"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function ApprovedStatusPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accountType = searchParams.get("type");

  const label =
    accountType === "investor"
      ? "Investor"
      : accountType === "business"
      ? "Business"
      : "Account";

  const handleProceed = () => {
    try {
      localStorage.setItem("foundect_account_status", "approved");
      localStorage.setItem("foundect_account_approved_seen", "true");
    } catch (err) {
      console.warn("Unable to persist approval state", err);
    }

    if (accountType === "business") {
      router.push("/business");
    } else {
      router.push("/investor");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg bg-white/85 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-8 sm:p-10 text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src="/foundect-logo.svg"
            alt="Foundect logo"
            width={180}
            height={64}
            className="h-12 w-auto"
            priority
          />
        </div>

        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            {label} status
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D3B66]">
            Your account has been approved
          </h1>
          <p className="text-gray-700">
            Your account is now active and ready to use.
          </p>
          <p className="text-sm text-gray-600">Thank you for your patience.</p>
        </div>

        <div className="pt-2">
          <button
            onClick={handleProceed}
            className="w-full sm:w-auto px-6 py-3 bg-[#3A8DFF] text-white font-semibold rounded-lg shadow-sm hover:bg-[#0D3B66] transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </main>
  );
}

