import React from 'react';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

export function BigStatementSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F8] border-b border-[#E7E8ED] flex items-center justify-center" aria-label="Brand Statement">
      <Container size="wide" className="max-w-[1380px]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08]">
            <span className="text-[#101525] block sm:inline">Print comes in.</span>{' '}
            <span className="text-[#5747E8] block sm:inline">We move it forward.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#5F6574]">
            <span className="text-[#101525]">
              PRINT DEMAND
            </span>
            <ArrowRight className="w-4 h-4 text-[#5747E8] shrink-0" />
            <span className="text-[#5747E8] font-black">
              RelayPrint
            </span>
            <ArrowRight className="w-4 h-4 text-[#5747E8] shrink-0" />
            <span className="text-[#101525]">
              PRODUCTION
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
