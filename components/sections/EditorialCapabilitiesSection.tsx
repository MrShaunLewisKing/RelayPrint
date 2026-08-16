import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Layers, FileText, Bookmark, Scissors } from 'lucide-react';

export function EditorialCapabilitiesSection() {
  const items = [
    {
      title: 'Commercial Documents',
      desc: 'Reports, manuals, booklets, and multi-page technical documentation.',
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      tag: 'Multi-Page & Saddle-Stitch'
    },
    {
      title: 'Promotional Print',
      desc: 'Leaflets, flyers, brochures, and supporting campaign marketing collateral.',
      icon: <Layers className="w-5 h-5 text-cyan-600" />,
      tag: 'Folded & Flat Formats'
    },
    {
      title: 'Business Stationery',
      desc: 'Letterheads, presentation folders, and everyday corporate identity materials.',
      icon: <Bookmark className="w-5 h-5 text-pink-600" />,
      tag: 'Corporate Stocks'
    },
    {
      title: 'Specialist Finishing',
      desc: 'Finishing options including lamination, precision creasing, and custom binding.',
      icon: <Scissors className="w-5 h-5 text-amber-600" />,
      tag: 'Post-Press & Die-Cut'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <Container size="wide" className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Production Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Different jobs.{' '}
              <span className="text-brand block sm:inline">Different production routes.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our distributed manufacturing network accommodates diverse print categories and specialist finishes.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/capabilities">
              <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore capabilities
              </Button>
            </Link>
          </div>
        </div>

        {/* 2x2 Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between space-y-6 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  {item.tag}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
