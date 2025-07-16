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

  return (
    <div className="min-h-screen bg-white px-4 py-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Visa Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 border rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-start">
                <div className="text-blue-600 text-lg">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-800">{service.title}</h2>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-600">{service.price}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {service.features.map((f, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{f}</span>
              ))}
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-medium">Select</button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Success Stories</h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-800 text-sm">Sarah M. - USA Student Visa</span>
              <span className="text-xs text-green-600">✅ Approved</span>
            </div>
            <p className="text-xs text-gray-600">
              &quot;Got my F-1 visa approved in just 3 weeks! Amazing service.&quot;
            </p>
          </div>
          <div className="p-3 bg-green-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-800 text-sm">John D. - UK Work Visa</span>
              <span className="text-xs text-green-600">✅ Approved</span>
            </div>
            <p className="text-xs text-gray-600">
              &quot;Professional team helped me navigate the complex UK visa process.&quot;
            </p>
          </div>
          <div className="p-3 bg-green-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-800 text-sm">Priya S. - Canada Study Permit</span>
              <span className="text-xs text-green-600">✅ Approved</span>
            </div>
            <p className="text-xs text-gray-600">
              &quot;Excellent guidance throughout the entire application process.&quot;
            </p>
          </div>
        </div>
      </div>

      <Link href="/dashboard" className="mt-8 block text-center text-blue-600 font-medium">
        ← Back to Dashboard
      </Link>
    </div>
  );
}
