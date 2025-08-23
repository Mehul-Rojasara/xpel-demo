
import { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';

export interface ModularBlock {
  readonly id: string;
  readonly __typename: string;
  readonly mill?: {
    readonly hero: {
      readonly title: string;
      readonly subtitle: string;
      readonly cta_text: string;
      readonly cta_link?: {
        readonly title: string;
        readonly href: string;
      };
    };
  };
}

interface PageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
    readonly slug?: readonly string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') ?? 'home';
  
  try {
    // If this is the homepage, fetch homepage data from Contentstack
    if (slug === 'home' || slug === '') {
      const homepageResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/contentstack/homepage?locale=${resolvedParams.language}`,
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
    }
    
    // For about-us page
    if (slug === 'about-us' || slug === 'about') {
      return {
        title: 'About Us - XPEL',
        description: 'Learn about XPEL and our commitment to providing premium paint protection film and ceramic coating solutions.',
        openGraph: {
          title: 'About Us - XPEL',
          description: 'Learn about XPEL and our commitment to providing premium paint protection film and ceramic coating solutions.',
        },
      };
    }
    
    // For other pages, use slug-based title
    const pageTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return {
      title: `${pageTitle} - XPEL`,
      description: `XPEL ${pageTitle} - Premium paint protection film and ceramic coating solutions.`,
      openGraph: {
        title: `${pageTitle} - XPEL`,
        description: `XPEL ${pageTitle} - Premium paint protection film and ceramic coating solutions.`,
      },
    };
  } catch {
    // Fallback metadata - error handling without using the error variable
  }
  
  return {
    title: 'XPEL - Paint Protection Film and Ceramic Coating',
    description: 'XPEL provides premium paint protection film and ceramic coating solutions for vehicles.',
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') ?? 'home';
  
  // If this is the homepage, render the HomePage component
  if (slug === 'home' || slug === '') {
    return (
      <HomePage 
        country={resolvedParams.country} 
        language={resolvedParams.language}
      />
    );
  }
  
  // Define known/valid routes that should be handled by this dynamic page
  const knownRoutes = [
    'about-us',
    'about',
    'products',
    'services',
    'contact',
    'faqs',
    'for-business',
    'installer-locator'
  ];
  
  // If this is a known route, show the "not implemented" message
  if (knownRoutes.includes(slug)) {
    return (
      <div className="dynamic-page bg-gray-100 m-4 rounded-lg p-10">
        <h1>Page: {slug}</h1>
        <p>Country: {resolvedParams.country}</p>
        <p>Language: {resolvedParams.language}</p>
        <p>This page is not yet implemented.</p>
      </div>
    );
  }
  
  // For unknown routes, show the proper 404 page content directly
  // Import the NotFoundPage component and render it
  const { default: NotFoundPage } = await import('../not-found');
  return <NotFoundPage params={Promise.resolve(resolvedParams)} />;
}

// ISR Configuration - revalidate every 60 seconds (1 minute)
export const revalidate = 60;

export async function generateStaticParams() {
  // Generate static params for common pages
  const countries = ['us', 'ca', 'uk', 'au', 'de', 'fr', 'es'];
  const languages = ['en', 'es', 'fr', 'de'];
  const commonPages = ['', 'about', 'about-us', 'contact', 'products', 'services'];
  
  return countries.flatMap(country => 
    languages.flatMap(language => 
      commonPages.map(page => ({
        country,
        language,
        slug: page ? [page] : [],
      }))
    )
  );
} 