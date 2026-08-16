import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Hero with Polygon Background Accent
// Category: Marketing → Hero Sections
// Source: https://preline.co/blocks/marketing/hero-sections/#hero-with-polygon-background-accent
// Component Primitives: https://preline.co/docs/components/buttons.html
// Adapted for RelayPrint: 1 Primary filled CTA ("How RelayPrint works") + 1 secondary text link ("View capabilities →")

export function HomeHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Preline Subtle Polygon Accent Background Layer with Gentle Flow */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 -z-0 pointer-events-none animate-polygon-float"
      >
        <div className="bg-linear-to-tl from-[#5747E8]/10 via-[#06B6D4]/5 to-transparent blur-3xl w-[1080px] h-[600px] rounded-full-s-full"></div>
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 text-center">
        {/* Main Headline */}
        <h1 className="block max-w-[850px] mx-auto text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-[-0.045em] leading-[0.94]">
          <span className="block text-[#101426]">Print jobs.</span>
          <span className="block bg-linear-to-r from-[#5747E8] via-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent animate-hero-gradient">
            Routed intelligently.
          </span>
        </h1>

        {/* Hero Copy (Natural, non-repetitive) */}
        <p className="mt-6 max-w-[620px] mx-auto text-[17px] text-gray-600 leading-[1.55]">
          RelayPrint connects commercial print requirements with suitable
          manufacturing partners and coordinates the route from requirement to
          production.
        </p>

        {/* Hero Actions: 1 Filled Button + 1 Simple Text Link */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            href="/how-it-works"
            className="h-11 px-6 inline-flex items-center justify-center gap-x-1.5 text-sm font-semibold rounded-full bg-[#5747E8] text-white hover:bg-[#4338ca] hover:-translate-y-[1px] hover:shadow-sm focus:outline-hidden transition-all duration-200 group shadow-2xs"
          >
            <span>How RelayPrint works</span>
            <svg
              className="shrink-0 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#5747E8] focus:outline-hidden transition-colors group"
          >
            <span>View capabilities</span>
            <svg
              className="shrink-0 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
