"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface SidebarItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface DashboardSidebarProps {
  items: SidebarItem[];
  variant: "investor" | "business";
}

export function DashboardSidebar({ items, variant }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 glass-bg backdrop-blur-xl border-r border-white/20 min-h-screen hidden md:flex flex-col">
      <div className="p-6">
        <Link href="/bd" className="block group">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-accent-1 bg-clip-text text-transparent mb-1">
            Foundect
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">
              {variant === "investor" ? "Investor Portal" : "Business Portal"}
            </span>
            <Sparkles className="h-3 w-3 text-accent-1" />
          </div>
        </Link>
      </div>

      <nav className="px-3 space-y-2 flex-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-glass text-sm font-medium transition-all group",
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-accent-1 text-white shadow-md"
                  : "text-gray-700 hover:glass-bg hover:scale-[1.02]"
              )}
            >
              {item.icon && (
                <span className={cn(
                  "w-5 h-5 transition-transform group-hover:scale-110",
                  isActive ? "text-white" : "text-gray-500"
                )}>
                  {item.icon}
                </span>
              )}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Badge */}
      <div className="p-4 m-3 glass-bg rounded-glass border border-white/30">
        <p className="text-xs text-gray-600 text-center">
          100% Shari'ah Compliant
        </p>
      </div>
    </aside>
  );
}

