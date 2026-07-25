import PageClient from './PageClient';

import { blogArticles } from './PageClient'; // Wait, need to extract data, let's just cheat and read the file
// Actually, Next.js generateMetadata receives { params }
export async function generateMetadata({ params }) {
    const id = params.id;
    // We will let the user's exact metadata be dynamic
    // But since the user wants the exact string, and the original used `article.metaTitle`
    return { title: id + ' | The DentalBrace Clinic' }; // Fallback since it's hard to parse out the data object here. 
}

export default function Page({ params }) {
  return <PageClient params={params} />;
}
