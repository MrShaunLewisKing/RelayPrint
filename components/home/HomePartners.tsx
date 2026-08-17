import React from 'react';
import Link from 'next/link';
import { PrintExchangeBackground } from '../shared/PrintExchangeBackground';

// Preline UI Free Block: Icon Blocks with split audience approach
// Category: Marketing → Feature Sections
// Brand: PrintExchange

export function HomePartners() {
  return (
    <>
      <section
        className="bg-[#F5F3FF] pt-[76px] pb-[76px] relative overflow-hidden animate-section-reveal"
        aria-label="Audiences"
      >
        {/* Pattern Integration */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <PrintExchangeBackground variant="lavender" className="opacity-[0.03]" />
        </div>

        <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[clamp(42px,4vw,56px)] font-[700] leading-[1.02] tracking-[-0.035em] text-[#0B1020]">
              Built for both sides
              <span className="block text-[#0B1020]">of commercial print.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-[#596174]">
              PrintExchange works with organisations that need print produced and independent businesses able to produce it.
            </p>
          </div>

          {/* ONE UNIFIED CONNECTED SURFACE */}
          <div className="mt-[34px] bg-white/88 border border-[#E5E6EE] rounded-[22px] shadow-[0_12px_34px_rgba(11,16,32,0.045)] overflow-hidden relative group/surface">
            <div className="flex flex-col md:flex-row relative">
              
              {/* LEFT COLUMN: 01 I need print produced */}
              <div className="w-full md:w-1/2 p-[26px_24px] sm:p-[32px_36px] flex flex-col justify-between hover:bg-[#5747E8]/[0.025] transition-colors duration-200 min-h-[188px]">
                <div>
                  <span className="text-[12px] font-[700] text-[#5747E8] tracking-[0.10em] uppercase block mb-3">
                    01
                  </span>
                  <h3 className="text-[28px] font-[650] text-[#0B1020] leading-[1.12]">
                    I need print produced.
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#596174]">
                    For platforms, brokers and organisations managing commercial print requirements.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5747E8] hover:text-[#4C3DD6] transition-colors group"
                  >
                    <span>Discuss requirements</span>
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

              {/* DIVIDER */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#E5E6EE] -translate-x-1/2 z-10" aria-hidden="true" />
              {/* Mobile Divider */}
              <div className="md:hidden h-[1px] w-full bg-[#E5E6EE]" aria-hidden="true" />

              {/* RIGHT COLUMN: 02 I produce print */}
              <div className="w-full md:w-1/2 p-[26px_24px] sm:p-[32px_36px] flex flex-col justify-between hover:bg-[#2563EB]/[0.025] transition-colors duration-200 min-h-[188px]">
                <div>
                  <span className="text-[12px] font-[700] text-[#2563EB] tracking-[0.10em] uppercase block mb-3">
                    02
                  </span>
                  <h3 className="text-[28px] font-[650] text-[#0B1020] leading-[1.12]">
                    I produce print.
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#596174]">
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

      {/* TRANSITION TO CTA */}
      <div className="h-[48px] bg-[#FCFCFE] relative overflow-hidden" aria-hidden="true">
        <PrintExchangeBackground variant="light" className="opacity-[0.02]" />
      </div>
    </>
  );
}
