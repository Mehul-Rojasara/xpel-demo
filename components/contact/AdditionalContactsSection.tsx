'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface ContactAvenue {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly linkText: string;
  readonly linkHref: string;
}

const contactAvenues: ContactAvenue[] = [
  {
    id: 'media',
    icon: 'icon-Newsroom',
    title: 'Media Contact',
    subtitle: 'Michael Mejia',
    description: 'Sr. Director of Marketing media@xpel.com',
    linkText: 'Optional Link',
    linkHref: 'mailto:media@xpel.com'
  },
  {
    id: 'faqs',
    icon: 'icon-Help-Center',
    title: 'FAQs',
    subtitle: 'Find answers to common questions',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    linkText: 'Optional Link',
    linkHref: '/faq'
  },
  {
    id: 'order-support',
    icon: 'icon-Shipping',
    title: 'Order Support',
    subtitle: 'Get Help',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    linkText: 'Optional Link',
    linkHref: '/support'
  },
  {
    id: 'investor-relations',
    icon: 'icon-Investor-Relations',
    title: 'Investor Relations',
    subtitle: 'Investor Info',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    linkText: 'Optional Link',
    linkHref: '/investors'
  }
];

const ContactCard: React.FC<{ contact: ContactAvenue }> = ({ contact }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-[14px] p-6 shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] transition-all duration-300 group h-[246px] flex flex-col justify-between w-[458.67px]">
      {/* Top Content Section */}
      <div className="flex-1">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-neutral-200 transition-colors duration-300">
            <i className={`${contact.icon} text-neutral-900 text-xl group-hover:text-neutral-700 transition-colors duration-300`}></i>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-bold text-neutral-900 mb-2">
          {contact.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[16px] text-neutral-700 mb-2">
          {contact.subtitle}
        </p>

        {/* Description */}
        <p className="text-[16px] text-neutral-600">
          {contact.description}
        </p>
      </div>

      {/* Bottom Link Section - Positioned at the very bottom */}
      <div className="mt-auto pt-4">
        <Link 
          href={contact.linkHref}
          className="text-[16px] transition-colors duration-200 inline-flex items-center"
        >
          {contact.linkText}
          <i className="icon-Arrow-Right ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200"></i>
        </Link>
      </div>
    </div>
  );
};

export const AdditionalContactsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3; // Show 3 cards at once instead of 4
  const maxIndex = Math.max(0, contactAvenues.length - cardsPerView);
  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

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
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-16">
          <h2 className="font-h2 text-neutral-900">
            Additional Contacts
          </h2>
        </div>

        {/* Contact Cards Slider */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          {contactAvenues.length > cardsPerView && (
            <>
              <Button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                variant="primary"
                buttonStyle="filled"
                size="lg"
                background="light"
                className={`hidden md:block absolute left-0 sm:left-4 md:left-8 lg:left-0 xl:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 hover:!bg-neutral-800 hover:!text-white !p-0 ${
                  currentIndex === 0 ? 'invisible' : ''
                }`}
                aria-label="Previous contact card"
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
                className={`hidden md:block absolute right-0 sm:right-4 md:right-8 lg:right-0 xl:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 hover:!bg-neutral-800 hover:!text-white !p-0 ${
                  currentIndex >= maxIndex ? 'invisible' : ''
                }`}
                aria-label="Next contact card"
              >
                <i className="icon-Arrow-Right text-neutral-900 text-lg" aria-hidden="true"></i>
              </Button>
            </>
          )}

          {/* Slider Track */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (458.67 + 16)}px)`,
                width: `${contactAvenues.length * (458.67 + 16)}px`,
              }}
            >
              {contactAvenues.map((contact) => (
                <div key={contact.id} className="mr-4">
                  <ContactCard contact={contact} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          {contactAvenues.length > cardsPerView && (
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-1 bg-neutral-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin={0} aria-valuemax={100}>
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