import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PrintExchange | Why PrintExchange Exists',
  description:
    'Learn about PrintExchange’s mission to connect print demand with independent UK manufacturing partners through distributed production coordination.'
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20 bg-white">
      <Container size="default" className="space-y-16 sm:space-y-20">
        {/* Page Hero */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Why PrintExchange exists.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            One production facility cannot suit every print specification. PrintExchange acts as an operational coordination layer, connecting commercial print demand with specialized manufacturing partners across the UK.
          </p>
        </div>

        {/* Distributed Model Core Concept */}
        <div className="p-8 sm:p-12 rounded-xl bg-slate-900 text-white space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            One requirement. More than one way to produce it.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Individual print facilities are optimized for specific disciplines—such as high-speed sheetfed litho, digital short runs, or specialist document finishing. Rather than forcing every varied job onto a single factory setup, PrintExchange routes each requirement to a facility naturally suited to the work.
          </p>
        </div>

        {/* What PrintExchange Does vs Doesn't Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What We Do */}
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
              <h2 className="text-lg font-bold text-foreground">What PrintExchange does</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Receives commercial print jobs from software platforms, brokers, and businesses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Matches job specifications to qualified independent manufacturing partners.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Coordinates technical parameters, schedules, and delivery logistics.</span>
              </li>
            </ul>
          </div>

          {/* What We Don't Do */}
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-slate-700">
              <XCircle className="w-5 h-5" />
              <h2 className="text-lg font-bold text-foreground">What PrintExchange doesn&apos;t do</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>We do not operate as an online consumer print store or web-to-print shop.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>We do not own or operate physical printing machinery or factories.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>We do not replace or compete with independent print manufacturers.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground">Connect with PrintExchange</h3>
            <p className="text-sm text-slate-600 mt-1">
              Speak with our coordination team regarding platform partnerships or joining our manufacturing network.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Contact PrintExchange
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
