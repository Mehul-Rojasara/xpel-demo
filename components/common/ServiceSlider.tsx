"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Container from '@/components/ui/Container';
import { ServiceCard } from './ServiceCard';
import Link from 'next/link';

interface ServiceCard {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly category?: string;
  readonly description?: string;
  readonly href?: string;
  readonly isVideo?: boolean;
  onClick?: () => void;
}

interface ServiceSliderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly services: readonly ServiceCard[];
  readonly className?: string;
  readonly showNavigation?: boolean;
  readonly showProgress?: boolean;
  readonly cardsPerView?: number;
  readonly background?: 'dark' | 'light';
  readonly showButton?: boolean;
  readonly buttonText?: string;
  readonly buttonHref?: string;
  readonly showDescriptions?: boolean;
}

export const ServiceSlider: React.FC<ServiceSliderProps> = ({
  title,
  subtitle,
  services,
  className = '',
  showNavigation = true,
  showProgress = true,
  cardsPerView = 3,
  background = 'dark',
  showButton = false,
  buttonText = 'View All',
  buttonHref = '/services',
  showDescriptions = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, services.length - cardsPerView);
  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  const backgroundClasses = {
    dark: 'bg-neutral-900 text-white',
    light: 'bg-white text-neutral-900'
  };

  const textColorClasses = {
    dark: 'text-white',
    light: 'text-neutral-900'
  };

  const progressBarBGClasses = {
    dark: 'bg-white/20',
    light: 'bg-black/20'
  };

  const progressBarTrackClasses = {
    dark: 'bg-white',
    light: 'bg-black'
  };

  const slideToIndex = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const nextSlide = useCallback(() => slideToIndex(currentIndex + 1), [currentIndex, slideToIndex]);
  const prevSlide = useCallback(() => slideToIndex(currentIndex - 1), [currentIndex, slideToIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, maxIndex, nextSlide, prevSlide]);



  return (
    <section className={`explore-slider overflow-hidden ${backgroundClasses[background]} ${className}`} aria-label="Service offerings">
      <Container>
        {/* Header - Exact Figma specifications */}
        <div className={`mb-8 sm:mb-12 lg:mb-16 ${showButton ? 'flex items-center justify-between' : ''}`}>
          <h2 className={`font-h1 font-display font-medium leading-[110%] tracking-[-0.01em] text-left max-w-[59.313rem] ${textColorClasses[background]}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`para-large max-w-2xl font-sans tracking-[0.01em] leading-[150%] font-[450] text-left mt-6 ${textColorClasses[background] === 'text-white' ? 'text-white/80' : 'text-neutral-900/80'}`}>
              {subtitle}
            </p>
          )}
          {showButton && (
            <Link
              href={buttonHref}
              className={`btn ${background === 'dark' ? 'btn-secondary' : 'btn-primary'}`}
            >
              {buttonText}
            </Link>
          )}
        </div>

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          {showNavigation && services.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                type="button"
                className={`hidden md:flex absolute left-0 sm:left-4 md:left-8 lg:left-0 xl:left-0 Xxxl:left-[-5rem] top-1/2 -translate-y-1/2 z-10 btn btn-primary btn-rounded-full ${
                  background === 'dark' ? 'btn-primary-bg-white' : ''
                } shadow-md ${
                  currentIndex === 0 ? 'invisible' : ''
                }`}
                aria-label={`${title} - Previous slide`}
              >
                <i className="icon-Arrow-Left btn-icon" aria-hidden="true"></i>
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                type="button"
                className={`hidden md:flex absolute right-0 sm:right-4 md:right-8 lg:right-0 xl:right-0 Xxxl:right-[-5rem] top-1/2 -translate-y-1/2 z-10 btn btn-primary btn-rounded-full ${
                  background === 'dark' ? 'btn-primary-bg-white' : ''
                } shadow-md ${
                  currentIndex >= maxIndex ? 'invisible' : ''
                }`}
                aria-label={`${title} - Next slide`}
              >
                <i className="icon-Arrow-Right btn-icon" aria-hidden="true"></i>
              </button>
            </>
          )}

          {/* Slider Track - Full width with proper overflow */}
          <div className="w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out article-list gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {services.map((service) => (
                <ServiceCard
                  key={service?.id}
                  id={service?.id || ''}
                  title={service?.title || ''}
                  image={service?.image || ''}
                  imageAlt={service?.imageAlt || ''}
                  category={service?.category}
                  description={service?.description}
                  href={service?.href}
                  isVideo={service?.isVideo}
                  showDescriptions={showDescriptions}
                  onClick={service?.onClick}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          {showProgress && services.length > cardsPerView && (
            <div className="mt-8 sm:mt-12 flex justify-center">
              <progress
                className="w-24 sm:w-32 h-1 bg-white/20 rounded-full overflow-hidden"
                value={progressPercentage}
                max={100}
                aria-label="Progress bar"
              >
                <div 
                  className={`h-full transition-all duration-500 ease-in-out ${progressBarTrackClasses[background]}`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </progress>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ServiceSlider; 