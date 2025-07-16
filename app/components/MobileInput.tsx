
'use client';

import { useState } from 'react';

interface MobileInputProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

export default function MobileInput({ formData, updateFormData, onNext }: MobileInputProps) {
  const [mobile, setMobile] = useState(formData.mobile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      updateFormData('mobile', mobile);
      onNext();
    }
  };

  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-phone-line text-2xl text-blue-600"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Enter Mobile Number</h2>
        <p className="text-gray-600">We&rsquo;ll send you an OTP to verify your number</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">+91</span>
            </div>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              placeholder="Enter 10-digit number"
              maxLength={10}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={mobile.length !== 10}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
}
