'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does RelayPrint manufacture products itself?',
      a: 'No. RelayPrint does not operate physical printing machinery. We operate as a B2B print reseller and production coordination company that routes print jobs to suitable manufacturing partners based on specific job requirements.'
    },
    {
      q: 'Can I place a print order or upload artwork on this website?',
      a: 'No. This public website is purely informational and does not feature an ecommerce store or direct ordering system. We work with print platforms, brokers, and commercial organisations through agreed business channels.'
    },
    {
      q: 'How does RelayPrint select a manufacturing partner?',
      a: 'Routing depends on matching specific job specifications—such as stock weight, sheet dimensions, run quantity, finishing requirements, and turnaround time—against available partner capability.'
    },
    {
      q: 'Can print manufacturers work with RelayPrint?',
      a: 'Yes. We are actively interested in building relationships with reliable commercial print and specialist finishing businesses across the UK.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container size="default" className="space-y-12">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Clear answers regarding our distributed production model and partner relationships."
        />

        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-foreground hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg pr-4">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200',
                        isOpen && 'transform rotate-180 text-brand'
                      )}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-lg bg-white border border-slate-200">
          <span className="text-sm font-medium text-slate-700">
            Have a specific commercial enquiry?
          </span>
          <Link href="/contact">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Contact our team
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
