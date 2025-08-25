"use client";

import React, { useState, useEffect, useRef } from 'react';

interface FilterOption {
  readonly id: string;
  readonly label: string;
  readonly count: number;
}

interface FiltersSidebarProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly coverageFilters: ReadonlyArray<FilterOption>;
  readonly eventTypeFilters: ReadonlyArray<FilterOption>;
  readonly onApplyFilters: (filters: { coverage: string[]; eventType: string[] }) => void;
  readonly currentFilters?: { coverage: string[]; eventType: string[] };
}

export const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  isOpen,
  onClose,
  coverageFilters,
  eventTypeFilters,
  onApplyFilters,
  currentFilters = { coverage: [], eventType: [] }
}) => {
  const [selectedCoverage, setSelectedCoverage] = useState<string[]>(currentFilters.coverage);
  const [selectedEventType, setSelectedEventType] = useState<string[]>(currentFilters.eventType);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Update local state when currentFilters changes
  useEffect(() => {
    setSelectedCoverage(currentFilters.coverage);
    setSelectedEventType(currentFilters.eventType);
  }, [currentFilters]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCoverageChange = (id: string) => {
    setSelectedCoverage(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleEventTypeChange = (id: string) => {
    setSelectedEventType(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleClearAll = () => {
    setSelectedCoverage([]);
    setSelectedEventType([]);
  };

  const handleApply = () => {
    onApplyFilters({
      coverage: selectedCoverage,
      eventType: selectedEventType
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-[var(--color-neutral-900)] bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <aside 
        className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="filters-title"
        id="filters-sidebar"
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <h3 id="filters-title" className="font-h4 text-[var(--color-neutral-900)]">
              Filters
            </h3>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-600)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-neutral-300)] focus:ring-offset-2 rounded"
              aria-label="Close filters"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto">
            {/* By Coverage */}
            <fieldset className="mb-8">
              <legend className="font-h5 text-[var(--color-neutral-900)] mb-4">By Coverage</legend>
              <div className="space-y-3" aria-labelledby="coverage-filters">
                {coverageFilters.map((filter) => (
                  <label key={filter.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCoverage.includes(filter.id)}
                      onChange={() => handleCoverageChange(filter.id)}
                      className="w-4 h-4 text-[var(--color-primary-300)] border-[var(--color-neutral-300)] rounded focus:ring-[var(--color-primary-300)] focus:ring-offset-0"
                      aria-describedby={`${filter.id}-count`}
                    />
                    <span className="ml-3 para-medium text-[var(--color-neutral-700)]">{filter.label}</span>
                    <span 
                      id={`${filter.id}-count`}
                      className="ml-auto para-small text-[var(--color-neutral-500)]"
                      aria-label={`${filter.count} events`}
                    >
                      ({filter.count})
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* By Event Type */}
            <fieldset className="mb-8">
              <legend className="font-h5 text-[var(--color-neutral-900)] mb-4">By Event Type</legend>
              <div className="space-y-3" aria-labelledby="event-type-filters">
                {eventTypeFilters.map((filter) => (
                  <label key={filter.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedEventType.includes(filter.id)}
                      onChange={() => handleEventTypeChange(filter.id)}
                      className="w-4 h-4 text-[var(--color-primary-300)] border-[var(--color-neutral-300)] rounded focus:ring-[var(--color-primary-300)] focus:ring-offset-0"
                      aria-describedby={`${filter.id}-count`}
                    />
                    <span className="ml-3 para-medium text-[var(--color-neutral-700)]">{filter.label}</span>
                    <span 
                      id={`${filter.id}-count`}
                      className="ml-auto para-small text-[var(--color-neutral-500)]"
                      aria-label={`${filter.count} events`}
                    >
                      ({filter.count})
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Footer Buttons */}
          <footer className="border-t border-[var(--color-neutral-200)] pt-6 space-y-3">
            <button
              onClick={handleClearAll}
              className="btn btn-secondary-outline w-full"
            >
              Clear All
            </button>
            <button
              onClick={handleApply}
              className="btn btn-primary w-full"
            >
              Apply Filters
            </button>
          </footer>
        </div>
      </aside>
    </>
  );
};

export default FiltersSidebar; 