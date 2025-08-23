"use client";

import React, { useState } from 'react';
import { EventCard } from '@/components/common/EventCard';
import { FiltersSidebar } from '@/components/sections/FiltersSidebar';
import type { EventData } from '@/config/events';

interface FilterOption {
  readonly id: string;
  readonly label: string;
  readonly count: number;
}

interface EventsGridClientProps {
  readonly events: ReadonlyArray<EventData>;
  readonly title: string;
  readonly coverageFilters: ReadonlyArray<FilterOption>;
  readonly eventTypeFilters: ReadonlyArray<FilterOption>;
}

export const EventsGridClient: React.FC<EventsGridClientProps> = ({
  events,
  title,
  coverageFilters,
  eventTypeFilters
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState<readonly EventData[]>(events);
  const [displayCount, setDisplayCount] = useState(6);
  const [activeFilters, setActiveFilters] = useState<{ coverage: string[]; eventType: string[] }>({
    coverage: [],
    eventType: []
  });

  const displayedEvents = filteredEvents.slice(0, displayCount);
  const hasMoreEvents = displayCount < filteredEvents.length;
  const hasActiveFilters = activeFilters.coverage.length > 0 || activeFilters.eventType.length > 0;

  const handleFilterClick = () => {
    setIsFiltersOpen(true);
  };

  const handleCloseFilters = () => {
    setIsFiltersOpen(false);
  };

  const handleApplyFilters = (filters: { coverage: string[]; eventType: string[] }) => {
    let filtered: readonly EventData[] = events;

    // Apply coverage filter
    if (filters.coverage.length > 0) {
      filtered = filtered.filter(event => filters.coverage.includes(event.category));
    }

    // Apply event type filter
    if (filters.eventType.length > 0) {
      filtered = filtered.filter(event => filters.eventType.includes(event.eventType));
    }

    setFilteredEvents(filtered);
    setActiveFilters(filters);
    setDisplayCount(6); // Reset display count when filters change
  };

  const handleClearFilters = () => {
    setFilteredEvents(events);
    setActiveFilters({ coverage: [], eventType: [] });
    setDisplayCount(6); // Reset display count when filters are cleared
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, filteredEvents.length));
  };

  return (
    <>
      <section className="section-spacing-y bg-[var(--color-neutral-100)]" aria-labelledby="events-heading">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <header className="flex items-center justify-between mb-12">
            <h2 id="events-heading" className="font-h2 text-[var(--color-neutral-900)]">
              {title}
            </h2>
            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="btn btn-secondary-outline"
                  aria-label="Clear all active filters"
                >
                  Clear Filters
                </button>
              )}
              <button
                onClick={handleFilterClick}
                className="btn btn-secondary"
                aria-label="Open filters sidebar"
                aria-expanded={isFiltersOpen}
                aria-controls="filters-sidebar"
              >
                Filters
              </button>
            </div>
          </header>

          {/* Results Count */}
          <div className="mb-6">
            <p className="para-small text-[var(--color-neutral-600)]" aria-live="polite">
              Showing {displayedEvents.length} of {filteredEvents.length} events
              {hasActiveFilters && " (filtered)"}
            </p>
          </div>

          {/* Events Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            role="grid"
            aria-label="Events list"
          >
            {displayedEvents.map((event) => (
              <div key={event.id} role="gridcell">
                <EventCard event={event} />
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="para-large text-[var(--color-neutral-500)]">No events found matching your filters.</p>
              <button
                onClick={handleClearFilters}
                className="btn btn-primary mt-4"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {hasMoreEvents && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="btn btn-secondary-outline"
                aria-label={`Load more events. ${filteredEvents.length - displayCount} more available`}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Filters Sidebar */}
      <FiltersSidebar
        isOpen={isFiltersOpen}
        onClose={handleCloseFilters}
        coverageFilters={coverageFilters}
        eventTypeFilters={eventTypeFilters}
        onApplyFilters={handleApplyFilters}
        currentFilters={activeFilters}
      />
    </>
  );
};

export default EventsGridClient; 