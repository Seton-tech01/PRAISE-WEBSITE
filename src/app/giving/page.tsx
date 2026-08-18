import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import GivingSection from '@/components/GivingSection';

export const metadata: Metadata = {
  title: 'Online Tithes & Giving | Praise Change Divine Life Gospel Ministry',
  description:
    'Support the ministry of Praise Change Divine Life Gospel Ministry in Ode Remo, Ogun State. Partner with us through Tithes, Offerings, Building Seeds, and Evangelism Seeds.',
  keywords: [
    'Online Giving Praise Change Divine Life',
    'Moniepoint Emmanuel Gabriel 8025374392',
    'Tithe Ode Remo Ogun State',
    'Kingdom Seed Partnership',
  ],
  openGraph: {
    title: 'Online Giving & Tithes | Praise Change Divine Life Gospel Ministry',
    description:
      'Honor the Lord with your substance. Moniepoint Microfinance Bank: 8025374392 (EMMANUEL GABRIEL).',
    url: 'https://praise-website-azure.vercel.app/giving',
    images: [{ url: '/images/og-image.jpg', alt: 'Online Giving Banner' }],
  },
};

export default function GivingPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <GivingSection />
      </div>
    </NavbarWrapper>
  );
}
