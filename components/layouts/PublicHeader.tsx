"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PublicHeader() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/bd" className="text-2xl font-bold text-primary">
          Foundect
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/bd" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors">
            Explore
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/auth">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/auth">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

