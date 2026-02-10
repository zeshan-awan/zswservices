import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const trackingId = searchParams.get('trackingId');

    if (!trackingId) {
      return NextResponse.json(
        { error: 'Tracking ID is required' },
        { status: 400 }
      );
    }

    const q = query(
      collection(db, 'shipments'),
      where('trackingId', '==', trackingId)
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return NextResponse.json(
        { error: 'Shipment not found' },
        { status: 404 }
      );
    }

    const shipment = snapshot.docs[0].data();
    return NextResponse.json({ success: true, data: shipment });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch shipment' },
      { status: 500 }
    );
  }
}
