'use client';

import React, { useState } from 'react';
import { FormField } from './FormField';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { Button } from '@/components/ui/Button';
import { Callout } from '@/components/ui/Callout';
import { GeneralContactPayload, EnquiryType, ServiceSubmissionResult } from '@/lib/contact/types';
import { validateGeneralContact } from '@/lib/contact/schema';
import { CheckCircle2, AlertCircle, Send, RotateCcw } from 'lucide-react';

export function GeneralContactForm() {
  const [formData, setFormData] = useState<GeneralContactPayload>({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: 'general',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<ServiceSubmissionResult | null>(null);

  const handleChange = (
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

    // Client-side validation check
    const validation = validateGeneralContact(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.sanitized)
      });

      const result: ServiceSubmissionResult = await response.json();
      setSubmissionResult(result);

      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          enquiryType: 'general',
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
        message: 'A network error occurred. Please check your connection and try again.',
        isDeliveredToCrmOrEmail: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-surface rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-xs">
      {/* Notice regarding B2B direct routing */}
      <div className="mb-6">
        <Callout variant="neutral" title="Direct Ordering Policy">
          PrintExchange is a B2B print-routing and production coordination company. This website does not accept direct consumer print orders or immediate artwork uploads.
        </Callout>
      </div>

      {submissionResult && submissionResult.success && (
        <div className="mb-8 p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold">Enquiry Received</h4>
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
                  Send another enquiry
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
            <h4 className="font-bold">Submission Error</h4>
            <p className="mt-0.5 text-red-900">{submissionResult.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field (hidden from genuine users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="gen-honeypot">Leave blank</label>
          <input
            type="text"
            id="gen-honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="gen-name"
            label="Full Name"
            required
            error={errors.name}
          >
            <Input
              id="gen-name"
              name="name"
              type="text"
              required
              placeholder="e.g. Eleanor Davies"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              autoComplete="name"
            />
          </FormField>

          <FormField
            id="gen-company"
            label="Company / Organisation"
            required
            error={errors.company}
          >
            <Input
              id="gen-company"
              name="company"
              type="text"
              required
              placeholder="e.g. Apex Media Group"
              value={formData.company}
              onChange={handleChange}
              error={Boolean(errors.company)}
              autoComplete="organization"
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="gen-email"
            label="Work Email Address"
            required
            error={errors.email}
          >
            <Input
              id="gen-email"
              name="email"
              type="email"
              required
              placeholder="name@company.co.uk"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              autoComplete="email"
            />
          </FormField>

          <FormField
            id="gen-phone"
            label="Phone Number"
            optional
            error={errors.phone}
          >
            <Input
              id="gen-phone"
              name="phone"
              type="tel"
              placeholder="+44 20 ..."
              value={formData.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              autoComplete="tel"
            />
          </FormField>
        </div>

        <FormField
          id="gen-enquiry-type"
          label="Enquiry Category"
          required
          error={errors.enquiryType}
        >
          <Select
            id="gen-enquiry-type"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
          >
            <option value="general">General Commercial Enquiry</option>
            <option value="platform_partnership">Platform / Broker Partnership</option>
            <option value="manufacturing_partnership">Manufacturing Partner Discussion</option>
            <option value="commercial_print">Commercial Print Routing</option>
            <option value="supplier_enquiry">Supplier / Materials Enquiry</option>
            <option value="other">Other Business Topic</option>
          </Select>
        </FormField>

        <FormField
          id="gen-message"
          label="Enquiry Details"
          required
          description="Please describe your requirements, typical formats, or proposed partnership scope."
          error={errors.message}
        >
          <Textarea
            id="gen-message"
            name="message"
            rows={5}
            required
            placeholder="Provide context regarding your business requirements..."
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
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
            Submit Enquiry
          </Button>
          <span className="text-xs text-subtle-foreground">
            We respond to verified B2B commercial enquiries during UK business hours.
          </span>
        </div>
      </form>
    </div>
  );
}
