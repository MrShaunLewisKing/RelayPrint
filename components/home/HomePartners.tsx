import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Editorial Two-Column Audience Surface with Central Node Detail
// Category: Marketing → Split Feature Surfaces
// Brand: PrintExchange (WHO IS PRINTEXCHANGE FOR?)

export function HomePartners() {
  return (
    <section
      className="bg-[#F7F6FF] pt-[72px] pb-[48px] sm:pt-[84px] sm:pb-[64px] animate-section-reveal"
      aria-label="Audiences"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-[32px] sm:mb-[36px]">
          <h2 className="text-[clamp(2.5rem,4vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#0B1020]">
            Built for both sides
            <span className="block text-[#0B1020]">of commercial print.</span>
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-[#596174]">
            PrintExchange works with organisations that need print produced and independent businesses able to produce it.
          </p>
        </div>

        {/* ONE UNIFIED CONNECTED SURFACE */}
        <div className="bg-white border border-[#E7E9F0] rounded-[24px] shadow-[0_14px_40px_rgba(11,16,32,0.05)] overflow-hidden relative group/surface">
          <div className="flex flex-col md:flex-row relative">
            
            {/* LEFT COLUMN: 01 I need print produced */}
            <div className="w-full md:w-1/2 p-[28px] sm:p-[32px] flex flex-col justify-between hover:bg-[#5747E8]/[0.02] transition-colors duration-200">
              <div>
                <span className="text-[0.6875rem] font-bold text-[#5747E8] tracking-[0.10em] uppercase block mb-3">
                  01
                </span>
                <h3 className="text-[1.75rem] font-[650] text-[#0B1020] leading-[1.15] tracking-[-0.02em]">
                  I need print produced.
                </h3>
                <p className="mt-2.5 text-[1.0625rem] leading-[1.65] text-[#596174]">
                  For platforms, brokers and organisations managing commercial print requirements.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5747E8] hover:text-[#4C3DD6] transition-colors group"
                >
                  <span>Discuss print requirements</span>
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

            {/* DIVIDER & CENTRAL NODE */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#E5E7EE] -translate-x-1/2 z-10" aria-hidden="true">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center p-2 group-hover/surface:opacity-100 transition-opacity">
                <span className="size-2 rounded-full bg-[#5747E8] shadow-[0_0_8px_rgba(87,71,232,0.4)] transition-all duration-200" />
              </div>
            </div>
            {/* Mobile Divider */}
            <div className="md:hidden h-[1px] w-full bg-[#E5E7EE]" aria-hidden="true" />

            {/* RIGHT COLUMN: 02 I produce print */}
            <div className="w-full md:w-1/2 p-[28px] sm:p-[32px] flex flex-col justify-between hover:bg-[#06B6D4]/[0.02] transition-colors duration-200">
              <div>
                <span className="text-[0.6875rem] font-bold text-[#5747E8] tracking-[0.10em] uppercase block mb-3">
                  02
                </span>
                <h3 className="text-[1.75rem] font-[650] text-[#0B1020] leading-[1.15] tracking-[-0.02em]">
                  I produce print.
                </h3>
                <p className="mt-2.5 text-[1.0625rem] leading-[1.65] text-[#596174]">
                  For independent manufacturers interested in suitable commercial opportunities.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/partner-network"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5747E8] hover:text-[#4C3DD6] transition-colors group"
                >
                  <span>Discuss partnering</span>
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

          </div>
        </div>

      </div>
    </section>
  );
}
