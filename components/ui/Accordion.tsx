'use client';
import React, { useState } from 'react';

interface AccordionItemProps {
  readonly title: string;
  readonly content: string;
  readonly isOpen?: boolean;
  readonly onToggle?: () => void;
  readonly className?: string;
}

interface AccordionProps {
  readonly items: ReadonlyArray<{ readonly title: string; readonly content: string }>;
  readonly allowMultiple?: boolean;
  readonly defaultOpen?: ReadonlyArray<number>;
  readonly className?: string;
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
    <div className={`${className} overflow-hidden rounded-lg lg:rounded-2xl ${isOpen ? 'bg-neutral-100' : ''}`}>
      <button
        onClick={onToggle}
        className={`rounded-lg lg:rounded-2xl w-full flex items-center justify-between gap-3 p-3 lg:px-6 lg:py-4 cursor-pointer transition-all duration-200 hover:bg-neutral-100 outline-none focus:outline-none ${isOpen ? 'hover:bg-neutral-100 pb-2 lg:pb-2 ' : ''}`}
        aria-expanded={isOpen}
      >
        <p className={`para-medium font-semibold text-neutral-900 text-left flex-1 leading-loose`}>
          {title}
        </p>
        <div className="flex-shrink-0 ml-4">
          {/* Circular icon with conditional border and arrow direction */}
          <div className={`w-[1.875rem] lg:w-[2.625rem] h-[1.875rem] lg:h-[2.625rem] rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-white shadow-md' : 'bg-white border border-neutral-900'}`}>
            <svg 
              className={`w-3 lg:w-4 h-3 lg:h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-neutral-900' : 'text-neutral-900'}`} 
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
        <div className="px-3 lg:px-6 pb-3 lg:pb-6">
          <p className={`para-small text-neutral-600 leading-relaxed`}>
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
  const [openItems, setOpenItems] = useState<readonly number[]>(defaultOpen);

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

 