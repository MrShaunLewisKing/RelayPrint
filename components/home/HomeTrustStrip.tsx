import React from 'react';

// Preline UI Free Block & Components
// Source: https://preline.co/blocks/marketing/icon-blocks/#compact-center-aligned-icon-features
// Component Primitives: https://preline.co/docs/components/divider.html
// Adapted for RelayPrint

export function HomeTrustStrip() {
  const pillars = [
    {
      title: 'Commercial Print',
      subtitle: 'Platforms & volume buyers',
      icon: (
        <svg
          className="size-4 text-gray-600"
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
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      )
    },
    {
      title: 'Production Routing',
      subtitle: 'Matched by format & press fit',
      icon: (
        <svg
          className="size-4 text-gray-600"
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
          <circle cx="6" cy="19" r="3" />
          <path d="M9 19h8.5a4.5 4.5 0 0 0 0-9H15" />
          <polyline points="18 13 15 10 18 7" />
          <circle cx="6" cy="5" r="3" />
          <path d="M6 8v8" />
        </svg>
      )
    },
    {
      title: 'Manufacturing Partners',
      subtitle: 'Specialist production facilities',
      icon: (
        <svg
          className="size-4 text-gray-600"
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
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        </svg>
      )
    },
    {
      title: 'B2B Coordination',
      subtitle: 'End-to-end schedule oversight',
      icon: (
        <svg
          className="size-4 text-gray-600"
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
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#FAFAFC] border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-200/80">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-x-2.5 px-2 lg:px-6 py-1"
            >
              <div className="size-7 rounded-lg bg-white border border-gray-200/70 flex items-center justify-center shrink-0 shadow-2xs">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-gray-800 truncate">
                  {item.title}
                </div>
                <div className="text-[11px] text-gray-500 truncate">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
