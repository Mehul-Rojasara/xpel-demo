import React from "react";
import { LegalPoliciesSection } from "@/components/legal/LegalPoliciesSection";
import { ServiceBlocks } from "@/components/common/ServiceBlocks";
import { LEGAL_POLICIES } from "@/config/legal";
import { SERVICE_BLOCKS } from "@/config/homepage";
import BannerTitle from "@/components/legal/BannerTitle";

export const metadata = {
  title: "XPEL - Legal",
  description: "Collection of XPEL's terms, policies and agreements",
};

interface LegalPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { country, language } = await params;

  // Service blocks with proper URLs and icons (same logic as HomePage)
  const serviceBlocks = SERVICE_BLOCKS.map((block) => {
    // Use styleguide icon classes
    const iconMap = {
      "installer-locator": "icon-Xpel-Installer",
      "coverage-options": "icon-Coverage-Options",
      "become-dealer": "icon-Become-a-Dealer",
    } as const;

    const mappedIconClass = iconMap[block.id as keyof typeof iconMap] || "icon-Xpel-Installer";

    return {
      ...block,
      ctaHref: `/${country}/${language}/services/${block.id}`,
      iconClass: mappedIconClass,
      iconAlt: `${block.title} icon`,
    };
  });

  return (
    <>
      {/* Legal Page Header */}
      <BannerTitle />

      {/* Legal Policies Section */}
      <LegalPoliciesSection policies={LEGAL_POLICIES} country={country} language={language} />

      {/* Service Blocks Section */}
      <ServiceBlocks services={serviceBlocks} background="dark" columns={3} spacing="lg" />
    </>
  );
}
