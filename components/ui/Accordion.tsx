'use client';
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

interface AccordionProps {
  items: Array<{ title: string; content: string }>;
  allowMultiple?: boolean;
  defaultOpen?: number[];
  className?: string;
}

// Individual Accordion Item Component
export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  onToggle,
  className = '',
}) => {
  return (
    <div className={`${className} ${isOpen ? 'bg-neutral-100 rounded-lg' : ''}`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 cursor-pointer transition-all duration-200 hover:bg-neutral-50 focus:outline-none ${isOpen ? 'hover:bg-neutral-100' : ''}`}
        aria-expanded={isOpen}
      >
        <span className={`text-base font-semibold text-neutral-900 text-left flex-1 leading-tight`}>
          {title}
        </span>
        <div className="flex-shrink-0 ml-4">
          {/* Circular icon with conditional border and arrow direction */}
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-white' : 'bg-white border border-neutral-900'}`}>
            <svg 
              className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180 text-neutral-900' : 'text-neutral-900'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className={`text-sm text-neutral-600 leading-relaxed`}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

// Basic Accordion Component
export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpen);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={`w-full bg-white ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

 