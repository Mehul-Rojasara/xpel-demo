// ============================================================================
// HEADER CONSTANTS
// ============================================================================

export const BREAKPOINTS = {
  MOBILE: 1024
} as const;

export const DROPDOWN_TYPES = {
  ABOUT_US: 'about-us',
  PRODUCTS: 'products',
  RESOURCES: 'resources'
} as const;

export const PRODUCT_CATEGORIES = {
  PAINT_PROTECTION_FILM: 'paint-protection-film',
  CERAMIC_COATING: 'ceramic-coating',
  WINDOW_FILM: 'window-film',
  INTERIOR_PROTECTION: 'interior-protection'
} as const;

// ============================================================================
// HEADER NAVIGATION LINKS
// ============================================================================

export const HEADER_NAVIGATION_LINKS = {
  aboutUs: {
    label: 'About Us',
    href: null, // Dropdown menu
    hasDropdown: true,
    dropdownType: 'about-us',
    iconType: 'chevron-down'
  },
  products: {
    label: 'Products',
    href: null, // Dropdown menu
    hasDropdown: true,
    dropdownType: 'products',
    iconType: 'chevron-down'
  },
  resources: {
    label: 'Resources',
    href: null, // Dropdown menu
    hasDropdown: true,
    dropdownType: 'resources',
    iconType: 'chevron-down'
  },
  faqs: {
    label: 'FAQs',
    href: '/faqs',
    hasDropdown: false,
    dropdownType: null,
    iconType: null
  },
  contactUs: {
    label: 'Contact Us',
    href: '/contact-us',
    hasDropdown: false,
    dropdownType: null,
    iconType: null
  },
  installerLocator: {
    label: 'Installer Locator',
    href: '/installer-locator',
    hasDropdown: false,
    dropdownType: null,
    iconType: 'location',
    isButton: true
  },
  search: {
    label: 'Search',
    href: null,
    hasDropdown: false,
    dropdownType: null,
    iconType: 'search',
    isSearch: true
  }
} as const;

// ============================================================================
// HEADER DROPDOWN CONTENT
// ============================================================================

