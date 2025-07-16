
'use client';

import { useState } from 'react';

export default function ProfileHeader() {
  const [showImageOptions, setShowImageOptions] = useState(false);

  return (
    <div className="bg-white p-6">
      <div className="flex items-center space-x-4">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20young%20student%20with%20friendly%20smile%2C%20business%20casual%20attire%2C%20clean%20background%2C%20high%20quality%20portrait%20photography%2C%20natural%20lighting%2C%20sharp%20focus&width=80&height=80&seq=profile-pic&orientation=squarish"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setShowImageOptions(!showImageOptions)}
            className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white"
          >
            <i className="ri-camera-line text-white text-sm"></i>
          </button>
          
          {/* Image Options Popup */}
          {showImageOptions && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border py-2 z-20 min-w-32">
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                <i className="ri-camera-line mr-2"></i>
                Take Photo
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                <i className="ri-image-line mr-2"></i>
                Choose Photo
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center">
                <i className="ri-delete-bin-line mr-2"></i>
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">Sarah Johnson</h2>
          <p className="text-gray-600 text-sm">sarah.johnson@email.com</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-green-800 text-xs font-medium">Verified</span>
            </div>
            <span className="text-gray-400 text-xs ml-2">Student ID: STU2024001</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-xs text-gray-500">Active Applications</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">7</div>
          <div className="text-xs text-gray-500">Services Used</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">2</div>
          <div className="text-xs text-gray-500">Years Member</div>
        </div>
      </div>
    </div>
  );
}
