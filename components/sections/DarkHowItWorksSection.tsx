import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

export function DarkHowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Receive',
      desc: 'The requirement arrives from platforms or partners.'
    },
    {
      num: '02',
      title: 'Assess',
      desc: 'Format, quantity, stock and finishing are reviewed.'
    },
    {
      num: '03',
      title: 'Route',
      desc: 'Suitable manufacturing partner capability is matched.'
    },
    {
      num: '04',
      title: 'Coordinate',
      desc: 'RelayPrint keeps the job moving through to completion.'
    }
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#070B18] text-white border-b border-slate-900 min-h-[760px] flex items-center relative overflow-hidden" aria-label="How RelayPrint Works">
      <Container size="wide" className="max-w-[1380px] space-y-24">
        
        {/* Top-Left Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5747E8]">
            How RelayPrint works
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            One route.<br />Four decisions.
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
            A print requirement enters, is assessed, routed and coordinated into production.
          </p>
        </div>

        {/* 4 STAGES INFOGRAPHIC: Line sits STRICTLY BELOW all content with generous clearance */}
        <div className="space-y-10">
          
          {/* Stage Content Row (Numbers + Headings + Copy) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="space-y-3">
                {/* Large Stage Number */}
                <div className="font-extrabold text-5xl sm:text-6xl text-slate-700/60 leading-none select-none">
                  {step.num}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
                  {step.title}
                </h3>

                <p className="text-base text-slate-400 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Dedicated Route Track Line strictly BELOW the content (min 32-48px separation) */}
          <div className="hidden lg:block pt-8 relative" aria-hidden="true">
            <div className="relative w-full h-8 flex items-center">
              {/* Continuous Route Line */}
              <div className="absolute left-6 right-6 h-[2px] bg-slate-800" />
              <div className="absolute left-6 right-6 h-[2px] bg-gradient-to-r from-[#5747E8] via-[#5747E8] to-slate-800 w-3/4" />

              {/* 4 Markers on the track */}
              <div className="grid grid-cols-4 w-full relative z-10">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#070B18] border-2 border-[#5747E8] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#5747E8]" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#070B18] border-2 border-[#5747E8] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#5747E8]" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#070B18] border-2 border-[#5747E8] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#5747E8]" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#070B18] border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom-Right Link */}
        <div className="flex justify-start sm:justify-end pt-4">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#5747E8] transition-colors group"
          >
            <span>See the full process</span>
            <ArrowRight className="w-4 h-4 text-[#5747E8] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
