import React from 'react';
import Link from 'next/link';
import { Banner } from '@/components/sections/Banner';
import { AboutSection } from '@/components/common/AboutSection';
import { Accordion } from '@/components/ui/Accordion';
import { ServiceBlocks } from '@/components/common/ServiceBlocks';
import { WARRANTY_INFORMATION_DATA } from '@/config/warranty-information';
import Container from '@/components/ui/Container';
import { SERVICE_BLOCKS } from '@/config/homepage';

export const metadata = {
  title: 'XPEL - Warranty Information',
  description: 'XPEL Warranty Information - Register warranties, view product warranties, and get warranty support'
};

interface WarrantyInformationPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function WarrantyInformationPage({ params }: WarrantyInformationPageProps) {
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

  // Transform accordion sections to match the existing Accordion component interface
  const accordionItems = WARRANTY_INFORMATION_DATA.accordionSections.map(section => ({
    title: section.title,
    content: section.content
  }));

  return (
    <main className="min-h-screen bg-white" role="main">
      {/* Top Banner */}
      <Banner
        title={WARRANTY_INFORMATION_DATA.title}
        backgroundImage={WARRANTY_INFORMATION_DATA.bannerImage}
        altText={WARRANTY_INFORMATION_DATA.bannerAltText}
        content={{
          headline: {
            title: 'WARRANTY INFORMATION',
            subtitle: undefined
          },
          description: undefined,
          buttons: [
            {
              label: 'Register a Warranty',
              href: `/${country}/${language}/warranty-claim`,
              variant: 'primary'
            }
          ]
        }}
        variant="promotional"
      />

      {/* Second Section - About Section with dynamic color */}
      <AboutSection
        title={WARRANTY_INFORMATION_DATA.aboutSection.title}
        description={WARRANTY_INFORMATION_DATA.aboutSection.description}
        background="light"
        ctaText="Warranty Claim"
        ctaHref={`/${country}/${language}/warranty-claim`}
      />

      {/* Third Section - Accordion with warranty information */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-h2 text-neutral-900 font-display font-medium leading-[110%] tracking-[-0.01em]">
                Product Warranties
              </h2>
              <Link
                href={`/${country}/${language}/help-center`}
                className="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-full text-sm font-medium text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
              >
                Return to Help Center
              </Link>
            </div>
            
            <Accordion
              items={accordionItems}
              allowMultiple={true}
              className="space-y-4"
            />
          </div>
        </Container>
      </section>

      {/* Fourth Section - About Section with help information */}
      <AboutSection
        title={WARRANTY_INFORMATION_DATA.bottomAboutSection.title}
        description={WARRANTY_INFORMATION_DATA.bottomAboutSection.description}
        customBackgroundColor={WARRANTY_INFORMATION_DATA.bottomAboutSection.backgroundColor}
        ctaText="Email Us"
        ctaHref="mailto:warranty@xpel.com"
      />

      {/* Fifth Section - Service Blocks */}
      <ServiceBlocks
        services={serviceBlocks}
        background="dark"
        columns={3}
        spacing="lg"
      />
    </main>
  );
} 