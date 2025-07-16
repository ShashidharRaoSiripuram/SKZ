
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    applicationUpdates: true,
    serviceReminders: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'private',
    shareProgress: false,
    allowContact: true
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Settings</h3>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-900">Account Settings</h4>
        </div>
        <div className="divide-y divide-gray-200">
          <Link href="/change-password" className="flex items-center justify-between p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg">
                <i className="ri-lock-line text-blue-600"></i>
              </div>
              <span className="text-sm text-gray-900">Change Password</span>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </Link>
          
          <Link href="/two-factor" className="flex items-center justify-between p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg">
                <i className="ri-shield-check-line text-green-600"></i>
              </div>
              <span className="text-sm text-gray-900">Two-Factor Authentication</span>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </Link>
          
          <button className="flex items-center justify-between p-4 hover:bg-gray-50 w-full text-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg">
                <i className="ri-download-line text-purple-600"></i>
              </div>
              <span className="text-sm text-gray-900">Export Data</span>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-900">Notification Preferences</h4>
        </div>
        <div className="p-4 space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-900 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => handleNotificationChange(key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-900">Privacy Settings</h4>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
            <select
              value={privacy.profileVisibility}
              onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-900">Share Study Progress</span>
            <button
              onClick={() => handlePrivacyChange('shareProgress', !privacy.shareProgress)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                privacy.shareProgress ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  privacy.shareProgress ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-900">Allow Contact from Services</span>
            <button
              onClick={() => handlePrivacyChange('allowContact', !privacy.allowContact)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                privacy.allowContact ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  privacy.allowContact ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Support & Help */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-900">Support & Help</h4>
        </div>
        <div className="divide-y divide-gray-200">
          <Link href="/help" className="flex items-center justify-between p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded-lg">
                <i className="ri-question-line text-orange-600"></i>
              </div>
              <span className="text-sm text-gray-900">Help Center</span>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </Link>
          
          <Link href="/contact" className="flex items-center justify-between p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg">
                <i className="ri-customer-service-line text-teal-600"></i>
              </div>
              <span className="text-sm text-gray-900">Contact Support</span>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </Link>
          
          <Link href="/feedback" className="flex items-center justify-between p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-lg">
                <i className="ri-feedback-line text-pink-600"></i>
              </div>
              <span className="text-sm text-gray-900">Send Feedback</span>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </Link>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-red-600">Danger Zone</h4>
        </div>
        <div className="p-4 space-y-3">
          <button className="w-full p-3 text-left text-red-600 hover:bg-red-50 rounded-lg border border-red-200 !rounded-button">
            <div className="flex items-center space-x-3">
              <i className="ri-logout-box-line"></i>
              <span className="text-sm font-medium">Sign Out</span>
            </div>
          </button>
          <button className="w-full p-3 text-left text-red-600 hover:bg-red-50 rounded-lg border border-red-200 !rounded-button">
            <div className="flex items-center space-x-3">
              <i className="ri-delete-bin-line"></i>
              <span className="text-sm font-medium">Delete Account</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
