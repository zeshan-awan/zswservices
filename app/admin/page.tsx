'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Hardcoded admin credentials
    const ADMIN_EMAIL = 'admin@test.com';
    const ADMIN_PASSWORD = '12345678';

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setLoading(true);
      // Show success modal
      setShowModal(true);
      setTimeout(() => {
        // Store in localStorage for persistence
        localStorage.setItem('adminToken', 'true');
        router.push('/admin/dashboard');
      }, 2000);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-red-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">ZWS Admin</h1>
          <p className="text-gray-600">Shipment Management Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="admin@test.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Demo Credentials:<br/>
          Email: admin@test.com<br/>
          Password: 12345678
        </p>

        <Link href="/" className="block text-center text-primary hover:underline mt-4">
          ← Back to Website
        </Link>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center shadow-xl">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">You just logged in!</h2>
            <p className="text-gray-600">Redirecting to admin panel...</p>
          </div>
        </div>
      )}
    </main>
  );
}
