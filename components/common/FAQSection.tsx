import React from 'react';
import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import Container from '@/components/ui/Container';

export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

interface FAQSectionProps {
  readonly title: string;
  readonly description: string;
  readonly faqs: readonly FAQItem[];
  readonly seeAllButtonText?: string;
  readonly seeAllButtonHref?: string;
  readonly anchorId?: string; // New prop for anchor link
  readonly className?: string;
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
    id: faq.id,
    title: faq.question,
    content: faq.answer
  }));

  // Create the anchor link for the ALL FAQ page
  const allFaqsAnchorLink = anchorId ? `${seeAllButtonHref}#${anchorId}` : seeAllButtonHref;

  return (
    <section 
      id={anchorId} // Add id for anchor linking
      className={`py-20 bg-white text-neutral-900 ${className}`}
      aria-label="Frequently asked questions"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column - FAQ Introduction */}
          <div className="space-y-2 lg:space-y-3">
            <h1 className="font-h2 text-neutral-900">
              {title}
            </h1>
            
            <p className="para-large text-neutral-600">
              {description}
            </p>
            
            {seeAllButtonHref && (
              <div className="pt-4">
                <Link href={allFaqsAnchorLink || '#'} className='btn btn-black btn-lg'>
                    {seeAllButtonText}
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