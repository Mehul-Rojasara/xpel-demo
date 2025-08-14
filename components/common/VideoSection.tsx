'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import VideoPlayer from './VideoPlayer';
import Container from '@/components/ui/Container';

interface ButtonConfig {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  buttonStyle?: 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  background?: 'light' | 'dark';
}

interface VideoSectionProps {
  videoSrc: string;
  // Content options
  eyebrowText?: string;
  headline: string;
  subtitle?: string;
  description?: string;
  // Button configuration
  buttons?: ButtonConfig[];
  // Legacy props for backward compatibility
  smallHeading?: string;
  ctaText?: string;
  ctaHref?: string;
  // Styling
  className?: string;
  textColor?: 'white' | 'dark';
  textAlignment?: 'left' | 'center' | 'right';
  overlayOpacity?: number;
  // Dots functionality
  showDots?: boolean;
  totalSlides?: number;
  currentSlideIndex?: number;
  onSlideChange?: (index: number) => void;
  onVideoEnd?: () => void;
  onVideoProgress?: (progress: number) => void;
  controlsPosition?: 'bottom-right' | 'bottom-center' | 'bottom-left';
  dotSize?: 'sm' | 'md' | 'lg';
  testDuration?: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({
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

  // Handle button click
  const handleButtonClick = (href: string) => {
    if (href) {
      window.open(href, '_blank');
    }
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
      className={`relative w-full h-screen min-h-[600px] overflow-hidden bg-neutral-600 ${className}`}
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
      <div className="relative z-10 flex items-center justify-center h-full">
        <Container className="w-full">
          <div className={`max-w-2xl ${textAlignmentClasses[textAlignment]}`}>
            {/* Eyebrow Text */}
            {eyebrow && (
              <p 
                className={`font-h4 font-medium tracking-widest uppercase mb-4 font-display ${textColorClasses[textColor]}`}
              >
                {eyebrow}
              </p>
            )}

            {/* Main Headline - Using style guide typography classes */}
            <p 
              className={`font-h1 font-bold leading-normal tracking-tight mb-6 font-display ${textColorClasses[textColor]}`}
            >
              {headline}
            </p>

            {/* Subtitle */}
            {subtitle && (
              <p 
                className={`font-h4 mb-4 leading-[120%] tracking-tight font-display ${textColorClasses[textColor]} opacity-90`}
              >
                {subtitle}
              </p>
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
              <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${textAlignment === 'center' ? 'justify-center' : textAlignment === 'right' ? 'justify-end' : 'justify-start'}`}>
                {finalButtons.map((button, index) => (
                  <Button
                    key={index}
                    onClick={() => handleButtonClick(button.href)}
                    variant={button.variant || 'primary'}
                    buttonStyle={button.buttonStyle || 'filled'}
                    size="lg"
                    background="light"
                    className="w-full sm:w-auto px-8 py-4 bg-[#FFB81C] text-neutral-900 hover:bg-[#E6A619] transition-all duration-300 transform hover:scale-105 font-display text-lg tracking-wide rounded-full shadow-lg hover:shadow-xl"
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default VideoSection; 