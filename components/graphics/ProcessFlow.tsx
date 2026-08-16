import React from 'react';
import { WORKFLOW_STAGES } from '@/lib/data/workflow';
import { Inbox, FileSearch, GitFork, Printer, RefreshCw } from 'lucide-react';

export function ProcessFlow() {
  const stageIcons = [
    <Inbox key="1" className="w-5 h-5" />,
    <FileSearch key="2" className="w-5 h-5" />,
    <GitFork key="3" className="w-5 h-5" />,
    <Printer key="4" className="w-5 h-5" />,
    <RefreshCw key="5" className="w-5 h-5" />
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {WORKFLOW_STAGES.map((stage, idx) => (
          <div
            key={stage.step}
            className="relative bg-surface rounded-xl border border-border p-5 sm:p-6 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
          >
            {/* Header: step number and icon */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xs font-mono font-semibold text-brand bg-brand-soft px-2 py-0.5 rounded">
                  {stage.number}
                </span>
                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                  {stageIcons[idx]}
                </div>
              </div>

              <h4 className="text-base font-bold text-foreground mb-1.5">{stage.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{stage.shortDesc}</p>
            </div>

            {/* Stage indicator line */}
            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-2xs text-subtle-foreground font-medium">
              <span>{stage.step}</span>
              <span className="text-slate-400">Step {idx + 1} of 5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
