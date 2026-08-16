'use client';

// Preline UI Free Block: Compact Floating Brand Header
// Category: Marketing → Floating Headers
// Brand: PrintExchange

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 pointer-events-none transition-all duration-250 ease-out px-3 sm:px-6 ${
        isScrolled ? 'top-2.5' : 'top-4'
      }`}
    >
      <nav
        className={`pointer-events-auto relative w-full min-w-[300px] sm:min-w-[440px] sm:max-w-[500px] mx-auto bg-white/95 backdrop-blur-md border border-[#E7E9F0] rounded-full p-1.5 ps-4 sm:ps-5 flex items-center justify-between gap-x-4 transition-all duration-250 ${
          isScrolled ? 'shadow-md shadow-gray-900/5' : 'shadow-xs'
        }`}
      >
        {/* Left Side: Clean Text-Only PrintExchange Wordmark */}
        <Link
          href="/"
          className="flex items-center shrink-0 focus:outline-hidden focus:opacity-80 py-1"
          aria-label="PrintExchange Home"
        >
          <span className="text-[17px] font-[750] tracking-[-0.03em] text-[#0B1020] leading-none">
            Print<span className="bg-linear-to-r from-[#5747E8] to-[#2563EB] bg-clip-text text-transparent">Exchange</span>
          </span>
        </Link>

        {/* Right Side: Exact Clean Contact Us Button */}
        <div className="flex items-center shrink-0">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center h-[36px] px-[15px] text-[13px] font-semibold rounded-[10px] bg-[#5747E8] text-white hover:bg-[#4C3DD6] focus:outline-hidden transition-colors shadow-2xs"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
