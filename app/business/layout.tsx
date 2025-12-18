"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  LayoutDashboard,
  Sparkles,
  Compass,
  DollarSign,
  Settings,
  HelpCircle,
  Moon,
  Sun,
  Bell,
  Menu,
  X,
} from "lucide-react";

// TODO: Protect business dashboard routes with auth & role-based guard
// This layout should only be accessible to authenticated users with "business" role

const desktopNavItems = [
  { label: "Home", href: "/business/home", icon: Home },
  { label: "Dashboard", href: "/business/dashboard", icon: LayoutDashboard },
  { label: "AI", href: "#", icon: Sparkles, highlighted: true, disabled: true },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Financials", href: "/business/financials", icon: DollarSign },
  { label: "Settings", href: "/business/settings", icon: Settings },
  { label: "Support", href: "/business/support", icon: HelpCircle },
];

const mobileNavItems = [
  { label: "Home", href: "/business/home", icon: Home },
  { label: "Dashboard", href: "/business/dashboard", icon: LayoutDashboard },
  { label: "AI", href: "#", icon: Sparkles, highlighted: true, disabled: true },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Menu", href: "#", icon: Menu, isMenuTrigger: true },
];

export default function BusinessLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl -z-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />
        
        {/* ========================================
            DESKTOP HAMBURGER SIDEBAR (≥1024px)
        ======================================== */}
        <div className="hidden lg:block">
          {/* Hamburger Button - Fixed Top Left */}
          <button
            onClick={toggleSidebar}
            className="fixed top-6 left-6 z-50 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg flex items-center justify-center hover:bg-white transition-all"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>

          {/* Sidebar Overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={toggleSidebar}
            />
          )}

          {/* Sidebar Panel */}
          <div
            className={`fixed top-0 left-0 h-full w-72 bg-white/95 backdrop-blur-xl border-r border-gray-200 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0D3B66] to-[#3A8DFF] bg-clip-text text-transparent">
                Foundect
              </h2>
              <p className="text-sm text-slate-600 mt-1">Business Portal</p>
            </div>

            {/* Navigation Items */}
            <nav className="p-4 space-y-2">
              {desktopNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                const isDisabled = item.disabled;

                if (isDisabled) {
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 border-2 border-blue-200 relative cursor-not-allowed"
                    >
                      <div className="relative">
                        <Icon className="h-5 w-5 text-[#3A8DFF]" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      </div>
                      <span className="font-semibold text-[#0D3B66]">{item.label}</span>
                      <span className="ml-auto text-xs bg-blue-200 text-[#0D3B66] px-2 py-1 rounded-full">
                        Soon
                      </span>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={toggleSidebar}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0D3B66] to-[#3A8DFF] text-white shadow-lg'
                        : 'text-slate-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle */}
            <div className="absolute bottom-6 left-4 right-4">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all"
              >
                <span className="font-medium text-slate-700">Theme</span>
                <div className="flex items-center gap-2">
                  {darkMode ? (
                    <Sun className="h-5 w-5 text-slate-700" />
                  ) : (
                    <Moon className="h-5 w-5 text-slate-700" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================
            TOP RIGHT: NOTIFICATIONS & PROFILE (DESKTOP)
        ======================================== */}
        <div className="hidden lg:flex fixed top-6 right-6 z-30 items-center gap-3">
          {/* Notifications */}
          <Link href="/business/notifications">
            <button className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg flex items-center justify-center hover:bg-white transition-all relative">
              <Bell className="h-5 w-5 text-slate-700" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </Link>

          {/* Profile */}
          <Link href="/business/settings">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] flex items-center justify-center text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer">
              GT
            </div>
          </Link>
        </div>

        {/* ========================================
            MAIN CONTENT (DESKTOP)
        ======================================== */}
        <main className="hidden lg:block pt-20 px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* ========================================
            MOBILE LAYOUT (<1024px)
        ======================================== */}
        <div className="lg:hidden">
          {/* Mobile Top Bar */}
          <div className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
            <div className="flex items-center justify-between px-4 h-16">
              <Image src="/foundect-logo.png" alt="Foundect" width={120} height={32} className="h-7 w-auto" />
              <div className="flex items-center gap-3">
                <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Bell className="h-5 w-5 text-slate-700" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] flex items-center justify-center text-white font-bold text-xs">
                  GT
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Main Content */}
          <main className="pt-16 pb-20 px-4">
            {children}
          </main>

          {/* Mobile Bottom Navigation */}
          <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-white/40 shadow-2xl z-50">
            <div className="flex items-center justify-around px-2 py-3">
              {mobileNavItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                if (item.isMenuTrigger) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => setMobileMenuOpen(true)}
                      className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all"
                    >
                      <Icon className="h-5 w-5 text-slate-600" />
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.disabled ? "#" : item.href}
                    className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all relative ${
                      item.highlighted
                        ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                        : isActive
                        ? "text-[#0D3B66]"
                        : "text-slate-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                    {item.highlighted && (
                      <>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="absolute -top-2 right-0 text-[10px] bg-white text-blue-600 px-1.5 py-0.5 rounded-full font-bold shadow-sm">
                          Soon
                        </span>
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Drawer */}
              <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 animate-slide-up max-h-[70vh] overflow-y-auto">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-900">Menu</h3>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-2">
                    <Link
                      href="/business/financials"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <DollarSign className="h-5 w-5 text-slate-600" />
                      <span className="font-medium text-slate-700">Financials</span>
                    </Link>

                    <Link
                      href="/business/settings"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Settings className="h-5 w-5 text-slate-600" />
                      <span className="font-medium text-slate-700">Settings</span>
                    </Link>

                    <Link
                      href="/business/support"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <HelpCircle className="h-5 w-5 text-slate-600" />
                      <span className="font-medium text-slate-700">Support</span>
                    </Link>

                    <button
                      onClick={toggleTheme}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-all w-full"
                    >
                      {darkMode ? <Sun className="h-5 w-5 text-slate-600" /> : <Moon className="h-5 w-5 text-slate-600" />}
                      <span className="font-medium text-slate-700">Theme Toggle</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
