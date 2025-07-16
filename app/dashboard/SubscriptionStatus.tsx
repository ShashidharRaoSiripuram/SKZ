
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubscriptionStatus() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">
            {isSubscribed ? 'Premium Active' : 'Upgrade to Premium'}
          </h3>
          <p className="text-blue-100 text-sm mb-3">
            {isSubscribed 
              ? 'Access all consultants and services' 
              : 'Unlock all marketplace services and consultants'
            }
          </p>
          {!isSubscribed && (
            <Link href="/subscription" className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium !rounded-button">
              Subscribe Now
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          )}
        </div>
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
          <i className={`${isSubscribed ? 'ri-vip-crown-line' : 'ri-star-line'} text-2xl`}></i>
        </div>
      </div>
      {isSubscribed && (
        <div className="mt-4 pt-4 border-t border-blue-500/30">
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-100">Valid until</span>
            <span className="font-medium">Dec 31, 2024</span>
          </div>
        </div>
      )}
    </div>
  );
}
