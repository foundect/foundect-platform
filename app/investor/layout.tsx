"use client";

import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/layouts/DashboardSidebar";
import { DashboardTopbar } from "@/components/layouts/DashboardTopbar";
import { Home, LayoutDashboard, User, Bell, Settings } from "lucide-react";

// TODO: Protect investor dashboard routes with auth & role-based guard
// This layout should only be accessible to authenticated users with "investor" role

const investorNavItems = [
  { label: "Home", href: "/investor/home", icon: <Home className="h-5 w-5" /> },
  { label: "Dashboard", href: "/investor/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: "My Account", href: "/investor/account", icon: <User className="h-5 w-5" /> },
  { label: "Notifications", href: "/investor/notifications", icon: <Bell className="h-5 w-5" /> },
  { label: "Settings", href: "/investor/settings", icon: <Settings className="h-5 w-5" /> },
];

export default function InvestorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
      
      <DashboardSidebar items={investorNavItems} variant="investor" />
      
      <div className="flex-1 flex flex-col">
        <DashboardTopbar title="Foundect Investor" />
        
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

