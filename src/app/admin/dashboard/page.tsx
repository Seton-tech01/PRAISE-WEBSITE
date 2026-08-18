'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  Users,
  DollarSign,
  Sparkles,
  Building,
  PlusCircle,
  FileText,
  Calendar,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Flame,
  Award,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { user, weeklyReports, monthlyReports } = useAuth();

  // Filter reports based on user branch role
  const userWeeklyReports =
    user?.role === 'SUPER_ADMIN'
      ? weeklyReports
      : weeklyReports.filter((r) => r.branch === user?.branch);

  const userMonthlyReports =
    user?.role === 'SUPER_ADMIN'
      ? monthlyReports
      : monthlyReports.filter((r) => r.branch === user?.branch);

  // Calculate totals
  const totalAttendance = userWeeklyReports.reduce((acc, curr) => acc + curr.totalAttendance, 0);
  const totalConverts = userWeeklyReports.reduce((acc, curr) => acc + curr.newConverts, 0);
  const totalCollections = userWeeklyReports.reduce((acc, curr) => acc + curr.totalCollection, 0);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-8 border border-sky-800/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            PRAISE CHANGE DIVINE LIFE GOSPEL MINISTRY
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Welcome, {user?.name}
          </h1>
          <p className="text-sky-200 text-xs sm:text-sm">
            {user?.role === 'SUPER_ADMIN'
              ? 'General Overseer Oversight • Headquarters Ode Remo, Ayegbami & Eposo Branches'
              : `Pastoral Dashboard • Assigned to ${user?.branch}`}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
          <Link
            href="/admin/service-reports/new"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg transition-all"
          >
            <PlusCircle className="w-4 h-4 text-amber-300" />
            New Service Report
          </Link>
          <Link
            href="/admin/monthly-reports/new"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg transition-all"
          >
            <FileText className="w-4 h-4 fill-slate-950" />
            New Monthly Sheet
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Attendance Card */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase">Recent Total Attendance</span>
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white">{totalAttendance.toLocaleString()}</p>
          <p className="text-xs text-sky-400 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            Across worship services
          </p>
        </div>

        {/* Collections Card */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase">Total Weekly Collections</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-amber-400 font-mono">₦{totalCollections.toLocaleString()}</p>
          <p className="text-xs text-amber-300 font-semibold">Tithes, Offerings & Seeds</p>
        </div>

        {/* Converts Card */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase">New Converts</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-emerald-400">{totalConverts}</p>
          <p className="text-xs text-emerald-300 font-semibold">Souls won to Jesus Christ</p>
        </div>

        {/* Branches Card */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase">Active Branches</span>
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white">3</p>
          <p className="text-xs text-indigo-300 font-semibold">HQ, Ayegbami & Eposo</p>
        </div>

      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Recent Weekly Reports (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sky-400" />
                Recent Weekly Service Reports
              </h3>
              <p className="text-xs text-slate-400">Attendance, finances & spiritual results</p>
            </div>
            <Link
              href="/admin/service-reports"
              className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {userWeeklyReports.slice(0, 4).map((report) => (
              <div
                key={report.id}
                className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-white">{report.serviceType}</span>
                    <span className="text-[10px] font-bold text-sky-300 bg-sky-950 border border-sky-800 px-2 py-0.5 rounded-full">
                      {report.branch}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Date: <span className="text-slate-200">{report.date}</span> • Preacher: <span className="text-amber-300 font-semibold">{report.preacher}</span>
                  </p>
                  <p className="text-[11px] text-slate-300 italic">
                    &ldquo;{report.sermonTitle}&rdquo;
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
                  <span className="block text-sm font-black text-emerald-400 font-mono">₦{report.totalCollection.toLocaleString()}</span>
                  <span className="block text-[11px] text-slate-400 font-bold">Attendance: {report.totalAttendance}</span>
                  <span className="block text-[10px] text-amber-300 font-bold">{report.newConverts} Converts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Monthly Financial & Spiritual Reports Feed (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Monthly Reports Status
              </h3>
              <p className="text-xs text-slate-400">Spiritual & Financial Sheets</p>
            </div>
            <Link
              href="/admin/monthly-reports"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              View Sheets <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {userMonthlyReports.map((report) => (
              <div
                key={report.id}
                className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-white">
                    {report.month} {report.year} Report
                  </span>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                    report.status === 'APPROVED'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}>
                    {report.status}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <p><span className="text-slate-400 font-bold">Branch:</span> {report.branch}</p>
                  <p><span className="text-slate-400 font-bold">Pastor:</span> {report.pastorName}</p>
                  <p><span className="text-slate-400 font-bold">Receipts:</span> <span className="text-emerald-400 font-mono font-bold">₦{report.financial.totalReceipts.toLocaleString()}</span></p>
                  <p><span className="text-slate-400 font-bold">Surplus:</span> <span className="text-amber-300 font-mono font-bold">₦{report.financial.surplusDeficit.toLocaleString()}</span></p>
                </div>

                <div className="pt-2 flex gap-2">
                  <Link
                    href={`/admin/monthly-reports/${report.id}/print`}
                    target="_blank"
                    className="w-full text-center bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs py-2 rounded-xl border border-slate-700 transition-colors"
                  >
                    Print Official Hardcopy Sheet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
