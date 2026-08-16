import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function PartnerCTA() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Side 1: Need Print Capacity */}
          <div className="p-8 sm:p-12 rounded-xl bg-slate-900 text-white flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Demand Side
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need print capacity?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect your platform, brokerage, or business workflow to a distributed network of UK manufacturing partners through a single coordination relationship.
              </p>
            </div>

            <div>
              <Link href="/partner-network">
                <Button variant="dark" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Discuss a partnership
                </Button>
              </Link>
            </div>
          </div>

          {/* Side 2: Have Print Capacity */}
          <div className="p-8 sm:p-12 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Supply Side
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Have print capacity?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are actively building relationships with reliable UK commercial print and finishing businesses. Discuss joining our production network.
              </p>
            </div>

            <div>
              <Link href="/partner-network">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Discuss becoming a partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
