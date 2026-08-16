import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Editorial Two-Column Audience Surface
// Category: Marketing → Split Feature Surfaces
// Brand: PrintExchange (WHO IS PRINTEXCHANGE FOR?)

export function HomePartners() {
  return (
    <section
      className="bg-[#F7F6FF] border-t border-indigo-100/70 py-24"
      aria-label="Audiences"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-h2 text-[#0B1020]">
            Built for both sides
            <span className="block text-[#5747E8]">of commercial print.</span>
          </h2>
          <p className="mt-4 body-large">
            Whether you bring print demand or production capability, PrintExchange provides a commercial point of coordination.
          </p>
        </div>

        {/* ONE UNIFIED PRELINE EDITORIAL SURFACE (Two Columns with Internal Divider) */}
        <div className="bg-white border border-[#E7E8ED] rounded-[20px] shadow-2xs overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E7E8ED]">
            
            {/* LEFT COLUMN: 01 I need print produced */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
              <div>
                <span className="text-xs font-mono font-bold text-[#5747E8] block mb-3">
                  01
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1020] leading-snug tracking-tight">
                  I need print produced.
                </h3>
                <p className="mt-3 body-normal">
                  For platforms, brokers and organisations managing commercial print requirements.
                </p>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  href="/contact"
                  className="action-text-link group"
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

            {/* RIGHT COLUMN: 02 I produce print */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
              <div>
                <span className="text-xs font-mono font-bold text-[#06B6D4] block mb-3">
                  02
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1020] leading-snug tracking-tight">
                  I produce print.
                </h3>
                <p className="mt-3 body-normal">
                  For independent manufacturers interested in suitable commercial production opportunities.
                </p>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  href="/partner-network"
                  className="action-text-link group"
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
