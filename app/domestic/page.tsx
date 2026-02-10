'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Domestic() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center mt-[70px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200"
          alt="Domestic Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
        <h1 className="relative text-5xl font-bold text-primary">Domestic Logistics</h1>
      </section>

      {/* Intro Text */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-gray-600 text-justify mb-6">
            Our extensive domestic operations make ZWS a leading name in Pakistan's courier and logistics industry.
            Through our Express Centres located across the country, we serve the largest customer base in Pakistan,
            providing a wide range of cost-effective transport and logistics solutions. These include domestic and
            international shipments of documents and parcels, document attestation, visa dropbox services, branchless
            banking, e-commerce fulfillment, and more.
          </p>
          <p className="text-gray-600 text-justify">
            With round-the-clock operations, dedicated retail teams, the largest delivery fleet in Pakistan, and
            uncompromising service standards, ZWS ensures peace of mind for both individual and business customers.
            Our commitment to efficiency and reliability continues to set the benchmark for courier, transport, and
            logistics services in Pakistan.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            {/* Same Day Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Same Day Delivery</h2>
                <p className="text-gray-600 mb-4">
                  With a fleet of over 4,500 delivery vehicles and a dedicated air freighter connecting Karachi,
                  Lahore, and Islamabad, ZWS provides same-day document delivery within selected areas of major Pakistani cities.
                </p>
                <p className="text-gray-600 mb-4">
                  Designed especially for business-to-business clients, our Same Day Delivery service ensures urgent
                  shipments reach their destination quickly and securely.
                </p>
                <p className="text-gray-600">
                  Empowered by strategically located delivery hubs in Karachi, Lahore, and Islamabad, ZWS guarantees
                  comprehensive coverage across these regions. Currently, our same-day delivery service is available in
                  11 key cities of Pakistan, making ZWS the preferred choice for fast, reliable, and professional courier
                  and logistics services.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500"
                  alt="Same Day Delivery"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Economy Express */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=500"
                  alt="Economy Express"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">2nd Day Delivery</h2>
                <p className="text-gray-600">
                  ZWS Economy Express is a dependable overland courier and logistics service offering economical
                  shipping solutions across Pakistan. As a standard second-day delivery option, over 80% of Economy Express
                  shipments are delivered in half the committed time, making it a fast, reliable, and budget-friendly choice
                  for both individual and business customers.
                </p>
              </div>
            </div>

            {/* Time Choice Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Time Choice Delivery</h2>
                <p className="text-gray-600 mb-4">
                  ZSW Time Choice is a smart delivery fulfillment solution that allows customers to choose their
                  preferred delivery date and time with complete flexibility. Shipments are delivered within a tight
                  one-hour window, ensuring arrival no later than 30 minutes after the selected time slot for maximum convenience.
                </p>
                <p className="text-gray-600">
                  By combining the Time Choice service with their preferred shipping method, customers can manage their
                  daily schedules without waiting all day for a critical delivery. This precision-based delivery service is
                  ideal for businesses and individuals who value reliable, on-time logistics solutions.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=500"
                  alt="Time Choice"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
