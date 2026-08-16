import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { GeneralContactForm } from '@/components/forms/GeneralContactForm';
import { Callout } from '@/components/ui/Callout';

export const metadata: Metadata = {
  title: 'Contact RelayPrint | B2B Enquiries & Partnerships',
  description:
    'Contact the RelayPrint team to discuss commercial print routing, platform integrations, or becoming a print manufacturing partner.'
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20 bg-white">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Contact RelayPrint.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Speak with our team regarding B2B print routing, software integrations, or joining our manufacturing partner network.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Primary Enquiry Types
              </h2>

              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-slate-900 block">Platform & Broker Partnerships</strong>
                  <span className="text-slate-600">Software integrations, multi-site fulfillment, and volume routing.</span>
                </div>

                <div>
                  <strong className="text-slate-900 block">Manufacturing Partners</strong>
                  <span className="text-slate-600">Discussions with independent commercial print & finishing facilities.</span>
                </div>

                <div>
                  <strong className="text-slate-900 block">Commercial Print Routing</strong>
                  <span className="text-slate-600">Reports, multi-page booklets, marketing collateral, and stationery.</span>
                </div>
              </div>
            </div>

            <Callout variant="neutral">
              RelayPrint coordinates production for commercial partners. We do not accept consumer orders on this website.
            </Callout>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200">
            <GeneralContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
