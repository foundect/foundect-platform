import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Image
              src="/foundect-logo.png"
              alt="Foundect"
              width={140}
              height={60}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-800">
              Ethical investing. Built on trust.
            </p>
            <p className="text-xs text-gray-600">
              Shari’ah-aligned investment platform
            </p>
          </div>

          {/* Column 2 — Legal */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-900">Legal</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/risk-disclosure" className="hover:underline">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="/user-agreement" className="hover:underline">
                  User Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="/business-campaign-agreement"
                  className="hover:underline"
                >
                  Business Campaign Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="/shariah-compliance-policy"
                  className="hover:underline"
                >
                  Shari’ah Compliance Policy
                </Link>
              </li>
              <li>
                <Link href="/aml-kyc-policy" className="hover:underline">
                  AML / KYC Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/dispute-resolution-policy"
                  className="hover:underline"
                >
                  Dispute Resolution Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Support */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-900">Support</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/support" className="hover:underline">
                  Support Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-xs text-gray-600">
          Foundect is a facilitative platform and does not guarantee returns or
          manage funds. All investments carry risk.
        </p>

        {/* Bottom bar */}
        <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">© 2025 Foundect. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/foundect"
              target="_blank"
              rel="noreferrer"
              aria-label="Foundect on Facebook"
              className="text-gray-500 hover:text-gray-700"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/foundect"
              target="_blank"
              rel="noreferrer"
              aria-label="Foundect on Instagram"
              className="text-gray-500 hover:text-gray-700"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/foundect"
              target="_blank"
              rel="noreferrer"
              aria-label="Foundect on X"
              className="text-gray-500 hover:text-gray-700"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/foundect/"
              target="_blank"
              rel="noreferrer"
              aria-label="Foundect on LinkedIn"
              className="text-gray-500 hover:text-gray-700"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


