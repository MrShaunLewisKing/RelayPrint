import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Building2, Factory } from 'lucide-react';

export function SplitPartnerSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <Container size="wide" className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Two-Sided Network
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Connecting demand with capacity
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            RelayPrint acts as the operational bridge between commercial print volume and specialized manufacturers.
          </p>
        </div>

        {/* Central Model Flow Indicator */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 pb-2">
          <span>Print Demand</span>
          <ArrowRight className="w-4 h-4 text-brand" />
          <span className="text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
            RelayPrint
          </span>
          <ArrowRight className="w-4 h-4 text-brand" />
          <span>Print Capacity</span>
        </div>

        {/* Split Left/Right Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left: Need Print Capacity (Dark) */}
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-950 text-white flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  For Platforms, Brokers & Buyers
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Need print capacity?
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Connect your software platform, marketplace, or procurement workflow to a distributed UK manufacturing network through a single coordination relationship.
                </p>
              </div>
            </div>

            <div>
              <Link href="/partner-network">
                <Button variant="dark" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Discuss a partnership
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Have Print Capacity (Light) */}
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                <Factory className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  For Print Manufacturers
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Have print capacity?
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We are actively building relationships with reliable UK commercial print and finishing businesses. Discuss joining our production network.
                </p>
              </div>
            </div>

            <div>
              <Link href="/partner-network">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Become a production partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
