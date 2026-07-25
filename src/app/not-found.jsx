export const generateMetadata = () => {
  return {
    title: "Page Not Found | The DentalBrace Clinic",
  };
};




import Link from 'next/link';
import { Home } from 'lucide-react';

const NotFound = () => {

  return (
    <div className="page-wrapper">
      
      
      <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
      <h2 className="text-2xl font-bold text-primary mb-6">Oops! We couldn't find that page.</h2>
      <p className="text-secondary max-w-md mx-auto mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link href="/" className="btn btn-primary inline-flex items-center gap-2">
        <Home size={18} />
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
