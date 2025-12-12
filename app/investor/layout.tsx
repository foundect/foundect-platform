"use client";

import { ReactNode, useState } from "react";
import { DashboardSidebar } from "@/components/layouts/DashboardSidebar";
import { DashboardTopbar } from "@/components/layouts/DashboardTopbar";
import { GlassNavBar } from "@/components/ui/GlassNavBar";
import { AIChatDrawer } from "@/components/ui/AIChatDrawer";
import { Home, LayoutDashboard, User, Bell, Settings, Compass, Sparkles } from "lucide-react";

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
  const [aiDrawerOpen, setAIDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#e8f2ff]/70 via-[#f7fbff]/40 to-[#e8f2ff]/70 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
      
      <DashboardSidebar items={investorNavItems} variant="investor" />
      
      <div className="flex-1 flex flex-col pb-20 md:pb-6">
        <DashboardTopbar title="Foundect Investor" />
        
        <main className="flex-1 p-5 md:p-6 overflow-auto container mx-auto px-4 md:px-8">
          {children}
        </main>
      </div>

      {/* Mobile Navigation Bar - Only visible on /investor/* pages */}
      <GlassNavBar 
        onAIClick={() => setAIDrawerOpen(true)}
      />
      
      <AIChatDrawer 
        isOpen={aiDrawerOpen} 
        onClose={() => setAIDrawerOpen(false)} 
      />
    </div>
  );
}

