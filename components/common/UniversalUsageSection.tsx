"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

export interface ApplicationArea {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

interface UniversalUsageSectionProps {
  readonly subHeading: string;
  readonly title: string;
  readonly description: string;
  readonly mainImage: {
    readonly src: string;
    readonly alt: string;
  };
  readonly applicationAreas: readonly ApplicationArea[];
  readonly className?: string;
}

export const UniversalUsageSection: React.FC<UniversalUsageSectionProps> = ({
  subHeading,
  title,
  description,
  mainImage,
  applicationAreas,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const currentImage = applicationAreas[activeTab] || mainImage;

  return (
    <section
      className={`lg:section-spacing-bottom text-neutral-900 ${className}`}
      aria-label="Universal usage applications"
    >
      <Container>
        <div className="flex  flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-center">
          {/* Left Side - Main Image (Changes based on active tab) */}
          <div className="relative w-full">
            <div className="w-full max-w-[864px]">
              <div className="relative aspect-square w-full rounded-[0.875rem] overflow-hidden">
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
          <div className="lg:max-w-[31rem] w-full">
            {/* Sub-heading */}
            <p className="subtitle-large font-medium text-neutral-900 mb-4">{subHeading}</p>

            {/* Main title */}
            <h2 className="font-h2 text-neutral-900 mb-6">{title}</h2>

            {/* Description */}
            <p className="para-medium text-neutral-700 mb-12">{description}</p>

            {/* Vertical Tabbed Slider - 32px gap as per Figma */}
            <div className="space-y-10">
              {applicationAreas.map((area, index) => (
                <div key={area.id} className="relative pl-3">
                  {/* Vertical Line Indicator */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[0.188rem] transition-all duration-300 ${
                      index === activeTab ? "bg-[#474646]" : "bg-neutral-300"
                    }`}
                  ></div>

                  {/* Tab Content - Clickable */}
                  <button
                    onClick={() => handleTabClick(index)}
                    className={`w-full text-left pl-6 transition-all duration-300 rounded-lg -ml-3 ${
                      index === activeTab ? "text-neutral-900" : "text-neutral-600"
                    }`}
                  >
                    <h4
                      className={`font-h4 ${index === activeTab ? "text-neutral-900 mb-4" : "text-neutral-600 py-1"}`}
                    >
                      {area.title}
                    </h4>

                    {/* Active Tab Description */}
                    {index === activeTab && area.description && (
                      <p className="para-small text-neutral-700 max-w-lg">{area.description}</p>
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
