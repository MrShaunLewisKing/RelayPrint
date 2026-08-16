import React from 'react';
import { cn } from '@/lib/utils';
import { PrintRegistrationMarks } from './PrintRegistrationMarks';

export interface PaperSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  cropMarks?: boolean;
  ticketLabel?: string;
  dimensionLabel?: string;
  stacked?: boolean;
  foldedCorner?: boolean;
  dark?: boolean;
  children: React.ReactNode;
}

export function PaperSheet({
  cropMarks = false,
  ticketLabel,
  dimensionLabel,
  stacked = false,
  foldedCorner = false,
  dark = false,
  className,
  children,
  ...props
}: PaperSheetProps) {
  return (
    <div
      className={cn(
        'relative rounded-sm transition-all duration-200',
        dark
          ? 'bg-slate-900 text-white border border-slate-800 shadow-lg'
          : 'bg-white text-foreground border border-slate-200/90 shadow-paper',
        stacked && 'shadow-sheet-stack',
        className
      )}
      {...props}
    >
      {/* Optional Crop Marks at Corners */}
      {cropMarks && (
        <>
          <span className="crop-corner-tl -top-2 -left-2" aria-hidden="true" />
          <span className="crop-corner-tr -top-2 -right-2" aria-hidden="true" />
          <span className="crop-corner-bl -bottom-2 -left-2" aria-hidden="true" />
          <span className="crop-corner-br -bottom-2 -right-2" aria-hidden="true" />
        </>
      )}

      {/* Optional Folded Corner */}
      {foldedCorner && (
        <div
          className="absolute top-0 right-0 w-6 h-6 bg-slate-100 border-l border-b border-slate-300 shadow-2xs pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Optional Top Job Ticket Bar */}
      {(ticketLabel || dimensionLabel) && (
        <div
          className={cn(
            'px-4 py-2 border-b flex items-center justify-between font-mono text-3xs tracking-wider uppercase',
            dark
              ? 'border-slate-800 bg-slate-950/60 text-slate-400'
              : 'border-slate-100 bg-slate-50/60 text-slate-500'
          )}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="font-semibold text-foreground dark:text-white">
              {ticketLabel || 'SPEC TICKET'}
            </span>
          </div>
          {dimensionLabel && <span>{dimensionLabel}</span>}
        </div>
      )}

      <div className="p-5 sm:p-6 lg:p-7">{children}</div>
    </div>
  );
}
