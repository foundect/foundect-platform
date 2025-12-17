"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GlassButton } from "@/components/ui/GlassButton";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

export function PublicHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/bd" },
    { label: "Explore", href: "/explore" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-bg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/bd" className="flex items-center">
            <Image
              src="/foundect-logo.png"
              alt="Foundect"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-bg rounded-pill px-2 py-1" role="navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "glass-nav-item px-4 py-2 text-sm font-medium transition-all",
                    isActive && "active text-blue-500"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth">
              <GlassButton variant="ghost" size="sm">
                Login
              </GlassButton>
            </Link>
            <Link href="/auth">
              <GlassButton variant="primary" size="sm">
                Sign Up
              </GlassButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-glass transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass-bg rounded-card p-4 space-y-2 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 hover:bg-white/10 rounded-glass transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <Link href="/auth">
                <GlassButton variant="ghost" className="w-full">
                  Login
                </GlassButton>
              </Link>
              <Link href="/auth">
                <GlassButton variant="primary" className="w-full">
                  Sign Up
                </GlassButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

