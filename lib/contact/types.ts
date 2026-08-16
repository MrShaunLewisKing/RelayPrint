export type EnquiryType =
  | 'general'
  | 'platform_partnership'
  | 'manufacturing_partnership'
  | 'commercial_print'
  | 'supplier_enquiry'
  | 'other';

export interface GeneralContactPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  enquiryType: EnquiryType;
  message: string;
  honeypot?: string; // spam protection field (must remain empty)
}

export interface ManufacturerPartnerPayload {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  website?: string;
  location: string;
  printTechnologies: string[];
  maxSheetSize?: string;
  finishingCapabilities: string[];
  turnaroundTimes?: string;
  certifications?: string;
  additionalNotes?: string;
  honeypot?: string;
}

export interface PlatformPartnerPayload {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  businessType: string;
  approxMonthlyJobs?: string;
  primaryPrintTypes: string[];
  integrationNeeds?: string;
  message: string;
  honeypot?: string;
}

export interface ServiceSubmissionResult {
  success: boolean;
  message: string;
  isDeliveredToCrmOrEmail: boolean;
  referenceId?: string;
  errors?: Record<string, string>;
}
