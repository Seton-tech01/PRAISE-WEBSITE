'use client';

import React from 'react';
import { PRESET_USERS } from '@/context/AuthContext';
import { Users, ShieldCheck, Building, UserCheck, PlusCircle } from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-400/20 mb-2">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            ROLE-BASED ACCESS CONTROL (RBAC)
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Pastoral & Administrative Officers</h1>
          <p className="text-xs text-slate-400">Manage access levels and branch assignments for ministers and officers.</p>
        </div>

        <button
          onClick={() => alert('New user invitation feature ready! Add pastoral emails.')}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all"
        >
          <PlusCircle className="w-4 h-4 text-amber-300" />
          Assign New Officer
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-extrabold border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Officer Name</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4">Role Access</th>
                <th className="px-6 py-4">Assigned Branch</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {PRESET_USERS.map((usr) => (
                <tr key={usr.id} className="hover:bg-slate-950/60 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-sky-500/20 text-sky-400 font-black flex items-center justify-center text-xs">
                      {usr.name.charAt(0)}
                    </div>
                    <span className="font-extrabold text-white">{usr.name}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-300">{usr.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
                      usr.role === 'SUPER_ADMIN'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                    }`}>
                      <ShieldCheck className="w-3 h-3" />
                      {usr.role === 'SUPER_ADMIN' ? 'General Overseer' : usr.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-200">
                    <span className="inline-flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-sky-400" />
                      {usr.branch}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <UserCheck className="w-3 h-3" />
                      Active Officer
                    </span>
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
