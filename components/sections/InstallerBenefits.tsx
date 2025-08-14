'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  ariaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface InstallerBenefitsProps {
  // Theme and Layout
  theme?: 'light' | 'dark';
  showHeader?: boolean;
  
  // Header Content (optional)
  title?: string;
  titleDescription?: string;
  subtitle?: string;
  description?: string;
  
  // CTA Button
  buttonText?: string;
  buttonHref?: string;
  
  // Image
  imageSrc?: string;
  imageAlt?: string;
  
  // Benefits
  benefits?: BenefitItem[];
  defaultSelectedIndex?: number;
  
  // Styling
  className?: string;
  'aria-label'?: string;
}

export const InstallerBenefits: React.FC<InstallerBenefitsProps> = ({
  // Theme and Layout
  theme = 'light',
  showHeader = false,
  
  // Header Content
  title = "Your Path Forward with XPEL",
  titleDescription = "At XPEL, we're not just a business, we're enthusiasts too. With everything we do, we put quality & our reputation at the forefront and have done so since 1997. Since 2007 we provide Xpel products in the Middle East and distribute to our installer network through our distribution hub in Dubai, UAE. The products we offer are meticulously tested and proven to perform under the harshest conditions around while maintaining the best possible appearance. Trust XPEL to be the only thing between you and the open road.",
  subtitle = "Benefits of Becoming an Installer",
  description = "We are ready to help you take your business to the next level with our advanced automotive, residential, and commercial window films, paint protection films, installation tools, adhesive products, and the most comprehensive training programs in the industry.",
  
  // CTA Button
  buttonText = "Become an Installer",
  
  // Image
  imageSrc = "/images/about-us/become-installer.png",
  imageAlt = "Person applying protective film to orange sports car",
  
  // Benefits
  defaultSelectedIndex = 0,
  className = "",
  'aria-label': ariaLabel,
  benefits = [
    {
      icon: (
        <span className="icon-Xpel-Installer" aria-hidden="true">
        </span>
      ),
      title: "Installer Locator",
      description: "High-rated positioning in top search engine results thanks to our unique installer locator.",
      linkText: "Learn More ",
      linkHref: "/installer-locator",
      imageSrc: "/images/installerBenefitsSection/benifits-become-installer.png",
      imageAlt: "Installer locator feature"
    },
    {
      icon: (
        <span className="icon-User" aria-hidden="true">
        </span>
      ),
      title: "Global Customer Service",
      description: "24/7 support to help you succeed in your business.",
      imageSrc: "/images/installerBenefitsSection/become-an-installer.jpg",
      imageAlt: "Global customer service"
    },
    {
      icon: (
        <span className="icon-Become-a-Dealer" aria-hidden="true">
        </span>
      ),
      title: "Sales Professional Help",
      description: "Expert guidance to maximize your sales potential.",
      imageSrc: "/images/installerBenefitsSection/explore-product-lineup.jpg",
      imageAlt: "Sales professional help"
    },
    {
      icon: (
        <span className="icon-Newsroom" aria-hidden="true">
        </span>
      ),
      title: "Branding & Marketing Resources",
      description: "Professional materials to promote your business.",
      imageSrc: "/images/header/paint-protection-film.webp",
      imageAlt: "Branding and marketing resources"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M15 7a1 1 0 011 1v2.5a1 1 0 01-1 1h-2a1 1 0 01-1-1V8a1 1 0 011-1h2zm-1 4a1 1 0 00-1 1v2.5a1 1 0 001 1h2a1 1 0 001-1V12a1 1 0 00-1-1h-2zm-6 3a1 1 0 011-1h2a1 1 0 011 1v2.5a1 1 0 01-1 1H9a1 1 0 01-1-1V14z" clipRule="evenodd" />
        </svg>
      ),
      title: "Access to DAP",
      description: "Direct access to our dealer portal and resources.",
      imageSrc: "/images/header/ceramic-coating.webp",
      imageAlt: "DAP access"
    }
  ]
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
    router.push('/us/en/become-an-installer');
  };

  // Theme-based styling
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const benefitTextColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const iconBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const iconTextColor = theme === 'dark' ? 'text-white' : 'text-gray-400';
  const selectedIconBgColor = theme === 'dark' ? 'bg-blue-100' : 'bg-blue-100';
  const selectedIconTextColor = theme === 'dark' ? 'text-black' : 'text-black';
  const selectedBorderColor = theme === 'dark' ? 'bg-white' : 'bg-black';
  const linkColor = theme === 'dark' ? 'text-blue-400' : 'text-black';
  const linkHoverColor = theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-gray-800';

  return (
    <section 
      className={`${bgColor} py-12 sm:py-16 md:py-20 ${className}`}
      aria-label={ariaLabel || "Installer benefits section"}
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Only show if showHeader is true */}
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
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 sm:gap-8 lg:gap-16">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 lg:flex-shrink-0">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]">
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
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c0-1.1 0-2 .9-2 2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <p className="text-sm">Image not available</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 lg:flex-1 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Subtitle - Only show if provided */}
              {subtitle && (
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {subtitle}
                </h2>
              )}

              {/* Description - Only show if provided */}
              {description && (
                <p className={`text-base sm:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {description}
                </p>
              )}

              {/* CTA Button */}
             
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
              

              {/* Benefits List */}
              <div className="space-y-4 pt-6 lg:pt-8">
                {benefits.map((benefit, index) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 sm:space-x-4 cursor-pointer transition-all duration-200 ${
                        isSelected ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                      }`}
                      onClick={() => handleBenefitClick(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleBenefitClick(index);
                        }
                      }}
                      aria-label={`Select ${benefit.title} benefit`}
                    >
                      {/* Left border line - Always visible, different colors for active/inactive */}
                      <div className={`w-0.5 h-full min-h-[60px] rounded-full transition-colors duration-200 ${
                        isSelected ? selectedBorderColor : theme === 'dark' ? 'bg-white' : 'bg-gray-300'
                      }`}></div>

                      {/* Icon */}
                      <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isSelected 
                          ? selectedIconBgColor + ' ' + selectedIconTextColor
                          : iconBgColor + ' ' + iconTextColor
                      }`}>
                        {benefit.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`mb-1 transition-colors duration-200 text-sm sm:text-base ${
                          isSelected ? benefitTextColor : benefitTextColor
                        }`}>
                          {benefit.title}
                        </h3>
                        {isSelected && benefit.description && (
                          <p className={`text-xs sm:text-sm leading-relaxed mb-2 ${
                          isSelected ? benefitTextColor : benefitTextColor
                        }`}>
                            {benefit.description}
                          </p>
                        )}
                        {isSelected && benefit.linkText && benefit.linkHref && (
                          <Link
                            href={benefit.linkHref}
                            className={`text-xs sm:text-sm font-medium ${linkColor} ${linkHoverColor} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                            aria-label={`Learn more about ${benefit.title}`}
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
      </div>
    </section>
  );
}; 