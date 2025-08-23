import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ApplicationCategory {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
}

interface MediaContent {
  readonly src: string;
  readonly alt: string;
  readonly type?: 'image' | 'video';
  readonly poster?: string; // For video poster image
}

interface ButtonConfig {
  readonly text: string;
  readonly href: string;
  readonly variant?: 'primary' | 'secondary';
}

interface ProductInfoSectionProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly description: string;
  readonly media?: MediaContent;
  readonly image?: MediaContent;
  readonly applications?: readonly ApplicationCategory[];
  readonly button?: ButtonConfig;
  readonly className?: string;
  readonly background?: 'dark' | 'light';
  readonly imagePosition?: 'left' | 'right';
  readonly mediaPosition?: 'left' | 'right';
  readonly spacing?: 'sm' | 'md' | 'lg';
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  title,
  subtitle,
  description,
  media,
  image,
  applications,
  button,
  className = '',
  background = 'dark',
  imagePosition = 'left',
  mediaPosition = 'left',
  spacing = 'lg'
}) => {
  // Determine which content to show
  const actualMedia = media || image;
  const contentPosition = mediaPosition || imagePosition;
  const isContentLeft = contentPosition === 'left';
  
  // Spacing classes
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-16', 
    lg: 'py-20'
  };

  // Background classes
  const bgClasses = background === 'dark' 
    ? 'bg-neutral-900 text-white' 
    : 'bg-white text-neutral-900';

  return (
    <section className={`${spacingClasses[spacing]} ${bgClasses} ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isContentLeft ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content Column */}
          <div className="flex-1 space-y-6">
            {subtitle && (
              <p className="subtitle-large text-primary-300">{subtitle}</p>
            )}
            
            <h2 className="font-h2">{title}</h2>
            
            <p className="para-large text-neutral-300">{description}</p>
            
            {/* Applications List */}
            {applications && applications.length > 0 && (
              <div className="space-y-8 pt-8">
                {applications.map((app) => (
                  <div key={app.id} className="space-y-2">
                    <h3 className="font-h4">{app.title}</h3>
                    {app.description && (
                      <p className="para-medium text-neutral-400">{app.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Button */}
            {button && (
              <div className="pt-4">
                <Link
                  href={button.href}
                  className={`btn ${button.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {button.text}
                </Link>
              </div>
            )}
          </div>

          {/* Media Column */}
          {actualMedia && (
            <div className="flex-1">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                {actualMedia.type === 'video' ? (
                  <video
                    src={actualMedia.src}
                    poster={actualMedia.poster}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={actualMedia.src}
                    alt={actualMedia.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection; 