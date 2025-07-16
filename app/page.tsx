'use client';

import { useState } from 'react';
import Link from 'next/link';

import MobileInput from './components/MobileInput';
import OTPValidation from './components/OTPValidation';
import RoleSelection from './components/RoleSelection';
import StudentInfo from './components/StudentInfo';
import CountryProgram from './components/CountryProgram';
import BudgetRange from './components/BudgetRange';
import UniversityGoals from './components/UniversityGoals';
import PlanSelection from './components/PlanSelection';
import ParentConsent from './components/ParentConsent';
import ProgressIndicator from './components/ProgressIndicator';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showCompletionScreen, setShowCompletionScreen] = useState(false);

  const [formData, setFormData] = useState({
    mobile: '',
    otp: '',
    role: '',
    fullName: '',
    dob: '',
    gender: '',
    currentlyStudying: '',
    lookingFor: '',
    country: '',
    program: '',
    budgetMin: 5,
    budgetMax: 50,
    selectedUniversities: [],
    selectedPlan: '',
    parentName: '',
    parentMobile: '',
    parentRelation: ''
  });

  const totalSteps = 9;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <MobileInput formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 2:
        return <OTPValidation formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <RoleSelection formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <StudentInfo formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <CountryProgram formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 6:
        return <BudgetRange formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 7:
        return <UniversityGoals formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 8:
        return <PlanSelection formData={formData} updateFormData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 9:
        return (
          <ParentConsent
            formData={formData}
            updateFormData={updateFormData}
            onPrev={prevStep}
            role={formData.role}
            onComplete={() => setShowCompletionScreen(true)}
          />
        );
      default:
        return null;
    }
  };

  const renderCompletionScreen = () => (
    <div className="bg-white rounded-3xl p-8 shadow-lg text-center max-w-sm w-full">
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className="ri-graduation-cap-line text-white text-3xl"></i>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-3">StudyHub</h1>
      <p className="text-gray-600 text-sm mb-8">Your complete study abroad companion</p>

      <Link
        href="/dashboard"
        className="w-full py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold block hover:bg-blue-700 transition-colors"
      >
        Get Started
      </Link>

      <p className="text-xs text-gray-500 mt-4">
        Track applications • Connect with consultants • Join community
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {showCompletionScreen ? (
        renderCompletionScreen()
      ) : !started ? (
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center max-w-sm w-full">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-graduation-cap-line text-white text-3xl"></i>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-3">StudyHub</h1>
          <p className="text-gray-600 text-sm mb-8">Your complete study abroad companion</p>

          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold block hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Track applications • Connect with consultants • Join community
          </p>
        </div>
      ) : (
        <div className="max-w-md w-full">
          <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
          {renderStep()}
        </div>
      )}
    </div>
  );
}
