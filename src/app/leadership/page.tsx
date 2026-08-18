import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import LeadershipSection from '@/components/LeadershipSection';

export const metadata: Metadata = {
  title: 'Pastoral Leadership | Praise Change Divine Life Gospel Ministry',
  description:
    'Meet the anointed shepherds of Praise Change Divine Life Gospel Ministry: Pst. & Pst (Mrs) Gabriel Emmanuel (General Overseer & Wife), Pst. Balogun Adebayo (Assistant General Overseer), and Lady Evang. Oyedele (Resident Pastor, Eposo Branch).',
  keywords: [
    'Gabriel Emmanuel General Overseer',
    'Pst Balogun Adebayo Assistant General Overseer',
    'Lady Evang Oyedele Eposo Branch Pastor',
    'Pastoral Team Ode Remo Ogun State',
    'Praise Change Divine Life Ministers',
  ],
  openGraph: {
    title: 'Pastoral Leadership | Praise Change Divine Life Gospel Ministry',
    description:
      'Consecrated servants of God leading Praise Change Divine Life Gospel Ministry in Ode Remo, Remo North Local Government, Ogun State, Nigeria.',
    url: 'https://praisechangedivinelife.org/leadership',
    images: [{ url: '/images/logo.jpg', alt: 'Pastoral Leadership Emblem' }],
  },
};

export default function LeadershipPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <LeadershipSection />
      </div>
    </NavbarWrapper>
  );
}
