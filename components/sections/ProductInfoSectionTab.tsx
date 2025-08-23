"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

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
  title = "Explore the Product Lineup",
  description = "ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",
  tabs = [
    {
      id: "1",
      name: "ULTIMATE PLUS",
      productName: "ULTIMATE PLUS™",
      productDescription:
        "ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle's surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.",
      imageSrc: "/images/installerBenefitsSection/explore-product-lineup.jpg",
      imageAlt: "ULTIMATE PLUS paint protection film",
      features: [
        {
          id: "f1",
          icon: <span className="icon-Fading-Protection"></span>,
          title: "Heat Activated Self Healing TopCoat",
          description:
            "Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.",
        },
        {
          id: "f2",
          icon: <span className="icon-Safety"></span>,
          title: "None Yellowing",
          description:
            "Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.",
        },

        {
          id: "f3",
          icon: <span className="icon-UV-Protection"></span>,
          title: "Discoloration & Stain resistant",
          description: "ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.",
        },
        {
          id: "f4",
          icon: <span className="icon-Fading-Protection"></span>,
          title: "Easy Surface Maintenance",
          description:
            "ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.",
        },
        {
          id: "f5",
          icon: <span className="icon-Safety"></span>,
          title: "Edge Seal Technology",
          description:
            "Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.",
        },
      ],
    },
    {
      id: "2",
      name: "STEALTH",
      productName: "STEALTH™",
      productDescription:
        "STEALTH provides ultimate protection with a matte finish that transforms your vehicle's appearance while maintaining the same level of protection as our premium films.",
      imageSrc: "/images/header/paint-protection-film.webp",
      imageAlt: "STEALTH paint protection film",
      features: [
        {
          id: "f1",
          icon: <span className="icon-Fading-Protection"></span>,
          title: "Heat Activated Self Healing TopCoat",
          description:
            "Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.",
        },
        {
          id: "f2",
          icon: <span className="icon-Safety"></span>,
          title: "None Yellowing",
          description:
            "Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.",
        },

        {
          id: "f3",
          icon: <span className="icon-UV-Protection"></span>,
          title: "Discoloration & Stain resistant",
          description: "ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.",
        },
        {
          id: "f4",
          icon: <span className="icon-Fading-Protection"></span>,
          title: "Easy Surface Maintenance",
          description:
            "ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.",
        },
        {
          id: "f5",
          icon: <span className="icon-Safety"></span>,
          title: "Edge Seal Technology",
          description:
            "Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.",
        },
      ],
    },
    {
      id: "3",
      name: "BY THE FOOT",
      productName: "BY THE FOOT™",
      productDescription:
        "BY THE FOOT offers flexible protection solutions for custom applications, allowing installers to create precise protection patterns for any vehicle or surface.",
      imageSrc: "/images/header/ceramic-coating.webp",
      imageAlt: "BY THE FOOT paint protection film",
      features: [
        {
          id: "f1",
          icon: <span className="icon-Fading-Protection"></span>,
          title: "Heat Activated Self Healing TopCoat",
          description:
            "Constructed from an elastomeric polyurethane, ULTIMATE PLUS 7 will self-heal light scratches & swirl marks.",
        },
        {
          id: "f2",
          icon: <span className="icon-Safety"></span>,
          title: "None Yellowing",
          description:
            "Our proprietary film formulation will not yellow from UV exposure, ensuring protected areas are nearly invisible.",
        },

        {
          id: "f3",
          icon: <span className="icon-UV-Protection"></span>,
          title: "Discoloration & Stain resistant",
          description: "ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.",
        },
        {
          id: "f4",
          icon: <span className="icon-Fading-Protection"></span>,
          title: "Easy Surface Maintenance",
          description:
            "ULTIMATE PLUS 7 is incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.",
        },
        {
          id: "f5",
          icon: <span className="icon-Safety"></span>,
          title: "Edge Seal Technology",
          description:
            "Our signature Edge Seal Technology ensures film stays stuck & keeps surfaces protected from contaminants.",
        },
      ],
    },
  ],
  className = "",
  "aria-label": ariaLabel,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Get current tab data
  const currentTab = tabs[activeTab];

  return (
    <section
      className={`bg-white py-16 md:py-20 lg:py-24 ${className}`}
      aria-label={ariaLabel || "Product information section"}
    >
      <Container>
        {/* Header */}
        <div className="mb-8 md:mb-12 lg:mb-[3.75rem] text-neutral-900">
          <span className="font-subtitle-large mb-2.5">STEALTH</span>
          <h2 className="font-h2 mb-2.5">{title}</h2>
          <p className="para-medium max-w-[61.75rem]">{description}</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6 md:mb-12 lg:mb-[3.75rem] max-w-full overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`relative pb-6 px-6 font-subtitle-large transition-colors flex-shrink-0 ${
                activeTab === index ? "text-neutral-900" : "text-gray-500 hover:text-neutral-900"
              }`}
            >
              {tab.name}
              {/* Black underline for active tab */}
              {activeTab === index && <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-900"></div>}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex  flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-center">
          {/* Left: Product Details */}
          <div className="lg:max-w-[31rem] w-full order-2 lg:order-1">
            <h3 className="font-h3 text-neutral-900">{currentTab.productName}</h3>
            <p className="text-lg text-gray-600 mt-4">{currentTab.productDescription}</p>

            {/* Buttons */}
            <div className="flex flex-wrap flex-row gap-4 mt-6">
              <Link href="/find-installer" className="btn btn-primary">
                Find An Installer
              </Link>
              <Link href="/become-dealer" className="btn btn-secondary-outline">
                Become A Dealer
              </Link>
            </div>

            {/* Features */}
            <div className="space-y-8 mt-12">
              {currentTab.features.map((feature) => (
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
          </div>

          {/* Right: Product Image */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="w-full max-w-[864px]">
              <div className="relative aspect-square w-full rounded-[0.875rem] overflow-hidden">
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
      </Container>
    </section>
  );
};
