import React from "react";
import { Banner } from "@/components/sections/Banner";
import { ContentSection } from "@/components/sections";
import { CONTENT_SECTIONS, serviceBlocks } from "@/config";
import { ServiceBlocks } from "@/components/common";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { TeamGrid } from "@/components/sections/TeamGrid";

interface PartnerShipPageProps {
  country: string;
  language: string;
}

export const PartnerShip: React.FC<PartnerShipPageProps> = () => {
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <Banner
        backgroundImage="/images/partnership/partnership-group-header.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          headline: {
            title: "Partnerships",
          },
          backButton: {
            label: "Automotive",
            href: "/automotive",
          },
        }}
      />
      <ContentSection title={CONTENT_SECTIONS.SECTION.title} subtitle={CONTENT_SECTIONS.SECTION.subtitle} />
      <PartnerLogos />

      <TeamGrid
        title=""
        directors={[
          {
            id: "1",
            name: "TEAM PENSKE | SCOTT MCLAUGHLIN",
            role: "",
            image: "/images/partnership/grid1.jpg",
          },
          {
            id: "2",
            name: "RAHAL DUCATI MOTO",
            role: "",
            image: "/images/partnership/grid2.jpg",
          },
          {
            id: "3",
            name: "STREET OUTLAWS",
            role: "",
            image: "/images/partnership/grid3.png",
          },
          {
            id: "4",
            name: "PCA CLUB RACING",
            role: "",
            image: "/images/partnership/grid4.png",
          },
        ]}
      />

      <ServiceBlocks services={serviceBlocks} background="dark" columns={3} spacing="lg" />
    </div>
  );
};

export default PartnerShip;
