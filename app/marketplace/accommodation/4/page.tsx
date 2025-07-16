import { Metadata } from 'next';

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Accommodation ${params.id}`,
    description: `Details for accommodation ID ${params.id}`
  };
}

export default function AccommodationDetailPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Accommodation Detail for ID: {id}</h1>
      {/* Replace this with your actual component or details */}
      <p className="text-gray-600">This page displays information for accommodation with ID {id}.</p>
    </div>
  );
}
