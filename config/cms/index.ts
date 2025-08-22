export interface CMSConfig {
  readonly contentstack: {
    readonly apiKey: string;
    readonly deliveryToken: string;
    readonly environment: string;
    readonly managementToken?: string;
    readonly region: string;
  };
  readonly contentTypes: {
    readonly page: string;
    readonly product: string;
    readonly category: string;
    readonly blog: string;
    readonly navigation: string;
  };
}

export const cmsConfig: CMSConfig = {
  contentstack: {
    apiKey: process.env.CONTENTSTACK_API_KEY || '',
    deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN || '',
    environment: process.env.CONTENTSTACK_ENVIRONMENT || 'development',
    managementToken: process.env.CONTENTSTACK_MANAGEMENT_TOKEN || '',
    region: process.env.CONTENTSTACK_REGION || 'us',
  },
  contentTypes: {
    page: 'page',
    product: 'product',
    category: 'category',
    blog: 'blog_post',
    navigation: 'navigation',
  },
};

export function getCMSConfig(): CMSConfig {
  return cmsConfig;
}

export function validateCMSConfig(): boolean {
  const config = getCMSConfig();
  return !!(config.contentstack.apiKey && config.contentstack.deliveryToken);
} 