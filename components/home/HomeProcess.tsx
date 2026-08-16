import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Feature Steps Section (Static Dark Process Architecture)
// Category: Marketing → Feature Sections
// Brand: PrintExchange (HOW IT WORKS)

export function HomeProcess() {
  return (
    <section
      className="bg-[#070B18] text-white py-28 border-t border-gray-900 relative overflow-hidden"
      aria-label="How It Works"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (approx 38% / 5 cols) - Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="section-label text-violet-400 block mb-4">
              HOW IT WORKS
            </span>
            <h2 className="section-h2 text-white">
              From requirement
              <span className="block text-slate-200">to production.</span>
            </h2>
            <p className="mt-4 body-large text-slate-300 max-w-sm">
              PrintExchange reviews each requirement and coordinates an appropriate route into production.
            </p>
          </div>
          {/* End Left Column */}

          {/* Right Column (approx 62% / 7 cols) - 4 Vertical Steps */}
          <div className="lg:col-span-7 space-y-0">
            
            {/* Step 01: Receive */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-10 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-gray-700 font-bold text-xs rounded-full bg-[#0F172A] text-slate-300">
                    01
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-10">
                <h3 className="feature-h3 text-white">
                  Receive
                </h3>
                <p className="mt-2 body-normal text-slate-300 max-w-lg">
                  Commercial print requirements enter through platform or business channels.
                </p>
              </div>
            </div>

            {/* Step 02: Assess */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-10 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-gray-700 font-bold text-xs rounded-full bg-[#0F172A] text-slate-300">
                    02
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-10">
                <h3 className="feature-h3 text-white">
                  Assess
                </h3>
                <p className="mt-2 body-normal text-slate-300 max-w-lg">
                  Format, quantity and production requirements are reviewed.
                </p>
              </div>
            </div>

            {/* Step 03: Route (VISUALLY STRONGEST - Brighter Violet Number & 2px Left Accent) */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-10 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 font-bold text-xs rounded-full bg-[#5747E8] text-white shadow-xs shadow-indigo-500/50">
                    03
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-10 ps-4 border-s-2 border-[#5747E8]/60">
                <h3 className="text-[1.35rem] font-bold text-white tracking-tight">
                  Route
                </h3>
                <p className="mt-2 body-normal text-slate-200 max-w-lg">
                  Suitable external production capability is identified.
                </p>
              </div>
            </div>

            {/* Step 04: Coordinate */}
            <div className="flex gap-x-6">
              <div className="relative">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-gray-700 font-bold text-xs rounded-full bg-[#0F172A] text-slate-300">
                    04
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-4">
                <h3 className="feature-h3 text-white">
                  Coordinate
                </h3>
                <p className="mt-2 body-normal text-slate-300 max-w-lg">
                  The agreed production route moves forward.
                </p>
              </div>
            </div>

            {/* Bottom Action: Exactly ONE text link */}
            <div className="pt-8 ps-14">
              <Link
                href="/how-it-works"
                className="action-text-link !text-violet-400 hover:!text-violet-300 group"
              >
                <span>Full process details</span>
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
          {/* End Right Column */}

        </div>
      </div>
    </section>
  );
}
