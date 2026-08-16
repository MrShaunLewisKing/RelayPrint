import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { ArrowRight, GitFork } from 'lucide-react';

export function OneNetworkTwoSidesSection() {
  return (
    <section className="py-28 sm:py-36 bg-[#F5F5F8] border-b border-[#E7E8ED]" aria-label="Print Demand and Capacity Model">
      <Container size="wide" className="max-w-[1380px] space-y-24">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#101525] leading-[1.08]">
            Print demand meets<br />print capacity.
          </h2>
          <p className="text-lg sm:text-xl text-[#5F6574] leading-relaxed">
            RelayPrint sits between the two.
          </p>
        </div>

        {/* Cohesive Diagram Flow: Demand -> RelayPrint -> Capacity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT THIRD: Demand */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#101525] tracking-tight leading-[1.05]">
                Need<br />print capacity?
              </h3>
              <p className="text-base text-[#5F6574] leading-relaxed">
                Platforms, brokers and commercial buyers.
              </p>
            </div>

            <div>
              <Link
                href="/partner-network"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[9px] bg-[#080D1D] text-white text-base font-bold hover:bg-[#1a233d] transition-colors shadow-sm"
              >
                Discuss a partnership
              </Link>
            </div>
          </div>

          {/* CENTRE THIRD: RelayPrint Routing Nexus with Matching Vector Visual */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center gap-6 py-6">
            <div className="relative w-48 h-36 flex items-center justify-center">
              <Image
                src="/illustrations/partner-network.svg"
                alt="Partner Network and Routing Coordination"
                width={300}
                height={225}
                className="w-full h-auto object-contain opacity-90"
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <ArrowRight className="w-6 h-6 text-[#5747E8] hidden sm:block shrink-0" />
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#5747E8] text-white flex items-center justify-center shadow-md">
                  <GitFork className="w-6 h-6 rotate-90" />
                </div>
                <div className="text-lg font-black tracking-tight text-[#101525]">
                  Relay<span className="text-[#5747E8]">Print</span>
                </div>
                <div className="text-[10px] font-extrabold tracking-widest uppercase text-[#5F6574]">
                  ROUTING & COORDINATION
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-[#5747E8] hidden sm:block shrink-0" />
            </div>
          </div>

          {/* RIGHT THIRD: Supply */}
          <div className="lg:col-span-4 space-y-6 text-left lg:text-right">
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-[#101525] tracking-tight leading-[1.05]">
                Have<br />print capacity?
              </h3>
              <p className="text-base text-[#5F6574] leading-relaxed">
                Commercial print and finishing businesses.
              </p>
            </div>

            <div className="lg:flex lg:justify-end">
              <Link
                href="/partner-network"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[9px] bg-[#5747E8] text-white text-base font-bold hover:bg-[#4637d4] transition-colors shadow-sm"
              >
                Join the network
              </Link>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
