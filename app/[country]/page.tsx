import { getCountryConfig } from '@/config/regions';
import { Metadata } from 'next';
import { ModularBlock } from './[language]/[[...slug]]/page';

interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  
  try {
    const countryConfig = await getCountryConfig(resolvedParams.country);
    const defaultLanguage = countryConfig.defaultLanguage;
    
    // Fetch homepage data to get the title
    const homepageResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/contentstack/homepage?locale=${defaultLanguage}`,
      { cache: 'no-store' }
    );
    
    if (homepageResponse.ok) {
      const homepageData = await homepageResponse.json();
      const title = homepageData.data?.all_homepage?.items?.[0]?.title || 'XPEL';
      const description = homepageData.data?.all_homepage?.items?.[0]?.description || 'XPEL - Paint Protection Film and Ceramic Coating';
      
      return {
        title: `${title} - XPEL`,
        description: description,
        openGraph: {
          title: `${title} - XPEL`,
          description: description,
        },
      };
    }
  } catch {
    // Fallback metadata
  }
  
  return {
    title: 'XPEL - Paint Protection Film and Ceramic Coating',
    description: 'XPEL provides premium paint protection film and ceramic coating solutions for vehicles.',
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const resolvedParams = await params;
  
  try {
    // Get country config to determine default language
    const countryConfig = await getCountryConfig(resolvedParams.country);
    const defaultLanguage = countryConfig.defaultLanguage;
    
    // Fetch homepage data using the default language
    const homepageResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/contentstack/homepage?locale=${defaultLanguage}`,
      { cache: 'no-store' }
    );
    
    if (homepageResponse.ok) {
      const homepageData = await homepageResponse.json();
    
      return (
        <div className="dynamic-page bg-gray-100 m-4 rounded-lg p-10">
          <h1>Homepage - {resolvedParams.country.toUpperCase()} ({defaultLanguage})</h1>
          <div className="homepage-content">
            <h2>Title: {homepageData.data?.all_homepage?.items?.[0]?.title || 'No title'}</h2>
            <p>Description: {homepageData.data?.all_homepage?.items?.[0]?.description || 'No description'}</p>
            
            {/* Display modular blocks */}
            {homepageData.data?.all_homepage?.items?.[0]?.modular_blocks?.map((block: ModularBlock, index: number) => {
              const typedBlock = block as { __typename: string; mill?: { hero: { title: string; subtitle: string; cta_text: string; cta_link?: { title: string; href: string } } } };
              return (
                <div key={index} className="modular-block">
                  <h3>Block Type: {typedBlock.__typename}</h3>
                  {typedBlock.mill?.hero && (
                    <div className="hero-section">
                      <h4>Hero Section</h4>
                      <p>Title: {typedBlock.mill.hero.title}</p>
                      <p>Subtitle: {typedBlock.mill.hero.subtitle}</p>
                      <p>CTA Text: {typedBlock.mill.hero.cta_text}</p>
                      <p>CTA Link: {typedBlock.mill.hero.cta_link?.title} - {typedBlock.mill.hero.cta_link?.href}</p>
                    </div>
                  )}
                </div>
              );
            })}
            
            <div className="system-info">
              <h3>System Info</h3>
              <p>Locale: {homepageData.data?.all_homepage?.items?.[0]?.system?.locale}</p>
              <p>Tags: {homepageData.data?.all_homepage?.items?.[0]?.system?.tags?.join(', ')}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dynamic-page bg-gray-100 m-4 rounded-lg p-10">
          <h1>Homepage - {resolvedParams.country.toUpperCase()} ({defaultLanguage})</h1>
          <p>Error: Failed to fetch homepage data (Status: {homepageResponse.status})</p>
          <p>Please check your Contentstack configuration and environment variables.</p>
        </div>
      );
    }
  } catch {
    // Fallback to English if country config not found
    const fallbackLanguage = 'en';
    
    const homepageResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/contentstack/homepage?locale=${fallbackLanguage}`,
      { cache: 'no-store' }
    );
    
    if (homepageResponse.ok) {
      const homepageData = await homepageResponse.json();
      
      return (
        <div className="dynamic-page bg-gray-100 m-4 rounded-lg p-10">
          <h1>Homepage - {resolvedParams.country.toUpperCase()} ({fallbackLanguage})</h1>
          <div className="homepage-content">
            <h2>Title: {homepageData.data?.all_homepage?.items?.[0]?.title || 'No title'}</h2>
            <p>Description: {homepageData.data?.all_homepage?.items?.[0]?.description || 'No description'}</p>
            
            {/* Display modular blocks */}
            {homepageData.data?.all_homepage?.items?.[0]?.modular_blocks?.map((block: ModularBlock, index: number) => {
              const typedBlock = block as { __typename: string; mill?: { hero: { title: string; subtitle: string; cta_text: string; cta_link?: { title: string; href: string } } } };
              return (
                <div key={index} className="modular-block">
                  <h3>Block Type: {typedBlock.__typename}</h3>
                  {typedBlock.mill?.hero && (
                    <div className="hero-section">
                      <h4>Hero Section</h4>
                      <p>Title: {typedBlock.mill.hero.title}</p>
                      <p>Subtitle: {typedBlock.mill.hero.subtitle}</p>
                      <p>CTA Text: {typedBlock.mill.hero.cta_text}</p>
                      <p>CTA Link: {typedBlock.mill.hero.cta_link?.title} - {typedBlock.mill.hero.cta_link?.href}</p>
                    </div>
                  )}
                </div>
              );
            })}
            
            <div className="system-info">
              <h3>System Info</h3>
              <p>Locale: {homepageData.data?.all_homepage?.items?.[0]?.system?.locale}</p>
              <p>Tags: {homepageData.data?.all_homepage?.items?.[0]?.system?.tags?.join(', ')}</p>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="dynamic-page bg-gray-100 m-4 rounded-lg p-10">
        <h1>Homepage - {resolvedParams.country.toUpperCase()} ({fallbackLanguage})</h1>
        <p>Error: Failed to fetch homepage data</p>
        <p>Please check your Contentstack configuration and environment variables.</p>
      </div>
    );
  }
}

export async function generateStaticParams() {
  // Generate static params for all supported countries
  const countries = ['us', 'ca', 'uk', 'au', 'de', 'fr', 'es'];
  
  return countries.map(country => ({
    country,
  }));
} 