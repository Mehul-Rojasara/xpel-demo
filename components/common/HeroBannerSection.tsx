'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import VideoPlayer from './VideoPlayer';
import Container from '@/components/ui/Container';

interface ButtonConfig {
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

  // Legacy support - if buttons not provided, use legacy props
  const finalButtons = buttons.length > 0 ? buttons : (ctaText && ctaHref ? [{
    text: ctaText,
    href: ctaHref,
    variant: 'primary' as const,
    buttonStyle: 'filled' as const,
    size: 'lg' as const,
    background: 'dark' as const
  }] : []);

  // Use eyebrowText if provided, otherwise fall back to smallHeading
  const eyebrow = eyebrowText || smallHeading;

  return (
    <section 
      className={`relative w-full h-screen min-h-[37.5rem] overflow-hidden bg-neutral-600 ${className}`}
      role="banner"
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
          onSlideChange={onSlideChange}
          onVideoEnd={onVideoEnd}
          onVideoProgress={onVideoProgress}
          controlsPosition={controlsPosition}
          dotSize={dotSize}
          testDuration={testDuration}
          className="w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black opacity-${Math.round(overlayOpacity * 100)}`}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-start md:items-center justify-center h-full pt-24 md:pt-9 pb-6 md:pb-20">
        <Container className="w-full">
          <div className={`max-w-2xl ${textAlignmentClasses[textAlignment]}`}>
            {/* Eyebrow Text */}
            {eyebrow && (
              <h3 
                className={`font-h4 font-medium tracking-widest uppercase mb-4 font-display ${textColorClasses[textColor]}`}
              >
                {eyebrow}
              </h3>
            )}

            {/* Main Headline - Using style guide typography classes */}
            {React.createElement(
              titleAs,
              {
                className: `font-h1 font-bold leading-normal tracking-tight mb-6 font-display ${textColorClasses[textColor]}`
              },
              headline
            )}

            {/* Subtitle */}
            {subtitle && (
              <h4 
                className={`font-h4 mb-4 leading-[120%] tracking-tight font-display ${textColorClasses[textColor]} opacity-90`}
              >
                {subtitle}
              </h4>
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
              <div className={`flex flex-row flex-wrap gap-4 sm:gap-6 ${textAlignment === 'center' ? 'justify-center' : textAlignment === 'right' ? 'justify-end' : 'justify-start'}`}>
                {finalButtons.map((button, index) => (
                  <Link key={`${button.text}-${index}`} href={button.href} passHref>
                    <Button
                      variant={button.variant || 'primary'}
                      buttonStyle={button.buttonStyle || 'filled'}
                      size="lg"
                      background="light"
                      className="w-auto sm:w-auto px-8 py-4 bg-[#FFB81C] text-neutral-900 hover:bg-[#E6A619] transition-all duration-300 transform hover:scale-105 font-semibold font-display text-lg tracking-wide rounded-full shadow-lg hover:shadow-xl"
                    >
                      {button.text}
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroBannerSection;