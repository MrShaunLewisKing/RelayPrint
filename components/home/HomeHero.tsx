'use client';

import React from 'react';
import Link from 'next/link';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';

// Preline UI Free Block: Centered Hero with Signature Exchange Rail
// Category: Marketing → Hero Sections
// Brand: PrintExchange

export function HomeHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Subtle Polygon Accent Background Layer */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 -z-0 pointer-events-none animate-polygon-float"
      >
        <div className="bg-linear-to-tl from-[#5747E8]/10 via-[#06B6D4]/5 to-transparent blur-3xl w-[1080px] h-[600px] rounded-full-s-full" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-16 text-center">
        {/* Main Headline - Exact scale */}
        <h1 className="block max-w-[860px] mx-auto hero-h1">
          <span className="block text-[#0B1020]">Print demand.</span>
          <span className="block bg-linear-to-r from-[#5747E8] via-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent animate-hero-gradient">
            Meet production capacity.
          </span>
        </h1>

        {/* Hero Copy - Exact scale */}
        <p className="mt-4 max-w-[620px] mx-auto body-large">
          PrintExchange connects commercial print requirements with suitable independent
          manufacturing capacity and coordinates the route into production.
        </p>

        {/* Hero Actions: 1 Filled Button + 1 Secondary Text Link */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            href="/how-it-works"
            className="btn-primary-filled shadow-2xs group"
          >
            <span>How PrintExchange works</span>
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

          <Link
            href="/capabilities"
            className="action-text-link group"
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

        {/* SIGNATURE EXCHANGE RAIL (THE ONLY ROUTING DIAGRAM ON THE PAGE) */}
        <div className="mt-14 sm:mt-18 pt-6 max-w-[860px] mx-auto">
          {/* Desktop & Tablet Continuous Horizontal Route */}
          <div className="hidden sm:grid grid-cols-3 items-center relative px-2">
            
            {/* Background Continuous Connecting Rail with Single Pulse (5-7s) */}
            <div
              className="absolute top-[20px] left-[15%] right-[15%] h-[2px] bg-gray-100 overflow-hidden z-0"
              aria-hidden="true"
            >
              <div className="absolute inset-y-0 w-24 bg-linear-to-r from-transparent via-[#5747E8] to-[#06B6D4] opacity-80 animate-route-pulse" />
            </div>

            {/* Left Node: PRINT DEMAND */}
            <div className="flex flex-col items-center text-center z-10">
              <div className="w-10 h-10 rounded-[12px] bg-violet-50 border border-violet-200/80 flex items-center justify-center text-[#5747E8] shadow-2xs mb-2">
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="text-xs font-bold text-[#0B1020] tracking-tight">
                PRINT DEMAND
              </span>
              <span className="text-[13px] text-[#596174] mt-0.5">
                Commercial requirements.
              </span>
            </div>

            {/* Center Node: PRINTEXCHANGE */}
            <div className="flex flex-col items-center text-center z-10">
              <div className="h-10 px-3.5 rounded-[12px] bg-white border border-gray-200 shadow-xs flex items-center gap-1.5 mb-2">
                <span className="text-[13px] font-bold text-[#0B1020] tracking-tight">
                  Print<span className="text-[#5747E8]">Exchange</span>
                </span>
                <PrintRegistrationMarks variant="dots" />
              </div>
              <span className="text-xs font-bold text-[#5747E8] tracking-tight">
                COORDINATION
              </span>
              <span className="text-[13px] text-[#596174] mt-0.5">
                Review &amp; coordinate.
              </span>
            </div>

            {/* Right Node: PRODUCTION */}
            <div className="flex flex-col items-center text-center z-10">
              <div className="w-10 h-10 rounded-[12px] bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-[#06B6D4] shadow-2xs mb-2">
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <span className="text-xs font-bold text-[#0B1020] tracking-tight">
                PRODUCTION
              </span>
              <span className="text-[13px] text-[#596174] mt-0.5">
                Independent manufacturing.
              </span>
            </div>

          </div>

          {/* Mobile Condensed Exchange Route (375px) */}
          <div className="sm:hidden flex flex-col items-center gap-2 p-4 rounded-[14px] bg-gray-50/80 border border-gray-100 text-center">
            <div className="flex items-center justify-between w-full text-xs font-bold px-2">
              <span className="text-violet-700">PRINT DEMAND</span>
              <span className="text-gray-300">→</span>
              <span className="text-[#0B1020]">PrintExchange</span>
              <span className="text-gray-300">→</span>
              <span className="text-cyan-700">PRODUCTION</span>
            </div>
            <div className="w-full h-1 bg-linear-to-r from-[#5747E8] via-[#8B5CF6] to-[#06B6D4] rounded-full opacity-70" />
            <span className="text-xs text-[#596174]">
              Connecting requirements directly with manufacturing.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
