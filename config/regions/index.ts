export interface CountryConfig {
  readonly code: string;
  readonly name: string;
  readonly defaultLanguage: string;
  readonly supportedLanguages: readonly string[];
  readonly currency: string;
  readonly timezone: string;
  readonly phoneCode: string;
  readonly bigcommerceStoreId?: string;
  readonly contentstackLocale?: string;
}

export const countryConfigs: Record<string, CountryConfig> = {
  us: {
    code: 'us',
    name: 'United States',
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'es'],
    currency: 'USD',
    timezone: 'America/New_York',
    phoneCode: '+1',
    bigcommerceStoreId: 'us-store',
    contentstackLocale: 'en-us',
  },
  ca: {
    code: 'ca',
    name: 'Canada',
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'fr'],
    currency: 'CAD',
    timezone: 'America/Toronto',
    phoneCode: '+1',
    bigcommerceStoreId: 'ca-store',
    contentstackLocale: 'en-ca',
  },
  uk: {
    code: 'uk',
    name: 'United Kingdom',
    defaultLanguage: 'en',
    supportedLanguages: ['en'],
    currency: 'GBP',
    timezone: 'Europe/London',
    phoneCode: '+44',
    bigcommerceStoreId: 'uk-store',
    contentstackLocale: 'en-gb',
  },
  au: {
    code: 'au',
    name: 'Australia',
    defaultLanguage: 'en',
    supportedLanguages: ['en'],
    currency: 'AUD',
    timezone: 'Australia/Sydney',
    phoneCode: '+61',
    bigcommerceStoreId: 'au-store',
    contentstackLocale: 'en-au',
  },
  de: {
    code: 'de',
    name: 'Germany',
    defaultLanguage: 'de',
    supportedLanguages: ['de', 'en'],
    currency: 'EUR',
    timezone: 'Europe/Berlin',
    phoneCode: '+49',
    bigcommerceStoreId: 'de-store',
    contentstackLocale: 'de-de',
  },
  fr: {
    code: 'fr',
    name: 'France',
    defaultLanguage: 'fr',
    supportedLanguages: ['fr', 'en'],
    currency: 'EUR',
    timezone: 'Europe/Paris',
    phoneCode: '+33',
    bigcommerceStoreId: 'fr-store',
    contentstackLocale: 'fr-fr',
  },
  es: {
    code: 'es',
    name: 'Spain',
    defaultLanguage: 'es',
    supportedLanguages: ['es', 'en'],
    currency: 'EUR',
    timezone: 'Europe/Madrid',
    phoneCode: '+34',
    bigcommerceStoreId: 'es-store',
    contentstackLocale: 'es-es',
  },
};

export async function getCountryConfig(countryCode: string): Promise<CountryConfig> {
  const config = countryConfigs[countryCode.toLowerCase()];
  if (!config) {
    throw new Error(`Unsupported country: ${countryCode}`);
  }
  return config;
}

export function getAllCountries(): CountryConfig[] {
  return Object.values(countryConfigs);
} 