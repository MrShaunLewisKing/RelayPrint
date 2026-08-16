import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function WhyRelayPrint() {
  const benefits = [
    {
      num: '01',
      title: 'Flexible Production Capacity',
      description:
        'Requirements can be routed according to verified available capability and production schedules.'
    },
    {
      num: '02',
      title: 'Distributed Supplier Network',
      description:
        'Access a network of independent manufacturing partners rather than relying on a single facility.'
    },
    {
      num: '03',
      title: 'Capability Matching',
      description:
        'Individual production facilities provide specialized strengths aligned with appropriate machinery.'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
      <Container size="wide" className="space-y-12">
        <SectionHeading
          dark
          eyebrow="Advantages"
          title="Why work with a routing coordinator?"
          description="RelayPrint connects commercial requirements with appropriate production capacity without single-plant constraints."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-2xl font-bold text-indigo-400 font-mono">{b.num}</span>
              <h3 className="text-lg font-bold text-white">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
