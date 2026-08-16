'use client';

// Preline UI Free Block: Feature Steps Section (Dark Process Architecture)
// Category: Marketing → Feature Sections
// Source: https://preline.co/blocks/marketing/feature-sections/#feature-steps-section
// Component Primitives: https://preline.co/docs/components/timeline.html
// Brand: PrintExchange

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function HomeProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered sequential activation
          setTimeout(() => setActiveStage(1), 120);
          setTimeout(() => setActiveStage(2), 240);
          setTimeout(() => setActiveStage(3), 360);
          setTimeout(() => setActiveStage(4), 480);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#080D1D] text-white py-20 lg:py-28 border-t border-gray-900 relative overflow-hidden"
      aria-label="The Exchange Process"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (approx 38% / 5 cols) - Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs tracking-widest font-semibold uppercase text-violet-400 block mb-3">
              THE EXCHANGE PROCESS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
              From requirement
              <span className="block text-slate-200">to production.</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-sm">
              A job enters PrintExchange, its requirements are assessed and an
              appropriate production route is coordinated.
            </p>
          </div>
          {/* End Left Column */}

          {/* Right Column (approx 62% / 7 cols) - 4 Vertical Steps with Presence */}
          <div className="lg:col-span-7 space-y-0">
            
            {/* Step 01: Receive */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-12 after:bottom-0 after:start-5 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-10 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-10 border-2 font-mono font-bold text-sm rounded-full transition-all duration-300 ${
                      activeStage >= 1
                        ? 'border-violet-400 bg-[#141B33] text-violet-300'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    01
                  </span>
                </div>
              </div>
              <div className="grow pt-1.5 pb-12">
                <h3
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    activeStage >= 1 ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  Receive
                </h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed max-w-lg">
                  Commercial print requirements enter through platform and business channels.
                </p>
              </div>
            </div>

            {/* Step 02: Assess */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-12 after:bottom-0 after:start-5 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-10 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-10 border-2 font-mono font-bold text-sm rounded-full transition-all duration-300 ${
                      activeStage >= 2
                        ? 'border-indigo-400 bg-[#141B33] text-indigo-300'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    02
                  </span>
                </div>
              </div>
              <div className="grow pt-1.5 pb-12">
                <h3
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    activeStage >= 2 ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  Assess
                </h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed max-w-lg">
                  Format, quantity, finishing and production needs are reviewed.
                </p>
              </div>
            </div>

            {/* Step 03: Route (VISUAL FOCAL POINT - Violet & Cyan Treatment) */}
            <div className="flex gap-x-6">
              <div className="relative after:absolute after:top-12 after:bottom-0 after:start-5 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-10 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-10 border-2 font-mono font-extrabold text-sm rounded-full transition-all duration-300 ${
                      activeStage >= 3
                        ? 'border-[#06B6D4] bg-[#06B6D4] text-[#080D1D] shadow-md shadow-cyan-500/40 scale-110'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    03
                  </span>
                </div>
              </div>
              <div className="grow pt-1.5 pb-12">
                <div
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-400 ${
                    activeStage >= 3
                      ? 'bg-linear-to-r from-violet-950/50 via-indigo-950/40 to-cyan-950/50 border-cyan-500/40'
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-cyan-300">
                    Route
                  </h3>
                  <p className="mt-2 text-base text-slate-200 leading-relaxed">
                    Suitable external production capability is identified.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 04: Coordinate */}
            <div className="flex gap-x-6">
              <div className="relative">
                <div className="relative z-10 size-10 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-10 border-2 font-mono font-bold text-sm rounded-full transition-all duration-300 ${
                      activeStage >= 4
                        ? 'border-slate-400 bg-[#1E293B] text-white'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    04
                  </span>
                </div>
              </div>
              <div className="grow pt-1.5 pb-4">
                <h3
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    activeStage >= 4 ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  Coordinate
                </h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed max-w-lg">
                  The requirement moves into the agreed production workflow.
                </p>
              </div>
            </div>

            {/* Text Link at bottom */}
            <div className="pt-8 ps-16">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 focus:outline-hidden transition-colors group"
              >
                <span>Full process details</span>
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
          {/* End Right Column */}

        </div>
      </div>
    </section>
  );
}
