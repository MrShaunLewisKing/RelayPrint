import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import PrelineScriptWrapper from '@/components/PrelineScriptWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.relayprint.co.uk'),
  title: {
    default: 'RelayPrint | B2B Print Routing & Production Coordination',
    template: '%s | RelayPrint'
  },
  description:
    'RelayPrint is a UK B2B print reseller, print-routing and production coordination company connecting print demand with suitable manufacturing partners.',
  keywords: [
    'print routing',
    'B2B print coordination',
    'distributed print production',
    'commercial print reseller',
    'print manufacturing partners',
    'print platform fulfilment',
    'UK print supplier network'
  ],
  authors: [{ name: 'RelayPrint Operations' }],
  creator: 'RelayPrint',
  publisher: 'RelayPrint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.relayprint.co.uk',
    siteName: 'RelayPrint',
    title: 'RelayPrint | B2B Print Routing & Production Coordination',
    description:
      'Connecting print demand from platforms and commercial relationships with suitable manufacturing partners across a distributed network.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RelayPrint | B2B Print Routing & Production Coordination',
    description:
      'Connecting print demand from platforms and commercial relationships with suitable manufacturing partners across a distributed network.'
  },
  robots: {
    index: true,
    follow: true
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
    description:
      'B2B print reseller, print-routing and production coordination company in the United Kingdom.',
    knowsAbout: [
      'Commercial Print Routing',
      'Print Production Coordination',
      'Distributed Manufacturing'
    ]
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
