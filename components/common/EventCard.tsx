import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Core event data interface that can be used across different contexts
export interface BaseEventData {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly fullDate?: string;
  readonly location: string;
  readonly description: string;
  readonly logo: string;
  readonly logoAlt: string;
  readonly featured?: boolean;
}

// Configuration options for the card display
interface EventCardConfig {
  readonly showFeaturedTag?: boolean;
  readonly showDateBadge?: boolean;
  readonly showFullDate?: boolean;
  readonly showLocation?: boolean;
  readonly showDescription?: boolean;
  readonly showDetailsLink?: boolean;
  readonly linkText?: string;
  readonly linkHref?: (eventId: string) => string;
}

interface EventCardProps {
  readonly event: BaseEventData;
  readonly config?: EventCardConfig;
  readonly className?: string;
  readonly onEventClick?: (eventId: string) => void;
}

const defaultConfig: EventCardConfig = {
  showFeaturedTag: true,
  showDateBadge: true,
  showFullDate: true,
  showLocation: true,
  showDescription: true,
  showDetailsLink: true,
  linkText: "Event Details",
  linkHref: (eventId: string) => `/events/${eventId}`
};

export const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  config = {}, 
  className = '',
  onEventClick 
}) => {
  const finalConfig = { ...defaultConfig, ...config };

  const handleCardClick = () => {
    if (onEventClick) {
      onEventClick(event.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && onEventClick) {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-[var(--color-primary-300)] focus-within:ring-offset-2 ${className} ${
        event.featured && finalConfig.showFeaturedTag ? 'ring-2 ring-[var(--color-success-500)] ring-dashed' : ''
      }`}
      aria-labelledby={`event-title-${event.id}`}
      onClick={onEventClick ? handleCardClick : undefined}
      onKeyDown={onEventClick ? handleKeyDown : undefined}
    >
      {/* Top Image/Logo Section */}
      <header className="relative bg-[var(--color-neutral-100)] p-6 min-h-[180px] flex items-center justify-center">
        {/* Date Badge - Top Left */}
        {finalConfig.showDateBadge && (
          <div 
            className="absolute top-4 left-4 bg-[var(--color-warning-500)] text-white para-small font-bold px-3 py-2 rounded-md"
            aria-label={`Event date: ${event.date}`}
          >
            <div className="para-xsmall" aria-hidden="true">{event.date.split(' ')[0]}</div>
            <div className="para-large font-bold" aria-hidden="true">{event.date.split(' ')[1]}</div>
          </div>
        )}
        
        {/* Featured Tag - Bottom Left */}
        {event.featured && finalConfig.showFeaturedTag && (
          <div className="absolute bottom-4 left-4 bg-[var(--color-success-500)] text-white para-xsmall font-bold px-3 py-1 rounded-sm">
            <span className="sr-only">This is a </span>FEATURED<span className="sr-only"> event</span>
          </div>
        )}
        
        {/* Logo/Image - Center */}
        <div className="flex items-center justify-center">
          <Image
            src={event.logo}
            alt={event.logoAlt}
            width={120}
            height={80}
            className="object-contain"
          />
        </div>
      </header>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 id={`event-title-${event.id}`} className="font-h4 text-[var(--color-neutral-900)] mb-3">
          {event.title}
        </h3>
        
        {/* Date and Location */}
        {(finalConfig.showFullDate || finalConfig.showLocation) && (
          <div className="mb-4 space-y-2">
            {finalConfig.showFullDate && event.fullDate && (
              <div className="flex items-center para-small text-[var(--color-neutral-600)]">
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={event.fullDate}>{event.fullDate}</time>
              </div>
            )}
            
            {finalConfig.showLocation && (
              <div className="flex items-center para-small text-[var(--color-neutral-600)]">
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic">{event.location}</address>
              </div>
            )}
          </div>
        )}
        
        {/* Description */}
        {finalConfig.showDescription && (
          <p className="para-small text-[var(--color-neutral-700)] mb-6 line-clamp-3">
            {event.description}
          </p>
        )}
        
        {/* Event Details Link - Bottom */}
        {finalConfig.showDetailsLink && finalConfig.linkHref && finalConfig.linkText && (
          <footer>
            <Link
              href={finalConfig.linkHref(event.id)}
              className="inline-flex items-center text-[var(--color-accent-teal-300)] hover:text-[var(--color-accent-teal-400)] para-small font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-teal-300)] focus:ring-offset-2 rounded"
              aria-label={`View details for ${event.title}`}
            >
              {finalConfig.linkText}
              <svg 
                className="ml-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </footer>
        )}
      </div>
    </article>
  );
};

export default EventCard; 