'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';

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
  benefits = [],
}) => {
  const router = useRouter();
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

  const handleBecomeInstallerClick = () => {
    router.push("/us/en/become-an-installer");
  };

  // Theme-based styling
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const benefitTextColor = theme === "dark" ? "text-white" : "text-neutral-500";
  const iconTextColor = theme === "dark" ? "text-white" : "text-gray-400";
  const selectedIconTextColor = theme === "dark" ? "text-white" : "text-black";
  const selectedBorderColor = theme === "dark" ? "bg-white" : "bg-black";
  const linkColor = theme === "dark" ? "text-blue-400" : "text-black";
  const linkHoverColor =
    theme === "dark" ? "hover:text-blue-300" : "hover:text-gray-800";

  return (
    <section
      className={`${bgColor} ${className} overflow-hidden`}
      aria-label={ariaLabel || "Installer benefits section"}
    >
      {/* Header */}
      {showHeader && (
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white leading-relaxed max-w-4xl mx-auto">
            {titleDescription}
          </p>
        </div>
      )}

      <Container>
        <div
          className={`flex flex-col lg:items-stretch gap-6 sm:gap-8 xl:gap-16
            ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          {/* Image Column */}
          <div className="w-full lg:w-[66.66%] lg:max-w-[54rem]">
            <div className="relative aspect-square">
              {!imageError ? (
                <Image
                  key={`benefit-image-${selectedIndex}`}
                  src={benefits[selectedIndex]?.imageSrc || imageSrc}
                  alt={benefits[selectedIndex]?.imageAlt || imageAlt}
                  fill
                  className="object-cover rounded-2xl transition-all duration-300"
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
          <div className="lg:flex-1 flex flex-col justify-center w-full lg:w-[33.33%] lg:max-w-[31rem]">
            <div className="space-y-6 lg:space-y-8">
              {subtitle && (
                <h2
                  className={`font-h2 font-sans leading-tight ${
                    theme === "dark" ? "text-accent-navy-200" : "text-neutral-500"
                  }`}
                >
                  {subtitle}
                </h2>
              )}

              {description && (
                <p
                  className={`para-medium leading-relaxed font-sans ${
                    theme === "dark" ? "text-accent-navy-200" : "text-neutral-500"
                  }`}
                >
                  {description}
                </p>
              )}

              {buttonText && (
                <div className="pt-4">
                  <Button
                    type="button"
                    variant="primary"
                    aria-label="primary-btn"
                    buttonStyle="filled"
                    background="light"
                    onClick={handleBecomeInstallerClick}
                  >
                    {buttonText}
                  </Button>
                </div>
              )}

              {/* Benefits */}
              <div className="space-y-5 lg:space-y-6 pt-0 lg:pt-8">
                {benefits.map((benefit, index) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <div
                      key={`${benefit.title}-${index}`}
                      className={`flex items-center space-x-5 lg:space-x-7 cursor-pointer transition-all duration-200 relative ${
                        isSelected
                          ? "opacity-100"
                          : "opacity-60 hover:opacity-80"
                      }`}
                      onClick={() => handleBenefitClick(index)}
                    >
                      {/* Border */}
                      <div
                        className={`w-[0.188rem] absolute top-1 left-0 bottom-1 h-[calc(100%-5px)] rounded-full ${
                          isSelected
                            ? selectedBorderColor
                            : theme === "dark"
                            ? "bg-white"
                            : "bg-gray-300"
                        }`}
                      ></div>

                      {/* Text */}
                      <div className={`flex-1 transition-all duration-300 overflow-hidden ${
                          isSelected
                            ? "h-40 lg:h-48"
                            : "h-6 lg:h-[2.188rem]"
                        }`}>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-[2.188rem] lg:h-[2.188rem] flex items-center justify-center text-[1.25rem] lg:text-[1.875rem] ${
                              isSelected ? selectedIconTextColor : iconTextColor
                            }`}
                          >
                            {benefit.icon}
                          </div>
                          <h3
                            className={`font-h4 truncate w-full ${
                              isSelected ? benefitTextColor : benefitTextColor
                            }`}
                          >
                            {benefit.title}
                          </h3>
                        </div>
                        {/* {isSelected && benefit.description && ( */}
                          <p
                            className={`para-small leading-relaxed mt-3 ${
                              isSelected ? benefitTextColor : benefitTextColor
                            }`}
                          >
                            {benefit.description}
                          </p>
                        {/* )} */}
                        {
                          benefit.linkText &&
                          benefit.linkHref && (
                            <p className="mt-2">
                              <Link
                                href={benefit.linkHref}
                                className={`${linkColor} ${linkHoverColor} para-medium font-medium text-white inline-flex items-center gap-2 group/link`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {benefit.linkText}
                                <span className="icon-Arrow-Right text-xs font-bold group-hover/link:translate-x-1 transition-transform duration-200" aria-hidden="true"></span>
                              </Link>
                            </p>
                          )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
