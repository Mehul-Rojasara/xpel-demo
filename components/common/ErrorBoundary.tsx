'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/components/ui/Toast';

interface Props {
  readonly children: ReactNode;
  readonly fallback?: ReactNode;
}

// Modern Error Boundary using function component with error handling
export const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    // Global error handler for unhandled errors
    const handleError = () => {
      setHasError(true);
      
      // Show user-friendly toast
      showToast({
        variant: 'error',
        text: 'Something went wrong. Please try refreshing the page.',
        duration: 5000
      });
    };

    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setHasError(true);
      
      // Log the rejection reason for debugging
      console.error('Unhandled promise rejection:', event.reason);
      
      showToast({
        variant: 'error',
        text: 'A network request failed. Please check your connection and try again.',
        duration: 5000
      });
    };

    // Add global error listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [showToast]);

  // Reset error state when children change
  useEffect(() => {
    setHasError(false);
  }, [children]);

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
            <p className="mt-2 text-sm text-gray-500">
              We&apos;re experiencing technical difficulties. Please try refreshing the page.
            </p>
            <div className="mt-4">
              <button
                onClick={() => {
                  setHasError(false);
                  window.location.reload();
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}; 