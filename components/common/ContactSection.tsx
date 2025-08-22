import React from 'react';
import Container from '@/components/ui/Container';
import { ContactCards, defaultContactCards, ContactCard } from './ContactCards';

interface ContactSectionProps {
  readonly cards?: readonly ContactCard[];
  readonly className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  cards = defaultContactCards,
  className = ''
}) => {
  return (
    <section 
      className={`py-16 sm:py-20 lg:py-[7.5rem] bg-neutral-100 min-h-[11.875rem] overflow-hidden ${className}`}
      aria-label="Contact information"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 lg:justify-between">
          {/* Left side - Heading and subtext starting from total left */}
          <div className="mb-0 flex-0-auto min-w-[18.75rem]">
            <h2 className="font-h2 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-2 lg:mb-4 whitespace-pre-line">
              Reach out to us
            </h2>
            
            <p className="para-medium text-neutral-900 opacity-60 lg:max-w-[17.5rem] whitespace-pre-line leading-[150%] tracking-[0.01em] font-[450]">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>

          {/* Right side - Contact cards with proper spacing from text */}
          <div className="flex justify-start w-full">
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