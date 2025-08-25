'use client';

import React, { useState } from 'react';
import { HOMEPAGE_MESSAGES } from '@/config/messages';
import { PROTECTION_SERVICES, SERVICE_BLOCKS } from '@/config/homepage';
import { FEATURED_ARTICLES } from '@/config/articles';
import { AboutSection } from '@/components/common/AboutSection';
import { ServiceSlider } from '@/components/common/ServiceSlider';
import { CareProductsBanner } from '@/components/common/CareProductsBanner';
import { ContactSection } from '@/components/common/ContactSection';
import HeroBannerSection from '@/components/common/HeroBannerSection';
import { ServiceBlocks } from '@/components/common/ServiceBlocks';
import FeaturedArticles from '@/components/common/FeaturedArticles';

interface HomePageProps {
  readonly country: string;
  readonly language: string;
}

export const HomePage: React.FC<HomePageProps> = ({ country, language }) => {
  // Generate URLs with proper routing
  const generateUrl = (path: string) => `/${country}/${language}${path}`;

  // State for video slider with expanding dots
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Video data for the expanding dots section
  const videoData = [
    {
      videoSrc: '/videos/Marine Hero Video.mp4',
      smallHeading: 'MARINE PROTECTION',
      headline: 'Protect Your Marine Investment',
      description: 'Advanced marine protection film that keeps your vessel looking pristine with superior durability.',
      ctaText: 'Learn More',
      ctaHref: '/products/marine-protection'
    },
    {
      videoSrc: '/videos/Mclaren PPF.mp4',
      smallHeading: 'MCLAREN PPF',
      headline: 'Premium Paint Protection Film',
      description: 'Professional-grade protection for high-performance vehicles with self-healing technology.',
      ctaText: 'Discover PPF',
      ctaHref: '/products/ppf'
    },
    {
      videoSrc: '/videos/XPEL WPF Hero Video.mp4',
      smallHeading: 'XPEL WPF',
      headline: 'Window Protection Film Excellence',
      description: 'Superior window protection with heat rejection and UV protection without compromising visibility.',
      ctaText: 'Explore WPF',
      ctaHref: '/products/window-protection'
    }
  ];

  // Handle video end to cycle through videos
  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videoData.length;
    setCurrentVideoIndex(nextIndex);
  };

  // Handle slide change
  const handleSlideChange = (index: number) => {
    setCurrentVideoIndex(index);
  };

  // About section data
  const aboutData = {
    title: HOMEPAGE_MESSAGES.about.title,
    description: HOMEPAGE_MESSAGES.about.description,
    ctaText: HOMEPAGE_MESSAGES.about.ctaText,
    ctaHref: generateUrl('/about')
  };

  // Protection services with proper URLs
  const protectionServices = PROTECTION_SERVICES.map(service => ({
    ...service,
    href: generateUrl(`/products/${service.id}`)
  }));

  // Service blocks with proper URLs and icons
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
      ctaHref: generateUrl(`/services/${block.id}`),
      iconClass: mappedIconClass,
      iconAlt: `${block.title} icon`
    };
  });

  return (
    <>
      {/* Video Section with Expanding Dots */}
      <HeroBannerSection
        videoSrc={videoData[currentVideoIndex].videoSrc}
        eyebrowText={videoData[currentVideoIndex].smallHeading}
        headline={videoData[currentVideoIndex].headline}
        subtitle={videoData[currentVideoIndex].description}
        buttons={[
          {
            id: "learn-more-architectural",
            text: 'Learn More',
            href: '/products/architectural',
            variant: 'primary',
            size: 'lg'
          },
          {
            id: "get-quote",
            text: 'Get Quote',
            href: '/contact',
            variant: 'primary',
            size: 'lg'
          }
        ]}
        showDots={true}
        totalSlides={videoData.length}
        currentSlideIndex={currentVideoIndex}
        onVideoEnd={handleVideoEnd}
        onSlideChange={handleSlideChange}
        controlsPosition="bottom-left"
        dotSize="md"
        testDuration={5}
        titleAs="h1"
        className="min-h-[37.5rem] md:min-h-[43.75rem] lg:min-h-[50rem] xl:min-h-[55rem] section-spacing-y"
      />

         {/* About Section */}
      <AboutSection
        title={aboutData.title}
        description={aboutData.description}
        ctaText={aboutData.ctaText}
        ctaHref={aboutData.ctaHref}
        background="white"
        textAlignment="left"
        className='section-spacing-y'
      />


      {/* Service Slider */}
      <ServiceSlider
        title="Explore our innovative protection offerings"
        subtitle=""
        services={protectionServices}
        background="dark"
        cardsPerView={3}
        className="section-spacing-y"
      />

      {/* Featured Articles */}
      <FeaturedArticles
        title="Latest Articles"
        articles={FEATURED_ARTICLES}
        background="white"
        layout="grid"
        showNavigation={true}
        showDate={true}
        showCta={true}
      />

      {/* Care Products Banner */}
      <CareProductsBanner
        title="Care Products"
        subtitle="Keep your protection looking its best with our premium care products."
        ctaText="Shop Now"
        ctaHref={generateUrl('/products/care')}
      />

      {/* Video Section with Play/Pause Only */}
      <HeroBannerSection
        videoSrc="/videos/xpel-architectural-hero.mp4"
        eyebrowText="ARCHITECTURAL PROTECTION"
        headline="Protect Your Investment"
        subtitle="Advanced architectural protection solutions for commercial and residential applications."
        buttons={[
          {
            id: "protect-investment",
            text: videoData[currentVideoIndex].ctaText,
            href: videoData[currentVideoIndex].ctaHref,
            variant: 'primary',
            size: 'lg'
          }
        ]}
        showDots={false}
        controlsPosition="bottom-right"
        className="min-h-[40rem] md:min-h-[50rem] lg:min-h-[65.625rem]"
        titleAs="h2"
      />

      {/* Contact Section */}
      <ContactSection />

      {/* Service Blocks */}
      <ServiceBlocks 
        services={serviceBlocks}
        background="dark"
        columns={3}
        spacing="lg"
        className="section-spacing-y"
      />


     

    </>
  );
};

export default HomePage; 