'use client';

// Preline UI Free Block: Approved Floating Navbar Shell (Restored Proportions)
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
      className={`sticky z-50 pointer-events-none transition-all duration-250 ease-out ${
        isScrolled ? 'top-2.5' : 'top-4'
      }`}
    >
      <nav
        className={`pointer-events-auto relative mx-auto w-[calc(100vw-24px)] sm:w-[800px] max-w-[calc(100vw-32px)] h-[50px] bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-full pl-4 pr-1.5 flex items-center justify-between transition-all duration-250 ${
          isScrolled ? 'shadow-md shadow-gray-900/5' : 'shadow-sm'
        }`}
      >
        {/* Left Side: Clean Branded PrintExchange Wordmark */}
        <Link
          href="/"
          className="flex items-center shrink-0 focus:outline-hidden focus:opacity-80 py-1"
          aria-label="PrintExchange Home"
        >
          <span className="text-[17px] font-[750] tracking-tight text-[#101426] leading-none">
            Print<span className="bg-linear-to-r from-[#5747E8] to-[#2563EB] bg-clip-text text-transparent">Exchange</span>
          </span>
        </Link>

        {/* Right Side: Restored Approved Contact Us Pill Button */}
        <div className="flex items-center shrink-0">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center h-[34px] sm:h-[36px] px-[13px] sm:px-[17px] text-[12.5px] sm:text-[13px] font-semibold rounded-full bg-[#5747E8] text-white hover:bg-[#4C3DD6] focus:outline-hidden transition-colors shadow-2xs"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
