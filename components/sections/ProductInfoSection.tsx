'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

interface ProductFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductInfoSectionProps {
  title?: string;
  description?: string;
  features?: ProductFeature[];
  applicationImages?: Array<{
    id: string;
    src: string;
    alt: string;
  }>;
  showcaseImage?: {
    src: string;
    alt: string;
  };
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
  'aria-label'?: string;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  title = "ULTIMATE PLUS™",
  description = "ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",
  features = [
    {
      id: '1',
      icon: (
        <span className='icon-Fading-Protection'>
        </span>
      ),
      title: 'Heat Activated Self Healing TopCoat',
      description: 'Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.',
    },
    {
      id: '2',
      icon: (
        <span className='icon-Safety'>
        </span>
      ),
      title: 'None Yellowing',
      description: 'Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.',
    },
    
    {
      id: '3',
      icon: (
        <span className='icon-UV-Protection'>
        </span>
      ),
      title: 'Discoloration & Stain resistant',
      description: 'ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.',
    },
    {
      id: '4',
      icon: (
        <span className='icon-Fading-Protection'>
        </span>
      ),
      title: 'Easy Surface Maintenance',
      description: 'ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.',
    },
    {
      id: '5',
      icon: (
        <span className='icon-Safety'>
        </span>
      ),
      title: 'Edge Seal Technology',
      description: 'Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.',
    },
  ],
  applicationImages = [
    {
      id: "1",
      src: "/images/singleProductPpf/single-product-1.png",
      alt: "Person applying protective film to car rear bumper with pink squeegee"
    },
    {
      id: "2",
      src: "/images/singleProductPpf/single-product-2.png",
      alt: "Person applying protective film to car wheel arch trim with pink squeegee"
    }
  ],
  showcaseImage = {
    src: "/images/singleProductPpf/single-product-3.png",
    alt: "White Mercedes-Benz G-Wagen SUV with black wheels and red brake calipers"
  },
  primaryCtaText = "Find An Installer",
  primaryCtaHref,
  secondaryCtaText = "Become a Dealer",
  secondaryCtaHref,
  className = "",
  'aria-label': ariaLabel
}) => {
  return (
    <section 
      className={`bg-white min-h-[864px] ${className}`}
      aria-label={ariaLabel || "Product information section"}
    >
      <Container>
        {/* Top Section - Two Columns with Different Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8 h-[857px]">
            {/* Product Title */}
            <h1 className="font-h1 text-gray-900">
              {title}
            </h1>

            {/* Product Description */}
            <p className="para-large text-gray-700">
              {description}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCtaHref && (
                <Link
                  href={primaryCtaHref}
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200"
                  aria-label={`${primaryCtaText} - opens in new page`}
                >
                  {primaryCtaText}
                </Link>
              )}
              {secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-black border-2 border-gray-900 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200"
                  aria-label={`${secondaryCtaText} - opens in new page`}
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-4">
                  {/* Feature Icon */}
                  <div className="flex-shrink-0 w-8 h-8 text-gray-700">
                    {feature.icon}
                  </div>
                  
                  {/* Feature Content */}
                  <div className="flex-1">
                    <h3 className="font-h5 text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="para-medium text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex flex-col justify-center space-y-6 h-[864px]">
            {/* Top Row - Two Images Side by Side */}
            <div className="grid grid-cols-2 gap-6">
              {applicationImages.slice(0, 2).map((image) => (
                <div key={image.id} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            
            {/* Bottom Row - Single Image */}
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={showcaseImage.src}
                alt={showcaseImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 