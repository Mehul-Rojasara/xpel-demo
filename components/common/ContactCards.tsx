import React from 'react';
import Link from 'next/link';

export interface ContactCard {
  id: string;
  icon: React.ReactNode;
  heading: string;
  subtext: string;
  href?: string;
}

interface ContactCardsProps {
  cards: ContactCard[];
  className?: string;
}

export const ContactCards: React.FC<ContactCardsProps> = ({
  cards,
  className = ''
}) => {
  return (
    <div 
      className={`flex justify-center lg:justify-start flex-col lg:flex-row gap-4 w-full ${className}`}
      role="region" 
      aria-label="Contact methods"
    >
      {cards.map((card) => (
        <article
          key={card.id}
          className="group cursor-pointer w-full"
          role="button"
          tabIndex={0}
          aria-label={`${card.heading} - ${card.subtext}`}
        >
          {/* Card with exact Figma dimensions: 320px x 190px */}
          <div className="bg-white rounded-2xl transition-all duration-300 group-hover:shadow-lg group-focus:shadow-lg relative overflow-hidden flex-shrink-0 w-full lg:max-w-[372px] lg:min-h-[192px] p-8">
            {/* Subtle gradient glow effect from bottom-left - exact Figma spec */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-200 to-transparent opacity-40 rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-60 transform -translate-x-16 translate-y-16"></div>
            
            {/* Yellow hover effect overlay - starts from left corner */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none bg-gradient-to-r from-[#FFB81C] via-[#FFD477] to-[rgba(255,255,255,0.3)]"></div>
            
            {/* Arrow icon on hover - top right corner */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            
            {/* Icon - exact Figma dimensions: 40px x 40px */}
            <div className="relative z-10 mb-6 lg:mb-10">
              <div className="text-neutral-900 transition-transform duration-300 text-3xl">
                {card.icon}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Heading - fixed typography classes */}
              <h3 className="font-medium font-h4 leading-tight tracking-[-0.01em] text-neutral-900 mb-3">
                {card.heading}
              </h3>

              {/* Subtext - fixed typography classes */}
              <p className="text-lg leading-relaxed text-neutral-900 font-normal">
                {card.subtext}
              </p>
            </div>
            
            {/* Link overlay for clickable area */}
            {card.href && (
              <Link 
                href={card.href}
                className="absolute inset-0 z-20"
                aria-label={`${card.heading} - ${card.subtext}`}
              />
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

// Predefined contact cards data - exact Figma text with direct icon classes
export const defaultContactCards: ContactCard[] = [
  {
    id: 'call',
    icon: <i className="icon-Phone"></i>,
    heading: 'Call us on our toll free',
    subtext: '+1 406-594-7026',
    href: 'tel:+14065947026'
  },
  {
    id: 'email',
    icon: <i className="icon-User"></i>,
    heading: 'Say hello on our email',
    subtext: 'team@xpelindia.com',
    href: 'mailto:team@xpelindia.com'
  },
  {
    id: 'chat',
    icon: <i className="icon-Help-Center"></i>,
    heading: 'Chat with us 24/7',
    subtext: 'Start a chat now.',
    href: '/chat'
  }
];

export default ContactCards; 