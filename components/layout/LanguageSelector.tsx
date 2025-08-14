'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface LanguageSelectorProps {
  country: string;
  language: string;
  className?: string;
}

import { LANGUAGE_OPTIONS, COUNTRY_MAP, LanguageOption } from '@/config/constants';

interface LanguageSelectorProps {
  country: string;
  language: string;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  country, 
  language, 
  className = '' 
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find current language option
  const currentOption = LANGUAGE_OPTIONS.find(
    option => option.code === language && option.country.toLowerCase().includes(country.toLowerCase())
  ) || LANGUAGE_OPTIONS[0];

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm(''); // Clear search when opening
    }
  }, [isOpen]);

  const handleLanguageChange = useCallback((selectedOption: LanguageOption) => {
    // Extract the current path segments
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // Ensure we have at least country and language segments
    if (pathSegments.length >= 2) {
      // Replace the language segment (index 1) with the new language
      pathSegments[1] = selectedOption.code;
      
      // If we have a country segment and it needs to change based on the selection
      if (pathSegments.length >= 1) {
        const newCountry = COUNTRY_MAP[selectedOption.code as keyof typeof COUNTRY_MAP] || 'us';
        pathSegments[0] = newCountry;
      }
      
      // Reconstruct the path
      const newPath = '/' + pathSegments.join('/');
      
      // Navigate to the new path
      router.push(newPath);
    } else {
      // Fallback: construct a basic path
      const newCountry = COUNTRY_MAP[selectedOption.code as keyof typeof COUNTRY_MAP] || 'us';
      router.push(`/${newCountry}/${selectedOption.code}`);
    }
    
    setIsOpen(false);
    setSearchTerm('');
  }, [pathname, router]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setSearchTerm('');
    }
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  // Filter languages based on search term
  const filteredLanguages = LANGUAGE_OPTIONS.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    option.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    option.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayText = `${currentOption.country} (${currentOption.name})`;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language and region"
      >
        {/* Globe Icon */}
        <svg 
          className="w-4 h-4 flex-shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        
        {/* Language Text */}
        <span className="text-[16px] leading-[18px] font-display font-[500]">{displayText}</span>
        
        {/* Dropdown Arrow */}
        <svg 
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
          <div className="py-2">
            {/* Search Input */}
            <div className="px-3 pb-2 border-b border-gray-700">
              <input
                type="text"
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search languages"
              />
            </div>
            
            {/* Language Options */}
            <div className="max-h-60 overflow-y-auto">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((option) => {
                  const isSelected = option.code === currentOption.code && 
                                   option.country === currentOption.country;
                  
                  return (
                    <button
                      key={`${option.code}-${option.country}`}
                      onClick={() => handleLanguageChange(option)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                        isSelected 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {/* Country Icon */}
                          <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          
                          {/* Language and Country */}
                          <div className="flex flex-col">
                            <span className="font-medium">{option.name}</span>
                            <span className="text-xs text-gray-400">{option.country}</span>
                          </div>
                        </div>
                        
                        {/* Selected Indicator */}
                        {isSelected && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-3 text-sm text-gray-400 text-center">
                  No languages found
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-3 pt-2 border-t border-gray-700">
              <Link
                href={`/${country}/${language}/language-preferences`}
                className="block w-full text-left px-3 py-2 text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Language Preferences
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 