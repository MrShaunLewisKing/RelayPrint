'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';
import { ArrowRight, Check, Layers, GitFork, Printer, Scissors, RefreshCw } from 'lucide-react';

interface PrintJobType {
  id: string;
  name: string;
  format: string;
  specs: string;
  matchedRoute: string;
  routeColor: string;
  badge: string;
}

const SAMPLE_PRINT_JOBS: PrintJobType[] = [
  {
    id: 'report',
    name: '32-Page Corporate Report',
    format: 'A4 / 210 × 297 mm',
    specs: '170gsm Silk • Saddle-Stitched • Matt Laminated Cover',
    matchedRoute: 'High-Volume Production',
    routeColor: 'from-sky-500 to-indigo-600',
    badge: 'MULTI-PAGE BOOKLET'
  },
  {
    id: 'flyer',
    name: 'Promotional Leaflets',
    format: 'A5 / 148 × 210 mm',
    specs: '150gsm Gloss • 500 copies • 24-48hr turnaround',
    matchedRoute: 'Digital Production',
    routeColor: 'from-pink-500 to-rose-600',
    badge: 'SHORT-RUN DIGITAL'
  },
  {
    id: 'folders',
    name: 'Die-Cut Presentation Folders',
    format: 'Oversized A4 / Custom Die',
    specs: '350gsm Silk Board • Capacity Pocket • Die-Creased',
    matchedRoute: 'Specialist Finishing',
    routeColor: 'from-amber-500 to-amber-600',
    badge: 'SPECIALIST FINISHING'
  }
];

