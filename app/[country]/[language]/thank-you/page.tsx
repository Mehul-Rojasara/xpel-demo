import React from 'react';
import HeroBannerSection from '@/components/common/HeroBannerSection';
import { ServiceSlider } from '@/components/common/ServiceSlider';
import { ServiceBlocks } from '@/components/common/ServiceBlocks';
import { PROTECTION_SERVICES } from '@/config/homepage';

interface ThankYouPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function ThankYouPage({ params }: ThankYouPageProps) {
  const resolvedParams = await params;
  
  // Check if params are available
  if (!resolvedParams || !resolvedParams.country || !resolvedParams.language) {
    return null;
  }
  
  // Generate URLs with proper routing
  const generateUrl = (path: string) => `/${resolvedParams.country}/${resolvedParams.language}${path}`;

  // Video section data for thank you message
  const videoData = {
    videoSrc: "/videos/sampleVideo.mp4", // Using sample video from public folder
    eyebrowText: "FROM ALL OF US AT XPEL",
    headline: "Thank you!",
    subtitle: "You're all set, we have received your submission. You will receive more information via email. We look forward to working with you!",
    description: "We appreciate your interest in XPEL protection solutions.",
    ctaText: "Back to Home",
    ctaHref: generateUrl('/')
  };

  // Service slider data for protection offerings - same as homepage
  const protectionOfferings = PROTECTION_SERVICES.map(service => ({
    ...service,
    href: generateUrl(`/products/${service.id}`)
  }));

  // Service blocks data for helpful links
  const helpfulLinks = [
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
      id: "coverage-options",
      title: "Coverage Options For My Car",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
      ctaText: "Explore Options",
      ctaHref: generateUrl('/products'),
      iconClass: "icon-Coverage-Options",
      iconAlt: "Car icon for coverage options"
    },
    {
      id: "become-dealer",
      title: "Become a Dealer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
      ctaText: "Get Started",
      ctaHref: generateUrl('/become-a-dealer'),
      iconClass: "icon-Become-a-Dealer",
      iconAlt: "Dealer icon for becoming a dealer"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Video Section - Thank You Message */}
      <HeroBannerSection
        videoSrc={videoData.videoSrc}
        eyebrowText={videoData.eyebrowText}
        headline={videoData.headline}
        subtitle={videoData.subtitle}
        description={videoData.description}
        buttons={[
          {
            text: videoData.ctaText,
            href: videoData.ctaHref,
            variant: 'primary',
            buttonStyle: 'filled',
            size: 'lg',
            background: 'dark'
          }
        ]}
        showDots={false}
        controlsPosition="bottom-right"
        textAlignment="left"
        className="min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"
      />

      {/* Protection Offerings Section - Same as Homepage */}
      <ServiceSlider
        title="Explore our innovative protection offerings"
        subtitle=""
        services={protectionOfferings}
        background="light"
        cardsPerView={3}
      />

      {/* Service Blocks Section - Helpful Links */}
      <ServiceBlocks 
        services={helpfulLinks}
        background="dark"
        columns={3}
        spacing="lg"
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