"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  Home, 
  LayoutDashboard, 
  Sparkles, 
  Compass, 
  Settings, 
  Receipt, 
  FileText, 
  HelpCircle,
  Menu,
  X,
  Bell,
  User,
  Sun,
  Moon
} from "lucide-react";

// TODO: Protect investor dashboard routes with auth & role-based guard
// This layout should only be accessible to authenticated users with "investor" role

const desktopNavItems = [
  { label: "Home", href: "/investor/home", icon: Home },
  { label: "Dashboard", href: "/investor/dashboard", icon: LayoutDashboard },
  { label: "AI", href: "#", icon: Sparkles, highlighted: true, disabled: true },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Settings", href: "/investor/settings", icon: Settings },
  { label: "Transactions", href: "/investor/transactions", icon: Receipt },
  { label: "Logs", href: "/investor/logs", icon: FileText },
  { label: "Support", href: "/investor/support", icon: HelpCircle },
];

const mobileNavItems = [
  { label: "Home", href: "/investor/home", icon: Home },
  { label: "Dashboard", href: "/investor/dashboard", icon: LayoutDashboard },
  { label: "AI", href: "#", icon: Sparkles, highlighted: true, disabled: true },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Menu", href: "#", icon: Menu, isMenuTrigger: true },
];

export default function InvestorLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
              <p className="text-sm text-slate-600 mt-1">Investor Portal</p>
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
                    <Moon className="h-5 w-5 text-slate-700" />
                  ) : (
                    <Sun className="h-5 w-5 text-slate-700" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================
            TOP RIGHT: NOTIFICATIONS & PROFILE (ALL SCREENS)
        ======================================== */}
        <div className="fixed top-6 right-6 z-30 flex items-center gap-3">
          {/* Notifications */}
          <Link href="/investor/notifications">
            <button className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg flex items-center justify-center hover:bg-white transition-all relative">
              <Bell className="h-5 w-5 text-slate-700" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </Link>

          {/* Profile */}
          <Link href="/investor/account">
            <button className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D3B66] to-[#3A8DFF] shadow-lg flex items-center justify-center hover:scale-105 transition-all">
              <User className="h-5 w-5 text-white" />
            </button>
          </Link>
        </div>

        {/* ========================================
            MAIN CONTENT AREA
        ======================================== */}
        <main className="pt-24 lg:pt-20 px-4 sm:px-6 lg:px-8 pb-24 lg:pb-8">
          {children}
        </main>

        {/* ========================================
            MOBILE BOTTOM NAVIGATION (<1024px)
        ======================================== */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 z-50 safe-area-bottom">
          <div className="flex items-center justify-around px-2 py-3">
            {mobileNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const isHighlighted = item.highlighted;
              const isMenuTrigger = item.isMenuTrigger;

              if (isMenuTrigger) {
                return (
                  <button
                    key={item.label}
                    onClick={toggleSidebar}
                    className="flex flex-col items-center gap-1 px-3 py-1"
                  >
                    <Icon className="h-5 w-5 text-gray-600" />
                    <span className="text-xs font-medium text-gray-600">{item.label}</span>
                  </button>
                );
              }

              if (isHighlighted) {
                return (
                  <button
                    key={item.label}
                    className="flex flex-col items-center gap-1 px-3 py-1 relative"
                    disabled
                  >
                    <div className="relative">
                      <Icon className="h-5 w-5 text-[#3A8DFF]" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <span className="text-xs font-medium text-[#3A8DFF]">{item.label}</span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 px-3 py-1 ${
                    isActive ? 'rounded-lg bg-blue-50' : ''
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-[#0D3B66]' : 'text-gray-600'}`} />
                  <span className={`text-xs font-medium ${isActive ? 'text-[#0D3B66]' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Sidebar (when menu is clicked on mobile) */}
        <div className="lg:hidden">
          {sidebarOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={toggleSidebar}
              />
              <div className="fixed top-0 left-0 h-full w-72 bg-white/95 backdrop-blur-xl border-r border-gray-200 shadow-2xl z-50 transform transition-transform duration-300">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0D3B66] to-[#3A8DFF] bg-clip-text text-transparent">
                      Foundect
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">Investor Portal</p>
                  </div>
                  <button onClick={toggleSidebar}>
                    <X className="h-6 w-6 text-slate-700" />
                  </button>
                </div>

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

                <div className="absolute bottom-6 left-4 right-4">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all"
                  >
                    <span className="font-medium text-slate-700">Theme</span>
                    <div className="flex items-center gap-2">
                      {darkMode ? (
                        <Moon className="h-5 w-5 text-slate-700" />
                      ) : (
                        <Sun className="h-5 w-5 text-slate-700" />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

