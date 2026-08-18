'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth, WeeklyReport } from '@/context/AuthContext';
import {
  Calendar,
  PlusCircle,
  Search,
  Flame,
  Users,
  DollarSign,
  BookOpen,
  Eye,
  X,
  Printer,
  Sparkles,
  Grid,
  List,
  Building,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export default function ServiceReportsPage() {
  const { user, weeklyReports } = useAuth();
  const [searchFilter, setSearchFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('ALL');
  const [serviceTypeFilter, setServiceTypeFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selectedReport, setSelectedReport] = useState<WeeklyReport | null>(null);

  // Filter logic
  const filteredReports = weeklyReports.filter((r) => {
    const matchesSearch =
      r.sermonTitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.preacher.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.scriptureReference.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.date.includes(searchFilter);
    const matchesBranch = branchFilter === 'ALL' || r.branch === branchFilter;
    const matchesService = serviceTypeFilter === 'ALL' || r.serviceType === serviceTypeFilter;
    const matchesRole = user?.role === 'SUPER_ADMIN' || r.branch === user?.branch;
    return matchesSearch && matchesBranch && matchesService && matchesRole;
  });

  // Calculate summary metrics
  const totalReportsCount = filteredReports.length;
  const totalAttendanceSum = filteredReports.reduce((acc, r) => acc + r.totalAttendance, 0);
  const totalCollectionsSum = filteredReports.reduce((acc, r) => acc + r.totalCollection, 0);
  const totalConvertsSum = filteredReports.reduce((acc, r) => acc + r.newConverts, 0);

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans pb-12">
      
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            WEEKLY SERVICE INTELLIGENCE REGISTER
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Service Attendance & Financial Log
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Track Sunday Worship, Bible Study, Solution Hour, and Power Night Vigils across all branches.
          </p>
        </div>

        <Link
          href="/admin/service-reports/new"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all shrink-0 hover:scale-105"
        >
          <PlusCircle className="w-4 h-4 text-amber-300" />
          Submit Service Report
        </Link>
      </div>

      {/* 2. Top Summary KPI Cards (With Ample Padding) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* KPI 1 */}
        <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between">
          <div className="space-y-1">
            <span className="block text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Services Logged</span>
            <span className="text-2xl font-black text-white">{totalReportsCount} Reports</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between">
          <div className="space-y-1">
            <span className="block text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Total Attendance</span>
            <span className="text-2xl font-black text-white">{totalAttendanceSum.toLocaleString()}</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between">
          <div className="space-y-1">
            <span className="block text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Total Collections</span>
            <span className="text-2xl font-black text-amber-400 font-mono">₦{totalCollectionsSum.toLocaleString()}</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between">
          <div className="space-y-1">
            <span className="block text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Souls & Converts</span>
            <span className="text-2xl font-black text-emerald-400">{totalConvertsSum} Souls</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
        </div>

      </div>

      {/* 3. Control & Filter Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search by sermon title, preacher, scripture reference, or date..."
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 shadow-sm"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          
          <select
            value={serviceTypeFilter}
            onChange={(e) => setServiceTypeFilter(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 font-bold"
          >
            <option value="ALL">All Service Types</option>
            <option value="Sunday Worship">Sunday Worship</option>
            <option value="Tuesday Bible Study">Tuesday Bible Study</option>
            <option value="Thursday Solution Hour">Thursday Solution Hour</option>
            <option value="Power Night Vigil">Power Night Vigil</option>
          </select>

          {user?.role === 'SUPER_ADMIN' && (
            <select
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 font-bold"
            >
              <option value="ALL">All Church Branches</option>
              <option value="Headquarters">Headquarters Sanctuary</option>
              <option value="Ayegbami Branch">Ayegbami Branch</option>
              <option value="Eposo Branch">Eposo Branch</option>
            </select>
          )}

          {/* View Mode Switcher */}
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'table' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="Card Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* ==================================================================== */}
      {/* TABLE VIEW (HIGH CONTRAST, CLEAN SPACING) */}
      {/* ==================================================================== */}
      {viewMode === 'table' && (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              
              {/* Header */}
              <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] font-black tracking-wider border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 min-w-[140px]">Date & Service</th>
                  <th className="px-6 py-4 min-w-[150px]">Branch</th>
                  <th className="px-6 py-4 min-w-[200px]">Attendance</th>
                  <th className="px-6 py-4 min-w-[160px]">Spiritual Impact</th>
                  <th className="px-6 py-4 min-w-[160px]">Collection (₦)</th>
                  <th className="px-6 py-4 min-w-[240px]">Sermon & Preacher</th>
                  <th className="px-6 py-4 text-right min-w-[100px]">Action</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-slate-800/80">
                {filteredReports.map((report) => (
                  <tr
                    key={report.id}
                    className="hover:bg-slate-800/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedReport(report)}
                  >
                    {/* Date & Service */}
                    <td className="px-6 py-4">
                      <span className="block font-black text-white text-sm">{report.date}</span>
                      <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mt-1">
                        {report.serviceType}
                      </span>
                    </td>

                    {/* Branch */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 bg-sky-950 px-3 py-1 rounded-xl border border-sky-800">
                        <Building className="w-3.5 h-3.5 text-sky-400" />
                        {report.branch}
                      </span>
                    </td>

                    {/* Attendance */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className="block font-black text-white text-sm">
                          {report.totalAttendance.toLocaleString()} Total
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                          <span>{report.menAttendance} Men</span>
                          <span>•</span>
                          <span>{report.womenAttendance} Women</span>
                          <span>•</span>
                          <span>{report.childrenAttendance} Kids</span>
                        </div>
                      </div>
                    </td>

                    {/* Converts & Impact */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-xl border border-emerald-800">
                          <Flame className="w-3.5 h-3.5 text-emerald-400" />
                          {report.newConverts} Souls Saved
                        </span>
                        <span className="block text-[10px] text-slate-400">
                          Decisions: {report.decisionsForChrist} • Baptisms: {report.holySpiritBaptism}
                        </span>
                      </div>
                    </td>

                    {/* Collection */}
                    <td className="px-6 py-4">
                      <div className="space-y-0.5">
                        <span className="block font-mono font-black text-amber-400 text-base">
                          ₦{report.totalCollection.toLocaleString()}
                        </span>
                        <span className="block text-[10px] text-slate-400">
                          Tithe: ₦{report.generalTithe.toLocaleString()} • Off: ₦{report.sundayOffering.toLocaleString()}
                        </span>
                      </div>
                    </td>

                    {/* Sermon & Preacher */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className="block font-black text-white text-xs leading-snug">
                          &ldquo;{report.sermonTitle}&rdquo;
                        </span>
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="font-bold text-amber-300">{report.preacher}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-sky-400 font-mono font-semibold">{report.scriptureReference}</span>
                        </div>
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedReport(report);
                        }}
                        className="inline-flex items-center gap-1 bg-slate-800 hover:bg-sky-600 hover:text-white text-slate-200 font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-700 transition-all"
                      >
                        <Eye className="w-3.5 h-3.5 text-sky-400" />
                        Details
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* GRID CARD VIEW */}
      {/* ==================================================================== */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4 hover:border-sky-500/40 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {report.serviceType}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{report.date}</span>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 bg-sky-950 px-3 py-1 rounded-xl border border-sky-800">
                    <Building className="w-3.5 h-3.5 text-sky-400" />
                    {report.branch}
                  </span>

                  <h3 className="text-base font-black text-white mt-2 leading-snug">
                    &ldquo;{report.sermonTitle}&rdquo;
                  </h3>
                  <p className="text-xs text-amber-300 font-bold mt-1">
                    Preacher: {report.preacher} ({report.scriptureReference})
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Attendance</span>
                    <span className="font-black text-white">{report.totalAttendance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Souls Saved</span>
                    <span className="font-black text-emerald-400">{report.newConverts} Souls</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Total Collection</span>
                    <span className="font-mono font-black text-amber-400 text-sm">
                      ₦{report.totalCollection.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedReport(report);
                  }}
                  className="w-full inline-flex justify-center items-center gap-1.5 bg-slate-800 hover:bg-sky-600 hover:text-white text-slate-200 font-bold text-xs py-2.5 rounded-xl transition-all"
                >
                  <Eye className="w-4 h-4 text-sky-400" /> View Report Details
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* ==================================================================== */}
      {/* SERVICE REPORT DETAIL MODAL */}
      {/* ==================================================================== */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-white animate-in zoom-in-95 duration-200">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                  {selectedReport.serviceType}
                </span>
                <h3 className="text-xl font-black text-white">&ldquo;{selectedReport.sermonTitle}&rdquo;</h3>
                <p className="text-xs text-sky-400 font-bold">
                  {selectedReport.branch} • {selectedReport.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedReport(null)}
                className="p-2 text-slate-400 hover:bg-slate-800 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Minister & Scripture</span>
                <p className="text-sm font-bold text-amber-300">{selectedReport.preacher}</p>
                <p className="text-xs text-slate-300">Scripture Reference: <span className="text-sky-400 font-mono">{selectedReport.scriptureReference}</span></p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Attendance Breakdown</span>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2 bg-slate-900 rounded-xl"><span className="block text-[10px] text-slate-400">Men</span><span className="font-bold text-sky-300 text-sm">{selectedReport.menAttendance}</span></div>
                  <div className="p-2 bg-slate-900 rounded-xl"><span className="block text-[10px] text-slate-400">Women</span><span className="font-bold text-purple-300 text-sm">{selectedReport.womenAttendance}</span></div>
                  <div className="p-2 bg-slate-900 rounded-xl"><span className="block text-[10px] text-slate-400">Children</span><span className="font-bold text-amber-300 text-sm">{selectedReport.childrenAttendance}</span></div>
                  <div className="p-2 bg-slate-900 rounded-xl border border-sky-500/30"><span className="block text-[10px] text-slate-400">Total</span><span className="font-black text-white text-sm">{selectedReport.totalAttendance}</span></div>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Financial Collections</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div><span className="text-slate-400">General Tithe:</span> <span className="font-mono font-bold text-amber-300">₦{selectedReport.generalTithe.toLocaleString()}</span></div>
                  <div><span className="text-slate-400">Sunday Offering:</span> <span className="font-mono font-bold text-amber-300">₦{selectedReport.sundayOffering.toLocaleString()}</span></div>
                  <div><span className="text-slate-400">Thanksgiving:</span> <span className="font-mono font-bold text-amber-300">₦{selectedReport.thanksgivingOffering.toLocaleString()}</span></div>
                  <div><span className="text-slate-400">Building Seed:</span> <span className="font-mono font-bold text-amber-300">₦{selectedReport.buildingSeed.toLocaleString()}</span></div>
                  <div><span className="text-slate-400">Evangelism Seed:</span> <span className="font-mono font-bold text-amber-300">₦{selectedReport.evangelismSeed.toLocaleString()}</span></div>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between font-black text-sm text-emerald-400">
                  <span>TOTAL COLLECTION:</span>
                  <span className="font-mono">₦{selectedReport.totalCollection.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setSelectedReport(null)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
