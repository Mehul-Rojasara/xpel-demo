// Footer Configuration Constants
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

// Footer Component Interfaces
export interface FooterProps {
  readonly country: string;
  readonly language: string;
}

// Type definitions for better type safety
export type FooterSection = typeof FOOTER_SECTIONS[keyof typeof FOOTER_SECTIONS];
export type SocialMediaLink = typeof SOCIAL_MEDIA_LINKS[keyof typeof SOCIAL_MEDIA_LINKS];
export type LegalLink = typeof LEGAL_LINKS[keyof typeof LEGAL_LINKS];
export type ResourceLink = typeof RESOURCE_LINKS[keyof typeof RESOURCE_LINKS];
export type CompanyLink = typeof COMPANY_LINKS[keyof typeof COMPANY_LINKS]; 