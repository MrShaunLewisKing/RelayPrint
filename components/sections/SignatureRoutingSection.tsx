import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TactileRoutingVisual } from '@/components/graphics/TactileRoutingVisual';

export function SignatureRoutingSection() {
  return (
    <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
      <Container size="wide" className="space-y-12">
        <SectionHeading
          dark
          eyebrow="Routing Engine"
          title="One requirement. The right production route."
          description="RelayPrint sits between commercial demand sources and qualified manufacturing partners, directing work according to machine capabilities, substrate suitability, and turnaround targets."
        />

        <TactileRoutingVisual />
      </Container>
    </section>
  );
}
