// Header background control utilities

export interface HeaderStyleConfig {
  readonly transparent: boolean;
  readonly solid: boolean;
}

// Define which routes should have transparent headers
const TRANSPARENT_ROUTES = [
  '/',
  '/home',
  '/about-us',
  '/about',
  '/products',
  '/services',
  '/contact',
  '/faqs',
  '/resources',
  '/installer-locator'
];

// Define which routes should have solid headers (never transparent)
const SOLID_ROUTES = [
  '/style-guide',
  '/style-guide-xpel',
  '/admin',
  '/dashboard',
  '/account',
  '/checkout',
  '/cart',
  '/login',
  '/register'
];

/**
 * Determines header background style based on current pathname
 * @param pathname - Current pathname (e.g., '/us/en/about-us')
 * @param forceTransparent - Force transparent background
 * @param forceSolid - Force solid background
 * @returns HeaderStyleConfig object
 */
export function getHeaderStyle(
  pathname: string,
  forceTransparent?: boolean,
  forceSolid?: boolean
): HeaderStyleConfig {
  // Handle forced styles first
  if (forceTransparent) {
    return { transparent: true, solid: false };
  }
  
  if (forceSolid) {
    return { transparent: false, solid: true };
  }

  // Extract the slug part from the pathname
  // pathname format: /country/language/slug
  const pathParts = pathname.split('/').filter(Boolean);
  const slug = pathParts.length >= 3 ? pathParts.slice(2).join('/') : '';
  
  // Check if current route should be solid
  if (SOLID_ROUTES.some(route => slug.startsWith(route.replace('/', '')))) {
    return { transparent: false, solid: true };
  }
  
  // Check if current route should be transparent
  if (TRANSPARENT_ROUTES.some(route => slug.startsWith(route.replace('/', '')))) {
    return { transparent: true, solid: false };
  }
  
  // Default: transparent for most pages
  return { transparent: true, solid: false };
}

/**
 * Get CSS classes for header based on style config and dropdown state
 * @param style - HeaderStyleConfig object
 * @param hasActiveDropdown - Whether a dropdown is currently active
 * @returns CSS classes string
 */
export function getHeaderClasses(
  style: HeaderStyleConfig,
  hasActiveDropdown: boolean
): string {
  const baseClasses = 'sticky top-0 z-50 transition-all duration-200 backdrop-blur-sm';
  
  if (hasActiveDropdown) {
    return `${baseClasses} bg-gray-900/95 shadow-lg`;
  }
  
  if (style.solid) {
    return `${baseClasses} bg-white/95 border-b border-gray-200 shadow-sm`;
  }
  
  if (style.transparent) {
    return `${baseClasses} bg-black/10 hover:bg-black/20`;
  }
  
  // Fallback
  return `${baseClasses} bg-white/95 border-b border-gray-200 shadow-sm`;
}

/**
 * Get text color classes based on header style and dropdown state
 * @param style - HeaderStyleConfig object
 * @param hasActiveDropdown - Whether a dropdown is currently active
 * @param isActiveItem - Whether this specific item is active
 * @returns CSS classes string
 */
export function getTextColorClasses(
    style: HeaderStyleConfig,
    hasActiveDropdown: boolean,
    isActiveItem: boolean = false
  ): string {
    // When dropdown is active, use white text for visibility against dark background
    if (hasActiveDropdown) {
      return 'text-white hover:text-gray-200';
    }
    
    if (isActiveItem) {
      return 'text-gray-800';
    }
    
    if (style.transparent) {
      return 'text-white hover:text-gray-200';
    }
    
    // Solid background
    return 'text-gray-700 hover:text-gray-800';
  } 

  
  