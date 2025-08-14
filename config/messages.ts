// ============================================================================
// HOMEPAGE MESSAGES
// ============================================================================

export const HOMEPAGE_MESSAGES = {
  hero: {
    title: "New India Site",
    subtitle: "XPEL Protects Nearly Every Surface Under the Sun (and Storm Clouds)",
    ctaText: "Learn More",
    backgroundImageAlt: "Car protection film application"
  },
  about: {
    title: "About XPEL India",
    description: "From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it. XPEL products are created to perform - and there is something for the daily drivers & weekend track warriors alike!",
    ctaText: "Learn More"
  },
  services: {
    title: "Explore our innovative protection offerings",
    ceramicCoating: {
      title: "Ceramic Coating",
      description: "Advanced ceramic protection that provides long-lasting shine and protection for your vehicle's paint.",
      imageAlt: "Ceramic coating application on car surface"
    },
    windowFilm: {
      title: "Window Film",
      description: "Premium window tinting solutions for UV protection, heat reduction, and enhanced privacy.",
      imageAlt: "Window film being applied to car window"
    },
    interiorProtection: {
      title: "Interior Protection",
      description: "Protect your vehicle's interior surfaces from scratches, stains, and wear with our premium films.",
      imageAlt: "Interior protection film application"
    },
    paintProtection: {
      title: "Paint Protection Film",
      description: "Ultimate protection for your vehicle's paint with advanced film technology.",
      imageAlt: "Paint protection film application"
    },
    carCare: {
      title: "Car Care Products",
      description: "Professional car care and maintenance products for optimal vehicle care.",
      imageAlt: "Car care products"
    }
  },
  careProducts: {
    title: "Check Out Our Care Products",
    subtitle: "For additional tools to help keep your window film, and the rest of your car, in pristine shape, take a look at our care products!",
    ctaText: "Shop Now"
  },
  serviceBlocks: {
    installerLocator: {
      title: "Find an XPEL Installer Near You",
      description: "Find local pros who nail the perfect XPEL protection install every time.",
      ctaText: "Learn More",
      iconAlt: "Location pin icon for finding XPEL installer"
    },
    coverageOptions: {
      title: "Coverage Options For My Car",
      description: "Explore our comprehensive protection options for your specific vehicle.",
      ctaText: "Explore Options",
      iconAlt: "Car icon for coverage options"
    },
    becomeDealer: {
      title: "Become a Dealer",
      description: "Team up with us and start offering premium protection solutions to your customers.",
      ctaText: "Get Started",
      iconAlt: "User icon for becoming a dealer"
    }
  },
  accessibility: {
    skipToContent: "Skip to main content"
  }
} as const;

// ============================================================================
// API ERROR MESSAGES
// ============================================================================

export const API_MESSAGES = {
  errors: {
    contentTypeRequired: {
      error: 'Content type is required',
      message: 'Please provide a content type parameter'
    },
    serviceUnavailable: {
      error: 'Service temporarily unavailable',
      message: 'We are experiencing technical difficulties. Please try again later.'
    },
    configurationError: {
      error: 'Service configuration error',
      message: 'Contentstack service is not properly configured. Please contact support.'
    }
  },
  success: {
    dataRetrieved: {
      success: true,
      message: 'Data retrieved successfully'
    }
  }
} as const;

// ============================================================================
// COMMON MESSAGES
// ============================================================================

export const COMMON_MESSAGES = {
  buttons: {
    learnMore: "Learn More",
    shopNow: "Shop Now",
    exploreOptions: "Explore Options",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    findInstaller: "Find Installer"
  },
  navigation: {
    home: "Home",
    products: "Products",
    services: "Services",
    about: "About",
    contact: "Contact"
  },
  accessibility: {
    skipToContent: "Skip to main content",
    menuToggle: "Toggle navigation menu",
    closeMenu: "Close navigation menu",
    searchPlaceholder: "Search products and services",
    languageSelector: "Select language and region"
  }
} as const; 