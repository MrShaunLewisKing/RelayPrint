import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Tight Announcement / CTA Card with Subtle Route Continuity Detail
// Category: Marketing → Announcement Banners
// Brand: PrintExchange

export function HomeCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-18" aria-label="Contact Call to Action">
      <div className="relative overflow-hidden max-w-[980px] mx-auto p-10 sm:p-14 rounded-[24px] bg-linear-to-r from-[#070B18] via-[#140F38] to-[#070B18] text-white text-center shadow-[0_18px_50px_rgba(11,16,32,0.10)] border border-indigo-500/20 animate-cta-gradient flex flex-col justify-center items-center">
        
        {/* Subtle Static 1px Route Continuity Line in Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-[1px] bg-linear-to-r from-transparent via-indigo-400/10 to-transparent pointer-events-none"
        />

        {/* Subtle Edge Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 pointer-events-none w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 pointer-events-none w-80 h-80 bg-[#5747E8]/15 rounded-full blur-3xl"
        />

        {/* Centered Content */}
        <div className="relative z-10 max-w-md">
          <h2 className="section-h2 text-white">
            Let&apos;s talk.
          </h2>
          <p className="mt-3 body-large text-slate-300">
            Have something to discuss with PrintExchange?
          </p>
          <div className="mt-8 flex justify-center">
            {/* 3rd and Final Filled Button on Homepage */}
            <Link
              href="/contact"
              className="h-[40px] px-[18px] inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold rounded-[10px] bg-white text-[#0B1020] hover:bg-gray-100 hover:-translate-y-0.5 focus:outline-hidden transition-all duration-180 shadow-md group"
            >
              <span>Contact PrintExchange</span>
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

      </div>
    </section>
  );
}
