'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import 'swiper/css/pagination';

// Import component-specific styles
import '@/assets/scss/article-slider.css';

export interface Article {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly category: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly href: string;
  readonly hasVideo?: boolean;
  readonly date?: string;
}

interface ArticleSliderProps {
  readonly title: string;
  readonly viewAllHref?: string;
  readonly articles: readonly Article[];
  readonly className?: string;
  readonly background?: 'white' | 'light' | 'dark';
}

export const ArticleSlider: React.FC<ArticleSliderProps> = ({
  title,
  viewAllHref,
  articles,
  className = '',
  background = 'dark'
}) => {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const handleArticleClick = (articleId: string) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  const backgroundClasses = {
    white: 'bg-white text-neutral-900',
    light: 'bg-neutral-50 text-neutral-900',
    dark: 'bg-neutral-900 text-white'
  };

  const currentBg = backgroundClasses[background];

  return (
    <section 
      className={`py-16 sm:py-20 ${currentBg} ${className}`}
      aria-label="Latest Articles"
    >
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
            {title}
          </h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label={`View all ${title.toLowerCase()}`}
            >
              View All
            </Link>
          )}
        </div>

        {/* Article Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Keyboard, A11y, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 3.2, spaceBetween: 32 },
              1280: { slidesPerView: 3.2, spaceBetween: 40 },
              1536: { slidesPerView: 3.2, spaceBetween: 40 }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Previous article',
              nextSlideMessage: 'Next article',
              firstSlideMessage: 'This is the first article',
              lastSlideMessage: 'This is the last article',
            }}
            className="article-swiper"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <article 
                  className={`group cursor-pointer transition-all duration-300 ${
                    expandedArticle === article.id ? 'transform -translate-x-4' : ''
                  }`}
                  onClick={() => handleArticleClick(article.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleArticleClick(article.id);
                    }
                  }}
                  aria-label={`Read article: ${article.title}`}
                >
                  {/* Article Card */}
                  <div className="bg-transparent rounded-2xl overflow-hidden transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={article.imageSrc}
                        alt={article.imageAlt}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      
                      {/* Category Label */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                      </div>
                      
                      {/* Video Indicator */}
                      {article.hasVideo && (
                        <div className="absolute top-3 right-3">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <svg 
                              className="w-4 h-4 text-white ml-0.5" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="mt-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#FFB81C] transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      {article.description && (
                        <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
                          {article.description}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-12 h-12 bg-[#FFB81C] rounded-full flex items-center justify-center text-neutral-900 hover:bg-[#E6A600] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB81C] focus:ring-opacity-75 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Previous article"
          >
            <ArrowLeftIcon />
          </button>
          
          <button
            className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-12 h-12 bg-[#FFB81C] rounded-full flex items-center justify-center text-neutral-900 hover:bg-[#E6A600] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB81C] focus:ring-opacity-75 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Next article"
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* Custom Pagination - Single Progress Bar */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-1">
            {/* Completed segment (white) */}
            <div className="w-8 h-1 bg-white rounded-full"></div>
            {/* Remaining segment (darker gray) */}
            <div className="w-24 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}; 