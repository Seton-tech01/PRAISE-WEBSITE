'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { FileText, ArrowLeft, CheckCircle2, DollarSign, Users, Flame, BookOpen, Calculator } from 'lucide-react';

export default function NewMonthlyReportPage() {
  const { user, addMonthlyReport } = useAuth();
  const router = useRouter();

  // Basic Info
  const [month, setMonth] = useState('August');
  const [year, setYear] = useState(2026);
  const [branch, setBranch] = useState<'Headquarters' | 'Ayegbami Branch' | 'Eposo Branch'>(
    user?.branch !== 'All Branches' ? (user?.branch as any) : 'Ayegbami Branch'
  );
  const [pastorName, setPastorName] = useState(user?.name || 'Onu Genesis');
  const [treasurerName, setTreasurerName] = useState('Bro Kehinde Asyba');
  const [secretaryName, setSecretaryName] = useState('Mrs Genesis');
  const [churchAddress, setChurchAddress] = useState('No 6, Ikara Road - Ode Remo');

  // Spiritual Report Fields (media_1787086658548.jpg)
  const [spiritual, setSpiritual] = useState({
    newConverts: 5,
    decisionsForChrist: 5,
    waterBaptism: 2,
    holySpiritBaptism: 1,
    healings: 1,
    houseFellowshipCentres: 1,
    childrenCadets: 15,
    teensJunior: 12,
    teensSenior: 10,
    youthChallengers: 25,
    adultsCFM: 40,
    seniorCitizens: 8,
    previousMonthMembers: 110,
    newMembersThisMonth: 5,
    withdrawalsTransfers: 0,
    withdrawalsDeath: 0,
    withdrawalsDismissed: 0,
    ordainedMinisters: 1,
    licensedMinisters: 1,
    exhorters: 2,
    eldersDeacons: 3,
    eldersDeaconesses: 4,
    avgPreSundaySchoolPrayer: 36,
    avgSundaySchool: 123,
    avgSundayWorship: 180,
    avgHouseFellowship: 50,
    avgBibleStudy: 75,
    avgPrayerMeeting: 60,
  });

  // Financial Report Fields (media_1787086658655.jpg)
  const [financial, setFinancial] = useState({
    generalTithe: 5650,
    ministersTithe: 2300,
    worshipOfferings: 2465,
    missionaryOfferings: 0,
    midweekOfferings: 1220,
    sundaySchoolOfferings: 0,
    thanksgivingOfferings: 1540,
    loveWelfareOfferings: 0,
    buildingPledges: 0,
    churchPioneering: 0,
    donations: 0,
    seedFaith: 0,
    staffLoanRepayment: 0,
    otherReceipts: 0,

    ministersBasicSalary: 5000,
    ministersAllowances: 0,
    workersBasicSalary: 5000,
    workersAllowances: 0,
    officeRefreshments: 1000,
    churchPioneeringExpenses: 0,
    donationsLoveOfferings: 2270,
    sundaySchoolExpenses: 2270,
    crusadeRevivalExpenses: 1000,
    buildingRepairs: 0,
    pastorsTraining: 0,
    stationeryPhotocopies: 1000,
    electricity: 1500,
    transportation: 500,
    welfare: 500,
    bankCharges: 0,
    landAcquisition: 0,
    equipmentPurchase: 0,
    cashInHandBank: 2040,
  });

  // Auto-calculations
  const totalMembersBeforeWithdrawal = Number(spiritual.previousMonthMembers) + Number(spiritual.newMembersThisMonth);
  const totalWithdrawals = Number(spiritual.withdrawalsTransfers) + Number(spiritual.withdrawalsDeath) + Number(spiritual.withdrawalsDismissed);
  const totalMembersAfterWithdrawals = totalMembersBeforeWithdrawal - totalWithdrawals;

  const totalReceipts =
    Number(financial.generalTithe) +
    Number(financial.ministersTithe) +
    Number(financial.worshipOfferings) +
    Number(financial.missionaryOfferings) +
    Number(financial.midweekOfferings) +
    Number(financial.sundaySchoolOfferings) +
    Number(financial.thanksgivingOfferings) +
    Number(financial.loveWelfareOfferings) +
    Number(financial.buildingPledges) +
    Number(financial.churchPioneering) +
    Number(financial.donations) +
    Number(financial.seedFaith) +
    Number(financial.staffLoanRepayment) +
    Number(financial.otherReceipts);

  const totalPayments =
    Number(financial.ministersBasicSalary) +
    Number(financial.ministersAllowances) +
    Number(financial.workersBasicSalary) +
    Number(financial.workersAllowances) +
    Number(financial.officeRefreshments) +
    Number(financial.churchPioneeringExpenses) +
    Number(financial.donationsLoveOfferings) +
    Number(financial.sundaySchoolExpenses) +
    Number(financial.crusadeRevivalExpenses) +
    Number(financial.buildingRepairs) +
    Number(financial.pastorsTraining) +
    Number(financial.stationeryPhotocopies) +
    Number(financial.electricity) +
    Number(financial.transportation) +
    Number(financial.welfare) +
    Number(financial.bankCharges) +
    Number(financial.landAcquisition) +
    Number(financial.equipmentPurchase);

  const surplusDeficit = totalReceipts - totalPayments;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMonthlyReport({
      month,
      year: Number(year),
      branch,
      pastorName,
      treasurerName,
      secretaryName,
      churchAddress,
      status: 'SUBMITTED',
      spiritual: {
        ...spiritual,
        totalMembersAfterWithdrawals,
      },
      financial: {
        ...financial,
        totalReceipts,
        totalPayments,
        surplusDeficit,
      },
    });
    router.push('/admin/monthly-reports');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Monthly Reports
          </button>
          <h1 className="text-2xl font-black text-white">Fill Official Monthly Report Sheet</h1>
          <p className="text-xs text-slate-400">Digitized form matching physical church spiritual & financial report paper sheets.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-10">
        
        {/* Header Metadata */}
        <div className="space-y-4">
          <h3 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            1. Report Header & Pastoral Officers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Month</label>
              <input
                type="text"
                required
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="e.g. April"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Year</label>
              <input
                type="number"
                required
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Church Branch</label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              >
                <option value="Headquarters">Headquarters Sanctuary</option>
                <option value="Ayegbami Branch">Ayegbami Branch</option>
                <option value="Eposo Branch">Eposo Branch</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Pastor Name</label>
              <input
                type="text"
                required
                value={pastorName}
                onChange={(e) => setPastorName(e.target.value)}
                placeholder="e.g. Onu Genesis"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Treasurer Name</label>
              <input
                type="text"
                required
                value={treasurerName}
                onChange={(e) => setTreasurerName(e.target.value)}
                placeholder="e.g. Bro Kehinde Asyba"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Secretary Name</label>
              <input
                type="text"
                required
                value={secretaryName}
                onChange={(e) => setSecretaryName(e.target.value)}
                placeholder="e.g. Mrs Genesis"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Church Address</label>
              <input
                type="text"
                required
                value={churchAddress}
                onChange={(e) => setChurchAddress(e.target.value)}
                placeholder="e.g. No 6, Ikara Road - Ode Remo"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Spiritual Report (media_1787086658548.jpg) */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <h3 className="text-sm font-extrabold text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <Flame className="w-4 h-4 text-sky-400" />
            2. Spiritual Report (Conversions, Intakes & Attendance)
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">New Converts</label>
              <input
                type="number"
                value={spiritual.newConverts}
                onChange={(e) => setSpiritual({ ...spiritual, newConverts: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Decisions Christ</label>
              <input
                type="number"
                value={spiritual.decisionsForChrist}
                onChange={(e) => setSpiritual({ ...spiritual, decisionsForChrist: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Water Baptism</label>
              <input
                type="number"
                value={spiritual.waterBaptism}
                onChange={(e) => setSpiritual({ ...spiritual, waterBaptism: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Holy Spirit Bap.</label>
              <input
                type="number"
                value={spiritual.holySpiritBaptism}
                onChange={(e) => setSpiritual({ ...spiritual, holySpiritBaptism: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Healings</label>
              <input
                type="number"
                value={spiritual.healings}
                onChange={(e) => setSpiritual({ ...spiritual, healings: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">House Fellowship</label>
              <input
                type="number"
                value={spiritual.houseFellowshipCentres}
                onChange={(e) => setSpiritual({ ...spiritual, houseFellowshipCentres: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
            <span className="block text-xs font-extrabold text-amber-400 uppercase">Membership Summary (Auto-Calculated)</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="block text-[10px] text-slate-400">Previous Members:</span>
                <input
                  type="number"
                  value={spiritual.previousMonthMembers}
                  onChange={(e) => setSpiritual({ ...spiritual, previousMonthMembers: Number(e.target.value) })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-white"
                />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400">New Members:</span>
                <input
                  type="number"
                  value={spiritual.newMembersThisMonth}
                  onChange={(e) => setSpiritual({ ...spiritual, newMembersThisMonth: Number(e.target.value) })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-white"
                />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400">Withdrawals:</span>
                <span className="block font-bold text-red-400 pt-1">{totalWithdrawals}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400">Net Total Members:</span>
                <span className="block font-black text-emerald-400 text-sm pt-1">{totalMembersAfterWithdrawals}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Financial Receipts (media_1787086658655.jpg) */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              3. Itemized Receipts (Income Collection)
            </h3>
            <span className="text-xs font-black text-emerald-300 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full font-mono">
              Total Receipts: ₦{totalReceipts.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">General Tithe (₦)</label>
              <input
                type="number"
                value={financial.generalTithe}
                onChange={(e) => setFinancial({ ...financial, generalTithe: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Ministers Tithe (₦)</label>
              <input
                type="number"
                value={financial.ministersTithe}
                onChange={(e) => setFinancial({ ...financial, ministersTithe: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Worship Offerings (₦)</label>
              <input
                type="number"
                value={financial.worshipOfferings}
                onChange={(e) => setFinancial({ ...financial, worshipOfferings: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Midweek Offerings (₦)</label>
              <input
                type="number"
                value={financial.midweekOfferings}
                onChange={(e) => setFinancial({ ...financial, midweekOfferings: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Thanksgiving (₦)</label>
              <input
                type="number"
                value={financial.thanksgivingOfferings}
                onChange={(e) => setFinancial({ ...financial, thanksgivingOfferings: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Building Seed (₦)</label>
              <input
                type="number"
                value={financial.buildingPledges}
                onChange={(e) => setFinancial({ ...financial, buildingPledges: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Financial Payments (media_1787086658655.jpg) */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <Calculator className="w-4 h-4 text-red-400" />
              4. Itemized Payments (Expenses & Emoluments)
            </h3>
            <span className="text-xs font-black text-red-300 bg-red-950 border border-red-800 px-3 py-1 rounded-full font-mono">
              Total Payments: ₦{totalPayments.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Ministers Basic (₦)</label>
              <input
                type="number"
                value={financial.ministersBasicSalary}
                onChange={(e) => setFinancial({ ...financial, ministersBasicSalary: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Workers Basic (₦)</label>
              <input
                type="number"
                value={financial.workersBasicSalary}
                onChange={(e) => setFinancial({ ...financial, workersBasicSalary: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Donations/Love (₦)</label>
              <input
                type="number"
                value={financial.donationsLoveOfferings}
                onChange={(e) => setFinancial({ ...financial, donationsLoveOfferings: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Sunday School (₦)</label>
              <input
                type="number"
                value={financial.sundaySchoolExpenses}
                onChange={(e) => setFinancial({ ...financial, sundaySchoolExpenses: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Crusade Expenses (₦)</label>
              <input
                type="number"
                value={financial.crusadeRevivalExpenses}
                onChange={(e) => setFinancial({ ...financial, crusadeRevivalExpenses: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Electricity (₦)</label>
              <input
                type="number"
                value={financial.electricity}
                onChange={(e) => setFinancial({ ...financial, electricity: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase">Calculated Surplus / Deficit Balance</span>
              <span className="text-2xl font-black text-amber-300 font-mono">₦{surplusDeficit.toLocaleString()}</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-bold text-slate-400 uppercase">Cash in Hand & Bank</span>
              <input
                type="number"
                value={financial.cashInHandBank}
                onChange={(e) => setFinancial({ ...financial, cashInHandBank: Number(e.target.value) })}
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1 text-sm text-white font-mono text-right"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-slate-800">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm py-4 rounded-2xl shadow-xl transition-all"
          >
            Submit Official Monthly Spiritual & Financial Report Sheet
          </button>
        </div>

      </form>

    </div>
  );
}
