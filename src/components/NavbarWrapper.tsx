'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GivingModal from '@/components/GivingModal';
import PrayerModal from '@/components/PrayerModal';

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const [isGivingOpen, setIsGivingOpen] = useState(false);
  const [isPrayerOpen, setIsPrayerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar
        onOpenGiving={() => setIsGivingOpen(true)}
        onOpenPrayer={() => setIsPrayerOpen(true)}
      />

      <main className="grow">{children}</main>

      <Footer
        onOpenGiving={() => setIsGivingOpen(true)}
        onOpenPrayer={() => setIsPrayerOpen(true)}
      />

      <GivingModal
        isOpen={isGivingOpen}
        onClose={() => setIsGivingOpen(false)}
      />
      <PrayerModal
        isOpen={isPrayerOpen}
        onClose={() => setIsPrayerOpen(false)}
      />
    </div>
  );
}
