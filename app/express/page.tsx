'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Express() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center mt-[70px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1497803212652-9a43e64b7cbf?w=1200"
          alt="Express Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
        <h1 className="relative text-5xl font-bold text-primary">Express Service</h1>
      </section>

      {/* Intro Text */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-gray-600 text-justify mb-6">
            Founded in 1983, ZSW Express began its journey with just twelve Express Centres and twenty-five shipments.
            Today, it has grown into the largest courier and logistics network in Pakistan, operating through 1,000+
            retail locations nationwide, supported by a robust fleet of 4,500+ delivery vehicles and a dedicated aviation division.
          </p>
          <p className="text-gray-600 text-justify">
            Operating 24/7 to serve customers without interruption, ZSW Express forms the backbone of all ZSW logistics
            solutions and courier services. Customers benefit from a comprehensive network of five distinct types of ZSW
            Express Centres—Company-Owned (COCO), Franchised, Shop-in-Shop, Authorized Agents, and IBRS locations—offering
            a complete one-stop courier and logistics experience across the country.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Domestic Express', subtitle: '' },
              { title: 'International Express', subtitle: '' },
              { title: 'Aviation', subtitle: '' },
              { title: 'Financial Services', subtitle: '' },
              { title: 'E-COM Solutions', subtitle: '' },
              { title: 'Travel & Tours', subtitle: '' },
              { title: 'Visatronix', subtitle: '' },
              { title: 'MMS', subtitle: 'mail management services' },
            ].map((service, i) => (
              <a
                key={i}
                href="#"
                className="bg-white p-6 rounded shadow hover:shadow-lg hover:-translate-y-2 transition text-center group"
              >
                <h3 className="font-bold text-lg group-hover:text-primary transition">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-sm text-gray-500 mt-2">{service.subtitle}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
