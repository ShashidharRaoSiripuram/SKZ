'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Community() {
  const [activeTab, setActiveTab] = useState('chats');

  const chats = [
    {
      id: 1,
      name: 'Stanford CS 2025',
      lastMessage: 'Anyone submitted their SOP yet?',
      time: '2m ago',
      unread: 3,
      members: 45,
      country: 'USA',
      image: 'https://readdy.ai/api/search-image?query=Stanford%20University%20campus%20with%20students%20studying%20computer%20science%2C%20modern%20buildings%2C%20academic%20atmosphere%2C%20sunny%20day&width=80&height=80&seq=6&orientation=squarish'
    },
    {
      id: 2,
      name: 'Toronto Data Science',
      lastMessage: 'Thanks for sharing the scholarship info!',
      time: '15m ago',
      unread: 0,
      members: 32,
      country: 'Canada',
      image: 'https://readdy.ai/api/search-image?query=University%20of%20Toronto%20campus%20with%20data%20science%20students%2C%20modern%20academic%20building%2C%20Canadian%20university%20atmosphere&width=80&height=80&seq=7&orientation=squarish'
    },
    {
      id: 3,
      name: 'Melbourne AI Group',
      lastMessage: 'Visa interview tips needed',
      time: '1h ago',
      unread: 1,
      members: 28,
      country: 'Australia',
      image: 'https://readdy.ai/api/search-image?query=University%20of%20Melbourne%20campus%20with%20AI%20and%20machine%20learning%20students%2C%20modern%20tech%20facilities%2C%20Australian%20university%20setting&width=80&height=80&seq=8&orientation=squarish'
    },
    {
      id: 4,
      name: 'UK Engineering Hub',
      lastMessage: 'Housing recommendations for London?',
      time: '3h ago',
      unread: 0,
      members: 67,
      country: 'UK',
      image: 'https://readdy.ai/api/search-image?query=UK%20university%20campus%20with%20engineering%20students%2C%20traditional%20British%20architecture%2C%20academic%20environment%2C%20cloudy%20day&width=80&height=80&seq=9&orientation=squarish'
    }
  ];

  const countries = [
    { name: 'USA', count: 156, flag: '🇺🇸' },
    { name: 'Canada', count: 89, flag: '🇨🇦' },
    { name: 'Australia', count: 67, flag: '🇦🇺' },
    { name: 'UK', count: 134, flag: '🇬🇧' },
    { name: 'Germany', count: 45, flag: '🇩🇪' },
    { name: 'Netherlands', count: 23, flag: '🇳🇱' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-800">Community</h1>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-add-line text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 space-y-6">
        {/* Tab Switcher */}
        <div className="bg-white rounded-2xl p-1 shadow-sm">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setActiveTab('chats')}
              className={`py-2 px-4 rounded-xl text-sm font-medium transition-colors !rounded-button ${
                activeTab === 'chats' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              Group Chats
            </button>
            <button
              onClick={() => setActiveTab('countries')}
              className={`py-2 px-4 rounded-xl text-sm font-medium transition-colors !rounded-button ${
                activeTab === 'countries' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              By Country
            </button>
          </div>
        </div>

        {activeTab === 'chats' ? (
          <div className="space-y-3">
            {chats.map((chat) => (
              <Link key={chat.id} href={`/community/chat/${chat.id}`} className="bg-white rounded-2xl p-4 shadow-sm block">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image 
                      src={chat.image} 
                      alt={chat.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-xl object-cover object-top"
                      unoptimized
                    />
                    {chat.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-800 text-sm truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 truncate">{chat.lastMessage}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{chat.members} members</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{chat.country}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {countries.map((country, index) => (
              <Link key={index} href={`/community/country/${country.name.toLowerCase()}`} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl mb-2">{country.flag}</div>
                  <h3 className="font-medium text-gray-800 text-sm">{country.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{country.count} students</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Popular Topics */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Topics</h3>
          <div className="flex flex-wrap gap-2">
            {['Visa Process', 'SOP Writing', 'Scholarships', 'Housing', 'Part-time Jobs', 'Banking'].map((topic, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                #{topic}
              </span>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Study Tips</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-lightbulb-line text-green-600 text-sm"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">IELTS Speaking Tips</p>
                <p className="text-xs text-gray-600">Practice with native speakers daily</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-book-line text-blue-600 text-sm"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">SOP Structure</p>
                <p className="text-xs text-gray-600">Follow the 5-paragraph format</p>
              </div>
            </div>
          </div>
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
            <Link href="/applications" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-gray-500">
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
            <Link href="/community" className="flex flex-col items-center justify-center px-4 py-2 min-w-[20%] text-blue-600">
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
