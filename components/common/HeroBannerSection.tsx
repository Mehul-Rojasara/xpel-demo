'use client';

import React from 'react';
import Link from 'next/link';
import VideoPlayer from './VideoPlayer';
import Container from '@/components/ui/Container';

interface ButtonConfig {
  readonly id: string;
  readonly text: string;
  readonly href: string;
  readonly variant?: 'primary' | 'secondary' | 'tertiary';
  readonly buttonStyle?: 'filled' | 'outlined';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly background?: 'light' | 'dark';
}

interface HeroBannerSectionProps {
  readonly videoSrc: string;
  // Content options
  readonly eyebrowText?: string;
  readonly headline: string;
  readonly subtitle?: string;
  readonly description?: string;
  // Button configuration
  readonly buttons?: readonly ButtonConfig[];
  // Legacy props for backward compatibility
  readonly smallHeading?: string;
  readonly ctaText?: string;
  readonly ctaHref?: string;
  // Styling
  readonly className?: string;
  readonly textColor?: 'white' | 'dark';
  readonly textAlignment?: 'left' | 'center' | 'right';
  readonly overlayOpacity?: number;
  // Heading level control
  readonly titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  // Dots functionality
  readonly showDots?: boolean;
  readonly totalSlides?: number;
  readonly currentSlideIndex?: number;
  readonly onSlideChange?: (index: number) => void;
  readonly onVideoEnd?: () => void;
  readonly onVideoProgress?: (progress: number) => void;
  readonly controlsPosition?: 'bottom-right' | 'bottom-center' | 'bottom-left';
  readonly dotSize?: 'sm' | 'md' | 'lg';
  readonly testDuration?: number;
}

const HeroBannerSection: React.FC<HeroBannerSectionProps> = ({
  videoSrc,
  // Content options
  eyebrowText,
  headline,
  subtitle,
  description,
  // Button configuration
  buttons = [],
  // Legacy props for backward compatibility
  smallHeading,
  ctaText,
  ctaHref,
  // Styling
  className = '',
  textColor = 'white',
  textAlignment = 'left',
  overlayOpacity = 0.4,
  // Heading level control
  titleAs = 'h1',
  // Dots functionality
  showDots = false,
  totalSlides = 1,
  currentSlideIndex = 0,
  onSlideChange,
  onVideoEnd,
  onVideoProgress,
  controlsPosition = 'bottom-right',
  dotSize = 'md',
  testDuration
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

  // Determine final buttons array
  let finalButtons = buttons;
  
  if (finalButtons.length === 0 && ctaText && ctaHref) {
    finalButtons = [{
      id: finalButtons[0].id,
      text: ctaText,
      href: ctaHref,
      variant: 'primary' as const,
      buttonStyle: 'filled' as const,
      size: 'lg' as const,
      background: 'dark' as const
    }];
  }

  // Use eyebrowText if provided, otherwise fall back to smallHeading
  const eyebrow = eyebrowText || smallHeading;

  return (
    <header 
      className={`relative w-full h-screen min-h-[37.5rem] overflow-hidden bg-neutral-600 ${className}`}
      aria-label="Video hero banner"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <VideoPlayer
          videoSrc={videoSrc}
          autoPlay={true}
          muted={true}
          loop={!showDots} // Don't loop when using dots (slider mode)
          playsInline={true}
          preload="metadata"
          showPlayPause={true}
          showProgress={false}
          showDots={showDots}
          totalSlides={totalSlides}
          currentSlideIndex={currentSlideIndex}
          {...(onSlideChange && { onSlideChange })}
          {...(onVideoEnd && { onVideoEnd })}
          {...(onVideoProgress && { onVideoProgress })}
          controlsPosition={controlsPosition}
          dotSize={dotSize}
          {...(testDuration && { testDuration })}
          className="w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black opacity-${Math.round(overlayOpacity * 100)}`}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-start md:items-center justify-center h-full pt-[2.65rem] lg:pt-0 pb-6 md:pb-20 xl:pb-0">
        <Container className="w-full">
          <div className={`max-w-2xl ${textAlignmentClasses[textAlignment]}`}>
            {/* Eyebrow Text */}
            {eyebrow && (
              <p 
                className={`para-medium font-medium tracking-widest uppercase mb-[2px] font-display ${textColorClasses[textColor]}`}
              >
                {eyebrow}
              </p>
            )}

            {/* Main Headline - Using style guide typography classes */}
            {React.createElement(
              titleAs,
              {
                className: `font-h1 font-bold leading-normal tracking-tight mb-[18px] font-display ${textColorClasses[textColor]}`
              },
              headline
            )}

            {/* Subtitle */}
            {subtitle && (
              <h2 
                className={`para-large mb-4 leading-loose tracking-tight font-sans ${textColorClasses[textColor]} opacity-90`}
              >
                {subtitle}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p 
                className={`para-medium leading-relaxed mb-8 max-w-xl font-sans ${textColorClasses[textColor]} opacity-90`}
              >
                {description}
              </p>
            )}

            {/* Buttons */}
            {finalButtons.length > 0 && (
              <div className={`flex flex-row flex-wrap gap-4 sm:gap-6 mt-[30px] ${textAlignment === 'center' ? 'justify-center' : textAlignment === 'right' ? 'justify-end' : 'justify-start'}`}>
                {finalButtons.map((button) => (
                  <Link key={`${button.text}-${crypto.randomUUID()}`} href={button.href} passHref className='btn btn-primary btn-min-width btn-primary-bg-white'>
                    {button.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default HeroBannerSection;