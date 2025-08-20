'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { PopupModal } from '@/components/common';

export interface ProductFeature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly iconClass: string; // Changed from icon to iconClass to use style guide icons
}

export interface TabContent {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly features: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly iconClass: string;
  }>;
}

interface ProductLineupSectionProps {
  readonly subtitle: string;
  readonly description: string;
  readonly features: ReadonlyArray<ProductFeature>;
  readonly primaryCtaText: string;
  readonly primaryCtaHref?: string;
  readonly secondaryCtaText: string;
  readonly secondaryCtaHref?: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly className?: string;
  // New tabbed functionality props
  readonly tabs?: ReadonlyArray<TabContent>;
  readonly showTabs?: boolean;
  readonly defaultActiveTab?: number; // Add default active tab for ISR compatibility
}

export const ProductLineupSection: React.FC<ProductLineupSectionProps> = ({
  subtitle,
  description,
  features,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  className = '',
  tabs,
  showTabs = false,
  defaultActiveTab = 0
}) => {
  // Use state for active tab to handle changes
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const activeTabContent = tabs && tabs.length > 0 ? tabs[activeTab] : null;
  
  // Modal state for dealer application
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section 
      className={`py-20 bg-neutral-900 text-white ${className}`}
      role="region"
      aria-label="Product lineup"
    >
      <Container>
        <div className="min-h-[1351px]">
          {/* Header Section */}
          <div className="mb-16">
            {/* Small label - top left */}
            <div className="text-left mb-4">
              <span className="subtitle-small text-neutral-400">
                {subtitle}
              </span>
            </div>
            
            {/* Main heading - left aligned */}
            <div className="text-left mb-6">
              <h2 className="font-h2 text-white">
                Explore the Product Lineup
              </h2>
            </div>
            
            {/* Description - left aligned */}
            <div className="text-left">
              <p className="para-large text-neutral-300 max-w-4xl">
                {description}
              </p>
            </div>
          </div>

          {/* Tabbed Navigation - Only show if tabs are provided */}
          {showTabs && tabs && tabs.length > 0 && (
            <div className="mb-16">
              <div className="flex justify-start space-x-0">
                {tabs.map((tab, index) => (
                  <Link
                    key={tab.id}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange(index);
                    }}
                    className={`
                      relative px-8 py-4 subtitle-large transition-all duration-300
                      ${index === activeTab 
                        ? 'text-white' 
                        : 'text-neutral-300 hover:text-white'
                      }
                    `}
                    aria-selected={index === activeTab}
                    role="tab"
                  >
                    {tab.title}
                    {index === activeTab && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
                    )}
                  </Link>
                ))}
              </div>
              {/* Separator line below tabs - no gap */}
              <div className="w-full h-px bg-neutral-600 mt-0"></div>
            </div>
          )}

          {/* Content Section - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Active Tab Title */}
              {activeTabContent && (
                <h3 className="font-h3 uppercase text-white">
                  {activeTabContent.title}
                </h3>
              )}
              
              {/* Active Tab Description */}
              {activeTabContent && (
                <p className="para-large text-neutral-300">
                  {activeTabContent.description}
                </p>
              )}

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryCtaHref ? (
                  <Link href={primaryCtaHref}>
                    <Button
                      variant="primary"
                      buttonStyle="filled"
                      size="lg"
                      background="light"
                      className="w-full sm:w-auto"
                    >
                      {primaryCtaText}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="primary"
                    buttonStyle="filled"
                    size="lg"
                    background="light"
                    className="w-full sm:w-auto"
                  >
                    {primaryCtaText}
                  </Button>
                )}
                {/* Secondary CTA Button - Opens Dealer Application Modal if it's "Become A Dealer" */}
                {secondaryCtaText.toLowerCase().includes('dealer') ? (
                  <Button
                    onClick={openModal}
                    variant="tertiary"
                    buttonStyle="outlined"
                    size="lg"
                    background="dark"
                    className="w-full sm:w-auto"
                  >
                    {secondaryCtaText}
                  </Button>
                ) : secondaryCtaHref ? (
                  <Link href={secondaryCtaHref}>
                    <Button
                      variant="tertiary"
                      buttonStyle="outlined"
                      size="lg"
                      background="dark"
                      className="w-full sm:w-auto"
                    >
                      {secondaryCtaText}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="tertiary"
                    buttonStyle="outlined"
                    size="lg"
                    background="dark"
                    className="w-full sm:w-auto"
                  >
                    {secondaryCtaText}
                  </Button>
                )}
              </div>

              {/* Product Features List */}
              <div className="pt-12">
                <div className="space-y-8">
                  {/* Use active tab features if tabs are available, otherwise use default features */}
                  {(activeTabContent?.features || features).map((feature) => (
                    <div key={feature.id}>
                      <div className="flex items-start space-x-4">
                        {/* Icon from style guide */}
                        <div className="flex-shrink-0 w-8 h-8 text-white flex items-center justify-center">
                          <i className={`${feature.iconClass} text-2xl`}></i>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-h5 text-white mb-2">
                            {feature.title}
                          </h5>
                          <p className="para-medium text-neutral-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[864px]">
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <Image
                  src={activeTabContent?.imageSrc || imageSrc}
                  alt={activeTabContent?.imageAlt || imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Dealer Application Modal */}
      <PopupModal
        isOpen={isModalOpen}
        onClose={closeModal}
        size="lg"
      >
        <div>
          <h2 className="font-h2 text-white">
            Keep in Touch
          </h2>
          <p className="para-large text-neutral-300">
            Fill out your contact information for more information on new products, upcoming events, and more! Welcome to the XPEL family.
          </p>
        </div>
      </PopupModal>
    </section>
  );
}; 