import React from 'react';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

export function BrandStatementSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" aria-label="Operating Model">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
            Demand in. Production out.{' '}
            <span className="text-brand block sm:inline">RelayPrint in the middle.</span>
          </h2>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500">
            <span className="text-slate-900 bg-white px-3.5 py-1.5 rounded-md border border-slate-200 shadow-2xs">
              Print Demand
            </span>
            <ArrowRight className="w-4 h-4 text-brand shrink-0" />
            <span className="text-white bg-slate-950 px-3.5 py-1.5 rounded-md shadow-xs">
              RelayPrint
            </span>
            <ArrowRight className="w-4 h-4 text-brand shrink-0" />
            <span className="text-slate-900 bg-white px-3.5 py-1.5 rounded-md border border-slate-200 shadow-2xs">
              Manufacturing
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
