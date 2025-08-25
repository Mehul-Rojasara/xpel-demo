import React from 'react';
import HeroBannerSection from '@/components/common/HeroBannerSection';
import { ServiceBlocks } from '@/components/common/ServiceBlocks';

interface NotFoundPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function NotFoundPage({ params }: Readonly<NotFoundPageProps>) {
  const resolvedParams = await params;
  
  // Check if params are available
  if (!resolvedParams?.country || !resolvedParams?.language) {
    return null;
  }
  
  // Generate URLs with proper routing
  const generateUrl = (path: string) => `/${resolvedParams.country}/${resolvedParams.language}${path}`;

  // 404 page data - matching the exact text from the image
  const pageData = {
    eyebrowText: '404 PAGE NOT FOUND',
    headline: 'Took a wrong turn?',
    subtitle: 'The page you requested was removed or replaced. Not to worry - try out the navigation, search, or footer links to get you back on the open road.',
    description: 'Don\'t worry, we\'ve got plenty of other great content for you to explore.',
    ctaText: 'Back to Home',
    ctaHref: generateUrl('/'),
    videoSrc: '/videos/sampleVideo.mp4'
  };

  // Service blocks data
  const serviceBlocks = [
    {
      id: "find-installer",
      title: "Find an XPEL Installer Near You",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
      ctaText: "Learn More",
      ctaHref: generateUrl('/installer-locator'),
      iconClass: "icon-Xpel-Installer",
      iconAlt: "Location pin icon for finding XPEL installer"
    },
    {
      id: "explore-products",
      title: "Coverage Options For My Car",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
      ctaText: "Explore Options",
      ctaHref: generateUrl('/products'),
      iconClass: "icon-Coverage-Options",
      iconAlt: "Car icon for product exploration"
    },
    {
      id: "contact-support",
      title: "Become a Dealer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
      ctaText: "Get Started",
      ctaHref: generateUrl('/become-a-dealer'),
      iconClass: "icon-Become-a-Dealer",
      iconAlt: "Support icon for customer assistance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Video Section */}
        <HeroBannerSection
          videoSrc={pageData.videoSrc}
          eyebrowText={pageData.eyebrowText}
          headline={pageData.headline}
          subtitle={pageData.subtitle}
          // description={pageData.description}
          buttons={[
            {
              id: 'back-to-home',
              text: pageData.ctaText,
              href: pageData.ctaHref,
              variant: 'primary',
              buttonStyle: 'filled',
              size: 'lg',
              background: 'dark'
            }
          ]}
          showDots={false}
          controlsPosition="bottom-right"
          textAlignment="left"
          className="min-h-[37.5rem] md:min-h-[43.75rem] lg:min-h-[50rem] xl:min-h-[55rem] section-spacing-y"
          titleAs="h1"
        />

      {/* Service Blocks */}
      <ServiceBlocks 
        services={serviceBlocks}
        background="dark"
        columns={3}
        spacing="lg"
        className='section-spacing-y'
      />
    </div>
  );
}

export async function generateStaticParams() {
  const countries = ['us', 'ca', 'uk', 'au', 'de', 'fr', 'es'];
  const languages = ['en', 'es', 'fr', 'de'];
  
  return countries.flatMap(country => 
    languages.map(language => ({
      country,
      language,
    }))
  );
} 