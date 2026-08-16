import React from 'react';
import { cn } from '@/lib/utils';

export interface PrintRegistrationMarksProps {
  className?: string;
  variant?: 'dots' | 'crosshair' | 'dimensions';
  dimensionLabel?: string;
}

export function PrintRegistrationMarks({
  className,
  variant = 'dots',
  dimensionLabel = 'A4'
}: PrintRegistrationMarksProps) {
  if (variant === 'crosshair') {
    return (
      <div className={cn('inline-flex items-center justify-center w-3.5 h-3.5 text-slate-400 select-none', className)} aria-hidden="true">
        <svg viewBox="0 0 16 16" className="w-full h-full fill-none stroke-current" strokeWidth="1">
          <circle cx="8" cy="8" r="6" />
          <line x1="8" y1="0" x2="8" y2="16" />
          <line x1="0" y1="8" x2="16" y2="8" />
        </svg>
      </div>
    );
  }

  if (variant === 'dimensions') {
    return (
      <div className={cn('inline-flex items-center gap-1.5 text-2xs text-slate-400 select-none font-sans', className)} aria-hidden="true">
        <span>{dimensionLabel}</span>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-cyan-500" />
          <span className="w-1 h-1 rounded-full bg-pink-500" />
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span className="w-1 h-1 rounded-full bg-slate-900" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn('inline-flex items-center gap-1.5 select-none', className)} aria-hidden="true">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" title="Cyan" />
      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" title="Magenta" />
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Yellow" />
      <span className="w-1.5 h-1.5 rounded-full bg-slate-900" title="Key" />
    </div>
  );
}
