'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function FaqsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative h-40 bg-cover bg-center mt-[70px] flex items-center justify-center">
        <div className="absolute inset-0 bg-white/85"></div>
        <h1 className="relative text-4xl font-bold text-primary">FAQs</h1>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-primary">General Questions</h2>
          <div>
            <p className="font-bold">How do I track my shipment?</p>
            <p>Use the tracking tool on the homepage or enter your tracking ID in the Track Shipment modal.</p>
          </div>
          <div>
            <p className="font-bold">What is same day delivery?</p>
            <p>Same day delivery is available in select cities. Click the service on the homepage for details.</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
