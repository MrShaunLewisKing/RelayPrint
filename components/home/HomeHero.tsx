'use client';

import React from 'react';
import Link from 'next/link';
import { PrintExchangeBackground } from '../shared/PrintExchangeBackground';

// Preline UI Free Block: Hero Graphic Align Center with Route Pulse
// Category: Marketing → Hero Sections
// Brand: PrintExchange

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFE] min-h-[500px]" aria-label="Hero">
      
      {/* Pattern & Illumination */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <PrintExchangeBackground variant="hero" className="opacity-100" />
        
        {/* Soft violet light upper-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5747E8] opacity-[0.04] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
        {/* Very soft blue/cyan light lower-left */}
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#06B6D4] opacity-[0.025] blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 pt-[58px] pb-[42px] sm:pt-[76px] sm:pb-[54px] text-center animate-section-reveal">
        {/* Main Headline */}
        <h1 className="block max-w-[880px] mx-auto text-[clamp(46px,10vw,52px)] sm:text-[clamp(64px,6vw,88px)] font-[760] leading-[0.94] tracking-[-0.045em]">
          <span className="block text-[#0B1020]">Print demand.</span>
          <span className="block bg-linear-to-r from-[#5747E8] to-[#2563EB] bg-clip-text text-transparent animate-hero-gradient bg-[length:200%_auto]">
            Meet production capacity.
          </span>
        </h1>

        {/* Hero Copy */}
        <p className="mt-5 max-w-[620px] mx-auto text-[17px] leading-[1.6] text-[#596174]">
          PrintExchange connects commercial print requirements with suitable independent manufacturing capacity and coordinates the route into production.
        </p>

        {/* Hero Actions */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-[18px]">
          <Link
            href="/how-it-works"
            className="inline-flex justify-center items-center h-[42px] px-[18px] text-[13px] font-semibold rounded-[11px] bg-[#5747E8] text-white hover:bg-[#4C3DD6] focus:outline-hidden transition-colors shadow-2xs group"
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
        <div className="mt-12 max-w-[660px] max-h-[92px] mx-auto">
          {/* Desktop & Tablet Unified Horizontal Rail */}
          <div className="hidden sm:block relative px-4">
            
            {/* 1px Continuous Route Line with Single Pulse */}
            <div
              className="absolute top-[8px] left-[16%] right-[16%] h-[1px] bg-[#DDE1EA] overflow-hidden z-0"
              aria-hidden="true"
            >
              <div className="absolute inset-y-0 w-28 bg-linear-to-r from-transparent via-[#5747E8] to-[#06B6D4] opacity-80 animate-route-pulse" />
            </div>

            <div className="grid grid-cols-3 items-start relative z-10">
              
              {/* Left Node: PRINT DEMAND */}
              <div className="flex flex-col items-center text-center">
                <div className="size-[17px] rounded-full bg-[#FCFCFE] flex items-center justify-center mb-3">
                  <span className="size-[7px] rounded-full bg-[#5747E8]" />
                </div>
                <span className="text-[11px] font-[700] text-[#0B1020] tracking-[0.10em] uppercase">
                  PRINT DEMAND
                </span>
                <span className="text-[13px] leading-[1.5] text-[#8B92A3] mt-1">
                  Commercial requirements.
                </span>
              </div>

              {/* Centre Node: PRINTEXCHANGE */}
              <div className="flex flex-col items-center text-center">
                <div className="size-[17px] rounded-full bg-[#FCFCFE] flex items-center justify-center mb-3">
                  <span className="size-[11px] rounded-full bg-[#5747E8] shadow-[0_0_8px_rgba(87,71,232,0.25)]" />
                </div>
                <span className="text-[11px] font-[700] text-[#0B1020] tracking-[0.10em] uppercase">
                  PRINTEXCHANGE
                </span>
                <span className="text-[13px] leading-[1.5] text-[#8B92A3] mt-1">
                  Review & coordinate.
                </span>
              </div>

              {/* Right Node: PRODUCTION */}
              <div className="flex flex-col items-center text-center">
                <div className="size-[17px] rounded-full bg-[#FCFCFE] flex items-center justify-center mb-3">
                  <span className="size-[7px] rounded-full bg-[#06B6D4]" />
                </div>
                <span className="text-[11px] font-[700] text-[#0B1020] tracking-[0.10em] uppercase">
                  PRODUCTION
                </span>
                <span className="text-[13px] leading-[1.5] text-[#8B92A3] mt-1">
                  Independent manufacturing.
                </span>
              </div>

            </div>
          </div>

          {/* Mobile Condensed Exchange Rail */}
          <div className="sm:hidden flex flex-col items-center gap-6 max-h-[200px]">
            {/* Mobile Node 1 */}
            <div className="flex flex-col items-center">
              <span className="size-[7px] rounded-full bg-[#5747E8] mb-2" />
              <span className="text-[11px] font-[700] text-[#0B1020] tracking-[0.10em] uppercase">PRINT DEMAND</span>
            </div>
            <div className="w-[1px] h-6 bg-[#DDE1EA] overflow-hidden relative">
              <div className="absolute inset-x-0 h-full bg-linear-to-b from-transparent via-[#5747E8] to-[#06B6D4] opacity-80 animate-route-pulse" />
            </div>
            {/* Mobile Node 2 */}
            <div className="flex flex-col items-center">
              <span className="size-[11px] rounded-full bg-[#5747E8] shadow-[0_0_8px_rgba(87,71,232,0.25)] mb-2" />
              <span className="text-[11px] font-[700] text-[#0B1020] tracking-[0.10em] uppercase">PRINTEXCHANGE</span>
            </div>
            <div className="w-[1px] h-6 bg-[#DDE1EA] overflow-hidden relative">
              <div className="absolute inset-x-0 h-full bg-linear-to-b from-transparent via-[#5747E8] to-[#06B6D4] opacity-80 animate-route-pulse" />
            </div>
            {/* Mobile Node 3 */}
            <div className="flex flex-col items-center">
              <span className="size-[7px] rounded-full bg-[#06B6D4] mb-2" />
              <span className="text-[11px] font-[700] text-[#0B1020] tracking-[0.10em] uppercase">PRODUCTION</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
