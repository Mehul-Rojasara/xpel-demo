import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { ProductInfoSection } from '@/components/common/ProductInfoSection';
import { EventsGridClient } from '@/components/sections/EventsGridClient';
import { ServiceSlider } from '@/components/common/ServiceSlider';
import { ServiceBlocks } from '@/components/common/ServiceBlocks';
import { EVENTS_DATA } from '@/config/events';

interface EventsProps {
  readonly country: string;
  readonly language: string;
}

export const Events: React.FC<EventsProps> = ({ country, language }) => {
  // Transform related articles for ServiceSlider with video icons
  const relatedArticlesForSlider = EVENTS_DATA.relatedArticles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.category,
    image: article.image,
    imageAlt: article.imageAlt,
    href: article.href,
    category: article.category,
    isVideo: true // Add video icon to all related articles
  }));

  // Service blocks data for footer
  const serviceBlocksData = [
    {
      id: "find-installer",
      title: "Find an XPEL Installer Near You",
      description: "Locate certified XPEL installers in your area",
      ctaText: "Learn More",
      ctaHref: `/${country}/${language}/installer-locator`,
      iconClass: "icon-Xpel-Installer",
      iconAlt: "Installer locator icon"
    },
    {
      id: "coverage-options",
      title: "Coverage Options For My Car",
      description: "Explore paint protection and coating options",
      ctaText: "Explore Options",
      ctaHref: `/${country}/${language}/coverage-options`,
      iconClass: "icon-Coverage-Options",
      iconAlt: "Coverage options icon"
    },
    {
      id: "become-dealer",
      title: "Become a Dealer",
      description: "Join the XPEL dealer network",
      ctaText: "Get Started",
      ctaHref: `/${country}/${language}/become-a-dealer`,
      iconClass: "icon-Become-a-Dealer",
      iconAlt: "Become a dealer icon"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Banner
        title="Events"
        backgroundImage="/images/header/about-us.webp"
        altText="XPEL events and conferences"
      />

      {/* Events Hero Section */}
      <ProductInfoSection
        title={EVENTS_DATA.hero.title}
        subtitle={EVENTS_DATA.hero.subtitle}
        description={EVENTS_DATA.hero.description}
        media={{
          src: "/videos/xpel-architectural-hero.mp4",
          alt: EVENTS_DATA.hero.rightImageAlt,
          type: "video",
          poster: EVENTS_DATA.hero.rightImage
        }}
        button={{
          text: EVENTS_DATA.hero.buttonText,
          href: EVENTS_DATA.hero.buttonHref,
          variant: "primary"
        }}
        background="dark"
        mediaPosition="right"
        spacing="lg"
        className="bg-gradient-to-r from-[var(--color-neutral-900)] to-[var(--color-neutral-800)]"
      />

      {/* Upcoming Events Grid */}
      <EventsGridClient
        events={EVENTS_DATA.upcomingEvents}
        title="All Upcoming Events"
        coverageFilters={EVENTS_DATA.filters.coverage}
        eventTypeFilters={EVENTS_DATA.filters.eventType}
      />

      {/* Related Articles Slider */}
      <section className="section-spacing-y bg-white">
        <div className="container mx-auto px-4">
          <ServiceSlider
            title="Related Articles"
            subtitle=""
            services={relatedArticlesForSlider}
            cardsPerView={3}
            showNavigation={true}
            showProgress={true}
            background="light"
            showButton={true}
            buttonText="View All Articles"
            buttonHref={`/${country}/${language}/blog`}
            showDescriptions={false}
            className="mb-8"
          />
        </div>
      </section>

      {/* Service Blocks Footer */}
      <ServiceBlocks
        services={serviceBlocksData}
        background="dark"
        columns={3}
        spacing="lg"
      />
    </main>
  );
};

export default Events; 