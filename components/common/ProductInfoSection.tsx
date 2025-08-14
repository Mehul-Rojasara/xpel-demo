import React from 'react';
import Image from 'next/image';

interface ApplicationCategory {
  id: string;
  title: string;
  description?: string;
}

interface ProductInfoSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  applications: ApplicationCategory[];
  className?: string;
  background?: 'dark' | 'light';
  imagePosition?: 'left' | 'right';
  imageAspectRatio?: 'square' | 'video' | 'auto';
  spacing?: 'sm' | 'md' | 'lg';
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  applications,
  className = '',
  background = 'dark',
  imagePosition = 'left',
  imageAspectRatio = 'video',
  spacing = 'lg'
}) => {
  const backgroundClasses = {
    dark: 'bg-neutral-900 text-white',
    light: 'bg-white text-neutral-900'
  };

  const spacingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16'
  };

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: 'aspect-auto'
  };

  const imageOrder = imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1';
  const contentOrder = imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2';

  return (
    <section className={`px-4 sm:px-6 lg:px-8 ${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`} role="region" aria-label="Product information">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className={imageOrder}>
            <div className={`${aspectRatioClasses[imageAspectRatio]} overflow-hidden rounded-lg`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={contentOrder}>
            {/* Title and Subtitle */}
            <div className="mb-8">
              {subtitle && (
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-80">
                  {subtitle}
                </h3>
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90">
              {description}
            </p>

            {/* Application Categories */}
            <div className="space-y-6">
              {applications.map((application, index) => (
                <div key={application.id} className="group">
                  <div className="flex items-start space-x-4">
                    {/* Application Title */}
                    <h4 className="text-xl font-semibold leading-tight">
                      {application.title}
                    </h4>
                    
                    {/* Separator (except for last item) */}
                    {index < applications.length - 1 && (
                      <span className="text-lg opacity-60 mt-1">|</span>
                    )}
                  </div>
                  
                  {/* Application Description (if provided) */}
                  {application.description && (
                    <p className="text-base mt-2 opacity-80 leading-relaxed">
                      {application.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection; 