import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Vertical Feature Steps with Connected Route & Node System
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

          {/* Right Column (approx 62% / 7 cols) - 4 Vertical Steps with Shared Route & Node Primitives */}
          <div className="lg:col-span-7 space-y-0">
            
            {/* Step 01: Receive */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-8 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-[#23283A]">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <span className="size-2 rounded-full bg-slate-600 border border-slate-700" />
                </div>
              </div>
              <div className="grow pt-0 pb-10">
                <span className="text-[12px] font-bold text-slate-400 tracking-wider block mb-1">
                  01
                </span>
                <h3 className="text-[19px] font-[650] text-white tracking-tight leading-snug">
                  Receive
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-300 max-w-lg">
                  Commercial print requirements enter through platform or business channels.
                </p>
              </div>
            </div>

            {/* Step 02: Assess */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-8 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-[#23283A]">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <span className="size-2 rounded-full bg-slate-600 border border-slate-700" />
                </div>
              </div>
              <div className="grow pt-0 pb-10">
                <span className="text-[12px] font-bold text-slate-400 tracking-wider block mb-1">
                  02
                </span>
                <h3 className="text-[19px] font-[650] text-white tracking-tight leading-snug">
                  Assess
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-300 max-w-lg">
                  Format, quantity and production requirements are reviewed.
                </p>
              </div>
            </div>

            {/* Step 03: Route (Visual Focal Point with Active Node & Violet Accent) */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-8 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-[#23283A]">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <span className="size-2.5 rounded-full bg-[#5747E8] shadow-xs shadow-indigo-500/60 ring-2 ring-violet-950" />
                </div>
              </div>
              <div className="grow pt-0 pb-10 ps-4 border-s-2 border-[#5747E8]/70">
                <span className="text-[12px] font-bold text-violet-400 tracking-wider block mb-1">
                  03
                </span>
                <h3 className="text-[20px] font-bold text-white tracking-tight leading-snug">
                  Route
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-200 max-w-lg">
                  Suitable external production capability is identified.
                </p>
              </div>
            </div>

            {/* Step 04: Coordinate */}
            <div className="flex gap-x-6">
              <div className="relative">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <span className="size-2 rounded-full bg-slate-600 border border-slate-700" />
                </div>
              </div>
              <div className="grow pt-0 pb-4">
                <span className="text-[12px] font-bold text-slate-400 tracking-wider block mb-1">
                  04
                </span>
                <h3 className="text-[19px] font-[650] text-white tracking-tight leading-snug">
                  Coordinate
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-300 max-w-lg">
                  The agreed production route moves forward.
                </p>
              </div>
            </div>

            {/* Bottom Action: Exactly ONE text link */}
            <div className="pt-8 ps-13">
              <Link
                href="/how-it-works"
                className="action-text-link !text-violet-400 hover:!text-violet-300 group"
              >
                <span>Full process details</span>
                <svg
                  className="size-[13px] transition-transform duration-180 group-hover:translate-x-0.5"
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

      {/* Subtle Centered Line Transition Segment at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none" aria-hidden="true">
        <div className="w-[1px] h-8 bg-linear-to-b from-transparent via-[#23283A] to-transparent" />
        <div className="size-1.5 rounded-full bg-gray-700/60 -mt-0.5" />
      </div>
    </section>
  );
}
