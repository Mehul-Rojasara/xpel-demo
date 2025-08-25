'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
export interface ArticleCard {
  readonly id: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly date: string;
  readonly title: string;
  readonly description: string;
  readonly ctaText?: string;
  readonly ctaHref?: string;
}

interface FeaturedArticlesProps {
  readonly title?: string;
  readonly articles: readonly ArticleCard[];
  readonly className?: string;
  readonly background?: 'white' | 'light' | 'dark';
  readonly layout?: 'grid' | 'slider';
  readonly showNavigation?: boolean;
  readonly showDate?: boolean;
  readonly showCta?: boolean;
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
      className={`py-16 sm:py-20 lg:py-[7.5rem] overflow-hidden ${backgroundClasses[background]} ${className} w-full max-w-full Xxxl:max-w-[105rem] mx-auto`}
      aria-label="Featured articles"
    >      
        {/* Header */}
        <Container>
          <div className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-h1 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em]">
              {title}
            </h2>
            
            {showNavigation && layout === 'slider' && (
              <button
                className="w-12 h-12 bg-[#ffb81c] hover:bg-[#e6a600] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                aria-label="Next articles"
              >
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
          {/* Articles Grid with Expandable Cards */}
          <div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-4 items-stretch w-full max-w-[83.125rem] mx-auto min-h-[17.5rem]">
            {articles.map((article, index) => {
              const isExpanded = expandedCard === index;
              
              return (
                <article
                  key={article.id}
                  className={`transition-all duration-300 ease-in-out rounded-[1.25rem] overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col m-0 p-0 flex-1 w-full hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 group cursor-pointer ${
                    isExpanded ? 'w-full lg:w-[41rem] h-auto' : 'w-full lg:w-[20rem] h-auto'
                  }`}
                  onMouseEnter={() => handleCardHover(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Article: ${article.title}`}
                >
                  {/* Image Container - Fixed Height */}
                  <div className="relative overflow-hidden h-[11.25rem] min-h-[11.25rem] md:h-[12.5rem] md:min-h-[12.5rem] lg:h-[25rem] lg:min-h-[25rem] flex-shrink-0 rounded-[1.25rem] w-full transition-transform duration-300 ease-in-out">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    
                    {/* Date Tag - Bottom-left position */}
                    {showDate && article.date && (
                      <div className={`absolute bottom-3 left-3 bg-[#f2c744] text-[#1b1a1a] font-medium text-xs leading-[1.2] z-10 rounded-lg px-3 py-2 tracking-[0.01em] md:bottom-3 md:left-3 lg:bottom-3 lg:left-3 ${isExpanded ? 'block' : 'hidden'}`}>
                        {article.date}
                      </div>
                    )}
                  </div>

                  {/* Content - Fixed Height */}
                  <div className="min-h-[8.875rem] p-6 pb-4 flex flex-col justify-start flex-1 bg-white overflow-hidden w-full md:h-auto">
                    {isExpanded ? (
                      // Expanded layout: text and button side by side
                      <div className="flex items-start justify-between h-full flex-col md:flex-row">
                        {/* Left side - Text content */}
                        <div className="flex-1 pr-4 max-w-72 overflow-hidden">
                          <h4 className="font-h4 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-2 lg:line-clamp-2 transition-all duration-300 ease-in-out">
                            {article.title}
                          </h4>
                          
                          <p className="para-xsmall text-neutral-600 leading-[150%] tracking-[0.01em] font-[450] lg:line-clamp-2 transition-all duration-300 ease-in-out">
                            {article.description}
                          </p>
                        </div>

                        {/* Right side - Button */}
                        {showCta && article.ctaText && article.ctaHref && (
                          <div className="flex-shrink-0">
                            <a
                              href={article.ctaHref}
                              className="group/article-btn inline-flex items-center gap-2 justify-center text-[#1b1a1a] font-medium text-sm transition-all duration-300 ease-in-out border border-gray-100 rounded-lg px-6 py-3 min-h-[2.5rem] whitespace-nowrap shadow-[0_1px_3px_rgba(0,0,0,0.1)] bg-gray-100 hover:bg-[#1b1a1a] hover:text-white"
                            >
                              <span className="icon-Language text-lg"></span>
                              {article.ctaText}                              
                            </a>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Regular layout: stacked content (no button)
                      <div className="flex-1 max-w-72 overflow-hidden">
                        <h4 className="font-h4 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-2 lg:line-clamp-2 transition-all duration-300 ease-in-out">
                          {article.title}
                        </h4>
                        
                        <p className="para-xsmall text-neutral-600 leading-[150%] tracking-[0.01em] font-[450] lg:line-clamp-2 transition-all duration-300 ease-in-out">
                          {article.description}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
    </section>
  );
};

export default FeaturedArticles; 