export const HEADER_DROPDOWN_CONTENT = {
  aboutUs: {
    title: 'About Us',
    image: {
      src: '/images/header/about-us.webp',
      alt: 'XPEL Corporate Building',
      width: 320,
      height: 240
    },
  },
  products: {
    categories: [
      {
        key: 'paint-protection-film',
        label: 'Paint Protection Film',
        image: {
          src: '/images/header/paint-protection-film.webp',
          alt: 'Paint Protection Film Installation',
          width: 262,
          height: 262
        },
        products: [
          { label: 'ULTIMATE PLUS™', href: '/products/ultimate-plus' },
          { label: 'ULTIMATE FUSION™', href: '/products/ultimate-fusion' },
          { label: 'STEALTH™', href: '/products/stealth' }
        ],
        viewAllHref: '/products/protection-film'
      },
      {
        key: 'ceramic-coating',
        label: 'Ceramic Coating',
        image: {
          src: '/images/header/ceramic-coating.webp',
          alt: 'Ceramic Coating Application',
          width: 262,
          height: 262
        },
        products: [
          { label: 'FUSION™ LITE', href: '/products/fusion-lite' },
          { label: 'FUSION™ PAINT & PPF', href: '/products/fusion-paint-ppf' },
          { label: 'FUSION™ PREMIUM', href: '/products/fusion-premium' },
          { label: 'FUSION™ SURFACE SPECIFIC', href: '/products/fusion-surface-specific' }
        ],
        viewAllHref: '/products/ceramic-coating'
      },
      {
        key: 'window-film',
        label: 'Window Film',
        image: {
          src: '/images/header/window-film.webp',
          alt: 'Window Film Installation',
          width: 262,
          height: 262
        },
        products: [
          { label: 'PRIME™ CS BLACK', href: '/products/prime-cs-black' },
          { label: 'PRIME™ XR BLACK', href: '/products/prime-xr-black' },
          { label: 'PRIME™ XR PLUS', href: '/products/prime-xr-plus' }
        ],
        viewAllHref: '/products/window-film'
      },
      {
        key: 'interior-protection',
        label: 'Interior Protection',
        image: {
          src: '/images/header/interior-protection.webp',
          alt: 'Interior Protection Installation',
          width: 262,
          height: 262
        },
        products: [
          { label: 'INTERIOR PROTECTION FILM', href: '/products/interior-protection-film' },
          { label: 'CONSOLE PROTECTION', href: '/products/console-protection' },
          { label: 'DASH PROTECTION', href: '/products/dash-protection' }
        ],
        viewAllHref: '/products/interior-protection'
      }
    ],
    // Product detail columns for when a category is selected
    detailColumns: {
      protectionFilm: {
        title: 'Protection Film',
        products: [
          { label: 'ULTIMATE PLUS™', href: '/products/ultimate-plus' },
          { label: 'ULTIMATE FUSION™', href: '/products/ultimate-fusion' },
          { label: 'STEALTH™', href: '/products/stealth' }
        ],
        viewAllHref: '/products/protection-film'
      },
      windowFilm: {
        title: 'Window Film',
        products: [
          { label: 'PRIME™ CS BLACK', href: '/products/prime-cs-black' },
          { label: 'PRIME™ XR BLACK', href: '/products/prime-xr-black' },
          { label: 'PRIME™ XR PLUS', href: '/products/prime-xr-plus' }
        ],
        viewAllHref: '/products/window-film'
      },
      ceramicCoating: {
        title: 'Ceramic Coating',
        products: [
          { label: 'FUSION™ LITE', href: '/products/fusion-lite' },
          { label: 'FUSION™ PAINT & PPF', href: '/products/fusion-paint-ppf' },
          { label: 'FUSION™ PREMIUM', href: '/products/fusion-premium' },
          { label: 'FUSION™ SURFACE SPECIFIC', href: '/products/fusion-surface-specific' }
        ],
        viewAllHref: '/products/ceramic-coating'
      },
      resources: {
        title: 'Resources',
        links: [
          { label: 'Contact Us', href: '/contact-us' },
          { label: 'Become a Dealer', href: '/become-a-dealer' },
          { label: 'Product Care', href: '/product-care' },
          { label: 'Frequently Asked Questions', href: '/faqs' }
        ]
      }
    },
    resources: [
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Become a Dealer', href: '/become-a-dealer' },
      { label: 'Product Care', href: '/product-care' },
      { label: 'Frequently Asked Questions', href: '/faqs' }
    ]
  },
  resources: {
    title: 'Resources',
    description: 'Access tools, support, and information to help you succeed',
    links: [
      {
        label: 'Blog',
        href: '/resources/blog',
        iconType: 'book'
      },
      {
        label: 'Videos',
        href: '/resources/videos',
        iconType: 'video'
      },
      {
        label: 'Events',
        href: '/resources/events',
        iconType: 'calendar'
      },
      {
        label: 'Newsroom',
        href: '/resources/newsroom',
        iconType: 'newspaper'
      },
      {
        label: 'Careers',
        href: '/resources/careers',
        iconType: 'star'
      },
      {
        label: 'Help Center',
        href: '/resources/help-center',
        iconType: 'question'
      }
    ],
    featuredContent: {
      image: {
        src: '/images/header/bmw-rally.webp',
        alt: 'XPEL Protected BMW X2 at Rebelle Rally',
        width: 400,
        height: 192
      },
      title: 'XPEL Protected BMW X2 Finishes Second At 2023 Rebelle Rally',
      description: 'Read about our latest achievement in automotive protection'
    },
    connectLinks: [
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Become a Dealer', href: '/become-a-dealer' },
      { label: 'Product Care', href: '/product-care' },
      { label: 'Frequently Asked Questions', href: '/faqs' }
    ]
  }
} as const;

// CONTENT SECTION CONSTANTS
// ============================================================================

