
import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { ContentSection } from '@/components/sections';
import { CONTENT_SECTIONS, serviceBlocks } from '@/config';
import { ServiceBlocks } from '@/components/common';
import { PartnerLogos } from '@/components/sections/PartnerLogos';
import { BoardGrid } from '@/components/sections/BoardGrid';

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
            title: "Partnerships"
          }
        }}
      />
      <ContentSection 
        title={CONTENT_SECTIONS.SECTION.title}
        subtitle={CONTENT_SECTIONS.SECTION.subtitle}
      />
      <PartnerLogos />
      <BoardGrid
        title=""
        directors={[
          {
            name: "TEAM PENSKE | SCOTT MCLAUGHLIN",
            role: "",
            image: "/images/partnership/grid1.jpg",
          },
          {
            name: "RAHAL DUCATI MOTO",
            role: "",
            image: "/images/partnership/grid2.jpg",
          },
          {
            name: "STREET OUTLAWS",
            role: "",
            image: "/images/partnership/grid3.png",
          },
          {
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