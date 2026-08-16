import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'brand' | 'outline' | 'dark' | 'warning';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium select-none transition-colors rounded-full';

  const variants = {
    default: 'bg-slate-100 text-slate-800 border border-slate-200/80',
    brand: 'bg-indigo-50 text-indigo-900 border border-indigo-200/80',
    outline: 'border border-slate-300 text-slate-700 bg-transparent',
    dark: 'bg-slate-900 text-white border border-slate-800',
    warning: 'bg-amber-50 text-amber-900 border border-amber-300'
  };

  const sizes = {
    sm: 'text-2xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2'
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}