export const CONTENT_SECTIONS = {
  SECTION: {
    title: "With an array of offerings available, there's XPEL product for every need.",
    subtitle: "From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it."
  },
  DAP_NEXT: {
    title: "World Class Cutting Software at Your Fingertips",
    subtitle: "From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it."
  },
  TRAINING_CERTI: {
    title: "Welcome to Installers’ University",
    subtitle: "Expert installation calls for expert training. Boost your skills and create new opportunities with hands-on training, led by XPEL’s experienced instructors. Gain the expertise and certification needed for flawless film and coating installs at our world-class facilities, or on your own turf."
  }
} as const;

// ============================================================================
// FOOTER CONSTANTS
// ============================================================================

export const FOOTER_SECTIONS = {
  NEWSLETTER: 'newsletter',
  RESOURCES: 'resources',
  COMPANY: 'company',
  CONTACT: 'contact'
} as const;

export const SOCIAL_MEDIA_LINKS = {
  FACEBOOK: 'https://facebook.com/xpel',
  YOUTUBE: 'https://youtube.com/xpel',
  INSTAGRAM: 'https://instagram.com/xpel',
  TWITTER: 'https://twitter.com/xpel',
  LINKEDIN: 'https://linkedin.com/company/xpel'
} as const;

export const LEGAL_LINKS = {
  TERMS_OF_USE: '/terms-of-use',
  PRIVACY_POLICY: '/privacy-policy',
  LEGAL: '/legal',
  ACCESSIBILITY: '/accessibility'
} as const;

export const RESOURCE_LINKS = {
  HELP_CENTER: '/help-center',
  BLOG: '/blog'
} as const;

export const COMPANY_LINKS = {
  ABOUT_US: '/about-us',
  MANAGEMENT: '/management',
  CAREERS: '/careers',
  NEWSROOM: '/newsroom',
  INVESTOR_RELATIONS: '/investor-relations',
  PARTNERSHIPS: '/partnerships',
  PAYMENT_INFORMATION: '/payment-information'
} as const;

export const CONTACT_INFO = {
  PHONE: '(210) 678-3700',
  CONTACT_US: '/contact'
} as const;

// ============================================================================
// FOOTER LINKS JSON DATA
// ============================================================================

export const FOOTER_LINKS_DATA = {
  resources: {
    title: 'Resources',
    links: [
      {
        label: 'Help Center',
        href: '/help-center',
        description: 'Get support and find answers to common questions'
      },
      {
        label: 'Blog',
        href: '/blog',
        description: 'Latest news, tips, and insights from XPEL'
      },
      {
        label: 'Videos',
        href: '/videos',
        description: 'Product demonstrations and installation guides'
      },
      {
        label: 'Newsroom',
        href: '/newsroom',
        description: 'Press releases and company announcements'
      },
      {
        label: 'Careers',
        href: '/careers',
        description: 'Join our team and grow with XPEL'
      },
      {
        label: 'Events',
        href: '/events',
        description: 'Upcoming trade shows and industry events'
      }
    ]
  },
  company: {
    title: 'Company',
    links: [
      {
        label: 'About Us',
        href: '/about-us',
        description: 'Learn about XPEL\'s mission and values'
      },
      {
        label: 'Management',
        href: '/management',
        description: 'Meet our leadership team'
      },
      {
        label: 'Careers',
        href: '/careers',
        description: 'Explore career opportunities at XPEL'
      },
      {
        label: 'Newsroom',
        href: '/newsroom',
        description: 'Latest company news and press releases'
      },
      {
        label: 'Investor Relations',
        href: '/investor-relations',
        description: 'Financial information and investor resources'
      },
      {
        label: 'Partnerships',
        href: '/partnerships',
        description: 'Strategic partnerships and collaborations'
      },
      {
        label: 'Payment Information',
        href: '/payment-information',
        description: 'Payment methods and billing information'
      }
    ]
  },
  contact: {
    title: 'Contact',
    links: [
      {
        label: 'Contact Us',
        href: '/contact',
        description: 'Get in touch with our team'
      },
      {
        label: '(210) 678-3700',
        href: 'tel:(210) 678-3700',
        description: 'Call us directly',
        isPhone: true
      }
    ]
  },
  social: {
    title: 'Follow Us',
    links: [
      {
        label: 'Facebook',
        href: 'https://facebook.com/xpel',
        icon: 'facebook',
        description: 'Follow XPEL on Facebook'
      },
      {
        label: 'YouTube',
        href: 'https://youtube.com/xpel',
        icon: 'youtube',
        description: 'Watch XPEL videos on YouTube'
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/xpel',
        icon: 'instagram',
        description: 'Follow XPEL on Instagram'
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/xpel',
        icon: 'twitter',
        description: 'Follow XPEL on X (Twitter)'
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/xpel',
        icon: 'linkedin',
        description: 'Connect with XPEL on LinkedIn'
      }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      {
        label: 'Terms of Use',
        href: '/terms-of-use',
        description: 'Terms and conditions of use'
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
        description: 'How we protect your privacy'
      },
      {
        label: 'Legal',
        href: '/legal',
        description: 'Legal information and disclaimers'
      },
      {
        label: 'Accessibility',
        href: '/accessibility',
        description: 'Accessibility statement and compliance'
      }
    ]
  },
  newsletter: {
    title: 'Newsletter Signup',
    description: 'Sign up to get the latest on sales, new releases, updates and more from Xpel!',
    placeholder: 'Email Address',
    submitLabel: 'Subscribe'
  }
} as const;

