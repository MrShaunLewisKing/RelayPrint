'use client';

import React, { useState } from 'react';
import { FormField } from './FormField';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Checkbox } from './Checkbox';
import { Button } from '@/components/ui/Button';
import { Callout } from '@/components/ui/Callout';
import { ManufacturerPartnerPayload, ServiceSubmissionResult } from '@/lib/contact/types';
import { validateManufacturerPartner } from '@/lib/contact/schema';
import { CheckCircle2, AlertCircle, Send, RotateCcw } from 'lucide-react';

const TECH_OPTIONS = [
  { id: 'sheetfed_litho', label: 'Sheetfed Litho' },
  { id: 'web_offset', label: 'Web Offset' },
  { id: 'digital_toner', label: 'Digital Toner Production' },
  { id: 'digital_inkjet', label: 'High-Speed Digital Inkjet' },
  { id: 'wide_format', label: 'Large / Wide Format' }
];

const FINISHING_OPTIONS = [
  { id: 'saddle_stitch', label: 'Saddle Stitching' },
  { id: 'perfect_bind', label: 'PUR / Perfect Binding' },
  { id: 'folding', label: 'Precision Machine Folding' },
  { id: 'lamination', label: 'Thermal / Film Lamination' },
  { id: 'die_cutting', label: 'Die-Cutting & Creasing' },
  { id: 'specialist_uv', label: 'Foil / Spot UV' }
];

export function ManufacturerPartnerForm() {
  const [formData, setFormData] = useState<ManufacturerPartnerPayload>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    printTechnologies: [],
    maxSheetSize: '',
    finishingCapabilities: [],
    turnaroundTimes: '',
    certifications: '',
    additionalNotes: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<ServiceSubmissionResult | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const handleCheckboxToggle = (field: 'printTechnologies' | 'finishingCapabilities', value: string) => {
    setFormData((prev) => {
      const currentList = prev[field];
      const nextList = currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];
      return { ...prev, [field]: nextList };
    });

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    const validation = validateManufacturerPartner(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/partners/manufacturer', {
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
          website: '',
          location: '',
          printTechnologies: [],
          maxSheetSize: '',
          finishingCapabilities: [],
          turnaroundTimes: '',
          certifications: '',
          additionalNotes: '',
          honeypot: ''
        });
        setErrors({});
      } else if (result.errors) {
        setErrors(result.errors);
      }
    } catch (err) {
      setSubmissionResult({
        success: false,
        message: 'A network error occurred while submitting your details. Please try again.',
        isDeliveredToCrmOrEmail: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-surface rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-6">
        <Callout variant="info" title="Manufacturing Partner Discussions">
          We invite established commercial print and finishing businesses to discuss partner arrangements. Partnership is subject to technical capability review and commercial agreement.
        </Callout>
      </div>

      {submissionResult && submissionResult.success && (
        <div className="mb-8 p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold">Partner Details Submitted</h4>
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
                  Submit another partner profile
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
            <h4 className="font-bold">Submission Notice</h4>
            <p className="mt-0.5 text-red-900">{submissionResult.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
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

        {/* Company & Contact Details */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground border-b border-border-subtle pb-2">
            1. Company & Facility Information
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField id="mfg-company" label="Company Name" required error={errors.companyName}>
              <Input
                id="mfg-company"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                error={Boolean(errors.companyName)}
                placeholder="e.g. Abbey Printing Ltd"
              />
            </FormField>

            <FormField id="mfg-contact" label="Contact Name" required error={errors.contactName}>
              <Input
                id="mfg-contact"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                error={Boolean(errors.contactName)}
                placeholder="e.g. John Henderson"
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField id="mfg-email" label="Business Email" required error={errors.email}>
              <Input
                id="mfg-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                placeholder="john@abbeyprinting.co.uk"
              />
            </FormField>

            <FormField id="mfg-phone" label="Phone Number" optional error={errors.phone}>
              <Input
                id="mfg-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+44 113 ..."
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField id="mfg-website" label="Website URL" optional error={errors.website}>
              <Input
                id="mfg-website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://..."
              />
            </FormField>

            <FormField
              id="mfg-location"
              label="Facility Location / City"
              required
              error={errors.location}
              description="Primary production facility location."
            >
              <Input
                id="mfg-location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                error={Boolean(errors.location)}
                placeholder="e.g. Leeds, West Yorkshire"
              />
            </FormField>
          </div>
        </div>

        {/* Equipment & Capabilities */}
        <div className="space-y-4 pt-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground border-b border-border-subtle pb-2">
            2. Production Technologies & Finishing
          </h4>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Printing Technologies Operated <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {TECH_OPTIONS.map((tech) => (
                <Checkbox
                  key={tech.id}
                  id={`tech-${tech.id}`}
                  label={tech.label}
                  checked={formData.printTechnologies.includes(tech.id)}
                  onChange={() => handleCheckboxToggle('printTechnologies', tech.id)}
                />
              ))}
            </div>
            {errors.printTechnologies && (
              <p className="text-xs text-red-600 font-medium mt-1.5" role="alert">
                {errors.printTechnologies}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <FormField
              id="mfg-sheet"
              label="Maximum Sheet / Format Size"
              optional
              description="e.g. B1, B2, SRA3"
            >
              <Input
                id="mfg-sheet"
                name="maxSheetSize"
                value={formData.maxSheetSize}
                onChange={handleInputChange}
                placeholder="e.g. B2 (520mm x 720mm)"
              />
            </FormField>

            <FormField
              id="mfg-turnaround"
              label="Typical Production Turnaround"
              optional
              description="Standard working day windows."
            >
              <Input
                id="mfg-turnaround"
                name="turnaroundTimes"
                value={formData.turnaroundTimes}
                onChange={handleInputChange}
                placeholder="e.g. 3-5 working days"
              />
            </FormField>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              In-House Finishing Capabilities
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FINISHING_OPTIONS.map((finish) => (
                <Checkbox
                  key={finish.id}
                  id={`finish-${finish.id}`}
                  label={finish.label}
                  checked={formData.finishingCapabilities.includes(finish.id)}
                  onChange={() => handleCheckboxToggle('finishingCapabilities', finish.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Accreditations & Notes */}
        <div className="space-y-4 pt-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground border-b border-border-subtle pb-2">
            3. Accreditations & Additional Notes
          </h4>

          <FormField
            id="mfg-certs"
            label="Industry Certifications"
            optional
            description="e.g. ISO 9001, ISO 14001, FSC, PEFC"
          >
            <Input
              id="mfg-certs"
              name="certifications"
              value={formData.certifications}
              onChange={handleInputChange}
              placeholder="e.g. ISO 9001:2015, FSC Chain of Custody"
            />
          </FormField>

          <FormField
            id="mfg-notes"
            label="Additional Equipment or Production Information"
            optional
          >
            <Textarea
              id="mfg-notes"
              name="additionalNotes"
              rows={3}
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Outline specific press models, shift patterns, or specialist finishing equipment..."
            />
          </FormField>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border-subtle">
          <Button
            type="submit"
            size="lg"
            variant="primary"
            isLoading={isSubmitting}
            rightIcon={<Send className="w-4 h-4" />}
          >
            Discuss becoming a production partner
          </Button>
          <span className="text-xs text-subtle-foreground">
            Enquiries are reviewed by our operations coordination team.
          </span>
        </div>
      </form>
    </div>
  );
}
