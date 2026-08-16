import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Callout } from '@/components/ui/Callout';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Print Capabilities | PrintExchange Network',
  description:
    'Explore the commercial print formats, document types, and finishing options supported across PrintExchange’s manufacturing network.'
};

export default function CapabilitiesPage() {
  const capabilities = [
    {
      title: 'Commercial documents',
      desc: 'Reports, manuals, booklets, and multi-page technical documentation.'
    },
    {
      title: 'Promotional print',
      desc: 'Leaflets, flyers, brochures, and supporting marketing collateral.'
    },
    {
      title: 'Business stationery',
      desc: 'Letterheads, compliment slips, presentation folders, and corporate identity print.'
    },
    {
      title: 'Direct mail',
      desc: 'Printed components used within mailing, notifications, and campaign workflows.'
    },
    {
      title: 'Finishing options',
      desc: 'Lamination, precision folding, saddle stitching, creasing, and custom binding through capable partners.'
    }
  ];

  return (
    <div className="py-16 sm:py-20 bg-white">
      <Container size="default" className="space-y-16 sm:space-y-20">
        {/* Page Hero */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Network Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Print capabilities.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our distributed network accommodates diverse commercial print categories matched to independent manufacturing facilities.
          </p>
        </div>

        <Callout variant="neutral">
          Capabilities represent production categories supported across our independent partner network. Availability and specifications depend on partner machinery and schedule.
        </Callout>

        {/* Clean Editorial List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item) => (
            <div key={item.title} className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Custom Specifications Note */}
        <div className="p-8 sm:p-10 rounded-xl bg-slate-900 text-white space-y-4">
          <h2 className="text-xl font-bold text-white">Custom Specifications</h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            When requirements fall outside standard digital or sheetfed parameters, our team reviews the job ticket to identify specialist partner capacity within the network.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="dark" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Discuss a requirement
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
