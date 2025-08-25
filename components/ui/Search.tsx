'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface SearchProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onSubmit?: (query: string) => void;
  readonly className?: string;
  readonly 'aria-label'?: string;
}

export const Search: React.FC<SearchProps> = ({
  isOpen,
  onClose,
  onSubmit,
  className = "",
  'aria-label': ariaLabel
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key to close search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when search is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onSubmit) {
      onSubmit(searchQuery.trim());
    }
    onClose();
  }, [searchQuery, onSubmit, onClose]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    setSearchQuery('');
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <dialog 
      className={`fixed inset-0 bg-black bg-opacity-50 z-[9999] ${className}`}
      aria-label={ariaLabel || "Search overlay"}
      aria-modal="true"
    >
      <div className="bg-gray-100 w-full px-4 py-6 rounded-b-lg" data-search-popup>
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
          onClick={handleClose}
          aria-label="Close search"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full px-4 py-4 pr-12 text-lg border-2 border-teal-500 rounded-lg focus:outline-none focus:border-teal-600 bg-white"
              autoFocus
              aria-label="Search input"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
              aria-label="Submit search"
              disabled={!searchQuery.trim()}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}; 