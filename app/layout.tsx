import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import PrelineScriptWrapper from '@/components/PrelineScriptWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#080d1d' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.relayprint.co.uk'),
  title: {
    default: 'RelayPrint | B2B Commercial Print Routing & Production Coordination',
    template: '%s | RelayPrint'
  },
  description:
    'RelayPrint is an independent UK B2B commercial print routing and production coordination company connecting platform and commercial demand with verified manufacturing partners.',
  keywords: [
    'commercial print routing',
    'B2B print coordination',
    'distributed print manufacturing',
    'print reseller UK',
    'print production partners',
    'platform print fulfillment',
    'trade print network'
  ],
  authors: [{ name: 'RelayPrint Operations', url: 'https://www.relayprint.co.uk' }],
  creator: 'RelayPrint',
  publisher: 'RelayPrint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.relayprint.co.uk',
    siteName: 'RelayPrint',
    title: 'RelayPrint | B2B Commercial Print Routing & Production Coordination',
    description:
      'Connecting commercial print requirements with suitable manufacturing partners and coordinating the route from requirement to production.',
    images: [
      {
        url: '/illustrations/hero-print.svg',
        width: 1200,
        height: 630,
        alt: 'RelayPrint Commercial Print Routing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RelayPrint | B2B Commercial Print Routing & Production Coordination',
    description:
      'Connecting commercial print requirements with suitable manufacturing partners and coordinating the route from requirement to production.',
    images: ['/illustrations/hero-print.svg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RelayPrint',
    url: 'https://www.relayprint.co.uk',
    logo: 'https://www.relayprint.co.uk/favicon.ico',
    description:
      'Independent B2B commercial print routing and production coordination company connecting print demand with verified manufacturing partners across the United Kingdom.',
    knowsAbout: [
      'Commercial Print Routing',
      'Print Production Coordination',
      'Distributed Print Manufacturing'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Operations',
      url: 'https://www.relayprint.co.uk/contact'
    }
  };

  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-brand-soft selection:text-brand-dark">
        {/* Skip to Main Content Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <PrelineScriptWrapper />
      </body>
    </html>
  );
}
