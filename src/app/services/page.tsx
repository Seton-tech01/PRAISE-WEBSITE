import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import ServiceSchedule from '@/components/ServiceSchedule';

export const metadata: Metadata = {
  title: 'Service Schedule & Times | Praise Change Divine Life Gospel Ministry',
  description:
    'Join our weekly divine services in Ode Remo & Eposo Branch: Sunday Transformation Service (8:00 AM), Tuesday Bible Study (5:00 PM), Thursday Prophetic Deliverance Hour (5:00 PM), and Monthly Night of Breakthrough Vigil (Last Friday, 10:00 PM).',
  keywords: [
    'Church Service Times Ode Remo',
    'Sunday Worship Ode Remo Ogun State',
    'Deliverance Hour Thursday',
    'Bible Study Tuesday Ode Remo',
    'Monthly Vigil Night of Breakthrough',
  ],
  openGraph: {
    title: 'Service Times & Weekly Schedule | Praise Change Divine Life',
    description:
      'Worship with us this Sunday at 8:00 AM at our Ode Remo Headquarters Sanctuary or Eposo Branch.',
    url: 'https://praisechangedivinelife.org/services',
    images: [{ url: '/images/logo.jpg', alt: 'Praise Change Service Schedule' }],
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
