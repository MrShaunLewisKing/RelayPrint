import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/lib/contact/service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    const result = await ContactService.submitGeneralContact(body, clientIp);

    if (!result.success && result.errors) {
      return NextResponse.json(result, { status: 400 });
    }

    if (!result.success) {
      return NextResponse.json(result, { status: 429 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('[API /api/contact] Error processing request:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'A server error occurred while processing your enquiry. Please try again later.',
        isDeliveredToCrmOrEmail: false
      },
      { status: 500 }
    );
  }
}
