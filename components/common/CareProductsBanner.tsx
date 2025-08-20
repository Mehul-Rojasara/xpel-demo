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
      className={`relative w-full overflow-hidden bg-cover bg-center py-8 sm:py-12 md:py-16 lg:py-[7.5rem] min-h-[23.875rem] lg:min-h-[32.5rem] flex items-center justify-start ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="banner" 
      aria-label="Gradient banner"
    >
      {/* Dynamic Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors.from} ${gradientColors.fromPercentage} ${gradientColors.to}`}></div>      
      {/* Content container positioned at bottom-left like Figma */}
      <Container className="w-full relative z-10">
        {/* Text container positioned at bottom-left with single line layout */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-[43.75rem]">
          {/* Text Content - positioned at bottom-left */}
          <div className="text-white text-left">
            <h2 className="font-h2 font-medium mb-4 lg:mb-6 leading-tight tracking-[-0.01em] font-sans">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 font-sans tracking-[0.01em] leading-[150%] font-normal">
              {subtitle}
            </p>
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="bg-white text-neutral-900 hover:bg-gray-100 inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 font-display font-medium text-base sm:text-lg transition-all duration-300 rounded-[6.25rem] min-w-[10rem] sm:min-w-[12.5rem] h-[3rem] sm:h-[3.5rem]"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Keep the old name for backward compatibility
export const CareProductsBanner = GradientBanner;

export default GradientBanner; 