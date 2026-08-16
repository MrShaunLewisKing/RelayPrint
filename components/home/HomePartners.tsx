'use client';

// Preline UI Free Block: Connected Split Surface with Central Node
// Category: Marketing → Split Feature Surfaces
// Adapted for RelayPrint: One unified 50/50 container with central "ROUTE & COORDINATE" marker and subtle entrance motion

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function HomePartners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F7F6FF] border-t border-indigo-100/70 py-20 lg:py-28 relative overflow-hidden"
      aria-label="Partner Network"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centered 2-Line Statement */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101426] tracking-tight leading-tight">
            Two sides.
            <span className="block text-[#5747E8]">One network.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We work between organisations that need print and businesses able to produce it.
          </p>
        </div>

        {/* ONE SINGLE CONNECTED SPLIT SURFACE (50 / 50 with Zero Gap) */}
        <div className="relative bg-white border border-indigo-100/90 rounded-3xl shadow-sm overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-indigo-100/80">
            
            {/* LEFT HALF: Print Demand */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white relative">
              {/* Subtle entrance animation line moving toward centre */}
              <div
                className={`hidden md:block absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent to-[#5747E8] transition-all duration-600 ease-out ${
                  isActive ? 'opacity-40' : 'opacity-0'
                }`}
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-100">
                    Print Demand
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#101426] leading-snug">
                  Need print capacity?
                </h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  For platforms, commercial brokers and enterprise buyers with ongoing production volumes.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5747E8] hover:text-[#4338ca] focus:outline-hidden transition-colors group"
                >
                  <span>Discuss requirements</span>
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

            {/* RIGHT HALF: Print Capacity */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-linear-to-br from-violet-50/20 via-white to-cyan-50/30 relative">
              {/* Subtle entrance animation line moving outward from centre */}
              <div
                className={`hidden md:block absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-[#06B6D4] to-transparent transition-all duration-600 ease-out ${
                  isActive ? 'opacity-40' : 'opacity-0'
                }`}
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-100">
                    Print Capacity
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#101426] leading-snug">
                  Have print capacity?
                </h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  For independent manufacturing facilities interested in filling schedule gaps with verified jobs.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/partner-network"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#06B6D4] hover:text-[#0891b2] focus:outline-hidden transition-colors group"
                >
                  <span>Talk about partnering</span>
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

          </div>

          {/* CENTRAL RELAYPRINT MARKER SITTING DIRECTLY ON THE DIVIDING LINE */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center pointer-events-none z-20">
            <div
              className={`size-10 rounded-full bg-[#101426] border-2 border-white shadow-md flex items-center justify-center transition-transform duration-500 ${
                isActive ? 'scale-110' : 'scale-95'
              }`}
            >
              <svg
                className="size-4 text-white"
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
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="m18 9-12 6" />
              </svg>
            </div>
            <span className="mt-1 text-[9px] font-black uppercase tracking-widest text-[#101426] bg-white/95 px-2 py-0.5 rounded-full border border-gray-200 shadow-2xs">
              Route & Coordinate
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
