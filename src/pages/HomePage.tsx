import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, Phone, Star, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      title: 'New Roof Installation',
      description: 'Complete roof replacement with premium materials and expert craftsmanship.',
      icon: '🏠',
      link: '/services/new-roofs'
    },
    {
      title: 'Flat Roofing',
      description: 'Specialized flat roof solutions for commercial and residential properties.',
      icon: '🏢',
      link: '/services/flat-roof'
    },
    {
      title: 'Synthetic Slats',
      description: 'Durable synthetic roofing materials that mimic natural slate and wood.',
      icon: '🏘️',
      link: '/services/synthetic-slats'
    },
    {
      title: 'Metal Roofing',
      description: 'Long-lasting metal roofing systems with superior weather protection.',
      icon: '🔩',
      link: '/services/metal-roof'
    },
    {
      title: 'Skylights',
      description: 'Professional skylight installation and replacement services.',
      icon: '☀️',
      link: '/services/skylights'
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency roofing services when you need them most.',
      icon: '🚨',
      link: '/services/emergency'
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed contractors with comprehensive insurance coverage.'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Proven track record of excellence in residential and commercial roofing.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency repairs when unexpected issues arise.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals committed to superior craftsmanship and service.'
    }
  ];

  const projects = [
    {
      title: 'Modern Residential Installation',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete roof replacement with architectural shingles'
    },
    {
      title: 'Commercial Flat Roofing',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale commercial roofing project with EPDM membrane'
    },
    {
      title: 'Metal Roofing Installation',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Standing seam metal roof with superior durability'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Professional roofing work"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-white/90">15+ Years of Excellence</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Roofing
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-300">
                  You Can Trust
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                Eagle Roofing delivers exceptional craftsmanship and reliable service for all your roofing needs. 
                From new installations to emergency repairs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 group shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services/emergency"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1"
                >
                  Emergency Service
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Emergency Service</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Feature cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Licensed & Insured</h3>
                      <p className="text-sm text-gray-300">Fully certified professionals</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Quality Guarantee</h3>
                      <p className="text-sm text-gray-300">Comprehensive warranty coverage</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Fast Response</h3>
                      <p className="text-sm text-gray-300">Emergency service available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Complete Roofing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From new installations to emergency repairs, we deliver quality craftsmanship 
              and reliable service for residential and commercial properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Why Choose Eagle Roofing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We stand behind our work with quality materials, expert craftsmanship, 
              and unmatched customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take a look at some of our recent work showcasing quality craftsmanship 
              and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Lead Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Service Areas */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">Service Areas</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  Proudly Serving the Greater Metro Area
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Eagle Roofing provides professional roofing services throughout the region. 
                  Our experienced team is ready to serve your community with quality craftsmanship and reliable service.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-bold text-gray-900 mb-2">Downtown & Central</h3>
                  <p className="text-gray-600 text-sm">Complete coverage of downtown and central districts</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-bold text-gray-900 mb-2">North Suburbs</h3>
                  <p className="text-gray-600 text-sm">Residential and commercial properties</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-bold text-gray-900 mb-2">South Communities</h3>
                  <p className="text-gray-600 text-sm">New developments and established neighborhoods</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <h3 className="font-bold text-gray-900 mb-2">East & West Regions</h3>
                  <p className="text-gray-600 text-sm">Comprehensive regional coverage</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium mb-2">Not sure if we serve your area?</p>
                <p className="text-blue-700 text-sm">
                  Contact us today! We're always expanding our service area and may be able to help with your project.
                </p>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Your Free Roofing Estimate
                </h3>
                <p className="text-gray-600">
                  Ready to start your roofing project? Fill out the form below and we'll contact you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="lead-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="lead-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="lead-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="lead-service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="lead-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="new-roof">New Roof Installation</option>
                    <option value="flat-roof">Flat Roofing</option>
                    <option value="synthetic-slats">Synthetic Slats</option>
                    <option value="metal-roof">Metal Roofing</option>
                    <option value="skylights">Skylights</option>
                    <option value="repairs">Roof Repairs</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="lead-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white resize-none"
                    placeholder="Tell us about your roofing project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted about your roofing project. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free estimate on your roofing project. 
            Our expert team is ready to help protect your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 group shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;