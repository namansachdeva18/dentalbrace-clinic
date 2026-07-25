import PageClient from './PageClient';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug || resolvedParams.id;
    return { title: slug + ' | The DentalBrace Clinic' };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <PageClient params={resolvedParams} />;
}
