'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { FileText, PlusCircle, Search, Printer, CheckCircle2, ShieldCheck, DollarSign, Users } from 'lucide-react';

export default function MonthlyReportsPage() {
  const { user, monthlyReports, updateMonthlyReportStatus } = useAuth();
  const [searchFilter, setSearchFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('ALL');

  const filteredReports = monthlyReports.filter((r) => {
    const matchesSearch =
      r.month.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.pastorName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      r.year.toString().includes(searchFilter);
    const matchesBranch = branchFilter === 'ALL' || r.branch === branchFilter;
    const matchesRole = user?.role === 'SUPER_ADMIN' || r.branch === user?.branch;
    return matchesSearch && matchesBranch && matchesRole;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/20 mb-2">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            MONTHLY SPIRITUAL & FINANCIAL REPORTS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Official Church Monthly Sheets</h1>
          <p className="text-xs text-slate-400">Digitized paper reports matching Praise Change Gospel Ministry physical sheets.</p>
        </div>

        <Link
          href="/admin/monthly-reports/new"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all"
        >
          <PlusCircle className="w-4 h-4 fill-slate-950" />
          Fill Monthly Report Sheet
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
            placeholder="Search by month, year, or pastor's name..."
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

      {/* Grid of Monthly Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-5 flex flex-col justify-between hover:border-slate-700 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-lg font-black text-white">
                  {report.month} {report.year}
                </span>
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                  report.status === 'APPROVED'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                }`}>
                  {report.status}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-slate-400">Church & Branch</span>
                  <span className="text-sm font-bold text-sky-300">{report.branch}</span>
                  <span className="block text-[11px] text-slate-400">{report.churchAddress}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Pastor</span>
                    <span className="font-bold text-slate-200">{report.pastorName}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Treasurer</span>
                    <span className="font-bold text-slate-200">{report.treasurerName}</span>
                  </div>
                </div>

                <div className="bg-slate-950 rounded-2xl p-3 border border-slate-800 grid grid-cols-2 gap-2">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Total Receipts</span>
                    <span className="text-sm font-black text-emerald-400 font-mono">₦{report.financial.totalReceipts.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Surplus / Deficit</span>
                    <span className="text-sm font-black text-amber-300 font-mono">₦{report.financial.surplusDeficit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <Link
                href={`/admin/monthly-reports/${report.id}/print`}
                target="_blank"
                className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-extrabold text-xs py-2.5 rounded-xl shadow transition-all"
              >
                <Printer className="w-4 h-4 text-amber-300" />
                Print Official Hardcopy Sheet
              </Link>

              {user?.role === 'SUPER_ADMIN' && report.status === 'SUBMITTED' && (
                <button
                  onClick={() => updateMonthlyReportStatus(report.id, 'APPROVED')}
                  className="w-full inline-flex justify-center items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Approve Report (G.O. Signature)
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
