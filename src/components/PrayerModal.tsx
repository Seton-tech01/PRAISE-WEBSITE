'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Volume2, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface PrayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrayerModal({ isOpen, onClose }: PrayerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'Ode Remo Headquarters',
    request: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.request || !form.name) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.5 },
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', phone: '', email: '', branch: 'Ode Remo Headquarters', request: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto">
            <Volume2 className="w-6 h-6 text-sky-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Confidential Prayer Request</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Pst. & Pst (Mrs) Gabriel Emmanuel & Prayer Team
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-bold text-emerald-900">Prayer Request Received!</h4>
            <p className="text-xs sm:text-sm text-emerald-700">
              Amen! Your prayer request has been submitted to the Pastoral Intercessory Team. Be assured that God is answering your prayers!
            </p>
            <button
              onClick={handleReset}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow transition-colors mt-2"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Bro. David"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+234 800 000 0000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Branch</label>
              <select
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
              >
                <option value="Ode Remo Headquarters">Ode Remo Headquarters</option>
                <option value="Eposo Branch">Eposo Branch, Ode Remo</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Prayer Details</label>
              <textarea
                rows={4}
                required
                value={form.request}
                onChange={(e) => setForm({ ...form, request: e.target.value })}
                placeholder="Share your prayer burdens or request for divine intervention..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-black text-sm py-3.5 rounded-xl shadow-lg transition-all"
            >
              Submit Prayer Request
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
