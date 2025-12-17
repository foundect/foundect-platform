"use client";

import { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
      
      {/* Logo/Brand at top */}
      <div className="absolute top-8 left-8 z-20">
        <Link href="/bd" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-accent-1 bg-clip-text text-transparent">
            Foundect
          </div>
        </Link>
      </div>

      {/* Main content */}
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        {children}
      </div>
    </div>
  );
}

