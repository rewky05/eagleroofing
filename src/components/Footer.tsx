import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Eagle Roofing</h3>
                <p className="text-gray-400 text-sm">Professional Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for all roofing needs. Quality craftsmanship, 
              reliable service, and customer satisfaction guaranteed.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2">
              <Link to="/services/new-roofs" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                New Roof Installation
              </Link>
              <Link to="/services/flat-roof" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Flat Roofing
              </Link>
              <Link to="/services/synthetic-slats" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Synthetic Slats
              </Link>
              <Link to="/services/metal-roof" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Metal Roofing
              </Link>
              <Link to="/services/skylights" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Skylights
              </Link>
              <Link to="/services/emergency" className="block text-red-400 hover:text-red-300 transition-colors duration-200 text-sm font-medium">
                Emergency Repairs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@eagleroofing.com" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  info@eagleroofing.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  Greater Metro Area
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <div className="text-sm">
                  <p className="text-gray-300">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-300">Sun: Closed</p>
                  <p className="text-red-400 font-medium mt-2">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Eagle Roofing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;