import React from 'react';
import { WORKFLOW_STAGES } from '@/lib/data/workflow';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';
import { Inbox, FileSearch, GitFork, Printer, RefreshCw, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EditorialProcessConveyor() {
  const stageIcons = [
    <Inbox key="1" className="w-5 h-5" />,
    <FileSearch key="2" className="w-5 h-5" />,
    <GitFork key="3" className="w-5 h-5" />,
    <Printer key="4" className="w-5 h-5" />,
    <RefreshCw key="5" className="w-5 h-5" />
  ];

  return (
    <div className="w-full space-y-12">
      {/* Technical track header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-300">
        <div className="flex items-center gap-3">
          <span className="font-mono text-3xs uppercase tracking-widest text-slate-500 font-bold">
            PROGRESSION TRACK
          </span>
          <span className="text-slate-300">/</span>
          <span className="font-mono text-3xs text-slate-400">01 TO 05 WORKFLOW</span>
        </div>
        <PrintRegistrationMarks variant="dimensions" dimensionLabel="Production Lifecycle" />
      </div>

      {/* Editorial Timeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative">
        {WORKFLOW_STAGES.map((stage, idx) => (
          <div
            key={stage.step}
            className="group relative flex flex-col justify-between p-6 bg-white rounded-sm border border-slate-200/90 shadow-paper hover:border-slate-400 hover:shadow-lg transition-all duration-200"
          >
            {/* Corner crop mark on hover */}
            <span className="crop-corner-tl -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="crop-corner-tr -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Giant Stage Number & Icon */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tighter text-slate-900 leading-none">
                  {stage.number}
                </span>
                <div className="w-9 h-9 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {stageIcons[idx]}
                </div>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">
                {stage.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {stage.shortDesc}
              </p>
            </div>

            {/* Bottom Tag */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-3xs text-slate-400">
              <span>{stage.step}</span>
              {idx < 4 ? (
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              ) : (
                <span className="text-emerald-600 font-bold">COMPLETE</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
