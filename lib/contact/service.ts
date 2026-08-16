import {
  GeneralContactPayload,
  ManufacturerPartnerPayload,
  PlatformPartnerPayload,
  ServiceSubmissionResult
} from './types';
import {
  validateGeneralContact,
  validateManufacturerPartner,
  validatePlatformPartner
} from './schema';

// Simple in-memory rate limiter per IP/client identifier
const submissionTimestamps = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 6;

function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(clientId) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissionTimestamps.set(clientId, recent);
  return recent.length <= MAX_SUBMISSIONS_PER_WINDOW;
}

// Generate an audit reference ID
function generateReferenceId(prefix: string): string {
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}-${Date.now().toString().slice(-4)}-${rand}`;
}

export class ContactService {
  /**
   * Process a General Contact Form submission
   */
  static async submitGeneralContact(
    payload: Partial<GeneralContactPayload>,
    clientIp: string = 'unknown'
  ): Promise<ServiceSubmissionResult> {
    if (!checkRateLimit(clientIp)) {
      return {
        success: false,
        message: 'Too many submissions received. Please wait a few minutes before trying again.',
        isDeliveredToCrmOrEmail: false
      };
    }

    const { isValid, errors, sanitized } = validateGeneralContact(payload);
    if (!isValid) {
      return {
        success: false,
        message: 'Validation failed. Please correct the highlighted fields.',
        isDeliveredToCrmOrEmail: false,
        errors
      };
    }

    const referenceId = generateReferenceId('GEN');

    // Check if real SMTP / CRM webhook is configured
    const crmWebhook = process.env.CONTACT_CRM_WEBHOOK_URL;
    const isConfigured = Boolean(crmWebhook);

    if (isConfigured && crmWebhook) {
      try {
        // Real external POST
        await fetch(crmWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ referenceId, type: 'general_contact', payload: sanitized })
        });

        return {
          success: true,
          referenceId,
          message: 'Your enquiry has been received and routed to our team.',
          isDeliveredToCrmOrEmail: true
        };
      } catch (err) {
        console.error('[ContactService] Failed to deliver to external webhook:', err);
        return {
          success: true,
          referenceId,
          message:
            'Enquiry validated, but external dispatch failed. Our operations team will review server logs.',
          isDeliveredToCrmOrEmail: false
        };
      }
    }

    // Unconfigured environment (development / demo / initial deployment)
    console.info('[ContactService] General contact validated (Transport unconfigured):', {
      referenceId,
      sanitized
    });

    return {
      success: true,
      referenceId,
      message:
        'Enquiry validated successfully. (Development mode: CRM/Email transport is unconfigured; submission logged to server).',
      isDeliveredToCrmOrEmail: false
    };
  }

  /**
   * Process a Manufacturer Partner Application
   */
  static async submitManufacturerPartner(
    payload: Partial<ManufacturerPartnerPayload>,
    clientIp: string = 'unknown'
  ): Promise<ServiceSubmissionResult> {
    if (!checkRateLimit(clientIp)) {
      return {
        success: false,
        message: 'Too many submissions received. Please wait a few minutes before trying again.',
        isDeliveredToCrmOrEmail: false
      };
    }

    const { isValid, errors, sanitized } = validateManufacturerPartner(payload);
    if (!isValid) {
      return {
        success: false,
        message: 'Validation failed. Please correct the highlighted fields.',
        isDeliveredToCrmOrEmail: false,
        errors
      };
    }

    const referenceId = generateReferenceId('MFG');
    const crmWebhook = process.env.PARTNER_CRM_WEBHOOK_URL;
    const isConfigured = Boolean(crmWebhook);

    if (isConfigured && crmWebhook) {
      try {
        await fetch(crmWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ referenceId, type: 'manufacturer_partner', payload: sanitized })
        });

        return {
          success: true,
          referenceId,
          message: 'Your partner enquiry has been submitted for commercial review.',
          isDeliveredToCrmOrEmail: true
        };
      } catch (err) {
        console.error('[ContactService] Failed to dispatch manufacturer enquiry:', err);
        return {
          success: true,
          referenceId,
          message: 'Enquiry validated, but external dispatch encountered an issue.',
          isDeliveredToCrmOrEmail: false
        };
      }
    }

    console.info('[ContactService] Manufacturer enquiry validated (Transport unconfigured):', {
      referenceId,
      sanitized
    });

    return {
      success: true,
      referenceId,
      message:
        'Manufacturer details validated successfully. (Development mode: CRM/Email transport is unconfigured; submission logged to server).',
      isDeliveredToCrmOrEmail: false
    };
  }

  /**
   * Process a Platform / Buyer Partner Inquiry
   */
  static async submitPlatformPartner(
    payload: Partial<PlatformPartnerPayload>,
    clientIp: string = 'unknown'
  ): Promise<ServiceSubmissionResult> {
    if (!checkRateLimit(clientIp)) {
      return {
        success: false,
        message: 'Too many submissions received. Please wait a few minutes before trying again.',
        isDeliveredToCrmOrEmail: false
      };
    }

    const { isValid, errors, sanitized } = validatePlatformPartner(payload);
    if (!isValid) {
      return {
        success: false,
        message: 'Validation failed. Please correct the highlighted fields.',
        isDeliveredToCrmOrEmail: false,
        errors
      };
    }

    const referenceId = generateReferenceId('PLT');
    const crmWebhook = process.env.PARTNER_CRM_WEBHOOK_URL;
    const isConfigured = Boolean(crmWebhook);

    if (isConfigured && crmWebhook) {
      try {
        await fetch(crmWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ referenceId, type: 'platform_partner', payload: sanitized })
        });

        return {
          success: true,
          referenceId,
          message: 'Your platform partnership enquiry has been submitted.',
          isDeliveredToCrmOrEmail: true
        };
      } catch (err) {
        console.error('[ContactService] Failed to dispatch platform partner enquiry:', err);
        return {
          success: true,
          referenceId,
          message: 'Enquiry validated, but external dispatch encountered an issue.',
          isDeliveredToCrmOrEmail: false
        };
      }
    }

    console.info('[ContactService] Platform enquiry validated (Transport unconfigured):', {
      referenceId,
      sanitized
    });

    return {
      success: true,
      referenceId,
      message:
        'Platform enquiry validated successfully. (Development mode: CRM/Email transport is unconfigured; submission logged to server).',
      isDeliveredToCrmOrEmail: false
    };
  }
}
