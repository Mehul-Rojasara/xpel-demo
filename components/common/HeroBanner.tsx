'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface HeroBannerProps {
  imageSrc: string;
  imageAlt: string;
  smallHeading?: string;
  headline: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  showVideoIcon?: boolean;
  className?: string;
  textColor?: 'white' | 'dark';
  textAlignment?: 'left' | 'center' | 'right';
  overlayOpacity?: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  imageSrc,
  imageAlt,
  smallHeading = 'ULTIMATE PLUS PPF',
  headline = 'Stay Protected Wherever The Road Leads You',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ctaText = 'Learn More',
  ctaHref,
  onCtaClick,
  showVideoIcon = true,
  className = '',
  textColor = 'white',
  textAlignment = 'left',
  overlayOpacity = 0.4
}) => {
  const textColorClasses = {
    white: 'text-white',
    dark: 'text-neutral-900'
  };

  const textAlignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <section 
      className={`relative w-full h-screen min-h-[600px] overflow-hidden ${className}`}
      role="banner"
      aria-label="Hero banner"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black opacity-${Math.round(overlayOpacity * 100)}`}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-2xl ${textAlignmentClasses[textAlignment]}`}>
            {/* Small Heading */}
            {smallHeading && (
              <h3 
                className={`text-sm sm:text-base font-medium tracking-widest uppercase mb-4 font-display ${textColorClasses[textColor]}`}
              >
                {smallHeading}
              </h3>
            )}

            {/* Main Headline - Responsive heading tags for accessibility */}
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal tracking-tight mb-6 font-display ${textColorClasses[textColor]} md:hidden`}
            >
              {headline}
            </h1>
            
            {/* Medium screens - H2 */}
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal tracking-tight mb-6 font-display ${textColorClasses[textColor]} hidden md:block lg:hidden`}
            >
              {headline}
            </h2>
            
            {/* Large screens - H3 */}
            <h3 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal tracking-tight mb-6 font-display ${textColorClasses[textColor]} hidden lg:block`}
            >
              {headline}
            </h3>

            {/* Description */}
            {description && (
              <p 
                className={`text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-sans ${textColorClasses[textColor]} opacity-90`}
              >
                {description}
              </p>
            )}

            {/* CTA Button */}
            {ctaText && (
              <Button
                onClick={handleCtaClick}
                variant="primary"
                buttonStyle="filled"
                size="lg"
                background="dark"
                className="font-display text-base tracking-wide transition-all duration-300 transform hover:scale-105"
              >
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Video Icon */}
      {showVideoIcon && (
        <div className="absolute bottom-8 right-8 z-20">
          <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all duration-300">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBanner; 