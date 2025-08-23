
import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { SearchInstaller } from '../sections/SearchInstaller';
import { ServiceBlocks } from '../common';

interface BecomeAnInstallerPageProps {
  country: string;
  language: string;
}

const serviceBlocks = [
  {
    id: 'installer-locator',
    title: 'Find an XPEL Installer Near You',
    description: 'Find local pros who nail the perfect XPEL protection install every time.',
    ctaText: 'Learn More',
    ctaHref: '/installer-locator',
    iconClass: 'icon-Xpel-Installer',
    iconAlt: 'Location pin icon for finding XPEL installer'
  },
  {
    id: 'coverage-options',
    title: 'Coverage Options For My Car',
    description: 'Explore our comprehensive protection options for your specific vehicle.',
    ctaText: 'Explore Options',
    ctaHref: '/coverage-options',
    iconClass: 'icon-Coverage-Options',
    iconAlt: 'Car icon for coverage options'
  },
  {
    id: 'become-dealer',
    title: 'Become a Dealer',
    description: 'Team up with us and start offering premium protection solutions to your customers.',
    ctaText: 'Get Started',
    ctaHref: '/become-dealer',
    iconClass: 'icon-Become-a-Dealer',
    iconAlt: 'User icon for becoming a dealer'
  }
];

export const InstallerLocatorByLocation: React.FC<BecomeAnInstallerPageProps> = () => {
    
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <Banner

        backgroundImage="/images/installerBenefitsSection/become-an-installer.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          headline: {
            subtitle: "",
            title: "Find An Authorized XPEL Installer"
          },
          description: "",
          buttons: [
            {
              id: "search-by-map",
              label: "Search By Map",
              href: "/coverage-options",
              variant: "primary",
              className: "w-[200px] h-[56px] rounded-[100px] whitespace-nowrap"
            }
          ]
        }}
      />
      <SearchInstaller/>
      <section aria-labelledby="service-blocks-title">
        <ServiceBlocks
          services={serviceBlocks}
          background="dark"
          columns={3}
          spacing="lg"
        />
      </section>
    </div>
  );
};

export default InstallerLocatorByLocation; 