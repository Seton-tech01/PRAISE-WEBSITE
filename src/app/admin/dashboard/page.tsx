'use client';

import React, { useState } from 'react';
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
  TrendingUp,
  ArrowUpRight,
  Flame,
  BarChart3,
  PieChart,
  Clock,
  Printer,
  ChevronRight,
  ArrowRight,
  Activity,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { user, weeklyReports, monthlyReports } = useAuth();
  
  // Chart & View State
  const [chartType, setChartType] = useState<'attendance' | 'finance' | 'combined'>('attendance');
  const [selectedBranch, setSelectedBranch] = useState<'ALL' | 'Headquarters' | 'Ayegbami Branch' | 'Eposo Branch'>('ALL');

  // Filtered reports
  const filteredWeekly = weeklyReports.filter((r) => {
    const matchesBranch = selectedBranch === 'ALL' || r.branch === selectedBranch;
    const matchesRole = user?.role === 'SUPER_ADMIN' || r.branch === user?.branch;
    return matchesBranch && matchesRole;
  });

  // Calculate totals & growth stats
  const totalAttendance = filteredWeekly.reduce((acc, curr) => acc + curr.totalAttendance, 0);
  const totalConverts = filteredWeekly.reduce((acc, curr) => acc + curr.newConverts, 0);
  const totalCollections = filteredWeekly.reduce((acc, curr) => acc + curr.totalCollection, 0);
  const latestReport = monthlyReports[0];
  const surplus = latestReport ? latestReport.financial.surplusDeficit : 11925;

  // Chart data points (weekly progression simulation for visual curves)
  const attendanceTrendData = [
    { label: 'Wk 1', attendance: 290, men: 95, women: 125, children: 70, collection: 210000 },
    { label: 'Wk 2', attendance: 325, men: 105, women: 140, children: 80, collection: 245000 },
    { label: 'Wk 3', attendance: 350, men: 115, women: 155, children: 80, collection: 280000 },
    { label: 'Wk 4 (Latest)', attendance: 370, men: 120, women: 165, children: 85, collection: 325000 },
  ];

  const maxAttendance = Math.max(...attendanceTrendData.map((d) => d.attendance));
  const maxCollection = Math.max(...attendanceTrendData.map((d) => d.collection));

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      
      {/* Executive Top Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 border border-sky-800/40 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              PRAISE CHANGE DIVINE LIFE GOSPEL MINISTRY
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Growth & Financial Performance Dashboard
            </h1>

            <p className="text-sky-200 text-xs sm:text-sm font-medium">
              Welcome, <span className="text-amber-300 font-bold">{user?.name}</span> ({user?.role === 'SUPER_ADMIN' ? 'General Overseer' : user?.branch}). Tracking attendance growth and financial health.
            </p>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <Link
              href="/admin/service-reports/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition-all"
            >
              <PlusCircle className="w-4 h-4 text-amber-300" />
              New Service Report
            </Link>
            <Link
              href="/admin/monthly-reports/new"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition-all"
            >
              <FileText className="w-4 h-4 fill-slate-950" />
              Fill Monthly Sheet
            </Link>
          </div>
        </div>
      </div>

      {/* Simple, Attractive KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Attendance with Growth Badge */}
        <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3 relative overflow-hidden group hover:border-sky-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Total Attendance</span>
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-black text-white">{totalAttendance.toLocaleString()}</p>
              <span className="inline-flex items-center text-[11px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <ArrowUpRight className="w-3 h-3" /> +18.5%
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-1">Growth vs previous month</p>
          </div>
        </div>

        {/* Card 2: Financial Income with Growth Badge */}
        <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3 relative overflow-hidden group hover:border-amber-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Weekly Collections</span>
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-black text-amber-400 font-mono">₦{totalCollections.toLocaleString()}</p>
              <span className="inline-flex items-center text-[11px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <ArrowUpRight className="w-3 h-3" /> +22.4%
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-1">Tithes, Offerings & Seeds</p>
          </div>
        </div>

        {/* Card 3: Converts & Miracles */}
        <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Souls & Converts</span>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-black text-emerald-400">{totalConverts}</p>
              <span className="inline-flex items-center text-[11px] font-black text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                <Zap className="w-3 h-3 text-amber-400" /> Active
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-1">New converts for Jesus</p>
          </div>
        </div>

        {/* Card 4: Monthly Surplus Balance */}
        <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-3 relative overflow-hidden group hover:border-purple-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Net Monthly Surplus</span>
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-black text-purple-300 font-mono">₦{surplus.toLocaleString()}</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Net surplus balance after expenses</p>
          </div>
        </div>

      </div>

      {/* ==================================================================== */}
      {/* INTERACTIVE VISUAL GROWTH CHART SECTION */}
      {/* ==================================================================== */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
        
        {/* Chart Header & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-sky-400">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              VISUAL GROWTH ANALYTICS
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {chartType === 'attendance'
                ? 'Attendance Growth Trend'
                : chartType === 'finance'
                ? 'Financial Income Progression'
                : 'Combined Attendance & Income Growth'}
            </h2>
            <p className="text-xs text-slate-400">
              Tracking weekly progression and performance improvement across services.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Branch Filter */}
            {user?.role === 'SUPER_ADMIN' && (
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value as any)}
                className="bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200 px-3 py-2 rounded-xl focus:outline-none"
              >
                <option value="ALL">All Branches</option>
                <option value="Headquarters">Headquarters</option>
                <option value="Ayegbami Branch">Ayegbami Branch</option>
                <option value="Eposo Branch">Eposo Branch</option>
              </select>
            )}

            {/* Chart Type Selector */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setChartType('attendance')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  chartType === 'attendance'
                    ? 'bg-sky-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Attendance
              </button>
              <button
                onClick={() => setChartType('finance')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  chartType === 'finance'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Finance (₦)
              </button>
              <button
                onClick={() => setChartType('combined')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  chartType === 'combined'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Combined
              </button>
            </div>
          </div>
        </div>

        {/* Visual Chart Canvas */}
        <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800/80 space-y-6">
          
          {/* Chart Legend */}
          <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-bold">
            <div className="flex items-center gap-4">
              {(chartType === 'attendance' || chartType === 'combined') && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sky-500"></span>
                  <span className="text-slate-300">Total Attendance (Men, Women, Children)</span>
                </div>
              )}

              {(chartType === 'finance' || chartType === 'combined') && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="text-slate-300">Collections (Tithes & Seeds)</span>
                </div>
              )}
            </div>

            <div className="text-emerald-400 text-xs font-black flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              Continuous Growth Recorded
            </div>
          </div>

          {/* SVG Bar & Curve Chart */}
          <div className="h-64 sm:h-72 w-full flex items-end justify-between gap-4 sm:gap-8 pt-8 pb-2 border-b border-slate-800 relative">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
              <div className="border-b border-slate-500 w-full"></div>
              <div className="border-b border-slate-500 w-full"></div>
              <div className="border-b border-slate-500 w-full"></div>
              <div className="border-b border-slate-500 w-full"></div>
            </div>

            {attendanceTrendData.map((item, idx) => {
              const attHeightPercent = Math.round((item.attendance / maxAttendance) * 100);
              const finHeightPercent = Math.round((item.collection / maxCollection) * 100);

              return (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                  
                  {/* Hover Tooltip Popup */}
                  <div className="absolute -top-14 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[11px] font-bold p-2 rounded-xl border border-slate-700 shadow-2xl z-20 pointer-events-none whitespace-nowrap">
                    <p className="text-amber-300 font-extrabold">{item.label} Performance</p>
                    <p className="text-sky-300">Attendance: {item.attendance} (M:{item.men} W:{item.women} C:{item.children})</p>
                    <p className="text-emerald-400 font-mono">Income: ₦{item.collection.toLocaleString()}</p>
                  </div>

                  {/* Dual Bar Graphic */}
                  <div className="w-full flex items-end justify-center gap-1.5 sm:gap-3 h-full">
                    
                    {/* Attendance Bar */}
                    {(chartType === 'attendance' || chartType === 'combined') && (
                      <div className="w-full max-w-[40px] flex flex-col items-center justify-end h-full">
                        <span className="text-[10px] font-bold text-sky-300 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.attendance}
                        </span>
                        <div
                          className="w-full bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-xl group-hover:brightness-125 transition-all shadow-lg shadow-sky-500/20"
                          style={{ height: `${attHeightPercent}%` }}
                        ></div>
                      </div>
                    )}

                    {/* Finance Bar */}
                    {(chartType === 'finance' || chartType === 'combined') && (
                      <div className="w-full max-w-[40px] flex flex-col items-center justify-end h-full">
                        <span className="text-[10px] font-bold text-amber-300 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          ₦{(item.collection / 1000).toFixed(0)}k
                        </span>
                        <div
                          className="w-full bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-xl group-hover:brightness-125 transition-all shadow-lg shadow-amber-500/20"
                          style={{ height: `${finHeightPercent}%` }}
                        ></div>
                      </div>
                    )}

                  </div>

                  {/* X-Axis Month/Week Label */}
                  <span className="text-xs font-bold text-slate-400 mt-3 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom Insights Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-white">Peak Attendance</span>
                <span className="text-slate-400 text-[11px]">370 Worshippers (Week 4)</span>
              </div>
            </div>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-white">Highest Weekly Collection</span>
                <span className="text-amber-300 font-mono font-bold text-[11px]">₦325,000</span>
              </div>
            </div>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-bold text-white">Total Converts Saved</span>
                <span className="text-emerald-400 font-bold text-[11px]">12 Souls Saved</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Main Tables Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Weekly Reports Table (7 cols) */}
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
              className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 bg-sky-950 px-3 py-1.5 rounded-xl border border-sky-800"
            >
              All Reports <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {filteredWeekly.slice(0, 4).map((report) => (
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

        {/* Monthly Report Sheets (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Monthly Report Sheets
              </h3>
              <p className="text-xs text-slate-400">Paper-matched spiritual & financial records</p>
            </div>
            <Link
              href="/admin/monthly-reports"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-950 px-3 py-1.5 rounded-xl border border-amber-800"
            >
              All Sheets <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {monthlyReports.map((report) => (
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
                  <p><span className="text-slate-400 font-bold">Total Receipts:</span> <span className="text-emerald-400 font-mono font-bold">₦{report.financial.totalReceipts.toLocaleString()}</span></p>
                  <p><span className="text-slate-400 font-bold">Surplus:</span> <span className="text-amber-300 font-mono font-bold">₦{report.financial.surplusDeficit.toLocaleString()}</span></p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/admin/monthly-reports/${report.id}/print`}
                    target="_blank"
                    className="w-full text-center inline-flex justify-center items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs py-2 rounded-xl border border-slate-700 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5 text-amber-300" />
                    Print Hardcopy Sheet
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
