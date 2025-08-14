import React from 'react';
import Container from '@/components/ui/Container';

interface ServiceBlock {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  iconClass: string;
  iconAlt: string;
}

interface ServiceBlocksProps {
  services: ServiceBlock[];
  className?: string;
  background?: 'dark' | 'light';
  columns?: 1 | 2 | 3;
  spacing?: 'sm' | 'md' | 'lg';
}

export const ServiceBlocks: React.FC<ServiceBlocksProps> = ({
  services,
  className = '',
  background = 'dark',
  columns = 3,
  spacing = 'lg'
}) => {
  const backgroundClasses = {
    dark: 'text-white bg-neutral-800',
    light: 'bg-white text-neutral-900'
  };

  const spacingClasses = {
    sm: 'py-12 px-4 sm:px-6 lg:px-8',
    md: 'py-16 px-4 sm:px-6 lg:px-8',
    lg: 'py-[120px] px-4 sm:px-6 lg:px-8' // Updated to match Figma: 120px vertical spacing
  };

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <section 
      className={`${backgroundClasses[background]} bg-neutral-700 service-blocks ${spacingClasses[spacing]} ${className}`} 
      role="region" 
      aria-label="Service options"
    >
      <Container>
        <div className={`grid ${gridClasses[columns]} gap-8 sm:gap-12 md:gap-16 lg:gap-20`}>
          {services.map((service) => (
            <article
              key={service.id}
              className="text-left group cursor-pointer p-6 lg:p-8"
              role="button"
              tabIndex={0}
              aria-label={`${service.title} - ${service.ctaText}`}
            >
              {/* Icon - exact Figma specifications (84x84) */}
              <div className="mb-6 flex justify-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[84px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {service.iconClass && (
                    <i className={`${service.iconClass} text-4xl sm:text-5xl lg:text-6xl text-white`}></i>
                  )}
                </div>
              </div>
              <div>
              {/* Title - exact Figma typography: Futura Medium 24px, 110% line height, -1% letter spacing */}
              <h3 
                className="text-xl leading-[120%] tracking-tight font-semibold font-display text-white mb-4"
              >
                {service.title}
              </h3>
              
              {/* Description - exact Figma typography: Jost Variable 16px, 150% line height, 1% letter spacing */}
              <p 
                className="mb-6 text-sm leading-relaxed tracking-wide text-white opacity-90 font-sans"
              >
                {service.description}
              </p>
              
              {/* CTA Link - exact Figma specifications */}
              {service.ctaText && service.ctaHref && (
                <a
                  href={service.ctaHref}
                  className="inline-flex items-center text-white font-display font-medium text-lg leading-[20px] tracking-normal transition-colors duration-300 group-hover:translate-x-1"
                >
                  {service.ctaText}
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Predefined service data with styleguide icon classes
export const ServiceIcons = {
  installer: 'icon-Xpel-Installer', // Xpel Installer icon
  carCoverage: 'icon-Coverage-Options', // Coverage Options icon
  dealer: 'icon-Become-a-Dealer' // Become a Dealer icon
};

export default ServiceBlocks; 
