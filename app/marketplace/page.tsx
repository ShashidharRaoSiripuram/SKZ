'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'EduGlobal Consultants',
      category: 'consultants',
      rating: 4.8,
      reviews: 234,
      price: '$299/month',
      description: 'Expert guidance for top universities worldwide',
      image: 'https://readdy.ai/api/search-image?query=Professional%20education%20consultant%20in%20modern%20office%20setting%2C%20helping%20students%20with%20university%20applications%2C%20clean%20background%2C%20professional%20atmosphere%2C%20warm%20lighting&width=300&height=200&seq=1&orientation=landscape',
      features: ['University Selection', 'Application Review', 'Interview Prep']
    },
    {
      id: 2,
      title: 'StudyFund Loans',
      category: 'loans',
      rating: 4.6,
      reviews: 189,
      price: 'From 8.5% APR',
      description: 'Flexible education loans for international students',
      image: 'https://readdy.ai/api/search-image?query=Financial%20institution%20office%20with%20loan%20documents%20and%20calculator%2C%20professional%20banking%20environment%2C%20clean%20modern%20design%2C%20soft%20lighting&width=300&height=200&seq=2&orientation=landscape',
      features: ['Quick Approval', 'Flexible Terms', 'Competitive Rates']
    },
    {
      id: 3,
      title: 'VisaMax Advisors',
      category: 'visa',
      rating: 4.9,
      reviews: 156,
      price: '$199/consultation',
      description: 'Visa application experts with 95% success rate',
      image: 'https://readdy.ai/api/search-image?query=Visa%20advisor%20helping%20client%20with%20passport%20and%20documents%2C%20professional%20office%20setting%2C%20clean%20organized%20desk%2C%20bright%20lighting&width=300&height=200&seq=3&orientation=landscape',
      features: ['Document Review', 'Interview Prep', 'Application Support']
    },
    {
      id: 4,
      title: 'HomeStay Connect',
      category: 'accommodation',
      rating: 4.7,
      reviews: 312,
      price: 'From $800/month',
      description: 'Verified student accommodation worldwide',
      image: 'https://readdy.ai/api/search-image?query=Modern%20student%20accommodation%20room%20with%20study%20desk%2C%20comfortable%20bed%2C%20clean%20minimalist%20design%2C%20natural%20lighting%2C%20cozy%20atmosphere&width=300&height=200&seq=4&orientation=landscape',
      features: ['Verified Properties', '24/7 Support', 'Flexible Booking']
    },
    {
      id: 5,
      title: 'CurrencyEx Pro',
      category: 'forex',
      rating: 4.5,
      reviews: 98,
      price: 'Best rates guaranteed',
      description: 'International money transfer for students',
      image: 'https://readdy.ai/api/search-image?query=Foreign%20exchange%20office%20with%20currency%20charts%20and%20digital%20displays%2C%20professional%20financial%20environment%2C%20modern%20technology%20setup&width=300&height=200&seq=5&orientation=landscape',
      features: ['Live Rates', 'Secure Transfer', 'Low Fees']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'consultants', name: 'Consultants' },
    { id: 'loans', name: 'Loans' },
    { id: 'visa', name: 'Visa' },
    { id: 'accommodation', name: 'Housing' },
    { id: 'forex', name: 'Forex' }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/dashboard" className="w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-left-line text-gray-600"></i>
              </Link>
              <h1 className="text-lg font-bold text-gray-800">Marketplace</h1>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-search-line text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 space-y-6">
        {/* Categories */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors !rounded-button ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex space-x-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 rounded-xl object-cover object-top"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-gray-800 text-sm">{service.title}</h3>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-yellow-400 text-xs"></i>
                      <span className="text-xs text-gray-600">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">{service.price}</span>
                    <span className="text-xs text-gray-500">{service.reviews} reviews</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {service.features.map((feature, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href={
                  service.category === 'consultants'
                    ? '/marketplace/consultants'
                    : `/marketplace/${service.category}/${service.id}`
                }
                className="w-full mt-3 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium text-center block !rounded-button"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
{/* Bottom Navigation */}
<div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
  <div className="max-w-sm w-full mx-auto overflow-x-auto scrollbar-hide">
    <div className="flex flex-nowrap justify-between w-max min-w-full text-xs text-center">
      <Link href="/dashboard" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-dashboard-line"></i>
        </div>
        <span className="mt-1">Dashboard</span>
      </Link>
      <Link href="/applications" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-blue-600">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-file-list-line"></i>
        </div>
        <span className="mt-1">Applications</span>
      </Link>
      <Link href="/marketplace" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-store-line"></i>
        </div>
        <span className="mt-1">Services</span>
      </Link>
      <Link href="/community" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-chat-3-line"></i>
        </div>
        <span className="mt-1">Community</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-user-line"></i>
        </div>
        <span className="mt-1">Profile</span>
      </Link>
    </div>
  </div>
</div>


    </div>
  );
}
