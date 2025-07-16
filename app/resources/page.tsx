
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'IELTS Preparation Guide',
      category: 'test-prep',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 1250,
      description: 'Complete IELTS preparation with practice tests',
      image: 'https://readdy.ai/api/search-image?query=IELTS%20test%20preparation%20books%20and%20materials%20on%20study%20desk%2C%20clean%20organized%20workspace%2C%20educational%20content%2C%20bright%20lighting&width=80&height=80&seq=14&orientation=squarish'
    },
    {
      id: 2,
      title: 'SOP Writing Workshop',
      category: 'applications',
      type: 'Video',
      size: '45 min',
      downloads: 890,
      description: 'Step-by-step guide to writing compelling SOPs',
      image: 'https://readdy.ai/api/search-image?query=Student%20writing%20statement%20of%20purpose%20on%20laptop%2C%20focused%20study%20environment%2C%20academic%20writing%20setup%2C%20natural%20lighting&width=80&height=80&seq=15&orientation=squarish'
    },
    {
      id: 3,
      title: 'Scholarship Database',
      category: 'funding',
      type: 'Database',
      size: 'Online',
      downloads: 2100,
      description: 'Comprehensive list of international scholarships',
      image: 'https://readdy.ai/api/search-image?query=Scholarship%20application%20documents%20and%20forms%20spread%20on%20desk%2C%20financial%20aid%20materials%2C%20organized%20paperwork%2C%20professional%20setting&width=80&height=80&seq=16&orientation=squarish'
    },
    {
      id: 4,
      title: 'Visa Interview Tips',
      category: 'visa',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 756,
      description: 'Expert tips for successful visa interviews',
      image: 'https://readdy.ai/api/search-image?query=Professional%20visa%20interview%20preparation%20materials%2C%20passport%20and%20documents%2C%20clean%20office%20environment%2C%20formal%20setting&width=80&height=80&seq=17&orientation=squarish'
    },
    {
      id: 5,
      title: 'University Rankings 2024',
      category: 'universities',
      type: 'Report',
      size: '5.2 MB',
      downloads: 1680,
      description: 'Latest global university rankings and analysis',
      image: 'https://readdy.ai/api/search-image?query=University%20ranking%20charts%20and%20reports%20on%20desk%2C%20academic%20research%20materials%2C%20statistical%20data%20visualization%2C%20professional%20workspace&width=80&height=80&seq=18&orientation=squarish'
    },
    {
      id: 6,
      title: 'Living Abroad Guide',
      category: 'lifestyle',
      type: 'eBook',
      size: '3.1 MB',
      downloads: 445,
      description: 'Essential guide for international students',
      image: 'https://readdy.ai/api/search-image?query=International%20student%20life%20guide%20with%20world%20map%20and%20travel%20documents%2C%20multicultural%20study%20materials%2C%20organized%20desk%20setup&width=80&height=80&seq=19&orientation=squarish'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources', icon: 'ri-folder-line' },
    { id: 'test-prep', name: 'Test Prep', icon: 'ri-pencil-line' },
    { id: 'applications', name: 'Applications', icon: 'ri-file-text-line' },
    { id: 'funding', name: 'Funding', icon: 'ri-money-dollar-circle-line' },
    { id: 'visa', name: 'Visa', icon: 'ri-passport-line' },
    { id: 'universities', name: 'Universities', icon: 'ri-school-line' },
    { id: 'lifestyle', name: 'Lifestyle', icon: 'ri-home-heart-line' }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/dashboard" className="w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-left-line text-gray-600"></i>
              </Link>
              <h1 className="text-lg font-bold text-gray-800">Resources</h1>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-search-line text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 space-y-6">
        {/* Categories */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors !rounded-button ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Resource */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">Study Abroad Masterclass</h3>
              <p className="text-purple-100 text-sm mb-3">Complete guide from application to graduation</p>
              <button className="px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-medium !rounded-button">
                Watch Now
              </button>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <i className="ri-play-circle-line text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Resources List */}
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start space-x-3">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-16 h-16 rounded-xl object-cover object-top"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{resource.title}</h3>
                      <p className="text-xs text-gray-600">{resource.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-blue-600">{resource.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  
                  <button className="w-full py-2 bg-blue-600 text-white rounded-xl text-sm font-medium !rounded-button">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/resources/webinars" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-live-line text-orange-600 text-sm"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Webinars</p>
                <p className="text-xs text-gray-600">Live sessions</p>
              </div>
            </Link>
            <Link href="/resources/templates" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-file-copy-line text-green-600 text-sm"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Templates</p>
                <p className="text-xs text-gray-600">SOP & Essays</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Study Tips</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-lightbulb-line text-blue-600 text-xs"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Time Management</p>
                <p className="text-xs text-gray-600">Plan your application timeline effectively</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-bookmark-line text-green-600 text-xs"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Research Skills</p>
                <p className="text-xs text-gray-600">How to research universities and programs</p>
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