export function TactileRoutingVisual() {
  const [selectedJob, setSelectedJob] = useState<PrintJobType>(SAMPLE_PRINT_JOBS[0]);

  return (
    <div className="w-full bg-slate-900 text-white rounded-lg border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background print grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      {/* Top Technical Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-brand/30 border border-brand/40 flex items-center justify-center text-indigo-400">
            <GitFork className="w-4.5 h-4.5 rotate-90" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-3xs uppercase tracking-widest text-indigo-400 font-bold">
                PRINT-ROUTING STAGE
              </span>
              <span className="font-mono text-3xs text-slate-500">// RP-CORE-01</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-0.5">
              Physical Print Requirement → Manufacturing Route
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <PrintRegistrationMarks variant="dimensions" dimensionLabel="Bespoke Route Match" />
        </div>
      </div>

      {/* Interactive Print Job Selector Pills */}
      <div className="mt-6 flex flex-wrap items-center gap-2 relative z-10">
        <span className="font-mono text-3xs uppercase tracking-wider text-slate-400 mr-1">
          Select Print Job:
        </span>
        {SAMPLE_PRINT_JOBS.map((job) => {
          const isSelected = job.id === selectedJob.id;
          return (
            <button
              key={job.id}
              type="button"
              onClick={() => setSelectedJob(job)}
              className={cn(
                'px-3 py-1.5 rounded-xs font-mono text-xs transition-all flex items-center gap-2 cursor-pointer',
                isSelected
                  ? 'bg-white text-slate-900 font-bold shadow-md ring-1 ring-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              )}
            >
              <span
                className={cn(
                  'w-1.5 h-1.5 rounded-full',
                  isSelected ? 'bg-brand' : 'bg-slate-500'
                )}
              />
              <span>{job.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main 3-Stage Tactile Flow Container */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        {/* Stage 1: Tangible Physical Print Job Sheet */}
        <div className="lg:col-span-4 bg-slate-950/80 rounded border border-slate-800 p-5 flex flex-col justify-between relative shadow-inner">
          <span className="crop-corner-tl -top-1 -left-1 opacity-40" />
          <span className="crop-corner-tr -top-1 -right-1 opacity-40" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-3xs uppercase tracking-widest text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                01 / INBOUND SPEC
              </span>
              <span className="font-mono text-3xs text-indigo-400 font-bold">
                {selectedJob.badge}
              </span>
            </div>

            {/* Visual Paper Sheet Representation */}
            <div className="mt-2 p-4 bg-white text-slate-900 rounded-sm border border-slate-200 shadow-paper relative">
              <div className="flex items-start justify-between border-b border-slate-100 pb-2 mb-2">
                <span className="font-mono text-3xs font-bold text-slate-500">
                  {selectedJob.format}
                </span>
                <PrintRegistrationMarks variant="dots" />
              </div>

              <h4 className="text-sm font-extrabold tracking-tight text-slate-950">
                {selectedJob.name}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedJob.specs}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between font-mono text-3xs text-slate-400">
                <span>STATUS: ASSESSED</span>
                <span>JOB #7492</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-2xs text-slate-400">
            <span>Inbound Commercial Payload</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </div>
        </div>

        {/* Stage 2: Central RelayPrint Coordination Node */}
        <div className="lg:col-span-4 bg-indigo-950/60 rounded border-2 border-indigo-500/60 p-5 flex flex-col justify-between text-center relative shadow-lg">
          <div>
            <span className="font-mono text-3xs uppercase tracking-widest text-indigo-300 bg-indigo-900/60 px-2.5 py-1 rounded inline-block mb-3 border border-indigo-700/50">
              02 / RELAYPRINT COORDINATION
            </span>

            <div className="my-2">
              <div className="w-12 h-12 rounded bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-md">
                <GitFork className="w-6 h-6 rotate-90" />
              </div>
              <h4 className="text-base font-bold text-white mt-3">RelayPrint Engine</h4>
              <p className="text-xs text-indigo-200 mt-1 leading-relaxed max-w-xs mx-auto">
                Evaluates substrate, geometry, binding, and turnaround to match the optimal manufacturing facility.
              </p>
            </div>
          </div>

          <div className="mt-4 p-2.5 bg-indigo-900/40 rounded border border-indigo-700/40 text-3xs font-mono text-indigo-300 flex items-center justify-between">
            <span>ROUTE RESOLUTION:</span>
            <span className="font-bold text-white">{selectedJob.matchedRoute}</span>
          </div>
        </div>

        {/* Stage 3: Destination Production Routes */}
        <div className="lg:col-span-4 bg-slate-950/80 rounded border border-slate-800 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-3xs uppercase tracking-widest text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                03 / PRODUCTION ROUTE
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-2">
              {[
                {
                  name: 'High-Volume Production',
                  desc: 'Sheetfed & Web Litho / Multi-page runs',
                  icon: <Printer className="w-4 h-4" />
                },
                {
                  name: 'Digital Production',
                  desc: 'High-Speed Toner & Inkjet / Rapid short-run',
                  icon: <Layers className="w-4 h-4" />
                },
                {
                  name: 'Specialist Finishing',
                  desc: 'Die-cutting, folding, lamination, binding',
                  icon: <Scissors className="w-4 h-4" />
                }
              ].map((route) => {
                const isMatched = selectedJob.matchedRoute === route.name;
                return (
                  <div
                    key={route.name}
                    className={cn(
                      'p-3 rounded border transition-all flex items-start gap-3',
                      isMatched
                        ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-400 opacity-60'
                    )}
                  >
                    <div
                      className={cn(
                        'p-1.5 rounded shrink-0',
                        isMatched ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                      )}
                    >
                      {route.icon}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold truncate">{route.name}</span>
                        {isMatched && (
                          <span className="font-mono text-3xs bg-emerald-500 text-slate-950 font-bold px-1.5 py-0.2 rounded">
                            MATCHED
                          </span>
                        )}
                      </div>
                      <span className="text-3xs text-slate-300 block truncate mt-0.5">
                        {route.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-3xs font-mono text-slate-400 flex items-center justify-between">
            <span>DISPATCH TO PARTNER</span>
            <span className="text-emerald-400">READY FOR PRE-FLIGHT</span>
          </div>
        </div>
      </div>

      {/* Footnote disclaimer */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-3xs text-slate-400 font-mono">
        <span>
          * Illustrative routing diagram. Actual production routing depends on job parameters and partner availability.
        </span>
        <span className="text-slate-400">// RELAYPRINT PRODUCTION NETWORK</span>
      </div>
    </div>
  );
}
