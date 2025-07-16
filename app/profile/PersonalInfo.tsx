
'use client';

import { useState } from 'react';

export default function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1999-03-15',
    nationality: 'United States',
    address: '123 Main Street, New York, NY 10001',
    emergencyContact: 'John Johnson - +1 (555) 987-6543',
    studyLevel: 'Masters',
    fieldOfStudy: 'Computer Science',
    preferredCountries: 'Canada, UK, Australia'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="space-y-6">
      {/* Edit Toggle */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium !rounded-button"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Basic Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-900">{formData.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-900">{formData.lastName}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-sm text-gray-900">{formData.email}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-sm text-gray-900">{formData.phone}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Date of Birth</label>
            {isEditing ? (
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-900">{new Date(formData.dateOfBirth).toLocaleDateString()}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Nationality</label>
            {isEditing ? (
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-900">{formData.nationality}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-700 mb-1">Address</label>
          {isEditing ? (
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-sm text-gray-900">{formData.address}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-700 mb-1">Emergency Contact</label>
          {isEditing ? (
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-sm text-gray-900">{formData.emergencyContact}</p>
          )}
        </div>
      </div>

      {/* Academic Information */}
      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Academic Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Study Level</label>
            {isEditing ? (
              <select
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Bachelors">Bachelor&aposs</option>
                <option value="Masters">Master&aposs</option>
                <option value="PhD">PhD</option>
                <option value="Diploma">Diploma</option>
              </select>
            ) : (
              <p className="text-sm text-gray-900">{formData.studyLevel}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Field of Study</label>
            {isEditing ? (
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-900">{formData.fieldOfStudy}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Study Countries</label>
          {isEditing ? (
            <input
              type="text"
              name="preferredCountries"
              value={formData.preferredCountries}
              onChange={handleInputChange}
              placeholder="e.g., Canada, UK, Australia"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-sm text-gray-900">{formData.preferredCountries}</p>
          )}
        </div>
      </div>
    </div>
  );
}
