export interface VideoCard {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly category: string;
  readonly description?: string;
  readonly href: string;
  readonly isVideo: boolean;
}

export const videoContent: readonly VideoCard[] = [
  {
    id: 'bike-protection',
    title: 'Bike Protection 101: How InvisiFRAME PPF Protects for Frames, Cranks & More',
    image: '/images/articles/article-1.png',
    imageAlt: 'Person working on bicycle applying clear film to frame',
    category: 'CATEGORY',
    isVideo: true,
    href: '/videos/bike-protection'
  },
  {
    id: 'federal-tax-credit',
    title: 'Federal Tax Credit on Window Film Benefits Residential Homeowners',
    image: '/images/articles/article-2.png',
    imageAlt: 'Two-story house with light-colored siding and dark roof',
    category: 'CATEGORY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sedas eiusmod tempor incididunt dolore lorem ipsum dolores amet.',
    isVideo: true,
    href: '/videos/federal-tax-credit'
  },
  {
    id: 'windshield-comfort',
    title: 'How XPEL Window Film on Windshields Maximizes Interior Comfort and UV Protection',
    image: '/images/articles/article-3.png',
    imageAlt: 'Interior of a car looking out through windshield',
    category: 'CATEGORY',
    isVideo: true,
    href: '/videos/windshield-comfort'
  },
  {
    id: 'vehicle-protection',
    title: 'Advanced Vehicle Protection Solutions for Modern Cars',
    image: '/images/header/bmw-rally.webp',
    imageAlt: 'BMW rally car with paint protection film',
    category: 'CATEGORY',
    isVideo: true,
    href: '/videos/vehicle-protection'
  },
  {
    id: 'commercial-applications',
    title: 'Commercial Window Film Applications for Business Buildings',
    image: '/images/header/about-us.webp',
    imageAlt: 'Modern office building with applied window film',
    category: 'CATEGORY',
    isVideo: true,
    href: '/videos/commercial-applications'
  }
]; 