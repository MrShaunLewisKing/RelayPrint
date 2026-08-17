import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Vertical Feature Steps with Connected Route & Node System
// Category: Marketing → Feature Sections
// Brand: PrintExchange (HOW IT WORKS)

export function HomeProcess() {
  return (
    <section
      className="bg-[#070B18] text-white py-[64px] sm:py-[112px] relative overflow-hidden animate-section-reveal"
      aria-label="How It Works"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:gap-[6%] items-start">
          
          {/* Left Column (approx 38%) - Sticky on Desktop */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-[112px] relative mb-16 lg:mb-0">
            {/* Subtle decorative motif behind left column */}
            <div className="absolute -left-8 -top-8 text-[200px] font-black text-[#5747E8]/5 leading-none pointer-events-none select-none" aria-hidden="true">
              03
            </div>
            
            <div className="relative z-10">
              <span className="text-[0.6875rem] font-bold text-[#7C5CFF] tracking-[0.10em] uppercase block mb-4">
                HOW IT WORKS
              </span>
              <h2 className="text-[clamp(2.5rem,4vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#FFFFFF]">
                From requirement
                <span className="block text-[#FFFFFF]">to production.</span>
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.65] text-[#8E98AA] max-w-sm">
                PrintExchange reviews each requirement and coordinates an appropriate route into production.
              </p>
            </div>
          </div>
          {/* End Left Column */}

          {/* Right Column (approx 62%) - 4 Vertical Steps */}
          <div className="w-full lg:w-[62%] relative">
            
            {/* Background 1px vertical line (#293044) */}
            <div className="absolute top-[12px] bottom-[32px] left-[3px] w-[1px] bg-[#293044] z-0" aria-hidden="true" />
            
            {/* Active filled line (violet -> cyan) - animate once */}
            <div className="absolute top-[12px] bottom-[32px] left-[3px] w-[1px] bg-linear-to-b from-[#7C5CFF] to-[#06B6D4] z-0 origin-top animate-route-fill" aria-hidden="true" />

            <div className="space-y-[48px] sm:space-y-[56px] relative z-10">
              {/* Step 01: Receive */}
              <div className="flex gap-x-8 opacity-0 animate-step-reveal [animation-delay:120ms] [animation-fill-mode:forwards]">
                <div className="relative mt-[6px]">
                  <span className="block size-2 rounded-full bg-[#293044]" />
                </div>
                <div className="grow">
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#697386] block mb-2">
                    01
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-[650] text-[#F8FAFC] leading-tight">
                    Receive
                  </h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[#A9B1C1] max-w-lg">
                    Commercial print requirements enter through platform or business channels.
                  </p>
                </div>
              </div>

              {/* Step 02: Assess */}
              <div className="flex gap-x-8 opacity-0 animate-step-reveal [animation-delay:280ms] [animation-fill-mode:forwards]">
                <div className="relative mt-[6px]">
                  <span className="block size-2 rounded-full bg-[#293044]" />
                </div>
                <div className="grow">
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#697386] block mb-2">
                    02
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-[650] text-[#F8FAFC] leading-tight">
                    Assess
                  </h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[#A9B1C1] max-w-lg">
                    Format, quantity and production requirements are reviewed.
                  </p>
                </div>
              </div>

              {/* Step 03: Route */}
              <div className="flex gap-x-8 opacity-0 animate-step-reveal [animation-delay:440ms] [animation-fill-mode:forwards]">
                <div className="relative mt-[6px]">
                  <span className="block size-2 rounded-full bg-[#7C5CFF] shadow-[0_0_12px_rgba(124,92,255,0.6)]" />
                </div>
                <div className="grow border-l-2 border-[#7C5CFF] pl-6 -ml-[33px] bg-linear-to-r from-[#7C5CFF]/[0.03] to-transparent py-1 pr-4 rounded-r-2xl">
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#7C5CFF] block mb-2">
                    03
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-[650] text-white leading-tight">
                    Route
                  </h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[#A9B1C1] max-w-lg">
                    Suitable external production capability is identified.
                  </p>
                </div>
              </div>

              {/* Step 04: Coordinate */}
              <div className="flex gap-x-8 opacity-0 animate-step-reveal [animation-delay:600ms] [animation-fill-mode:forwards]">
                <div className="relative mt-[6px]">
                  <span className="block size-2 rounded-full bg-[#293044]" />
                </div>
                <div className="grow pb-4">
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#697386] block mb-2">
                    04
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-[650] text-[#F8FAFC] leading-tight">
                    Coordinate
                  </h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[#A9B1C1] max-w-lg">
                    The agreed production route moves forward.
                  </p>
                </div>
              </div>
            </div>

          </div>
          {/* End Right Column */}

        </div>
      </div>
    </section>
  );
}
