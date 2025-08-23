"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface InstallerBenefitsProps {
  readonly theme?: "light" | "dark";
  readonly showHeader?: boolean;
  readonly title?: string;
  readonly titleDescription?: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly buttonText?: string;
  readonly buttonHref?: string;

  // Image
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly defaultSelectedIndex?: number;
  readonly className?: string;
  readonly "aria-label"?: string;
  readonly benefits?: readonly {
    readonly id: string;
    readonly icon: React.ReactNode;
    readonly title: string;
    readonly description?: string;
    readonly linkText?: string;
    readonly linkHref?: string;
    readonly imageSrc?: string;
    readonly imageAlt?: string;
  }[];
  readonly imagePosition?: "left" | "right"; // 👈 NEW PROP
}

export const InstallerBenefits: React.FC<InstallerBenefitsProps> = ({
  // Theme and Layout
  theme = "light",
  showHeader = false,
  imagePosition = "left", // 👈 default

  // Header Content
  title = "Your Path Forward with XPEL",
  titleDescription = "...",
  subtitle = "Benefits of Becoming an Installer",
  description = "...",
  buttonText = "Become an Installer",
  imageSrc = "/images/dapNext/dapNextfeature.jpg",
  imageAlt = "Person applying protective film to orange sports car",
  defaultSelectedIndex = 0,
  className = "",
  "aria-label": ariaLabel,
  benefits = [
    {
      id: "wheel-caliper",
      title: "Wheel & Caliper",
      description:
        "The wheel deal. Effectively repel dust, grime, and other contaminants with superior heat and chemical resistance from FUSION PLUS.",
      icon: <i className="icon-Xpel-Installer"></i>,
      imageSrc: "/images/product-category/fusion puls wheel.jpg",
      imageAlt: "Person applying FUSION PLUS ceramic coating to car wheel and caliper",
      linkText: "Learn more",
      linkHref: "/become-an-installer",
    },
    {
      id: "glass",
      title: "Glass",
      icon: <i className="icon-Become-a-Dealer"></i>,

      description:
        "Crystal clear protection. FUSION PLUS provides superior UV resistance and clarity for all glass surfaces, maintaining visibility while offering maximum protection.",
      imageSrc: "/images/window-film.jpg",
      imageAlt: "Window film application with FUSION PLUS technology",
      linkText: "Learn more",
      linkHref: "/become-an-installer",
    },
    {
      id: "plastic-trim",
      title: "Plastic & Trim",
      icon: <i className="icon-Become-a-Dealer"></i>,
      description:
        "Trim protection perfected. Keep your vehicle's plastic components looking new with FUSION PLUS's advanced formula that resists fading and cracking.",
      imageSrc: "/images/singleProductPpf/single-product-2.png",
      imageAlt: "Plastic trim protection with FUSION PLUS",
      linkText: "Learn more",
      linkHref: "/become-an-installer",
    },
    {
      id: "upholstery",
      title: "Upholstery",
      icon: <i className="icon-Become-a-Dealer"></i>,
      description:
        "Interior excellence. FUSION PLUS protects your vehicle's upholstery from stains, spills, and wear while maintaining the original look and feel.",
      imageSrc: "/images/interior-protection.jpg",
      imageAlt: "Interior protection application with FUSION PLUS",
      linkText: "Learn more",
      linkHref: "/become-an-installer",
    },
  ],
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const [imageError, setImageError] = useState(false);

  const handleBenefitClick = (index: number) => {
    if (index >= 0 && index < benefits.length) {
      setSelectedIndex(index);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Theme-based styling
  const bgColor = theme === "dark" ? "bg-neutral-900" : "bg-white";
  const benefitTextColor = theme === "dark" ? "text-white" : "text-gray-900";
  const selectedBorderColor = theme === "dark" ? "bg-white" : "bg-black";
  const linkColor = theme === "dark" ? "text-white" : "text-black";
  const linkHoverColor = theme === "dark" ? "hover:text-white/80" : "hover:text-gray-800";

  return (
    <section
      className={`${bgColor} section-spacing-y  ${className}`}
      aria-label={ariaLabel || "Installer benefits section"}
    >
      <Container>
        {/* Header */}
        {showHeader && (
          <div className="text-center section-spacing-bottom">
            <h2 className="font-h2 text-white  mb-9">{title}</h2>
            <p className="font-h5 text-white max-w-[76.25rem] mx-auto">{titleDescription}</p>
          </div>
        )}
        <div
          className={`flex flex-col lg:items-stretch justify-between gap-10 lg:gap-12 xl:gap-16 
            ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          {/* Image Column */}
          <div className="w-full max-w-[54rem]">
            <div className="relative aspect-square md:aspect-auto md:h-[38rem] lg:min-h-full xl:min-h-[54rem]">
              {!imageError ? (
                <Image
                  key={`benefit-image-${benefits[selectedIndex]?.id || 'default'}`}
                  src={benefits[selectedIndex]?.imageSrc || imageSrc}
                  alt={benefits[selectedIndex]?.imageAlt || imageAlt}
                  fill
                  className="object-cover rounded-[0.875rem] transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={90}
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500 text-center">Image not available</p>
                </div>
              )}
            </div>
          </div>

          {/* Features Column */}
          <div className="lg:max-w-[26rem] xl:max-w-[31rem]  flex flex-col justify-center">
            {subtitle && (
              <h2 className={`font-h2 font-sans leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {subtitle}
              </h2>
            )}

            {description && (
              <p className={`para-medium mt-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{description}</p>
            )}

            {buttonText && (
              <div className="mt-8">
                <button type="button" className="btn btn-primary btn-primary-bg-white" aria-label="become-installer">
                  {buttonText}
                </button>
              </div>
            )}

            {/* Benefits */}
            <div className="space-y-10 mt-8 lg:mt-12">
              {benefits.map((benefit, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <div
                    key={`${benefit.title}-${index}`}
                    className={`flex items-center relative space-x-6 cursor-pointer transition-all duration-[0.4s] ${
                      isSelected ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => handleBenefitClick(index)}
                  >
                    {/* Border */}
                    <div
                      className={`w-[0.188rem] h-full absolute top-0 bottom-0 ${
                        isSelected ? selectedBorderColor : theme === "dark" ? "bg-white" : "bg-gray-300"
                      }`}
                    ></div>

                    {/* Text */}
                    <div className="flex-1">
                      <h4
                        className={` font-h4 items-center flex gap-5 ${isSelected ? benefitTextColor : benefitTextColor}`}
                      >
                        {/* Icon */}
                        <span className="text-[1.875rem]">{benefit.icon}</span>
                        {benefit.title}
                      </h4>
                      {isSelected && benefit.description && (
                        <p className={`para-small mt-4 text-white`}>{benefit.description}</p>
                      )}
                      {isSelected && benefit.linkText && benefit.linkHref && (
                        <Link
                          href={benefit.linkHref}
                          className={`${linkColor} ${linkHoverColor} group mt-4 font-h6 flex items-center gap-2 transition duration-[0.4s]`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {benefit.linkText}
                          <i className="icon-Arrow-Right text-xs"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
