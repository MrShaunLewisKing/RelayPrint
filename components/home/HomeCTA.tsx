import React from 'react';
import Link from 'next/link';

// Preline UI Free Block: Tight Announcement / CTA Card with Subtle Route Continuity Detail
// Category: Marketing → Announcement Banners
// Brand: PrintExchange

export function HomeCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-[64px] sm:py-[72px] bg-white animate-section-reveal" aria-label="Contact Call to Action">
      <div className="relative overflow-hidden max-w-[980px] mx-auto p-[48px] sm:py-[72px] sm:px-[80px] rounded-[24px] bg-[#070B18] text-white text-center shadow-[0_20px_60px_rgba(11,16,32,0.15)] flex flex-col justify-center items-center">
        
        {/* Subtle Violet -> Blue Soft Light behind heading */}
        <div
          aria-hidden="true"
          className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-b from-[#5747E8]/15 to-[#2563EB]/5 blur-[60px] pointer-events-none rounded-full"
        />

        {/* Optional Thin Horizontal Line at low opacity */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        />

        {/* Centered Content */}
        <div className="relative z-10 max-w-md w-full">
          <h2 className="text-[clamp(2.5rem,4vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#FFFFFF]">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-[#A9B1C1]">
            Have something to discuss with PrintExchange?
          </p>
          <div className="mt-10 flex justify-center">
            {/* Final Filled Button */}
            <Link
              href="/contact"
              className="inline-flex justify-center items-center h-[42px] px-[18px] text-[13px] font-semibold rounded-[12px] bg-white text-[#0B1020] hover:bg-gray-50 focus:outline-hidden transition-colors shadow-sm group"
            >
              <span>Contact PrintExchange</span>
              <svg
                className="size-[13px] ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
