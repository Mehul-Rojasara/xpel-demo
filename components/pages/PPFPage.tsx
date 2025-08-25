import React, { useState } from 'react';
import { ProductTabs } from '@/components/common/ProductTabs';
import { ProductShowcase } from '@/components/common/ProductShowcase';
import { ContentGrid } from '@/components/common/ContentGrid';
import { ProductInfoCard } from '@/components/common/ProductInfoCard';

interface PPFPageProps {
  country: string;
  language: string;
}

export const PPFPage: React.FC<PPFPageProps> = () => {
  const [activeTab, setActiveTab] = useState('ultimate-plus');

  const tabs = [
    { id: 'ultimate-plus', label: 'ULTIMATE PLUS' },
    { id: 'stealth', label: 'STEALTH' },
    { id: 'by-the-foot', label: 'BY THE FOOT' }
  ];

  const ultimatePlusFeatures = [
    {
      id: 'self-healing',
      title: 'Heat Activated Self-Healing Topcoat',
      description: 'Elastomeric polyurethane that will self-heal light scratches & swirl marks.',
      icon: 'selfHealing' as const
    },
    {
      id: 'non-yellowing',
      title: 'Non-Yellowing',
      description: 'Will not yellow from UV exposure, ensuring protected areas are nearly invisible.',
      icon: 'shield' as const
    },
    {
      id: 'stain-resistant',
      title: 'Discoloration & Stain Resistant',
      description: 'ULTIMATE PLUS is stain resistant & will maintain clarity under the harshest conditions.',
      icon: 'stainResistant' as const
    },
    {
      id: 'easy-maintenance',
      title: 'Easy Surface Maintenance',
      description: 'Incredibly easy to clean with XPEL Aftercare Products like our signature DETAIL SPRAY.',
      icon: 'maintenance' as const
    },
    {
      id: 'edge-seal',
      title: 'Edge Seal Technology',
      description: 'Ensures film stays stuck & keeps surfaces protected from contaminants.',
      icon: 'edgeSeal' as const
    }
  ];

  const stealthFeatures = [
    {
      id: 'stealth-appearance',
      title: 'Stealth Appearance',
      description: 'Nearly invisible protection that maintains your vehicle\'s original appearance.',
      icon: 'shield' as const
    },
    {
      id: 'durability',
      title: 'Enhanced Durability',
      description: 'Advanced polymer technology provides superior protection against impacts.',
      icon: 'selfHealing' as const
    },
    {
      id: 'easy-maintenance',
      title: 'Easy Surface Maintenance',
      description: 'Incredibly easy to clean with XPEL Aftercare Products.',
      icon: 'maintenance' as const
    }
  ];

  const byTheFootFeatures = [
    {
      id: 'custom-coverage',
      title: 'Custom Coverage',
      description: 'Perfect for DIY installations and custom protection areas.',
      icon: 'shield' as const
    },
    {
      id: 'cost-effective',
      title: 'Cost Effective',
      description: 'Affordable protection for specific areas of your vehicle.',
      icon: 'selfHealing' as const
    }
  ];

  const productImages = [
    {
      id: 'application-1',
      src: '/images/products/ultimate-plus-application-1.jpg',
      alt: 'Applying protective film to car bumper',
      size: 'small' as const
    },
    {
      id: 'application-2',
      src: '/images/products/ultimate-plus-application-2.jpg',
      alt: 'Applying protective film to fender flare',
      size: 'small' as const
    },
    {
      id: 'complete-car',
      src: '/images/products/ultimate-plus-complete-car.jpg',
      alt: 'Complete car with protective film applied',
      size: 'large' as const
    }
  ];

  const ppfContentItems = [
    {
      id: 'porsche-service',
      image: {
        src: '/images/services/porsche-service-bay.jpg',
        alt: 'Porsche 911 on lift in service bay with technician working on rear spoiler'
      },
      title: 'Professional Installation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our certified technicians ensure perfect installation every time.'
    },
    {
      id: 'ppf-application',
      image: {
        src: '/images/services/ppf-application-closeup.jpg',
        alt: 'Close-up of hands applying protective film to Porsche front bumper'
      },
      title: 'Precision Application',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Advanced techniques for flawless protection.'
    },
    {
      id: 'porsche-showroom',
      image: {
        src: '/images/services/porsche-showroom.jpg',
        alt: 'Silver Porsche 911 convertible in well-lit showroom'
      },
      title: 'Showroom Quality',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Your vehicle deserves the best protection.'
    }
  ];

  const fusionPlusData = {
    title: 'Universal Usage',
    subtitle: 'PROTECT MORE THAN YOUR PAINT',
    description: 'Endless applications. FUSION PLUS has so many uses, and so few downsides.',
    image: {
      src: '/images/products/fusion-plus-wheel-application.jpg',
      alt: 'Person applying FUSION PLUS ceramic coating to black alloy wheel with white applicator pad'
    },
    applications: [
      {
        id: 'wheel-caliper',
        title: 'Wheel & Caliper',
        description: 'The wheel deal. Effectively repel dust, grime, and other contaminants with superior heat and chemical resistance from FUSION PLUS.'
      },
      {
        id: 'glass',
        title: 'Glass'
      },
      {
        id: 'plastic-trim',
        title: 'Plastic & Trim'
      },
      {
        id: 'upholstery',
        title: 'Upholstery'
      }
    ]
  };

  const getProductData = (tabId: string) => {
    switch (tabId) {
      case 'ultimate-plus':
        return {
          title: 'ULTIMATE PLUS™',
          description: 'ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road, keeping your vehicle\'s surfaces safe from things like gravel, oils, bug acids, bird droppings, and stopping paint chips before they start.',
          features: ultimatePlusFeatures
        };
      case 'stealth':
        return {
          title: 'STEALTH™',
          description: 'Our premium stealth protection film provides invisible protection while maintaining your vehicle\'s original appearance. Perfect for those who want maximum protection without any visual changes.',
          features: stealthFeatures
        };
      case 'by-the-foot':
        return {
          title: 'BY THE FOOT™',
          description: 'Custom protection film sold by the foot, perfect for DIY installations and specific areas that need protection. Cost-effective solution for targeted coverage.',
          features: byTheFootFeatures
        };
      default:
        return {
          title: 'ULTIMATE PLUS™',
          description: 'ULTIMATE PLUS is designed to provide you with the peace of mind you need on the open road.',
          features: ultimatePlusFeatures
        };
    }
  };

  const currentProduct = getProductData(activeTab);

  return (
    <div className="ppf-page">
      {/* Product Tabs Section */}
      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        background="dark"
      />

      {/* Product Showcase Section */}
      <ProductShowcase
        title={currentProduct.title}
        description={currentProduct.description}
        features={currentProduct.features}
        images={productImages}
        primaryCtaText="Find An Installer"
        primaryCtaHref="/installer-locator"
        secondaryCtaText="Become A Dealer"
        secondaryCtaHref="/become-dealer"
        background="dark"
      />

      {/* Product Info Section */}
              <ProductInfoCard
        {...fusionPlusData}
        background="dark"
        imagePosition="left"
        spacing="lg"
      />

      {/* Content Grid Section */}
      <ContentGrid
        title="Loren Ipsum"
        items={ppfContentItems}
        background="dark"
        columns={3}
        spacing="lg"
        imageAspectRatio="square"
      />

      {/* Additional Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900">
              Why Choose XPEL Paint Protection Film?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              XPEL paint protection film is the industry leader in automotive protection, 
              trusted by car enthusiasts and professionals worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Proven Technology</h3>
              <p className="text-neutral-600">Over 20 years of innovation and development in paint protection technology.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Warranty Protection</h3>
              <p className="text-neutral-600">Comprehensive warranty coverage for peace of mind and long-term protection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Professional Network</h3>
              <p className="text-neutral-600">Worldwide network of certified installers for professional installation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPFPage; 