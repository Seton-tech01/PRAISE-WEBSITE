'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NavbarWrapper from '@/components/NavbarWrapper';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import ServiceSchedule from '@/components/ServiceSchedule';
import BranchesSection from '@/components/BranchesSection';
import SermonsMedia from '@/components/SermonsMedia';
import PrayerAndTestimonies from '@/components/PrayerAndTestimonies';
import GivingSection from '@/components/GivingSection';
import FaqSection from '@/components/FaqSection';
import GivingModal from '@/components/GivingModal';
import PrayerModal from '@/components/PrayerModal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const [isGivingOpen, setIsGivingOpen] = useState(false);
  const [isPrayerOpen, setIsPrayerOpen] = useState(false);

  return (
    <NavbarWrapper>
      {/* 1. Hero Banner */}
      <Hero
        onOpenGiving={() => setIsGivingOpen(true)}
        onOpenPrayer={() => setIsPrayerOpen(true)}
      />

      {/* Quick Navigation Portal Strip */}
      <div className="bg-slate-900 border-y border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Explore Ministry Pages:
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Pastoral Leadership', href: '/leadership' },
                { name: 'Weekly Services', href: '/services' },
                { name: 'Church Branches', href: '/branches' },
                { name: 'Sermons & Media', href: '/sermons' },
                { name: 'Testimonies', href: '/testimonies' },
                { name: 'Online Giving', href: '/giving' },
                { name: 'Contact Us', href: '/contact' },
              ].map((nav) => (
                <Link
                  key={nav.name}
                  href={nav.href}
                  className="text-xs font-bold text-slate-200 bg-slate-800 hover:bg-sky-600 hover:text-white px-3.5 py-1.5 rounded-full border border-slate-700 transition-all flex items-center gap-1"
                >
                  {nav.name}
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. About Overview */}
      <AboutSection />

      {/* 3. Leadership Overview */}
      <LeadershipSection />

      {/* 4. Weekly Service Schedule */}
      <ServiceSchedule />

      {/* 5. Branches & Google Maps Location */}
      <BranchesSection />

      {/* 6. Audio Sermons Hub */}
      <SermonsMedia />

      {/* 7. Miracle Testimonies */}
      <PrayerAndTestimonies
        onOpenPrayer={() => setIsPrayerOpen(true)}
      />

      {/* 8. Online Tithes & Seed Giving */}
      <GivingSection />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* Global Action Modals */}
      <GivingModal
        isOpen={isGivingOpen}
        onClose={() => setIsGivingOpen(false)}
      />
      <PrayerModal
        isOpen={isPrayerOpen}
        onClose={() => setIsPrayerOpen(false)}
      />
    </NavbarWrapper>
  );
}
