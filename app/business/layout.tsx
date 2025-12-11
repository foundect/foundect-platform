"use client";

import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/layouts/DashboardSidebar";
import { DashboardTopbar } from "@/components/layouts/DashboardTopbar";
import { Home, List, Building2, Bell, Settings } from "lucide-react";

// TODO: Protect business dashboard routes with auth & role-based guard
// This layout should only be accessible to authenticated users with "business" role

const businessNavItems = [
  { label: "Home", href: "/business/home", icon: <Home className="h-5 w-5" /> },
  { label: "Listings", href: "/business/listings", icon: <List className="h-5 w-5" /> },
  { label: "Company", href: "/business/company", icon: <Building2 className="h-5 w-5" /> },
  { label: "Notifications", href: "/business/notifications", icon: <Bell className="h-5 w-5" /> },
  { label: "Settings", href: "/business/settings", icon: <Settings className="h-5 w-5" /> },
];

export default function BusinessLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
      
      <DashboardSidebar items={businessNavItems} variant="business" />
      
      <div className="flex-1 flex flex-col">
        <DashboardTopbar title="Foundect Business" />
        
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

