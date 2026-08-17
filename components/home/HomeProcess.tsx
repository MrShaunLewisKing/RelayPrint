import React from 'react';
import { PrintExchangeBackground } from '../shared/PrintExchangeBackground';

// Preline UI Free Block: Vertical Progress / Timeline
// Category: Marketing → Process Sections
// Brand: PrintExchange

export function HomeProcess() {
  return (
    <section
      className="bg-[#070B18] text-white py-[64px] sm:py-[82px] relative overflow-hidden animate-section-reveal"
      aria-label="How It Works"
    >
      {/* Top Transition Border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-linear-to-r from-transparent via-[#5747E8] to-[#2563EB] opacity-35" aria-hidden="true" />

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <PrintExchangeBackground variant="dark" className="opacity-[0.035]" />
      </div>

      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[72px] items-start">
          
          {/* Left Column */}
          <div className="w-full mb-[30px] lg:mb-0">
            <span className="text-[11px] font-[700] text-[#8B7BFF] tracking-[0.10em] uppercase block mb-3">
              HOW IT WORKS
            </span>
            <h2 className="text-[clamp(42px,4vw,56px)] font-[700] leading-[1.02] tracking-[-0.035em] text-[#FFFFFF]">
              From requirement
              <span className="block text-[#FFFFFF]">to production.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.6] text-[#AAB2C2] max-w-sm">
              PrintExchange reviews each requirement and coordinates an appropriate route into production.
            </p>
          </div>
          {/* End Left Column */}

          {/* Right Column - Stacked Step List */}
          <div className="w-full flex flex-col">
            
            {/* Step 01 */}
            <div className="grid grid-cols-[42px_1fr] sm:grid-cols-[56px_1fr] min-h-[88px] py-[18px] border-b border-white/[0.075] opacity-0 animate-step-reveal [animation-delay:0ms] [animation-fill-mode:forwards]">
              <div className="text-[28px] font-[650] text-white/20">01</div>
              <div className="max-w-[520px]">
                <h3 className="text-[20px] font-[650] text-white leading-[1.2]">Receive</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#AAB2C2]">
                  Commercial print requirements enter through platform or business channels.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="grid grid-cols-[42px_1fr] sm:grid-cols-[56px_1fr] min-h-[88px] py-[18px] border-b border-white/[0.075] opacity-0 animate-step-reveal [animation-delay:80ms] [animation-fill-mode:forwards]">
              <div className="text-[28px] font-[650] text-white/20">02</div>
              <div className="max-w-[520px]">
                <h3 className="text-[20px] font-[650] text-white leading-[1.2]">Assess</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#AAB2C2]">
                  Format, quantity and production requirements are reviewed.
                </p>
              </div>
            </div>

            {/* Step 03 - Focal Row */}
            <div className="grid grid-cols-[42px_1fr] sm:grid-cols-[56px_1fr] min-h-[88px] py-[18px] border-b border-white/[0.075] opacity-0 animate-step-reveal [animation-delay:160ms] [animation-fill-mode:forwards]">
              <div className="text-[28px] font-[650] text-[#7C5CFF]">03</div>
              <div className="max-w-[520px] border-l-2 border-[#5747E8] pl-[18px] bg-linear-to-r from-[#5747E8]/[0.09] to-transparent bg-[length:65%_100%] bg-no-repeat">
                <h3 className="text-[20px] font-[650] text-white leading-[1.2]">Route</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#AAB2C2]">
                  Suitable external production capability is identified.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="grid grid-cols-[42px_1fr] sm:grid-cols-[56px_1fr] min-h-[88px] py-[18px] opacity-0 animate-step-reveal [animation-delay:240ms] [animation-fill-mode:forwards]">
              <div className="text-[28px] font-[650] text-white/20">04</div>
              <div className="max-w-[520px]">
                <h3 className="text-[20px] font-[650] text-white leading-[1.2]">Coordinate</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#AAB2C2]">
                  The agreed production route moves forward.
                </p>
              </div>
            </div>

          </div>
          {/* End Right Column */}

        </div>
      </div>
    </section>
  );
}
