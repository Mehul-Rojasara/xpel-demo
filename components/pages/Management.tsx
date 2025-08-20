import React from "react";
import { Banner } from "@/components/sections/Banner";
import { ManagementHeader } from "../sections/ManagmentHeader";
import { BoardGrid } from "../sections/BoardGrid";
import { ServiceBlocks } from "../common";
import { serviceBlocks } from "@/config";

interface BecomeAnInstallerPageProps {
  country: string;
  language: string;
}

export const Management: React.FC<BecomeAnInstallerPageProps> = () => {
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <Banner
        backgroundImage="/images/management/managementProfile.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          headline: {
            subtitle: "",
            title: "Management",
          },
        }}
      />
      {/* <ContentSection 
        title={"Experience What It’s Like To Work With XPEL"}
        subtitle={"From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it."}
      />
      <InstallerBenefits
        theme="dark"
        showHeader={true}
        title="Your Path Forward with XPEL"
        titleDescription="At XPEL, we're not just a business, we're enthusiasts too. With everything we do, we put quality & our reputation at the forefront and have done so since 1997. Since 2007 we provide Xpel products in the Middle East and distribute to our installer network through our distribution hub in Dubai, UAE. The products we offer are meticulously tested and proven to perform under the harshest conditions around while maintaining the best possible appearance. Trust XPEL to be the only thing between you and the open road."
        subtitle="Benefits of Becoming an Installer"
        description="We are ready to help you take your business to the next level with our advanced automotive, residential, and commercial window films, paint protection films, installation tools, adhesive products, and the most comprehensive training programs in the industry."
        buttonText="Become an Installer"
        buttonHref="/become-installer"
        imageSrc="/images/installerBenefitsSection/benifits-become-installer.png"
        imageAlt="Person applying protective film to orange sports car"
        defaultSelectedIndex={0}
      /> */}
      <ManagementHeader />
      <BoardGrid
        title="Board of Directors"
        directors={[
          {
            name: "Stacy Bogart",
            role: "Director",
            image: "/images/management/managementpeople1.png",
          },
          {
            name: "Richard Crumly",
            role: "Director",
            image: "/images/management/managementpeople2.png",
          },
          {
            name: "Mike Klonne",
            role: "Director",
            image: "/images/management/managementpeople3.png",
          },
          {
            name: "John North",
            role: "Director",
            image: "/images/management/managementpeople4.png",
          },
          {
            name: "Ryan Pape",
            role: "Chairman, President & CEO",
            image: "/images/management/managementpeople5.png",
          },
        ]}
      />
      <BoardGrid
        title="Corporate LeaderShip"
        directors={[
          {
            name: "Carlos Alvarez",
            role: "VP, Operations",
            image: "/images/management/managementpeople6.png",
          },
          {
            name: "Tunde Awodiran",
            role: "Senior VP, General Counsel",
            image: "/images/management/managementpeople7.png",
          },
          {
            name: "Chris Coffee",
            role: "VP, Controller",
            image: "/images/management/managementpeople8.png",
          },
          {
            name: "Duane Gotro",
            role: "VP, Services",
            image: "/images/management/managementpeople9.png",
          },
          {
            name: "Abhishek Joshi",
            role: "VP, Product",
            image: "/images/management/managementpeople10.png",
          },
          {
            name: "Tony Rimas",
            role: "VP, Revenue",
            image: "/images/management/managementpeople11.png",
          },
          {
            name: "Kim Steiner",
            role: "VP, People Services",
            image: "/images/management/managementpeople12.png",
          },
          {
            name: "Michael Mayall",
            role: "VP, Sales",
            image: "/images/management/managementpeople13.png",
          },
          {
            name: "Chris West",
            role: "VP, Asia Pacific",
            image: "/images/management/managementpeople14.png",
          },
          
          {
            name: "Barry Wood",
            role: "Senior VP & Chief Financial Officer",
            image: "/images/management/managementpeople15.png",
          },
          
        ]}
      />
       <ServiceBlocks
          services={serviceBlocks}
          background="dark"
          columns={3}
          spacing="lg"
        />
    </div>
  );
};

export default Management;
