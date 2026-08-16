import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Callout } from '@/components/ui/Callout';
import { PaperSheet } from '@/components/ui/PaperSheet';
import { PrintRegistrationMarks } from '@/components/ui/PrintRegistrationMarks';

export const metadata: Metadata = {
  title: 'Draft Privacy Policy | Legal Review',
  description: 'Draft Privacy Policy for PrintExchange, subject to formal legal confirmation and review.'
};

export default function PrivacyPage() {
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
            Privacy Policy (Draft)
          </h1>
          <p className="font-mono text-3xs text-slate-500">
            [ STATUS: DRAFT FOR CORPORATE LEGAL CONFIRMATION • LAST REVISION: 16 AUGUST 2026 ]
          </p>
        </div>

        <Callout variant="warning" title="Draft Template Notice">
          This document is a structured draft prepared for formal corporate and legal review. Explicit placeholders (e.g. <code>[Company Legal Entity Name]</code>) are marked and must be replaced prior to commercial live deployment.
        </Callout>

        {/* Legal Text Body inside PaperSheet */}
        <PaperSheet cropMarks ticketLabel="LEGAL / PRIVACY-DRAFT" className="border-slate-300 shadow-paper">
          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">1. Introduction & Data Controller</h2>
              <p>
                This Privacy Policy explains how <strong>[Company Legal Entity Name]</strong> (trading as <strong>PrintExchange</strong>, referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, processes, and protects personal data when individuals or business representatives visit our website or communicate with our operations team.
              </p>
              <p>
                <strong>Data Controller Information:</strong><br />
                Entity Name: <code>[Company Legal Entity Name]</code><br />
                Company Registration Number: <code>[Company Registration Number]</code><br />
                Registered Office Address: <code>[Registered Address, United Kingdom]</code><br />
                Privacy Contact Email: <code>[privacy@printexchange.co.uk]</code>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">2. Nature of Data Collected</h2>
              <p>
                As a B2B print reseller and production coordination company, we collect minimal personal data, primarily consisting of business contact information:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Commercial Contact Data:</strong> Name, work email address, business telephone number, company name, and job title provided via our contact or partner intake forms.</li>
                <li><strong>Job Specification Data:</strong> Technical parameters, print quantities, and delivery destination details submitted for quotation or routing coordination.</li>
                <li><strong>Technical Logs:</strong> Server logs including IP address, browser user-agent, and submission timestamps for security, audit, and rate-limiting purposes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">3. Lawful Bases for Processing</h2>
              <p>
                We process personal and commercial data under the following lawful bases recognized under UK data protection legislation:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Legitimate Interests:</strong> To respond to commercial B2B enquiries, manage partnership discussions, and maintain network security.</li>
                <li><strong>Contractual Necessity:</strong> Where processing is required to evaluate, prepare, or execute commercial print coordination agreements.</li>
                <li><strong>Legal Obligation:</strong> For maintaining accounting, tax, and commercial compliance records.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">4. Disclosure to Manufacturing Partners</h2>
              <p>
                To fulfill print-routing coordination services, relevant job specification parameters and delivery destination instructions are shared with independent manufacturing and courier partners within our distributed network. We do not sell personal or commercial contact information to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">5. Data Retention</h2>
              <p>
                General enquiry records are retained for a period of <code>[12–24 months]</code> unless an ongoing commercial partnership or contract is established, in which case records are retained for the statutory period of <code>[6–7 years]</code> for corporate accounting compliance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">6. Your Data Rights</h2>
              <p>
                Under UK data protection law, individuals have rights including access to their data, rectification of inaccurate information, erasure, and restriction of processing. Enquiries regarding data rights should be directed to <code>[privacy@printexchange.co.uk]</code>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">7. Updates to This Policy</h2>
              <p>
                We may update this draft policy as our operational processes or legal requirements evolve. Any modifications will be posted directly to this page with an updated revision date.
              </p>
            </section>
          </div>
        </PaperSheet>
      </Container>
    </div>
  );
}
