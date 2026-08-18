'use client';

import React, { use } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { Printer, ShieldCheck } from 'lucide-react';

export default function PrintMonthlyReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { monthlyReports } = useAuth();

  const report = monthlyReports.find((r) => r.id === id) || monthlyReports[0];

  const handlePrint = () => {
    window.print();
  };

  if (!report) return null;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 p-4 sm:p-8 font-serif">
      
      {/* Top Floating Control Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between print:hidden">
        <div>
          <span className="text-xs font-black uppercase text-amber-400">Official Church Paper Report</span>
          <p className="text-xs text-slate-300">Formated to match physical Praise Change Gospel Ministry report sheets.</p>
        </div>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow transition-all"
        >
          <Printer className="w-4 h-4 fill-slate-950" />
          Print Hardcopy Sheet
        </button>
      </div>

      {/* Main Printable Paper Sheet (A4 styling) */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 border border-slate-300 shadow-2xl space-y-8 print:border-none print:shadow-none print:p-0">
        
        {/* Header Branding */}
        <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-400 bg-white">
              <Image src="/images/logo.jpg" alt="Logo" fill sizes="56px" className="object-cover" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-wide text-slate-900 uppercase">
                PRAISE CHANGES DIVINE LIFE GOSPEL MINISTRY
              </h1>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-700">
                FINANCIAL & SPIRITUAL MONTHLY REPORT SHEET
              </p>
            </div>
          </div>
        </div>

        {/* Church & Pastor Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs border-b pb-4">
          <div>
            <span className="block font-bold text-slate-500 uppercase text-[10px]">MONTH / YEAR</span>
            <span className="font-black text-sm uppercase text-slate-900">{report.month} {report.year}</span>
          </div>
          <div>
            <span className="block font-bold text-slate-500 uppercase text-[10px]">PASTOR&apos;S NAME</span>
            <span className="font-black text-sm text-slate-900">{report.pastorName}</span>
          </div>
          <div>
            <span className="block font-bold text-slate-500 uppercase text-[10px]">CHURCH / BRANCH</span>
            <span className="font-black text-sm text-slate-900">{report.branch}</span>
          </div>
          <div>
            <span className="block font-bold text-slate-500 uppercase text-[10px]">CHURCH ADDRESS</span>
            <span className="font-bold text-xs text-slate-800">{report.churchAddress}</span>
          </div>
        </div>

        {/* PART 1: FINANCIAL REPORT (Receipts vs Payments) */}
        <div className="space-y-3">
          <h2 className="text-xs font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1 text-center">
            FINANCIAL REPORT — RECEIPTS & PAYMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            
            {/* Receipts Column */}
            <div className="border border-slate-400 p-3 space-y-2">
              <span className="block font-black text-slate-900 uppercase border-b pb-1">RECEIPTS (INCOME)</span>
              <div className="space-y-1">
                <div className="flex justify-between"><span>General Tithes:</span><span className="font-mono font-bold">₦{report.financial.generalTithe.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Ministers Tithes:</span><span className="font-mono font-bold">₦{report.financial.ministersTithe.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Worship Offerings:</span><span className="font-mono font-bold">₦{report.financial.worshipOfferings.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Midweek Offerings:</span><span className="font-mono font-bold">₦{report.financial.midweekOfferings.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Thanksgiving Offerings:</span><span className="font-mono font-bold">₦{report.financial.thanksgivingOfferings.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Building Pledges/Seed:</span><span className="font-mono font-bold">₦{report.financial.buildingPledges.toLocaleString()}</span></div>
              </div>
              <div className="flex justify-between border-t border-slate-900 pt-1 font-black">
                <span>TOTAL RECEIPTS:</span>
                <span className="font-mono">₦{report.financial.totalReceipts.toLocaleString()}</span>
              </div>
            </div>

            {/* Payments Column */}
            <div className="border border-slate-400 p-3 space-y-2">
              <span className="block font-black text-slate-900 uppercase border-b pb-1">PAYMENTS (EXPENSES)</span>
              <div className="space-y-1">
                <div className="flex justify-between"><span>Ministers Basic Salary:</span><span className="font-mono font-bold">₦{report.financial.ministersBasicSalary.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Workers Basic Salary:</span><span className="font-mono font-bold">₦{report.financial.workersBasicSalary.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Donations / Welfare:</span><span className="font-mono font-bold">₦{report.financial.donationsLoveOfferings.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Sunday School Expenses:</span><span className="font-mono font-bold">₦{report.financial.sundaySchoolExpenses.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Crusade / Revival:</span><span className="font-mono font-bold">₦{report.financial.crusadeRevivalExpenses.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Stationery / Printing:</span><span className="font-mono font-bold">₦{report.financial.stationeryPhotocopies.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Electricity & Utilities:</span><span className="font-mono font-bold">₦{report.financial.electricity.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Transportation & Welfare:</span><span className="font-mono font-bold">₦{(report.financial.transportation + report.financial.welfare).toLocaleString()}</span></div>
              </div>
              <div className="flex justify-between border-t border-slate-900 pt-1 font-black">
                <span>TOTAL PAYMENTS:</span>
                <span className="font-mono">₦{report.financial.totalPayments.toLocaleString()}</span>
              </div>
            </div>

          </div>

          <div className="bg-slate-100 p-3 border border-slate-400 flex items-center justify-between text-xs font-black">
            <span>SURPLUS / DEFICIT BALANCE FOR THE MONTH:</span>
            <span className="text-sm font-mono">₦{report.financial.surplusDeficit.toLocaleString()}</span>
          </div>
        </div>

        {/* PART 2: SPIRITUAL REPORT */}
        <div className="space-y-3 pt-2">
          <h2 className="text-xs font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1 text-center">
            SPIRITUAL REPORT & MEMBERSHIP INTAKES
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border p-3">
            <div><span className="text-slate-600">New Converts:</span> <span className="font-bold">{report.spiritual.newConverts}</span></div>
            <div><span className="text-slate-600">Decisions for Christ:</span> <span className="font-bold">{report.spiritual.decisionsForChrist}</span></div>
            <div><span className="text-slate-600">Water Baptism:</span> <span className="font-bold">{report.spiritual.waterBaptism}</span></div>
            <div><span className="text-slate-600">Holy Spirit Baptism:</span> <span className="font-bold">{report.spiritual.holySpiritBaptism}</span></div>
          </div>

          {/* Average Attendance Table */}
          <div className="border border-slate-400 text-xs">
            <div className="bg-slate-200 p-1.5 font-bold uppercase text-[10px] text-center border-b">
              CHURCH PROGRAMME AVERAGE ATTENDANCE
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-3 text-center">
              <div><span className="block text-[9px] text-slate-500">Pre-Sun Sch Prayer</span><span className="font-bold">{report.spiritual.avgPreSundaySchoolPrayer}</span></div>
              <div><span className="block text-[9px] text-slate-500">Sunday School</span><span className="font-bold">{report.spiritual.avgSundaySchool}</span></div>
              <div><span className="block text-[9px] text-slate-500">Sunday Worship</span><span className="font-bold">{report.spiritual.avgSundayWorship}</span></div>
              <div><span className="block text-[9px] text-slate-500">House Fellowship</span><span className="font-bold">{report.spiritual.avgHouseFellowship}</span></div>
              <div><span className="block text-[9px] text-slate-500">Bible Study</span><span className="font-bold">{report.spiritual.avgBibleStudy}</span></div>
              <div><span className="block text-[9px] text-slate-500">Prayer Meeting</span><span className="font-bold">{report.spiritual.avgPrayerMeeting}</span></div>
            </div>
          </div>
        </div>

        {/* Official Signatures Section (Matching paper sheet) */}
        <div className="pt-8 border-t-2 border-slate-900 grid grid-cols-3 gap-6 text-center text-xs">
          <div className="space-y-8">
            <span className="block italic text-slate-700 font-bold">{report.treasurerName}</span>
            <div className="border-t border-slate-800 pt-1 font-black uppercase text-[10px]">TREASURER&apos;S SIGNATURE</div>
          </div>
          <div className="space-y-8">
            <span className="block italic text-slate-700 font-bold">{report.pastorName}</span>
            <div className="border-t border-slate-800 pt-1 font-black uppercase text-[10px]">PASTOR&apos;S SIGNATURE</div>
          </div>
          <div className="space-y-8">
            <span className="block italic text-slate-700 font-bold">{report.secretaryName}</span>
            <div className="border-t border-slate-800 pt-1 font-black uppercase text-[10px]">SECRETARY&apos;S SIGNATURE</div>
          </div>
        </div>

        <div className="text-center text-[10px] text-slate-500 pt-4">
          Report completed and submitted to Praise Change Divine Life Gospel Ministry Secretariat, Ode Remo, Ogun State.
        </div>

      </div>
    </div>
  );
}
