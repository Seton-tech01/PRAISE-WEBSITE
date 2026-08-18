import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import BranchesSection from '@/components/BranchesSection';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Contact Us & Prayer Line | Praise Change Divine Life Gospel Ministry',
  description:
    'Get in touch with Praise Change Divine Life Gospel Ministry in Ode Remo, Remo North Local Government, Ogun State, Nigeria. Submit prayer requests and view Google Maps location.',
  keywords: [
    'Contact Praise Change Ode Remo',
    'Pastoral Helpline Ogun State',
    'Prayer Request Form Ode Remo',
    'Google Maps Location Praise Change Divine Life',
  ],
  openGraph: {
    title: 'Contact Us | Praise Change Divine Life Gospel Ministry',
    description:
      'Pastoral helpline, physical location in Ode Remo, Ogun State, and prayer request form.',
    url: 'https://praise-website-azure.vercel.app/contact',
    images: [{ url: '/images/og-image.jpg', alt: 'Contact Us Banner' }],
  },
};

export default function ContactPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <BranchesSection />
        <FaqSection />
      </div>
    </NavbarWrapper>
  );
}
