"use client";

import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function RejectedStatusPage() {
  const searchParams = useSearchParams();
  const accountType = searchParams.get("type");
  const reason = searchParams.get("reason");

  const label =
    accountType === "investor"
      ? "Investor account"
      : accountType === "business"
      ? "Business account"
      : "Account";

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
          <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
            <Info className="w-7 h-7 text-[#0D3B66]" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            {label} status
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D3B66]">
            We couldn’t approve your account at this time
          </h1>
          <p className="text-gray-700">
            After reviewing your information, we’re unable to approve your account right now.
          </p>
        </div>

        {reason && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-800">
              <span className="font-semibold text-[#0D3B66]">Reason:</span> {reason}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <Link
            href="/support"
            className="inline-flex justify-center w-full sm:w-auto px-6 py-3 bg-[#3A8DFF] text-white font-semibold rounded-lg shadow-sm hover:bg-[#0D3B66] transition-colors"
          >
            Contact Support
          </Link>
          <p className="text-sm text-gray-600">
            You may reapply once the issue is resolved.
          </p>
        </div>
      </div>
    </main>
  );
}



