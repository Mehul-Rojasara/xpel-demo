import React from "react";
import Container from "@/components/ui/Container";

interface ServiceBlock {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly ctaText: string;
  readonly ctaHref?: string;
  readonly onCtaClick?: () => void;
  readonly iconClass: string;
  readonly iconAlt: string;
}

interface ServiceBlocksProps {
  readonly services: ReadonlyArray<ServiceBlock>;
  readonly className?: string;
  readonly background?: 'dark' | 'light';
  readonly columns?: 1 | 2 | 3;
  readonly spacing?: 'sm' | 'md' | 'lg';
}

export const ServiceBlocks: React.FC<ServiceBlocksProps> = ({
  services,
  className = '',
  background = 'dark',
}) => {
  const backgroundClasses: Readonly<Record<'dark' | 'light', string>> = {
    dark: 'text-white bg-neutral-800',
    light: 'bg-white text-neutral-900'
  };

  return (
    <section
      className={`${backgroundClasses[background]} bg-neutral-700 service-blocks py-16 sm:py-20 lg:py-[7.5rem] ${className}`}
      role="region"
      aria-label="Service options"
    >
      <Container>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-8 md:gap-14 Xxl:gap-20`}>
          {services.map((service) => (
            <div
              key={service.id}
              className="flex text-left group cursor-pointer flex-col md:flex-row gap-[0.625rem]"
              role="button"
              tabIndex={0}
              aria-label={`${service.title} - ${service.ctaText}`}
            >
              {/* Icon - exact Figma specifications (84x84) */}
              <div className="flex justify-center items-center p-2">
                {service.iconClass && (
                  <i className={`${service.iconClass} text-3xl sm:text-4xl lg:text-[3.125rem] xl:text-[5.25rem] text-white font-sans`}></i>
                )}
              </div>
              <div className="flex flex-col items-center md:items-start">
                {/* Title - exact Figma typography: Futura Medium 24px, 110% line height, -1% letter spacing */}
                <h3 className="para-large-bold font-sans leading-[120%] tracking-tight text-white mb-3 text-center md:text-left">
                  {service.title}
                </h3>

                {/* Description - exact Figma typography: Jost Variable 16px, 150% line height, 1% letter spacing */}
                <p className="mb-2 lg:mb-3 para-xsmall leading-relaxed tracking-wide text-white opacity-90 font-sans text-center md:text-left">
                  {service.description}
                </p>

                {/* CTA Link - exact Figma specifications */}
                {service.ctaText && service.ctaHref && (
                  <a
                    href={service.ctaHref}
                    className="inline-flex items-center text-white font-sans para-small leading-[1.25rem] tracking-normal transition-colors duration-300 "
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Predefined service data with styleguide icon classes
export const ServiceIcons: Readonly<Record<string, string>> = {
  installer: 'icon-Xpel-Installer', // Xpel Installer icon
  carCoverage: 'icon-Coverage-Options', // Coverage Options icon
  dealer: 'icon-Become-a-Dealer' // Become a Dealer icon
};

export default ServiceBlocks;
