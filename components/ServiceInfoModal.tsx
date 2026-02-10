'use client';

import React from 'react';

interface Props {
  open: boolean;
  service?: string;
  onClose: () => void;
}

export default function ServiceInfoModal({ open, service, onClose }: Props) {
  if (!open) return null;

  const contentMap: Record<string, { title: string; body: string }> = {
    'Same Day Delivery': {
      title: 'Same Day Delivery',
      body: 'Get your shipment delivered the same day within eligible cities. Availability and charges vary by route.',
    },
    'Special Handling': {
      title: 'Special Handling',
      body: 'Special handling covers fragile or sensitive items. Extra packaging and handling fees may apply.',
    },
    'Fee Payment': {
      title: 'Fee Payment',
      body: 'Pay shipment and service fees online or at our service centers. We support multiple payment methods.',
    },
    'Insurance': {
      title: 'Insurance',
      body: 'Optional insurance protects against loss or damage. Coverage limits and premiums depend on declared value.',
    },
    'Mobile Topup': {
      title: 'Mobile Topup',
      body: 'Top up mobile credit for select providers during shipment creation. Charges will apply.',
    },
  };

  const info = contentMap[service || ''] || { title: service || 'Info', body: 'Information not available.' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{info.title}</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-black">✕</button>
        </div>
        <p className="text-gray-700">{info.body}</p>
        <div className="mt-6 text-right">
          <button onClick={onClose} className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700">Close</button>
        </div>
      </div>
    </div>
  );
}
