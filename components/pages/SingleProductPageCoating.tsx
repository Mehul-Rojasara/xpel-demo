
import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { BenefitsSection } from '../sections/BenefitsSection';
import { FAQSection } from '../sections/FAQSection';
import { ProductInfoSection } from '../sections/ProductInfoSection';
import { ContentSection } from '../sections';
import { CONTENT_SECTIONS } from '@/config';

interface SingleProductCoatingPageProps {
  country: string;
  language: string;
}

export const SingleProductCoating: React.FC<SingleProductCoatingPageProps> = () => {
    
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
              label: "Explore",
              href: "/products/ultimate-plus",
              variant: "secondary",
              arrow: true,
            },
            {
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
      <FAQSection/>
    </div>
  );
};

export default SingleProductCoating; 