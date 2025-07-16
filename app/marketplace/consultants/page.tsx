'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Consultants() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const destinations = [
    { name: 'United States', flag: '🇺🇸', universities: '4,000+' },
    { name: 'United Kingdom', flag: '🇬🇧', universities: '150+' },
    { name: 'Canada', flag: '🇨🇦', universities: '100+' },
    { name: 'Australia', flag: '🇦🇺', universities: '43+' },
    { name: 'Germany', flag: '🇩🇪', universities: '400+' },
    { name: 'France', flag: '🇫🇷', universities: '80+' }
  ];

  const services = [
    { icon: 'ri-user-star-line', title: 'Student Services', desc: 'Comprehensive support for international students' },
    { icon: 'ri-book-open-line', title: 'Test Preparations', desc: 'IELTS, TOEFL, GRE, GMAT coaching' },
    { icon: 'ri-briefcase-line', title: 'Career Counselling', desc: 'Professional guidance for career planning' },
    { icon: 'ri-graduation-cap-line', title: 'Admission Guidance', desc: 'End-to-end admission support' },
    { icon: 'ri-money-dollar-circle-line', title: 'Financial Assistance', desc: 'Loan guidance and scholarship support' },
    { icon: 'ri-gift-line', title: 'Scholarships', desc: 'Merit and need-based scholarship opportunities' },
    { icon: 'ri-plane-line', title: 'Travel & Forex', desc: 'Travel planning and currency exchange' },
    { icon: 'ri-passport-line', title: 'Visa Assistance', desc: 'Complete visa application support' }
  ];

  const events = [
    { date: 'Dec 15', title: 'USA University Fair', time: '2:00 PM', type: 'Virtual' },
    { date: 'Dec 18', title: 'UK Scholarship Workshop', time: '4:00 PM', type: 'Online' },
    { date: 'Dec 22', title: 'Canada Immigration Seminar', time: '6:00 PM', type: 'Live' },
    { date: 'Dec 25', title: 'Australia Study Options', time: '3:00 PM', type: 'Virtual' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you! We will contact you within 24 hours.');
    setShowBookingForm(false);
    setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/marketplace" className="w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-left-line text-gray-600"></i>
              </Link>
              <h1 className="text-lg font-bold text-gray-800">Study Abroad Consultants</h1>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-phone-line text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 space-y-6">
        {/* Hero Section */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20education%20consultant%20team%20helping%20international%20students%2C%20modern%20office%20environment%2C%20diverse%20group%20of%20consultants%2C%20warm%20professional%20atmosphere%2C%20clean%20background&width=350&height=200&seq=consultant-hero&orientation=landscape"
              alt="Education Consultants"
              className="w-full h-32 object-cover object-top rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Your Dream University Awaits</h2>
            <p className="text-blue-100 text-sm">Expert guidance from application to graduation. 15+ years of experience helping students achieve their study abroad dreams.</p>
          </div>
        </div>

        {/* About Section */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3">About EduGlobal Consultants</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              With over 15 years of experience, we have successfully placed 10,000+ students in top universities worldwide. Our team of certified counselors provides personalized guidance tailored to your academic goals and career aspirations.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-xs text-gray-500">Students Placed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-xs text-gray-500">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-xs text-gray-500">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Destinations */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Study Destinations</h3>
            <div className="grid grid-cols-2 gap-3">
              {destinations.map((dest, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-xl">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg">{dest.flag}</span>
                    <span className="font-medium text-gray-800 text-sm">{dest.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{dest.universities} Universities</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Services */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Student Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className={`${service.icon} text-blue-600 text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 text-sm">{service.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Help */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">How We Help</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Initial Consultation</h4>
                  <p className="text-xs text-gray-600">Free assessment of your profile and goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">University Selection</h4>
                  <p className="text-xs text-gray-600">Shortlist best-fit universities based on your profile</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Application Support</h4>
                  <p className="text-xs text-gray-600">Complete assistance with applications and documents</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Visa & Pre-departure</h4>
                  <p className="text-xs text-gray-600">Visa processing and pre-departure guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {events.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600">{event.date}</div>
                      <div className="text-xs text-gray-500">{event.time}</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">{event.title}</h4>
                      <span className="text-xs text-gray-500">{event.type} Event</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs !rounded-button">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Book Consultation */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-6 text-white text-center">
            <i className="ri-calendar-check-line text-3xl mb-3"></i>
            <h3 className="text-lg font-bold mb-2">Book Your Free Consultation</h3>
            <p className="text-green-100 text-sm mb-4">Get personalized guidance from our expert counselors</p>
            <button 
              onClick={() => setShowBookingForm(true)}
              className="w-full py-3 bg-white text-green-600 rounded-xl font-medium !rounded-button"
            >
              Book Now - It&aposs Free!
            </button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-blue-600"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">Phone</div>
                  <div className="text-gray-600 text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-whatsapp-line text-green-600"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">WhatsApp</div>
                  <div className="text-gray-600 text-sm">+1 (555) 987-6543</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-red-600"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">Email</div>
                  <div className="text-gray-600 text-sm">info@eduglobal.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-purple-600"></i>
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">Office</div>
                  <div className="text-gray-600 text-sm">123 Education Street, Study City</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-4">
              <button className="flex-1 py-2 bg-blue-600 text-white rounded-xl text-sm !rounded-button">
                <i className="ri-phone-line mr-2"></i>Call Now
              </button>
              <button className="flex-1 py-2 bg-green-600 text-white rounded-xl text-sm !rounded-button">
                <i className="ri-whatsapp-line mr-2"></i>WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Book Free Consultation</h3>
              <button 
                onClick={() => setShowBookingForm(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm"
                required
              />
              <select
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm bg-white"
                required
              >
                <option value="">Select Study Destination</option>
                {destinations.map((dest, index) => (
                  <option key={index} value={dest.name}>{dest.name}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your study goals..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm h-20 resize-none"
                maxLength={500}
              />
              <button 
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium !rounded-button"
              >
                Book Free Consultation
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
