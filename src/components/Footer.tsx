'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Heart, Navigation, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenGiving: () => void;
  onOpenPrayer: () => void;
}

export default function Footer({ onOpenGiving, onOpenPrayer }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Church Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400 bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Praise Change Divine Life Gospel Ministry Emblem"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-white leading-tight">PRAISE CHANGE</h3>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Divine Life Gospel Ministry</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              A vibrant house of prayer, praise, deliverance, and divine life in Jesus Christ. Transforming destinies across Ode Remo, Ogun State, Nigeria, and to the ends of the earth.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenGiving}
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-full transition-all"
              >
                <Heart className="w-3.5 h-3.5 fill-slate-950" />
                Online Tithes & Giving
              </button>
              <a
                href="https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs px-4 py-2 rounded-full border border-slate-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-sky-400" />
                Google Maps
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-amber-300 transition-colors">Leadership</Link></li>
              <li><Link href="/services" className="hover:text-amber-300 transition-colors">Services</Link></li>
              <li><Link href="/branches" className="hover:text-amber-300 transition-colors">Branches</Link></li>
              <li><Link href="/sermons" className="hover:text-amber-300 transition-colors">Sermons</Link></li>
              <li><Link href="/testimonies" className="hover:text-amber-300 transition-colors">Testimonies</Link></li>
              <li><Link href="/giving" className="hover:text-amber-300 transition-colors">Online Giving</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Pastoral Team */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">Pastoral Leadership</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="block font-bold text-white">Pst. & Pst (Mrs) Gabriel Emmanuel</span>
                <span className="text-[10px] text-amber-400 uppercase font-semibold">General Overseer & Wife</span>
              </li>
              <li className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="block font-bold text-white">Pst. Balogun Adebayo</span>
                <span className="text-[10px] text-sky-400 uppercase font-semibold">Assistant General Overseer</span>
              </li>
              <li className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="block font-bold text-white">Lady Evang. Oyedele</span>
                <span className="text-[10px] text-emerald-400 uppercase font-semibold">Resident Pastor, Eposo Branch</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider">Contact & Location</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Ode Remo, Remo North Local Government, Ogun State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pastoral Helpline: +234 800 PRAISE CHANGE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@praisechangedivinelife.org</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPrayer}
                className="w-full bg-sky-900/60 hover:bg-sky-800 border border-sky-700/50 text-sky-200 font-bold text-xs py-2.5 rounded-xl transition-colors text-center block"
              >
                Submit Prayer Request
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Praise Change Divine Life Gospel Ministry. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Ode Remo, Ogun State, Nigeria</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:bg-sky-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
