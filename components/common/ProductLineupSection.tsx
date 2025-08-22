"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PopupModal from "@/components/ui/PopupModal";

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
  className = "",
  tabs,
  showTabs = false,
  defaultActiveTab = 0,
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
      className={`py-[3.75rem] md:py-[4.375rem] lg:py-[5.625rem] bg-neutral-900 text-white ${className}`}
      role="region"
      aria-label="Product lineup"
    >
      <Container>
        {/* Header Section */}
        <div className="mb-6 lg:mb-[2.75rem] ">
          {/* Small label - top left */}
          <span className="subtitle-large inline-block mb-2.5 text-white">{subtitle}</span>

          {/* Main heading - left aligned */}
          <h2 className="font-h2 mb-2.5 text-white">Explore the Product Lineup</h2>

          {/* Description - left aligned */}
          <p className="para-medium max-w-[61.75rem] text-white">{description}</p>
        </div>

        {/* Tabbed Navigation - Only show if tabs are provided */}
        {showTabs && tabs && tabs.length > 0 && (
          <div className="mb-[3.375rem] lg:mb-[3.75rem]">
            <div className="flex justify-start space-x-0 overflow-x-auto">
              {tabs.map((tab, index) => (
                <Link
                  key={tab.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(index);
                  }}
                  className={`
                      relative px-6 py-4 pb-6 text-[16px] flex-shrink-0  leading-tight font-[500] font-display tracking-wider transition-all duration-300
                      ${index === activeTab ? "text-white" : "text-neutral-300 hover:text-white"}
                    `}
                  aria-selected={index === activeTab}
                  role="tab"
                >
                  {tab.title}
                  {index === activeTab && <div className={`absolute bottom-0 left-0 h-1 bg-white w-full`}></div>}
                </Link>
              ))}
            </div>
            {/* Separator line below tabs - no gap */}
            <div className="w-full h-px bg-neutral-600 mt-0"></div>
          </div>
        )}

        {/* Content Section - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:max-w-[31rem]">
            {/* Active Tab Title */}
            {activeTabContent && <h3 className="font-h3 uppercase text-white">{activeTabContent.title}</h3>}

            {/* Active Tab Description */}
            {activeTabContent && <p className="para-medium mt-4 text-white">{activeTabContent.description}</p>}

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap flex-row gap-4 mt-6">
              {primaryCtaHref ? (
                <Link href={primaryCtaHref} className="btn btn-primary btn-primary-bg-white">
                  {primaryCtaText}
                </Link>
              ) : (
                <button aria-label="Primary Call to Action" className="btn btn-primary btn-primary-bg-white">
                  {primaryCtaText}
                </button>
              )}
              {secondaryCtaHref ? (
                <Link href={secondaryCtaHref} className="btn btn-secondary-outline-dark">
                  {secondaryCtaText}
                </Link>
              ) : (
                <button aria-label="Primary Call to Action" className="btn btn-secondary-outline-dark">
                  {secondaryCtaText}
                </button>
              )}
            </div>

            {/* Product Features List */}
            <div className="mt-12">
              <div className="space-y-8">
                {/* Use active tab features if tabs are available, otherwise use default features */}
                {(activeTabContent?.features || features).map((feature) => (
                  <div key={feature.id}>
                    <div className="flex items-start space-x-4">
                      {/* Icon from style guide */}
                      <div className="flex-shrink-0 w-12 h-12 text-white flex items-center justify-center">
                        <i className={`${feature.iconClass} text-[2.125rem]`}></i>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-h4 text-white mb-4">{feature.title}</h5>
                        <p className="para-small text-white">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[20.438rem] sm:h-[31.25rem] lg:h-[54rem]">
            <div className="w-full h-full relative rounded-[0.875rem] overflow-hidden">
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
      </Container>

      {/* Dealer Application Modal */}
      <PopupModal isOpen={isModalOpen} onClose={closeModal} size="lg">
        <div>
          <h2 className="font-h2 text-white">Keep in Touch</h2>
          <p className="para-large text-neutral-300">
            Fill out your contact information for more information on new products, upcoming events, and more! Welcome
            to the XPEL family.
          </p>
        </div>
      </PopupModal>
    </section>
  );
};
