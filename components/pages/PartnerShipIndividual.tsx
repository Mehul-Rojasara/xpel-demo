
import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { ContentSection } from '../sections';
import { CONTENT_SECTIONS, serviceBlocks } from '@/config';
import { ServiceBlocks } from '../common';
import { PartnerLogos } from '../sections/PartnerLogos';
import { BoardGrid } from '../sections/BoardGrid';
import { VideoContent } from '@/components/sections/VideoContent';

interface PartnerShipIndividualPageProps {
  country: string;
  language: string;
}

export const PartnerShipIndividual: React.FC<PartnerShipIndividualPageProps> = () => {
    
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <Banner
        backgroundImage="/images/partnership/partnership-group-header.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          headline: {
            title: "SCOTT McLAUGHLIN"
          }
        }}
      />
      <ContentSection 
        title={CONTENT_SECTIONS.SECTION.title}
        subtitle={CONTENT_SECTIONS.SECTION.subtitle}
      />
        <VideoContent
  videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
  subtitle="ULTIMATE PLUS™"
  title="Ryan Martin's Fireball Camaro Protected With ULTIMATE PLUS"
  description="A serious drag racer like Ryan Martin requires serious protection. With the help of ULTIMATE PLUS 10 PPF, Ryan’s Fireball Camaro can look its best while performing on or off the track."
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

export default PartnerShipIndividual; 