"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Compass, Bell, User, Sparkles } from "lucide-react";
import Image from "next/image";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  isAI?: boolean;
}

export interface GlassNavBarProps {
  onAIClick?: () => void;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  { label: "Explore", href: "/explore", icon: <Compass className="h-5 w-5" /> },
  { label: "AI", href: "#", icon: <Sparkles className="h-5 w-5" />, isAI: true },
  { label: "Notifications", href: "/notifications", icon: <Bell className="h-5 w-5" /> },
  { label: "Profile", href: "/profile", icon: <User className="h-5 w-5" /> },
];

const GlassNavBar = React.forwardRef<HTMLElement, GlassNavBarProps>(
  ({ onAIClick, className }, ref) => {
    const pathname = usePathname();

    const handleAIClick = (e: React.MouseEvent) => {
      e.preventDefault();
      onAIClick?.();
    };

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
          "glass-bg rounded-pill shadow-glass-lg",
          "px-2 py-2",
          "md:hidden", // Only show on mobile
          className
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex items-center gap-1">
          {defaultNavItems.map((item) => {
            const isActive = pathname === item.href;
            const isAI = item.isAI;

            return (
              <li key={item.label}>
                {isAI ? (
                  <button
                    onClick={handleAIClick}
                    className={cn(
                      "glass-nav-item flex flex-col items-center justify-center",
                      "w-16 h-16 relative glow-effect",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    )}
                    aria-label={item.label}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-accent-1 rounded-full blur-md opacity-60 animate-pulse" />
                      <div className="relative p-2 bg-gradient-to-r from-blue-500 to-accent-1 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-[10px] mt-1 font-medium text-blue-500">
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "glass-nav-item flex flex-col items-center justify-center",
                      "w-14 h-14",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                      isActive && "active"
                    )}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className={cn(
                      "transition-colors",
                      isActive ? "text-blue-500" : "text-gray-600"
                    )}>
                      {item.icon}
                    </div>
                    <span className={cn(
                      "text-[10px] mt-1",
                      isActive ? "text-blue-500 font-medium" : "text-gray-600"
                    )}>
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

GlassNavBar.displayName = "GlassNavBar";

export { GlassNavBar };

/**
 * Usage Example:
 * 
 * <GlassNavBar onAIClick={() => setAIDrawerOpen(true)} />
 */

