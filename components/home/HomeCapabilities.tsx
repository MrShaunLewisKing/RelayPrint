import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Bento Grid Layout
// Category: Marketing → Bento Grids / Feature Grids
// Source: https://preline.co/blocks/marketing/feature-sections/#bento-grid
// Adapted for RelayPrint: 12-column asymmetric Bento (7/5 + 5/7) with metadata index and single text action

export function HomeCapabilities() {
  return (
    <section className="bg-white border-t border-gray-100 py-20 lg:py-24" aria-label="Print Capabilities">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Heading and Metadata Index */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101426] tracking-tight">
              Print capabilities
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-600">
              Different requirements call for different production setups.
            </p>
          </div>

          {/* Preline Capability Index Metadata Row (Plain labels + dividers) */}
          <div className="flex items-center gap-x-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <span>Documents</span>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <span>Marketing</span>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <span>Stationery</span>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <span>Finishing</span>
          </div>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-8">
          
          {/* TOP LEFT: Commercial Documents (Large Tile - Span 7 cols) */}
          <div className="md:col-span-7 relative overflow-hidden rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-violet-50/50 via-white to-violet-50/30 border border-violet-100/80 hover:border-violet-300/80 transition-all duration-200 group">
            {/* Subtle decorative print grid lines in background */}
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-[0.04] pointer-events-none"
              aria-hidden="true"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid-pattern-docs" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#5747E8" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-pattern-docs)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <div className="size-12 rounded-xl bg-violet-100/80 text-[#5747E8] flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <svg
                    className="size-6"
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
                    <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h10.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                    <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h10.8" />
                    <path d="M15 2v5h5" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-[#5747E8] tracking-wider uppercase block mb-1">
                  High Volume & Publication
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101426] leading-snug">
                  Commercial documents
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                  Reports, manuals, saddle-stitched booklets and multi-page documentation manufactured to precise volume and bindery specifications.
                </p>
              </div>
            </div>
          </div>

          {/* TOP RIGHT: Promotional Print (Medium Tile - Span 5 cols) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-cyan-50/50 via-white to-cyan-50/20 border border-cyan-100/80 hover:border-cyan-300/80 transition-all duration-200 group flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="size-10 rounded-xl bg-cyan-100/80 text-[#06B6D4] flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="size-5"
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#101426] leading-snug">
                Promotional print
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Flyers, leaflets, foldouts and marketing campaign collateral.
              </p>
            </div>
          </div>

          {/* BOTTOM LEFT: Business Stationery (Medium Tile - Span 5 cols) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-pink-50/50 via-white to-pink-50/20 border border-pink-100/80 hover:border-pink-300/80 transition-all duration-200 group flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="size-10 rounded-xl bg-pink-100/80 text-[#DB2777] flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="size-5"
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
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#101426] leading-snug">
                Business stationery
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Letterheads, cards and everyday corporate branded collateral.
              </p>
            </div>
          </div>

          {/* BOTTOM RIGHT: Specialist Requirements (Large Tile - Span 7 cols) */}
          <div className="md:col-span-7 relative overflow-hidden rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 border border-amber-100/80 hover:border-amber-300/80 transition-all duration-200 group">
            {/* Subtle decorative print grid lines in background */}
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-[0.04] pointer-events-none"
              aria-hidden="true"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid-pattern-spec" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#F59E0B" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-pattern-spec)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <div className="size-12 rounded-xl bg-amber-100/80 text-[#F59E0B] flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <svg
                    className="size-6"
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
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 12.65-8.58 3.9a2 2 0 0 1-1.66 0L2.6 12.65" />
                    <path d="m22 17.65-8.58 3.9a2 2 0 0 1-1.66 0L2.6 17.65" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-[#F59E0B] tracking-wider uppercase block mb-1">
                  Finishing & Formats
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101426] leading-snug">
                  Specialist requirements
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                  Custom substrate selection, die-cutting, spot foil, lamination and non-standard print configurations routed to specialized facilities.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Section Action at Bottom Right (ONLY ONE text link) */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5747E8] hover:text-[#4338ca] focus:outline-hidden transition-colors group"
          >
            <span>View all capabilities</span>
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
    </section>
  );
}
