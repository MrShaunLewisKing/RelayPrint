import React from 'react';
import { Container } from '@/components/layout/Container';

export function PositioningStrip() {
  const pillars = [
    {
      title: 'Platforms & Brokers',
      desc: 'Connecting software platforms and commercial demand.'
    },
    {
      title: 'Commercial Jobs',
      desc: 'Booklets, promotional materials, and business stationery.'
    },
    {
      title: 'Manufacturing Network',
      desc: 'Partnering with independent UK print facilities.'
    },
    {
      title: 'Production Coordination',
      desc: 'Managing technical specifications and delivery schedules.'
    }
  ];

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200" aria-label="Key Pillars">
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">{pillar.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
