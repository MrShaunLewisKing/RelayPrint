import React from 'react';
import Link from 'next/link';
import { PrintExchangePattern } from '../shared/PrintExchangePattern';

// Preline UI Free Block: Asymmetric Bento Grid
// Category: Marketing → Feature Grids
// Brand: PrintExchange

export function HomeCapabilities() {
  return (
    <section className="bg-linear-to-b from-white to-[#FBFAFF] pt-[64px] pb-[72px] sm:pt-[72px] sm:pb-[80px] relative overflow-hidden animate-section-reveal" aria-label="Print Capabilities">
      
      {/* Pattern Integration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <PrintExchangePattern 
          variant="light" 
          className="opacity-70" 
          style={{ maskImage: 'radial-gradient(ellipse at center, transparent 40%, black 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 40%, black 100%)' }}
        />
      </div>

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-[32px]">
          <span className="text-[0.6875rem] font-bold text-[#5747E8] tracking-[0.10em] uppercase block mb-4">
            PRINT CAPABILITIES
          </span>
          <h2 className="text-[clamp(2.5rem,4vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#0B1020]">
            Print comes in many forms.
          </h2>
          <p className="mt-3 text-[1.0625rem] leading-[1.65] text-[#596174]">
            Different requirements call for different production setups.
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          
          {/* TOP LEFT: Commercial documents (Span 7) - VIOLET */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[20px] p-[24px] sm:p-[28px] bg-linear-to-br from-[#5747E8]/[0.04] via-white to-transparent border border-[#E7E9F0] hover:-translate-y-[2px] hover:border-[#5747E8]/30 hover:shadow-[0_14px_40px_rgba(11,16,32,0.06)] transition-all duration-200 group flex flex-col justify-between min-h-[200px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-6 right-6 pointer-events-none opacity-[0.12] group-hover:opacity-[0.20] transition-all duration-200 text-[#5747E8]"
              aria-hidden="true"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M24 0v12 M32 8H20" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[40px] h-[40px] rounded-xl bg-[#5747E8]/10 text-[#5747E8] flex items-center justify-center mb-5 shadow-2xs group-hover:-translate-y-[2px] transition-transform duration-200">
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
                <h3 className="text-[1.75rem] font-[650] text-[#0B1020] leading-[1.15] tracking-[-0.02em]">
                  Commercial documents
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.65] text-[#596174] max-w-lg">
                  Reports, manuals, booklets and multi-page business print.
                </p>
              </div>
            </div>
          </div>

          {/* TOP RIGHT: Promotional print (Span 5) - CYAN */}
          <div className="md:col-span-5 relative overflow-hidden rounded-[20px] p-[22px] sm:p-[24px] bg-linear-to-br from-[#06B6D4]/[0.04] via-white to-transparent border border-[#E7E9F0] hover:-translate-y-[2px] hover:border-[#06B6D4]/30 hover:shadow-[0_14px_40px_rgba(11,16,32,0.06)] transition-all duration-200 group flex flex-col justify-between min-h-[180px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-5 right-5 pointer-events-none opacity-[0.12] group-hover:opacity-[0.20] transition-all duration-200 text-[#06B6D4]"
              aria-hidden="true"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M16 0v10 M24 6h-10" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center mb-5 shadow-2xs group-hover:-translate-y-[2px] transition-transform duration-200">
                <svg
                  className="size-[1.15rem]"
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
                <h3 className="text-[1.25rem] font-[650] text-[#0B1020] leading-[1.2]">
                  Promotional print
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.65] text-[#596174]">
                  Leaflets, flyers and campaign material.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT: Business stationery (Span 5) - MAGENTA */}
          <div className="md:col-span-5 relative overflow-hidden rounded-[20px] p-[22px] sm:p-[24px] bg-linear-to-br from-[#D946EF]/[0.04] via-white to-transparent border border-[#E7E9F0] hover:-translate-y-[2px] hover:border-[#D946EF]/30 hover:shadow-[0_14px_40px_rgba(11,16,32,0.06)] transition-all duration-200 group flex flex-col justify-between min-h-[180px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-5 right-5 pointer-events-none opacity-[0.12] group-hover:opacity-[0.20] transition-all duration-200 text-[#D946EF]"
              aria-hidden="true"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M16 0v10 M24 6h-10" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#D946EF]/10 text-[#D946EF] flex items-center justify-center mb-5 shadow-2xs group-hover:-translate-y-[2px] transition-transform duration-200">
                <svg
                  className="size-[1.15rem]"
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
                <h3 className="text-[1.25rem] font-[650] text-[#0B1020] leading-[1.2]">
                  Business stationery
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.65] text-[#596174]">
                  Letterheads, cards and everyday branded print.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT: Specialist requirements (Span 7) - AMBER */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[20px] p-[24px] sm:p-[28px] bg-linear-to-br from-[#F59E0B]/[0.04] via-white to-transparent border border-[#E7E9F0] hover:-translate-y-[2px] hover:border-[#F59E0B]/30 hover:shadow-[0_14px_40px_rgba(11,16,32,0.06)] transition-all duration-200 group flex flex-col justify-between min-h-[200px]">
            {/* Geometric Detail: Print crop corner */}
            <div
              className="absolute top-6 right-6 pointer-events-none opacity-[0.12] group-hover:opacity-[0.20] transition-all duration-200 text-[#F59E0B]"
              aria-hidden="true"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M24 0v12 M32 8H20" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-[40px] h-[40px] rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mb-5 shadow-2xs group-hover:-translate-y-[2px] transition-transform duration-200">
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
                <h3 className="text-[1.75rem] font-[650] text-[#0B1020] leading-[1.15] tracking-[-0.02em]">
                  Specialist requirements
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.65] text-[#596174] max-w-lg">
                  Jobs involving additional finishing or less-standard production needs.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Section Action at Bottom Right */}
        <div className="mt-7 flex justify-end">
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
