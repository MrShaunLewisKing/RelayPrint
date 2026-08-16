import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none tracking-tight rounded-xs cursor-pointer';

    const variants = {
      primary:
        'bg-slate-900 text-white hover:bg-brand active:bg-brand-dark focus-visible:ring-brand shadow-sm border border-slate-900',
      secondary:
        'bg-brand text-white hover:bg-brand-hover active:bg-brand-dark focus-visible:ring-brand shadow-sm border border-brand',
      outline:
        'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 focus-visible:ring-slate-900 shadow-2xs',
      dark:
        'bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-white border border-white',
      ghost:
        'text-slate-800 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 focus-visible:ring-slate-900',
      link: 'text-brand underline-offset-4 hover:underline p-0 h-auto font-normal focus-visible:ring-brand'
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[36px]',
      md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
      lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[50px]'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
