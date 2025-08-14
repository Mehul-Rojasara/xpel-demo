import React from 'react';
import Container from '@/components/ui/Container';
import { ContactCards, defaultContactCards, ContactCard } from './ContactCards';

interface ContactSectionProps {
  cards?: ContactCard[];
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  cards = defaultContactCards,
  className = ''
}) => {
  return (
    <section 
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-neutral-100 min-h-[190px] ${className}`}
      role="region" 
      aria-label="Contact information"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left side - Heading and subtext starting from total left */}
          <div className="space-y-6 mb-8 lg:mb-0 pt-8 pl-6 flex-0-auto min-w-[300px]">
            <p className="font-h1 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-4 whitespace-pre-line">
              Reach out{'\n'}to us
            </p>
            
            <p className="para-large text-neutral-900 opacity-60 max-w-[280px] whitespace-pre-line leading-[150%] tracking-[0.01em] font-[450]">
              Lorem Ipsum is simply dummy text of{'\n'}the printing
            </p>
          </div>

          {/* Right side - Contact cards with proper spacing from text */}
          <div className="flex justify-start pt-8 pr-14 ml-20 mb-8">
            <ContactCards 
              cards={cards}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection; 