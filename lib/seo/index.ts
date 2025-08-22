import { Metadata } from 'next';
import { getCountryConfig } from '@/config/regions';
import { getLanguageConfig } from '@/config/languages';

export interface SEOConfig {
  readonly title: string;
  readonly description: string;
  readonly keywords?: readonly string[];
  readonly ogImage?: string;
  readonly canonical?: string;
  readonly hreflang?: Record<string, string>;
}

export async function generateMetadata(
  country: string,
  language: string,
  slug: string
): Promise<Metadata> {
  const countryConfig = await getCountryConfig(country);
  const languageConfig = await getLanguageConfig(language);
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xpel.com';
  const url = `${baseUrl}/${country}/${language}/${slug}`;
  
  const title = `${slug.charAt(0).toUpperCase() + slug.slice(1)} | XPEL ${countryConfig.name}`;
  const description = `XPEL ${countryConfig.name} - ${slug} page`;
  
  const hreflang: Record<string, string> = {};
  
  // Generate hreflang for all supported language combinations
  Object.keys(countryConfig.supportedLanguages).forEach(lang => {
    hreflang[lang] = `${baseUrl}/${country}/${lang}/${slug}`;
  });

  return {
    title,
    description,
    keywords: ['XPEL', countryConfig.name, languageConfig.name],
    openGraph: {
      title,
      description,
      url,
      siteName: 'XPEL',
      locale: `${language}_${country.toUpperCase()}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: hreflang,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStructuredData(country: string, language: string, slug: string) {
  const countryConfig = await getCountryConfig(country);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xpel.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${slug} | XPEL ${countryConfig.name}`,
    url: `${baseUrl}/${country}/${language}/${slug}`,
    inLanguage: language,
    isPartOf: {
      '@type': 'WebSite',
      name: `XPEL ${countryConfig.name}`,
      url: `${baseUrl}/${country}/${language}`,
    },
  };
} 