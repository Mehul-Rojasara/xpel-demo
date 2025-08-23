"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface ProductFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductInfoSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: ProductFeature[];
  applicationImages?: Array<{
    id: string;
    src: string;
    alt: string;
  }>;
  applications?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  showcaseImage?: {
    src: string;
    alt: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  media?: {
    src: string;
    alt: string;
    type?: 'image' | 'video';
    poster?: string;
  };
  button?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  background?: 'light' | 'dark';
  imagePosition?: 'left' | 'right';
  mediaPosition?: 'left' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
  "aria-label"?: string;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  title = "ULTIMATE PLUS™",
  subtitle,
  description = "ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",
  features = [
    {
      id: "1",
      icon: <span className="icon-Fading-Protection"></span>,
      title: "Heat Activated Self Healing TopCoat",
      description:
        "Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.",
    },
    {
      id: "2",
      icon: <span className="icon-Safety"></span>,
      title: "None Yellowing",
      description:
        "Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.",
    },
    {
      id: "3",
      icon: <span className="icon-UV-Protection"></span>,
      title: "Discoloration & Stain resistant",
      description: "ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.",
    },
    {
      id: "4",
      icon: <span className="icon-Fading-Protection"></span>,
      title: "Easy Surface Maintenance",
      description:
        "ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.",
    },
    {
      id: "5",
      icon: <span className="icon-Safety"></span>,
      title: "Edge Seal Technology",
      description: "Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.",
    },
  ],
  applicationImages = [
    {
      id: "1",
      src: "/images/singleProductPpf/single-product-1.png",
      alt: "Person applying protective film to car rear bumper with pink squeegee",
    },
    {
      id: "2",
      src: "/images/singleProductPpf/single-product-2.png",
      alt: "Person applying protective film to car wheel arch trim with pink squeegee",
    },
  ],
  applications,
  showcaseImage = {
    src: "/images/singleProductPpf/single-product-3.png",
    alt: "White Mercedes-Benz G-Wagen SUV with black wheels and red brake calipers",
  },
  image,
  media,
  button,
  primaryCtaText = "Find An Installer",
  primaryCtaHref = "single-product",
  secondaryCtaText = "Become a Dealer",
  secondaryCtaHref = "single-product",
  background = "light",
  imagePosition = "right",
  mediaPosition = "right",
  spacing = "md",
  className = "",
  "aria-label": ariaLabel,
}) => {
  // Determine which content to show based on available props
  const showFeatures = features && features.length > 0;
  const showApplications = applications && applications.length > 0;
  const showMedia = media || image || (applicationImages && applicationImages.length > 0);
  
  // Determine media type and source
  const mediaType = media?.type || 'image';
  const mediaSrc = media?.src || image?.src;
  const mediaAlt = media?.alt || image?.alt;
  const mediaPoster = media?.poster;
  
  // Determine position
  const contentPosition = mediaPosition || imagePosition;
  const isContentLeft = contentPosition === 'left';
  
  // Spacing classes
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-20'
  };

  return (
    <section 
      className={`${spacingClasses[spacing]} bg-${background === 'dark' ? 'neutral-900 text-white' : 'white text-neutral-900'} ${className}`}
      aria-label={ariaLabel || "Product information section"}
    >
      <Container>
        <div className={`flex flex-col lg:flex-row gap-4 md:gap-10 lg:gap-16 xl:gap-20 ${isContentLeft ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Column */}
          <div className="flex flex-col justify-center lg:max-w-[31rem]">
            {/* Title */}
            {title && (
              <h3 className="font-h3 text-gray-900 mb-4">{title}</h3>
            )}
            
            {/* Subtitle */}
            {subtitle && (
              <h4 className="font-h4 text-gray-600 mb-4">{subtitle}</h4>
            )}
            
            {/* Description */}
            {description && (
              <p className="para-large text-gray-700 mb-6">{description}</p>
            )}
            
            {/* Button */}
            {button && (
              <div className="mb-8">
                <Link
                  href={button.href}
                  className={`btn ${button.variant === 'secondary' ? 'btn-secondary-outline' : 'btn-primary'}`}
                >
                  {button.text}
                </Link>
              </div>
            )}
            
            {/* Call-to-Action Buttons */}
            {(primaryCtaHref || secondaryCtaHref) && (
              <div className="flex flex-row flex-wrap gap-4 mb-12">
                {primaryCtaHref && (
                  <Link
                    href={primaryCtaHref}
                    className="btn btn-primary"
                    aria-label={`${primaryCtaText} - opens in new page`}
                  >
                    {primaryCtaText}
                  </Link>
                )}
                {secondaryCtaHref && (
                  <Link
                    href={secondaryCtaHref}
                    className="btn btn-secondary-outline"
                    aria-label={`${secondaryCtaText} - opens in new page`}
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}

            {/* Feature List */}
            {showFeatures && (
              <div className="space-y-8">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start space-x-3 lg:space-x-4">
                    {/* Feature Icon */}
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-neutral-900 text-[1.375rem] md:text-[1.625rem] lg:text-3xl">
                      {feature.icon}
                    </div>
                    
                    {/* Feature Content */}
                    <div className="flex-1">
                      <h3 className="font-h4 text-neutral-900 mb-2 lg:mb-4">{feature.title}</h3>
                      <p className="para-small text-neutral-900">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Applications List */}
            {showApplications && (
              <div className="space-y-8">
                {applications.map((application) => (
                  <div key={application.id} className="flex items-start space-x-3 lg:space-x-4">
                    {/* Application Content */}
                    <div className="flex-1">
                      <h3 className="font-h4 text-neutral-900 mb-2 lg:mb-4">{application.title}</h3>
                      <p className="para-small text-neutral-900">{application.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Media Column */}
          {showMedia && (
            <div className="flex flex-col justify-center w-full">
              {/* Single Media (Video or Image) */}
              {mediaType === 'video' && mediaSrc ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <video
                    src={mediaSrc}
                    poster={mediaPoster}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              ) : mediaSrc ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={mediaSrc}
                    alt={mediaAlt || ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
              ) : (
                /* Default Image Grid Layout */
                <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-8 w-full">
                  {applicationImages?.slice(0, 2).map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square w-full rounded-[0.5rem_0.5rem_0_0] lg:rounded-[0.875rem_0.875rem_0_0] overflow-hidden"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                  {/* Bottom Row - Single Image */}
                  {showcaseImage && (
                    <div className="relative col-span-2 w-full aspect-[2/1] rounded-[0_0_0.5rem_0.5rem] lg:rounded-[0_0_0.875rem_0.875rem] overflow-hidden">
                      <Image
                        src={showcaseImage.src}
                        alt={showcaseImage.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};