import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

export function HeroSection() {
  return (
    <section className="relative min-h-[720px] flex items-center pt-12 pb-16 sm:pt-16 sm:pb-24 bg-white border-b border-[#E7E8ED] overflow-hidden">
      <Container size="wide" className="max-w-[1480px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT (48%): Typographic Anchor */}
          <div className="lg:col-span-6 space-y-7">
            <h1 className="text-[56px] sm:text-[72px] lg:text-[86px] font-extrabold tracking-tight text-[#101525] leading-[0.96]">
              Print jobs.<br />
              <span className="text-[#5747E8]">Routed intelligently.</span>
            </h1>

            <p className="text-lg sm:text-[19px] text-[#5F6574] leading-[1.55] max-w-[540px]">
              RelayPrint connects commercial print jobs with suitable manufacturing partners and coordinates the route from requirement to production.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[9px] bg-[#5747E8] text-white text-base font-bold hover:bg-[#4637d4] transition-colors shadow-sm"
              >
                Talk to RelayPrint
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[9px] border border-[#E7E8ED] bg-transparent text-[#101525] text-base font-bold hover:bg-slate-50 transition-colors"
              >
                How RelayPrint works
              </Link>
            </div>

            <div className="pt-2 text-sm text-[#5F6574]">
              For print platforms, commercial buyers and manufacturing partners.
            </div>
          </div>

          {/* RIGHT (52%): Professional Vector Artwork */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[560px] aspect-[4/3] flex items-center justify-center">
              <Image
                src="/illustrations/hero-print.svg"
                alt="RelayPrint Commercial Print Routing Workflow"
                width={700}
                height={525}
                className="w-full h-auto object-contain drop-shadow-sm"
                priority
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
