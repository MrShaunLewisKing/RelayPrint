'use client';

import React, { useState } from 'react';
import { PaperSheet } from '@/components/ui/PaperSheet';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Callout } from '@/components/ui/Callout';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';
import { ArrowRight, CheckCircle2, Sliders, RotateCcw, FileText, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SampleJob {
  id: string;
  name: string;
  category: string;
  quantity: string;
  format: string;
  stock: string;
  finishing: string;
  turnaroundTarget: string;
  assessedCriteria: {
    technology: string;
    finishingMatch: string;
    batchSuitability: string;
    routeCategory: string;
  };
  sampleRouteDescription: string;
}

const SAMPLE_JOBS: SampleJob[] = [
  {
    id: 'booklets',
    name: '32-Page Corporate Report',
    category: 'Commercial Document',
    quantity: '2,500 copies',
    format: 'A4 / 210 × 297 mm',
    stock: '170gsm Silk Text / 300gsm Cover',
    finishing: 'Matt Laminated Cover + Saddle Stitched',
    turnaroundTarget: '5 working days',
    assessedCriteria: {
      technology: 'Sheetfed Litho / High-Capacity Digital',
      finishingMatch: 'Inline / Near-line Stitching & Trimming with Lamination',
      batchSuitability: 'Mid-volume multi-page signature work',
      routeCategory: 'Commercial Document Production Partner'
    },
    sampleRouteDescription:
      'Matched to a manufacturing partner configured for multi-page document imposition and high-speed saddle stitching.'
  },
  {
    id: 'flyers-fast',
    name: 'A5 Promotional Leaflets',
    category: 'Promotional Print',
    quantity: '500 copies',
    format: 'A5 / 148 × 210 mm',
    stock: '150gsm Gloss Art',
    finishing: 'Trim to size / Flat pack',
    turnaroundTarget: '24-48 hours',
    assessedCriteria: {
      technology: 'High-Speed Digital Press',
      finishingMatch: 'Guillotine cutting & shrink-wrap packaging',
      batchSuitability: 'Short run, rapid setup required',
      routeCategory: 'Digital Production Partner'
    },
    sampleRouteDescription:
      'Matched to a digital production partner capable of fast pre-flight turnaround and short-batch execution.'
  },
  {
    id: 'stationery-suite',
    name: 'Executive Stationery & Folders',
    category: 'Stationery Suite',
    quantity: '1,000 folders + 2,500 letterheads',
    format: 'Oversized A4 Folders + A4 Letterheads',
    stock: '350gsm Silk Board / 120gsm Premium Uncoated',
    finishing: 'Die-cut pocket with capacity spine + Matt Lamination',
    turnaroundTarget: '6 working days',
    assessedCriteria: {
      technology: 'Sheetfed Litho with Spot Colour / Match',
      finishingMatch: 'Cylinder die-cutting, folder gluing, lamination',
      batchSuitability: 'Specialist die-cut and assembly tooling required',
      routeCategory: 'Stationery & Specialist Finishing Partner'
    },
    sampleRouteDescription:
      'Matched to a partner with dedicated die-cutting and folder-gluing machinery alongside sheetfed presses.'
  }
];

export function ExampleRoutingFlow() {
  const [selectedJobId, setSelectedJobId] = useState<string>('booklets');
  const currentJob = SAMPLE_JOBS.find((j) => j.id === selectedJobId) || SAMPLE_JOBS[0];

  return (
    <div className="w-full space-y-8">
      {/* Disclaimer banner */}
      <Callout variant="neutral" title="Illustrative Example Only">
        Actual production routing depends on job requirements, partner capability, real-time availability, and commercial arrangements. RelayPrint matches specifications to suitable manufacturing partners within its distributed network.
      </Callout>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Job Selector (Tactile Job Cards) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-300">
            <span className="font-mono text-3xs font-bold uppercase tracking-widest text-slate-600">
              Select Requirement
            </span>
            <PrintRegistrationMarks variant="dots" />
          </div>

          <div className="space-y-3">
            {SAMPLE_JOBS.map((job) => {
              const isSelected = job.id === selectedJobId;
              return (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => setSelectedJobId(job.id)}
                  className={cn(
                    'w-full text-left p-4 rounded-sm border transition-all text-sm cursor-pointer relative',
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-brand/30'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                  )}
                >
                  <div className="flex items-center justify-between mb-1.5 font-mono text-3xs">
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded-xs font-bold uppercase',
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                      )}
                    >
                      {job.category}
                    </span>
                    <span className={isSelected ? 'text-slate-300' : 'text-slate-400'}>
                      {job.quantity}
                    </span>
                  </div>
                  <h4 className="font-bold tracking-tight text-base">{job.name}</h4>
                  <p
                    className={cn(
                      'text-xs mt-1 font-mono truncate',
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    )}
                  >
                    {job.format} • {job.stock}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Routing Progression */}
        <div className="lg:col-span-8">
          <PaperSheet
            cropMarks
            ticketLabel={`RP / TICKET #${currentJob.id.toUpperCase()}`}
            dimensionLabel={currentJob.format}
            className="border-slate-300"
          >
            {/* Header: Title & Target */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div>
                <span className="font-mono text-3xs font-bold uppercase tracking-widest text-brand">
                  How a Print Requirement May Be Routed
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-0.5">
                  {currentJob.name}
                </h3>
              </div>
              <Badge variant="dark" size="sm">
                Target: {currentJob.turnaroundTarget}
              </Badge>
            </div>

            {/* Step-by-Step Technical Journey */}
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      Requirement Received & Captured
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 font-mono">
                      Quantity: <strong>{currentJob.quantity}</strong> | Format: <strong>{currentJob.format}</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                      Technical Specification Assessed
                    </h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Stock: <span className="font-mono">{currentJob.stock}</span> • Finishing:{' '}
                      <span className="font-mono">{currentJob.finishing}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-brand text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-brand">
                      Production Capability Identified
                    </h5>
                    <p className="text-xs text-slate-700 mt-1">
                      Technology:{' '}
                      <strong className="text-slate-900">{currentJob.assessedCriteria.technology}</strong>{' '}
                      ({currentJob.assessedCriteria.batchSuitability})
                    </p>
                  </div>
                </div>
              </div>

              {/* Destination Result Box */}
              <div className="p-5 rounded bg-slate-900 text-white border border-slate-800 shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-3xs font-bold uppercase tracking-widest text-indigo-400">
                      04 / PRODUCTION ROUTE DETERMINATION
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      {currentJob.assessedCriteria.routeCategory}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {currentJob.sampleRouteDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PaperSheet>
        </div>
      </div>
    </div>
  );
}
