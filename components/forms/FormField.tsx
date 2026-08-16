import React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  description?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  required,
  optional,
  description,
  error,
  children,
  className
}: FormFieldProps) {
  return (
    <div className={cn('space-y-1.5', className)}>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
        {optional && <span className="text-xs text-subtle-foreground">Optional</span>}
      </div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600 font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
