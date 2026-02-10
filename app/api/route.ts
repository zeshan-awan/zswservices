import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ 
    message: 'ZWS Courier API v1',
    endpoints: {
      track: '/api/track?trackingId=XXXXX',
      contacts: '/api/contacts',
      newsletter: '/api/newsletter'
    }
  });
}
