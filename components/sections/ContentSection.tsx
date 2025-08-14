import React from 'react';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  'aria-label'?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title = "With an array of offerings available, there's XPEL product for every need.",
  subtitle = "From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it.",
  className = "",
  'aria-label': ariaLabel
}) => {
  return (
    <section 
      className={`bg-white py-16 md:py-20 lg:py-24 ${className}`}
      aria-label={ariaLabel || "Content section with heading and description"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading and Description - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column - Heading */}
          <div className="lg:w-2/3 lg:flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight tracking-tight">
              {title}
            </h2>
          </div>
          
          {/* Right Column - Description */}
          <div className="lg:w-1/3 lg:flex-shrink-0">
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 