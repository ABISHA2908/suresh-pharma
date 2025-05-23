
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, Star } from 'lucide-react';
import AnimatedBackground from '../components/Common/AnimatedBackground';

const Home = () => {
  const stats = [
    { label: 'Trusted Since', value: '2010' },
    { label: 'Medical Partners', value: '100+' },
    { label: 'Prescriptions Served', value: '5L+' },
    { label: 'Customer Satisfaction', value: '99%' },
  ];

  const testimonials = [
    {
      name: 'Dr. Amit Sharma',
      role: 'Cardiologist',
      content: 'Reliable supplier with genuine medicines. Always delivers on time.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Customer',
      content: 'Easy ordering process and excellent customer service. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'General Physician',
      content: 'Quality medicines at competitive prices. Been ordering for 3 years.',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Genuine Medicines',
      description: 'All products are sourced directly from authorized manufacturers',
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your pharmaceutical needs',
    },
    {
      icon: FileText,
      title: 'Licensed & Certified',
      description: 'Fully licensed pharmacy with all necessary certifications',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Trusted Healthcare Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
              Your Health,
              <br />
              Our Priority
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Premium pharmaceutical solutions delivered with care. Experience the future of healthcare with Suresh Pharma.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
              <Link
                to="/products"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Browse Products</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-white/20 text-gray-700 rounded-xl font-semibold hover:bg-white/80 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Suresh Pharma?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience excellence in pharmaceutical care with our comprehensive range of services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:scale-105 transition-all duration-300 border border-blue-100/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from healthcare professionals and patients who trust us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Suresh Pharma for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Order Now
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi! I'd like to know more about your pharmaceutical products."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
