import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-pale-lime bg-opacity-10">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-dark-forest mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-dark-forest mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dark-forest hover:bg-sage focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pale-lime transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 