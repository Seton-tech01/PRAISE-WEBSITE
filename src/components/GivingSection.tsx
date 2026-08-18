'use client';

import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck, Landmark } from 'lucide-react';

export default function GivingSection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const officialAccount = {
    bankName: 'Moniepoint Microfinance Bank',
    accountName: 'EMMANUEL GABRIEL',
    accountNumber: '8025374392',
    ministry: 'Praise Change Divine Life Gospel Ministry',
    purposes: ['Tithes & Offerings', 'Building & Sanctuary Seed', 'Evangelism & Branch Outreaches', 'Prophetic Seed'],
  };

  const handleCopy = (accNumber: string) => {
    navigator.clipboard.writeText(accNumber);
    setCopiedAccount(accNumber);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <section id="giving" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            Kingdom Partnership & Online Giving
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Honor the Lord With Your Substance
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Support God&apos;s work in Ode Remo, Ayegbami, Eposo, and beyond. Seed into Tithes, Offerings, and Ministry expansion.
          </p>
        </div>

        {/* Official Moniepoint Account Card Showcase */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-amber-400/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider block">Official Bank Account</span>
                  <span className="text-sm font-bold text-sky-200">{officialAccount.ministry}</span>
                </div>
              </div>
              <span className="text-[11px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full">
                Verified Moniepoint
              </span>
            </div>

            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">Bank Name</span>
                  <span className="text-lg font-black text-white">{officialAccount.bankName}</span>
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">Account Name</span>
                  <span className="text-lg font-black text-amber-300">{officialAccount.accountName}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">Account Number</span>
                  <span className="text-3xl font-black text-sky-300 font-mono tracking-widest">{officialAccount.accountNumber}</span>
                </div>

                <button
                  onClick={() => handleCopy(officialAccount.accountNumber)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  {copiedAccount === officialAccount.accountNumber ? (
                    <>
                      <Check className="w-5 h-5 text-slate-950" />
                      Copied 8025374392!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 text-slate-950" />
                      Copy Account Number
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider">This account receives:</span>
              <div className="flex flex-wrap gap-2">
                {officialAccount.purposes.map((p, i) => (
                  <span key={i} className="text-xs font-bold text-sky-200 bg-sky-900/60 border border-sky-700/50 px-3 py-1 rounded-lg">
                    ✓ {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integrity Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All tithes and seeds directly support Praise Change Divine Life Gospel Ministry in Ode Remo, Ayegbami, and Eposo. God bless your giving!</span>
        </div>

      </div>
    </section>
  );
}
