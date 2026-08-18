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
    'Bank Transfer Tithe Ode Remo',
    'Church Bank Account Ogun State',
    'Kingdom Seed Partnership',
  ],
  openGraph: {
    title: 'Online Giving & Tithes | Praise Change Divine Life Gospel Ministry',
    description:
      'Honor the Lord with your substance. Copy official bank transfer details for GTBank, Access Bank, and Zenith Bank.',
    url: 'https://praisechangedivinelife.org/giving',
    images: [{ url: '/images/logo.jpg', alt: 'Online Giving' }],
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
