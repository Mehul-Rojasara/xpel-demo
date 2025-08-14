import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

interface AboutSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark';
  textAlignment?: 'left' | 'center';
  image?: string;
  imageAlt?: string;
  reverseLayout?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  ctaText = 'Learn More',
  ctaHref,
  className = '',
  background = 'white',
  textAlignment = 'left',
  image,
  imageAlt,
  reverseLayout = false
}) => {
  const backgroundClasses = {
    white: 'bg-white text-neutral-900',
    light: 'bg-neutral-100 text-neutral-900',
    dark: 'bg-neutral-900 text-white'
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center'
  };

  const contentOrder = reverseLayout ? 'lg:order-2' : 'lg:order-1';
  const imageOrder = reverseLayout ? 'lg:order-1' : 'lg:order-2';

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${backgroundClasses[background]} ${className}`} role="region" aria-label="About section">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left Column - Title */}
          <div className={`${contentOrder} ${alignmentClasses[textAlignment]}`}>
            <p className="font-h2 sm:font-h1 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-0" id="about-title">
              {title}
            </p>
          </div>

          {/* Right Column - Description and CTA */}
          <div className={`${imageOrder} ${alignmentClasses[textAlignment]}`}>
            <div className={`${textAlignment === 'center' ? 'mx-auto' : ''} max-w-[560px]`}>
              <p className="para-large mb-6 sm:mb-8 leading-[150%] text-neutral-900 font-sans tracking-[0.01em] font-[450]">
                {description}
              </p>
              
              {(ctaText && ctaHref) && (
                <div className={textAlignment === 'center' ? 'text-center' : ''}>
                  <Link
                    href={ctaHref}
                    aria-label={`${ctaText} - ${title}`}
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-white text-neutral-900 font-display font-medium text-base sm:text-lg border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-[100px] min-w-[160px] sm:min-w-[200px] h-[48px] sm:h-[56px] shadow-sm hover:shadow-md"
                  >
                    {ctaText}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Image Column (Optional) */}
          {image && (
            <div className={`${imageOrder} flex justify-center lg:justify-${reverseLayout ? 'start' : 'end'} mt-8 lg:mt-0`}>
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}; 