import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export function ConnectedWorkflowSection() {
  const steps = [
    {
      num: '01',
      title: 'Receive',
      desc: 'Print requirements enter through commercial platforms and business relationships.'
    },
    {
      num: '02',
      title: 'Match',
      desc: 'The requirement is assessed against suitable production machinery and capability.'
    },
    {
      num: '03',
      title: 'Route',
      desc: 'The job is directed toward an independent manufacturing partner suited to the job.'
    },
    {
      num: '04',
      title: 'Coordinate',
      desc: 'RelayPrint oversees schedule progression, milestones, and delivery tracking.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-900 relative overflow-hidden">
      <Container size="wide" className="space-y-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Workflow Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              How RelayPrint works
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A single connected coordination path from incoming job specification to completed production.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/how-it-works">
              <Button variant="dark" size="md" rightIcon={<ChevronRight className="w-4 h-4" />}>
                Explore full process
              </Button>
            </Link>
          </div>
        </div>

        {/* Connected Horizontal Journey Track */}
        <div className="relative">
          {/* Subtle connecting line across desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600 opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-indigo-400">
                    {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500/60" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
