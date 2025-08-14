import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  hoverImage?: string; // Optional second image for hover effect
  altText?: string;
  href?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  hoverImage,
  altText,
  href,
  className = ''
}) => {
  const CardContent = () => (
    <div className={`relative overflow-hidden rounded-lg shadow-sm bg-white w-full h-[469px] group ${className}`}>
      {/* Image Container */}
      <div className="relative h-full">
        {/* Primary Image */}
        <Image
          src={image}
          alt={altText || title}
          fill
          className={`object-cover transition-all duration-300 ${
            hoverImage ? 'group-hover:opacity-0' : 'group-hover:opacity-80'
          }`}
        />
        
        {/* Hover Image (if provided) */}
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${altText || title} - hover view`}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300" />
        
        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="font-h3 text-white mb-3">
            {title}
          </h3>
          <p className="para-medium text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}; 