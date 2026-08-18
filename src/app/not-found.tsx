import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavbarWrapper from '@/components/NavbarWrapper';
import { Home, Calendar, MapPin, Compass, ArrowLeft, Sparkles, Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <NavbarWrapper>
      <div className="min-h-[75vh] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-slate-950 text-white">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          
          {/* Logo Emblem Icon */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-amber-400 p-1 shadow-2xl bg-white mx-auto animate-float">
            <Image
              src="/images/logo.jpg"
              alt="Praise Change Divine Life Gospel Ministry Emblem"
              fill
              sizes="112px"
              className="object-cover"
              priority
              loading="eager"
            />
          </div>

          {/* 404 Large Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-black tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            ERROR 404 • PAGE NOT FOUND
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            This Page May Be Missing — But <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300">You Are Never Lost in Christ!</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us guide you back to our sanctuary.
          </p>

          {/* Scripture Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-md text-center max-w-lg mx-auto">
            <p className="text-xs sm:text-sm italic text-amber-200 font-serif">
              &ldquo;For the Son of man is come to seek and to save that which was lost.&rdquo;
            </p>
            <p className="text-[11px] font-bold tracking-wider text-sky-400 uppercase mt-1.5">
              — Luke 19:10
            </p>
          </div>

          {/* Navigation Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4 text-amber-300" />
              Return to Home Page
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm px-5 py-3.5 rounded-full border border-slate-700 transition-colors"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              Service Schedule
            </Link>

            <Link
              href="/branches"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm px-5 py-3.5 rounded-full border border-slate-700 transition-colors"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              Our Branches
            </Link>
          </div>

          {/* Quick Contact Line */}
          <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
            Praise Change Divine Life Gospel Ministry • Ode Remo, Ayegbami & Eposo Branches, Ogun State
          </div>

        </div>
      </div>
    </NavbarWrapper>
  );
}
