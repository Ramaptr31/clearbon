'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-pale-lime bg-opacity-10">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-dark-forest mb-6">Oops!</h1>
        <h2 className="text-2xl font-semibold text-dark-forest mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dark-forest hover:bg-sage focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pale-lime transition-all duration-300"
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-sage text-base font-medium rounded-md text-dark-forest bg-white hover:bg-pale-lime hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pale-lime transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 