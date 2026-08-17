import React from 'react';
import Link from 'next/link';
import { PrintExchangeBackground } from '../shared/PrintExchangeBackground';

// Preline UI Free Block: Tight Announcement / CTA Card with Subtle Route Continuity Detail
// Category: Marketing → Announcement Banners
// Brand: PrintExchange

export function HomeCTA() {
  return (
    <section className="bg-transparent flex justify-center px-4 sm:px-0 pt-[52px]" aria-label="Contact Call to Action">
      <div className="relative overflow-hidden w-[calc(100%-32px)] sm:w-[980px] h-auto sm:h-[220px] mx-auto p-[48px_24px] sm:p-0 rounded-[24px] bg-[#070B18] text-white text-center shadow-[0_18px_48px_rgba(11,16,32,0.11)] flex flex-col justify-center items-center z-10 -mb-[36px] sm:-mb-[48px]">
        
        {/* Subtle Brand Gradient Top Edge */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-linear-to-r from-transparent via-[#5747E8]/30 to-[#06B6D4]/30 opacity-80" aria-hidden="true" />

        {/* Pattern & Illumination Integration */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <PrintExchangeBackground variant="cta" className="opacity-[0.025]" />
          
          {/* Subtle violet light left-centre */}
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#5747E8] opacity-[0.04] blur-[80px] rounded-full -translate-y-1/2 -translate-x-1/3" />
          
          {/* Subtle blue light right-centre */}
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#2563EB] opacity-[0.04] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-md w-full">
          <h2 className="text-[42px] font-[700] leading-[1.02] tracking-[-0.035em] text-[#FFFFFF]">
            Let&apos;s talk.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#AAB2C2]">
            Have something to discuss with PrintExchange?
          </p>
          <div className="mt-6 flex justify-center">
            {/* Final Filled Button */}
            <Link
              href="/contact"
              className="inline-flex justify-center items-center h-[42px] px-[18px] text-[13px] font-semibold rounded-[11px] bg-white text-[#0B1020] hover:bg-gray-50 focus:outline-hidden transition-colors shadow-sm"
            >
              Contact PrintExchange
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
