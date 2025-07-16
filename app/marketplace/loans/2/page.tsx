'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StudyLoanDetails() {
  const [activeTab, setActiveTab] = useState('eligibility');
  const [showCalculator, setShowCalculator] = useState(false);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(5);

  const eligibilityData = [
    { criteria: 'Age', requirement: '18-35 years' },
    { criteria: 'Nationality', requirement: 'Indian citizen or NRI' },
    { criteria: 'Academic Score', requirement: 'Minimum 60% in 12th grade' },
    { criteria: 'Admission', requirement: 'Confirmed admission in recognized university' },
    { criteria: 'Co-applicant', requirement: 'Parent/Guardian/Spouse as co-applicant' },
    { criteria: 'Income Proof', requirement: 'Co-applicant annual income ₹2 Lakhs+' }
  ];

  const documents = [
    { category: 'Identity Proof', items: ['Passport', 'Aadhaar Card', 'Voter ID', 'Driving License'] },
    { category: 'Address Proof', items: ['Utility Bills', 'Bank Statement', 'Rent Agreement', 'Property Papers'] },
    { category: 'Academic Documents', items: ['10th & 12th Mark Sheets', 'Graduation Certificate', 'Admission Letter', 'Fee Structure'] },
    { category: 'Income Proof', items: ['Salary Slips (6 months)', 'Bank Statements', 'ITR (2 years)', 'Form 16'] },
    { category: 'Collateral (if any)', items: ['Property Documents', 'Valuation Report', 'Insurance Papers', 'NOC from Society'] }
  ];

  const loanFeatures = [
    { icon: 'ri-money-dollar-circle-line', title: 'Loan Amount', desc: 'Up to ₹1.5 Crores for abroad studies' },
    { icon: 'ri-calendar-line', title: 'Repayment Tenure', desc: 'Up to 15 years flexible repayment' },
    { icon: 'ri-shield-check-line', title: 'Collateral', desc: 'Secured & unsecured loan options' },
    { icon: 'ri-time-line', title: 'Processing Time', desc: 'Quick approval within 7-10 days' },
    { icon: 'ri-percent-line', title: 'Interest Rate', desc: 'Starting from 8.5% per annum' },
    { icon: 'ri-award-line', title: 'Tax Benefits', desc: 'Tax deduction under Section 80E' }
  ];

  const interestRates = [
    { type: 'Secured Loan', rate: '8.5% - 10.5%', description: 'With collateral/security' },
    { type: 'Unsecured Loan', rate: '10.5% - 13.5%', description: 'Without collateral' },
    { type: 'Premium Universities', rate: '8.5% - 9.5%', description: 'Top 200 QS ranked universities' },
    { type: 'Other Universities', rate: '9.5% - 12.5%', description: 'Other recognized universities' }
  ];

  const calculateEMI = () => {
    const monthlyRate = 10.5 / 12 / 100;
    const months = tenure * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const tabs = [
    { id: 'eligibility', name: 'Eligibility', icon: 'ri-checkbox-circle-line' },
    { id: 'documents', name: 'Documents', icon: 'ri-file-list-line' },
    { id: 'rates', name: 'Interest Rates', icon: 'ri-percent-line' },
    { id: 'features', name: 'Features', icon: 'ri-star-line' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/marketplace" className="w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-left-line text-gray-600"></i>
              </Link>
              <h1 className="text-lg font-bold text-gray-800">StudyFund Loans</h1>
            </div>
            <button 
              onClick={() => setShowCalculator(true)}
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <i className="ri-calculator-line text-white text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 space-y-6">
        {/* Hero Section */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20banking%20office%20with%20education%20loan%20documents%20and%20calculator%2C%20modern%20financial%20institution%20interior%2C%20clean%20organized%20desk%20with%20loan%20papers%2C%20professional%20atmosphere&width=350&height=180&seq=loan-hero&orientation=landscape"
              alt="Education Loan"
              className="w-full h-28 object-cover object-top rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">StudyFund Education Loans</h2>
            <p className="text-green-100 text-sm">Flexible education loans for international students with competitive rates starting from 8.5% APR</p>
            <div className="flex items-center space-x-4 mt-3">
              <div className="flex items-center space-x-1">
                <i className="ri-star-fill text-yellow-300"></i>
                <span className="text-sm">4.6 Rating</span>
              </div>
              <div className="text-sm">189 Reviews</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-blue-600">₹1.5Cr</div>
              <div className="text-xs text-gray-500">Max Loan</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-green-600">8.5%</div>
              <div className="text-xs text-gray-500">Min Interest</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-purple-600">15 Yrs</div>
              <div className="text-xs text-gray-500">Max Tenure</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors !rounded-button ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <i className={`${tab.icon} text-sm`}></i>
                  <span>{tab.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-4">
          {activeTab === 'eligibility' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Eligibility Criteria</h3>
              <div className="space-y-4">
                {eligibilityData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-checkbox-circle-line text-blue-600 text-sm"></i>
                      </div>
                      <span className="font-medium text-gray-800 text-sm">{item.criteria}</span>
                    </div>
                    <span className="text-sm text-gray-600">{item.requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  <i className="ri-information-line text-blue-600 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-blue-800 text-sm">Important Note</h4>
                    <p className="text-blue-600 text-xs mt-1">Meeting eligibility criteria doesn&apost guarantee loan approval. Final approval depends on credit assessment and document verification.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Required Documents</h3>
              <div className="space-y-4">
                {documents.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 text-sm mb-3 flex items-center space-x-2">
                      <i className="ri-folder-line text-blue-600"></i>
                      <span>{category.category}</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <i className="ri-file-text-line text-gray-400 text-xs"></i>
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  <i className="ri-alert-line text-yellow-600 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-yellow-800 text-sm">Document Tips</h4>
                    <p className="text-yellow-600 text-xs mt-1">Ensure all documents are attested and photocopied. Original documents will be verified during processing.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rates' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Interest Rates</h3>
              <div className="space-y-4">
                {interestRates.map((rate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{rate.type}</h4>
                      <p className="text-xs text-gray-600 mt-1">{rate.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{rate.rate}</div>
                      <div className="text-xs text-gray-500">per annum</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-green-50 rounded-xl">
                  <h4 className="font-medium text-green-800 text-sm mb-2">Additional Benefits</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2 text-xs text-green-600">
                      <i className="ri-check-line"></i>
                      <span>No prepayment penalty after 6 months</span>
                    </li>
                    <li className="flex items-center space-x-2 text-xs text-green-600">
                      <i className="ri-check-line"></i>
                      <span>Moratorium period during study + 6 months</span>
                    </li>
                    <li className="flex items-center space-x-2 text-xs text-green-600">
                      <i className="ri-check-line"></i>
                      <span>Tax benefits under Section 80E</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Loan Features</h3>
              <div className="space-y-4">
                {loanFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className={`${feature.icon} text-blue-600 text-lg`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Apply Now Section */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
            <i className="ri-bank-card-line text-3xl mb-3"></i>
            <h3 className="text-lg font-bold mb-2">Apply for Education Loan</h3>
            <p className="text-blue-100 text-sm mb-4">Get pre-approved in just 5 minutes</p>
            <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-medium mb-3 !rounded-button">
              Apply Now
            </button>
            <button 
              onClick={() => setShowCalculator(true)}
              className="w-full py-2 border border-white/30 text-white rounded-xl text-sm !rounded-button"
            >
              Calculate EMI
            </button>
          </div>
        </div>
      </div>

      {/* EMI Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">EMI Calculator</h3>
              <button 
                onClick={() => setShowCalculator(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount: ₹{loanAmount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="15000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tenure: {tenure} years
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="p-4 bg-blue-50 rounded-xl text-center">
                <div className="text-sm text-gray-600 mb-1">Monthly EMI</div>
                <div className="text-2xl font-bold text-blue-600">₹{calculateEMI().toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">at 10.5% interest rate</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center text-sm">
                <div>
                  <div className="text-gray-600">Total Interest</div>
                  <div className="font-semibold">₹{((calculateEMI() * tenure * 12) - loanAmount).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-gray-600">Total Amount</div>
                  <div className="font-semibold">₹{(calculateEMI() * tenure * 12).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

{/* Bottom Navigation */}
<div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
  <div className="max-w-sm w-full mx-auto overflow-x-auto scrollbar-hide">
    <div className="flex flex-nowrap justify-between w-max min-w-full text-xs text-center">
      <Link href="/dashboard" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-dashboard-line"></i>
        </div>
        <span className="mt-1">Dashboard</span>
      </Link>
      <Link href="/applications" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-blue-600">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-file-list-line"></i>
        </div>
        <span className="mt-1">Applications</span>
      </Link>
      <Link href="/marketplace" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-store-line"></i>
        </div>
        <span className="mt-1">Services</span>
      </Link>
      <Link href="/community" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-chat-3-line"></i>
        </div>
        <span className="mt-1">Community</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-user-line"></i>
        </div>
        <span className="mt-1">Profile</span>
      </Link>
    </div>
  </div>
</div>


    </div>
  );
}
