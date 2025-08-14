'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface CalculatorIframeProps {
  className?: string;
}

export const CalculatorIframe: React.FC<CalculatorIframeProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] ${className} flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg`}>
        <div className="text-center">
          <p className="text-gray-500 mb-4">Calculator could not be loaded</p>
          <Button
            variant="primary"
            buttonStyle="filled"
            size="md"
            background="light"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] ${className} relative`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-300 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading calculator...</p>
          </div>
        </div>
      )}
      
      <iframe
        src="https://www.convertcalculator.com/embed/99r2nSZP6iCPGMLCY/?url=https%3A%2F%2Flp.xpel.com%2Fpaint-protection-f"
        className="w-full h-full border-0 rounded-lg"
        allowFullScreen
        loading="lazy"
        title="XPEL Paint Protection Calculator - Calculate film coverage and costs for your vehicle"
        onLoad={handleLoad}
        onError={handleError}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="XPEL Paint Protection Calculator - Interactive tool to calculate paint protection film coverage and pricing"
      />
    </div>
  );
}; 