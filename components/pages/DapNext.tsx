
import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { InstallerBenefits } from '../sections';
import { NextStepsForm } from '../sections/NextStepForm';
import { NEXT_STEP_FORM_DATA } from '@/config';
import { CuttingSoftwareSection } from '../sections/cuttingSoftwareSection';
import { DapNextFeatures } from '../sections/DAPNextGridFeatures';

interface DapNextProps {
  country: string;
  language: string;
}

export const DapNext: React.FC<DapNextProps> = () => {
    
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <Banner

        backgroundImage="/images/dapNext/dapNextTitle.png"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          headline: {
            subtitle: "",
            title: "DAPNext"
          }
        }}
      />
      <CuttingSoftwareSection/>
      <DapNextFeatures/>
      <InstallerBenefits
        theme="dark"
        showHeader={false}
        title="Your Path Forward with XPEL"
        titleDescription="At XPEL, we're not just a business, we're enthusiasts too. With everything we do, we put quality & our reputation at the forefront and have done so since 1997. Since 2007 we provide Xpel products in the Middle East and distribute to our installer network through our distribution hub in Dubai, UAE. The products we offer are meticulously tested and proven to perform under the harshest conditions around while maintaining the best possible appearance. Trust XPEL to be the only thing between you and the open road."
        subtitle="NEW Dap 11 Features"
        buttonText = ""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageSrc="/images/dapNext/dapNextfeature.jpg"
        imageAlt="Person applying protective film to orange sports car"
        defaultSelectedIndex={0}
        benefits={[
            {
                icon: (
                  <span className="icon-Xpel-Installer" aria-hidden="true">
                  </span>
                ),
                title: "All New Job Scheduling System",
                description: "Our new in-app translator feature allows you to switch between languages seamlessly. You can now browse and enjoy our services in your preferred language, making your experience with us even more convenient and enjoyable.",
                linkText: "Learn More -> ",
                linkHref: "/installer-locator",
                imageSrc: "/images/dapNext/dapNextfeature.jpg",
                imageAlt: "Installer locator feature"
              },
              {
                icon: (
                  <span className="icon-User" aria-hidden="true">
                  </span>
                ),
                title: "Global Measurement Support",
                description: "",
                imageSrc: "/images/installerBenefitsSection/become-an-installer.jpg",
                imageAlt: "Global customer service"
              },
              {
                icon: (
                  <span className="icon-Become-a-Dealer" aria-hidden="true">
                  </span>
                ),
                title: "Selection & Multi-Selection",
                description: "",
                imageSrc: "/images/installerBenefitsSection/explore-product-lineup.jpg",
                imageAlt: "Sales professional help"
              },
              {
                icon: (
                  <span className="icon-Newsroom" aria-hidden="true">
                  </span>
                ),
                title: "DAP Web with Mobile Support",
                description: "",
                imageSrc: "/images/header/paint-protection-film.webp",
                imageAlt: "Branding and marketing resources"
              },
        ]}
      />

      <NextStepsForm contactInfo={NEXT_STEP_FORM_DATA.dapNext} theme="light"/>

    </div>
  );
};

export default DapNext; 