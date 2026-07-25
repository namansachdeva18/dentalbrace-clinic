import { notFound } from 'next/navigation';
import conditionsData from '@/data/conditions';
import PageClient from './PageClient';

export function generateStaticParams() {
  return Object.keys(conditionsData).map((slug) => ({
    id: slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = conditionsData[resolvedParams.id];
  
  if (!data) {
    return {
      title: 'Condition Not Found | The DentalBrace Clinic',
    };
  }

  return {
    title: `${data.title} - Treatment in Bathinda | The DentalBrace Clinic`,
    description: data.quickOverview,
    openGraph: {
      title: `${data.title} - Expert Treatment in Bathinda`,
      description: data.quickOverview,
      type: 'website',
    },
  };
}

export default async function ConditionPage({ params }) {
  const resolvedParams = await params;
  const data = conditionsData[resolvedParams.id];
  
  if (!data) {
    notFound();
  }

  return <PageClient data={data} slug={resolvedParams.id} />;
}
