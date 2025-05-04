import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Breeze Home Solutions</h1>
          <p className="text-xl md:text-2xl mb-8">Your trusted partner for HVAC, Plumbing, and Electrical services in Chicagoland</p>
          <Link href="/book-now" className="bg-white text-blue-600 hover:bg-blue-100 transition-colors py-3 px-8 rounded-full font-bold text-lg inline-block">
            Book a Service
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HVAC Service */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/hvac.jpg" 
                  alt="HVAC Services" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  className="bg-gray-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">HVAC Services</h3>
                <p className="text-gray-700 mb-4">
                  We provide comprehensive heating, ventilation, and air conditioning solutions for your home. From installations and replacements to repairs and maintenance, our certified technicians ensure your comfort year-round.
                </p>
                <ul className="text-black mb-4 font-medium">
                  <li>• AC & Heating Installation</li>
                  <li>• Preventative Maintenance</li>
                  <li>• Emergency Repairs</li>
                  <li>• Air Quality Solutions</li>
                </ul>
              </div>
            </div>

            {/* Plumbing Service */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/plumbing.jpg" 
                  alt="Plumbing Services" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  className="bg-gray-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Plumbing Services</h3>
                <p className="text-gray-700 mb-4">
                  From minor leaks to major pipe installations, our plumbing experts handle all your residential plumbing needs with precision and care. We offer 24/7 emergency services for those unexpected plumbing disasters.
                </p>
                <ul className="text-black mb-4 font-medium">
                  <li>• Leak Detection & Repair</li>
                  <li>• Drain Cleaning</li>
                  <li>• Water Heater Services</li>
                  <li>• Fixture Installation</li>
                </ul>
              </div>
            </div>

            {/* Electrical Service */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/electrical.jpg" 
                  alt="Electrical Services" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  className="bg-gray-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Electrical Services</h3>
                <p className="text-gray-700 mb-4">
                  Our licensed electricians provide safe and reliable electrical services for your home. From panel upgrades and rewiring to lighting installation and troubleshooting, we ensure your electrical systems function properly.
                </p>
                <ul className="text-black mb-4 font-medium">
                  <li>• Electrical Repairs</li>
                  <li>• Panel Upgrades</li>
                  <li>• Lighting Installation</li>
                  <li>• Safety Inspections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Breeze Home Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-blue-300 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-blue-100">All our technicians are fully licensed, insured, and background-checked for your peace of mind.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-blue-300 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Service</h3>
              <p className="text-blue-100">We&apos;re available around the clock for those unexpected home emergencies.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-blue-300 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-3">100% Satisfaction</h3>
              <p className="text-blue-100">We stand behind our work with a satisfaction guarantee on all services.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-blue-300 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-blue-100">No hidden fees or surprise costs. We provide upfront pricing before work begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience the Breeze difference?</h2>
          <p className="text-xl mb-8">Schedule your service today and see why we&apos;re Chicagoland&apos;s preferred home service provider.</p>
          <Link href="/book-now" className="bg-white text-blue-600 hover:bg-blue-100 transition-colors py-3 px-8 rounded-full font-bold text-lg inline-block">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
