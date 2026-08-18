import React from 'react';
import type { Metadata } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'About Us | Praise Change Divine Life Gospel Ministry Ode Remo',
  description:
    'Learn about Praise Change Divine Life Gospel Ministry in Ode Remo, Ogun State, Nigeria. Discover our history, vision, mission, core spiritual pillars, and a special message from General Overseer Pst. & Pst (Mrs) Gabriel Emmanuel.',
  keywords: [
    'About Praise Change Divine Life Gospel Ministry',
    'Ode Remo Church History',
    'Gabriel Emmanuel General Overseer',
    'Church Vision and Mission Ogun State',
    'Remo North Christian Ministry',
  ],
  openGraph: {
    title: 'About Us | Praise Change Divine Life Gospel Ministry',
    description:
      'Discover our divine vision, core pillars of salvation, and the welcome message from General Overseer Pst. & Pst (Mrs) Gabriel Emmanuel in Ode Remo, Ogun State.',
    url: 'https://praise-website-azure.vercel.app/about',
    images: [{ url: '/images/og-image.jpg', alt: 'About Praise Change Ministry' }],
  },
};

export default function AboutPage() {
  return (
    <NavbarWrapper>
      <div className="pt-8">
        <AboutSection />
        <FaqSection />
      </div>
    </NavbarWrapper>
  );
}
