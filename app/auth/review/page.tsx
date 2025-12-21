"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ReviewStatusPage() {
  const searchParams = useSearchParams();
  const accountType = searchParams.get("type");
  const label =
    accountType === "investor"
      ? "Investor account"
      : accountType === "business"
      ? "Business account"
      : "Account";

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-8 sm:p-10 text-center space-y-6">
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

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            {label} status
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D3B66]">
            Your account is under review
          </h1>
          <p className="text-gray-700">
            Our team is reviewing your information to ensure compliance and
            security.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-[#0D3B66]">
              This usually takes up to 24 hours.
            </p>
          </div>
          <p className="text-sm text-gray-600">
            You’ll be notified once your account is approved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/support"
            className="text-[#3A8DFF] font-semibold hover:underline"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}



