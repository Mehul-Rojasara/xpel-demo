"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ProductCard } from './ProductCard';

interface ProductCard {
  readonly id: string;
  readonly title: string;
  readonly price: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly isNew?: boolean;
  readonly options?: ReadonlyArray<{
    readonly value: string;
    readonly label: string;
    readonly defaultChecked?: boolean;
  }>;
  readonly href: string;
  onClick?: () => void;
}

interface ProductSliderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly products: readonly ProductCard[];
  readonly className?: string;
  readonly showNavigation?: boolean;
  readonly showProgress?: boolean;
  readonly cardsPerView?: number;
  readonly gap?: number;
  readonly background?: 'dark' | 'light';
  readonly showButton?: boolean;
  readonly buttonText?: string;
  readonly buttonHref?: string;
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  products,
  className = '',
  showNavigation = true,
  showProgress = true,
  cardsPerView = 3,
  background = 'light',
  showButton = false,
  buttonText = 'Shop All',
  buttonHref = '/products'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  
  // Responsive cards per view
  const [responsiveCardsPerView, setResponsiveCardsPerView] = useState(cardsPerView);
  
  // Calculate max index based on responsive cards per view
  const maxIndex = Math.max(0, products.length - responsiveCardsPerView);
  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  const backgroundClasses = {
    dark: 'bg-neutral-900 text-white',
    light: 'bg-[#F8F8F8] text-neutral-900'
  };

  const textColorClasses = {
    dark: 'text-white',
    light: 'text-neutral-900'
  };

  const slideToIndex = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const nextSlide = useCallback(() => slideToIndex(currentIndex + 1), [currentIndex, slideToIndex]);
  const prevSlide = useCallback(() => slideToIndex(currentIndex - 1), [currentIndex, slideToIndex]);

  // Responsive breakpoint logic
  useEffect(() => {
    const updateCardsPerView = () => {
      let newCardsPerView: number;
      
      if (window.innerWidth < 640) { // sm
        newCardsPerView = 1;
      } else if (window.innerWidth < 768) { // md
        newCardsPerView = 2;
      } else if (window.innerWidth < 1024) { // lg
        newCardsPerView = 3;
      } else if (window.innerWidth < 1280) { // xl
        newCardsPerView = 4;
      } else { // 2xl+
        newCardsPerView = cardsPerView;
      }
      
      setResponsiveCardsPerView(newCardsPerView);
      
      // Reset current index if it becomes invalid after breakpoint change
      const newMaxIndex = Math.max(0, products.length - newCardsPerView);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, [cardsPerView, products.length, currentIndex]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const x = e.pageX;
    const walk = (startX - x) / 50; // Increased sensitivity for better response
    
    if (Math.abs(walk) > 0.3) { // Lower threshold for easier dragging
      if (walk > 0 && currentIndex < maxIndex) {
        // Dragging left - go to next slide
        slideToIndex(currentIndex + 1);
        setIsDragging(false);
      } else if (walk < 0 && currentIndex > 0) {
        // Dragging right - go to previous slide
        slideToIndex(currentIndex - 1);
        setIsDragging(false);
      }
    }
  }, [isDragging, startX, currentIndex, maxIndex, slideToIndex]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    
    // Don't call preventDefault() to avoid console errors
    const x = e.touches[0].pageX;
    const walk = (startX - x) / 50; // Increased sensitivity for better touch response
    
    if (Math.abs(walk) > 0.3) { // Lower threshold for easier swiping
      if (walk > 0 && currentIndex < maxIndex) {
        // Swiping left - go to next slide
        slideToIndex(currentIndex + 1);
        setIsDragging(false);
      } else if (walk < 0 && currentIndex > 0) {
        // Swiping right - go to previous slide
        slideToIndex(currentIndex - 1);
        setIsDragging(false);
      }
    }
  }, [isDragging, startX, currentIndex, maxIndex, slideToIndex]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

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
    <section className={`py-16 sm:py-20 lg:py-[7.5rem] product-slider overflow-hidden ${backgroundClasses[background]} ${className}`} role="region" aria-label="Product offerings">
      <Container>
        {/* Header */}
        <div className={`mb-8 sm:mb-12 lg:mb-16 ${showButton ? 'flex items-center justify-between' : ''}`}>
          <div>
            <h2 className={`font-h1 font-display font-medium leading-[110%] tracking-[-0.01em] text-left max-w-[59.313rem] ${textColorClasses[background]}`}>
              {title}
            </h2>
          </div>
          {showButton && (
            <Button
              variant="primary"
              buttonStyle="outlined"
              size="md"
              background="light"
              className="border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-50"
              onClick={() => window.location.href = buttonHref}
            >
              {buttonText}
            </Button>
          )}
        </div>

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          {showNavigation && products.length > responsiveCardsPerView && (
            <>
              <Button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                variant="primary"
                buttonStyle="filled"
                size="lg"
                background="light"
                className={`hidden sm:block absolute left-0 sm:left-4 md:left-8 lg:left-0 xl:left-0 Xxxl:left-[-5rem] top-1/2 -translate-y-1/4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 hover:!bg-[#FFB81C] hover:!text-neutral-900 !p-0 ${
                  currentIndex === 0 ? 'invisible' : ''
                }`}
                aria-label={`${title} - Previous slide`}
              >
                <i className="icon-Arrow-Left text-neutral-900 text-lg" aria-hidden="true"></i>
              </Button>
              
              <Button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                variant="primary"
                buttonStyle="filled"
                size="lg"
                background="light"
                className={`hidden sm:block absolute right-0 sm:right-4 md:right-8 lg:right-0 xl:right-0 Xxxl:right-[-5rem] top-1/2 -translate-y-1/4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 hover:!bg-[#FFB81C] hover:!text-neutral-900 !p-0 ${
                  currentIndex >= maxIndex ? 'invisible' : ''
                }`}
                aria-label={`${title} - Next slide`}
              >
                <i className="icon-Arrow-Right text-neutral-900 text-lg" aria-hidden="true"></i>
              </Button>
            </>
          )}

          {/* Slider Track - Full width with proper overflow */}
          <div className="w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out product-list gap-4 sm:gap-6 cursor-grab active:cursor-grabbing touch-pan-y"
              style={{
                transform: `translateX(-${currentIndex * (100 / responsiveCardsPerView)}%)`
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Product slider"
              aria-live="polite"
              aria-atomic="false"
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  imageAlt={product.imageAlt}
                  isNew={product.isNew}
                  options={product.options}
                  href={product.href}
                  onClick={product.onClick}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          {showProgress && products.length > responsiveCardsPerView && (
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="w-24 sm:w-32 h-1 bg-neutral-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin={0} aria-valuemax={100} aria-label="Progress bar">
                <div 
                  className="h-full bg-neutral-900 transition-all duration-500 ease-in-out"
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

export default ProductSlider; 