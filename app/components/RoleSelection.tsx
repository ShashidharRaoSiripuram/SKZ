
'use client';

import { useState } from 'react';

interface RoleSelectionProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function RoleSelection({ formData, updateFormData, onNext, onPrev }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState(formData.role);

  const roles = [
    { id: 'student', label: 'Student', icon: 'ri-graduation-cap-line', color: 'blue' },
    { id: 'parent', label: 'Parent', icon: 'ri-parent-line', color: 'purple' }
  ];

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    updateFormData('role', role);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      onNext();
    }
  };

  return (
    <div className="p-6 bg-white mx-4 mt-4 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-user-line text-2xl text-indigo-600"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Your Role</h2>
        <p className="text-gray-600">Are you a student or parent?</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => handleRoleSelect(role.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-4 !rounded-button ${
                selectedRole === role.id
                  ? `border-${role.color}-500 bg-${role.color}-50`
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                selectedRole === role.id ? `bg-${role.color}-100` : 'bg-gray-100'
              }`}>
                <i className={`${role.icon} text-xl ${
                  selectedRole === role.id ? `text-${role.color}-600` : 'text-gray-600'
                }`}></i>
              </div>
              <div className="flex-1 text-left">
                <h3 className={`font-semibold ${
                  selectedRole === role.id ? `text-${role.color}-900` : 'text-gray-900'
                }`}>{role.label}</h3>
                <p className="text-sm text-gray-500">
                  {role.id === 'student' ? 'Planning your education abroad' : 'Supporting your child\'s dreams'}
                </p>
              </div>
              {selectedRole === role.id && (
                <i className={`ri-check-line text-xl text-${role.color}-600`}></i>
              )}
            </button>
          ))}
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
            disabled={!selectedRole}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 !rounded-button"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
