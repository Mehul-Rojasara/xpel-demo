'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export interface ApplicationArea {
  id: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
}

interface UniversalUsageSectionProps {
  subHeading: string;
  title: string;
  description: string;
  mainImage: {
    src: string;
    alt: string;
  };
  applicationAreas: ApplicationArea[];
  className?: string;
}

export const UniversalUsageSection: React.FC<UniversalUsageSectionProps> = ({
  subHeading,
  title,
  description,
  mainImage,
  applicationAreas,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const currentImage = applicationAreas[activeTab] || mainImage;

  return (
    <section 
      className={`py-16 sm:py-20 bg-white text-neutral-900 ${className}`}
      role="region"
      aria-label="Universal usage applications"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Main Image (Changes based on active tab) */}
          <div className="relative w-full">
            <div className="w-full max-w-[864px] mx-auto">
              <div className="relative aspect-square w-full rounded-md overflow-hidden">
                <Image
                  src={currentImage.imageSrc}
                  alt={currentImage.imageAlt}
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 864px"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content with Vertical Tabbed Slider */}
          {/* Exact positioning as per Figma: 142.5px top padding, 496px width, 32px gap */}
          <div className="space-y-8 pt-[142.5px] lg:max-w-[496px]">
            {/* Sub-heading */}
            <p className="subtitle-small text-neutral-600">
              {subHeading}
            </p>
            
            {/* Main title */}
            <h2 className="font-h2 text-neutral-900">
              {title}
            </h2>
            
            {/* Description */}
            <p className="para-medium text-neutral-700 max-w-2xl">
              {description}
            </p>
            
            {/* Vertical Tabbed Slider - 32px gap as per Figma */}
            <div className="space-y-8 pt-4">
              {applicationAreas.map((area, index) => (
                <div key={area.id} className="relative">
                  {/* Vertical Line Indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                    index === activeTab ? 'bg-neutral-900' : 'bg-neutral-300'
                  }`}></div>
                  
                  {/* Tab Content - Clickable */}
                  <button
                    onClick={() => handleTabClick(index)}
                    className={`w-full text-left pl-6 transition-all duration-300 rounded-lg p-3 -ml-3 ${
                      index === activeTab ? 'text-neutral-900' : 'text-neutral-600'
                    }`}
                  >
                    <h5 className={`font-h5 ${
                      index === activeTab ? 'text-neutral-900 mb-2' : 'text-neutral-600 py-2'
                    }`}>
                      {area.title}
                    </h5>
                    
                    {/* Active Tab Description */}
                    {index === activeTab && area.description && (
                      <p className="para-small text-neutral-700 max-w-lg">
                        {area.description}
                      </p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 