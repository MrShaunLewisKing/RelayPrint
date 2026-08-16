'use client';

import React, { useState } from 'react';
import { FormField } from './FormField';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { Button } from '@/components/ui/Button';
import { Callout } from '@/components/ui/Callout';
import { PlatformPartnerPayload, ServiceSubmissionResult } from '@/lib/contact/types';
import { validatePlatformPartner } from '@/lib/contact/schema';
import { CheckCircle2, AlertCircle, Send, RotateCcw } from 'lucide-react';

export function PlatformPartnerForm() {
  const [formData, setFormData] = useState<PlatformPartnerPayload>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'platform',
    approxMonthlyJobs: '',
    primaryPrintTypes: [],
    integrationNeeds: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<ServiceSubmissionResult | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    const validation = validatePlatformPartner(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/partners/platform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.sanitized)
      });

      const result: ServiceSubmissionResult = await response.json();
      setSubmissionResult(result);

      if (result.success) {
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          businessType: 'platform',
          approxMonthlyJobs: '',
          primaryPrintTypes: [],
          integrationNeeds: '',
          message: '',
          honeypot: ''
        });
        setErrors({});
      } else if (result.errors) {
        setErrors(result.errors);
      }
    } catch (err) {
      setSubmissionResult({
        success: false,
        message: 'A network error occurred. Please try again later.',
        isDeliveredToCrmOrEmail: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-surface rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-6">
        <Callout variant="neutral" title="Platform & Buyer Partnerships">
          We work with print software platforms, brokers, and commercial organisations seeking coordinated manufacturing routing.
        </Callout>
      </div>

      {submissionResult && submissionResult.success && (
        <div className="mb-8 p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold">Enquiry Registered</h4>
              <p className="text-sm mt-1 text-emerald-900 leading-relaxed">
                {submissionResult.message}
              </p>
              {submissionResult.referenceId && (
                <div className="mt-3 inline-block px-3 py-1 bg-white/80 rounded border border-emerald-300 font-mono text-xs font-semibold text-emerald-900">
                  Reference: {submissionResult.referenceId}
                </div>
              )}
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmissionResult(null)}
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Submit another enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {submissionResult && !submissionResult.success && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-bold">Notice</h4>
            <p className="mt-0.5 text-red-900">{submissionResult.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField id="plt-company" label="Organisation Name" required error={errors.companyName}>
            <Input
              id="plt-company"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              error={Boolean(errors.companyName)}
              placeholder="e.g. Enterprise Print Network"
            />
          </FormField>

          <FormField id="plt-contact" label="Contact Name" required error={errors.contactName}>
            <Input
              id="plt-contact"
              name="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
              error={Boolean(errors.contactName)}
              placeholder="e.g. Mark Roberts"
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField id="plt-email" label="Work Email" required error={errors.email}>
            <Input
              id="plt-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={Boolean(errors.email)}
              placeholder="m.roberts@network.com"
            />
          </FormField>

          <FormField id="plt-phone" label="Phone Number" optional error={errors.phone}>
            <Input
              id="plt-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+44 20 ..."
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField id="plt-type" label="Organisation Type" required>
            <Select
              id="plt-type"
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
            >
              <option value="platform">Print Marketplace / Web Platform</option>
              <option value="broker">Print Broker / Reseller</option>
              <option value="document_saas">Document & Output SaaS</option>
              <option value="enterprise">Enterprise Commercial Buyer</option>
              <option value="fulfilment">Mailing & Fulfilment Provider</option>
              <option value="other">Other Commercial Organisation</option>
            </Select>
          </FormField>

          <FormField
            id="plt-jobs"
            label="Estimated Monthly Job Volume"
            optional
            description="Approximate requirements profile."
          >
            <Input
              id="plt-jobs"
              name="approxMonthlyJobs"
              value={formData.approxMonthlyJobs}
              onChange={handleInputChange}
              placeholder="e.g. 50-200 jobs/month or ad-hoc overflow"
            />
          </FormField>
        </div>

        <FormField
          id="plt-message"
          label="Requirement Overview & Discussion Scope"
          required
          description="Outline your current print requirements, formats, or operational model."
          error={errors.message}
        >
          <Textarea
            id="plt-message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleInputChange}
            error={Boolean(errors.message)}
            placeholder="Describe your organisation's workflow and what print-routing or capacity requirements you are looking to coordinate..."
          />
        </FormField>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Button
            type="submit"
            size="lg"
            variant="primary"
            isLoading={isSubmitting}
            rightIcon={<Send className="w-4 h-4" />}
          >
            Discuss a partnership
          </Button>
          <span className="text-xs text-subtle-foreground">
            B2B partnership discussions are confidential.
          </span>
        </div>
      </form>
    </div>
  );
}
