import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

export function AsymmetricCapabilitiesSection() {
  return (
    <section className="py-28 sm:py-36 bg-white border-b border-[#E7E8ED]">
      <Container size="wide" className="max-w-[1380px] space-y-24">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5747E8]">
            Capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#101525] leading-[1.08]">
            Not every job<br />needs the same press.
          </h2>
          <p className="text-lg sm:text-xl text-[#5F6574] leading-relaxed max-w-2xl">
            RelayPrint helps route different print requirements toward suitable manufacturing capability.
          </p>
        </div>

        {/* Editorial Spreads with Professional Pre-Built Vector Illustrations & Thin Dividers */}
        <div className="space-y-24">
          
          {/* ITEM 1: Commercial documents (Left Text 45% / Right Vector 55%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#101525] tracking-tight leading-[1.05]">
                Commercial<br />documents
              </h3>
              <p className="text-base sm:text-lg text-[#5F6574] leading-relaxed max-w-md">
                Reports, booklets, manuals and other multi-page work.
              </p>
            </div>

            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[300px]">
              {/* Faint A4 Watermark */}
              <div className="absolute font-black text-slate-100 text-[140px] tracking-tighter select-none pointer-events-none -z-10 leading-none">
                A4
              </div>
              <div className="relative w-full max-w-[380px] aspect-[4/3]">
                <Image
                  src="/illustrations/commercial-documents.svg"
                  alt="Commercial Documents and Multi-Page Print"
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#E7E8ED]" />

          {/* ITEM 2: Promotional print (Reversed: Left Vector / Right Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 flex items-center justify-center min-h-[300px]">
              <div className="relative w-full max-w-[380px] aspect-[4/3]">
                <Image
                  src="/illustrations/promotional-print.svg"
                  alt="Promotional Print, Leaflets and Brochures"
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#101525] tracking-tight leading-[1.05]">
                Promotional<br />print
              </h3>
              <p className="text-base sm:text-lg text-[#5F6574] leading-relaxed max-w-md">
                Flyers, leaflets and campaign material.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-[#E7E8ED]" />

          {/* ITEM 3: Business stationery (Left Text / Right Vector) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#101525] tracking-tight leading-[1.05]">
                Business<br />stationery
              </h3>
              <p className="text-base sm:text-lg text-[#5F6574] leading-relaxed max-w-md">
                Letterheads, cards and everyday branded print.
              </p>
            </div>

            <div className="lg:col-span-7 flex items-center justify-center min-h-[300px]">
              <div className="relative w-full max-w-[340px] aspect-[3/4]">
                <Image
                  src="/illustrations/stationery.svg"
                  alt="Corporate Business Stationery and Cards"
                  width={450}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#E7E8ED]" />

          {/* ITEM 4: Specialist requirements (Reversed: Left Vector / Right Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 flex items-center justify-center min-h-[300px]">
              <div className="relative w-full max-w-[380px] aspect-[4/3]">
                <Image
                  src="/illustrations/specialist-finishing.svg"
                  alt="Specialist Finishing and Post-Press Capabilities"
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#101525] tracking-tight leading-[1.05]">
                Specialist<br />requirements
              </h3>
              <p className="text-base sm:text-lg text-[#5F6574] leading-relaxed max-w-md">
                Print jobs involving additional finishing or less-standard production needs.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Link */}
        <div className="pt-4">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-base font-bold text-[#101525] hover:text-[#5747E8] transition-colors group"
          >
            <span>Explore all capabilities</span>
            <ArrowRight className="w-4 h-4 text-[#5747E8] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
