// app/marketplace/accommodation/[id]/page.tsx
import { Metadata } from 'next';

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function AccommodationDetailPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Accommodation Detail for ID: {id}
      </h1>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Accommodation ${params.id}`,
  };
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
