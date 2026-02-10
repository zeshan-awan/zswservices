'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'newsletter'), {
        email,
        subscribedAt: serverTimestamp(),
      });
      setMessage('✓ Subscribed successfully!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error subscribing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Company Information</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition">Mission & Core Values</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition">Leadership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Product & Services</h4>
            <ul className="space-y-2">
              <li><a href="/express" className="text-gray-600 hover:text-primary transition">Express</a></li>
              <li><a href="/domestic" className="text-gray-600 hover:text-primary transition">Domestic</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition">Brands</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition">Promotions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Head Office</h4>
            <p className="text-gray-600">
              101-104<br/>
              Civil Aviation Club Road<br/>
              Karachi 75202, Pakistan
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Signup for Updates</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
              >
                <i className="fas fa-envelope"></i>
              </button>
            </form>
            {message && <p className="text-sm text-gray-600 mb-4">{message}</p>}

            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-x-twitter text-xl"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2025 ZWS Courier Services. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/terms" className="hover:text-primary transition">Terms</a>
            <a href="/privacy" className="hover:text-primary transition">Privacy</a>
            <a href="/faqs" className="hover:text-primary transition">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
