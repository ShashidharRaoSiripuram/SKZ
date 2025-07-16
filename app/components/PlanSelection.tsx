
'use client';

import { useState } from 'react';

interface PlanSelectionProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PlanSelection({ formData, updateFormData, onNext, onPrev }: PlanSelectionProps) {
  const [selectedPlan, setSelectedPlan] = useState(formData.selectedPlan);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 499,
      duration: '7-day lock',
      features: [
        'Fee freeze for 7 days',
        'Real-time FOREX tracking',
        'Email notifications',
        'Basic support'
      ],
      color: 'blue',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 1499,
      duration: '30-day lock + expert call',
      features: [
        'Fee freeze for 30 days',
        'One-on-one expert consultation',
        'University application guidance',
        'Priority support',
        'FOREX trend analysis'
      ],
      color: 'purple',
      popular: true
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      price: 2999,
      duration: '60-day lock + visa support',
      features: [
        'Fee freeze for 60 days',
        'Complete visa assistance',
        'Document preparation help',
        'Multiple expert consultations',
        'Premium FOREX alerts',
        '24/7 dedicated support'
      ],
      color: 'emerald',
      popular: false
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    updateFormData('selectedPlan', planId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlan) {
      onNext();
    }
  };

  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-vip-crown-line text-2xl text-purple-600"></i>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Choose Your Plan</h2>
        <p className="text-gray-600 text-sm">Select the perfect fee freeze plan for you</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="relative">
            {plan.popular && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <button
              type="button"
              onClick={() => handlePlanSelect(plan.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left !rounded-button ${
                selectedPlan === plan.id
                  ? `border-${plan.color}-500 bg-${plan.color}-50 shadow-lg`
                  : 'border-gray-200 hover:border-gray-300'
              } ${plan.popular ? 'pt-6' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={`font-bold text-lg ${
                    selectedPlan === plan.id ? `text-${plan.color}-900` : 'text-gray-900'
                  }`}>{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.duration}</p>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    selectedPlan === plan.id ? `text-${plan.color}-600` : 'text-gray-900'
                  }`}>₹{plan.price}</div>
                  {selectedPlan === plan.id && (
                    <i className={`ri-check-circle-fill text-xl text-${plan.color}-600 mt-1`}></i>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <i className={`ri-check-line mr-2 ${
                      selectedPlan === plan.id ? `text-${plan.color}-600` : 'text-gray-500'
                    }`}></i>
                    <span className={selectedPlan === plan.id ? `text-${plan.color}-800` : 'text-gray-700'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </button>
          </div>
        ))}

        <div className="flex space-x-3 pt-4">
          <button
            type="button"
            onClick={onPrev}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors !rounded-button"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!selectedPlan}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
