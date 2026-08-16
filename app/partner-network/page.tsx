'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Callout } from '@/components/ui/Callout';
import { ManufacturerPartnerForm } from '@/components/forms/ManufacturerPartnerForm';
import { PlatformPartnerForm } from '@/components/forms/PlatformPartnerForm';
import { Factory, Building2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PartnerNetworkPage() {
  const [activeTab, setActiveTab] = useState<'manufacturers' | 'platforms'>('manufacturers');

  return (
    <div className="py-16 sm:py-20 bg-white">
      <Container size="default" className="space-y-16 sm:space-y-20">
        {/* Page Hero */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Partnerships
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Work with PrintExchange.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We build relationships with print platforms, commercial brokers, and independent UK print manufacturers.
          </p>
        </div>

        <Callout variant="neutral">
          PrintExchange operates a distributed routing and coordination network. Partner onboarding is subject to capability review and commercial agreement.
        </Callout>

        {/* Pathway Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('manufacturers')}
            className={cn(
              'p-6 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-4',
              activeTab === 'manufacturers'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            )}
          >
            <div
              className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
                activeTab === 'manufacturers' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
              )}
            >
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider block opacity-70 font-semibold">
                For Print Manufacturers
              </span>
              <span className="font-bold text-base block">I Have Print Capacity</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('platforms')}
            className={cn(
              'p-6 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-4',
              activeTab === 'platforms'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            )}
          >
            <div
              className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
                activeTab === 'platforms' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
              )}
            >
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider block opacity-70 font-semibold">
                For Platforms & Buyers
              </span>
              <span className="font-bold text-base block">I Need Print Capacity</span>
            </div>
          </button>
        </div>

        {/* Track 1: Print Manufacturers */}
        {activeTab === 'manufacturers' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Join our manufacturing network
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
                We partner with independent UK commercial print and finishing businesses to route matched print work suited to your machinery.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Work matched to your press specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Pre-flighted commercial job tickets</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Clear B2B settlement terms</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200">
              <ManufacturerPartnerForm />
            </div>
          </div>
        )}

        {/* Track 2: Platforms & Commercial Buyers */}
        {activeTab === 'platforms' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Route your print demand
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
                Connect your print marketplace, software platform, or procurement workflow to UK manufacturing capacity through a single coordination layer.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Single commercial coordination relationship</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Multi-supplier redundancy & overflow management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Broad format & finishing coverage</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200">
              <PlatformPartnerForm />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
