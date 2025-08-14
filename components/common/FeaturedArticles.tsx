'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import '@/assets/scss/featured-articles.css';

export interface ArticleCard {
  id: string;
  image: string;
  imageAlt: string;
  date: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

interface FeaturedArticlesProps {
  title?: string;
  articles: ArticleCard[];
  className?: string;
  background?: 'white' | 'light' | 'dark';
  layout?: 'grid' | 'slider';
  showNavigation?: boolean;
  showDate?: boolean;
  showCta?: boolean;
}

export const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  title = 'Latest Articles',
  articles,
  className = '',
  background = 'white',
  layout = 'grid',
  showNavigation = true,
  showDate = true,
  showCta = true
}) => {
  const [expandedCard, setExpandedCard] = useState(0); // First card expanded by default

  const backgroundClasses = {
    white: 'bg-white text-neutral-900',
    light: 'bg-neutral-50 text-neutral-900',
    dark: 'bg-neutral-900 text-white'
  };

  const handleCardHover = (index: number) => {
    setExpandedCard(index);
  };

  return (
    <section 
      className={`py-16 px-4 sm:px-6 lg:px-8 ${backgroundClasses[background]} ${className} featured-articles`}
      role="region" 
      aria-label="Featured articles"
    >
      
        {/* Header */}
        <Container>
          <div className="featured-articles__header">
            <p className="font-h1 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em]">
              {title}
            </p>
            
            {showNavigation && layout === 'slider' && (
              <button
                className="featured-articles__nav-button"
                aria-label="Next articles"
              >
                <svg className="featured-articles__nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </Container>
        <div className="max-w-7xl mx-auto">
          {/* Articles Grid with Expandable Cards */}
          <div className="featured-articles__grid">
            {articles.map((article, index) => {
              const isExpanded = expandedCard === index;
              
              return (
                <article
                  key={article.id}
                  className={`featured-articles__card group cursor-pointer ${
                    isExpanded ? 'featured-articles__card--expanded' : 'featured-articles__card--regular'
                  }`}
                  onMouseEnter={() => handleCardHover(index)}
                  role="article"
                >
                  {/* Image Container - Fixed Height */}
                  <div className="featured-articles__image">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Date Tag - Bottom-left position */}
                    {showDate && article.date && (
                      <div className="featured-articles__date">
                        {article.date}
                      </div>
                    )}
                  </div>

                  {/* Content - Fixed Height */}
                  <div className="featured-articles__content">
                    {isExpanded ? (
                      // Expanded layout: text and button side by side
                      <div className="featured-articles__expanded-layout">
                        {/* Left side - Text content */}
                        <div className="featured-articles__text-content">
                          <p className="font-h4 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-3">
                            {article.title}
                          </p>
                          
                          <p className="para-medium text-neutral-600 leading-[150%] tracking-[0.01em] font-[450]">
                            {article.description}
                          </p>
                        </div>

                        {/* Right side - Button */}
                        {showCta && article.ctaText && article.ctaHref && (
                          <div className="featured-articles__button-container">
                            <a
                              href={article.ctaHref}
                              className="featured-articles__button"
                            >
                              {article.ctaText}
                              <svg className="featured-articles__button-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Regular layout: stacked content (no button)
                      <>
                        <p className="font-h5 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-2">
                          {article.title}
                        </p>
                        
                        <p className="para-small text-neutral-600 leading-[150%] tracking-[0.01em] font-[450]">
                          {article.description}
                        </p>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
    </section>
  );
};

export default FeaturedArticles; 