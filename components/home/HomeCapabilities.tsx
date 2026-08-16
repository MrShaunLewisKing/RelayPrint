import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Asymmetric Bento Grid
// Category: Marketing → Bento Grids / Feature Grids
// Source: https://preline.co/blocks/marketing/feature-sections/#bento-grid
// Brand: PrintExchange (12-col 7/5 + 5/7 with subtle print geometric graphics)

export function HomeCapabilities() {
  return (
    <section className="bg-white border-t border-gray-100 py-20 lg:py-28" aria-label="Print Capabilities">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101426] tracking-tight">
            Print comes in many forms.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            Different requirements call for different production setups.
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid (7/5 + 5/7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* TOP LEFT: Commercial documents (Span 7) */}
          <div className="md:col-span-7 relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-linear-to-br from-violet-50/70 via-white to-violet-50/30 border border-violet-100/90 hover:border-violet-300 transition-all duration-200 group flex flex-col justify-between min-h-[260px]">
            {/* Subtle Geometric Print Edge Graphic in Corner */}
            <div
              className="absolute top-4 right-4 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            >
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#5747E8" strokeWidth="1.5">
                <rect x="8" y="8" width="56" height="56" rx="4" strokeDasharray="3 3" />
                <path d="M8 20h56M20 8v56" />
                <circle cx="8" cy="8" r="3" fill="#5747E8" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="size-12 rounded-2xl bg-violet-100/80 text-[#5747E8] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform duration-200">
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
              <h3 className="text-2xl sm:text-3xl font-bold text-[#101426] leading-snug">
                Commercial documents
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed max-w-lg">
                Reports, manuals, booklets and multi-page technical documentation.
              </p>
            </div>
          </div>

          {/* TOP RIGHT: Promotional print (Span 5) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-linear-to-br from-cyan-50/70 via-white to-cyan-50/30 border border-cyan-100/90 hover:border-cyan-300 transition-all duration-200 group flex flex-col justify-between min-h-[260px]">
            {/* Geometric Fold Reference */}
            <div
              className="absolute top-4 right-4 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#06B6D4" strokeWidth="1.5">
                <rect x="6" y="6" width="48" height="48" rx="2" />
                <line x1="22" y1="6" x2="22" y2="54" strokeDasharray="2 2" />
                <line x1="38" y1="6" x2="38" y2="54" strokeDasharray="2 2" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="size-12 rounded-2xl bg-cyan-100/80 text-[#06B6D4] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform duration-200">
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#101426] leading-snug">
                Promotional print
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                Leaflets, flyers, brochures and marketing campaign collateral.
              </p>
            </div>
          </div>

          {/* BOTTOM LEFT: Business stationery (Span 5) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-linear-to-br from-pink-50/70 via-white to-pink-50/30 border border-pink-100/90 hover:border-pink-300 transition-all duration-200 group flex flex-col justify-between min-h-[260px]">
            {/* Geometric Crop Marks Outline */}
            <div
              className="absolute top-4 right-4 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#DB2777" strokeWidth="1.5">
                <path d="M10 20V10h10M40 10h10v10M50 40v10H40M20 50H10V40" />
                <rect x="16" y="16" width="28" height="28" rx="2" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="size-12 rounded-2xl bg-pink-100/80 text-[#DB2777] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform duration-200">
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#101426] leading-snug">
                Business stationery
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                Letterheads, compliment slips, presentation folders and corporate print.
              </p>
            </div>
          </div>

          {/* BOTTOM RIGHT: Specialist requirements (Span 7) */}
          <div className="md:col-span-7 relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-linear-to-br from-amber-50/70 via-white to-amber-50/30 border border-amber-100/90 hover:border-amber-300 transition-all duration-200 group flex flex-col justify-between min-h-[260px]">
            {/* Geometric Registration / Finishing Accent */}
            <div
              className="absolute top-4 right-4 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            >
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#F59E0B" strokeWidth="1.5">
                <circle cx="36" cy="36" r="20" strokeDasharray="3 3" />
                <line x1="36" y1="8" x2="36" y2="64" />
                <line x1="8" y1="36" x2="64" y2="36" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="size-12 rounded-2xl bg-amber-100/80 text-[#F59E0B] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform duration-200">
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
              <h3 className="text-2xl sm:text-3xl font-bold text-[#101426] leading-snug">
                Specialist requirements
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed max-w-lg">
                Lamination, precision folding, custom binding and non-standard print configurations.
              </p>
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
