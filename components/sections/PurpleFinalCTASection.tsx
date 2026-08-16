import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function PurpleFinalCTASection() {
  return (
    <section className="min-h-[430px] flex items-center py-24 sm:py-32 bg-[#5747E8] text-white border-b border-indigo-900">
      <Container size="default" className="text-center space-y-8 max-w-3xl">
        <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-[1.05]">
          Let&apos;s talk print.
        </h2>

        <p className="text-lg sm:text-2xl text-indigo-100 leading-relaxed max-w-xl mx-auto font-medium">
          Have a print requirement or want to work with RelayPrint?
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-9 py-4 rounded-[9px] bg-white text-[#101525] text-base font-extrabold hover:bg-slate-50 transition-colors shadow-lg"
          >
            Contact RelayPrint
          </Link>
        </div>
      </Container>
    </section>
  );
}
