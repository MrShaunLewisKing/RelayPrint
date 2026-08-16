import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Asymmetric Bento Grid
// Category: Marketing → Bento Grids / Feature Grids
// Brand: PrintExchange (PRINT CAPABILITIES)

export function HomeCapabilities() {
  return (
    <section className="bg-white border-t border-gray-100 py-24" aria-label="Print Capabilities">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-10">
          <span className="section-label text-[#5747E8] block mb-4">
            PRINT CAPABILITIES
          </span>
          <h2 className="section-h2 text-[#0B1020]">
            Print comes in many forms.
          </h2>
          <p className="mt-4 body-large">
            Different requirements call for different production setups.
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid (7/5 + 5/7 with exact gap 24px) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* TOP LEFT: Commercial documents (Span 7) */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[20px] p-8 sm:p-10 bg-linear-to-br from-violet-50/60 via-white to-violet-50/30 border border-violet-100 hover:border-violet-300 transition-all duration-200 group flex flex-col justify-between min-h-[250px]">
            {/* Subtle Geometric Print Edge Graphic */}
            <div
              className="absolute top-5 right-5 pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#5747E8" strokeWidth="1.5">
                <rect x="8" y="8" width="48" height="48" rx="4" strokeDasharray="3 3" />
                <path d="M8 20h48M20 8v48" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-[12px] bg-violet-100/80 text-[#5747E8] flex items-center justify-center mb-6 shadow-2xs">
                <svg
                  className="size-6"
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
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h10.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h10.8" />
                  <path d="M15 2v5h5" />
                </svg>
              </div>
              <h3 className="text-[1.75rem] font-bold text-[#0B1020] leading-snug tracking-tight">
                Commercial documents
              </h3>
              <p className="mt-2.5 body-normal max-w-lg">
                Reports, manuals, booklets and multi-page business print.
              </p>
            </div>
          </div>

          {/* TOP RIGHT: Promotional print (Span 5) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-[20px] p-8 sm:p-10 bg-linear-to-br from-cyan-50/60 via-white to-cyan-50/30 border border-cyan-100 hover:border-cyan-300 transition-all duration-200 group flex flex-col justify-between min-h-[250px]">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-[12px] bg-cyan-100/80 text-[#06B6D4] flex items-center justify-center mb-6 shadow-2xs">
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-[1.35rem] font-bold text-[#0B1020] leading-snug tracking-tight">
                Promotional print
              </h3>
              <p className="mt-2.5 body-normal">
                Leaflets, flyers and campaign material.
              </p>
            </div>
          </div>

          {/* BOTTOM LEFT: Business stationery (Span 5) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-[20px] p-8 sm:p-10 bg-linear-to-br from-pink-50/60 via-white to-pink-50/30 border border-pink-100 hover:border-pink-300 transition-all duration-200 group flex flex-col justify-between min-h-[250px]">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-[12px] bg-pink-100/80 text-[#DB2777] flex items-center justify-center mb-6 shadow-2xs">
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
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-[1.35rem] font-bold text-[#0B1020] leading-snug tracking-tight">
                Business stationery
              </h3>
              <p className="mt-2.5 body-normal">
                Letterheads, cards and everyday branded print.
              </p>
            </div>
          </div>

          {/* BOTTOM RIGHT: Specialist requirements (Span 7) */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[20px] p-8 sm:p-10 bg-linear-to-br from-amber-50/60 via-white to-amber-50/30 border border-amber-100 hover:border-amber-300 transition-all duration-200 group flex flex-col justify-between min-h-[250px]">
            {/* Subtle Registration Accent */}
            <div
              className="absolute top-5 right-5 pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity"
              aria-hidden="true"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#F59E0B" strokeWidth="1.5">
                <circle cx="32" cy="32" r="18" strokeDasharray="3 3" />
                <line x1="32" y1="6" x2="32" y2="58" />
                <line x1="6" y1="32" x2="58" y2="32" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-[12px] bg-amber-100/80 text-[#F59E0B] flex items-center justify-center mb-6 shadow-2xs">
                <svg
                  className="size-6"
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
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="m22 12.65-8.58 3.9a2 2 0 0 1-1.66 0L2.6 12.65" />
                  <path d="m22 17.65-8.58 3.9a2 2 0 0 1-1.66 0L2.6 17.65" />
                </svg>
              </div>
              <h3 className="text-[1.75rem] font-bold text-[#0B1020] leading-snug tracking-tight">
                Specialist requirements
              </h3>
              <p className="mt-2.5 body-normal max-w-lg">
                Jobs involving additional finishing or less-standard production needs.
              </p>
            </div>
          </div>

        </div>

        {/* Section Action at Bottom Right (ONLY ONE text link) */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/capabilities"
            className="action-text-link group"
          >
            <span>View all capabilities</span>
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

      </div>
    </section>
  );
}
