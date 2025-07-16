'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VisaServices() {
  const [activeTab, setActiveTab] = useState('services');
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    country: '',
    travelDate: '',
    message: ''
  });

  const visaTypes = [
    {
      type: 'Student Visa',
      countries: ['USA (F-1)', 'UK (Tier 4)', 'Canada (Study Permit)', 'Australia (Subclass 500)', 'Germany (Student Visa)', 'France (Student Visa)'],
      processingTime: '2-8 weeks',
      successRate: '95%',
      icon: 'ri-graduation-cap-line',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      type: 'Tourist Visa',
      countries: ['USA (B-2)', 'UK (Standard Visitor)', 'Schengen (Tourist)', 'Canada (Visitor)', 'Australia (Visitor)', 'Japan (Tourist)'],
      processingTime: '1-4 weeks',
      successRate: '92%',
      icon: 'ri-camera-line',
      color: 'bg-green-100 text-green-600'
    },
    {
      type: 'Work Visa',
      countries: ['USA (H-1B)', 'UK (Skilled Worker)', 'Canada (Work Permit)', 'Australia (Temporary Skill)', 'Germany (Work Visa)', 'Netherlands (Work)'],
      processingTime: '3-12 weeks',
      successRate: '88%',
      icon: 'ri-briefcase-line',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      type: 'Transit Visa',
      countries: ['USA (C-1)', 'UK (Transit)', 'Schengen (Transit)', 'Canada (Transit)', 'Australia (Transit)', 'Singapore (Transit)'],
      processingTime: '1-2 weeks',
      successRate: '98%',
      icon: 'ri-plane-line',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const services = [
    {
      title: 'Visa Consultation',
      description: 'Expert advice on visa requirements and procedures',
      features: ['Document checklist', 'Process timeline', 'Success assessment'],
      price: '$99',
      icon: 'ri-user-star-line'
    },
    {
      title: 'Document Review',
      description: 'Thorough review of all visa application documents',
      features: ['Document verification', 'Error correction', 'Format optimization'],
      price: '$149',
      icon: 'ri-file-check-line'
    },
    {
      title: 'Application Filing',
      description: 'Complete visa application submission service',
      features: ['Form completion', 'Online submission', 'Fee payment'],
      price: '$199',
      icon: 'ri-send-plane-line'
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and coaching for visa interviews',
      features: ['Practice sessions', 'Common questions', 'Confidence building'],
      price: '$129',
      icon: 'ri-question-answer-line'
    },
    {
      title: 'Visa Tracking',
      description: 'Real-time updates on your visa application status',
      features: ['Status monitoring', 'Regular updates', 'Timeline alerts'],
      price: '$49',
      icon: 'ri-search-eye-line'
    },
    {
      title: 'Emergency Processing',
      description: 'Fast-track processing for urgent visa applications',
      features: ['Priority handling', 'Expedited review', '24/7 support'],
      price: '$299',
      icon: 'ri-time-line'
    }
  ];

  const requirements = {
    'Student Visa': [
      'Valid passport (6+ months validity)',
      'Acceptance letter from university',
      'Financial proof (bank statements)',
      'Academic transcripts',
      'English proficiency test scores',
      'Medical examination reports',
      'Visa application form',
      'Passport-sized photographs'
    ],
    'Tourist Visa': [
      'Valid passport (6+ months validity)',
      'Travel itinerary',
      'Hotel bookings or invitation letter',
      'Financial proof',
      'Employment letter',
      'Return flight tickets',
      'Travel insurance',
      'Visa application form'
    ],
    'Work Visa': [
      'Valid passport',
      'Job offer letter',
      'Employment contract',
      'Educational certificates',
      'Work experience letters',
      'Medical examination',
      'Police clearance certificate',
      'Sponsor documentation'
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation request:', formData);
    alert('Thank you! Our visa expert will contact you within 2 hours.');
    setShowConsultationForm(false);
    setFormData({ name: '', email: '', phone: '', visaType: '', country: '', travelDate: '', message: '' });
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
              <h1 className="text-lg font-bold text-gray-800">VisaMax Advisors</h1>
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20visa%20consultant%20office%20with%20passport%20documents%20and%20world%20map%2C%20modern%20immigration%20office%2C%20clean%20professional%20environment%2C%20visa%20approval%20stamps&width=350&height=180&seq=visa-hero&orientation=landscape"
              alt="Visa Services"
              className="w-full h-32 object-cover object-top rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Visa Experts You Can Trust</h2>
            <p className="text-blue-100 text-sm">95% success rate • 15+ years experience • 50,000+ visas approved</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="px-4">
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-lg font-bold text-blue-600">95%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-lg font-bold text-green-600">50K+</div>
              <div className="text-xs text-gray-600">Visas Approved</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-lg font-bold text-purple-600">15+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-lg font-bold text-orange-600">24/7</div>
              <div className="text-xs text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-4">
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('services')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors !rounded-button ${
                activeTab === 'services' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('visa-types')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors !rounded-button ${
                activeTab === 'visa-types' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Visa Types
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors !rounded-button ${
                activeTab === 'requirements' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              Requirements
            </button>
          </div>
        </div>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="px-4 space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className={`${service.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{service.title}</h3>
                      <p className="text-xs text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{service.price}</div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-xl text-sm font-medium !rounded-button">
                  Select Service
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Visa Types Tab */}
        {activeTab === 'visa-types' && (
          <div className="px-4 space-y-4">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${visa.color}`}>
                    <i className={`${visa.icon} text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{visa.type}</h3>
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-2">
                      <span>⏱️ {visa.processingTime}</span>
                      <span>✅ {visa.successRate}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-700">Available Countries:</div>
                  <div className="flex flex-wrap gap-1">
                    {visa.countries.map((country, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Requirements Tab */}
        {activeTab === 'requirements' && (
          <div className="px-4 space-y-4">
            {Object.entries(requirements).map(([visaType, docs]) => (
              <div key={visaType} className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-3">{visaType} Requirements</h3>
                <div className="space-y-2">
                  {docs.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-green-600 text-xs"></i>
                      </div>
                      <span className="text-sm text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-xl">
                  <div className="flex items-start space-x-2">
                    <i className="ri-information-line text-yellow-600 text-sm mt-0.5"></i>
                    <p className="text-xs text-yellow-700">
                      Requirements may vary by country and individual circumstances. Contact us for personalized guidance.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Timeline */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Our Process</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Initial Consultation</h4>
                  <p className="text-xs text-gray-600">Free assessment of your visa requirements and eligibility</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Document Preparation</h4>
                  <p className="text-xs text-gray-600">Comprehensive review and preparation of all required documents</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Application Submission</h4>
                  <p className="text-xs text-gray-600">Professional submission of your visa application</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Interview & Follow-up</h4>
                  <p className="text-xs text-gray-600">Interview preparation and application tracking until approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Consultation */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-6 text-white text-center">
            <i className="ri-customer-service-line text-3xl mb-3"></i>
            <h3 className="text-lg font-bold mb-2">Need Expert Guidance?</h3>
            <p className="text-green-100 text-sm mb-4">Get personalized visa consultation from our certified experts</p>
            <button 
              onClick={() => setShowConsultationForm(true)}
              className="w-full py-3 bg-white text-green-600 rounded-xl font-medium mb-3 !rounded-button"
            >
              Book Free Consultation
            </button>
            <div className="flex space-x-3">
              <button className="flex-1 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl text-sm !rounded-button">
                <i className="ri-phone-line mr-1"></i>Call: +1-555-VISA
              </button>
              <button className="flex-1 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl text-sm !rounded-button">
                <i className="ri-whatsapp-line mr-1"></i>WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Success Stories</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800 text-sm">Sarah M. - USA Student Visa</span>
                  <span className="text-xs text-green-600">✅ Approved</span>
                </div>
                <p className="text-xs text-gray-600">"Got my F-1 visa approved in just 3 weeks! Amazing service."</p>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800 text-sm">John D. - UK Work Visa</span>
                  <span className="text-xs text-green-600">✅ Approved</span>
                </div>
                <p className="text-xs text-gray-600">"Professional team helped me navigate the complex UK visa process."</p>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800 text-sm">Priya S. - Canada Study Permit</span>
                  <span className="text-xs text-green-600">✅ Approved</span>
                </div>
                <p className="text-xs text-gray-600">"Excellent guidance throughout the entire application process."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Book Visa Consultation</h3>
              <button 
                onClick={() => setShowConsultationForm(false)}
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
                value={formData.visaType}
                onChange={(e) => setFormData({...formData, visaType: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm bg-white"
                required
              >
                <option value="">Select Visa Type</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Transit Visa">Transit Visa</option>
              </select>
              <select
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm bg-white"
                required
              >
                <option value="">Select Destination Country</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
              <input
                type="date"
                placeholder="Intended Travel Date"
                value={formData.travelDate}
                onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl text-sm"
              />
              <textarea
                placeholder="Additional information or questions..."
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