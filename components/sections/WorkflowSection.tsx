import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export function WorkflowSection() {
  const steps = [
    {
      num: '01',
      title: 'Receive',
      desc: 'Print requirements enter through integrated platforms and business relationships.'
    },
    {
      num: '02',
      title: 'Match',
      desc: 'Job specifications are evaluated against partner machinery, capacity, and location.'
    },
    {
      num: '03',
      title: 'Route',
      desc: 'The requirement is directed to an independent manufacturing partner suited to the job.'
    },
    {
      num: '04',
      title: 'Coordinate',
      desc: 'RelayPrint oversees production milestones and delivery tracking between all parties.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <Container size="wide" className="space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Process"
            title="How RelayPrint works"
            description="A straightforward 4-stage process connecting print requirements with suitable production capacity."
          />
          <div className="shrink-0">
            <Link href="/how-it-works">
              <Button variant="outline" size="md" rightIcon={<ChevronRight className="w-4 h-4" />}>
                Full process details
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="space-y-3">
              <span className="text-3xl font-extrabold text-slate-900 block font-mono">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
