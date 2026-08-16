import React from 'react';
import { cn } from '@/lib/utils';
import { Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'warning' | 'neutral' | 'success';
  title?: string;
  children: React.ReactNode;
}

export function Callout({
  variant = 'info',
  title,
  className,
  children,
  ...props
}: CalloutProps) {
  const icons = {
    info: <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
    neutral: <Info className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />,
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
  };

  const variants = {
    info: 'bg-brand-soft/60 border-brand-soft-border text-slate-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    neutral: 'bg-slate-100 border-slate-200 text-slate-800',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900'
  };

  return (
    <div
      role="note"
      className={cn('flex items-start gap-3.5 p-4 sm:p-5 rounded-lg border text-sm', variants[variant], className)}
      {...props}
    >
      {icons[variant]}
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1 text-inherit">{title}</h4>}
        <div className="text-inherit leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
