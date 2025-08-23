
import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { BenefitsSection } from '../sections/BenefitsSection';
import { ProductInfoSection } from '../sections/ProductInfoSection';
import { ContentSection } from '../sections';
import { CONTENT_SECTIONS } from '@/config';
import { FAQSection } from '../common/FAQSection';

interface SingleProductPpfPageProps {
  country: string;
  language: string;
  faqTitle: string;
  faqDescription: string;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  seeAllFaqsHref: string;
  faqAnchorId: string;
}

export const SingleProductPpf: React.FC<SingleProductPpfPageProps> = (
  {
    faqTitle,
  faqDescription,
  faqs,
  seeAllFaqsHref,
  faqAnchorId,
  }
) => {
    
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <Banner
        backgroundImage="/images/singleProductPpf/single-product-ppf.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          backButton: {
            label: "Products",
            href: "/products"
          },
          headline: {
            subtitle: "STAY PROTECTED WHEREVER THE ROAD LEADS YOU",
            title: "ULTIMATE PLUS™"
          },
          description: "From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it.",
          buttons: [
            {
              id: "explore-ultimate-plus",
              label: "Explore",
              href: "/products/ultimate-plus",
              variant: "secondary",
              arrow: true,
            },
            {
              id: "explore-coverage-options",
              label: "Explore Coverage Options",
              href: "/coverage-options",
              variant: "primary",
              arrow: true,
            }
          ]
        }}
      />

      {/* Product Info Section - New Component */}
      <ProductInfoSection />

      <BenefitsSection/>
      <ContentSection 
        title={CONTENT_SECTIONS.SECTION.title}
        subtitle={CONTENT_SECTIONS.SECTION.subtitle}
      />
      <FAQSection
              title={faqTitle}
              description={faqDescription}
              faqs={faqs}
              seeAllButtonText="See All FAQs"
              seeAllButtonHref={seeAllFaqsHref}
              anchorId={faqAnchorId}
            />
    </div>
  );
};

export default SingleProductPpf; 