import React from 'react';
import { Banner } from '../sections/Banner';
import { InstallerBenefits } from '../sections/InstallerBenefits';
import { RacingStats } from '../sections/RacingStats';
import { LatestArticles } from '../sections/LatestArticles';
import { ContentSection } from '../sections/ContentSection';
import { CONTENT_SECTIONS } from '@/config/constants';



interface PageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function AboutUs({ params }: PageProps) {
  await params; // Resolve params for potential future use
  

  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <Banner
        title="About Us"
        backgroundImage="/images/about-us/about-us-banner.jpg"
        altText="Vehicle surface being covered with transparent film"
      />

      {/* Installer Benefits Section */}

      {/* Main Content Section */}

      <ContentSection 
        title={CONTENT_SECTIONS.SECTION.title}
        subtitle={CONTENT_SECTIONS.SECTION.subtitle}
      />

      <InstallerBenefits
        theme="light"
        showHeader={false}
        title="Benefits of Becoming an Installer"
        description="We are ready to help you take your business to the next level with our advanced automotive, residential, and commercial window films, paint protection films, installation tools, adhesive products, and the most comprehensive training programs in the industry."
        buttonText="Become an Installer"
        buttonHref="/become-installer"
        imageSrc="/images/about-us/become-installer.png"
        imageAlt="Person applying protective film to orange sports car"
        defaultSelectedIndex={0}
        className="section-spacing-y"
        benefits={[
          {
            id: "job-scheduling-about",
            icon: (
              <span className="icon-Xpel-Installer" aria-hidden="true">
              </span>
            ),
            title: "All New Job Scheduling System",
            description: "Our new in-app translator feature allows you to switch between languages seamlessly. You can now browse and enjoy our services in your preferred language, making your experience with us even more convenient and enjoyable.",
            linkText: "Learn More",
            linkHref: "/installer-locator",
            imageSrc: "/images/dapNext/dapNextfeature.jpg",
            imageAlt: "Installer locator feature"
          },
          {
            id: "global-measurement-about",
            icon: (
              <span className="icon-User" aria-hidden="true">
              </span>
            ),
            title: "Global Measurement Support",
            description: "",
            imageSrc: "/images/installerBenefitsSection/become-an-installer.jpg",
            imageAlt: "Global customer service"
          },
          {
            id: "selection-multi-selection-about",
            icon: (
              <span className="icon-Become-a-Dealer" aria-hidden="true">
              </span>
            ),
            title: "Selection & Multi-Selection",
            description: "",
            imageSrc: "/images/installerBenefitsSection/explore-product-lineup.jpg",
            imageAlt: "Sales professional help"
          },
          {
            id: "dap-web-mobile-about",
            icon: (
              <span className="icon-Newsroom" aria-hidden="true">
              </span>
            ),
            title: "DAP Web with Mobile Support",
            description: "",
            imageSrc: "/images/header/paint-protection-film.webp",
            imageAlt: "Branding and marketing resources"
          },
        ]}
      />
      <RacingStats />

      {/* Content Section */}
      <ContentSection 
        title={CONTENT_SECTIONS.SECTION.title}
        subtitle={CONTENT_SECTIONS.SECTION.subtitle}
      />

      {/* Latest Articles Section */}
      <LatestArticles />
    </div>
  );
}

// ISR Configuration - revalidate every 60 seconds (1 minute)
export const revalidate = 60; 