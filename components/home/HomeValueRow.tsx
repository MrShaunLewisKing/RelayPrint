'use client';

// Preline UI Free Primitive: Step Sequence & Timeline Rail
// Category: Marketing → Timeline / Process Primitives
// Source: https://preline.co/docs/components/timeline.html
// Adapted for RelayPrint: Compact Horizontal Conceptual Routing Rail (PRINT DEMAND → RELAYPRINT → PRODUCTION)

import React, { useEffect, useRef, useState } from 'react';

export function HomeValueRow() {
  const railRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (railRef.current) {
      observer.observe(railRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={railRef}
      className="bg-white border-y border-gray-100/80 py-10 sm:py-12 relative overflow-hidden"
      aria-label="Print Routing Rail"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop 3-Point Connected Horizontal Rail */}
        <div className="relative">
          
          {/* Subtle Horizontal Animated Route Connecting Line (Desktop) */}
          <div
            className="hidden md:block absolute top-[22px] left-[15%] right-[15%] h-[2px] bg-gray-100 z-0"
            aria-hidden="true"
          >
            <div
              className={`h-full bg-linear-to-r from-[#5747E8] via-[#8B5CF6] to-[#06B6D4] transition-all duration-1000 ease-out ${
                isVisible ? 'w-full opacity-80' : 'w-0 opacity-0'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            
            {/* Stage 1: Print Demand */}
            <div className="flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-3">
              <div className="size-11 rounded-full bg-violet-50 border-2 border-[#5747E8]/30 flex items-center justify-center text-[#5747E8] font-bold text-xs shrink-0 shadow-2xs">
                <svg
                  className="size-5 text-[#5747E8]"
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400 block mb-0.5">
                  Input
                </span>
                <h3 className="text-base font-bold text-[#101426]">
                  Print demand
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-xs md:mx-auto">
                  Commercial requirements enter through platforms and business relationships.
                </p>
              </div>
            </div>

            {/* Stage 2: RelayPrint (Center Focal Node) */}
            <div className="flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-3">
              <div className="size-11 rounded-full bg-[#5747E8] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm shadow-indigo-500/25 ring-4 ring-violet-50">
                <svg
                  className="size-5 text-white"
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
                  <line x1="6" x2="6" y1="3" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#5747E8] block mb-0.5">
                  Coordination
                </span>
                <h3 className="text-base font-bold text-[#101426]">
                  RelayPrint
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-xs md:mx-auto">
                  Requirements are reviewed and directed toward suitable production capability.
                </p>
              </div>
            </div>

            {/* Stage 3: Production */}
            <div className="flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-3">
              <div className="size-11 rounded-full bg-cyan-50 border-2 border-[#06B6D4]/40 flex items-center justify-center text-[#06B6D4] font-bold text-xs shrink-0 shadow-2xs">
                <svg
                  className="size-5 text-[#06B6D4]"
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
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M17 18h1" />
                  <path d="M12 18h1" />
                  <path d="M7 18h1" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#06B6D4] block mb-0.5">
                  Output
                </span>
                <h3 className="text-base font-bold text-[#101426]">
                  Production
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-xs md:mx-auto">
                  Independent manufacturing partners fulfil the work.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
