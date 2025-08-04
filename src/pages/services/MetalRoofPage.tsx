import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Recycle, TrendingUp } from 'lucide-react';

const MetalRoofPage = () => {
  const benefits = [
    '50+ year lifespan with minimal maintenance',
    'Superior energy efficiency reduces cooling costs',
    'Fire resistant and environmentally friendly',
    'Lightweight yet incredibly durable',
    'Excellent wind and hail resistance',
    'Fully recyclable at end of life'
  ];

  const metalTypes = [
    {
      name: 'Standing Seam',
      description: 'Premium metal roofing with concealed fasteners and sleek, modern appearance.',
      features: ['Concealed fasteners', 'Superior weather seal', 'Clean lines', 'Multiple colors'],
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Corrugated Metal',
      description: 'Traditional ribbed metal roofing offering excellent value and durability.',
      features: ['Cost effective', 'Quick installation', 'High strength', 'Agricultural approved'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Metal Shingles',
      description: 'Metal roofing designed to mimic traditional shingles with added durability.',
      features: ['Traditional appearance', 'Lightweight', 'Impact resistant', 'Color retention'],
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Metal roofing installation"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Metal Roofing Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Standing seam and corrugated metal roofing systems offering superior durability, 
              energy efficiency, and modern aesthetics. Built to last a lifetime.
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
                Premium Metal Roofing Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Metal roofing represents the ultimate in durability, energy efficiency, and modern design. 
                Our expert installation ensures your metal roof will provide decades of reliable protection 
                while enhancing your property's value and curb appeal.
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
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Metal roof installation"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metal Roofing Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Metal Roofing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from various metal roofing systems designed to meet different 
              aesthetic preferences and performance requirements.
            </p>
          </div>
          
          <div className="space-y-16">
            {metalTypes.map((type, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {type.name}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {type.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, featureIndex) => (
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
              Why Choose Metal Roofing?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metal roofing offers unmatched benefits for long-term value and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Energy Efficiency
              </h3>
              <p className="text-gray-600">
                Reflective coatings reduce heat absorption, lowering cooling costs 
                by up to 25% compared to traditional roofing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainable Choice
              </h3>
              <p className="text-gray-600">
                100% recyclable materials with high recycled content. 
                Environmentally responsible roofing solution.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Increased Property Value
              </h3>
              <p className="text-gray-600">
                Metal roofing can increase property value by up to 6% 
                while offering excellent return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Metal Roofing Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how metal roofing outperforms traditional roofing materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Years</div>
              <div className="text-gray-600">Expected Lifespan</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Savings</div>
              <div className="text-gray-600">On Cooling Costs</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">140</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">MPH</div>
              <div className="text-gray-600">Wind Resistance</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Recyclable</div>
              <div className="text-gray-600">At End of Life</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Premium Metal Roofing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Invest in a metal roof that will protect your property for decades. 
            Contact Eagle Roofing today for expert installation and a lifetime of value.
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

export default MetalRoofPage;