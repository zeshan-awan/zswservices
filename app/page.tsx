'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrackingModal from '@/components/TrackingModal';
import ScrollToTop from '@/components/ScrollToTop';
import ServiceInfoModal from '@/components/ServiceInfoModal';

export default function Home() {
  const [heroData] = useState([
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200',
    'https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=1200',
    'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=1200',
  ]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [trackingModal, setTrackingModal] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroData.length]);

  const handleTrack = () => {
    if (trackingId.trim()) {
      setTrackingModal(true);
    } else {
      alert('Please enter a tracking ID');
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* News Ticker */}
      <div className="bg-dark text-white overflow-hidden mt-[70px]">
        <div className="ticker-track whitespace-nowrap inline-block px-8">
          <span className="inline-block mr-16">🚚 New Express Routes Launched Nationwide</span>
          <span className="inline-block mr-16">📦 Same Day Delivery Available in Major Cities</span>
          <span className="inline-block mr-16">💼 New Logistics Partnerships Announced</span>
          <span className="inline-block mr-16">📢 ZWS Courier Expands International Shipping</span>
          <span className="inline-block mr-16">🚚 New Express Routes Launched Nationwide</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          {heroData.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === heroIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Track Your Shipment</h1>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl px-4">
            <input
              type="text"
              placeholder="Enter Tracking ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 px-6 py-3 border-none rounded focus:outline-none"
            />
            <button
              onClick={handleTrack}
              className="bg-primary text-white px-8 py-3 rounded hover:bg-red-700 transition font-bold"
            >
              Track Shipment
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12">Products & Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-truck', label: 'Domestic' },
              { icon: 'fa-globe', label: 'International' },
              { icon: 'fa-cart-shopping', label: 'E-Commerce' },
              { icon: 'fa-plane', label: 'Aviation' },
              { icon: 'fa-gear', label: 'Financial Services' },
              { icon: 'fa-envelope', label: 'Mailroom' },
            ].map((product, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition text-center"
              >
                <i className={`fas ${product.icon} text-4xl text-primary mb-4`}></i>
                <h4 className="text-xl font-bold">{product.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bar */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { icon: 'fa-clock', label: 'Same Day Delivery' },
              { icon: 'fa-box', label: 'Special Handling' },
              { icon: 'fa-money-bill', label: 'Fee Payment' },
              { icon: 'fa-shield', label: 'Insurance' },
              { icon: 'fa-mobile', label: 'Mobile Topup' },
            ].map((service, i) => (
              <button key={i} onClick={() => { setSelectedService(service.label); setServiceModalOpen(true); }} className="flex flex-col items-center">
                <i className={`fas ${service.icon} text-4xl text-primary mb-3`}></i>
                <p className="font-bold">{service.label}</p>
              </button>
            ))}
          </div>
          {serviceModalOpen && (
            <ServiceInfoModal open={serviceModalOpen} service={selectedService || undefined} onClose={() => { setServiceModalOpen(false); setSelectedService(null); }} />
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-center mb-4">At a Glance</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { target: 40, label: 'Years of Excellence' },
              { target: 1000, label: 'Express Centres' },
              { target: 4000, label: 'Nationwide Couriers' },
              { target: 9000, label: 'ECOM Merchants' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow text-center">
                <h2 className="text-5xl font-bold text-primary mb-2">{stat.target}+</h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">CSR Activities in Pakistan</h2>
              <p className="text-gray-600">Helping society and communities through logistics support.</p>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/500/320?1"
                alt="CSR Activities"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Customer Support - Team"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Customer Support - Call Center"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Customer Support - Service"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1516534775068-bb57ce32cb20?w=500&h=500&fit=crop"
                alt="Customer Support - WhatsApp"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Customer Support</h2>
              <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                At ZWS Courier, we believe that exceptional customer support is the backbone of our service. Our dedicated call centers operate round-the-clock to handle your inquiries and resolve issues promptly. 
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer multiple support channels including traditional phone support, WhatsApp messaging for quick updates, and active engagement on social media platforms. Our trained customer service representatives are ready to assist you with tracking, billing, claims, and general inquiries.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you prefer voice calls, text messages, or instant chat, we're here to ensure your shipping experience is smooth and worry-free.
              </p>

              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Working With ZWS Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Working With ZWS</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          {/* Three Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Training and Development */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="/images/romeosessions-packages-6153947_1280.jpg"
                alt="Training and Development"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Training and Development</h3>
              </div>
            </div>

            {/* Card 2 - Employee Culture */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="/images/imageabout1.jpg"
                alt="Employee Culture"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Employee Culture</h3>
              </div>
            </div>

            {/* Card 3 - Employee Benefits */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="/images/tungart7-box-8598084_1280.jpg"
                alt="Employee Benefits"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Employee Benefits</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Tracking Modal */}
      {trackingModal && (
        <TrackingModal
          trackingId={trackingId}
          onClose={() => setTrackingModal(false)}
        />
      )}

      {/* Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}
