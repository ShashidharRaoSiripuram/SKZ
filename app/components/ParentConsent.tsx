'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ParentConsentProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onPrev: () => void;
  role: string;
  onComplete: () => void;
}

export default function ParentConsent({ formData, updateFormData, onPrev, role }: ParentConsentProps) {
  const [parentName, setParentName] = useState(formData.parentName);
  const [parentMobile, setParentMobile] = useState(formData.parentMobile);
  const [parentRelation, setParentRelation] = useState(formData.parentRelation);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const relations = ['Father', 'Mother', 'Guardian'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (role === 'student' && (!parentName || !parentMobile || !parentRelation)) {
      return;
    }

    setIsSubmitting(true);
    updateFormData('parentName', parentName);
    updateFormData('parentMobile', parentMobile);
    updateFormData('parentRelation', parentRelation);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-3xl text-green-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrollment Complete!</h2>
          <p className="text-gray-600 mb-6">
            {role === 'student' 
              ? `Consent request sent to ${parentName}. You'll receive confirmation once approved.`
              : 'Your fee freeze plan is now active!'
            }
          </p>
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">What&aposs Next?</h3>
            <ul className="text-sm text-blue-800 text-left space-y-1">
              <li>• Check your email for plan details</li>
              <li>• Download our mobile app</li>
              <li>• Track FOREX rates in real-time</li>
              {role === 'student' && <li>• Wait for parent approval</li>}
            </ul>
          </div>

          {/* ⭐️ Go to Dashboard Button */}
          <button
            onClick={() => window.location.href = '/dashboard'}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Parent flow (non-student)
  if (role !== 'student') {
    return (
      <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-parent-line text-2xl text-green-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to Proceed</h2>
          <p className="text-gray-600">As a parent, you can complete the enrollment directly</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
            <h3 className="font-semibold text-green-900 mb-3">Your Selected Plan</h3>
            <div className="text-sm text-green-800">
              <div>Plan: {formData.selectedPlan?.charAt(0).toUpperCase() + formData.selectedPlan?.slice(1)}</div>
              <div>Mobile: +91 {formData.mobile}</div>
              <div>Role: Parent</div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onPrev}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors !rounded-button"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 !rounded-button"
            >
              {isSubmitting ? 'Processing...' : 'Complete Enrollment'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Student flow
  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-parent-line text-2xl text-orange-600"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Parent Consent Required</h2>
        <p className="text-gray-600">We need your parent&aposs consent to proceed with the enrollment</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name</label>
          <input
            type="text"
            name="parentName"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter parent's full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Parent&aposs Mobile Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">+91</span>
            </div>
            <input
              type="tel"
              name="parentMobile"
              value={parentMobile}
              onChange={(e) => setParentMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter 10-digit number"
              maxLength={10}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Relation</label>
          <div className="grid grid-cols-3 gap-3">
            {relations.map((relation) => (
              <button
                key={relation}
                type="button"
                onClick={() => setParentRelation(relation)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 !rounded-button ${
                  parentRelation === relation
                    ? 'border-orange-500 bg-orange-50 text-orange-900'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="text-sm font-medium">{relation}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-start space-x-3">
            <i className="ri-information-line text-blue-600 mt-0.5"></i>
            <div>
              <h3 className="font-medium text-blue-900 text-sm mb-1">Consent Process</h3>
              <p className="text-xs text-blue-700">
                Your parent will receive an SMS/WhatsApp message to approve this enrollment. 
                The plan will be activated once they provide consent.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={onPrev}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors !rounded-button"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!parentName || !parentMobile || !parentRelation || isSubmitting}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
          >
            {isSubmitting ? 'Sending...' : 'Submit & Finish'}
          </button>
        </div>
      </form>
    </div>
  );
}
