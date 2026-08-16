import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Callout } from '@/components/ui/Callout';
import { PaperSheet } from '@/components/ui/PaperSheet';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';

export const metadata: Metadata = {
  title: 'Draft Website Terms | Legal Review',
  description: 'Draft Website Terms of Use for PrintExchange, subject to formal legal review and confirmation.'
};

export default function TermsPage() {
  return (
    <div className="py-14 sm:py-20 lg:py-24 bg-white">
      <Container size="narrow" className="space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Badge variant="warning" size="md">
              DRAFT DOCUMENT — FOR LEGAL REVIEW
            </Badge>
            <PrintRegistrationMarks variant="dots" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Website Terms of Use (Draft)
          </h1>
          <p className="font-mono text-3xs text-slate-500">
            [ STATUS: DRAFT FOR CORPORATE LEGAL CONFIRMATION • LAST REVISION: 16 AUGUST 2026 ]
          </p>
        </div>

        <Callout variant="warning" title="Draft Template Notice">
          These website terms are a structured draft prepared for formal corporate and legal review. Specific corporate entities and statutory details marked in brackets (e.g. <code>[Company Legal Entity Name]</code>) will be populated upon company formation finalisation.
        </Callout>

        {/* Terms Body inside PaperSheet */}
        <PaperSheet cropMarks ticketLabel="LEGAL / TERMS-DRAFT" className="border-slate-300 shadow-paper">
          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you agree to be bound by these Website Terms of Use. If you do not agree with any part of these terms, you should discontinue using the site immediately.
              </p>
              <p>
                This website is operated by <strong>[Company Legal Entity Name]</strong> (trading as <strong>PrintExchange</strong>).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">2. Informational Purpose & Non-Ecommerce Nature</h2>
              <p>
                This public website is published solely for informational and B2B introductory purposes to explain PrintExchange’s print-routing and production coordination model.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>No Online Ordering:</strong> This website does not offer consumer checkout, shopping carts, direct artwork uploading for binding print orders, or instant commercial contracts.</li>
                <li><strong>Illustrative Examples:</strong> Diagrams, sample workflows, and capability descriptions are illustrative. Actual job routing is governed by separate commercial agreements and job tickets.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">3. Commercial & Partner Relationships</h2>
              <p>
                Submission of an enquiry form—whether as a print platform, broker, commercial buyer, or print manufacturer—does not create a binding contract, guaranteed partnership, or guaranteed volume allocation. All commercial engagements require bilateral written agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">4. Intellectual Property</h2>
              <p>
                All trademarks, text, graphics, diagrams, logos, and software code on this website are the intellectual property of <strong>[Company Legal Entity Name]</strong> or its licensors and are protected by applicable UK and international intellectual property laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">5. Disclaimer of Warranties & Limitation of Liability</h2>
              <p>
                While we endeavor to keep the website information accurate and up to date, the website is provided &quot;as is&quot; without warranties of any kind. To the fullest extent permitted by English law, PrintExchange excludes all liability for any direct, indirect, or consequential loss arising from the use of this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">6. Governing Law & Jurisdiction</h2>
              <p>
                These Terms of Use and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>, subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">7. Contact Information</h2>
              <p>
                Enquiries regarding these draft terms should be directed to <code>[legal@printexchange.co.uk]</code>.
              </p>
            </section>
          </div>
        </PaperSheet>
      </Container>
    </div>
  );
}
