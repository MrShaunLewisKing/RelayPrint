import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Five-Column Footer (Clean Text-Only Foundation)
// Category: Marketing → Website Footers
// Brand: PrintExchange (Dark #050815 with ghosted PRINTEXCHANGE wordmark)

export function HomeFooter() {
  return (
    <footer className="mt-auto bg-[#050815] text-white border-t border-[#161B2E] relative overflow-hidden">
      {/* Decorative Oversized Ghosted PRINTEXCHANGE Wordmark */}
      <div
        className="absolute -bottom-8 right-0 font-black text-white/[0.035] text-6xl sm:text-8xl lg:text-[11rem] tracking-tighter select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        PRINTEXCHANGE
      </div>

      <div className="relative z-10 max-w-[1120px] py-14 px-4 sm:px-6 lg:px-8 lg:pt-18 mx-auto">
        {/* 4-Area Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#161B2E]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <Link
              href="/"
              className="inline-flex items-center text-[16px] font-[750] text-white focus:outline-hidden focus:opacity-80"
              aria-label="PrintExchange"
            >
              <span>
                Print<span className="bg-linear-to-r from-[#5747E8] to-[#2563EB] bg-clip-text text-transparent">Exchange</span>
              </span>
            </Link>
            <p className="text-[13px] text-[#8B92A3] leading-relaxed max-w-sm">
              Connecting print demand with independent production capability.
            </p>
          </div>

          {/* Explore Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.08em]">
              Explore
            </h4>
            <div className="grid space-y-2 text-[13px]">
              <Link
                className="text-[#8B92A3] hover:text-white transition-colors duration-180 focus:outline-hidden"
                href="/how-it-works"
              >
                How It Works
              </Link>
              <Link
                className="text-[#8B92A3] hover:text-white transition-colors duration-180 focus:outline-hidden"
                href="/capabilities"
              >
                Capabilities
              </Link>
              <Link
                className="text-[#8B92A3] hover:text-white transition-colors duration-180 focus:outline-hidden"
                href="/partner-network"
              >
                Partner Network
              </Link>
            </div>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.08em]">
              Company
            </h4>
            <div className="grid space-y-2 text-[13px]">
              <Link
                className="text-[#8B92A3] hover:text-white transition-colors duration-180 focus:outline-hidden"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-[#8B92A3] hover:text-white transition-colors duration-180 focus:outline-hidden"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.08em]">
              Legal
            </h4>
            <div className="grid space-y-2 text-[13px]">
              <Link
                className="text-[#8B92A3] hover:text-white transition-colors duration-180 focus:outline-hidden"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-[#8B92A3] hover:text-white transition-colors duration-180 focus:outline-hidden"
                href="/terms"
              >
                Website Terms
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[11px] text-gray-500">
          <p>
            PrintExchange coordinates commercial print routing and production with
            independent manufacturing partners.
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} PrintExchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
