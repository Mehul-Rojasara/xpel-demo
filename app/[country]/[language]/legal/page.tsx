import React from 'react';
import Container from '@/components/ui/Container';
import { LegalPoliciesSection } from '@/components/legal/LegalPoliciesSection';
import { ServiceBlocks } from '@/components/common/ServiceBlocks';
import { LEGAL_PAGE_CONFIG, LEGAL_POLICIES } from '@/config/legal';
import { SERVICE_BLOCKS } from '@/config/homepage';

export const metadata = {
  title: 'XPEL - Legal',
  description: 'Collection of XPEL\'s terms, policies and agreements'
};

interface LegalPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { country, language } = await params;
  
  // Service blocks with proper URLs and icons (same logic as HomePage)
  const serviceBlocks = SERVICE_BLOCKS.map((block) => {
    // Use styleguide icon classes
    const iconMap = {
      'installer-locator': 'icon-Xpel-Installer',
      'coverage-options': 'icon-Coverage-Options',
      'become-dealer': 'icon-Become-a-Dealer'
    };

    const mappedIconClass = iconMap[block.id as keyof typeof iconMap] || 'icon-Xpel-Installer';

    return {
      ...block,
      ctaHref: `/${country}/${language}/services/${block.id}`,
      iconClass: mappedIconClass,
      iconAlt: `${block.title} icon`
    };
  });

  return (
    <main className="min-h-screen bg-white" role="main" aria-labelledby="legal-page-title">
      {/* Legal Page Header */}
      <header className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h1 
              id="legal-page-title"
              className="font-h1 text-neutral-900 mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {LEGAL_PAGE_CONFIG.title}
            </h1>
            <p className="para-large text-neutral-600 text-base sm:text-lg md:text-xl">
              {LEGAL_PAGE_CONFIG.subtitle}
            </p>
          </div>
        </Container>
      </header>

      {/* Legal Policies Section */}
      <LegalPoliciesSection 
        policies={LEGAL_POLICIES}
        country={country}
        language={language}
      />

      {/* Service Blocks Section */}
      <ServiceBlocks 
        services={serviceBlocks}
        background="dark"
        columns={3}
        spacing="lg"
      />
    </main>
  );
} 