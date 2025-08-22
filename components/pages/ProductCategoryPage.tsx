import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { ProductLineupSection } from '@/components/common/ProductLineupSection';
import { UniversalUsageSection } from '@/components/common/UniversalUsageSection';
import { CareProductsBanner } from '@/components/common/CareProductsBanner';
import { FAQSection } from '@/components/common/FAQSection';
import { PaintProtectionSection } from '@/components/common/PaintProtectionSection';
import { ArticleSlider } from '@/components/common/ArticleSlider';
import { CalculatorIframe } from '@/components/common/CalculatorIframe';
import Container from '@/components/ui/Container';

export interface ProductCategoryPageProps {
  // Hero Section
  heroImage: string;
  heroImageAlt: string;
  heroSmallHeading: string;
  heroHeadline: string;
  heroDescription: string;
  heroPrimaryCta: string;
  heroPrimaryCtaHref?: string;
  heroSecondaryCta: string;
  heroSecondaryCtaHref?: string;
  
  // Product Lineup Section
  productLineupTitle: string;
  productLineupSubtitle: string;
  productLineupDescription: string;
  productLineupImage: string;
  productLineupImageAlt: string;
  productLineupPrimaryCta: string;
  productLineupPrimaryCtaHref?: string;
  productLineupSecondaryCta: string;
  productLineupSecondaryCtaHref?: string;
  productFeatures: Array<{
    id: string;
    title: string;
    description: string;
    iconClass: string;
  }>;
  
  // Universal Usage Section
  universalUsageSubHeading: string;
  universalUsageTitle: string;
  universalUsageDescription: string;
  universalUsageMainImage: {
    src: string;
    alt: string;
  };
  universalUsageAreas: Array<{
    id: string;
    title: string;
    description?: string;
    imageSrc: string;
    imageAlt: string;
  }>;
  
  // Care Products Section
  careProductsTitle: string;
  careProductsSubtitle: string;
  careProductsCtaText: string;
  careProductsCtaHref?: string;
  
  // Tabbed Slider Section
  tabbedSliderTabs: Array<{
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    features: Array<{
      id: string;
      title: string;
      description: string;
      iconClass: string;
    }>;
  }>;
  defaultActiveTab?: number;
  
  // FAQ Section
  faqTitle: string;
  faqDescription: string;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  seeAllFaqsHref: string;
  faqAnchorId: string;
  
  // Latest Articles Section
  latestArticlesTitle: string;
  latestArticlesViewAllHref: string;
  latestArticles: Array<{
    id: string;
    title: string;
    description?: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    hasVideo?: boolean;
  }>;
  
  // Paint Protection Section
  paintProtectionSubHeading: string;
  paintProtectionHeadline: string;
  paintProtectionDescription: string;
  paintProtectionImages: {
    topLeft: {
      src: string;
      alt: string;
    };
    topRight: {
      src: string;
      alt: string;
    };
    bottom: {
      src: string;
      alt: string;
      isVideo?: boolean;
    };
  };
  
  className?: string;
}

export const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({
  // Hero Section
  heroImage,
  heroImageAlt,
  heroSmallHeading,
  heroHeadline,
  heroDescription,
  heroPrimaryCta,
  heroPrimaryCtaHref,
  heroSecondaryCta,
  heroSecondaryCtaHref,
  
  // Product Lineup Section
  productLineupSubtitle,
  productLineupDescription,
  productLineupImage,
  productLineupImageAlt,
  productLineupPrimaryCta,
  productLineupPrimaryCtaHref,
  productLineupSecondaryCta,
  productLineupSecondaryCtaHref,
  productFeatures,
  
  // Universal Usage Section
  universalUsageSubHeading,
  universalUsageTitle,
  universalUsageDescription,
  universalUsageMainImage,
  universalUsageAreas,
  
  // Care Products Section
  careProductsTitle,
  careProductsSubtitle,
  careProductsCtaText,
  careProductsCtaHref,
  
  // Tabbed Slider Section
  tabbedSliderTabs,
  defaultActiveTab,
  
  // FAQ Section
  faqTitle,
  faqDescription,
  faqs,
  seeAllFaqsHref,
  faqAnchorId,
  
  // Latest Articles Section
  latestArticlesTitle,
  latestArticlesViewAllHref,
  latestArticles,
  
  // Paint Protection Section
  paintProtectionSubHeading,
  paintProtectionHeadline,
  paintProtectionDescription,
  paintProtectionImages,
  
  className = ''
}) => {
  // Banner content configuration
  const bannerContent = {
    backButton: {
      label: 'Products',
      href: '/products'
    },
    headline: {
      subtitle: heroSmallHeading,
      title: heroHeadline
    },
    description: heroDescription,
    optionalDescription: 'Additional information about our comprehensive protection solutions.',
    buttons: [
      {
        label: heroPrimaryCta,
        href: heroPrimaryCtaHref || '#',
        variant: 'tertiary' as const
      },
      {
        label: heroSecondaryCta,
        href: heroSecondaryCtaHref || '#',
        variant: 'primary' as const
      }
    ]
  };

  return (
    <main className={`min-h-screen ${className}`} role="main" aria-label="Product Category Information">
      {/* Hero Section using Banner component */}
      <Banner
        backgroundImage={heroImage}
        altText={heroImageAlt}
        variant="promotional"
        content={bannerContent}
      />

      {/* Product Lineup Section with Tabbed Functionality */}
      <ProductLineupSection
        subtitle={productLineupSubtitle}
        description={productLineupDescription}
        features={productFeatures}
        primaryCtaText={productLineupPrimaryCta}
        primaryCtaHref={productLineupPrimaryCtaHref}
        secondaryCtaText={productLineupSecondaryCta}
        secondaryCtaHref={productLineupSecondaryCtaHref}
        imageSrc={productLineupImage}
        imageAlt={productLineupImageAlt}
        showTabs={true}
        tabs={tabbedSliderTabs}
        defaultActiveTab={defaultActiveTab}
      />

      {/* Calculator Section */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-labelledby="calculator-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="calculator-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-neutral-900 mb-4">
              Paint Protection Calculator
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Calculate the cost and coverage for your paint protection needs with our interactive calculator.
            </p>
          </div>
          <CalculatorIframe />
        </Container>
      </section>

      {/* Universal Usage Section */}
      <UniversalUsageSection
        subHeading={universalUsageSubHeading}
        title={universalUsageTitle}
        description={universalUsageDescription}
        mainImage={universalUsageMainImage}
        applicationAreas={universalUsageAreas}
      />
      
      {/* Paint Protection Section */}
      <PaintProtectionSection
        subHeading={paintProtectionSubHeading}
        headline={paintProtectionHeadline}
        description={paintProtectionDescription}
        images={paintProtectionImages}
      />

      {/* Latest Articles Section */}
      <ArticleSlider
        title={latestArticlesTitle}
        viewAllHref={latestArticlesViewAllHref}
        articles={latestArticles}
      />

      {/* Care Products Section */}
      <CareProductsBanner
        title={careProductsTitle}
        subtitle={careProductsSubtitle}
        ctaText={careProductsCtaText}
        ctaHref={careProductsCtaHref}
      />

      {/* FAQ Section */}
      <FAQSection
        title={faqTitle}
        description={faqDescription}
        faqs={faqs}
        seeAllButtonText="See All FAQs"
        seeAllButtonHref={seeAllFaqsHref}
        anchorId={faqAnchorId}
      />
    </main>
  );
}; 