// ============================================================================
// LANGUAGE SELECTOR CONSTANTS
// ============================================================================

export const LANGUAGE_OPTIONS = [
  { code: 'en', name: 'English', country: 'United States' },
  { code: 'en-ca', name: 'English', country: 'Canada' },
  { code: 'fr-ca', name: 'Français', country: 'Canada' },
  { code: 'es', name: 'Español', country: 'México' },
  { code: 'pt', name: 'Português', country: 'Brasil' },
  { code: 'de', name: 'Deutsch', country: 'Deutschland' },
  { code: 'fr', name: 'Français', country: 'France' },
  { code: 'it', name: 'Italiano', country: 'Italia' },
  { code: 'nl', name: 'Nederlands', country: 'Nederland' },
  { code: 'ja', name: '日本語', country: '日本' },
  { code: 'ko', name: '한국어', country: '대한민국' },
  { code: 'zh', name: '中文', country: '中国' },
] as const;

export const COUNTRY_MAP = {
  'en': 'us',
  'en-ca': 'ca',
  'fr-ca': 'ca',
  'es': 'us',
  'pt': 'br',
  'de': 'de',
  'fr': 'us',
  'it': 'it',
  'nl': 'nl',
  'ja': 'jp',
  'ko': 'kr',
  'zh': 'cn'
} as const;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

// Header Types
export type DropdownType = typeof DROPDOWN_TYPES[keyof typeof DROPDOWN_TYPES];
export type ProductCategory = typeof PRODUCT_CATEGORIES[keyof typeof PRODUCT_CATEGORIES];
export type MobileMenuType = 'main' | 'products' | 'resources';
export type IconType = 'chevron-down' | 'location' | 'search' | 'book' | 'video' | 'calendar' | 'newspaper' | 'star' | 'question' | null;

// Header Navigation Types
export interface HeaderNavigationLink {
  readonly label: string;
  readonly href: string | null;
  readonly hasDropdown: boolean;
  readonly dropdownType: string | null;
  readonly iconType: IconType;
  readonly isButton?: boolean;
  readonly isSearch?: boolean;
}

export interface HeaderDropdownLink {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly iconType?: IconType;
}

export interface HeaderProductCategory {
  readonly key: string;
  readonly label: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
  readonly products: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  readonly viewAllHref: string;
}

export interface HeaderDetailColumn {
  readonly title: string;
  readonly products?: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  readonly links?: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  readonly viewAllHref?: string;
}

