import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import SermonsMedia from '@/components/SermonsMedia';

export const metadata: Metadata = {
  title: 'Audio Sermons & Media Center | Praise Change Divine Life Gospel Ministry',
  description:
    'Listen to anointed audio sermons from General Overseer Pst. Gabriel Emmanuel, Pst. Balogun Adebayo, and Lady Evang. Oyedele. Stream online and download MP3 audio messages.',
  keywords: [
    'Audio Sermons Praise Change Divine Life',
    'Gabriel Emmanuel Sermons MP3',
    'Yoke Breaking Sermons Ogun State',
    'Christian Audio Messages Download',
    'Deliverance Sermons Ode Remo',
  ],
  openGraph: {
    title: 'Sermons & Media Hub | Praise Change Divine Life Gospel Ministry',
    description:
      'Empower your faith with life-changing audio messages and sermon archives from Praise Change Divine Life Gospel Ministry.',
    url: 'https://praisechangedivinelife.org/sermons',
    images: [{ url: '/images/logo.jpg', alt: 'Sermons Media Hub' }],
  },
};

export default function SermonsPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <SermonsMedia />
      </div>
    </NavbarWrapper>
  );
}
