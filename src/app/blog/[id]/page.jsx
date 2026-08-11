import PageClient from './PageClient';
import { blogArticles } from '@/data/blogData';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id || resolvedParams.slug;
  const article = blogArticles[id];

  if (!article) {
    return {
      title: 'Blog Article | The DentalBrace Clinic Bathinda',
      description: 'Read high-quality patient education guides and dental insights from specialists at The DentalBrace Clinic Bathinda.'
    };
  }

  const title = article.metaTitle || `${article.title} | The DentalBrace Clinic`;
  const description = article.metaDesc || article.excerpt;
  const canonical = `https://www.thedentalbrace.com/blog/${id}`;
  const image = `https://www.thedentalbrace.com${article.image}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
      siteName: 'The DentalBrace Clinic & Implant Centre',
      images: [{ url: image, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <PageClient params={resolvedParams} />;
}
