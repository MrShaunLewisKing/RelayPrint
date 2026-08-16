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
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 -z-0 pointer-events-none animate-polygon-float"
      >
        <div className="bg-linear-to-tl from-[#5747E8]/10 via-[#06B6D4]/5 to-transparent blur-3xl w-[1080px] h-[600px] rounded-full-s-full" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-16 text-center">
        {/* Main Headline */}
        <h1 className="block max-w-[880px] mx-auto hero-h1">
          <span className="block text-[#0B1020]">Print demand.</span>
          <span className="block bg-linear-to-r from-[#5747E8] via-[#6545F4] to-[#2563EB] bg-clip-text text-transparent animate-hero-gradient">
            Meet production capacity.
          </span>
        </h1>

        {/* Hero Copy (Max 2-3 lines desktop) */}
        <p className="mt-4 max-w-[620px] mx-auto body-large">
          PrintExchange connects commercial print requirements with suitable independent
          manufacturing capacity and coordinates the route into production.
        </p>

        {/* Hero Actions: 1 Filled Button + 1 Text Link */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            href="/how-it-works"
            className="btn-primary-filled shadow-2xs group"
          >
            <span>How PrintExchange works</span>
            <svg
              className="size-[13px] transition-transform duration-180 group-hover:translate-x-0.5"
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
              className="size-[13px] transition-transform duration-180 group-hover:translate-x-0.5"
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

        {/* SIGNATURE EXCHANGE ROUTE & NODE SYSTEM (The Only Broad Exchange Diagram) */}
        <div className="mt-14 sm:mt-18 pt-6 max-w-[840px] mx-auto">
          {/* Desktop & Tablet Unified Horizontal Rail */}
          <div className="hidden sm:block relative px-4">
            
            {/* 1px Continuous Route Line with Single Pulse (6s + 1.5s pause) */}
            <div
              className="absolute top-[30px] left-[16%] right-[16%] h-[1px] bg-[#E6E8EF] overflow-hidden z-0"
              aria-hidden="true"
            >
              <div className="absolute inset-y-0 w-28 bg-linear-to-r from-transparent via-[#5747E8] to-[#06B6D4] opacity-80 animate-signature-pulse" />
            </div>

            <div className="grid grid-cols-3 items-center relative z-10">
              
              {/* Left Node: PRINT DEMAND */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[11px] font-bold text-[#5747E8] tracking-wider uppercase mb-1.5">
                  Input
                </span>
                <div className="size-6 rounded-full bg-white border border-[#E7E9F0] flex items-center justify-center shadow-2xs mb-2">
                  <span className="size-2 rounded-full bg-[#5747E8]" />
                </div>
                <span className="text-xs font-bold text-[#0B1020] tracking-tight">
                  PRINT DEMAND
                </span>
                <span className="text-[13px] text-[#5A6272] mt-0.5">
                  Commercial requirements.
                </span>
              </div>

              {/* Centre Node: PRINTEXCHANGE (Prominent Primary Point) */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[11px] font-bold text-[#5747E8] tracking-wider uppercase mb-1.5">
                  Coordination
                </span>
                <div className="h-7 px-3 rounded-full bg-white border border-[#5747E8]/30 shadow-xs flex items-center gap-1.5 mb-2">
                  <span className="size-2.5 rounded-full bg-[#5747E8]" />
                  <span className="text-[12px] font-bold text-[#0B1020]">
                    Print<span className="text-[#5747E8]">Exchange</span>
                  </span>
                </div>
                <span className="text-xs font-bold text-[#5747E8] tracking-tight">
                  ROUTING LAYER
                </span>
                <span className="text-[13px] text-[#5A6272] mt-0.5">
                  Review &amp; coordinate.
                </span>
              </div>

              {/* Right Node: PRODUCTION */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[11px] font-bold text-[#06B6D4] tracking-wider uppercase mb-1.5">
                  Output
                </span>
                <div className="size-6 rounded-full bg-white border border-[#E7E9F0] flex items-center justify-center shadow-2xs mb-2">
                  <span className="size-2 rounded-full bg-[#06B6D4]" />
                </div>
                <span className="text-xs font-bold text-[#0B1020] tracking-tight">
                  PRODUCTION
                </span>
                <span className="text-[13px] text-[#5A6272] mt-0.5">
                  Independent manufacturing.
                </span>
              </div>

            </div>
          </div>

          {/* Mobile Condensed Exchange Rail (375px) */}
          <div className="sm:hidden flex flex-col items-center gap-2.5 p-4 rounded-[14px] bg-[#F8F9FC] border border-[#E7E9F0] text-center">
            <div className="flex items-center justify-between w-full text-xs font-bold px-1">
              <span className="text-[#5747E8]">PRINT DEMAND</span>
              <span className="text-gray-300">→</span>
              <span className="text-[#0B1020]">PrintExchange</span>
              <span className="text-gray-300">→</span>
              <span className="text-[#06B6D4]">PRODUCTION</span>
            </div>
            <div className="w-full h-[1px] bg-linear-to-r from-[#5747E8] via-[#6545F4] to-[#06B6D4] opacity-60" />
            <span className="text-[12px] text-[#5A6272]">
              Connecting requirements directly with manufacturing.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
