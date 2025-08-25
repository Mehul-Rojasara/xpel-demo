import React from "react";
import { Banner } from "@/components/sections/Banner";
import { ContentSection, RacingStats } from "@/components/sections";
import { CONTENT_SECTIONS, serviceBlocks } from "@/config";
import { ServiceBlocks } from "@/components/common";
import { VideoContent } from "@/components/sections/VideoContent";
import { ContentImageGrid } from "@/components/sections/ContentImageGrid";
import { MultiCardSection } from "@/components/sections/MultiCardSection";
import { CardSlider } from "@/components/sections/CardSlider";
import { SocialGallery } from "@/components/sections/SocialGallary";
import { ShowImage } from "@/components/sections/ShowImage";

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
            title: "SCOTT McLAUGHLIN",
          },
        }}
      />
      <ContentSection title={CONTENT_SECTIONS.SECTION.title} subtitle={CONTENT_SECTIONS.SECTION.subtitle} />
      <VideoContent
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        subtitle="ULTIMATE PLUS™"
        title="Ryan Martin's Fireball Camaro Protected With ULTIMATE PLUS"
        description="A serious drag racer like Ryan Martin requires serious protection. With the help of ULTIMATE PLUS 10 PPF, Ryan’s Fireball Camaro can look its best while performing on or off the track."
      />
      <ContentImageGrid
        subtitle="SCOTT McLAUGHLIN"
        title="SCOTT McLAUGHLIN"
        description="A serious drag racer like Ryan Martin requires serious protection. With the help of ULTIMATE PLUS 10 PPF, Ryan’s Fireball Camaro can look its best while performing on or off the track."
        images={[
          "/images/partnership/partnership-group-header.jpg",
          "/images/partnership/gridImage1.jpg",
          "/images/partnership/gridImage2.jpg",
        ]}
      />
      <ContentSection title={CONTENT_SECTIONS.SECTION.title} subtitle={CONTENT_SECTIONS.SECTION.subtitle} />
      <RacingStats />
      <MultiCardSection
        heading="Loren Ipsum"
        cards={[
          {
            id:1,
            img: "/images/partnership/gridImage1.jpg",
            title: "Loren Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          },
          {
            id:2,
            img: "/images/partnership/gridImage2.jpg",
            title: "Loren Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          },
          {
            id:3,
            img: "/images/partnership/grid1.jpg",
            title: "Loren Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          },
        ]}
      />
      <CardSlider />
      <SocialGallery
        heading="#protecteverything"
        images={[
          { id:1 ,src: "/images/partnership/social-1.jpg", alt: "XPEL Event" },
          { id:2, src: "/images/partnership/social-2.jpg", alt: "Car Front" },
          { id:3, src: "/images/partnership/social-3.jpg", alt: "Car Wash" },
          { id:4, src: "/images/partnership/social-4.jpg", alt: "Boat" },
          { id:5, src: "/images/partnership/social-5.jpg", alt: "Expo Booth" },
          { id:6, src: "/images/partnership/social-6.jpg", alt: "Supercar" },
          { id:7, src: "/images/partnership/social-7.jpg", alt: "Tail Lights" },
        ]}
      />

      <ShowImage src="/images/partnership/xpel-official.png" alt="XPEL Partner Banner" />

      <ServiceBlocks services={serviceBlocks} background="dark" columns={3} spacing="lg" className='section-spacing-y'/>
    </div>
  );
};

export default PartnerShipIndividual;
