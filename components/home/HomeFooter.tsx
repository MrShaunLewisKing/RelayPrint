import React from 'react';
import Link from 'next/link';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';

// Preline UI Free Block: Five-Column Footer with Language Dropdown Free (Foundation)
// Category: Marketing → Website Footers
// Source: https://preline.co/blocks/marketing/website-footers/#five-column-footer-with-language-dropdown
// Brand: PrintExchange (Dark #050815 with ghosted wordmark)

export function HomeFooter() {
  return (
    <footer className="mt-auto bg-[#050815] text-white border-t border-gray-900 relative overflow-hidden">
      {/* Decorative Oversized Ghosted PRINTEXCHANGE Wordmark */}
      <div
        className="absolute -bottom-8 right-0 font-black text-gray-900/35 text-6xl sm:text-8xl lg:text-[11rem] tracking-tighter select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        PRINTEXCHANGE
      </div>

      <div className="relative z-10 max-w-[1120px] py-14 px-4 sm:px-6 lg:px-8 lg:pt-18 mx-auto">
        {/* 4-Area Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-900">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[15px] font-black text-white focus:outline-hidden focus:opacity-80"
              aria-label="PrintExchange"
            >
              <span>
                Print<span className="text-[#5747E8]">Exchange</span>
              </span>
              <PrintRegistrationMarks />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Connecting commercial print demand with suitable manufacturing
              capability.
            </p>
          </div>

          {/* Explore Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Explore
            </h4>
            <div className="grid space-y-2 text-sm">
              <Link
                className="text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                href="/how-it-works"
              >
                How It Works
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                href="/capabilities"
              >
                Capabilities
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                href="/partner-network"
              >
                Partner Network
              </Link>
            </div>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Company
            </h4>
            <div className="grid space-y-2 text-sm">
              <Link
                className="text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Legal
            </h4>
            <div className="grid space-y-2 text-sm">
              <Link
                className="text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                href="/terms"
              >
                Website Terms
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-gray-500">
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
