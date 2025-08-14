import React from 'react';
import { Metadata } from 'next';
import { ProductCategoryPage } from '@/components/pages/ProductCategoryPage';
import { productCategoryData } from '@/config/productCategoryData';

export const metadata: Metadata = {
  title: "Single Product Category - XPEL | Professional Automotive Protection",
  description: "Discover XPEL's premium product category solutions for automotive, residential, and commercial applications. Advanced protection technology with professional installation support.",
  keywords: "product category, automotive protection, ceramic coating, car protection, XPEL",
  openGraph: {
    title: "Single Product Category - XPEL | Professional Automotive Protection",
    description: "Discover XPEL's premium product category solutions for automotive, residential, and commercial applications.",
    type: "website",
    locale: "en_US",
    siteName: "XPEL",
    images: [
      {
        url: productCategoryData.heroImage,
        width: 1200,
        height: 630,
        alt: "XPEL Product Category",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Single Product Category - XPEL | Professional Automotive Protection",
    description: "Discover XPEL's premium product category solutions for automotive, residential, and commercial applications.",
    images: [productCategoryData.heroImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/en/us/single-product-category",
  },
};

export default function SingleProductCategoryPage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "XPEL Product Category",
    "description": "Professional product category solutions for automotive, residential, and commercial applications",
    "brand": {
      "@type": "Brand",
      "name": "XPEL"
    },
    "category": "Automotive Protection",
    "image": productCategoryData.heroImage,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "price": "0",
      "description": "Contact for pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Product Category Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Product Category Item 1",
            "description": "Premium product category solution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Product Category Item 2",
            "description": "Advanced product category solution"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <ProductCategoryPage
        // Hero Section
        heroImage={productCategoryData.heroImage}
        heroImageAlt={productCategoryData.heroImageAlt}
        heroSmallHeading={productCategoryData.heroSmallHeading}
        heroHeadline={productCategoryData.heroHeadline}
        heroDescription={productCategoryData.heroDescription}
        heroPrimaryCta={productCategoryData.heroPrimaryCta}
        heroPrimaryCtaHref={productCategoryData.heroPrimaryCtaHref}
        heroSecondaryCta={productCategoryData.heroSecondaryCta}
        heroSecondaryCtaHref={productCategoryData.heroSecondaryCtaHref}
        
        // Product Lineup Section
        productLineupTitle={productCategoryData.productLineupTitle}
        productLineupSubtitle={productCategoryData.productLineupSubtitle}
        productLineupDescription={productCategoryData.productLineupDescription}
        productFeatures={productCategoryData.productFeatures}
        productLineupImage={productCategoryData.productLineupImage}
        productLineupImageAlt={productCategoryData.productLineupImageAlt}
        productLineupPrimaryCta={productCategoryData.productLineupPrimaryCta}
        productLineupPrimaryCtaHref={productCategoryData.productLineupPrimaryCtaHref}
        productLineupSecondaryCta={productCategoryData.productLineupSecondaryCta}
        productLineupSecondaryCtaHref={productCategoryData.productLineupSecondaryCtaHref}
        tabbedSliderTabs={productCategoryData.tabbedSliderTabs}
        defaultActiveTab={0}
        
        // Universal Usage Section
        universalUsageSubHeading={productCategoryData.universalUsageSubHeading}
        universalUsageTitle={productCategoryData.universalUsageTitle}
        universalUsageDescription={productCategoryData.universalUsageDescription}
        universalUsageMainImage={productCategoryData.universalUsageMainImage}
        universalUsageAreas={productCategoryData.universalUsageAreas}
        
        // Care Products Section
        careProductsTitle={productCategoryData.careProductsTitle}
        careProductsSubtitle={productCategoryData.careProductsSubtitle}
        careProductsCtaText={productCategoryData.careProductsCtaText}
        careProductsCtaHref={productCategoryData.careProductsCtaHref}
        
        // FAQ Section
        faqTitle={productCategoryData.faqTitle}
        faqDescription={productCategoryData.faqDescription}
        faqs={productCategoryData.faqs}
        seeAllFaqsHref="/faqs"
        faqAnchorId={productCategoryData.faqAnchorId}
        
        // Latest Articles Section
        latestArticlesTitle={productCategoryData.latestArticlesTitle}
        latestArticlesViewAllHref={productCategoryData.latestArticlesViewAllHref}
        latestArticles={productCategoryData.latestArticles}
        
        // Paint Protection Section
        paintProtectionSubHeading={productCategoryData.paintProtectionSubHeading}
        paintProtectionHeadline={productCategoryData.paintProtectionHeadline}
        paintProtectionDescription={productCategoryData.paintProtectionDescription}
        paintProtectionImages={productCategoryData.paintProtectionImages}
      />
    </>
  );
} 