export interface WarrantyProduct {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly downloadUrl: string;
  readonly description?: string;
}

export interface WarrantyAccordionItem {
  readonly id: string;
  readonly title: string;
  readonly content: string;
}

export interface WarrantyInformationData {
  readonly title: string;
  readonly subtitle?: string;
  readonly bannerImage: string;
  readonly bannerAltText: string;
  readonly aboutSection: {
    readonly title: string;
    readonly description: string;
    readonly backgroundColor: string;
  };
  readonly accordionSections: ReadonlyArray<WarrantyAccordionItem>;
  readonly bottomAboutSection: {
    readonly title: string;
    readonly description: string;
    readonly backgroundColor: string;
  };
  readonly serviceBlocks: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly ctaText: string;
    readonly ctaHref: string;
    readonly iconClass: string;
    readonly iconAlt: string;
  }>;
}

export const WARRANTY_INFORMATION_DATA: WarrantyInformationData = {
  title: 'Warranty Information',
  subtitle: 'Register a Warranty',
  bannerImage: '/images/contactus-banner.jpg',
  bannerAltText: 'XPEL Warranty Information',
  aboutSection: {
    title: 'Warranty Claim',
    description: 'Click the button to fill out the form and submit your warranty claim.',
    backgroundColor: '#f8f9fa'
  },
  accordionSections: [
    {
      id: 'paint-protection-film',
      title: 'Paint Protection Film',
      content: 'COLOR PPF - LIMITED PRODUCT WARRANTY: XPEL, Inc. expressly warrants to the owner that, for a period of ten (10) years from the date of initial installation, the Company will cover defects on the XPEL COLOR PPF such as: yellowing, cracking, blistering, and delaminating. This Limited Warranty only applies to the Company\'s Products which are professionally installed in the manner recommended by the Company. The Company will, at its option, remove or replace the Product without charge if the Product fails or does not perform as warranted solely due to a manufacturing defect within the Warranty Period. For service under this Limited Warranty, you must notify the authorized Company installer who performed the installation of the Product, in writing, providing claimant\'s name, phone number, address, and the installation address (if different), a description of the product involved and the nature of the defect. This Limited Warranty is non-transferable.'
    },
    {
      id: 'home-office-window-film',
      title: 'Home & Office Window Film',
      content: 'Home & Office Window Films provide protection and energy efficiency for residential and commercial applications. Download warranty information for specific product details and terms.'
    },
    {
      id: 'window-film',
      title: 'Window Film',
      content: 'PRIME Automotive Window Film, PRIME XP/ST Automotive Window Film, and MARINE Window Film offer superior protection and performance. Each product line has specific warranty terms and coverage details. Download warranty information for specific product details and terms.'
    },
    {
      id: 'surface-protection-film',
      title: 'Surface Protection Film',
      content: 'XPEL Headlight Protection Film provides durable protection for vehicle headlights and fog lights. Download warranty information for specific product details and terms.'
    },
    {
      id: 'ceramic-coating',
      title: 'Ceramic Coating',
      content: 'FUSION PLUS™ Series includes PREMIUM v2, CLASSIC, PAINT & PPF, SATIN, LITE, WHEEL & CALIPER, GLASS, PLASTIC & TRIM, UPHOLSTERY, UPHOLSTERY v2, MARINE, MARINE V2, and AIRCRAFT Ceramic Coatings. Also includes Pro Series Graphene Coating. Each product has specific warranty terms and application requirements. Download warranty information for specific product details and terms.'
    },
    {
      id: 'windshield-protection-film',
      title: 'Windshield Protection Film',
      content: 'Windshield Protection Film provides advanced protection for vehicle windshields against chips, cracks, and other damage. Download warranty information for specific product details and terms.'
    }
  ],
  bottomAboutSection: {
    title: 'Need Help?',
    description: 'For questions about warranty information or if you need assistance, we are here to help.',
    backgroundColor: '#364258'
  },
  serviceBlocks: [
    {
      id: 'find-installer',
      title: 'Need an XPEL Installer?',
      description: 'Find local pros who nail the perfect XPEL protection install every time.',
      ctaText: 'Get Started',
      ctaHref: '/find-installer',
      iconClass: 'fas fa-tools',
      iconAlt: 'Tools icon'
    },
    {
      id: 'shop-xpel',
      title: 'Shop XPEL',
      description: 'Our top-notch collection is waiting for you. Browse protective film, tools, care items, and more!',
      ctaText: 'Shop Now',
      ctaHref: '/shop',
      iconClass: 'fas fa-shopping-cart',
      iconAlt: 'Shopping cart icon'
    },
    {
      id: 'become-dealer',
      title: 'Join the XPEL Dealer Crew',
      description: 'Team up with us and start offering premium protection solutions to your customers.',
      ctaText: 'Learn More',
      ctaHref: '/become-a-dealer',
      iconClass: 'fas fa-handshake',
      iconAlt: 'Handshake icon'
    }
  ]
}; 