import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Tight Announcement / CTA Card
// Category: Marketing → Announcement Banners
// Source: https://preline.co/blocks/marketing/announcement-banners/#blurred-background-cta-banner
// Adapted for RelayPrint: 3rd and Final Filled Button ("Contact RelayPrint"), concise non-repetitive copy

export function HomeCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20" aria-label="Contact Call to Action">
      <div className="relative overflow-hidden max-w-[1120px] mx-auto p-10 sm:p-14 rounded-[28px] bg-linear-to-r from-[#080D1D] via-[#181146] to-[#080D1D] text-white text-center shadow-xl border border-indigo-500/20 animate-cta-gradient flex flex-col justify-center items-center">
        
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
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Let&apos;s talk print.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have something to discuss with RelayPrint?
          </p>
          <div className="mt-8 flex justify-center">
            {/* 3rd and Final Filled Button on the Homepage */}
            <Link
              href="/contact"
              className="h-11 px-7 inline-flex items-center justify-center gap-x-1.5 text-sm font-semibold rounded-full bg-white text-[#101426] hover:bg-gray-100 hover:-translate-y-[1px] focus:outline-hidden transition-all duration-200 shadow-md group"
            >
              <span>Contact RelayPrint</span>
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
    </section>
  );
}
