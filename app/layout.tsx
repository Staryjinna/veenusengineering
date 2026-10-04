import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { business } from '@/data/contact';

const display = localFont({
  src: [
    { path: './fonts/barlow-condensed-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/barlow-condensed-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});
const body = localFont({
  src: [
    { path: './fonts/barlow-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/barlow-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/barlow-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = { themeColor: '#0e1113', width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: 'Veenus Engineering | SS & MS Gates, Railings, Shutters, Roofing in Vaniyambadi',
    template: '%s',
  },
  description: 'SS and MS gates, railings, grills, rolling shutters and roofing, designed, fabricated and installed in Vaniyambadi and Tirupathur district, Tamil Nadu. Get a free quote on WhatsApp.',
  applicationName: 'Veenus Engineering',
  openGraph: {
    type: 'website',
    siteName: 'Veenus Engineering',
    locale: 'en_IN',
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: 'Veenus Engineering: steel fabrication in Vaniyambadi' }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: './' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:bg-weld focus:px-4 focus:py-2 focus:font-semibold focus:text-ink">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <JsonLd data={localBusinessSchema} />
      </body>
    </html>
  );
}
