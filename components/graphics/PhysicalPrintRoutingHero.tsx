'use client';

import React from 'react';
import { GitFork, Printer, Layers, Scissors, Check } from 'lucide-react';

export function PhysicalPrintRoutingHero() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      {/* Outer ambient container */}
      <div className="relative bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100/60 rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xl overflow-hidden">
        
        {/* Subtle background grid & CMYK registration mark */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          <span className="text-[10px] font-mono text-slate-400 tracking-wider ml-1">REG-MARK</span>
        </div>

        {/* 3-Stage Physical Flow Layout */}
        <div className="flex flex-col gap-6 relative z-10">
          
          {/* TOP: Physical Inbound Print Documents */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>01 / Inbound Print Specifications</span>
              <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                Multi-Format Inflow
              </span>
            </div>

            {/* Visual Paper Stack and Documents */}
            <div className="grid grid-cols-3 gap-3">
              {/* Paper 1: 32pp Document */}
              <div className="relative bg-white rounded-md p-3.5 border border-slate-200 shadow-md hover:-translate-y-0.5 transition-transform group">
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-slate-100 border-l border-b border-slate-300 rounded-bl-sm" />
                <div className="w-6 h-1 bg-indigo-500 rounded-full mb-2" />
                <div className="text-[11px] font-extrabold text-slate-900 leading-tight">
                  32pp Report
                </div>
                <div className="text-[9px] text-slate-500 font-mono mt-1">
                  170gsm Silk • A4
                </div>
                <div className="mt-2.5 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-indigo-600" />
                  <span className="text-[8px] font-mono uppercase text-slate-400">Saddle-Stitch</span>
                </div>
              </div>

              {/* Paper 2: Folded Promotional Leaflet */}
              <div className="relative bg-white rounded-md p-3.5 border border-slate-200 shadow-md hover:-translate-y-0.5 transition-transform group">
                <div className="w-6 h-1 bg-cyan-500 rounded-full mb-2" />
                <div className="text-[11px] font-extrabold text-slate-900 leading-tight">
                  Folded Leaflet
                </div>
                <div className="text-[9px] text-slate-500 font-mono mt-1">
                  150gsm Gloss • A5
                </div>
                <div className="mt-2.5 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-cyan-600" />
                  <span className="text-[8px] font-mono uppercase text-slate-400">Z-Fold 6pp</span>
                </div>
              </div>

              {/* Paper 3: Executive Stationery */}
              <div className="relative bg-white rounded-md p-3.5 border border-slate-200 shadow-md hover:-translate-y-0.5 transition-transform group">
                <div className="w-6 h-1 bg-pink-500 rounded-full mb-2" />
                <div className="text-[11px] font-extrabold text-slate-900 leading-tight">
                  Stationery Set
                </div>
                <div className="text-[9px] text-slate-500 font-mono mt-1">
                  350gsm Board
                </div>
                <div className="mt-2.5 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-pink-600" />
                  <span className="text-[8px] font-mono uppercase text-slate-400">Die-Cut Folder</span>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE: Central RelayPrint Routing Track */}
          <div className="relative py-2">
            <div className="relative bg-slate-950 text-white rounded-xl p-4 sm:p-5 border border-slate-800 shadow-xl overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md">
                    <GitFork className="w-5 h-5 rotate-90" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold tracking-tight text-white">
                        RelayPrint Coordination
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className="text-[11px] text-indigo-200">
                      Evaluates stock, format geometry & production capability
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  <span className="text-indigo-400 font-bold">ROUTING</span>
                  <span>ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM: Specialized Manufacturing Partner Destinations */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>02 / Matched Manufacturing Routes</span>
              <span className="text-[11px] font-mono text-slate-400">Distributed UK Facilities</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Destination 1: Volume Sheetfed */}
              <div className="p-3 bg-white/90 rounded-lg border border-slate-200 text-center shadow-xs">
                <div className="w-7 h-7 rounded bg-slate-100 text-slate-700 flex items-center justify-center mx-auto mb-1.5">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">High-Volume</div>
                <div className="text-[9px] text-slate-500 font-mono mt-0.5">Sheetfed Litho</div>
              </div>

              {/* Destination 2: Rapid Digital */}
              <div className="p-3 bg-white/90 rounded-lg border border-slate-200 text-center shadow-xs">
                <div className="w-7 h-7 rounded bg-slate-100 text-slate-700 flex items-center justify-center mx-auto mb-1.5">
                  <Printer className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">Short-Run</div>
                <div className="text-[9px] text-slate-500 font-mono mt-0.5">Digital Press</div>
              </div>

              {/* Destination 3: Specialist Finishing */}
              <div className="p-3 bg-white/90 rounded-lg border border-slate-200 text-center shadow-xs">
                <div className="w-7 h-7 rounded bg-slate-100 text-slate-700 flex items-center justify-center mx-auto mb-1.5">
                  <Scissors className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">Specialist</div>
                <div className="text-[9px] text-slate-500 font-mono mt-0.5">Custom Finishing</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
