'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center mt-[70px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
        <h1 className="relative text-5xl font-bold text-primary">About Us</h1>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          <p className="text-gray-600 text-justify">
            Founded in 1983 with just 25 shipments on its very first day, ZWS began its journey with a clear vision
            to transform Pakistan's logistics landscape. What started as a small courier operation has grown into one
            of the most reliable and recognized names in transport, courier, and logistics services in Pakistan. Over
            the years, ZWS has evolved far beyond a traditional courier company, positioning itself as a key contributor
            to the country's logistics infrastructure.
          </p>

          <p className="text-gray-600 text-justify">
            Today, ZWS offers comprehensive logistics and transportation solutions, supporting businesses and individuals
            with efficient, secure, and timely delivery services nationwide. From courier and freight handling to supply
            chain and distribution services, ZWS is steadily becoming the logistics backbone of Pakistan.
          </p>

          <p className="text-gray-600 text-justify">
            While ZWS is widely known for its technology-driven logistics solutions, the true foundation of its success
            lies in its people. Our team understands that customers are the driving force behind innovation and growth.
            By focusing on customer insights and strategic planning, ZWS consistently delivers high-quality logistics
            services that meet the evolving needs of Pakistan's transport and supply chain sector.
          </p>

          <p className="text-gray-600 text-justify">
            By leveraging modern technology, ZWS develops customized transport and logistics solutions while maintaining
            industry-leading service standards. Our commitment is to continuously improve, introduce smarter delivery
            solutions, and provide dependable logistics services across Pakistan. Today, tomorrow, and always, ZWS remains
            your trusted partner in transport and logistics.
          </p>

          <div className="bg-primary/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">Mission Statement</h2>
            <p className="text-gray-600 text-justify mb-4">
              Our most valuable asset is the trust of the people of Pakistan. The phrase "ZWS KARDO" has been embraced
              nationwide as a symbol of reliability, confidence, and customer trust—an honor gifted to us by the communities
              we proudly serve.
            </p>
            <p className="text-gray-600 text-justify mb-4">
              By delivering on this trust every single day, in all conditions, ZWS has grown over the decades into one of
              Pakistan's leading transport and logistics service providers. Today, we support businesses and consumers alike
              with a wide range of courier, freight, air, and ground logistics solutions across the country.
            </p>
            <p className="text-gray-600 text-justify">
              We remain committed to creating greater value through a powerful combination of passion, expertise, and advanced
              logistics technologies. Our focus is on improving operational efficiency for our business clients while simplifying
              and enhancing everyday delivery experiences for consumers throughout Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Vision</h2>
            <p className="text-gray-600 text-justify">
              To become the logistics backbone of Pakistan and a leading provider of integrated transport and logistics solutions in the region.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">1.</span>
                <span className="text-justify">We prioritize our customers, delivering reliable and high-quality transport and logistics solutions across Pakistan.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">2.</span>
                <span className="text-justify">We foster a merit-based culture, empowering our employees to develop professionally and achieve their full potential.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">3.</span>
                <span className="text-justify">We uphold justice and transparency with all stakeholders, ensuring ethical practices in every aspect of our business.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">4.</span>
                <span className="text-justify">Our operations are fully compliant with laws and regulations, maintaining trust and accountability at all times.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">5.</span>
                <span className="text-justify">We embrace a culture of giving back, contributing to the communities we serve throughout Pakistan.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">6.</span>
                <span className="text-justify">We achieve sustainable growth by optimizing processes and delivering efficient, cost-effective logistics solutions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
