'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductFeature {
  readonly id: string;
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
}

interface ProductTab {
  readonly id: string;
  readonly name: string;
  readonly productName: string;
  readonly productDescription: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly features: readonly ProductFeature[];
}

interface ProductInfoSectionProps {
  readonly title?: string;
  readonly description?: string;
  readonly tabs?: readonly ProductTab[];
  readonly className?: string;
  readonly 'aria-label'?: string;
}

export const ProductInfoSectionTab: React.FC<ProductInfoSectionProps> = ({
  title = 'Explore the Product Lineup',
  description = "ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",
  tabs = [
    {
      id: '1',
      name: 'ULTIMATE PLUS',
      productName: 'ULTIMATE PLUS™',
      productDescription: "ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",
      imageSrc: '/images/installerBenefitsSection/explore-product-lineup.jpg',
      imageAlt: 'ULTIMATE PLUS paint protection film',
      features: [
        {
          id: 'f1',
          icon: (
            <span className='icon-Fading-Protection'>
            </span>
          ),
          title: 'Heat Activated Self Healing TopCoat',
          description: 'Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.',
        },
        {
          id: 'f2',
          icon: (
            <span className='icon-Safety'>
            </span>
          ),
          title: 'None Yellowing',
          description: 'Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.',
        },
        
        {
          id: 'f3',
          icon: (
            <span className='icon-UV-Protection'>
            </span>
          ),
          title: 'Discoloration & Stain resistant',
          description: 'ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.',
        },
        {
          id: 'f4',
          icon: (
            <span className='icon-Fading-Protection'>
            </span>
          ),
          title: 'Easy Surface Maintenance',
          description: 'ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.',
        },
        {
          id: 'f5',
          icon: (
            <span className='icon-Safety'>
            </span>
          ),
          title: 'Edge Seal Technology',
          description: 'Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.',
        },
      ]
    },
    {
      id: '2',
      name: 'STEALTH',
      productName: 'STEALTH™',
      productDescription: "STEALTH provides ultimate protection with a matte finish that transforms your vehicle's appearance while maintaining the same level of protection as our premium films.",
      imageSrc: '/images/header/paint-protection-film.webp',
      imageAlt: 'STEALTH paint protection film',
      features: [
        {
          id: 'f1',
          icon: (
            <span className='icon-Fading-Protection'>
            </span>
          ),
          title: 'Heat Activated Self Healing TopCoat',
          description: 'Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.',
        },
        {
          id: 'f2',
          icon: (
            <span className='icon-Safety'>
            </span>
          ),
          title: 'None Yellowing',
          description: 'Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.',
        },
        
        {
          id: 'f3',
          icon: (
            <span className='icon-UV-Protection'>
            </span>
          ),
          title: 'Discoloration & Stain resistant',
          description: 'ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.',
        },
        {
          id: 'f4',
          icon: (
            <span className='icon-Fading-Protection'>
            </span>
          ),
          title: 'Easy Surface Maintenance',
          description: 'ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.',
        },
        {
          id: 'f5',
          icon: (
            <span className='icon-Safety'>
            </span>
          ),
          title: 'Edge Seal Technology',
          description: 'Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.',
        },
      ]
    },
    {
      id: '3',
      name: 'BY THE FOOT',
      productName: 'BY THE FOOT™',
      productDescription: "BY THE FOOT offers flexible protection solutions for custom applications, allowing installers to create precise protection patterns for any vehicle or surface.",
      imageSrc: '/images/header/ceramic-coating.webp',
      imageAlt: 'BY THE FOOT paint protection film',
      features: [
        {
          id: 'f1',
          icon: (
            <span className='icon-Fading-Protection'>
            </span>
          ),
          title: 'Heat Activated Self Healing TopCoat',
          description: 'Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.',
        },
        {
          id: 'f2',
          icon: (
            <span className='icon-Safety'>
            </span>
          ),
          title: 'None Yellowing',
          description: 'Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.',
        },
        
        {
          id: 'f3',
          icon: (
            <span className='icon-UV-Protection'>
            </span>
          ),
          title: 'Discoloration & Stain resistant',
          description: 'ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.',
        },
        {
          id: 'f4',
          icon: (
            <span className='icon-Fading-Protection'>
            </span>
          ),
          title: 'Easy Surface Maintenance',
          description: 'ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.',
        },
        {
          id: 'f5',
          icon: (
            <span className='icon-Safety'>
            </span>
          ),
          title: 'Edge Seal Technology',
          description: 'Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.',
        },
      ]
    },
  ],
  className = '',
  'aria-label': ariaLabel,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Get current tab data
  const currentTab = tabs[activeTab];

  return (
    <section
      className={`bg-white py-16 md:py-20 lg:py-24 ${className}`}
      aria-label={ariaLabel || 'Product information section'}
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`relative pb-2 px-6 text-base sm:text-lg font-medium transition-colors ${
                activeTab === index
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.name}
              {/* Black underline for active tab */}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Product Details */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl text-gray-900">
              {currentTab.productName}
            </h2>
            <p className="text-lg text-gray-600">{currentTab.productDescription}</p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/find-installer"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Find An Installer
              </Link>
              <Link
                href="/become-dealer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-md border border-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                Become A Dealer
              </Link>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {currentTab.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 text-gray-700 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <Image
                key={`tab-image-${activeTab}`}
                src={currentTab.imageSrc}
                alt={currentTab.imageAlt}
                fill
                className="object-cover transition-all duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
