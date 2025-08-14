export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  dateFormat: string;
  numberFormat: {
    decimal: string;
    thousands: string;
    currency: string;
  };
}

export const languageConfigs: Record<string, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    dateFormat: 'MM/DD/YYYY',
    numberFormat: {
      decimal: '.',
      thousands: ',',
      currency: '$',
    },
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: {
      decimal: ',',
      thousands: '.',
      currency: '€',
    },
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: {
      decimal: ',',
      thousands: ' ',
      currency: '€',
    },
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: {
      decimal: ',',
      thousands: '.',
      currency: '€',
    },
  },
};

export async function getLanguageConfig(languageCode: string): Promise<LanguageConfig> {
  const config = languageConfigs[languageCode.toLowerCase()];
  if (!config) {
    throw new Error(`Unsupported language: ${languageCode}`);
  }
  return config;
}

export function getAllLanguages(): LanguageConfig[] {
  return Object.values(languageConfigs);
}

export function getSupportedLanguages(): string[] {
  return Object.keys(languageConfigs);
} 