'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative h-40 bg-cover bg-center mt-[70px] flex items-center justify-center">
        <div className="absolute inset-0 bg-white/85"></div>
        <h1 className="relative text-4xl font-bold text-primary">Privacy Policy</h1>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-6 text-gray-700">
          <p>
            This Privacy Policy explains how ZWS collects, uses, and protects personal information. We are committed to safeguarding your privacy.
          </p>
          <p>
            Details on data collection, retention, sharing, and your rights are described here.
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
