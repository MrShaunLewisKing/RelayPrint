import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'w-full px-3.5 py-2.5 rounded-lg border bg-surface text-sm text-foreground placeholder:text-slate-400 shadow-2xs transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand',
          error ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : 'border-border',
          'disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
