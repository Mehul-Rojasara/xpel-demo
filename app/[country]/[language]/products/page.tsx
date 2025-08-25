import React from "react";
import { Banner } from "@/components/sections/Banner";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { ServiceBlocks } from "@/components/common/ServiceBlocks";
import { AboutSection } from "@/components/common/AboutSection";

interface PageProps {
 readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function ProductsPage({ params }: PageProps) {
  await params; // Resolve params for potential future use

  // Product category data based on the design
  const productCards = [
    {
      id: "paint-protection-film",
      title: "Paint Protection Film",
      description:
        "A virtually invisible urethane film that protects your vehicle&apos;s paint from unsightly damage and maximizes re-sale value.",
      image: "/images/product-category/blackhtx.png",
      hoverImage: "/images/product-category/white htx.png", // Example hover image
      altText: "Paint protection film being applied to car bumper",
      href: "/products/paint-protection-film",
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      description:
        "Unrivaled gloss, superior hydrophobic protection, and improved scratch resistance with a single application.",
      image: "/images/product-category/white htx.png",
      altText: "Dark gray car with glossy ceramic coating",
      href: "/products/ceramic-coating",
    },
    {
      id: "window-film",
      title: "Window Film",
      description:
        "Enhance privacy, reduce infra-red heat, cut glare, and keep your skin & eyes safe from harmful UV rays.",
      image: "/images/product-category/zcounce.jpg",
      hoverImage: "/images/product-category/headline_film.png", // Example hover image
      altText: "Black car with tinted windows",
      href: "/products/window-film",
    },
    {
      id: "headlight-protection-film",
      title: "Headlight Protection Film",
      description:
        "Give your vehicle the clarity and protection it deserves. Offering clear and tinted headlight protection film options.",
      image: "/images/product-category/headline_film.png",
      altText: "Hands applying protection film to car headlight",
      href: "/products/headlight-protection-film",
    },
  ];

  // Service blocks data for ServiceBlocks component
  const serviceBlocks = [
    {
      id: "installer-locator",
      title: "Find an XPEL Installer Near You",
      description: "Find local pros who nail the perfect XPEL protection install every time.",
      ctaText: "Learn More",
      ctaHref: "/installer-locator",
      iconClass: "icon-Xpel-Installer",
      iconAlt: "Location pin icon for finding XPEL installer",
    },
    {
      id: "coverage-options",
      title: "Coverage Options For My Car",
      description: "Explore our comprehensive protection options for your specific vehicle.",
      ctaText: "Explore Options",
      ctaHref: "/coverage-options",
      iconClass: "icon-Coverage-Options",
      iconAlt: "Car icon for coverage options",
    },
    {
      id: "become-dealer",
      title: "Become a Dealer",
      description: "Team up with us and start offering premium protection solutions to your customers.",
      ctaText: "Get Started",
      ctaHref: "/become-dealer",
      iconClass: "icon-Become-a-Dealer",
      iconAlt: "User icon for becoming a dealer",
    },
  ];

  // About section data for products page
  const aboutData = {
    title: "With an array of offerings available, there's XPEL product for every need.",
    description:
      "From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it.",
    ctaText: "Learn More About XPEL",
    ctaHref: "",
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <Banner
        title="Products"
        backgroundImage="/images/header/paint-protection-film.jpg"
        altText="Vehicle surface being covered with transparent film"
      />

      {/* About Section */}
      <AboutSection
        title={aboutData.title}
        description={aboutData.description}
        ctaText={aboutData.ctaText}
        ctaHref={aboutData.ctaHref}
        background="white"
        textAlignment="left"
        className="section-spacing-y"
      />

      {/* Service Card Grid */}
      <ServiceCardGrid cards={productCards} className="section-spacing-bottom" />

      {/* Service Blocks Section */}
      <ServiceBlocks services={ serviceBlocks} background="dark" columns={3} spacing="lg" className='section-spacing-y' />
    </div>
  );
}

// ISR Configuration - revalidate every 60 seconds (1 minute)
export const revalidate = 60;
