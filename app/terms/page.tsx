'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative h-40 bg-cover bg-center mt-[70px] flex items-center justify-center">
        <div className="absolute inset-0 bg-white/85"></div>
        <h1 className="relative text-4xl font-bold text-primary">Terms & Conditions</h1>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-6 text-gray-700">
          <p>
            These Terms & Conditions govern your use of ZWS Courier Services. By using our services, you agree to be bound by these terms.
          </p>
          <p>
            Liability, service descriptions, payment terms, and other policies are detailed here to help customers understand their rights and obligations.
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
