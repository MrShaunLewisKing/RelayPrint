'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS, FaqItem } from '@/lib/data/faq';
import { Accordion, AccordionItemData } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'partners' | 'manufacturers'>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Business Model' },
    { id: 'partners', label: 'Platforms & Commercial Buyers' },
    { id: 'manufacturers', label: 'Print Manufacturers' }
  ] as const;

  const filteredItems = FAQ_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const accordionItems: AccordionItemData[] = filteredItems.map((item) => ({
    id: item.id,
    title: item.question,
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
        <div className="pt-2">
          <Badge variant="outline" size="sm">
            {item.category === 'manufacturers'
              ? 'Manufacturing Partner Topic'
              : item.category === 'partners'
              ? 'Platform & Buyer Topic'
              : 'Business Model Topic'}
          </Badge>
        </div>
      </div>
    )
  }));

  return (
    <div className="w-full space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border-subtle pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <Accordion items={accordionItems} defaultOpenId={filteredItems[0]?.id} />
    </div>
  );
}
