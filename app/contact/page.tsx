'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSubmitMessage('✓ Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center mt-[70px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
        <h1 className="relative text-5xl font-bold text-primary">Contact Us</h1>
      </section>

      {/* Contact Text */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-gray-600 mb-6 text-justify">
            As a customer-focused logistics organization, we engage with our clients every day and are committed
            to continuously improving our services by truly understanding their needs. Our dedicated call center,
            proactive social media support teams, and responsive WhatsApp assistance are always ready to listen and help.
          </p>
          <p className="text-gray-600 text-justify">
            Whether you have a question, suggestion, or feedback, we encourage you to reach out with confidence.
            Your input helps us enhance our courier and logistics solutions and deliver a better experience every time.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/923010522223"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-whatsapp text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Chat with us on WhatsApp</h3>
              <p className="text-gray-600">+92 301 052 2223</p>
            </a>

            {/* Social Media Card */}
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="flex justify-center gap-3 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200">
                  <i className="fab fa-facebook-f text-blue-600"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200">
                  <i className="fab fa-instagram text-pink-600"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200">
                  <i className="fab fa-x-twitter text-blue-600"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200">
                  <i className="fab fa-youtube text-red-600"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200">
                  <i className="fab fa-linkedin-in text-blue-600"></i>
                </a>
              </div>
              <h3 className="text-xl font-bold">Social Media Links</h3>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">info@zwscourier.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your message..."
              ></textarea>
            </div>

            {submitMessage && (
              <div className={`p-4 rounded mb-6 ${
                submitMessage.includes('✓')
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
