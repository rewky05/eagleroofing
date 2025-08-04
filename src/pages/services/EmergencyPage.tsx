import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Clock, Phone, CheckCircle, ArrowRight, Zap, Shield, Users } from 'lucide-react';

const EmergencyPage = () => {
  const emergencyServices = [
    'Storm damage and wind damage repairs',
    'Leak detection and immediate sealing',
    'Fallen tree removal and roof patching',
    'Temporary tarping and protection',
    'Insurance claim documentation',
    'Emergency structural assessments'
  ];

  const responseSteps = [
    {
      step: '1',
      title: 'Call Immediately',
      description: 'Contact our 24/7 emergency hotline for immediate response.'
    },
    {
      step: '2',
      title: 'Rapid Assessment',
      description: 'Our team arrives quickly to assess damage and ensure safety.'
    },
    {
      step: '3',
      title: 'Temporary Protection',
      description: 'Install tarps and temporary measures to prevent further damage.'
    },
    {
      step: '4',
      title: 'Permanent Repairs',
      description: 'Complete professional repairs to restore your roof\'s integrity.'
    }
  ];

  return (
    <div>
      {/* Emergency Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              24/7 Emergency Roofing Service
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              When roofing emergencies strike, every minute counts. Our expert emergency response team 
              is available 24/7 to protect your property from further damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
              >
                <Phone className="mr-3 w-6 h-6" />
                Call Emergency Line: (123) 456-7890
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-2 text-red-100">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Available 24 Hours a Day, 365 Days a Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              When to Call for Emergency Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't wait when these situations occur. Immediate action can prevent costly damage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Storm Damage</h3>
              <p className="text-gray-600">High winds, hail, or fallen trees causing visible damage to your roof structure or shingles.</p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Active Leaks</h3>
              <p className="text-gray-600">Water entering your home through the roof, causing interior damage or safety hazards.</p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Structural Issues</h3>
              <p className="text-gray-600">Sagging, cracking, or other structural problems that pose immediate safety risks.</p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Missing Materials</h3>
              <p className="text-gray-600">Shingles, tiles, or other roofing materials blown off during severe weather.</p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Fire Damage</h3>
              <p className="text-gray-600">Roof damage from fire requiring immediate protection and assessment.</p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ice Damage</h3>
              <p className="text-gray-600">Ice dams or heavy snow loads causing structural stress or water intrusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Emergency Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our emergency response team is equipped to handle any roofing crisis. 
                We provide immediate protection and permanent solutions to get your property 
                back to normal as quickly as possible.
              </p>
              <div className="space-y-4">
                {emergencyServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Emergency roof repair"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, professional response to minimize damage and restore protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responseSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Eagle Roofing for Emergencies?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              When you need help most, count on our experienced emergency response team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Rapid Response
              </h3>
              <p className="text-gray-600">
                Average response time of 30 minutes or less for emergency calls. 
                We're always ready to help when disaster strikes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Insurance Experts
              </h3>
              <p className="text-gray-600">
                We work directly with insurance companies and help document 
                damage for faster claims processing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Our emergency response team has handled thousands of emergency 
                repairs with professional expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Don't Wait - Call Now!
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Roofing emergencies require immediate attention. Our expert team is standing by 
              24/7 to protect your property and prevent further damage.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-xl"
              >
                <Phone className="mr-3 w-6 h-6" />
                Emergency: (123) 456-7890
              </a>
              <div className="text-red-100">
                <p className="font-medium">Available 24/7 • Average Response: 30 Minutes</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-red-500">
              <p className="text-red-100 mb-4">For non-emergency service requests:</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                Schedule Service
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyPage;