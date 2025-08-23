import React from 'react';
import { LegalPoliciesSection } from '@/components/legal/LegalPoliciesSection';
import { ServiceBlocks } from '@/components/common/ServiceBlocks';
import { INSTALLATION_INFRASTRUCTURE_DATA } from '@/config/installation-infrastructure';
import { SERVICE_BLOCKS } from '@/config/homepage';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'XPEL - Installation Infrastructure',
  description: 'XPEL Installation Infrastructure - Professional installation guides, facility requirements, and quality standards'
};

interface InstallationInfrastructurePageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function InstallationInfrastructurePage({ params }: InstallationInfrastructurePageProps) {
  const { country, language } = await params;

  // Transform installation data to match legal policy format with PDF URLs
  const installationPolicies = INSTALLATION_INFRASTRUCTURE_DATA.documents.map((doc) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    href: `/installation-infrastructure/${doc.id}`, // Fallback URL if needed
    pdfUrl: '/images/file-sample_150kB.pdf' // Use the actual PDF file
  }));

  // Service blocks with proper URLs and icons (same logic as Legal page)
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
    <main className="min-h-screen bg-white">
      {/* Installation Documents Section */}
      <section 
        className="py-16 sm:py-20 md:py-24 bg-white"
        aria-labelledby="documents-section-title"
      >
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
              <h1 
                id="documents-section-title"
                className="font-h1 text-neutral-900 mb-4 font-display font-medium leading-[120%] tracking-[-0.01em]"
              >
                {INSTALLATION_INFRASTRUCTURE_DATA.title}
              </h1>
            </div>
            
            {/* Use LegalPoliciesSection with PDF data */}
            <LegalPoliciesSection 
              policies={installationPolicies}
              country={country}
              language={language}
              className="py-0"
            />
          </div>
        </Container>
      </section>

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