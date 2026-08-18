'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Users,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  Building,
  PlusCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

function AdminShell({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // If on login page, render children directly
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // If user is not logged in, redirect or show login prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4 text-center">
        <ShieldCheck className="w-16 h-16 text-amber-400 mb-4 animate-bounce" />
        <h2 className="text-2xl font-black text-white">Authentication Required</h2>
        <p className="text-sm text-slate-400 mt-1 max-w-md">
          Please sign in with your pastoral or administrative credentials to access Praise Change Divine Life Gospel Ministry dashboard.
        </p>
        <button
          onClick={() => router.push('/admin/login')}
          className="mt-6 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg transition-all"
        >
          Proceed to Login Page
        </button>
      </div>
    );
  }

  const navItems = [
    {
      name: 'Dashboard Overview',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Weekly Service Reports',
      href: '/admin/service-reports',
      icon: Calendar,
    },
    {
      name: 'Monthly Reports',
      href: '/admin/monthly-reports',
      icon: FileText,
    },
    ...(user.role === 'SUPER_ADMIN'
      ? [
          {
            name: 'User & Role Management',
            href: '/admin/users',
            icon: Users,
          },
        ]
      : []),
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-sky-400 bg-white">
            <Image src="/images/logo.jpg" alt="Logo" fill sizes="36px" className="object-cover" />
          </div>
          <div>
            <span className="block text-sm font-black text-white leading-tight">PRAISE CHANGE</span>
            <span className="block text-[10px] text-amber-400 font-bold uppercase">Admin Dashboard</span>
          </div>
        </div>

        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 text-slate-300 hover:bg-slate-800 rounded-xl"
        >
          {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Logo Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400 bg-white shrink-0">
              <Image src="/images/logo.jpg" alt="Logo" fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <span className="block text-base font-black tracking-tight text-white leading-tight">
                PRAISE CHANGE
              </span>
              <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                Admin Dashboard
              </span>
            </div>
          </div>

          {/* User Status Card */}
          <div className="bg-slate-950 rounded-2xl p-3.5 border border-slate-800 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-black text-white line-clamp-1">{user.name}</span>
            </div>
            <p className="text-[10px] font-extrabold text-amber-400 uppercase">
              {user.role === 'SUPER_ADMIN' ? 'General Overseer' : user.role}
            </p>
            <p className="text-[10px] text-sky-300 font-medium flex items-center gap-1 pt-0.5">
              <Building className="w-3 h-3 text-sky-400" />
              {user.branch}
            </p>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1.5 pt-2">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-lg shadow-sky-600/20'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-sky-400 hover:bg-slate-800 rounded-xl transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Public Website</span>
          </Link>

          <button
            onClick={() => {
              logout();
              router.push('/admin/login');
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-red-400 hover:bg-red-950/40 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

      </aside>

      {/* Main Admin Content View */}
      <main className="flex-1 overflow-y-auto min-h-screen bg-slate-950 p-4 sm:p-8">
        {children}
      </main>

    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AdminShell>{children}</AdminShell>
    </AuthProvider>
  );
}
