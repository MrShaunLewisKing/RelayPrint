'use client';

// Preline UI Free Block: Minimal Floating Navbar
// Category: Marketing → Floating Headers
// Source: https://preline.co/blocks/marketing/website-headers/#left-aligned-website-header-with-dropdown-nav
// Component Primitives: https://preline.co/docs/components/buttons.html, https://preline.co/docs/components/collapse.html
// Brand: PrintExchange

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';

export function HomeHeader() {
  const pathname = usePathname();
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

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/partner-network', label: 'Partner Network' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header
      className={`sticky z-50 pointer-events-none transition-all duration-250 ease-out px-3 sm:px-6 ${
        isScrolled ? 'top-2.5' : 'top-4'
      }`}
    >
      <nav
        className={`pointer-events-auto relative w-full sm:w-fit mx-auto bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-full p-1.5 ps-4 flex items-center justify-between gap-x-3 sm:gap-x-6 transition-all duration-250 ${
          isScrolled ? 'shadow-md shadow-gray-900/5' : 'shadow-sm'
        }`}
      >
        {/* Left Side: Brand Logo on One Line */}
        <Link
          href="/"
          className="flex items-center gap-1.5 shrink-0 focus:outline-hidden focus:opacity-80 py-1"
          aria-label="PrintExchange Home"
        >
          <span className="text-[15px] font-black tracking-tight text-[#101426] leading-none">
            Print<span className="text-[#5747E8]">Exchange</span>
          </span>
          <PrintRegistrationMarks />
        </Link>

        {/* Center: Tight Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-x-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1.5 px-3 text-[13px] font-medium transition-colors rounded-full focus:outline-hidden ${
                  isActive
                    ? 'text-[#5747E8] font-semibold bg-violet-50/90'
                    : 'text-gray-600 hover:text-[#5747E8] hover:bg-violet-50/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Exact Preline "Book a call" styled button */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="hidden md:inline-flex justify-center items-center py-2 px-4 text-sm font-medium rounded-full bg-[#5747E8] text-white hover:bg-[#4338ca] focus:outline-hidden transition-colors shadow-2xs"
          >
            Contact Us
          </Link>

          {/* Preline Mobile Collapse Toggle */}
          <button
            type="button"
            className="hs-collapse-toggle md:hidden relative size-8 flex justify-center items-center font-medium text-xs rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden"
            id="hs-minimal-navbar-collapse"
            aria-expanded="false"
            aria-controls="hs-minimal-navbar-drawer"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-minimal-navbar-drawer"
          >
            <svg
              className="hs-collapse-open:hidden size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block shrink-0 hidden size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </nav>

      {/* Preline Mobile Collapse Drawer */}
      <div
        id="hs-minimal-navbar-drawer"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 md:hidden pointer-events-auto max-w-[400px] mx-auto mt-2 bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-md rounded-2xl p-4"
        role="region"
        aria-labelledby="hs-minimal-navbar-collapse"
      >
        <div className="flex flex-col gap-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#5747E8] font-semibold bg-violet-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-gray-100">
            <Link
              href="/contact"
              className="w-full py-2 px-4 flex justify-center items-center text-sm font-medium rounded-full bg-[#5747E8] text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
