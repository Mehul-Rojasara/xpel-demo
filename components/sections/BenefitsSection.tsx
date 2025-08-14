import React from 'react';

interface BenefitCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: BenefitCard[];
  className?: string;
  'aria-label'?: string;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
   benefits = [
    {
      id: "1",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "High Gloss Finish",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore."
    },
    {
      id: "2",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Self Healing",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore."
    },
    {
      id: "3",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Easy Maintenance",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore."
    },
    {
      id: "4",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Long Lasting",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore."
    }
  ],
  className = "",
  'aria-label': ariaLabel
}) => {
  return (
    <section 
      className={`bg-white py-16 md:py-20 lg:py-24 min-h-[300px] sm:min-h-[350px] lg:h-[388px] ${className}`}
      aria-label={ariaLabel || "Product benefits section"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="text-center p-6 md:p-8 rounded-lg hover:bg-gray-50 transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              tabIndex={0}
              role="article"
              aria-labelledby={`benefit-title-${benefit.id}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 border-2 border-gray-300">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 
                id={`benefit-title-${benefit.id}`}
                className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight"
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 