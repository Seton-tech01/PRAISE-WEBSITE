'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Calendar, PlusCircle, ArrowLeft, CheckCircle2, DollarSign, Users, Flame, BookOpen } from 'lucide-react';

export default function NewServiceReportPage() {
  const { user, addWeeklyReport } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    date: new Date().toISOString().split('T')[0],
    serviceType: 'Sunday Worship' as const,
    branch: (user?.branch !== 'All Branches' ? user?.branch : 'Headquarters') as 'Headquarters' | 'Ayegbami Branch' | 'Eposo Branch',
    menAttendance: 0,
    womenAttendance: 0,
    childrenAttendance: 0,
    newConverts: 0,
    decisionsForChrist: 0,
    holySpiritBaptism: 0,
    healings: 0,
    generalTithe: 0,
    sundayOffering: 0,
    thanksgivingOffering: 0,
    buildingSeed: 0,
    evangelismSeed: 0,
    sermonTitle: '',
    preacher: user?.name || '',
    scriptureReference: '',
  });

  const totalAttendance = Number(form.menAttendance) + Number(form.womenAttendance) + Number(form.childrenAttendance);
  const totalCollection =
    Number(form.generalTithe) +
    Number(form.sundayOffering) +
    Number(form.thanksgivingOffering) +
    Number(form.buildingSeed) +
    Number(form.evangelismSeed);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWeeklyReport({
      ...form,
      totalAttendance,
      totalCollection,
      submittedBy: user?.name || 'Pastoral Team',
    });
    router.push('/admin/service-reports');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Service Reports
          </button>
          <h1 className="text-2xl font-black text-white">New Weekly Service Report</h1>
          <p className="text-xs text-slate-400">Record attendance, financial collections, and spiritual impact.</p>
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-8">
        
        {/* Section 1: Basic Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            1. Service Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Service Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Service Gathering</label>
              <select
                value={form.serviceType}
                onChange={(e) => setForm({ ...form, serviceType: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              >
                <option value="Sunday Worship">Sunday Worship (8:00 AM)</option>
                <option value="Tuesday Bible Study">Tuesday Bible Study (5:00 PM)</option>
                <option value="Thursday Solution Hour">Thursday Solution Hour (5:00 PM)</option>
                <option value="Power Night Vigil">Power Night Vigil (2nd Friday)</option>
                <option value="Special Program">Special Program / Crusade</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Church Branch</label>
              <select
                disabled={user?.role !== 'SUPER_ADMIN'}
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 disabled:opacity-60"
              >
                <option value="Headquarters">Headquarters Sanctuary</option>
                <option value="Ayegbami Branch">Ayegbami Branch</option>
                <option value="Eposo Branch">Eposo Branch</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Attendance Breakdown */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-400" />
              2. Attendance Breakdown
            </h3>
            <span className="text-xs font-black text-sky-300 bg-sky-950 border border-sky-800 px-3 py-1 rounded-full">
              Total Attendance: {totalAttendance}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Men Count</label>
              <input
                type="number"
                min="0"
                value={form.menAttendance}
                onChange={(e) => setForm({ ...form, menAttendance: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Women Count</label>
              <input
                type="number"
                min="0"
                value={form.womenAttendance}
                onChange={(e) => setForm({ ...form, womenAttendance: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Children Count</label>
              <input
                type="number"
                min="0"
                value={form.childrenAttendance}
                onChange={(e) => setForm({ ...form, childrenAttendance: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Spiritual Impact */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <Flame className="w-4 h-4 text-emerald-400" />
            3. Spiritual Conversions & Miracles
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">New Converts</label>
              <input
                type="number"
                min="0"
                value={form.newConverts}
                onChange={(e) => setForm({ ...form, newConverts: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Decisions for Christ</label>
              <input
                type="number"
                min="0"
                value={form.decisionsForChrist}
                onChange={(e) => setForm({ ...form, decisionsForChrist: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Holy Ghost Baptisms</label>
              <input
                type="number"
                min="0"
                value={form.holySpiritBaptism}
                onChange={(e) => setForm({ ...form, holySpiritBaptism: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Healings / Miracles</label>
              <input
                type="number"
                min="0"
                value={form.healings}
                onChange={(e) => setForm({ ...form, healings: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Financial Collections */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-400" />
              4. Financial Collections (₦)
            </h3>
            <span className="text-xs font-black text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full font-mono">
              Total: ₦{totalCollection.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">General Tithe (₦)</label>
              <input
                type="number"
                min="0"
                value={form.generalTithe}
                onChange={(e) => setForm({ ...form, generalTithe: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Sunday Offering (₦)</label>
              <input
                type="number"
                min="0"
                value={form.sundayOffering}
                onChange={(e) => setForm({ ...form, sundayOffering: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Thanksgiving Seed (₦)</label>
              <input
                type="number"
                min="0"
                value={form.thanksgivingOffering}
                onChange={(e) => setForm({ ...form, thanksgivingOffering: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Building Project Seed (₦)</label>
              <input
                type="number"
                min="0"
                value={form.buildingSeed}
                onChange={(e) => setForm({ ...form, buildingSeed: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Evangelism Seed (₦)</label>
              <input
                type="number"
                min="0"
                value={form.evangelismSeed}
                onChange={(e) => setForm({ ...form, evangelismSeed: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Section 5: Sermon Details */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-extrabold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            5. Sermon & Message Notes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Sermon Title</label>
              <input
                type="text"
                required
                value={form.sermonTitle}
                onChange={(e) => setForm({ ...form, sermonTitle: e.target.value })}
                placeholder="e.g. Walking in Grace and Power"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Preacher Name</label>
              <input
                type="text"
                required
                value={form.preacher}
                onChange={(e) => setForm({ ...form, preacher: e.target.value })}
                placeholder="e.g. Pst. Gabriel Emmanuel"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Scripture Reference</label>
              <input
                type="text"
                required
                value={form.scriptureReference}
                onChange={(e) => setForm({ ...form, scriptureReference: e.target.value })}
                placeholder="e.g. 2 Cor 5:17"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-slate-800">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-sm py-4 rounded-2xl shadow-xl transition-all"
          >
            Submit Weekly Service Report
          </button>
        </div>

      </form>

    </div>
  );
}
