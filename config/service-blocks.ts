import { ServiceIcons } from '@/components/common/ServiceBlocks';

export interface ServiceBlockData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly ctaText: string;
  readonly ctaHref: string;
  readonly iconClass: string;
  readonly iconAlt: string;
}

export const serviceBlocksData: readonly ServiceBlockData[] = [
  {
    id: 'window-film-installation',
    title: 'Professional Window Film Installation',
    description: 'Expert installation services for commercial and residential window films with guaranteed results.',
    ctaText: 'Learn More',
    ctaHref: '/services/installation',
    iconClass: ServiceIcons.installer,
    iconAlt: 'Window film installation icon'
  },
  {
    id: 'protection-coverage',
    title: 'Comprehensive Protection Coverage',
    description: 'Full range of protection solutions including UV blocking, heat reduction, and security films.',
    ctaText: 'Explore Options',
    ctaHref: '/services/coverage',
    iconClass: ServiceIcons.carCoverage,
    iconAlt: 'Protection coverage icon'
  },
  {
    id: 'dealer-partnership',
    title: 'Become a Certified Dealer',
    description: 'Join our network of certified dealers and offer XPEL products to your customers.',
    ctaText: 'Apply Now',
    ctaHref: '/become-a-dealer',
    iconClass: ServiceIcons.dealer,
    iconAlt: 'Dealer partnership icon'
  }
]; 