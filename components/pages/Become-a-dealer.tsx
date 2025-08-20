
import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { ContentSection, FeatureStats, InstallerBenefits } from '../sections';

import { InstallerSpotlights } from '../common/VideoSlider';
import { ProductInfoSectionTab } from '../sections/ProductInfoSectionTab';
import { NextStepsForm } from '../sections/NextStepForm';
import { NEXT_STEP_FORM_DATA } from '@/config';

interface BBecomeDealerPageProps {
  country: string;
  language: string;
}

export const BecomeDealer: React.FC<BBecomeDealerPageProps> = () => {
    
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <Banner

        backgroundImage="/images/installerBenefitsSection/become-an-installer.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          backButton: {
            label: "Automotive",
            href: "/Automotive"
          },
          headline: {
            subtitle: "",
            title: "Become a Dealer"
          },
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
          buttons: [
            // {
            //   label: "Explore",
            //   href: "/products/ultimate-plus",
            //   variant: "primary"
            // },
            {
              label: "Learn More",
              href: "/coverage-options",
              arrow: false,
              variant: "primary",   
            }
          ]
        }}
      />
      <ContentSection 
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
      />

      {/* Product Info Section - New Component */}
      <ProductInfoSectionTab />
      <FeatureStats/>
      <InstallerSpotlights/>
      <NextStepsForm contactInfo={NEXT_STEP_FORM_DATA.default}/>

    </div>
  );
};

export default BecomeDealer; 