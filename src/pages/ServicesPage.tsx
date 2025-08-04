import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'New Roof Installation',
      description: 'Complete roof replacement and new construction roofing with premium materials and expert craftsmanship. We handle everything from planning to cleanup.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Free estimates', 'Premium materials', 'Expert installation', 'Warranty included'],
      link: '/services/new-roofs',
      residential: true,
      commercial: true
    },
    {
      title: 'Flat Roofing Systems',
      description: 'Specialized flat roof solutions including EPDM, TPO, and modified bitumen systems. Perfect for commercial buildings and modern residential designs.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Energy efficient', 'Weather resistant', 'Long-lasting', 'Low maintenance'],
      link: '/services/flat-roof',
      residential: true,
      commercial: true
    },
    {
      title: 'Synthetic Slats',
      description: 'Durable synthetic roofing materials that replicate the beauty of natural slate and wood without the maintenance requirements.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Authentic appearance', 'Weather resistant', 'Lightweight', 'Eco-friendly'],
      link: '/services/synthetic-slats',
      residential: true,
      commercial: false
    },
    {
      title: 'Metal Roofing',
      description: 'Standing seam and corrugated metal roofing systems offering superior durability, energy efficiency, and modern aesthetics.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['50+ year lifespan', 'Energy efficient', 'Fire resistant', 'Recyclable'],
      link: '/services/metal-roof',
      residential: true,
      commercial: true
    },
    {
      title: 'Skylight Installation',
      description: 'Professional skylight installation and replacement services to bring natural light into your space while maintaining weatherproof integrity.',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Natural lighting', 'Energy savings', 'Professional installation', 'Leak-proof guarantee'],
      link: '/services/skylights',
      residential: true,
      commercial: true
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency roofing services for storm damage, leaks, and urgent repairs. Fast response times to protect your property.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['24/7 availability', 'Fast response', 'Temporary protection', 'Insurance assistance'],
      link: '/services/emergency',
      residential: true,
      commercial: true,
      isEmergency: true
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Roofing Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive roofing solutions for residential and commercial properties. 
              From new installations to emergency repairs, we deliver quality craftsmanship you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                      {service.isEmergency && (
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                          24/7 Available
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-4 mb-4">
                      {service.residential && (
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          Residential
                        </span>
                      )}
                      {service.commercial && (
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          Commercial
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.link}
                    className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-colors duration-200 group ${
                      service.isEmergency
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our roofing experts are here to help you select the best solution for your property. 
            Contact us for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/services/emergency"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Emergency Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;