'use client';

import Link from 'next/link';

export default function MarketplaceGrid() {
  const services = [
    {
      id: 1,
      name: 'Study Abroad Consultants',
      icon: 'ri-graduation-cap-line',
      color: 'bg-blue-100 text-blue-600',
      route: '/marketplace/consultants',
    },
    {
      id: 2,
      name: 'Financial Institutions',
      icon: 'ri-bank-line',
      color: 'bg-green-100 text-green-600',
      route: '/marketplace/loans',
    },
    {
      id: 3,
      name: 'Visa Advisors',
      icon: 'ri-passport-line',
      color: 'bg-purple-100 text-purple-600',
      route: '/marketplace/visa',
    },
    {
      id: 4,
      name: 'Accommodation',
      icon: 'ri-home-line',
      color: 'bg-orange-100 text-orange-600',
      route: '/marketplace/accommodation',
    },
    {
      id: 5,
      name: 'Forex Services',
      icon: 'ri-exchange-line',
      color: 'bg-indigo-100 text-indigo-600',
      route: '/marketplace/forex',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-gray-800">Marketplace Services</h2>
        <Link href="/marketplace" className="text-sm text-blue-600 font-medium hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.route}
            className="flex flex-col items-center p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-2`}>
              <i className={`${service.icon} text-lg`}></i>
            </div>
            <span className="text-xs font-medium text-gray-700 text-center leading-tight">
              {service.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
