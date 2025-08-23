import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly category?: string;
  readonly description?: string;
  readonly href?: string;
  readonly isVideo?: boolean;
  readonly showDescriptions?: boolean;
  readonly className?: string;
  readonly onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  image,
  imageAlt,
  category,
  description,
  href = '#',
  isVideo = false,
  showDescriptions = false,
  className = '',
  onClick
}) => {
  return (
    <Link
      href={href}
      className={`flex-shrink-0 cursor-pointer group w-full min-w-[18.5rem] md:min-w-[18.75rem] max-w-[18.5rem] sm:max-w-[22.375rem] lg:max-w-[28.625rem] rounded-lg overflow-hidden ${className}`}
      aria-label={title}
      {...(onClick && { onClick })}
    >
      <div className="transition-transform duration-300 shadow-lg w-full">
        <div className="relative aspect-square overflow-hidden rounded-lg w-full">
          <Image
            src={image}
            alt={imageAlt + id}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/[0.275] via-black/[0.125] to-transparent"></div>
          {/* Category Tag - Top Left */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 text-neutral-700 text-xs font-medium px-2 py-1 rounded">
                {category}
              </span>
            </div>
          )}
          
          {/* Play Icon - Top Right (Only if isVideo is true) */}
          {isVideo && (
            <div className="absolute top-3 right-3">
              <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                <i className="icon-Play text-neutral-700 text-sm" aria-hidden="true"></i>
              </div>
            </div>
          )}
          
          {/* Card Text Label - Overlay on image like original ServiceSlider */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 z-10">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-medium text-white transition-colors duration-300 leading-tight font-h3">
                  {title}
                </h3>
                {/* Arrow Icon - Using style guide icon, appears on hover */}
                <i className="icon-Arrow-Right text-white para-medium transition-all duration-300 transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" aria-hidden="true"></i>
              </div>
              {/* Description - Optional, only shows if provided and showDescriptions is true */}
              {showDescriptions && description && (
                <p className="text-white text-sm leading-relaxed text-center max-w-xs opacity-90">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard; 