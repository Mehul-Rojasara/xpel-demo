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
  "aria-label"?: string;
}

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  title = "ULTIMATE PLUS™",
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
      description:
        "Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.",
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
  showcaseImage = {
    src: "/images/singleProductPpf/single-product-3.png",
    alt: "White Mercedes-Benz G-Wagen SUV with black wheels and red brake calipers",
  },
  primaryCtaText = "Find An Installer",
  primaryCtaHref = "single-product",
  secondaryCtaText = "Become a Dealer",
  secondaryCtaHref = "single-product",
  className = "",
  "aria-label": ariaLabel,
}) => {
  return (
    <section className={`section-spacing-y ${className}`} aria-label={ariaLabel || "Product information section"}>
      <Container>
        {/* Top Section - Two Columns with Different Heights */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-10 lg:gap-16 xl:gap-20">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center lg:max-w-[31rem]">
            {/* Product Title */}
            <h3 className="font-h3 text-gray-900 mb-4">{title}</h3>

            {/* Product Description */}
            <p className="para-large text-gray-700 mb-6">{description}</p>

            {/* Call-to-Action Buttons */}
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

            {/* Feature List */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-3 lg:space-x-4">
                  {/* Feature Icon */}
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-neutral-900 text-[1.375rem] md:text-[1.625rem] lg:text-3xl">{feature.icon}</div>

                  {/* Feature Content */}
                  <div className="flex-1">
                    <h3 className="font-h4 text-neutral-900 mb-2 lg:mb-4">{feature.title}</h3>
                    <p className="para-small text-neutral-900">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex flex-col justify-center w-full">
            {/* Top Row - Two Images Side by Side */}
            <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-8 w-full">
              {applicationImages.slice(0, 2).map((image) => (
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
              <div className="relative col-span-2 w-full aspect-[2/1] rounded-[0_0_0.5rem_0.5rem] lg:rounded-[0_0_0.875rem_0.875rem] overflow-hidden">
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
        </div>
      </Container>
    </section>
  );
};
