import React from 'react';
import { GitFork, Printer, Layers, Scissors, ArrowRight } from 'lucide-react';

export function CleanHeroVisual() {
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
      {/* 3 Simple Vertical or Horizontal Steps */}
      <div className="space-y-4">
        {/* Step 1: Inbound Print Requirement */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                1. Print Requirement
              </span>
              <span className="text-sm font-bold text-slate-900">
                Booklets, brochures, stationery, or direct mail
              </span>
            </div>
          </div>
        </div>

        {/* Central Relay Connection */}
        <div className="p-4 rounded-lg bg-slate-900 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-brand text-white flex items-center justify-center shadow-xs">
              <GitFork className="w-5 h-5 rotate-90" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider block">
                2. RelayPrint
              </span>
              <span className="text-sm font-bold text-white">
                Assesses specification & selects the production route
              </span>
            </div>
          </div>
        </div>

        {/* Step 3: Distributed Manufacturing Partners */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            3. Manufacturing Partners
          </span>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded bg-white border border-slate-200 font-medium text-slate-800">
              High-Volume Litho
            </div>
            <div className="p-2 rounded bg-white border border-slate-200 font-medium text-slate-800">
              Digital Print
            </div>
            <div className="p-2 rounded bg-white border border-slate-200 font-medium text-slate-800">
              Finishing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
