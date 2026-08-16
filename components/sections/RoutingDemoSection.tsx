import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExampleRoutingFlow } from '@/components/interactive/ExampleRoutingFlow';

export function RoutingDemoSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <Container size="wide" className="space-y-12">
        <SectionHeading
          eyebrow="Interactive Simulation"
          title="See how a requirement may be routed"
          description="Explore illustrative examples of how job specifications dictate technical assessment and production partner selection."
        />

        <ExampleRoutingFlow />
      </Container>
    </section>
  );
}
