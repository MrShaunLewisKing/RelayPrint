import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Tight Announcement / CTA Card
// Category: Marketing → Announcement Banners
// Brand: PrintExchange

export function HomeCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20" aria-label="Contact Call to Action">
      <div className="relative overflow-hidden max-w-[1120px] mx-auto p-10 sm:p-14 rounded-[24px] bg-linear-to-r from-[#070B18] via-[#150F3B] to-[#070B18] text-white text-center shadow-xl border border-indigo-500/20 animate-cta-gradient flex flex-col justify-center items-center">
        
        {/* Subtle Edge Glow Effect */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 pointer-events-none w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 pointer-events-none w-80 h-80 bg-[#5747E8]/20 rounded-full blur-3xl"
        />

        {/* Centered Content */}
        <div className="relative z-10 max-w-md">
          <h2 className="section-h2 text-white">
            Let&apos;s talk print.
          </h2>
          <p className="mt-3 body-large text-slate-300">
            Have something to discuss?
          </p>
          <div className="mt-8 flex justify-center">
            {/* 3rd and Final Filled Button on Homepage */}
            <Link
              href="/contact"
              className="h-[40px] px-[18px] inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold rounded-[10px] bg-white text-[#0B1020] hover:bg-gray-100 hover:-translate-y-[1px] focus:outline-hidden transition-all duration-200 shadow-md group"
            >
              <span>Contact PrintExchange</span>
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
    </section>
  );
}
