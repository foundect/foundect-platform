"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "./SiteFooter";

export function FooterGate() {
  const pathname = usePathname();

  // Exclusions (mandatory)
  // - Login pages
  // - Signup pages
  // - KYC / Onboarding flows (Investor & Business)
  //
  // Current app structure routes these under `/auth/*`.
  if (pathname.startsWith("/auth")) return null;

  // Extra guardrails (in case future flows live elsewhere)
  const lower = pathname.toLowerCase();
  if (lower.includes("/kyc") || lower.includes("onboarding")) return null;

  return <SiteFooter />;
}




