
'use client';

import { useState } from 'react';

interface StudentInfoProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StudentInfo({ formData, updateFormData, onNext, onPrev }: StudentInfoProps) {
  const [kycMethod, setKycMethod] = useState(formData.kycMethod || '');
  const [aadhaarNumber, setAadhaarNumber] = useState(formData.aadhaarNumber || '');
  const [apaarId, setApaarId] = useState(formData.apaarId || '');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(formData.kycVerified || false);
  const [showManualForm, setShowManualForm] = useState(formData.kycMethod === 'manual' || false);

  // Auto-populated data after KYC verification
  const [fullName, setFullName] = useState(formData.fullName || '');
  const [dob, setDob] = useState(formData.dob || '');
  const [gender, setGender] = useState(formData.gender || '');
  const [currentlyStudying, setCurrentlyStudying] = useState(formData.currentlyStudying || '');

  const kycOptions = [
    {
      id: 'aadhaar',
      title: 'Aadhaar KYC',
      subtitle: 'Verify using Aadhaar number',
      icon: 'ri-shield-check-line',
      description: 'Government verified identity'
    },
    {
      id: 'apaar',
      title: 'APAAR ID',
      subtitle: 'Academic Bank of Credits',
      icon: 'ri-graduation-cap-line',
      description: 'Educational credentials verified'
    },
    {
      id: 'manual',
      title: 'Self-driven',
      subtitle: 'Fill details manually',
      icon: 'ri-edit-line',
      description: 'Complete profile by yourself'
    }
  ];

  const studyingOptions = [
    { id: 'high-school', label: 'High School (12th)', icon: 'ri-school-line' },
    { id: 'diploma', label: 'Diploma', icon: 'ri-file-text-line' },
    { id: 'undergraduate', label: 'Undergraduate', icon: 'ri-book-line' },
    { id: 'postgraduate', label: 'Postgraduate', icon: 'ri-graduation-cap-line' },
    { id: 'working', label: 'Working Professional', icon: 'ri-briefcase-line' }
  ];

  const genderOptions = [
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
    { id: 'other', label: 'Other' }
  ];

