
'use client';

import { useState } from 'react';

interface CountryProgramProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function CountryProgram({ formData, updateFormData, onNext, onPrev }: CountryProgramProps) {
  const [lookingFor, setLookingFor] = useState(formData.lookingFor);
  const [selectedCountry, setSelectedCountry] = useState(formData.country);
  const [selectedProgram, setSelectedProgram] = useState(formData.program);

  const getLookingForOptions = () => {
    const currentStudy = formData.currentlyStudying;
    
    if (currentStudy === 'high-school') {
      return [
        { id: 'undergraduate', label: 'Undergraduate Degree', icon: 'ri-book-line' },
        { id: 'diploma', label: 'Diploma Course', icon: 'ri-file-text-line' }
      ];
    } else if (currentStudy === 'diploma' || currentStudy === 'undergraduate') {
      return [
        { id: 'postgraduate', label: 'Masters Degree', icon: 'ri-graduation-cap-line' },
        { id: 'phd', label: 'PhD', icon: 'ri-microscope-line' }
      ];
    } else if (currentStudy === 'postgraduate') {
      return [
        { id: 'phd', label: 'PhD', icon: 'ri-microscope-line' },
        { id: 'postgraduate-advanced', label: 'Advanced Masters', icon: 'ri-graduation-cap-line' }
      ];
    } else {
      return [
        { id: 'postgraduate', label: 'Masters Degree', icon: 'ri-graduation-cap-line' },
        { id: 'phd', label: 'PhD', icon: 'ri-microscope-line' },
        { id: 'professional', label: 'Professional Course', icon: 'ri-briefcase-line' }
      ];
    }
  };

  const countries = [
    { id: 'usa', label: 'United States', flag: '🇺🇸' },
    { id: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
    { id: 'canada', label: 'Canada', flag: '🇨🇦' },
    { id: 'australia', label: 'Australia', flag: '🇦🇺' },
    { id: 'germany', label: 'Germany', flag: '🇩🇪' },
    { id: 'singapore', label: 'Singapore', flag: '🇸🇬' }
  ];

  const programs = [
    { id: 'engineering', label: 'Engineering', icon: 'ri-tools-line' },
    { id: 'business', label: 'Business', icon: 'ri-briefcase-line' },
    { id: 'computer-science', label: 'Computer Science', icon: 'ri-computer-line' },
    { id: 'medicine', label: 'Medicine', icon: 'ri-heart-pulse-line' },
    { id: 'arts', label: 'Arts & Humanities', icon: 'ri-palette-line' },
    { id: 'science', label: 'Sciences', icon: 'ri-test-tube-line' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lookingFor && selectedCountry && selectedProgram) {
      updateFormData('lookingFor', lookingFor);
      updateFormData('country', selectedCountry);
      updateFormData('program', selectedProgram);
      onNext();
    }
  };

  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-global-line text-2xl text-emerald-600"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Study Plans</h2>
        <p className="text-gray-600">Tell us what you&rsquo;re looking for</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">What are you looking for?</h3>
          <div className="space-y-3">
            {getLookingForOptions().map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setLookingFor(option.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 !rounded-button ${
                  lookingFor === option.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  lookingFor === option.id ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <i className={`${option.icon} text-lg ${
                    lookingFor === option.id ? 'text-emerald-600' : 'text-gray-600'
                  }`}></i>
                </div>
                <span className={`font-medium ${
                  lookingFor === option.id ? 'text-emerald-900' : 'text-gray-700'
                }`}>{option.label}</span>
                {lookingFor === option.id && (
                  <i className="ri-check-line text-lg text-emerald-600 ml-auto"></i>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Country</h3>
          <div className="grid grid-cols-2 gap-3">
            {countries.map((country) => (
              <button
                key={country.id}
                type="button"
                onClick={() => setSelectedCountry(country.id)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 !rounded-button ${
                  selectedCountry === country.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{country.flag}</div>
                <div className={`text-sm font-medium ${
                  selectedCountry === country.id ? 'text-emerald-900' : 'text-gray-700'
                }`}>{country.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Field of Study</h3>
          <div className="grid grid-cols-2 gap-3">
            {programs.map((program) => (
              <button
                key={program.id}
                type="button"
                onClick={() => setSelectedProgram(program.id)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center space-y-2 !rounded-button ${
                  selectedProgram === program.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedProgram === program.id ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <i className={`${program.icon} text-lg ${
                    selectedProgram === program.id ? 'text-emerald-600' : 'text-gray-600'
                  }`}></i>
                </div>
                <span className={`text-sm font-medium text-center ${
                  selectedProgram === program.id ? 'text-emerald-900' : 'text-gray-700'
                }`}>{program.label}</span>
                {selectedProgram === program.id && (
                  <i className="ri-check-line text-sm text-emerald-600"></i>
                )}
              </button>
            ))}
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
            disabled={!lookingFor || !selectedCountry || !selectedProgram}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
