import React from 'react';
import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
  seeAllButtonText?: string;
  seeAllButtonHref?: string;
  anchorId?: string; // New prop for anchor link
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
  seeAllButtonText = 'See All FAQs',
  seeAllButtonHref,
  anchorId, // New prop for anchor link
  className = ''
}) => {
  const accordionItems = faqs.map(faq => ({
    title: faq.question,
    content: faq.answer
  }));

  // Create the anchor link for the ALL FAQ page
  const allFaqsAnchorLink = anchorId ? `${seeAllButtonHref}#${anchorId}` : seeAllButtonHref;

  return (
    <section 
      id={anchorId} // Add id for anchor linking
      className={`py-20 bg-white text-neutral-900 ${className}`}
      role="region"
      aria-label="Frequently asked questions"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - FAQ Introduction */}
          <div className="space-y-8">
            <h1 className="font-h1 text-neutral-900">
              {title}
            </h1>
            
            <p className="para-large text-neutral-600">
              {description}
            </p>
            
            {seeAllButtonHref && (
              <div className="pt-4">
                <Link href={allFaqsAnchorLink || '#'}>
                  <Button
                    variant="secondary"
                    buttonStyle="filled"
                    size="lg"
                    background="light"
                    className="w-full sm:w-auto"
                  >
                    {seeAllButtonText}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="w-full">
            <Accordion 
              items={accordionItems}
              allowMultiple={false}
              defaultOpen={[0]}
              className="border-0 shadow-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}; 