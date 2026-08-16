import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CapabilitiesPreview() {
  const categories = [
    {
      title: 'Commercial Documents',
      desc: 'Reports, manuals, booklets, and multi-page technical documentation.'
    },
    {
      title: 'Promotional Print',
      desc: 'Leaflets, flyers, brochures, and supporting marketing material.'
    },
    {
      title: 'Business Stationery',
      desc: 'Letterheads, presentation folders, and everyday corporate print.'
    },
    {
      title: 'Specialist Requirements',
      desc: 'Finishing options including lamination, precision folding, and custom binding.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container size="wide" className="space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="What can be routed"
            description="Our manufacturing partner network supports diverse commercial print formats and finishes."
          />
          <div className="shrink-0">
            <Link href="/capabilities">
              <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View all capabilities
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-lg bg-white border border-slate-200 space-y-2">
              <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
