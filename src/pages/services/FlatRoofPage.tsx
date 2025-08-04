import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Building, Droplets, Thermometer } from 'lucide-react';

const FlatRoofPage = () => {
  const benefits = [
    'Superior waterproofing and drainage systems',
    'Energy-efficient membrane options',
    'Cost-effective installation and maintenance',
    'Ideal for HVAC equipment placement',
    'Long-lasting durability with proper maintenance',
    'Professional installation with warranty coverage'
  ];

  const systems = [
    {
      name: 'EPDM Rubber',
      description: 'Single-ply rubber membrane offering excellent durability and weather resistance.',
      features: ['20+ year lifespan', 'UV resistant', 'Easy maintenance', 'Cost effective'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'TPO Membrane',
      description: 'Heat-welded seams provide superior waterproofing with energy efficiency.',
      features: ['Energy efficient', 'Chemical resistant', 'Flexible installation', 'White reflective surface'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Modified Bitumen',
      description: 'Multi-layer system providing excellent protection and longevity.',
      features: ['Multiple layer protection', 'Self-healing properties', 'Puncture resistant', 'Temperature stable'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Flat roof installation"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Flat Roofing Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional flat roof installation and replacement for commercial buildings and modern residential designs. 
              Expert installation of EPDM, TPO, and modified bitumen systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert Flat Roofing Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Flat roofs require specialized expertise and materials to ensure proper drainage 
                and long-term performance. Our team has extensive experience with all flat roofing 
                systems, providing reliable waterproofing solutions for both commercial and residential properties.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Flat roof system"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flat Roof Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flat Roofing Systems We Install
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from proven flat roofing systems designed for durability, 
              energy efficiency, and long-term performance.
            </p>
          </div>
          
          <div className="space-y-16">
            {systems.map((system, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {system.name}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {system.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {system.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Flat Roofing?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flat roofs offer unique advantages for both commercial and residential applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Space Utilization
              </h3>
              <p className="text-gray-600">
                Ideal for HVAC equipment placement and future expansion. 
                Maximizes usable building space.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Superior Drainage
              </h3>
              <p className="text-gray-600">
                Engineered drainage systems prevent water accumulation 
                and ensure long-term performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Thermometer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Energy Efficiency
              </h3>
              <p className="text-gray-600">
                Reflective membranes reduce cooling costs and improve 
                building energy performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Expert Flat Roofing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Trust Eagle Roofing for professional flat roof installation and maintenance. 
            Contact us today for a comprehensive assessment and free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlatRoofPage;