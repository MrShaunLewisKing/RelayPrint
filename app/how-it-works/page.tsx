import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Callout } from '@/components/ui/Callout';
import { ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | Production Workflow & Routing',
  description:
    'Explore RelayPrint’s 5-stage production coordination process, connecting print requirements with suitable manufacturing partners.'
};

export default function HowItWorksPage() {
  const stages = [
    {
      num: '01',
      title: 'Requirement received',
      desc: 'Print requirements enter through integrated software platforms, print brokers, and commercial partners.'
    },
    {
      num: '02',
      title: 'Requirements reviewed',
      desc: 'Technical specifications—such as stock weight, sheet size, and finishing—are evaluated against manufacturing partner capabilities.'
    },
    {
      num: '03',
      title: 'Suitable capability identified',
      desc: 'The requirement is matched to appropriate digital, litho, or specialist finishing lines.'
    },
    {
      num: '04',
      title: 'Work routed to a manufacturing partner',
      desc: 'The job ticket is dispatched to an independent UK manufacturing partner suited to the specification.'
    },
    {
      num: '05',
      title: 'Production coordinated',
      desc: 'RelayPrint oversees schedule progression, milestones, and delivery tracking between all parties.'
    }
  ];

  const factors = [
    {
      title: 'Specification',
      desc: 'Format dimensions, paper stock weight, and colour requirements.'
    },
    {
      title: 'Quantity',
      desc: 'Short-run digital batches versus high-volume sheetfed runs.'
    },
    {
      title: 'Finishing',
      desc: 'Binding, folding, lamination, die-cutting, or specialist post-press options.'
    },
    {
      title: 'Availability & Location',
      desc: 'Partner production schedules and delivery destination proximity.'
    }
  ];

  return (
    <div className="py-16 sm:py-20 bg-white">
      <Container size="default" className="space-y-16 sm:space-y-20">
        {/* Page Hero */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Process
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            From requirement to production.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            RelayPrint coordinates print work between commercial demand sources and independent UK manufacturing partners.
          </p>
        </div>

        <Callout variant="neutral">
          RelayPrint coordinates production with independent manufacturing partners. We do not operate physical printing machinery or take consumer orders on this website.
        </Callout>

        {/* 5-Step Visual Sequence */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            The 5-stage workflow
          </h2>

          <div className="space-y-6">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 shrink-0">
                  {stage.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{stage.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Influences a Production Route? */}
        <div className="p-8 sm:p-12 rounded-xl bg-slate-900 text-white space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Matching Criteria
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              What influences a production route?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factors.map((factor) => (
              <div key={factor.title} className="p-5 rounded bg-slate-800 border border-slate-700 space-y-1.5">
                <h3 className="text-base font-bold text-white">{factor.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground">Ready to discuss print routing?</h3>
            <p className="text-sm text-slate-600 mt-1">
              Connect with our team regarding software integration or production partnerships.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Contact RelayPrint
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
