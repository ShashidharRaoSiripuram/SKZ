'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Applications() {
  const [activeFilter, setActiveFilter] = useState('all');

  const applications = [
    {
      id: 1,
      university: 'Stanford University',
      program: 'MS Computer Science',
      country: 'USA',
      status: 'Under Review',
      progress: 75,
      deadline: '2024-01-15',
      submitted: '2023-12-20',
      statusColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      image: 'https://readdy.ai/api/search-image?query=Stanford%20University%20iconic%20main%20building%20with%20palm%20trees%2C%20beautiful%20campus%20architecture%2C%20sunny%20California%20day%2C%20academic%20atmosphere&width=80&height=80&seq=10&orientation=squarish'
    },
    {
      id: 2,
      university: 'University of Toronto',
      program: 'MS Data Science',
      country: 'Canada',
      status: 'Documents Required',
      progress: 45,
      deadline: '2024-02-01',
      submitted: null,
      statusColor: 'text-orange-600',
      bgColor: 'bg-orange-100',
      image: 'https://readdy.ai/api/search-image?query=University%20of%20Toronto%20main%20campus%20building%2C%20Gothic%20Revival%20architecture%2C%20Canadian%20university%20setting%2C%20academic%20environment&width=80&height=80&seq=11&orientation=squarish'
    },
    {
      id: 3,
      university: 'University of Melbourne',
      program: 'MS AI & Machine Learning',
      country: 'Australia',
      status: 'Accepted',
      progress: 100,
      deadline: '2023-11-30',
      submitted: '2023-11-15',
      statusColor: 'text-green-600',
      bgColor: 'bg-green-100',
      image: 'https://readdy.ai/api/search-image?query=University%20of%20Melbourne%20campus%20with%20modern%20buildings%2C%20Australian%20university%20architecture%2C%20sunny%20day%20with%20students&width=80&height=80&seq=12&orientation=squarish'
    },
    {
      id: 4,
      university: 'ETH Zurich',
      program: 'MS Computer Science',
      country: 'Switzerland',
      status: 'Rejected',
      progress: 100,
      deadline: '2023-12-01',
      submitted: '2023-11-28',
      statusColor: 'text-red-600',
      bgColor: 'bg-red-100',
      image: 'https://readdy.ai/api/search-image?query=ETH%20Zurich%20campus%20buildings%20with%20Swiss%20Alps%20in%20background%2C%20prestigious%20university%20architecture%2C%20European%20academic%20setting&width=80&height=80&seq=13&orientation=squarish'
    }
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'pending', name: 'Pending' },
    { id: 'accepted', name: 'Accepted' },
    { id: 'rejected', name: 'Rejected' }
  ];

  const getFilteredApplications = () => {
    if (activeFilter === 'all') return applications;
    if (activeFilter === 'pending') return applications.filter(app =>
      app.status === 'Under Review' || app.status === 'Documents Required'
    );
    if (activeFilter === 'accepted') return applications.filter(app => app.status === 'Accepted');
    if (activeFilter === 'rejected') return applications.filter(app => app.status === 'Rejected');
    return applications;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-800">My Applications</h1>
            <Link href="/applications/new" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-add-line text-white text-sm"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="text-lg font-bold text-blue-600">{applications.length}</div>
            <div className="text-xs text-gray-600">Total</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="text-lg font-bold text-orange-600">
              {applications.filter(app => app.status === 'Under Review' || app.status === 'Documents Required').length}
            </div>
            <div className="text-xs text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="text-lg font-bold text-green-600">
              {applications.filter(app => app.status === 'Accepted').length}
            </div>
            <div className="text-xs text-gray-600">Accepted</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <div className="text-lg font-bold text-red-600">
              {applications.filter(app => app.status === 'Rejected').length}
            </div>
            <div className="text-xs text-gray-600">Rejected</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors !rounded-button ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {getFilteredApplications().map((app) => (
            <Link key={app.id} href={`/applications/${app.id}`} className="bg-white rounded-2xl p-4 shadow-sm block">
              <div className="flex items-start space-x-3">
                <Image
                  src={app.image}
                  alt={app.university}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-xl object-cover object-top"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{app.university}</h3>
                      <p className="text-xs text-gray-600">{app.program}</p>
                      <p className="text-xs text-gray-500">{app.country}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full ${app.bgColor}`}>
                      <span className={`text-xs font-medium ${app.statusColor}`}>{app.status}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Progress</span>
                      <span className="text-xs font-medium text-gray-800">{app.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          app.status === 'Accepted'
                            ? 'bg-green-500'
                            : app.status === 'Rejected'
                            ? 'bg-red-500'
                            : 'bg-blue-500'
                        }`}
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Deadline: {new Date(app.deadline).toLocaleDateString()}</span>
                      {app.submitted && <span>Submitted: {new Date(app.submitted).toLocaleDateString()}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Tips</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-blue-600 text-xs"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Submit Early</p>
                <p className="text-xs text-gray-600">Apply at least 2 weeks before deadline</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-file-text-line text-green-600 text-xs"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Double Check Documents</p>
                <p className="text-xs text-gray-600">Review all requirements carefully</p>
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
