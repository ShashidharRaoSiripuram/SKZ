
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$49',
      period: '/month',
      description: 'Essential services for your study abroad journey',
      features: [
        'Application tracking',
        'Basic consultation',
        'Resource access',
        'Community chat'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$99',
      period: '/month',
      description: 'Full access to all marketplace services',
      features: [
        'All Basic features',
        'Unlimited consultations',
        'Priority support',
        'All marketplace services',
        'University selection tools',
        'Visa assistance',
        'Accommodation booking'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Comprehensive package with personal advisor',
      features: [
        'All Premium features',
        'Dedicated advisor',
        'Custom application strategy',
        'Interview preparation',
        'Scholarship assistance',
        'Post-arrival support'
      ],
      popular: false
    }
  ];

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
              <h1 className="text-lg font-bold text-gray-800">Subscription Plans</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Plan</h2>
          <p className="text-gray-600">Unlock premium features and get expert guidance</p>
        </div>

        {/* Plans */}
        <div className="space-y-4">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl p-6 shadow-sm border-2 transition-colors ${
                selectedPlan === plan.id ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{plan.price}</div>
                  <div className="text-sm text-gray-500">{plan.period}</div>
                </div>
              </div>

              <div className="space-y-2">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-green-600 text-xs"></i>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className={`w-6 h-6 rounded-full border-2 ${
                  selectedPlan === plan.id 
                    ? 'border-blue-500 bg-blue-500' 
                    : 'border-gray-300'
                } flex items-center justify-center`}>
                  {selectedPlan === plan.id && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Button */}
        <div className="pt-6">
          <button className="w-full py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold !rounded-button">
            Subscribe to {plans.find(p => p.id === selectedPlan)?.name} Plan
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            Cancel anytime. No hidden fees.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Subscribe?</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-user-star-line text-blue-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Expert Consultants</p>
                <p className="text-xs text-gray-600">Direct access to verified education experts</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-green-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Guaranteed Support</p>
                <p className="text-xs text-gray-600">24/7 assistance throughout your journey</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-global-line text-purple-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Global Network</p>
                <p className="text-xs text-gray-600">Connect with students worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
