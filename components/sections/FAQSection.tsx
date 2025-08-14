'use client'

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  faqs?: FAQItem[];
  className?: string;
  'aria-label'?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ctaText = "See All FAQs",
  ctaHref = "/faqs",
  faqs = [
    {
      id: "1",
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: "2",
      question: "Simply dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      id: "3",
      question: "Text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: "4",
      question: "Dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ],
  className = "",
  'aria-label': ariaLabel
}) => {
  const [expandedId, setExpandedId] = useState<string | null>("1"); // Default to second item expanded

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <section 
      className={`bg-white py-16 md:py-20 lg:py-24 min-h-[400px] sm:min-h-[500px] lg:h-[545px] ${className}`}
      aria-label={ariaLabel || "Frequently asked questions section"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 h-full">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>

            {/* CTA Button */}
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 w-fit"
              aria-label={`${ctaText} - opens in new page`}
            >
              {ctaText}
            </Link>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-4">
              {faqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                
                return (
                  <article
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    {/* Question Header */}
                    <button
                      id={`faq-question-${faq.id}`}
                      className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        isExpanded ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                      }`}
                      onClick={() => handleToggle(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, faq.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      {/* Question Text */}
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed pr-4">
                        {faq.question}
                      </h3>

                      {/* Toggle Icon */}
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
                        <svg 
                          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ease-in-out ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Answer Content */}
                    <div
                      id={`faq-answer-${faq.id}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      aria-hidden={!isExpanded}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 