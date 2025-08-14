import React from 'react';
import Image from 'next/image';

interface ContentItem {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

interface ContentGridProps {
  title?: string;
  items: ContentItem[];
  className?: string;
  background?: 'dark' | 'light';
  columns?: 1 | 2 | 3;
  spacing?: 'sm' | 'md' | 'lg';
  imageAspectRatio?: 'square' | 'video' | 'auto';
}

export const ContentGrid: React.FC<ContentGridProps> = ({
  title,
  items,
  className = '',
  background = 'dark',
  columns = 3,
  spacing = 'lg',
  imageAspectRatio = 'square'
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

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: 'aspect-auto'
  };

  return (
    <section className={`px-4 sm:px-6 lg:px-8 ${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`} role="region" aria-label="Content grid">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {title}
            </h2>
          </div>
        )}

        {/* Content Grid */}
        <div className={`grid ${gridClasses[columns]} gap-8 lg:gap-12`}>
          {items.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer transition-transform duration-300 hover:scale-105"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && console.log(`Content clicked: ${item.id}`)}
              aria-label={`View ${item.title} content`}
            >
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <div className={`${aspectRatioClasses[imageAspectRatio]} overflow-hidden`}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid; 