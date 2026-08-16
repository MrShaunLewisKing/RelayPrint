'use client';

import React from 'react';
import Link from 'next/link';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';

// Preline UI Free Block: Centered Hero with Brand Exchange Route Device
// Category: Marketing → Hero Sections
// Brand: PrintExchange

export function HomeHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Preline Subtle Polygon Accent Background Layer */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 -z-0 pointer-events-none animate-polygon-float"
      >
        <div className="bg-linear-to-tl from-[#5747E8]/10 via-[#06B6D4]/5 to-transparent blur-3xl w-[1080px] h-[600px] rounded-full-s-full" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-16 text-center">
        {/* Main Headline - No pill/eyebrow above */}
        <h1 className="block max-w-[860px] mx-auto text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-[-0.045em] leading-[0.95]">
          <span className="block text-[#101426]">Print demand.</span>
          <span className="block bg-linear-to-r from-[#5747E8] via-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent animate-hero-gradient">
            Meet production capacity.
          </span>
        </h1>

        {/* Hero Copy (Max 2-3 lines desktop) */}
        <p className="mt-6 max-w-[620px] mx-auto text-[17px] text-gray-600 leading-[1.55]">
          PrintExchange connects commercial print requirements with suitable independent
          manufacturing capacity and coordinates the route into production.
        </p>

        {/* Hero Actions: 1 Filled Button + 1 Secondary Text Link */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            href="/how-it-works"
            className="h-11 px-6 inline-flex items-center justify-center gap-x-1.5 text-sm font-semibold rounded-full bg-[#5747E8] text-white hover:bg-[#4338ca] hover:-translate-y-[1px] hover:shadow-sm focus:outline-hidden transition-all duration-200 group shadow-2xs"
          >
            <span>How PrintExchange works</span>
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
            <span>Explore capabilities</span>
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

        {/* HERO VISUAL DEVICE: THE EXCHANGE LINE */}
        <div className="mt-14 sm:mt-18 pt-6 max-w-[840px] mx-auto">
          {/* Desktop & Tablet Horizontal Exchange Route */}
          <div className="hidden sm:flex items-center justify-between relative px-2">
            
            {/* Left Node: PRINT DEMAND */}
            <div className="flex items-center gap-2.5 z-10 shrink-0">
              <div className="size-8 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[#5747E8] shadow-2xs">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 block leading-none">
                  Incoming
                </span>
                <span className="text-xs font-bold text-[#101426] tracking-tight">
                  PRINT DEMAND
                </span>
              </div>
            </div>

            {/* Connecting Route Line Left */}
            <div className="flex-1 relative mx-3 h-[2px] bg-gray-100 overflow-hidden rounded-full">
              <div className="absolute inset-y-0 w-12 bg-linear-to-r from-transparent via-[#5747E8] to-transparent animate-exchange-pulse-left" />
            </div>

            {/* Central Node: PRINTEXCHANGE (Strongest focal element) */}
            <div className="z-10 shrink-0 animate-exchange-center">
              <div className="px-4 py-2 rounded-full bg-white border border-gray-200/90 shadow-sm shadow-indigo-500/10 flex items-center gap-2">
                <span className="text-[13px] font-extrabold text-[#101426] tracking-tight">
                  Print<span className="text-[#5747E8]">Exchange</span>
                </span>
                <PrintRegistrationMarks variant="dots" />
              </div>
            </div>

            {/* Connecting Route Line Right */}
            <div className="flex-1 relative mx-3 h-[2px] bg-gray-100 overflow-hidden rounded-full">
              <div className="absolute inset-y-0 w-12 bg-linear-to-l from-transparent via-[#06B6D4] to-transparent animate-exchange-pulse-right" />
            </div>

            {/* Right Node: PRINT CAPACITY */}
            <div className="flex items-center gap-2.5 z-10 shrink-0">
              <div className="text-right">
                <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-600 block leading-none">
                  Fulfilment
                </span>
                <span className="text-xs font-bold text-[#101426] tracking-tight">
                  PRINT CAPACITY
                </span>
              </div>
              <div className="size-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#06B6D4] shadow-2xs">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
            </div>

          </div>

          {/* Mobile Condensed Exchange Route (375px) */}
          <div className="sm:hidden flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50/70 border border-gray-100">
            <div className="flex items-center justify-between w-full text-xs font-bold px-2">
              <span className="text-violet-700">PRINT DEMAND</span>
              <span className="text-gray-300">→</span>
              <span className="text-[#101426]">PrintExchange</span>
              <span className="text-gray-300">→</span>
              <span className="text-cyan-700">PRINT CAPACITY</span>
            </div>
            <div className="w-full h-1 bg-linear-to-r from-[#5747E8] via-[#8B5CF6] to-[#06B6D4] rounded-full opacity-60" />
          </div>
        </div>

      </div>
    </div>
  );
}
