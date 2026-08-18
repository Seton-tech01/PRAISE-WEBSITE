import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import ServiceSchedule from '@/components/ServiceSchedule';

export const metadata: Metadata = {
  title: 'Service Schedule & Times | Praise Change Divine Life Gospel Ministry',
  description:
    'Join our weekly divine services in Ode Remo, Ayegbami & Eposo Branch: Sunday Service (8:00 AM – 11:00 AM), Tuesday Bible Study (5:00 PM – 6:00 PM), Thursday Solution Hour (5:00 PM – 6:00 PM), and 2nd Friday Power Night Vigil (10:00 PM).',
  keywords: [
    'Church Service Times Ode Remo',
    'Sunday Worship Ode Remo Ogun State',
    'Solution Hour Thursday',
    'Bible Study Tuesday Ode Remo',
    '2nd Friday Power Night Vigil',
  ],
  openGraph: {
    title: 'Service Times & Weekly Schedule | Praise Change Divine Life',
    description:
      'Worship with us this Sunday at 8:00 AM at our Ode Remo Headquarters Sanctuary, Ayegbami Branch, or Eposo Branch.',
    url: 'https://praise-website-azure.vercel.app/services',
    images: [{ url: '/images/og-image.jpg', alt: 'Praise Change Service Schedule' }],
  },
};

export default function ServicesPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <ServiceSchedule />
      </div>
    </NavbarWrapper>
  );
}