export interface HeaderDropdownContent {
  readonly title: string;
  readonly description?: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
  readonly links?: readonly HeaderDropdownLink[];
  readonly categories?: readonly HeaderProductCategory[];
  readonly detailColumns?: {
    readonly protectionFilm: HeaderDetailColumn;
    readonly windowFilm: HeaderDetailColumn;
    readonly ceramicCoating: HeaderDetailColumn;
    readonly resources: HeaderDetailColumn;
  };
  readonly resources?: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  readonly featuredContent?: {
    readonly image: {
      readonly src: string;
      readonly alt: string;
      readonly width: number;
      readonly height: number;
    };
    readonly title: string;
    readonly description: string;
  };
  readonly connectLinks?: ReadonlyArray<{ readonly label: string; readonly href: string }>;
}

// Footer Types
export type FooterSection = typeof FOOTER_SECTIONS[keyof typeof FOOTER_SECTIONS];
export type SocialMediaLink = typeof SOCIAL_MEDIA_LINKS[keyof typeof SOCIAL_MEDIA_LINKS];
export type LegalLink = typeof LEGAL_LINKS[keyof typeof LEGAL_LINKS];
export type ResourceLink = typeof RESOURCE_LINKS[keyof typeof RESOURCE_LINKS];
export type CompanyLink = typeof COMPANY_LINKS[keyof typeof COMPANY_LINKS];

// Language Types
export type LanguageOption = typeof LANGUAGE_OPTIONS[number];
export type CountryCode = typeof COUNTRY_MAP[keyof typeof COUNTRY_MAP];

// ============================================================================
// INTERFACES
// ============================================================================

export interface HeaderProps {
  readonly country: string;
  readonly language: string;
  readonly pathname?: string;
  readonly forceTransparent?: boolean;
  readonly forceSolid?: boolean;
}

export interface FooterProps {
  readonly country: string;
  readonly language: string;
}

export interface LanguageSelectorProps {
  readonly country: string;
  readonly language: string;
  readonly className?: string;
}

// ============================================================================
// FOOTER LINKS INTERFACES
// ============================================================================

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly description: string;
  readonly icon?: string;
  readonly isPhone?: boolean;
}

export interface FooterSectionData {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface NewsletterSection {
  readonly title: string;
  readonly description: string;
  readonly placeholder: string;
  readonly submitLabel: string;
}

export interface FooterLinksData {
  readonly resources: FooterSectionData;
  readonly company: FooterSectionData;
  readonly contact: FooterSectionData;
  readonly social: FooterSectionData;
  readonly legal: FooterSectionData;
  readonly newsletter: NewsletterSection;
} 

export const serviceBlocks = [
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


export const NEXT_STEP_FORM_DATA = {
  default: {
    title: "Take the Next Steps",
    description: "We look forward to helping you get to the next level and becoming the very best you can be with XPEL.",
    phoneNumbers: ["+1 (210) 678-3701", "(800) 447-9928"],
    email: "support@XPEL.com",
    hours: "8:30am - 5:30pm CST"
  },
  dealer: {
    title: "Become a Dealer",
    description: "Join our network of authorized XPEL dealers and bring premium protection solutions to your customers.",
    phoneNumbers: ["+1 (210) 678-3701", "(800) 447-9928"],
    email: "dealer@XPEL.com",
    hours: "8:30am - 5:30pm CST"
  },
  installer: {
    title: "Become an Installer",
    description: "Get certified as an XPEL installer and access our premium products and training programs.",
    phoneNumbers: ["+1 (210) 678-3701", "(800) 447-9928"],
    email: "installer@XPEL.com",
    hours: "8:30am - 5:30pm CST"
  },
  dapNext: {
    title: "Get in Touch ",
    description: "Reach out with any questions about about XPEL products, services, or procedures. Send us a message and someone from Xpel will get back to you as soon as possible.",
    phoneNumbers: ["+1 (210) 678-3701", "(800) 447-9928"],
    email: "support@XPEL.com",
    hours: "8:30am - 5:30pm CST"
  }
}; 
