'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenId,
  className
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('divide-y divide-border rounded-xl border border-border bg-surface overflow-hidden', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="transition-colors">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-button-${item.id}`}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-medium text-foreground hover:bg-slate-50 transition-colors focus-visible:bg-slate-50"
              >
                <span className="text-base sm:text-lg pr-4 font-semibold">{item.title}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200',
                    isOpen && 'transform rotate-180 text-brand'
                  )}
                />
              </button>
            </h3>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
              hidden={!isOpen}
              className={cn(
                'px-5 sm:px-6 pb-6 pt-1 text-muted-foreground text-sm sm:text-base leading-relaxed',
                !isOpen && 'hidden'
              )}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
