"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/overview",  label: "Overview",       icon: "🏠", step: 1 },
  { href: "/purpose",   label: "Purpose",         icon: "🎯", step: 2 },
  { href: "/roles",     label: "Roles",           icon: "👥", step: 3 },
  { href: "/workflow",  label: "Workflow",        icon: "🔄", step: 4 },
  { href: "/status",    label: "Status Tracking", icon: "📍", step: 5 },
  { href: "/demo",      label: "SIP Form Demo",   icon: "📝", step: 6 },
  { href: "/dashboard", label: "Dashboard",       icon: "📊", step: 7 },
  { href: "/controls",  label: "Controls",        icon: "🛡️", step: 8 },
  { href: "/summary",   label: "Summary",         icon: "✅", step: 9 },
];

export default function PresentationShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = navItems.find((i) => i.href === pathname);

  const sidebarWidth = collapsed ? "w-16" : "w-64";
  const contentOffset = collapsed ? "md:ml-16" : "md:ml-64";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ── DESKTOP SIDEBAR ── */}
      <aside
        className={`hidden md:flex flex-col fixed top-0 left-0 h-screen bg-blue-950 text-white z-40 transition-all duration-300 ${sidebarWidth}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/10 min-h-[72px]">
          {!collapsed && (
            <div className="leading-tight overflow-hidden">
              <div className="text-yellow-400 font-extrabold text-sm tracking-wide whitespace-nowrap">Digital SIP</div>
              <div className="text-blue-300 text-xs whitespace-nowrap">Ministry of Education</div>
            </div>
          )}
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-blue-300 hover:text-white flex-shrink-0 ml-auto"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "›" : "‹"}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-white text-blue-900 shadow-md"
                    : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-base flex-shrink-0">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="flex-1 truncate">{item.label}</span>
                    <span
                      className={`text-xs w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-semibold ${
                        active ? "bg-blue-900 text-white" : "bg-white/10 text-blue-300"
                      }`}
                    >
                      {item.step}
                    </span>
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="px-4 py-4 border-t border-white/10 text-xs text-blue-400 leading-relaxed">
            KPEEL Project<br />Implementation Unit
          </div>
        )}
      </aside>

      {/* ── MOBILE TOP BAR ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-blue-950 text-white shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <div className="text-yellow-400 font-extrabold text-sm">Digital SIP System</div>
            {current && (
              <div className="text-blue-300 text-xs">{current.icon} {current.label}</div>
            )}
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-white/10 px-3 py-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    active ? "bg-white text-blue-900" : "text-blue-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className={`flex-1 ${contentOffset} transition-all duration-300`}>
        <div className="pt-16 md:pt-0 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
