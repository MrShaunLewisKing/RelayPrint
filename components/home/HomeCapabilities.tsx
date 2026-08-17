import React from 'react';
import Link from 'next/link';
import { PrintExchangeBackground } from '../shared/PrintExchangeBackground';

// Preline UI Free Block: Asymmetric Bento Grid
// Category: Marketing → Feature Grids
// Brand: PrintExchange

export function HomeCapabilities() {
  return (
    <section className="bg-linear-to-b from-[#FCFCFE] from-[calc(100%-90px)] to-[#F8F6FF] pt-[78px] pb-[84px] relative overflow-hidden animate-section-reveal" aria-label="Print Capabilities">
      
      {/* Pattern Integration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <PrintExchangeBackground variant="light" className="opacity-100" />
      </div>

      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-[32px]">
          <span className="text-[11px] font-[700] text-[#5747E8] tracking-[0.10em] uppercase block mb-3">
            PRINT CAPABILITIES
          </span>
          <h2 className="text-[clamp(42px,4vw,56px)] font-[700] leading-[1.02] tracking-[-0.035em] text-[#0B1020]">
            Print comes in many forms.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#596174]">
            Different requirements call for different production setups.
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* TOP LEFT: Commercial documents (Span 7) - VIOLET */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[20px] p-[22px] sm:p-[26px] bg-white/82 backdrop-blur-[4px] border border-[#E7E9F0] shadow-[0_8px_24px_rgba(11,16,32,0.035)] hover:-translate-y-[2px] hover:shadow-[0_14px_32px_rgba(11,16,32,0.065)] transition-all duration-200 group flex flex-col justify-between min-h-[150px] md:h-[190px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-6 right-6 pointer-events-none opacity-[0.12] group-hover:opacity-[0.24] transition-all duration-200 text-[#5747E8]"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M24 0v12 M32 8H20" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[40px] h-[40px] rounded-[11px] bg-[#5747E8]/[0.08] text-[#5747E8] flex items-center justify-center mb-5 group-hover:-translate-y-[2px] transition-transform duration-200">
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
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h10.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h10.8" />
                  <path d="M15 2v5h5" />
                </svg>
              </div>
              <div className="mt-auto">
                <h3 className="text-[28px] font-[650] text-[#0B1020] leading-[1.12]">
                  Commercial documents
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#596174] max-w-lg">
                  Reports, manuals, booklets and multi-page business print.
                </p>
              </div>
            </div>
          </div>

          {/* TOP RIGHT: Promotional print (Span 5) - CYAN */}
          <div className="md:col-span-5 relative overflow-hidden rounded-[20px] p-[22px] sm:p-[26px] bg-white/82 backdrop-blur-[4px] border border-[#E7E9F0] shadow-[0_8px_24px_rgba(11,16,32,0.035)] hover:-translate-y-[2px] hover:shadow-[0_14px_32px_rgba(11,16,32,0.065)] transition-all duration-200 group flex flex-col justify-between min-h-[150px] md:h-[190px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-5 right-5 pointer-events-none opacity-[0.12] group-hover:opacity-[0.24] transition-all duration-200 text-[#06B6D4]"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M16 0v10 M24 6h-10" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[40px] h-[40px] rounded-[11px] bg-[#06B6D4]/[0.08] text-[#06B6D4] flex items-center justify-center mb-5 group-hover:-translate-y-[2px] transition-transform duration-200">
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
              <div className="mt-auto">
                <h3 className="text-[20px] font-[650] text-[#0B1020] leading-[1.2]">
                  Promotional print
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#596174]">
                  Leaflets, flyers and campaign material.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT: Business stationery (Span 5) - PINK */}
          <div className="md:col-span-5 relative overflow-hidden rounded-[20px] p-[22px] sm:p-[26px] bg-white/82 backdrop-blur-[4px] border border-[#E7E9F0] shadow-[0_8px_24px_rgba(11,16,32,0.035)] hover:-translate-y-[2px] hover:shadow-[0_14px_32px_rgba(11,16,32,0.065)] transition-all duration-200 group flex flex-col justify-between min-h-[150px] md:h-[170px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-5 right-5 pointer-events-none opacity-[0.12] group-hover:opacity-[0.24] transition-all duration-200 text-[#DB2777]"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M16 0v10 M24 6h-10" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[40px] h-[40px] rounded-[11px] bg-[#DB2777]/[0.07] text-[#DB2777] flex items-center justify-center mb-5 group-hover:-translate-y-[2px] transition-transform duration-200">
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
              <div className="mt-auto">
                <h3 className="text-[20px] font-[650] text-[#0B1020] leading-[1.2]">
                  Business stationery
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#596174]">
                  Letterheads, cards and everyday branded print.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT: Specialist requirements (Span 7) - AMBER */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[20px] p-[22px] sm:p-[26px] bg-white/82 backdrop-blur-[4px] border border-[#E7E9F0] shadow-[0_8px_24px_rgba(11,16,32,0.035)] hover:-translate-y-[2px] hover:shadow-[0_14px_32px_rgba(11,16,32,0.065)] transition-all duration-200 group flex flex-col justify-between min-h-[150px] md:h-[170px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-6 right-6 pointer-events-none opacity-[0.12] group-hover:opacity-[0.24] transition-all duration-200 text-[#D99A08]"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M24 0v12 M32 8H20" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[40px] h-[40px] rounded-[11px] bg-[#D99A08]/[0.08] text-[#D99A08] flex items-center justify-center mb-5 group-hover:-translate-y-[2px] transition-transform duration-200">
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
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="m22 12.65-8.58 3.9a2 2 0 0 1-1.66 0L2.6 12.65" />
                  <path d="m22 17.65-8.58 3.9a2 2 0 0 1-1.66 0L2.6 17.65" />
                </svg>
              </div>
              <div className="mt-auto">
                <h3 className="text-[28px] font-[650] text-[#0B1020] leading-[1.12]">
                  Specialist requirements
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#596174] max-w-lg">
                  Additional finishing and less-standard production needs.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Section Action at Bottom Right */}
        <div className="mt-[24px] flex justify-end">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5747E8] hover:text-[#4C3DD6] transition-colors group"
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
