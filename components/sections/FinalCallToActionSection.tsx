import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function FinalCallToActionSection() {
  return (
    <section className="py-20 sm:py-28 bg-indigo-950 text-white border-b border-indigo-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10 text-center space-y-8">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Have a print requirement or partnership to discuss?
        </h2>

        <p className="text-base sm:text-xl text-indigo-200 max-w-xl mx-auto leading-relaxed">
          Our team is available to discuss commercial print routing, platform integrations, or joining our manufacturing network.
        </p>

        <div className="pt-2">
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-indigo-950 hover:bg-slate-100 font-extrabold text-base px-8 py-4 shadow-xl"
              rightIcon={<ArrowRight className="w-5 h-5 text-indigo-700" />}
            >
              Talk to RelayPrint
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
