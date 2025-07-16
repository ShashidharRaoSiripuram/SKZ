// app/marketplace/accommodation/[id]/page.tsx
type PageProps = {
  params: {
    id: string;
  };
};

export default function AccommodationDetailPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Accommodation Detail for ID: {id}</h1>
      {/* Add your component or logic here */}
    </div>
  );
}
