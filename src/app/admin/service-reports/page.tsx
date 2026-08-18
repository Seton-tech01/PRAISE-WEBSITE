'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Calendar, PlusCircle, Search, Filter, Flame, Users, DollarSign } from 'lucide-react';

export default function ServiceReportsPage() {
  const { user, weeklyReports } = useAuth();
  const [searchFilter, setSearchFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('ALL');

  const filteredReports = weeklyReports.filter((r) => {
    const matchesSearch =
      r.sermonTitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.preacher.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.date.includes(searchFilter);
    const matchesBranch = branchFilter === 'ALL' || r.branch === branchFilter;
    const matchesRole = user?.role === 'SUPER_ADMIN' || r.branch === user?.branch;
    return matchesSearch && matchesBranch && matchesRole;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-400/20 mb-2">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            WEEKLY SERVICE REPORTS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Service Attendance & Financial Log</h1>
          <p className="text-xs text-slate-400">Track Sunday Worship, Bible Study, Solution Hour, and Vigils across all branches.</p>
        </div>

        <Link
          href="/admin/service-reports/new"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all"
        >
          <PlusCircle className="w-4 h-4 text-amber-300" />
          Submit Service Report
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search by sermon title, preacher, or date..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        {user?.role === 'SUPER_ADMIN' && (
          <div className="sm:w-64">
            <select
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            >
              <option value="ALL">All Church Branches</option>
              <option value="Headquarters">Headquarters Sanctuary</option>
              <option value="Ayegbami Branch">Ayegbami Branch</option>
              <option value="Eposo Branch">Eposo Branch</option>
            </select>
          </div>
        )}
      </div>

      {/* Reports Table Card */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-extrabold border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Date & Service</th>
                <th className="px-6 py-4">Branch</th>
                <th className="px-6 py-4">Attendance (M/W/C)</th>
                <th className="px-6 py-4">Converts / Impact</th>
                <th className="px-6 py-4">Total Collection</th>
                <th className="px-6 py-4">Preacher & Sermon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-950/60 transition-colors">
                  <td className="px-6 py-4">
                    <span className="block font-bold text-white">{report.date}</span>
                    <span className="text-[10px] text-amber-400 font-bold">{report.serviceType}</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-sky-300">
                    {report.branch}
                  </td>
                  <td className="px-6 py-4">
                    <span className="block font-bold text-white">{report.totalAttendance} Total</span>
                    <span className="text-[10px] text-slate-400">
                      M:{report.menAttendance} | W:{report.womenAttendance} | C:{report.childrenAttendance}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
                      <Flame className="w-3.5 h-3.5 text-emerald-400" />
                      {report.newConverts} Converts
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Decisions: {report.decisionsForChrist} | Baptisms: {report.holySpiritBaptism}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono font-black text-amber-400 text-sm">
                    ₦{report.totalCollection.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="block font-bold text-white line-clamp-1">{report.sermonTitle}</span>
                    <span className="block text-[10px] text-slate-400">{report.preacher} ({report.scriptureReference})</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
