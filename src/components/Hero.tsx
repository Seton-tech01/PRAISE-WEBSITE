'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Sparkles, Heart, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenGiving: () => void;
  onOpenPrayer: () => void;
}

export default function Hero({ onOpenGiving, onOpenPrayer }: HeroProps) {
  // Simple countdown to upcoming Sunday 8:00 AM
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const nextSunday = new Date();
      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
      nextSunday.setHours(8, 0, 0, 0);

      const diff = nextSunday.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex flex-col justify-between">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 opacity-90 z-0"></div>
      <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-16 sm:pb-20 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-[11px] sm:text-sm font-semibold tracking-wide backdrop-blur-md max-w-full flex-wrap justify-center">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>WELCOME TO OUR DIVINE FAMILY</span>
              <span className="text-amber-400 font-bold">•</span>
              <span className="text-amber-300">ODE REMO, OGUN STATE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300">Divine Transformation</span> & Unstoppable Grace
            </h1>

            {/* Church Name Highlight */}
            <div className="inline-block bg-gradient-to-r from-sky-900/60 to-indigo-900/60 border-l-4 border-amber-400 px-3.5 py-2 sm:px-4 sm:py-2 rounded-r-xl text-left max-w-full">
              <p className="text-base sm:text-xl font-bold tracking-wide text-sky-200">
                PRAISE CHANGE DIVINE LIFE GOSPEL MINISTRY
              </p>
              <p className="text-[11px] sm:text-sm text-slate-300 font-medium mt-0.5">
                Headquarters Ode Remo • Ayegbami Branch • Eposo Branch
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              We are a spirit-filled gospel sanctuary dedicated to raising champions in Christ, liberating souls through fervent prayer, divine worship, and the unadulterated word of God.
            </p>

            {/* Scripture Box */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-md text-left relative overflow-hidden">
              <p className="text-xs sm:text-base italic text-amber-200 font-serif">
                &ldquo;Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.&rdquo;
              </p>
              <p className="text-[11px] font-bold tracking-wider text-sky-400 uppercase mt-2">
                — 2 Corinthians 5:17
              </p>
            </div>

            {/* Mobile Stacked Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                Sunday Worship (8 AM – 11 AM)
              </a>

              <button
                onClick={onOpenGiving}
                className="inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md transition-all"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950" />
                Online Giving (Moniepoint)
              </button>

              <a
                href="https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs sm:text-base px-5 py-3.5 rounded-full transition-colors"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                Google Maps Location
              </a>
            </div>
          </div>

          {/* Right Column: Emblem Logo & Responsive Countdown */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
            
            {/* Logo Emblem Frame */}
            <div className="relative group mb-6 sm:mb-8">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500 via-amber-400 to-emerald-400 opacity-60 blur-xl group-hover:opacity-90 transition duration-700 animate-pulse-glow"></div>
              
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 rounded-full border-4 border-sky-400/60 p-2 bg-slate-900 shadow-2xl flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo.jpg"
                    alt="Praise Change Divine Life Gospel Ministry Emblem"
                    fill
                    sizes="(max-width: 640px) 208px, 288px"
                    className="object-cover"
                    priority
                    loading="eager"
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 bg-slate-900/90 border border-sky-400/40 rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-xl flex items-center gap-2 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400">HQ & Branches</p>
                  <p className="text-[11px] sm:text-xs font-black text-amber-300">Ode Remo, Ogun State</p>
                </div>
              </div>
            </div>

            {/* Sunday Service Countdown Card */}
            <div className="w-full max-w-sm bg-slate-900/90 border border-sky-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold tracking-wider text-sky-400 uppercase">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Next Service Countdown
                </span>
                <span className="text-[10px] font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full border border-sky-400/30">
                  Sunday 8:00 AM
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
                <div className="bg-slate-800/80 rounded-xl p-2 border border-slate-700/60">
                  <span className="block text-xl sm:text-3xl font-black text-amber-400">{timeLeft.days}</span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase">Days</span>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-2 border border-slate-700/60">
                  <span className="block text-xl sm:text-3xl font-black text-white">{timeLeft.hours}</span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase">Hours</span>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-2 border border-slate-700/60">
                  <span className="block text-xl sm:text-3xl font-black text-white">{timeLeft.minutes}</span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase">Mins</span>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-2 border border-slate-700/60">
                  <span className="block text-xl sm:text-3xl font-black text-sky-400">{timeLeft.seconds}</span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase">Secs</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="relative z-10 bg-slate-900/90 border-t border-slate-800 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-slate-200">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Sunday Service</h4>
              <p className="text-[10px] sm:text-xs text-slate-400">8:00 AM - 11:00 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Solution Hour</h4>
              <p className="text-[10px] sm:text-xs text-slate-400">Thursday 5:00 PM - 6:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Power Night</h4>
              <p className="text-[10px] sm:text-xs text-slate-400">2nd Friday Vigil (10 PM)</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Bible Study</h4>
              <p className="text-[10px] sm:text-xs text-slate-400">Tuesday 5:00 PM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
