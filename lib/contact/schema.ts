import { GeneralContactPayload, ManufacturerPartnerPayload, PlatformPartnerPayload } from './types';

// Email validation helper
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// Sanitization helper
export function sanitizeString(input?: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // remove HTML angle brackets
    .slice(0, 3000); // sensible max length
}

// Validate General Contact form
export function validateGeneralContact(data: Partial<GeneralContactPayload>): {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized: GeneralContactPayload;
} {
  const errors: Record<string, string> = {};

  const name = sanitizeString(data.name);
  const company = sanitizeString(data.company);
  const email = (data.email || '').trim();
  const phone = sanitizeString(data.phone);
  const enquiryType = data.enquiryType || 'general';
  const message = sanitizeString(data.message);
  const honeypot = data.honeypot || '';

  if (!name || name.length < 2) {
    errors.name = 'Please provide your full name (minimum 2 characters).';
  }

  if (!company || company.length < 2) {
    errors.company = 'Please provide your company or organisation name.';
  }

  if (!email) {
    errors.email = 'Please provide a valid work email address.';
  } else if (!isValidEmail(email)) {
    errors.email = 'The email address provided is not in a valid format.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Please provide details about your enquiry (minimum 10 characters).';
  }

  // Check honeypot
  if (honeypot.length > 0) {
    errors.honeypot = 'Automated submission detected.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      name,
      company,
      email,
      phone,
      enquiryType,
      message,
      honeypot
    }
  };
}

// Validate Manufacturer Partner form
export function validateManufacturerPartner(data: Partial<ManufacturerPartnerPayload>): {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized: ManufacturerPartnerPayload;
} {
  const errors: Record<string, string> = {};

  const companyName = sanitizeString(data.companyName);
  const contactName = sanitizeString(data.contactName);
  const email = (data.email || '').trim();
  const phone = sanitizeString(data.phone);
  const website = sanitizeString(data.website);
  const location = sanitizeString(data.location);
  const printTechnologies = Array.isArray(data.printTechnologies) ? data.printTechnologies : [];
  const maxSheetSize = sanitizeString(data.maxSheetSize);
  const finishingCapabilities = Array.isArray(data.finishingCapabilities) ? data.finishingCapabilities : [];
  const turnaroundTimes = sanitizeString(data.turnaroundTimes);
  const certifications = sanitizeString(data.certifications);
  const additionalNotes = sanitizeString(data.additionalNotes);
  const honeypot = data.honeypot || '';

  if (!companyName || companyName.length < 2) {
    errors.companyName = 'Company name is required.';
  }

  if (!contactName || contactName.length < 2) {
    errors.contactName = 'Contact name is required.';
  }

  if (!email || !isValidEmail(email)) {
    errors.email = 'A valid business email address is required.';
  }

  if (!location || location.length < 2) {
    errors.location = 'Please state your production facility location (e.g. city/county).';
  }

  if (printTechnologies.length === 0) {
    errors.printTechnologies = 'Please select at least one printing technology operated.';
  }

  if (honeypot.length > 0) {
    errors.honeypot = 'Automated submission detected.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      companyName,
      contactName,
      email,
      phone,
      website,
      location,
      printTechnologies,
      maxSheetSize,
      finishingCapabilities,
      turnaroundTimes,
      certifications,
      additionalNotes,
      honeypot
    }
  };
}

// Validate Platform Partner form
export function validatePlatformPartner(data: Partial<PlatformPartnerPayload>): {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized: PlatformPartnerPayload;
} {
  const errors: Record<string, string> = {};

  const companyName = sanitizeString(data.companyName);
  const contactName = sanitizeString(data.contactName);
  const email = (data.email || '').trim();
  const phone = sanitizeString(data.phone);
  const businessType = sanitizeString(data.businessType) || 'platform';
  const approxMonthlyJobs = sanitizeString(data.approxMonthlyJobs);
  const primaryPrintTypes = Array.isArray(data.primaryPrintTypes) ? data.primaryPrintTypes : [];
  const integrationNeeds = sanitizeString(data.integrationNeeds);
  const message = sanitizeString(data.message);
  const honeypot = data.honeypot || '';

  if (!companyName || companyName.length < 2) {
    errors.companyName = 'Company name is required.';
  }

  if (!contactName || contactName.length < 2) {
    errors.contactName = 'Contact name is required.';
  }

  if (!email || !isValidEmail(email)) {
    errors.email = 'A valid corporate email address is required.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Please provide some context regarding your requirements (minimum 10 characters).';
  }

  if (honeypot.length > 0) {
    errors.honeypot = 'Automated submission detected.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      companyName,
      contactName,
      email,
      phone,
      businessType,
      approxMonthlyJobs,
      primaryPrintTypes,
      integrationNeeds,
      message,
      honeypot
    }
  };
}
