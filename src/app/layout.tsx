import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#090d16',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://praisechangedivinelife.org'),
  title: 'Praise Change Divine Life Gospel Ministry | Ode Remo, Ogun State',
  description:
    'Official website of Praise Change Divine Life Gospel Ministry, Ode Remo, Remo North Local Government, Ogun State, Nigeria. General Overseer: Pst. & Pst (Mrs) Gabriel Emmanuel. Assistant General Overseer: Pst. Balogun Adebayo. Ayegbami Branch: Pst (Mrs) Gabriel Emmanuel. Eposo Branch: Lady Evang. Oyedele.',
  keywords: [
    'Praise Change Divine Life Gospel Ministry',
    'Praise Change Ode Remo',
    'Church in Ode Remo Ogun State',
    'Gabriel Emmanuel General Overseer',
    'Pst Balogun Adebayo',
    'Pst Mrs Gabriel Emmanuel Ayegbami Branch',
    'Lady Evang Oyedele Eposo Branch',
    'Remo North Local Government Ogun State Church',
    'Sunday Service Ode Remo',
    'Deliverance and Prophetic Hour Ogun State',
    'Moniepoint Emmanuel Gabriel 8025374392',
  ],
  authors: [{ name: 'Praise Change Divine Life Gospel Ministry' }],
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'Praise Change Divine Life Gospel Ministry | Ode Remo, Ogun State',
    description:
      'Experience Divine Transformation, Yoke-Breaking Prayers, and Salvation. Join Pst. & Pst (Mrs) Gabriel Emmanuel and the church family in Ode Remo, Ayegbami, and Eposo.',
    url: 'https://praisechangedivinelife.org',
    siteName: 'Praise Change Divine Life Gospel Ministry',
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Praise Change Divine Life Gospel Ministry Logo',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="icon" type="image/jpeg" href="/images/logo.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <link rel="shortcut icon" href="/images/logo.jpg" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
