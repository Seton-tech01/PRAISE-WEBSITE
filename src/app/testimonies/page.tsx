import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import PrayerAndTestimonies from '@/components/PrayerAndTestimonies';

export const metadata: Metadata = {
  title: 'Miracle Testimonies & Prayer Wall | Praise Change Divine Life',
  description:
    'Read real-life testimonies of healing, deliverance, and divine breakthrough at Praise Change Divine Life Gospel Ministry in Ode Remo, Ogun State. Submit your own testimony today!',
  keywords: [
    'Church Testimonies Ode Remo',
    'Miracle Stories Praise Change',
    'Healing and Deliverance Testimonies Ogun State',
    'Share Testimony Praise Change Divine Life',
  ],
  openGraph: {
    title: 'Testimonies & Miracles | Praise Change Divine Life Gospel Ministry',
    description:
      'Discover how God is breaking yokes and transforming lives in Ode Remo, Ayegbami, and Eposo Branch.',
    url: 'https://praise-website-azure.vercel.app/testimonies',
    images: [{ url: '/images/og-image.jpg', alt: 'Testimonies Banner' }],
  },
};

export default function TestimoniesPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <PrayerAndTestimonies />
      </div>
    </NavbarWrapper>
  );
}
