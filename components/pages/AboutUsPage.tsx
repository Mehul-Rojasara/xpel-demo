import React from 'react';
import { Banner } from '../sections/Banner';
import { InstallerBenefits } from '../sections/InstallerBenefits';
import { RacingStats } from '../sections/RacingStats';
import { LatestArticles } from '../sections/LatestArticles';
import { ContentSection } from '../sections/ContentSection';
import { CONTENT_SECTIONS } from '@/config/constants';
import { InstallerSpotlights } from '../common/VideoSlider';



interface PageProps {
  params: Promise<{
    country: string;
    language: string;
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