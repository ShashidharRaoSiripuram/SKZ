
'use client';

export default function ApplicationProgress() {
  const applications = [
    {
      id: 1,
      university: 'Stanford University',
      program: 'Computer Science MS',
      country: 'USA',
      status: 'Under Review',
      progress: 75,
      statusColor: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      university: 'University of Toronto',
      program: 'Data Science MS',
      country: 'Canada',
      status: 'Documents Required',
      progress: 45,
      statusColor: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 3,
      university: 'University of Melbourne',
      program: 'AI & Machine Learning',
      country: 'Australia',
      status: 'Accepted',
      progress: 100,
      statusColor: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Progress</h3>
      <div className="space-y-4">
        {applications.map((app) => (
          <div key={app.id} className="border border-gray-100 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 text-sm">{app.university}</h4>
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
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${app.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
