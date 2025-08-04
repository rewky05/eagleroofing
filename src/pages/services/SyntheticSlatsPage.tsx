import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Leaf, Shield, Palette } from 'lucide-react';

const SyntheticSlatsPage = () => {
  const benefits = [
    'Authentic appearance of natural slate and wood',
    'Superior weather resistance and durability',
    'Lightweight installation reduces structural stress',
    'Low maintenance requirements',
    'Eco-friendly and recyclable materials',
    'Class A fire rating for safety'
  ];

  const styles = [
    {
      name: 'Slate Style',
      description: 'Captures the elegant beauty of natural slate with enhanced durability.',
      features: ['Natural slate appearance', 'Color variation', 'Textured surface', '50+ year warranty'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Wood Shake Style',
      description: 'Rustic wood shake look without the maintenance concerns of natural cedar.',
      features: ['Cedar shake appearance', 'Grain texture', 'Multiple color options', 'Fire resistant'],
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Tile Style',
      description: 'Mediterranean-inspired tile appearance with modern synthetic benefits.',
      features: ['Clay tile look', 'Curved profile', 'Fade resistant', 'Impact resistant'],
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Synthetic slate roofing"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Synthetic Slats Roofing
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Beautiful synthetic roofing materials that replicate the authentic look of natural 
              slate and wood without the maintenance requirements. Durable, lightweight, and eco-friendly.
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
                The Beauty of Natural Materials Without the Hassle
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Synthetic slats offer the perfect combination of authentic appearance and modern performance. 
                Our premium synthetic materials provide the timeless beauty of natural slate and wood 
                with superior durability and minimal maintenance requirements.
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
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Synthetic slat roofing detail"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Style Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Synthetic Roofing Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from various synthetic styles that perfectly replicate natural materials 
              while offering superior performance and longevity.
            </p>
          </div>
          
          <div className="space-y-16">
            {styles.map((style, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {style.name}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {style.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {style.features.map((feature, featureIndex) => (
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
              Why Choose Synthetic Slats?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern synthetic materials offer significant advantages over traditional natural materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Made from recycled materials and fully recyclable at end of life. 
                Sustainable choice for environmentally conscious homeowners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Superior Protection
              </h3>
              <p className="text-gray-600">
                Engineered to withstand extreme weather conditions including 
                high winds, hail, and UV exposure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Design Flexibility
              </h3>
              <p className="text-gray-600">
                Available in multiple colors and textures to complement 
                any architectural style and personal preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Synthetic vs. Natural Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how synthetic slats compare to traditional natural materials.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Synthetic Slats</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Natural Slate</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Cedar Shake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Weight</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-medium">Lightweight</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Very Heavy</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Maintenance</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-medium">Minimal</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Low</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">High</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Lifespan</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-medium">50+ Years</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">75+ Years</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">25-30 Years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Installation Cost</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-medium">Moderate</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">High</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Weather Resistance</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-medium">Excellent</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Excellent</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Fair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Beautiful Synthetic Roofing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the perfect combination of beauty and performance with synthetic slats. 
            Contact us today for a consultation and free estimate.
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

export default SyntheticSlatsPage;