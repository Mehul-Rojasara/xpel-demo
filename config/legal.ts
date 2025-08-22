export interface LegalPolicy {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

export const LEGAL_POLICIES: LegalPolicy[] = [
  {
    id: 'data-privacy',
    title: 'Data Privacy Notice',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/data-privacy'
  },
  {
    id: 'employee-privacy',
    title: 'Employee Privacy Notice',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/employee-privacy'
  },
  {
    id: 'ca-privacy',
    title: 'Privacy Notice - CA Residents',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/ca-privacy'
  },
  {
    id: 'slavery-trafficking',
    title: 'Statement on Slavery & Human Trafficking',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/slavery-trafficking'
  },
  {
    id: 'california-transparency',
    title: 'California Transparency Act',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/california-transparency'
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/cookie-policy'
  },
  {
    id: 'terms-conditions',
    title: 'Terms & Conditions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/terms-conditions'
  },
  {
    id: 'software-agreement',
    title: 'Software Use Agreement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/legal/software-agreement'
  }
];

export const LEGAL_PAGE_CONFIG = {
  title: 'Legal',
  subtitle: 'Collection of XPEL\'s terms, policies and agreements'
}; 