
'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface UniversityGoalsProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function UniversityGoals({ formData, updateFormData, onNext, onPrev }: UniversityGoalsProps) {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>(formData.selectedUniversities || []);
  const [showMoreUniversities, setShowMoreUniversities] = useState(false);

  const forexData = [
    { year: '2022', rate: 75 },
    { year: '2023', rate: 82 },
    { year: '2024', rate: 83 }
  ];

  const topUniversities = [
    {
      id: 'stanford',
      name: 'Stanford University',
      tuitionUSD: 58000,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'mit',
      name: 'MIT',
      tuitionUSD: 57986,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'harvard',
      name: 'Harvard University',
      tuitionUSD: 57261,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'caltech',
      name: 'California Institute of Technology',
      tuitionUSD: 56394,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'princeton',
      name: 'Princeton University',
      tuitionUSD: 56010,
      currentRate: 83,
      projectedRate: 85.5
    }
  ];

  const moreUniversities = [
    {
      id: 'yale',
      name: 'Yale University',
      tuitionUSD: 59950,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'columbia',
      name: 'Columbia University',
      tuitionUSD: 61850,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'upenn',
      name: 'University of Pennsylvania',
      tuitionUSD: 58620,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'northwestern',
      name: 'Northwestern University',
      tuitionUSD: 58701,
      currentRate: 83,
      projectedRate: 85.5
    },
    {
      id: 'duke',
      name: 'Duke University',
      tuitionUSD: 58031,
      currentRate: 83,
      projectedRate: 85.5
    }
  ];

  const calculateSavings = (tuitionUSD: number, currentRate: number, projectedRate: number) => {
    const currentTuition = tuitionUSD * currentRate;
    const projectedTuition = tuitionUSD * projectedRate;
    return projectedTuition - currentTuition;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleUniversitySelect = (universityId: string) => {
    const updatedSelection = selectedUniversities.includes(universityId)
      ? selectedUniversities.filter(id => id !== universityId)
      : [...selectedUniversities, universityId];
    
    setSelectedUniversities(updatedSelection);
    updateFormData('selectedUniversities', updatedSelection);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUniversities.length > 0) {
      onNext();
    }
  };

  const displayedUniversities = showMoreUniversities 
    ? [...topUniversities, ...moreUniversities] 
    : topUniversities;

  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-school-line text-2xl text-purple-600"></i>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Select Universities for Fee Freeze</h2>
        <p className="text-gray-600 text-sm">Choose at least one university to protect your fees</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <i className="ri-line-chart-line text-purple-600 mr-2"></i>
            FOREX Trend (Last 2 Years)
          </h3>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forexData}>
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis hide />
                <Line type="monotone" dataKey="rate" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-600 mt-2">USD to INR exchange rate has increased by 10.7% in 2 years</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <i className="ri-trophy-line text-yellow-500 mr-2"></i>
            {showMoreUniversities ? 'All Universities' : 'Top 5 Universities'}
            <span className="ml-2 text-sm text-gray-500">({selectedUniversities.length} selected)</span>
          </h3>
          
          {displayedUniversities.map((uni, index) => {
            const savings = calculateSavings(uni.tuitionUSD, uni.currentRate, uni.projectedRate);
            const isSelected = selectedUniversities.includes(uni.id);
            
            return (
              <button
                key={uni.id}
                type="button"
                onClick={() => handleUniversitySelect(uni.id)}
                className={`w-full border-2 rounded-xl p-4 space-y-3 transition-all duration-200 text-left !rounded-button ${
                  isSelected 
                    ? 'border-purple-500 bg-purple-50 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className={`font-semibold text-sm ${isSelected ? 'text-purple-900' : 'text-gray-800'}`}>
                        {uni.name}
                      </h4>
                      {isSelected && (
                        <i className="ri-check-circle-fill text-purple-600 ml-2"></i>
                      )}
                    </div>
                    <div className="text-xs text-gray-600 space-y-1 mt-2">
                      <div>Tuition: ${uni.tuitionUSD.toLocaleString()}</div>
                      <div>Today&aposs Cost: {formatCurrency(uni.tuitionUSD * uni.currentRate)}</div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-xs text-gray-500">Potential Savings</div>
                    <div className="text-green-600 font-bold text-sm">
                      {formatCurrency(savings)}
                    </div>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${isSelected ? 'bg-purple-100' : 'bg-green-50'}`}>
                  <div className={`text-xs font-medium ${isSelected ? 'text-purple-800' : 'text-green-800'}`}>
                    💰 Save up to {formatCurrency(savings)} by freezing today
                  </div>
                  <div className={`text-xs mt-1 ${isSelected ? 'text-purple-600' : 'text-green-600'}`}>
                    Protect yourself from FOREX fluctuations
                  </div>
                </div>
              </button>
            );
          })}

          {!showMoreUniversities && (
            <button
              type="button"
              onClick={() => setShowMoreUniversities(true)}
              className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors !rounded-button"
            >
              <i className="ri-add-line mr-2"></i>
              Show 5 More Universities
            </button>
          )}
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center mb-2">
            <i className="ri-information-line text-blue-600 mr-2"></i>
            <span className="font-medium text-blue-900 text-sm">Fee Freeze Benefits</span>
          </div>
          <ul className="text-xs text-blue-800 space-y-1">
            <li>• Lock current exchange rates</li>
            <li>• Avoid future FOREX volatility</li>
            <li>• Guaranteed savings on tuition fees</li>
            <li>• Flexible payment options</li>
          </ul>
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
            disabled={selectedUniversities.length === 0}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
          >
            Continue to Plans ({selectedUniversities.length})
          </button>
        </div>
      </form>
    </div>
  );
}
