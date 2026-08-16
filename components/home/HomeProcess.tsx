'use client';

// Preline UI Free Block: Feature Steps Section (Enriched Dark Theme)
// Category: Marketing → Feature Sections
// Source: https://preline.co/blocks/marketing/feature-sections/#feature-steps-section
// Component Primitives: https://preline.co/docs/components/timeline.html
// Adapted for RelayPrint: 35% / 65% split, ROUTE highlighted as visual focal point, no filled button

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function HomeProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered sequential activation (140ms per step)
          setTimeout(() => setActiveStage(1), 140);
          setTimeout(() => setActiveStage(2), 280);
          setTimeout(() => setActiveStage(3), 420);
          setTimeout(() => setActiveStage(4), 560);
        }
      },
      { threshold: 0.2 }
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
      aria-label="How RelayPrint Works"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (35% / approx 4-5 cols) - Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs tracking-widest font-semibold uppercase text-violet-400 block mb-3">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
              One requirement.
              <span className="block text-slate-200">Four stages.</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-sm">
              RelayPrint reviews the requirement and coordinates its route into
              suitable production.
            </p>
          </div>
          {/* End Left Column */}

          {/* Right Column (65% / approx 8 cols) - Differentiated Vertical Step Sequence */}
          <div className="lg:col-span-8 lg:ps-4 space-y-0">
            
            {/* Step 01: Receive */}
            <div className="flex gap-x-5">
              <div className="relative after:absolute after:top-10 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-8 border-2 font-bold text-xs rounded-full transition-all duration-300 ${
                      activeStage >= 1
                        ? 'border-violet-400/80 bg-[#141B33] text-violet-300 scale-105'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    01
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-10">
                <h3
                  className={`text-xl font-bold transition-colors duration-300 ${
                    activeStage >= 1 ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  Receive
                </h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed max-w-lg">
                  Print requirements enter through platforms and commercial relationships.
                </p>
              </div>
            </div>

            {/* Step 02: Assess (Brighter route marker) */}
            <div className="flex gap-x-5">
              <div className="relative after:absolute after:top-10 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-8 border-2 font-bold text-xs rounded-full transition-all duration-300 ${
                      activeStage >= 2
                        ? 'border-[#5747E8] bg-[#5747E8] text-white shadow-xs shadow-indigo-500/40 scale-105'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    02
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-10">
                <h3
                  className={`text-xl font-bold transition-colors duration-300 ${
                    activeStage >= 2 ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  Assess
                </h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed max-w-lg">
                  Production specifications, timelines and volumes are analyzed.
                </p>
              </div>
            </div>

            {/* Step 03: Route (VISUAL FOCAL POINT - Subtle Accent Highlight) */}
            <div className="flex gap-x-5">
              <div className="relative after:absolute after:top-10 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s-2 after:border-gray-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-8 border-2 font-bold text-xs rounded-full transition-all duration-300 ${
                      activeStage >= 3
                        ? 'border-[#06B6D4] bg-[#06B6D4] text-[#080D1D] shadow-sm shadow-cyan-500/50 scale-110 font-extrabold'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    03
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-10">
                {/* Visual Focal Point Surface */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-400 ${
                    activeStage >= 3
                      ? 'bg-linear-to-r from-violet-950/40 via-indigo-950/30 to-cyan-950/40 border-cyan-500/40 shadow-inner'
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-cyan-300">
                      Route
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">
                      Core Action
                    </span>
                  </div>
                  <p className="mt-2 text-base text-slate-200 leading-relaxed">
                    Work is directed to verified independent manufacturing partners based on equipment capability and capacity.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 04: Coordinate (Return to clean neutral styling) */}
            <div className="flex gap-x-5">
              <div className="relative">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span
                    className={`flex shrink-0 justify-center items-center size-8 border-2 font-bold text-xs rounded-full transition-all duration-300 ${
                      activeStage >= 4
                        ? 'border-slate-400 bg-[#1E293B] text-white scale-105'
                        : 'border-gray-800 bg-[#0F172A] text-gray-500'
                    }`}
                  >
                    04
                  </span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-4">
                <h3
                  className={`text-xl font-bold transition-colors duration-300 ${
                    activeStage >= 4 ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  Coordinate
                </h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed max-w-lg">
                  RelayPrint oversees milestones and ensures direct routing continuity through delivery.
                </p>
              </div>
            </div>

            {/* Small text link at the very bottom of the step sequence */}
            <div className="pt-6 ps-13">
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
