// Header Configuration Constants
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

// Header Component Interfaces
export interface HeaderProps {
  readonly country: string;
  readonly language: string;
}

// Type definitions for better type safety
export type DropdownType = typeof DROPDOWN_TYPES[keyof typeof DROPDOWN_TYPES];
export type ProductCategory = typeof PRODUCT_CATEGORIES[keyof typeof PRODUCT_CATEGORIES];
export type MobileMenuType = 'main' | 'products' | 'resources'; 