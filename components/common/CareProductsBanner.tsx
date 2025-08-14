import React from 'react';
import Container from '@/components/ui/Container';
import Link from 'next/link';

interface GradientBannerProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  gradientColors?: {
    from: string;
    to: string;
    fromPercentage?: string;
  };
  backgroundImage?: string;
}

export const GradientBanner: React.FC<GradientBannerProps> = ({
  title,
  subtitle,
  ctaText = 'Shop Now',
  ctaHref,
  className = '',
  gradientColors = {
    from: 'from-yellow-500',
    to: 'to-transparent',
    fromPercentage: 'from-40%'
  },
  backgroundImage = '/images/bottol.png'
}) => {
  return (
    <section 
      className={`relative w-full overflow-hidden py-16 bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="banner" 
      aria-label="Gradient banner"
    >
      
      {/* Dynamic Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors.from} ${gradientColors.fromPercentage} ${gradientColors.to}`}></div>
      
      {/* Content container positioned at bottom-left like Figma */}
      <div className="relative z-10 h-full flex items-end justify-start">
        <Container className="w-full py-8 sm:py-12 md:py-16 lg:py-[120px]">
          {/* Text container positioned at bottom-left with single line layout */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-2xl">
            {/* Text Content - positioned at bottom-left */}
            <div className="text-white text-left">
              <h1 className="font-h1 mb-4 lg:mb-6">
                {title}
              </h1>
              <p className="para-large mb-6 lg:mb-8">
                {subtitle}
              </p>
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-neutral-900 hover:bg-gray-100 transition-colors duration-300 rounded-full shadow-none font-medium text-base"
                >
                  {ctaText}
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

// Keep the old name for backward compatibility
export const CareProductsBanner = GradientBanner;

export default GradientBanner; 