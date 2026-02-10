'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

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
  estimatedDelivery: string;
  createdAt: any;
}

export default function AdminDashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderCountryCode: '+92',
    senderPhone: '',
    senderPostalCode: '',
    senderCity: '',
    senderCountry: 'Pakistan',
    recipientName: '',
    recipientCountryCode: '+92',
    recipientPhone: '',
    recipientPostalCode: '',
    recipientCity: '',
    recipientCountry: 'Pakistan',
    recipientAddress: '',
    weight: '',
    serviceType: 'Standard',
    loadType: 'Normal',
    status: 'Pending',
    estimatedDelivery: '',
  });
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is authorized
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
    } else {
      setIsAuthorized(true);
      fetchShipments();
    }
  }, [router]);

  const fetchShipments = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'shipments'));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Shipment));
      setShipments(data.sort((a, b) => b.createdAt?.toDate?.().getTime() - a.createdAt?.toDate?.().getTime()));
    } catch (error) {
      console.error('Error fetching shipments:', error);
    }
  };

  const generateTrackingId = () => {
    return 'ZWS' + Date.now().toString().slice(-8);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.senderName || !formData.recipientName || !formData.weight || !formData.estimatedDelivery) {
      setMessage('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const trackingId = generateTrackingId();

      // Compose full phone numbers
      const fullSenderPhone = `${formData.senderCountryCode}${formData.senderPhone}`;
      const fullRecipientPhone = `${formData.recipientCountryCode}${formData.recipientPhone}`;

      // Compute simple pricing in PKR
      const weightKg = Number(formData.weight) || 0;
      let baseRate = 50; // Standard
      if (formData.serviceType === 'Express') baseRate = 100;
      if (formData.serviceType === 'Same Day') baseRate = 200;
      let price = baseRate * weightKg;
      if (formData.loadType === 'Fragile') price += 50;
      if (formData.loadType === 'Hazardous') price += 200;
      price = Math.max(0, Math.round(price));

      await addDoc(collection(db, 'shipments'), {
        ...formData,
        senderPhone: fullSenderPhone,
        recipientPhone: fullRecipientPhone,
        bill: {
          amount: price,
          currency: 'PKR',
        },
        trackingId,
        createdAt: serverTimestamp(),
      });

      setMessage(`✓ Shipment created successfully! Tracking ID: ${trackingId}`);
      setFormData({
        senderName: '',
        senderCountryCode: '+92',
        senderPhone: '',
        senderPostalCode: '',
        senderCity: '',
        senderCountry: 'Pakistan',
        recipientName: '',
        recipientCountryCode: '+92',
        recipientPhone: '',
        recipientPostalCode: '',
        recipientCity: '',
        recipientCountry: 'Pakistan',
        recipientAddress: '',
        weight: '',
        serviceType: 'Standard',
        loadType: 'Normal',
        status: 'Pending',
        estimatedDelivery: '',
      });
      setShowForm(false);
      
      setTimeout(() => {
        setMessage('');
        fetchShipments();
      }, 2000);
    } catch (error) {
      setMessage('Error creating shipment');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this shipment?')) {
      try {
        await deleteDoc(doc(db, 'shipments', id));
        setMessage('✓ Shipment deleted successfully');
        setTimeout(() => setMessage(''), 3000);
        fetchShipments();
      } catch (error) {
        setMessage('Error deleting shipment');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/');
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-primary text-white p-6 shadow-lg">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <h1 className="text-3xl font-bold">ZWS Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-700 px-6 py-2 rounded hover:bg-red-800 transition"
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl p-6">
        {/* Message */}
        {message && (
          <div className={`p-4 rounded mb-6 ${
            message.includes('✓')
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message}
          </div>
        )}

        {/* Create Shipment Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary text-white font-bold py-3 px-6 rounded hover:bg-red-700 transition"
          >
            <i className="fas fa-plus mr-2"></i> {showForm ? 'Cancel' : 'Create New Shipment'}
          </button>
        </div>

        {/* Create Shipment Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Create New Shipment</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sender Section */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-primary mb-4">Sender Information</h3>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Sender Name *</label>
                <input
                  type="text"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <div className="w-1/3">
                  <label className="block text-gray-700 font-bold mb-2">Country Code</label>
                  <select name="senderCountryCode" value={formData.senderCountryCode} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary">
                    <option value="+92">+92 (PK)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+1">+1 (US)</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-bold mb-2">Sender Phone</label>
                  <input
                    type="tel"
                    name="senderPhone"
                    value={formData.senderPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Sender Postal Code</label>
                <input type="text" name="senderPostalCode" value={formData.senderPostalCode} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Sender City</label>
                <input type="text" name="senderCity" value={formData.senderCity} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Sender Country</label>
                <input type="text" name="senderCountry" value={formData.senderCountry} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />
              </div>

              {/* Recipient Section */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-primary mb-4 mt-4">Recipient Information</h3>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Recipient Name *</label>
                <input
                  type="text"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <div className="w-1/3">
                  <label className="block text-gray-700 font-bold mb-2">Country Code</label>
                  <select name="recipientCountryCode" value={formData.recipientCountryCode} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary">
                    <option value="+92">+92 (PK)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+1">+1 (US)</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-bold mb-2">Recipient Phone</label>
                  <input
                    type="tel"
                    name="recipientPhone"
                    value={formData.recipientPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Recipient Postal Code</label>
                <input type="text" name="recipientPostalCode" value={formData.recipientPostalCode} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Recipient City</label>
                <input type="text" name="recipientCity" value={formData.recipientCity} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Recipient Country</label>
                <input type="text" name="recipientCountry" value={formData.recipientCountry} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Recipient Address *</label>
                <input
                  type="text"
                  name="recipientAddress"
                  value={formData.recipientAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                />
              </div>

              {/* Shipment Section */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-primary mb-4 mt-4">Shipment Details</h3>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Weight (kg) *</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                >
                  <option>Standard</option>
                  <option>Express</option>
                  <option>Same Day</option>
                  <option>Economy</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Load Type</label>
                <select name="loadType" value={formData.loadType} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary">
                  <option value="Normal">Normal</option>
                  <option value="Fragile">Fragile</option>
                  <option value="Hazardous">Hazardous</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                >
                  <option>Pending</option>
                  <option>In Transit</option>
                  <option>Out for Delivery</option>
                  <option>Delivered</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Estimated Delivery Date *</label>
                <input
                  type="date"
                  name="estimatedDelivery"
                  value={formData.estimatedDelivery}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                />
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-primary text-white font-bold py-3 rounded hover:bg-red-700 transition disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Shipment'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-400 text-white font-bold py-3 rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Shipments List */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Shipments ({shipments.length})</h2>
          
          {shipments.length === 0 ? (
            <p className="text-center text-gray-600 py-8">No shipments yet. Create one to get started!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Tracking ID</th>
                    <th className="px-4 py-3 text-left font-bold">Recipient</th>
                    <th className="px-4 py-3 text-left font-bold">Service</th>
                    <th className="px-4 py-3 text-left font-bold">Status</th>
                    <th className="px-4 py-3 text-left font-bold">Est. Delivery</th>
                    <th className="px-4 py-3 text-left font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((shipment) => (
                    <tr key={shipment.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-bold text-primary">{shipment.trackingId}</td>
                      <td className="px-4 py-3">{shipment.recipientName}</td>
                      <td className="px-4 py-3">{shipment.serviceType}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded text-sm font-bold ${
                          shipment.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : shipment.status === 'In Transit'
                            ? 'bg-blue-100 text-blue-700'
                            : shipment.status === 'Out for Delivery'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {shipment.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{shipment.estimatedDelivery}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDelete(shipment.id)}
                          className="text-red-600 hover:text-red-800 font-bold"
                        >
                          <i className="fas fa-trash mr-2"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
