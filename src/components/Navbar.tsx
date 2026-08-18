'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, MapPin, Volume2, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenGiving: () => void;
  onOpenPrayer: () => void;
}

export default function Navbar({ onOpenGiving, onOpenPrayer }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Services', href: '/services' },
    { name: 'Branches', href: '/branches' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Testimonies', href: '/testimonies' },
    { name: 'Giving', href: '/giving' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-blue-900 to-indigo-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-sky-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-amber-400 shrink-0 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="Praise Change Church Logo Icon"
                fill
                sizes="20px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Welcome to Praise Change Divine Life Gospel Ministry
            </span>
            <span className="hidden md:inline text-sky-300/60">|</span>
            <a
              href="https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-sky-200 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Ode Remo, Ogun State, Nigeria
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrayer}
              className="inline-flex items-center gap-1 text-sky-100 hover:text-amber-300 transition-colors font-medium text-xs"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              Submit Prayer Request
            </button>
            <span className="text-sky-400/50">|</span>
            <button
              onClick={onOpenGiving}
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-semibold text-xs bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/30"
            >
              <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Online Giving
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-sky-950/5 py-2.5 border-b border-sky-100'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Church Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sky-500 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="Praise Change Divine Life Gospel Ministry Logo"
                fill
                sizes="(max-width: 768px) 44px, 48px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-black tracking-tight text-sky-950 leading-tight group-hover:text-sky-600 transition-colors">
                PRAISE CHANGE
              </span>
              <span className="block text-[11px] sm:text-xs font-bold tracking-widest text-amber-600 uppercase">
                Divine Life Gospel Ministry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1 relative ${
                    isActive
                      ? 'text-sky-600 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600'
                      : 'text-slate-700 hover:text-sky-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-600 hover:after:w-full after:transition-all after:duration-300'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-sky-100 text-sky-700 font-bold'
                        : 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGiving();
                }}
                className="w-full inline-flex justify-center items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-sky-600/20"
              >
                <Heart className="w-4 h-4 fill-white" />
                Online Tithe & Offering
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrayer();
                }}
                className="w-full inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-amber-500/20"
              >
                <Volume2 className="w-4 h-4" />
                Submit Prayer Request
              </button>
              <a
                href="https://maps.app.goo.gl/Yq8U55yDGkEhrvuD8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 bg-slate-100 text-slate-800 font-bold text-sm py-3 rounded-xl border border-slate-200"
              >
                <MapPin className="w-4 h-4 text-sky-600" />
                Google Maps Location
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
