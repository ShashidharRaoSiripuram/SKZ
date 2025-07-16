// app/marketplace/accommodation/[id]/page.tsx
type PageProps = {
  params: {
    id: string;
  };
};

export default function AccommodationDetailPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div>
      <h1>Accommodation Detail for ID: {id}</h1>
    </div>
  );
}
