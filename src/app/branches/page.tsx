import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import BranchesSection from '@/components/BranchesSection';

export const metadata: Metadata = {
  title: 'Branches & Location Map | Praise Change Divine Life Gospel Ministry',
  description:
    'Find our International Headquarters in Ode Remo, Remo North Local Government, Ogun State, Nigeria, and our resident branches in Ayegbami and Eposo. Get instant Google Maps directions.',
  keywords: [
    'Praise Change Ode Remo Location',
    'Ode Remo Remo North Local Government Ogun State',
    'Ayegbami Branch Ode Remo',
    'Eposo Branch Ode Remo',
    'Praise Change Divine Life Google Maps Link',
  ],
  openGraph: {
    title: 'Church Branches & Location | Praise Change Divine Life',
    description:
      'Visit our Headquarters in Ode Remo or Ayegbami & Eposo Branches, Ogun State. Interactive Google Maps directions included.',
    url: 'https://praise-website-azure.vercel.app/branches',
    images: [{ url: '/images/og-image.jpg', alt: 'Church Location Map' }],
  },
};

export default function BranchesPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <BranchesSection />
      </div>
    </NavbarWrapper>
  );
}