  const handleKycVerification = async () => {
    if (!kycMethod) return;

    if (kycMethod === 'manual') {
      setShowManualForm(true);
      updateFormData('kycMethod', kycMethod);
      return;
    }

    if (kycMethod === 'aadhaar' && !aadhaarNumber) return;
    if (kycMethod === 'apaar' && !apaarId) return;

    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      // Mock data based on KYC method
      if (kycMethod === 'aadhaar') {
        setFullName('Rahul Kumar Sharma');
        setDob('2002-03-15');
        setGender('male');
        setCurrentlyStudying('undergraduate');
      } else if (kycMethod === 'apaar') {
        setFullName('Priya Singh');
        setDob('2001-08-22');
        setGender('female');
        setCurrentlyStudying('postgraduate');
      }

      setIsVerified(true);
      setIsVerifying(false);

      // Update form data
      updateFormData('kycMethod', kycMethod);
      updateFormData('aadhaarNumber', aadhaarNumber);
      updateFormData('apaarId', apaarId);
      updateFormData('kycVerified', true);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && dob && gender && currentlyStudying) {
      updateFormData('fullName', fullName);
      updateFormData('dob', dob);
      updateFormData('gender', gender);
      updateFormData('currentlyStudying', currentlyStudying);
      onNext();
    }
  };

  const formatAadhaar = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\\d{0,4})(\\d{0,4})(\\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join(' ');
    }
    return cleaned;
  };

  // Manual form for self-driven option
  if (showManualForm && !isVerified) {
    return (
      <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-edit-line text-2xl text-blue-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Your Profile</h2>
          <p className="text-gray-600">Fill in your details manually</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Gender
            </label>
            <div className="grid grid-cols-3 gap-3">
              {genderOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setGender(option.id)}
                  className={`p-3 rounded-xl border-2 transition-all duration-200 !rounded-button ${
                    gender === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      gender === option.id ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    <i
                      className={`ri-user-line text-sm ${
                        gender === option.id ? 'text-blue-600' : 'text-gray-600'
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      gender === option.id ? 'text-blue-900' : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Currently Studying In
            </label>
            <div className="space-y-3">
              {studyingOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setCurrentlyStudying(option.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 !rounded-button ${
                    currentlyStudying === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentlyStudying === option.id ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    <i
                      className={`${option.icon} text-lg ${
                        currentlyStudying === option.id ? 'text-blue-600' : 'text-gray-600'
                      }`}
                    ></i>
                  </div>
                  <span
                    className={`font-medium ${
                      currentlyStudying === option.id ? 'text-blue-900' : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </span>
                  {currentlyStudying === option.id && (
                    <i className="ri-check-line text-lg text-blue-600 ml-auto"></i>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => {
                setShowManualForm(false);
                setKycMethod('');
              }}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors !rounded-button"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!fullName || !dob || !gender || !currentlyStudying}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (!isVerified && !showManualForm) {
    return (
      <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-shield-check-line text-2xl text-green-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Your Profile</h2>
          <p className="text-gray-600">Choose your preferred verification method</p>
        </div>

        <div className="space-y-4 mb-6">
          {kycOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setKycMethod(option.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 !rounded-button ${
                kycMethod === option.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    kycMethod === option.id ? 'bg-green-100' : 'bg-gray-100'
                  }`}
                >
                  <i
                    className={`${option.icon} text-xl ${
                      kycMethod === option.id ? 'text-green-600' : 'text-gray-600'
                    }`}
                  ></i>
                </div>
                <div className="flex-1 text-left">
                  <h3
                    className={`font-semibold ${
                      kycMethod === option.id ? 'text-green-900' : 'text-gray-800'
                    }`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      kycMethod === option.id ? 'text-green-700' : 'text-gray-600'
                    }`}
                  >
                    {option.subtitle}
                  </p>
                  <p
                    className={`text-xs ${
                      kycMethod === option.id ? 'text-green-600' : 'text-gray-500'
                    }`}
                  >
                    {option.description}
                  </p>
                </div>
                {kycMethod === option.id && (
                  <i className="ri-check-line text-xl text-green-600"></i>
                )}
              </div>
            </button>
          ))}
        </div>

        {kycMethod === 'aadhaar' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Aadhaar Number
            </label>
            <input
              type="text"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(formatAadhaar(e.target.value))}
              placeholder="XXXX XXXX XXXX"
              maxLength={14}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 tracking-wider"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              <i className="ri-lock-line mr-1"></i>
              Your Aadhaar details are secure and encrypted
            </p>
          </div>
        )}

        {kycMethod === 'apaar' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              APAAR ID
            </label>
            <input
              type="text"
              value={apaarId}
              onChange={(e) => setApaarId(e.target.value.toUpperCase())}
              placeholder="Enter your APAAR ID"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              <i className="ri-graduation-cap-line mr-1"></i>
              Academic Bank of Credits identifier
            </p>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={onPrev}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors !rounded-button"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleKycVerification}
            disabled={
              !kycMethod ||
              (kycMethod === 'aadhaar' && !aadhaarNumber) ||
              (kycMethod === 'apaar' && !apaarId) ||
              isVerifying
            }
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button flex items-center justify-center"
          >
            {isVerifying ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Verifying...
              </>
            ) : kycMethod === 'manual' ? (
              'Fill Manually'
            ) : (
              'Verify & Continue'
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-check-double-line text-2xl text-green-600"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile Verified!</h2>
        <p className="text-gray-600">Review and update your information</p>
        <div className="flex items-center justify-center mt-2 text-sm text-green-600">
          <i className="ri-shield-check-fill mr-1"></i>
          Verified via {kycMethod === 'aadhaar' ? 'Aadhaar' : 'APAAR ID'}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 bg-gray-50"
            required
            readOnly
          />
          <p className="text-xs text-gray-500 mt-1">
            Auto-filled from {kycMethod === 'aadhaar' ? 'Aadhaar' : 'APAAR'} records
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 bg-gray-50"
            required
            readOnly
          />
          <p className="text-xs text-gray-500 mt-1">
            Auto-filled from {kycMethod === 'aadhaar' ? 'Aadhaar' : 'APAAR'} records
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Gender
          </label>
          <div className="grid grid-cols-3 gap-3">
            {genderOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setGender(option.id)}
                disabled
                className={`p-3 rounded-xl border-2 transition-all duration-200 !rounded-button ${
                  gender === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                } opacity-60`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    gender === option.id ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <i
                    className={`ri-user-line text-sm ${
                      gender === option.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  ></i>
                </div>
                <div
                  className={`text-sm font-medium ${
                    gender === option.id ? 'text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {option.label}
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Auto-filled from verification records
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Currently Studying In
          </label>
          <div className="space-y-3">
            {studyingOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setCurrentlyStudying(option.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 !rounded-button ${
                  currentlyStudying === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentlyStudying === option.id ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <i
                    className={`${option.icon} text-lg ${
                      currentlyStudying === option.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  ></i>
                </div>
                <span
                  className={`font-medium ${
                    currentlyStudying === option.id ? 'text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {option.label}
                </span>
                {currentlyStudying === option.id && (
                  <i className="ri-check-line text-lg text-blue-600 ml-auto"></i>
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
            disabled={!fullName || !dob || !gender || !currentlyStudying}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
