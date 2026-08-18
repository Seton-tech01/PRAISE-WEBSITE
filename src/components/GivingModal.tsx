'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Heart, Landmark, ShieldCheck } from 'lucide-react';

interface GivingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GivingModal({ isOpen, onClose }: GivingModalProps) {
  const [copiedAcc, setCopiedAcc] = useState<string | null>(null);

  if (!isOpen) return null;

  const officialAccount = {
    bank: 'Moniepoint Microfinance Bank',
    name: 'EMMANUEL GABRIEL',
    number: '8025374392',
    ministry: 'Praise Change Divine Life Gospel Ministry',
  };

  const copyToClipboard = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedAcc(num);
    setTimeout(() => setCopiedAcc(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6 fill-amber-500" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Online Kingdom Giving</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            {officialAccount.ministry}
          </p>
        </div>

        {/* Official Account Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-xl border border-amber-400/30">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Official Bank Account</span>
            <span className="text-[10px] font-bold bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/20">
              Moniepoint
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400">Bank Name</span>
            <span className="text-sm font-extrabold text-white">{officialAccount.bank}</span>
          </div>

          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400">Account Name</span>
            <span className="text-base font-extrabold text-amber-300">{officialAccount.name}</span>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-3">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">Account Number</span>
              <span className="text-2xl font-black text-sky-300 font-mono tracking-wider">{officialAccount.number}</span>
            </div>

            <button
              onClick={() => copyToClipboard(officialAccount.number)}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow transition-all hover:scale-105"
            >
              {copiedAcc === officialAccount.number ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-950" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1" />
            &ldquo;God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
          </p>
        </div>

      </div>
    </div>
  );
}
