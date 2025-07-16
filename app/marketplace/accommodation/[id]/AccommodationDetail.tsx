
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AccommodationDetail() {
  const [activeTab, setActiveTab] = useState('properties');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const properties = [
    {
      id: 1,
      name: 'Central London Student Hub',
      location: 'London, UK',
      price: '$1200/month',
      rating: 4.8,
      reviews: 156,
      type: 'Student Residence',
      image: 'https://readdy.ai/api/search-image?query=Modern%20student%20residence%20building%20in%20London%20with%20contemporary%20architecture%2C%20clean%20facade%2C%20urban%20setting%2C%20bright%20daylight%2C%20professional%20real%20estate%20photography&width=300&height=200&seq=101&orientation=landscape',
      features: ['WiFi', 'Gym', 'Study Room', 'Laundry', '24/7 Security'],
      roomTypes: ['Single Room', 'Twin Share', 'Studio']
    },
    {
      id: 2,
      name: 'Sydney Harbour View Dorms',
      location: 'Sydney, Australia',
      price: '$950/month',
      rating: 4.7,
      reviews: 203,
      type: 'Shared Accommodation',
      image: 'https://readdy.ai/api/search-image?query=Student%20accommodation%20building%20near%20Sydney%20harbour%20with%20modern%20design%2C%20glass%20facades%2C%20harbor%20view%2C%20Australian%20architecture%2C%20bright%20natural%20lighting&width=300&height=200&seq=102&orientation=landscape',
      features: ['Ocean View', 'Common Kitchen', 'Study Areas', 'Bike Storage'],
      roomTypes: ['Shared Room', 'Private Room']
    },
    {
      id: 3,
      name: 'Toronto Campus Residence',
      location: 'Toronto, Canada',
      price: '$800/month',
      rating: 4.6,
      reviews: 189,
      type: 'University Housing',
      image: 'https://readdy.ai/api/search-image?query=University%20residence%20building%20in%20Toronto%20with%20brick%20architecture%2C%20student%20housing%20complex%2C%20campus%20environment%2C%20autumn%20setting%2C%20warm%20lighting&width=300&height=200&seq=103&orientation=landscape',
      features: ['Meal Plan', 'Recreation Center', 'Tutoring', 'Events'],
      roomTypes: ['Dormitory', 'Apartment Style']
    }
  ];

  const services = [
    {
      icon: 'ri-shield-check-line',
      title: 'Property Verification',
      description: 'All properties verified for safety and quality',
      price: 'Free'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Round-the-clock assistance for any issues',
      price: 'Included'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Flexible Booking',
      description: 'Book for semester or full year terms',
      price: 'From $50 fee'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Secure Payments',
      description: 'Safe and secure payment processing',
      price: '2.5% fee'
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Move-in Assistance',
      description: 'Help with settling in and orientation',
      price: '$99'
    },
    {
      icon: 'ri-repair-line',
      title: 'Maintenance Support',
      description: 'Quick resolution of property issues',
      price: 'Free'
    }
  ];

  const requirements = [
    'Valid student visa or enrollment letter',
    'Passport copy and photo ID',
    'Financial proof (bank statements)',
    'Emergency contact information',
    'Previous rental references (if available)',
    'Security deposit (typically 1-2 months rent)'
  ];

  const process = [
    {
      step: 1,
      title: 'Browse Properties',
      description: 'Search and filter accommodations by location, price, and amenities'
    },
    {
      step: 2,
      title: 'Virtual Tour',
      description: 'Take virtual tours or schedule in-person visits'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Complete application with required documents'
    },
    {
      step: 4,
      title: 'Secure Booking',
      description: 'Pay deposit and sign rental agreement'
    }
  ];

  const handleBookProperty = (property: any) => {
    setSelectedProperty(property);
    setShowBookingForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/marketplace" className="w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-left-line text-gray-600"></i>
              </Link>
              <h1 className="text-lg font-bold text-gray-800">HomeStay Connect</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <i className="ri-phone-line text-white text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold mb-1">Student Housing Made Easy</h2>
              <p className="text-green-100 text-sm">Verified accommodations worldwide</p>
            </div>
            <img 
              src="https://readdy.ai/api/search-image?query=Happy%20international%20students%20in%20modern%20accommodation%20lobby%2C%20diverse%20group%2C%20welcoming%20environment%2C%20bright%20interior%2C%20contemporary%20design&width=80&height=80&seq=104&orientation=squarish"
              alt="Students"
              className="w-16 h-16 rounded-xl object-cover object-top"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold">50,000+</div>
              <div className="text-xs text-green-100">Properties</div>
            </div>
            <div>
              <div className="text-lg font-bold">150+</div>
              <div className="text-xs text-green-100">Cities</div>
            </div>
            <div>
              <div className="text-lg font-bold">4.7★</div>
              <div className="text-xs text-green-100">Rating</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-shield-check-line text-green-600"></i>
            </div>
            <div className="text-sm font-semibold text-gray-800">100% Verified</div>
            <div className="text-xs text-gray-600">All Properties</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-time-line text-blue-600"></i>
            </div>
            <div className="text-sm font-semibold text-gray-800">24/7 Support</div>
            <div className="text-xs text-gray-600">Always Available</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-gray-100 rounded-xl p-1">
          {[
            { id: 'properties', label: 'Properties' },
            { id: 'services', label: 'Services' },
            { id: 'process', label: 'How It Works' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors !rounded-button ${
                activeTab === tab.id
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <div className="space-y-4">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{property.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <i className="ri-map-pin-line text-xs mr-1"></i>
                        {property.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{property.price}</div>
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 text-xs"></i>
                        <span className="text-xs text-gray-600 ml-1">{property.rating} ({property.reviews})</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {property.type}
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Room Types:</div>
                    <div className="flex flex-wrap gap-1">
                      {property.roomTypes.map((type, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-1">Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {property.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium !rounded-button">
                      Virtual Tour
                    </button>
                    <button 
                      onClick={() => handleBookProperty(property)}
                      className="flex-1 py-2 bg-green-600 text-white rounded-xl text-sm font-medium !rounded-button"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className={`${service.icon} text-green-600`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-green-600">{service.price}</div>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Required Documents</h3>
              <div className="space-y-2">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className="ri-checkbox-circle-line text-blue-600 text-sm"></i>
                    <span className="text-sm text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-4">
            {process.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-4 flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white text-center">
              <h3 className="font-bold mb-2">Need Help Getting Started?</h3>
              <p className="text-sm text-green-100 mb-4">Our housing experts are here to help you find the perfect accommodation</p>
              <button className="w-full py-2 bg-white text-green-600 rounded-xl font-medium !rounded-button">
                Contact Housing Expert
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Book Property</h3>
              <button 
                onClick={() => setShowBookingForm(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>
            
            {selectedProperty && (
              <div className="mb-4 p-3 bg-gray-50 rounded-xl">
                <div className="font-semibold text-gray-800">{selectedProperty.name}</div>
                <div className="text-sm text-gray-600">{selectedProperty.location}</div>
                <div className="text-green-600 font-semibold">{selectedProperty.price}</div>
              </div>
            )}

            <form id="accommodation-booking" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Move-in Date</label>
                  <input 
                    type="date" 
                    name="moveInDate"
                    className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <select 
                    name="duration"
                    className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="semester">1 Semester</option>
                    <option value="academic">Academic Year</option>
                    <option value="custom">Custom Period</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Room Preference</label>
                <select 
                  name="roomType"
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                  required
                >
                  <option value="">Select room type</option>
                  {selectedProperty?.roomTypes.map((type: string, index: number) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                <textarea 
                  name="requirements"
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm h-20 resize-none"
                  placeholder="Any special requirements or preferences..."
                  maxLength={500}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-xl font-medium !rounded-button"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      )}

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
