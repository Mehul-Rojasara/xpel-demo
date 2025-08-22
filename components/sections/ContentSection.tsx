import React from 'react';
import Container from '@/components/ui/Container';

interface ContentSectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly className?: string;
  readonly 'aria-label'?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title = "With an array of offerings available, there's XPEL product for every need.",
  subtitle = "From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it.",
  className = "",
  'aria-label': ariaLabel
}) => {
  return (
    <section 
      className={`bg-white py-16 sm:py-20 lg:py-[7.5rem] ${className}`}
      aria-label={ariaLabel || "Content section with heading and description"}
    >
      <Container>
        {/* Heading and Description - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 ">
          {/* Left Column - Heading */}
          <div className="">
            <h2 className="font-h2 text-black leading-tight tracking-tight font-sans">
              {title}
            </h2>
          </div>
          
          {/* Right Column - Description */}
          <div className="">
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-sans max-w-[530px]">
              {subtitle}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}; 