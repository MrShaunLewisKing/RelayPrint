'use client';

import React from 'react';
import { GitFork } from 'lucide-react';

export function PhysicalPaperHeroSpread() {
  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[560px] flex items-center justify-center select-none overflow-visible">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-indigo-50/60 rounded-full blur-3xl -z-10" />
      </div>

      {/* SVG Connecting Route Path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 600 500"
        fill="none"
      >
        <path
          d="M 50,180 C 120,180 200,240 330,250"
          stroke="#5747E8"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          className="opacity-40"
        />
        <path
          d="M 330,250 C 420,250 460,140 530,140"
          stroke="#5747E8"
          strokeWidth="2"
          className="opacity-70"
        />
        <path
          d="M 330,250 C 430,250 460,250 530,250"
          stroke="#5747E8"
          strokeWidth="2"
          className="opacity-70"
        />
        <path
          d="M 330,250 C 420,250 460,360 530,360"
          stroke="#5747E8"
          strokeWidth="2"
          className="opacity-70"
        />
      </svg>

      {/* COMPOSITION CONTAINER */}
      <div className="relative w-full max-w-[580px] h-[480px] sm:h-[520px]">
        
        {/* OBJECT 1: A4 MULTI-PAGE REPORT (Main Forefront Paper) */}
        <div
          className="absolute left-2 sm:left-6 top-6 w-[240px] sm:w-[290px] h-[330px] sm:h-[390px] -rotate-[4deg] z-20 transition-transform duration-500 hover:-rotate-1"
          style={{ perspective: '1000px' }}
        >
          {/* Offset Stack Sheets Beneath */}
          <div className="absolute inset-0 bg-[#F4F4F7] rounded-sm translate-x-3 translate-y-3 -rotate-1 shadow-sm border border-[#E0E0E6]" />
          <div className="absolute inset-0 bg-[#FAFAFC] rounded-sm translate-x-1.5 translate-y-1.5 rotate-1 shadow-sm border border-[#E5E5EB]" />

          {/* Main Top Sheet */}
          <div className="absolute inset-0 bg-white rounded-sm p-6 sm:p-7 shadow-[0_20px_45px_-12px_rgba(16,21,37,0.14),0_0_1px_rgba(16,21,37,0.2)] border border-[#E7E8ED] flex flex-col justify-between">
            {/* Top Registration Mark & Crop Marks */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#101525]" />
              </div>
              <span className="font-mono text-[9px] text-slate-400 tracking-wider">A4 / 210×297</span>
            </div>

            {/* Cover Layout */}
            <div className="space-y-3 my-auto">
              <div className="w-12 h-1.5 bg-[#5747E8] rounded-full" />
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101525] tracking-tight leading-none">
                  Annual<br />Report
                </h3>
                <p className="text-xs font-semibold text-[#5F6574]">
                  32 pages • 170gsm Silk
                </p>
              </div>
            </div>

            {/* Bottom editorial lines */}
            <div className="space-y-1.5 pt-4 border-t border-slate-100">
              <div className="w-full h-1 bg-slate-100 rounded-full" />
              <div className="w-3/4 h-1 bg-slate-100 rounded-full" />
            </div>
          </div>
        </div>

        {/* OBJECT 2: FOLDED LEAFLET (Partially behind/right of report) */}
        <div className="absolute right-12 sm:right-20 top-2 w-[180px] sm:w-[210px] h-[240px] sm:h-[280px] rotate-[7deg] z-10 transition-transform duration-500 hover:rotate-4">
          <div className="absolute inset-0 bg-white rounded-sm p-4 sm:p-5 shadow-[0_15px_35px_-10px_rgba(16,21,37,0.12),0_0_1px_rgba(16,21,37,0.15)] border border-[#E7E8ED] flex flex-col justify-between">
            {/* Fold Crease Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-200/80 shadow-xs" />
            
            <div className="flex justify-between items-center">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="text-[8px] font-mono text-cyan-600 font-bold uppercase">6pp Z-Fold</span>
            </div>

            <div className="space-y-1.5 my-auto">
              <div className="w-8 h-1 bg-cyan-500 rounded-full" />
              <div className="text-xs sm:text-sm font-bold text-[#101525] leading-tight">
                Product<br />Overview
              </div>
              <div className="text-[9px] text-[#5F6574]">150gsm Gloss</div>
            </div>

            <div className="w-full h-1 bg-cyan-50 rounded-full" />
          </div>
        </div>

        {/* OBJECT 3: BUSINESS STATIONERY (Lower-Right) */}
        <div className="absolute right-4 sm:right-10 bottom-4 w-[200px] sm:w-[230px] h-[150px] sm:h-[170px] -rotate-[2deg] z-20 transition-transform duration-500 hover:rotate-0">
          {/* Stacked compliment slip & letterhead corner */}
          <div className="absolute -top-3 left-2 right-2 h-full bg-[#FAFAFC] rounded-sm border border-[#E0E0E6] shadow-xs" />

          {/* Foreground Stationery Card with Magenta Accent */}
          <div className="relative h-full bg-white rounded-sm p-4 shadow-[0_16px_35px_-10px_rgba(16,21,37,0.12),0_0_1px_rgba(16,21,37,0.15)] border border-[#E7E8ED] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="w-6 h-1 bg-pink-500 rounded-full" />
              <span className="text-[8px] font-mono text-pink-600 font-bold">350gsm Board</span>
            </div>

            <div className="space-y-0.5">
              <div className="text-xs font-bold text-[#101525]">Corporate Stationery</div>
              <div className="text-[9px] text-[#5F6574]">Foil & Die-Cut Finish</div>
            </div>

            {/* Overlapping Business Card */}
            <div className="absolute -bottom-2 -right-2 w-24 h-14 bg-slate-900 text-white rounded-xs p-2 shadow-md border border-slate-800 flex flex-col justify-between">
              <div className="w-3 h-0.5 bg-[#5747E8] rounded-full" />
              <div className="text-[8px] font-bold tracking-wider uppercase text-slate-300">RelayPrint</div>
            </div>
          </div>
        </div>

        {/* CENTRAL RELAYPRINT NODE (No card, no container!) */}
        <div className="absolute left-[52%] top-[48%] -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#5747E8] text-white flex items-center justify-center shadow-md">
            <GitFork className="w-4 h-4 rotate-90" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-[#101525] tracking-tight leading-none">
              RelayPrint
            </div>
            <div className="text-[10px] text-[#5747E8] font-bold mt-0.5 leading-none">
              Route & coordinate
            </div>
          </div>
        </div>

        {/* RIGHT DESTINATIONS (Pure Text Labels, NO BOXES!) */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-12 z-20 pointer-events-none">
          <div className="text-right">
            <span className="text-xs font-bold text-[#101525] block">Digital</span>
            <span className="text-[9px] text-[#5F6574] block">Short-run production</span>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-[#101525] block">Volume</span>
            <span className="text-[9px] text-[#5F6574] block">Sheetfed litho</span>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-[#101525] block">Finishing</span>
            <span className="text-[9px] text-[#5F6574] block">Post-press & binding</span>
          </div>
        </div>

      </div>
    </div>
  );
}
