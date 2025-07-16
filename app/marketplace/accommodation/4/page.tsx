'use client';

import { useEffect, useState } from 'react';

type PageProps = {
  params: {
    id: string;
  };
};

type Accommodation = {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
};

export default function AccommodationDetailPage({ params }: PageProps) {
  const { id } = params;

  const [data, setData] = useState<Accommodation | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const exampleData: Accommodation = {
      id,
      title: `Sample Accommodation ${id}`,
      description: 'This is a description of the accommodation.',
      price: '$1000/month',
      location: 'New York, USA',
    };
    setData(exampleData);
  }, [id]);

  return (
    <div className="min-h-screen px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Accommodation Detail for ID: {id}</h1>

      {data ? (
        <div className="space-y-2 bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="text-gray-600">{data.description}</p>
          <p className="text-gray-700 font-medium">Location: {data.location}</p>
          <p className="text-blue-600 font-semibold">Price: {data.price}</p>
        </div>
      ) : (
        <p>Loading accommodation details...</p>
      )}
    </div>
  );
}
