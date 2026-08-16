'use client';

import React from 'react';
import { GitFork, Printer, Layers, Scissors } from 'lucide-react';

export function BespokePhysicalPrintHero() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none py-4">
      {/* Physical Paper Objects Layout */}
      <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        
        {/* LEFT COLUMN: 3 Physical Print Objects (Entering from Left) */}
        <div className="sm:col-span-7 space-y-4 relative z-10">
          
          {/* OBJECT 1: A4 Multi-Page Report with Stacked Sheets */}
          <div className="relative group">
            {/* Background stacked sheets */}
            <div className="absolute -inset-1.5 bg-slate-200/80 rounded-md -rotate-1 shadow-xs pointer-events-none" />
            <div className="absolute -inset-0.5 bg-slate-100 rounded-md rotate-1 shadow-xs pointer-events-none" />

            {/* Main Forefront Report Sheet */}
            <div className="relative bg-white rounded-md p-4 border border-[#E7E8ED] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
              {/* Corner Registration Mark */}
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-70">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#101525]" />
              </div>

              {/* Graphic spine accent */}
              <div className="w-8 h-1 bg-[#5747E8] rounded-full mb-3" />

              <div className="space-y-1">
                <div className="text-base font-extrabold text-[#101525] tracking-tight">
                  Annual Report
                </div>
                <div className="text-xs text-[#5F6574] font-medium">
                  32 pages • 170gsm Silk
                </div>
              </div>

              {/* Abstract document lines */}
              <div className="mt-3.5 space-y-1.5 pt-2.5 border-t border-slate-100">
                <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                <div className="w-4/5 h-1.5 bg-slate-100 rounded-full" />
              </div>
            </div>
          </div>

          {/* LOWER ROW: Folded Leaflet & Business Stationery Stack */}
          <div className="grid grid-cols-2 gap-3.5 pt-1">
            {/* OBJECT 2: Folded Leaflet (Slightly Rotated, Cyan Accent) */}
            <div className="relative bg-white rounded-md p-3.5 border border-[#E7E8ED] shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Fold crease indicator */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-200/60 pointer-events-none" />

              <div className="w-6 h-1 bg-cyan-500 rounded-full mb-2" />
              <div className="text-xs font-bold text-[#101525] leading-tight">
                Folded Leaflet
              </div>
              <div className="text-[10px] text-[#5F6574] mt-0.5">
                A5 6-Page Z-Fold
              </div>
              <div className="mt-2.5 w-full h-1 bg-cyan-50 rounded" />
            </div>

            {/* OBJECT 3: Business Stationery (Letterhead + Card Stack) */}
            <div className="relative bg-white rounded-md p-3.5 border border-[#E7E8ED] shadow-md rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Stacked card overlay */}
              <div className="absolute -bottom-1 -right-1 w-12 h-7 bg-pink-50 border border-pink-200 rounded-xs shadow-2xs" />

              <div className="w-6 h-1 bg-pink-500 rounded-full mb-2" />
              <div className="text-xs font-bold text-[#101525] leading-tight">
                Stationery Suite
              </div>
              <div className="text-[10px] text-[#5F6574] mt-0.5">
                Letterhead & Cards
              </div>
              <div className="mt-2.5 w-full h-1 bg-pink-50 rounded" />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Vertical RelayPrint Routing Band & 3 Destinations */}
        <div className="sm:col-span-5 flex flex-col items-center sm:items-stretch gap-4 relative z-10">
          
          {/* Central Vertical RelayPrint Routing Band */}
          <div className="bg-[#080D1D] text-white rounded-xl p-4 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#5747E8] flex items-center justify-center text-white shadow-sm shrink-0">
                <GitFork className="w-5 h-5 rotate-90" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white tracking-tight">
                  RelayPrint
                </div>
                <div className="text-[11px] text-indigo-300 font-medium">
                  Route & coordinate
                </div>
              </div>
            </div>
          </div>

          {/* Directional Split Routes to 3 Production Destinations */}
          <div className="space-y-2 w-full">
            {/* Destination 1: Digital production */}
            <div className="p-2.5 rounded-lg bg-white border border-[#E7E8ED] shadow-xs flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-indigo-50 text-[#5747E8] flex items-center justify-center shrink-0">
                <Printer className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-[#101525]">
                Digital production
              </span>
            </div>

            {/* Destination 2: Volume production */}
            <div className="p-2.5 rounded-lg bg-white border border-[#E7E8ED] shadow-xs flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-indigo-50 text-[#5747E8] flex items-center justify-center shrink-0">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-[#101525]">
                Volume production
              </span>
            </div>

            {/* Destination 3: Finishing */}
            <div className="p-2.5 rounded-lg bg-white border border-[#E7E8ED] shadow-xs flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-indigo-50 text-[#5747E8] flex items-center justify-center shrink-0">
                <Scissors className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-[#101525]">
                Finishing
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
