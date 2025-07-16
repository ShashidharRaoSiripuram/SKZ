
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ApplicationProgress from './ApplicationProgress';
import MarketplaceGrid from './MarketplaceGrid';
import SubscriptionStatus from './SubscriptionStatus';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-800">Student Dashboard</h1>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 px-4 space-y-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome back, Alex!</h2>
          <p className="text-gray-600 text-sm">Track your study abroad journey</p>
        </div>

        {/* Application Progress */}
        <ApplicationProgress />

        {/* Financial Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-green-600"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500">Forex Rate</p>
                <p className="text-lg font-semibold text-gray-800">1 USD = 83.24 INR</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-bank-line text-orange-600"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500">Frozen Fees</p>
                <p className="text-lg font-semibold text-gray-800">$12,500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <SubscriptionStatus />

        {/* Marketplace Services */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Marketplace Services</h3>
            <Link href="/marketplace" className="text-blue-600 text-sm font-medium">
              View All
            </Link>
          </div>
          <MarketplaceGrid />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/resources" className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-book-line text-purple-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Resources</p>
                <p className="text-xs text-gray-500">Study materials</p>
              </div>
            </div>
          </Link>
          <Link href="/community" className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <i className="ri-group-line text-pink-600"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Community</p>
                <p className="text-xs text-gray-500">Chat with peers</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

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
