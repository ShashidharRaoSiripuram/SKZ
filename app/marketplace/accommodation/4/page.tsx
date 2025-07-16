// File: app/marketplace/accommodation/[id]/page.tsx
import { Metadata } from 'next';
import AccommodationDetail from './AccommodationDetail';

// ✅ This is the official Next.js App Router prop type
type PageProps = {
  params: {
    id: string;
  };
};

// Optional SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Accommodation ${params.id}`,
  };
}

export async function generateStaticParams() {
  return [{ id: '4' }]; // add more if needed
}

export default function AccommodationPage({ params }: PageProps) {
  // Optional: pass params.id to the detail component
  return <AccommodationDetail />;
}
