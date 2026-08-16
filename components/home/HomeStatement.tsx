import React from 'react';

// Preline UI Free Block & Components
// Source: https://preline.co/blocks/marketing/announcement-banners/#centered-announcement-banner-with-background-illustration
// Adapted for RelayPrint

export function HomeStatement() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 text-center">
        {/* Primary Idea - Large Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.18] max-w-3xl mx-auto">
          Print comes in.{' '}
          <span className="text-[#5747E8]">RelayPrint moves it forward.</span>
        </h2>

        {/* Secondary Layer - Concise Route Capsule */}
        <div className="mt-6 inline-flex items-center gap-x-2 text-xs sm:text-sm font-semibold text-gray-600 bg-gray-50 border border-gray-200/80 rounded-full py-1.5 px-4 sm:px-5">
          <span>Print demand</span>
          <svg
            className="shrink-0 size-3.5 text-[#5747E8]"
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
          <span className="text-[#5747E8] font-bold">RelayPrint</span>
          <svg
            className="shrink-0 size-3.5 text-[#5747E8]"
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
          <span>Production</span>
        </div>
      </div>
    </div>
  );
}
