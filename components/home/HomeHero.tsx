'use client';

import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Centered Hero with Signature Route & Node System
// Category: Marketing → Hero Sections
// Brand: PrintExchange

export function HomeHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Subtle Polygon Accent Background Layer */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 -z-0 pointer-events-none"
      >
        <div className="bg-linear-to-tl from-[#5747E8]/10 via-[#06B6D4]/5 to-transparent blur-3xl w-[1080px] h-[600px] rounded-full-s-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-[112px] sm:pb-0 text-center animate-section-reveal">
        {/* Main Headline */}
        <h1 className="block max-w-[900px] mx-auto text-[clamp(4rem,6.2vw,5.75rem)] font-[750] leading-[0.94] tracking-[-0.045em]">
          <span className="block text-[#0B1020]">Print demand.</span>
          <span className="block bg-linear-to-r from-[#5747E8] to-[#2563EB] bg-clip-text text-transparent animate-hero-gradient bg-[length:200%_auto]">
            Meet production capacity.
          </span>
        </h1>

        {/* Hero Copy */}
        <p className="mt-6 max-w-[620px] mx-auto text-[1.0625rem] leading-[1.65] text-[#596174]">
          PrintExchange connects commercial print requirements with suitable independent
          manufacturing capacity and coordinates the route into production.
        </p>

        {/* Hero Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/how-it-works"
            className="inline-flex justify-center items-center h-[42px] px-[18px] text-[13px] font-semibold rounded-xl bg-[#5747E8] text-white hover:bg-[#4C3DD6] focus:outline-hidden transition-colors shadow-2xs group"
          >
            How PrintExchange works
          </Link>

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5747E8] hover:text-[#4C3DD6] transition-colors group"
          >
            <span>View capabilities</span>
            <svg
              className="size-[13px] transition-transform duration-200 group-hover:translate-x-0.5"
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

        {/* SIGNATURE EXCHANGE ROUTE & NODE SYSTEM */}
        <div className="mt-16 sm:mt-[96px] pb-12 max-w-[660px] mx-auto">
          {/* Desktop & Tablet Unified Horizontal Rail */}
          <div className="hidden sm:block relative px-4">
            
            {/* 1px Continuous Route Line with Single Pulse */}
            <div
              className="absolute top-[8px] left-[16%] right-[16%] h-[1px] bg-[#E7E9F0] overflow-hidden z-0"
              aria-hidden="true"
            >
              <div className="absolute inset-y-0 w-28 bg-linear-to-r from-transparent via-[#5747E8] to-[#06B6D4] opacity-80 animate-route-pulse" />
            </div>

            <div className="grid grid-cols-3 items-start relative z-10">
              
              {/* Left Node: PRINT DEMAND */}
              <div className="flex flex-col items-center text-center">
                <div className="size-[17px] rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="size-2 rounded-full bg-[#5747E8]" />
                </div>
                <span className="text-[0.6875rem] font-bold text-[#0B1020] tracking-[0.10em] uppercase">
                  PRINT DEMAND
                </span>
                <span className="text-[0.9375rem] leading-[1.65] text-[#8B92A3] mt-1">
                  Commercial requirements.
                </span>
              </div>

              {/* Centre Node: PRINTEXCHANGE */}
              <div className="flex flex-col items-center text-center">
                <div className="size-[17px] rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="size-3.5 rounded-full bg-linear-to-tr from-[#5747E8] to-[#2563EB] shadow-sm" />
                </div>
                <span className="text-[0.6875rem] font-bold text-[#0B1020] tracking-[0.10em] uppercase">
                  PRINTEXCHANGE
                </span>
                <span className="text-[0.9375rem] leading-[1.65] text-[#8B92A3] mt-1">
                  Review &amp; coordinate.
                </span>
              </div>

              {/* Right Node: PRODUCTION */}
              <div className="flex flex-col items-center text-center">
                <div className="size-[17px] rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="size-2 rounded-full bg-[#06B6D4]" />
                </div>
                <span className="text-[0.6875rem] font-bold text-[#0B1020] tracking-[0.10em] uppercase">
                  PRODUCTION
                </span>
                <span className="text-[0.9375rem] leading-[1.65] text-[#8B92A3] mt-1">
                  Independent manufacturing.
                </span>
              </div>

            </div>
          </div>

          {/* Mobile Condensed Exchange Rail */}
          <div className="sm:hidden flex flex-col items-center gap-6">
            {/* Mobile Node 1 */}
            <div className="flex flex-col items-center">
              <span className="size-2 rounded-full bg-[#5747E8] mb-2" />
              <span className="text-[0.6875rem] font-bold text-[#0B1020] tracking-[0.10em] uppercase">PRINT DEMAND</span>
            </div>
            <div className="w-[1px] h-6 bg-linear-to-b from-[#5747E8] to-[#2563EB] opacity-40" />
            {/* Mobile Node 2 */}
            <div className="flex flex-col items-center">
              <span className="size-3 rounded-full bg-linear-to-tr from-[#5747E8] to-[#2563EB] mb-2" />
              <span className="text-[0.6875rem] font-bold text-[#0B1020] tracking-[0.10em] uppercase">PRINTEXCHANGE</span>
            </div>
            <div className="w-[1px] h-6 bg-linear-to-b from-[#2563EB] to-[#06B6D4] opacity-40" />
            {/* Mobile Node 3 */}
            <div className="flex flex-col items-center">
              <span className="size-2 rounded-full bg-[#06B6D4] mb-2" />
              <span className="text-[0.6875rem] font-bold text-[#0B1020] tracking-[0.10em] uppercase">PRODUCTION</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
