"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

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
    <aside className="w-64 border-r bg-white min-h-screen hidden md:block">
      <div className="p-6">
        <Link href="/bd" className="text-2xl font-bold text-primary">
          Foundect
        </Link>
        <p className="text-xs text-muted-foreground mt-1">
          {variant === "investor" ? "Investor Portal" : "Business Portal"}
        </p>
      </div>

      <nav className="px-3 space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

