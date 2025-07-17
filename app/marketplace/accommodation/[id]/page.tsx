// app/marketplace/accommodation/[id]/page.tsx
import { Metadata } from 'next';
import { type DynamicParams } from 'next/types';

// Use the built-in types from Next.js
interface PageProps {
  params: {
    id: string;
  };
}

export default function AccommodationDetailPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Accommodation Detail for ID: {id}
      </h1>
      {/* Add your component or logic here */}
    </div>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Accommodation ${params.id}`,
  };
}

export async function generateStaticParams(): Promise<DynamicParams> {
  return [{ id: '4' }]; // Add more static IDs if needed
}
