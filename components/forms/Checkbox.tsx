import React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, description, className, ...props }, ref) => {
    return (
      <div className={cn('relative flex items-start gap-3', className)}>
        <div className="flex h-5 items-center">
          <input
            id={id}
            ref={ref}
            type="checkbox"
            className="h-4 w-4 rounded border-border text-brand focus:ring-brand focus:ring-offset-0 cursor-pointer"
            {...props}
          />
        </div>
        <div className="text-sm">
          <label htmlFor={id} className="font-medium text-foreground cursor-pointer select-none">
            {label}
          </label>
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
