import { ArticleCard } from '@/components/common/FeaturedArticles';
import { Article } from '@/components/common/ArticleSlider';

export const FEATURED_ARTICLES: ArticleCard[] = [
  {
    id: '1',
    image: '/images/articles/article-1.png',
    imageAlt: 'Person in protective suit working on car fender',
    date: '08 May, 2025',
    title: 'Lorem Ipsum is simply dummy text',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ctaText: 'Explore More',
    ctaHref: '/articles/article-1'
  },
  {
    id: '2',
    image: '/images/articles/article-2.png',
    imageAlt: 'Hand holding tool against car surface',
    date: '05 May, 2025',
    title: 'Lorem Ipsum is simply dummy text',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ctaText: 'Explore More',
    ctaHref: '/articles/article-2'
  },
  {
    id: '3',
    image: '/images/articles/article-3.png',
    imageAlt: 'Hand peeling protective film from car',
    date: '02 May, 2025',
    title: 'Lorem Ipsum is simply dummy text',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ctaText: 'Explore More',
    ctaHref: '/articles/article-3'
  }
];

// Updated articles data to match the Figma design exactly
export const LATEST_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Bike Protection 101: How InvisiFRAME PPF Protects for Frames, Cranks & More',
    description: 'Learn how paint protection film can safeguard your bicycle investment from scratches, chips, and wear.',
    category: 'CATEGORY',
    imageSrc: '/images/articles/article-1.png',
    imageAlt: 'Person applying protective film to bicycle frame',
    href: '/articles/bike-protection-101',
    hasVideo: true
  },
  {
    id: '2',
    title: 'Federal Tax Credit on Window Film Benefits Residential Homeowners',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sedas eiusmod tempor incididunt dolore lorem ipsum dolores amet.',
    category: 'CATEGORY',
    imageSrc: '/images/articles/article-2.png',
    imageAlt: 'Modern house with window film protection',
    href: '/articles/federal-tax-credit-window-film',
    hasVideo: true
  },
  {
    id: '3',
    title: 'How XPEL Window Film on Windshields Maximizes Interior Comfort and UV Protection',
    description: 'Discover the benefits of professional window film installation for enhanced driving comfort and protection.',
    category: 'CATEGORY',
    imageSrc: '/images/articles/article-3.png',
    imageAlt: 'Car interior with windshield protection',
    href: '/articles/windshield-window-film-benefits',
    hasVideo: true
  },
  {
    id: '4',
    title: 'XPEL Prot Race Interior Protection for Off-Road Vehicles',
    description: 'Professional-grade interior protection solutions for off-road racing and adventure vehicles.',
    category: 'CATEGORY',
    imageSrc: '/images/articles/article-1.png',
    imageAlt: 'Off-road racing vehicle with protection',
    href: '/articles/xpel-prot-race-interior',
    hasVideo: true
  },
  {
    id: '5',
    title: 'Advanced Paint Protection Film Technology for Modern Vehicles',
    description: 'Explore the latest innovations in paint protection film that provide superior durability and self-healing properties.',
    category: 'CATEGORY',
    imageSrc: '/images/articles/article-2.png',
    imageAlt: 'Advanced paint protection film technology',
    href: '/articles/advanced-ppf-technology',
    hasVideo: true
  },
  {
    id: '6',
    title: 'Professional Installation Best Practices for Maximum Protection',
    description: 'Essential techniques and best practices for professional paint protection film installation.',
    category: 'CATEGORY',
    imageSrc: '/images/articles/article-3.png',
    imageAlt: 'Professional installation process',
    href: '/articles/installation-best-practices',
    hasVideo: true
  }
];

export const PRODUCT_ARTICLES: ArticleCard[] = [
  {
    id: 'ppf-1',
    image: '/images/articles/article-1.png',
    imageAlt: 'Paint Protection Film Application',
    date: '10 May, 2025',
    title: 'Advanced PPF Technology',
    description: 'Discover the latest innovations in paint protection film technology.',
    ctaText: 'Read More',
    ctaHref: '/articles/ppf-technology'
  },
  {
    id: 'wpf-1',
    image: '/images/articles/article-2.png',
    imageAlt: 'Window Protection Film Installation',
    date: '07 May, 2025',
    title: 'Window Film Benefits',
    description: 'Learn about the benefits of professional window protection film.',
    ctaText: 'Read More',
    ctaHref: '/articles/window-film-benefits'
  },
  {
    id: 'marine-1',
    image: '/images/articles/article-3.png',
    imageAlt: 'Marine Protection Solutions',
    date: '03 May, 2025',
    title: 'Marine Protection Guide',
    description: 'Complete guide to protecting your marine investments.',
    ctaText: 'Read More',
    ctaHref: '/articles/marine-protection-guide'
  }
];

export const BLOG_ARTICLES: ArticleCard[] = [
  {
    id: 'blog-1',
    image: '/images/articles/article-1.png',
    imageAlt: 'Professional Installation Process',
    date: '12 May, 2025',
    title: 'Professional Installation Guide',
    description: 'Step-by-step guide to professional protection film installation.',
    ctaText: 'Read Article',
    ctaHref: '/blog/installation-guide'
  },
  {
    id: 'blog-2',
    image: '/images/articles/article-2.png',
    imageAlt: 'Maintenance Tips',
    date: '09 May, 2025',
    title: 'Maintenance Best Practices',
    description: 'Essential maintenance tips for long-lasting protection.',
    ctaText: 'Read Article',
    ctaHref: '/blog/maintenance-tips'
  },
  {
    id: 'blog-3',
    image: '/images/articles/article-3.png',
    imageAlt: 'Care Products',
    date: '06 May, 2025',
    title: 'Care Product Selection',
    description: 'How to choose the right care products for your protection.',
    ctaText: 'Read Article',
    ctaHref: '/blog/care-products'
  }
]; 