import React from 'react';
import { LegalPoliciesSection } from '@/components/legal/LegalPoliciesSection';
import { INSTALLATION_INFRASTRUCTURE_DATA } from '@/config/installation-infrastructure';
import Container from '@/components/ui/Container';
import { Banner } from '@/components/sections/Banner';
import { Accordion } from '@/components/ui/Accordion';

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

  const FAQSection: React.FC<{
    readonly items: ReadonlyArray<{ readonly id: string; readonly title: string; readonly content: string }>;
    readonly className?: string;
  }> = ({ items, className }) => {
    return (
      <section 
        className={`${className} bg-white`}
        >
        <Container>
          <div className="w-full">
            <Accordion 
              items={items}
              allowMultiple={false}
              defaultOpen={[0]}
              className="border-0 shadow-none space-y-2"
            />
          </div>
        </Container>
      </section>
    );
  };

  const faqItems = installationPolicies.map((block) => ({
    id: block.id,
    title: block.title,
    content: block.description
  }));

  return (
    <>
      <Banner
        backgroundImage="/images/partnership/partnership-group-header.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        className='h-[40rem] md:h-[42.5rem] lg:h-[520px]'
        content={{
          headline: {
            title: "Installation Infrastructure"
          }
        }}
      />
      {/* Installation Documents Section */}
      <FAQSection
        items={faqItems}
        className="section-spacing-y"
      />

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

    </>
  );
} 