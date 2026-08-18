'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth, PRESET_USERS } from '@/context/AuthContext';
import { ShieldCheck, Lock, Mail, ArrowRight, UserCheck, KeyRound } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@praise.org');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    const success = login(email);
    if (success) {
      router.push('/admin/dashboard');
    }
  };

  const handleSelectRole = (presetEmail: string) => {
    setEmail(presetEmail);
    setPassword('praise2026');
    login(presetEmail);
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden text-white font-sans">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10 space-y-8">
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-amber-400 p-1 shadow-2xl bg-white mx-auto">
            <Image
              src="/images/logo.jpg"
              alt="Praise Change Church Logo"
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-[11px] font-black tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Administrative Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-2">
              PRAISE CHANGE
            </h1>
            <p className="text-xs text-amber-400 font-extrabold uppercase tracking-widest">
              Divine Life Gospel Ministry
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Ode Remo • Ayegbami Branch • Eposo Branch
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl backdrop-blur-md space-y-6">
          
          <div className="text-center space-y-1">
            <h2 className="text-lg font-bold text-white flex items-center justify-center gap-2">
              <KeyRound className="w-4 h-4 text-amber-400" />
              Authenticated Sign In
            </h2>
            <p className="text-xs text-slate-400">
              Sign in to manage service reports, monthly financial & spiritual records.
            </p>
          </div>

          {error && (
            <div className="bg-red-950/80 border border-red-500/50 text-red-300 text-xs p-3 rounded-xl text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@praise.org"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 text-slate-300">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Sign In To Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Preset User Quick-Switch Helper */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <span className="block text-[11px] font-extrabold text-amber-400 uppercase text-center tracking-wider">
              Quick Role Test Logins:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRESET_USERS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectRole(preset.email)}
                  className="text-left bg-slate-950 hover:bg-slate-800 border border-slate-800 p-2.5 rounded-xl transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                      <UserCheck className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white group-hover:text-amber-300 line-clamp-1">
                        {preset.name}
                      </span>
                      <span className="block text-[9px] text-sky-400 font-semibold uppercase">
                        {preset.role === 'SUPER_ADMIN' ? 'General Overseer' : preset.branch}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
