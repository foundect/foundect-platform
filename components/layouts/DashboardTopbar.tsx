"use client";

import { useRouter } from "next/navigation";
import { Bell, User, LogOut, Settings } from "lucide-react";
import { GlassButton } from "@/components/ui/GlassButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardTopbarProps {
  title: string;
}

export function DashboardTopbar({ title }: DashboardTopbarProps) {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implement Supabase logout
    // For now, just redirect to home page
    router.push("/bd");
  };

  return (
    <div className="glass-bg backdrop-blur-xl border-b border-white/20 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-xl font-semibold text-text-900">{title}</h1>

      <div className="flex items-center gap-3">
        <button className="relative p-2 glass-bg rounded-pill hover:scale-105 transition-transform">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 glass-bg rounded-pill px-3 py-2 hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-accent-1 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block">Account</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-bg backdrop-blur-xl border-white/30">
            <DropdownMenuLabel className="text-text-900">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/20" />
            <DropdownMenuItem className="hover:glass-bg cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:glass-bg cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/20" />
            <DropdownMenuItem 
              onClick={handleLogout} 
              className="text-red-600 hover:bg-red-50 cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

