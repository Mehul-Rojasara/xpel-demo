'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';

interface InstallerBenefitsProps {
  theme?: "light" | "dark";
  showHeader?: boolean;
  title?: string;
  titleDescription?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  
  // Image
  imageSrc?: string;
  imageAlt?: string;
  defaultSelectedIndex?: number;
  className?: string;
  "aria-label"?: string;
  benefits?: {
    icon: React.ReactNode;
    title: string;
    description?: string;
    linkText?: string;
    linkHref?: string;
    imageSrc?: string;
    imageAlt?: string;
  }[];
  imagePosition?: "left" | "right"; // 👈 NEW PROP
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
  const benefitTextColor = theme === "dark" ? "text-white" : "text-gray-900";
  const iconTextColor = theme === "dark" ? "text-white" : "text-gray-400";
  const selectedIconTextColor = "text-black";
  const selectedBorderColor = theme === "dark" ? "bg-white" : "bg-black";
  const linkColor = theme === "dark" ? "text-blue-400" : "text-black";
  const linkHoverColor =
    theme === "dark" ? "hover:text-blue-300" : "hover:text-gray-800";

  return (
    <section
      className={`${bgColor} py-16 sm:py-20 lg:py-[7.5rem] ${className}`}
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
          className={`flex flex-col lg:items-stretch gap-6 sm:gap-8 lg:gap-16
            ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          {/* Image Column */}
          <div className="lg:w-1/2 lg:flex-shrink-0">
            <div className="relative h-[18.75rem] sm:h-[25rem] md:h-[31.25rem] lg:h-full lg:min-h-[37.5rem]">
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
          <div className="lg:flex-1 flex flex-col justify-center">
            <div className="space-y-6 lg:space-y-8">
              {subtitle && (
                <h2
                  className={`font-h2 font-sans leading-tight ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {subtitle}
                </h2>
              )}

              {description && (
                <p
                  className={`text-base sm:text-lg leading-relaxed font-sans ${
                    theme === "dark" ? "text-white" : "text-gray-900"
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
              <div className="space-y-4 pt-6 lg:pt-8">
                {benefits.map((benefit, index) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "opacity-100"
                          : "opacity-60 hover:opacity-80"
                      }`}
                      onClick={() => handleBenefitClick(index)}
                    >
                      {/* Border */}
                      <div
                        className={`w-0.5 h-full min-h-9 rounded-full ${
                          isSelected
                            ? selectedBorderColor
                            : theme === "dark"
                            ? "bg-white"
                            : "bg-gray-300"
                        }`}
                      ></div>

                      {/* Icon */}
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center ${
                          isSelected ? selectedIconTextColor : iconTextColor
                        }`}
                      >
                        {benefit.icon}
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3
                          className={`mb-1 text-sm sm:text-lg ${
                            isSelected ? benefitTextColor : benefitTextColor
                          }`}
                        >
                          {benefit.title}
                        </h3>
                        {isSelected && benefit.description && (
                          <p
                            className={`text-xs sm:text-sm leading-relaxed mb-2 ${
                              isSelected ? benefitTextColor : benefitTextColor
                            }`}
                          >
                            {benefit.description}
                          </p>
                        )}
                        {isSelected &&
                          benefit.linkText &&
                          benefit.linkHref && (
                            <Link
                              href={benefit.linkHref}
                              className={`${linkColor} ${linkHoverColor} text-xs sm:text-sm font-medium`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {benefit.linkText}
                            </Link>
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
