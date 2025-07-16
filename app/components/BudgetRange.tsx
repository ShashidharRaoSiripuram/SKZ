
'use client';

import { useState } from 'react';

interface BudgetRangeProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function BudgetRange({ formData, updateFormData, onNext, onPrev }: BudgetRangeProps) {
  const [minBudget, setMinBudget] = useState(formData.budgetMin || 5);
  const [maxBudget, setMaxBudget] = useState(formData.budgetMax || 50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData('budgetMin', minBudget);
    updateFormData('budgetMax', maxBudget);
    onNext();
  };

  const handleMinChange = (value: number) => {
    const newMin = Math.min(value, maxBudget - 5);
    setMinBudget(newMin);
  };

  const handleMaxChange = (value: number) => {
    const newMax = Math.max(value, minBudget + 5);
    setMaxBudget(newMax);
  };

  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-money-rupee-circle-line text-2xl text-yellow-600"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Budget Range</h2>
        <p className="text-gray-600">Set your preferred budget range in ₹ Lakhs</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-800">
                ₹{minBudget}L - ₹{maxBudget}L
              </div>
              <div className="text-sm text-gray-600 mt-1">Annual Tuition Budget</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Minimum Budget</label>
                <span className="text-sm font-semibold text-blue-600">₹{minBudget}L</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={minBudget}
                  onChange={(e) => handleMinChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(minBudget - 5) / 0.95}%, #e5e7eb ${(minBudget - 5) / 0.95}%, #e5e7eb 100%)`
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Maximum Budget</label>
                <span className="text-sm font-semibold text-indigo-600">₹{maxBudget}L</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={maxBudget}
                  onChange={(e) => handleMaxChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${(maxBudget - 10) / 0.9}%, #e5e7eb ${(maxBudget - 10) / 0.9}%, #e5e7eb 100%)`
                  }}
                />
              </div>
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
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 !rounded-button"
          >
            Continue
          </button>
        </div>
      </form>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
