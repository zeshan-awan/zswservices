'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';

interface Shipment {
  id: string;
  trackingId: string;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  weight: string;
  serviceType: string;
  status: string;
  createdAt: any;
  estimatedDelivery: string;
}

export default function TrackingModal({ trackingId, onClose }: { trackingId: string; onClose: () => void }) {
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShipment = async () => {
      try {
        const q = query(
          collection(db, 'shipments'),
          where('trackingId', '==', trackingId)
        );
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
          setError('Tracking ID not found');
        } else {
          const doc = snapshot.docs[0];
          setShipment({ id: doc.id, ...doc.data() } as Shipment);
        }
      } catch (err) {
        setError('Error fetching shipment details');
      } finally {
        setLoading(false);
      }
    };

    fetchShipment();
  }, [trackingId]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'In Transit': return 'bg-blue-100 text-blue-700';
      case 'Out for Delivery': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Shipment Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4">Loading shipment details...</p>
            </div>
          )}

          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
              {error}
            </div>
          )}

          {shipment && !loading && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tracking ID</p>
                <p className="text-2xl font-bold text-primary">{shipment.trackingId}</p>
              </div>

              <div className={`p-4 rounded-lg font-bold text-center ${getStatusColor(shipment.status)}`}>
                Status: {shipment.status}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-lg mb-3">Sender Information</h3>
                  <p><strong>Name:</strong> {shipment.senderName}</p>
                  <p><strong>Phone:</strong> {shipment.senderPhone}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Recipient Information</h3>
                  <p><strong>Name:</strong> {shipment.recipientName}</p>
                  <p><strong>Phone:</strong> {shipment.recipientPhone}</p>
                  <p><strong>Address:</strong> {shipment.recipientAddress}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-lg mb-3">Shipment Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Weight</p>
                    <p className="font-semibold">{shipment.weight} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Service Type</p>
                    <p className="font-semibold">{shipment.serviceType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Date</p>
                    <p className="font-semibold">
                      {shipment.createdAt?.toDate?.().toLocaleDateString() || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Est. Delivery</p>
                    <p className="font-semibold">{shipment.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-sm text-green-700">
                ✓ Shipment information retrieved successfully
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
