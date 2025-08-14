// ============================================================================
// HOMEPAGE CONSTANTS
// ============================================================================

export const HOMEPAGE_CONFIG = {
  hero: {
    minHeight: "600px",
    overlayOpacity: 0.45,
    textColor: "light" as const,
    textAlignment: "left" as const,
    showPagination: true,
    currentSlide: 1,
    totalSlides: 5
  },
  about: {
    background: "white" as const,
    textAlignment: "left" as const
  },
  serviceSlider: {
    background: "dark" as const,
    showNavigation: true,
    showProgress: true,
    autoPlay: false,
    cardsPerView: 3.5,
    gap: 40
  },
  serviceBlocks: {
    background: "dark" as const,
    columns: 3,
    spacing: "lg" as const
  }
} as const;

// ============================================================================
// HOMEPAGE SERVICE DATA
// ============================================================================

export const PROTECTION_SERVICES = [
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Advanced ceramic protection that provides long-lasting shine and protection for your vehicle's paint.",
    image: "/images/ceramic.jpg",
    imageAlt: "Ceramic coating application on car surface"
  },
  {
    id: "window-film",
    title: "Window Film",
    description: "Premium window tinting solutions for UV protection, heat reduction, and enhanced privacy.",
    image: "/images/window-film.jpg",
    imageAlt: "Window film being applied to car window"
  },
  {
    id: "interior-protection",
    title: "Interior Protection",
    description: "Protect your vehicle's interior surfaces from scratches, stains, and wear with our premium films.",
    image: "/images/interior-protection.jpg",
    imageAlt: "Interior protection film application"
  },
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    description: "Ultimate protection for your vehicle's paint with advanced film technology.",
    image: "/images/ceramic.jpg",
    imageAlt: "Paint protection film application"
  },
  {
    id: "car-care",
    title: "Car Care Products",
    description: "Professional car care and maintenance products for optimal vehicle care.",
    image: "/images/interior-protection-two.jpg",
    imageAlt: "Car care products"
  }
] as const;

// ============================================================================
// HOMEPAGE SERVICE BLOCKS DATA
// ============================================================================

export const SERVICE_BLOCKS = [
  {
    id: "installer-locator",
    title: "Find an XPEL Installer Near You",
    description: "Find local pros who nail the perfect XPEL protection install every time.",
    ctaText: "Learn More",
    iconAlt: "Location pin icon for finding XPEL installer"
  },
  {
    id: "coverage-options",
    title: "Coverage Options For My Car",
    description: "Explore our comprehensive protection options for your specific vehicle.",
    ctaText: "Explore Options",
    iconAlt: "Car icon for coverage options"
  },
  {
    id: "become-dealer",
    title: "Become a Dealer",
    description: "Team up with us and start offering premium protection solutions to your customers.",
    ctaText: "Get Started",
    iconAlt: "User icon for becoming a dealer"
  }
] as const;

// ============================================================================
// HOMEPAGE IMAGES
// ============================================================================

export const HOMEPAGE_IMAGES = {
  hero: {
    background: "/images/hero-car-protection.jpg",
    alt: "Car protection film application"
  },
  services: {
    ceramic: "/images/ceramic.png",
    windowFilm: "/images/window-film.png",
    interiorProtection: "/images/interior-protection.png",
    windowFilmTwo: "/images/window-film-two.png"
  }
} as const; 