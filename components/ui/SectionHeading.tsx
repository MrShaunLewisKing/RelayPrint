import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  level?: 2 | 3;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  level = 2,
  dark = false,
  className,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as const;

  return (
    <div
      className={cn(
        'max-w-3xl space-y-3',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className={cn('text-xs font-bold uppercase tracking-wider', dark ? 'text-indigo-400' : 'text-brand')}>
          {eyebrow}
        </div>
      )}

      <HeadingTag
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]',
          dark ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </HeadingTag>

      {description && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed pt-1 max-w-2xl',
            align === 'center' && 'mx-auto',
            dark ? 'text-slate-300' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
