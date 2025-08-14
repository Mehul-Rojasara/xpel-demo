"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

interface ServiceCard {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  href?: string;
  onClick?: () => void;
}

interface ServiceSliderProps {
  title: string;
  subtitle?: string;
  services: ServiceCard[];
  className?: string;
  showNavigation?: boolean;
  showProgress?: boolean;
  cardsPerView?: number;
  gap?: number;
  background?: 'dark' | 'light';
}

export const ServiceSlider: React.FC<ServiceSliderProps> = ({
  title,
  subtitle,
  services,
  className = '',
  showNavigation = true,
  showProgress = true,
  cardsPerView = 3,
  gap = 48,
  background = 'dark'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, services.length - cardsPerView);
  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  const backgroundClasses = {
    dark: 'bg-neutral-900 text-white',
    light: 'bg-white text-neutral-900'
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

  const handleCardClick = (service: ServiceCard) => {
    if (service.onClick) {
      service.onClick();
    } else if (service.href) {
      window.location.href = service.href;
    }
  };

  return (
    <section className={`py-[120px] explore-slider ${backgroundClasses[background]} ${className}`} role="region" aria-label="Service offerings">
      <Container>
        {/* Header - Exact Figma specifications */}
        <header className="mb-16">
          <p className="font-h1 font-display font-medium text-white leading-[110%] tracking-[-0.01em] text-left max-w-[949px]">
            {title}
          </p>
          {subtitle && (
            <p className="para-large text-white/80 max-w-2xl font-sans tracking-[0.01em] leading-[150%] font-[450] text-left mt-6">
              {subtitle}
            </p>
          )}
        </header>

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          {showNavigation && services.length > cardsPerView && (
            <>
              <Button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                variant="primary"
                buttonStyle="filled"
                size="lg"
                background="light"
                className={`absolute left-0 sm:left-4 md:left-8 lg:left-16 xl:left-[120px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 hover:!bg-[#FFB81C] hover:!text-neutral-900 ${
                  currentIndex === 0 ? 'invisible' : ''
                }`}
                aria-label="Previous slide"
              >
                <i className="icon-Arrow-Left text-neutral-900" aria-hidden="true"></i>
              </Button>
              
              <Button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                variant="primary"
                buttonStyle="filled"
                size="lg"
                background="light"
                className={`absolute right-0 sm:right-4 md:right-8 lg:right-16 xl:right-[120px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 hover:!bg-[#FFB81C] hover:!text-neutral-900 ${
                  currentIndex >= maxIndex ? 'invisible' : ''
                }`}
                aria-label="Next slide"
              >
                <i className="icon-Arrow-Right text-neutral-900" aria-hidden="true"></i>
              </Button>
            </>
          )}

          {/* Slider Track - Full width with proper overflow */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                gap: `${gap}px`
              }}
            >
              {services.map((service) => (
                <article
                  key={service.id}
                  className="flex-shrink-0 cursor-pointer group w-full min-w-[300px] max-w-[400px]"
                  onClick={() => handleCardClick(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(service)}
                >
                  <div className="rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg w-full">
                    <div className="relative aspect-square overflow-hidden rounded-lg w-full">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" aria-hidden="true" />
                      
                      {/* Card Text Label - Exact Figma positioning */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <div className="flex items-center justify-center gap-2">
                          <p className="para-medium font-medium text-white transition-colors duration-300 leading-tight">
                            {service.title}
                          </p>
                          {/* Arrow Icon - Using style guide icon */}
                          <i className="icon-Arrow-Right text-white para-medium transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          {showProgress && services.length > cardsPerView && (
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="w-24 sm:w-32 h-1 bg-white/20 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin={0} aria-valuemax={100}>
                <div 
                  className="h-full bg-white transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ServiceSlider; 