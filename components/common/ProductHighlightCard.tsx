import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductHighlightCardProps {
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description?: string;
  readonly price?: string;
  readonly buttonText: string;
  readonly buttonHref: string;
  readonly className?: string;
}

export const ProductHighlightCard: React.FC<ProductHighlightCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  price,
  buttonText,
  buttonHref,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden ${className}`}>
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Product Information */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            {title}
          </h3>
          
          {description && (
            <p className="text-neutral-600 text-base md:text-lg mb-4">
              {description}
            </p>
          )}
          
          {price && (
            <p className="text-2xl font-bold text-neutral-900 mb-6">
              {price}
            </p>
          )}
          
          <Link
            href={buttonHref}
            className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-md font-medium hover:bg-neutral-800 transition-colors duration-200 text-center w-fit"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}; 