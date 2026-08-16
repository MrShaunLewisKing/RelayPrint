'use client';

import React, { useState } from 'react';
import { Layers, ArrowRight, Server, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function RoutingNetwork() {
  const [activeRoute, setActiveRoute] = useState<number | null>(null);

  const demandSources = [
    { id: 'platforms', label: 'Print Platforms', sub: 'Integrated order payloads' },
    { id: 'brokers', label: 'Print Brokers', sub: 'Complex specification flows' },
    { id: 'commercial', label: 'Commercial Clients', sub: 'Corporate print procurement' },
    { id: 'workflows', label: 'Business Workflows', sub: 'Automated document runs' }
  ];

  const productionRoutes = [
    { id: 'digital', label: 'Digital Production', sub: 'Fast turnaround, short batches' },
    { id: 'litho', label: 'High-Volume Production', sub: 'Sheetfed & web capacity' },
    { id: 'finishing', label: 'Specialist Finishing', sub: 'Lamination, stitching, folding' },
    { id: 'alternative', label: 'Alternative Production Route', sub: 'Regional or overflow match' }
  ];

  return (
    <div className="w-full bg-surface rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
        <div>
          <span className="text-2xs font-semibold uppercase tracking-wider text-brand">
            Operational Architecture
          </span>
          <h3 className="text-xl font-bold text-foreground mt-1">
            Print Demand & Production Coordination Flow
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span>Distributed Coordination Model</span>
        </div>
      </div>

      {/* Desktop / Tablet SVG Network View (Hidden on very small mobile, visible sm+) */}
      <div className="hidden sm:block mt-8 relative">
        <svg
          viewBox="0 0 900 360"
          className="w-full h-auto"
          aria-label="RelayPrint routing diagram showing demand sources connecting through RelayPrint to manufacturing routes"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Left-to-Center Connecting Curves */}
          {[45, 125, 205, 285].map((y, idx) => (
            <path
              key={`in-${idx}`}
              d={`M 220 ${y + 20} C 330 ${y + 20}, 330 180, 410 180`}
              fill="none"
              stroke={activeRoute === idx ? 'url(#activeGrad)' : 'url(#lineGrad)'}
              strokeWidth={activeRoute === idx ? '3' : '1.5'}
              strokeDasharray={activeRoute === idx ? '6 4' : 'none'}
              className="transition-all duration-300"
            />
          ))}

          {/* Center-to-Right Connecting Curves */}
          {[45, 125, 205, 285].map((y, idx) => (
            <path
              key={`out-${idx}`}
              d={`M 490 180 C 570 180, 570 ${y + 20}, 680 ${y + 20}`}
              fill="none"
              stroke={activeRoute === idx ? 'url(#activeGrad)' : 'url(#lineGrad)'}
              strokeWidth={activeRoute === idx ? '3' : '1.5'}
              strokeDasharray={activeRoute === idx ? '6 4' : 'none'}
              className="transition-all duration-300"
            />
          ))}

          {/* Central RelayPrint Node */}
          <g transform="translate(410, 120)">
            <rect
              width="80"
              height="120"
              rx="12"
              fill="#0F172A"
              stroke="#4F46E5"
              strokeWidth="2"
              className="shadow-md"
            />
            <circle cx="40" cy="40" r="16" fill="#4F46E5" fillOpacity="0.2" />
            <circle cx="40" cy="40" r="8" fill="#4F46E5" />
            <text
              x="40"
              y="74"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="700"
              letterSpacing="0.5"
            >
              RelayPrint
            </text>
            <text
              x="40"
              y="90"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="8"
              fontWeight="500"
            >
              Routing &
            </text>
            <text
              x="40"
              y="102"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="8"
              fontWeight="500"
            >
              Coordination
            </text>
          </g>
        </svg>

        {/* HTML Overlay Boxes for Crisp Text & Hover Interactivity */}
        <div className="absolute inset-0 flex justify-between pointer-events-none">
          {/* Left Column: Demand Sources */}
          <div className="w-[230px] flex flex-col justify-between py-1 pointer-events-auto">
            {demandSources.map((item, idx) => (
              <button
                type="button"
                key={item.id}
                onMouseEnter={() => setActiveRoute(idx)}
                onMouseLeave={() => setActiveRoute(null)}
                onFocus={() => setActiveRoute(idx)}
                onBlur={() => setActiveRoute(null)}
                className={cn(
                  'w-full text-left p-3 rounded-lg border transition-all duration-200 bg-white',
                  activeRoute === idx
                    ? 'border-brand shadow-sm translate-x-1'
                    : 'border-slate-200 hover:border-slate-300'
                )}
              >
                <div className="text-xs font-semibold text-slate-900 flex items-center justify-between">
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="text-2xs text-slate-500 mt-0.5">{item.sub}</div>
              </button>
            ))}
          </div>

          {/* Right Column: Production Routes */}
          <div className="w-[230px] flex flex-col justify-between py-1 pointer-events-auto">
            {productionRoutes.map((item, idx) => (
              <button
                type="button"
                key={item.id}
                onMouseEnter={() => setActiveRoute(idx)}
                onMouseLeave={() => setActiveRoute(null)}
                onFocus={() => setActiveRoute(idx)}
                onBlur={() => setActiveRoute(null)}
                className={cn(
                  'w-full text-left p-3 rounded-lg border transition-all duration-200 bg-white',
                  activeRoute === idx
                    ? 'border-brand shadow-sm -translate-x-1'
                    : 'border-slate-200 hover:border-slate-300'
                )}
              >
                <div className="text-xs font-semibold text-slate-900 flex items-center justify-between">
                  <span>{item.label}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-2xs text-slate-500 mt-0.5">{item.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Reflow View (Stacked vertical architecture for narrow screens) */}
      <div className="block sm:hidden mt-6 space-y-4">
        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-2xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            1. Inbound Demand Sources
          </span>
          <div className="space-y-1.5">
            {demandSources.map((item) => (
              <div key={item.id} className="text-xs bg-white p-2.5 rounded border border-slate-200">
                <span className="font-semibold text-slate-900">{item.label}</span>
                <span className="text-slate-500 block text-2xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Central Relay Node on Mobile */}
        <div className="p-4 rounded-xl bg-slate-900 border-2 border-brand text-center text-white">
          <div className="inline-flex p-2 rounded-lg bg-brand/20 text-brand mb-1">
            <Layers className="w-5 h-5 text-indigo-400" />
          </div>
          <h4 className="text-sm font-bold tracking-wide">RelayPrint</h4>
          <p className="text-2xs text-slate-300 mt-0.5">
            Requirements Review & Production Routing Layer
          </p>
        </div>

        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-2xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            2. Production Routes
          </span>
          <div className="space-y-1.5">
            {productionRoutes.map((item) => (
              <div key={item.id} className="text-xs bg-white p-2.5 rounded border border-slate-200">
                <span className="font-semibold text-slate-900">{item.label}</span>
                <span className="text-slate-500 block text-2xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Single coordination layer connecting diverse manufacturing capabilities</span>
        </div>
        <span className="text-2xs text-subtle-foreground">
          Matches requirements to partner capacity
        </span>
      </div>
    </div>
  );
}
