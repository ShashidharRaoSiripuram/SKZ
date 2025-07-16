
'use client';

export default function ServiceHistory() {
  const services = [
    {
      id: 1,
      type: 'Visa Consultation',
      provider: 'VisaMax Advisors',
      date: '2024-02-15',
      status: 'Completed',
      amount: '$149',
      rating: 5
    },
    {
      id: 2,
      type: 'Study Loan',
      provider: 'EduLoan Partners',
      date: '2024-01-20',
      status: 'Active',
      amount: '$50,000',
      rating: 4
    },
    {
      id: 3,
      type: 'Accommodation',
      provider: 'HomeStay Connect',
      date: '2024-01-10',
      status: 'Booked',
      amount: '$1,200/month',
      rating: 5
    },
    {
      id: 4,
      type: 'University Application',
      provider: 'StudyPath Consultants',
      date: '2023-12-05',
      status: 'Completed',
      amount: '$299',
      rating: 4
    },
    {
      id: 5,
      type: 'Document Verification',
      provider: 'VisaMax Advisors',
      date: '2023-11-18',
      status: 'Completed',
      amount: '$99',
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      case 'Booked':
        return 'bg-purple-100 text-purple-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`ri-star-${i < rating ? 'fill' : 'line'} text-xs ${
              i < rating ? 'text-yellow-500' : 'text-gray-300'
            }`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Service History</h3>
        <div className="text-sm text-gray-500">
          Total: {services.length} services
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="text-2xl font-bold">$51,947</div>
          <div className="text-sm opacity-90">Total Spent</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
          <div className="text-2xl font-bold">4.6</div>
          <div className="text-sm opacity-90">Avg Rating</div>
        </div>
      </div>

      {/* Service List */}
      <div className="space-y-3">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{service.type}</h4>
                <p className="text-xs text-gray-600">{service.provider}</p>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900 text-sm">{service.amount}</div>
                <div className="text-xs text-gray-500">{new Date(service.date).toLocaleDateString()}</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                {service.status}
              </span>
              {service.rating && renderStars(service.rating)}
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <button className="w-full py-3 text-blue-600 text-sm font-medium border border-blue-200 rounded-lg hover:bg-blue-50 !rounded-button">
        Load More History
      </button>
    </div>
  );
}
