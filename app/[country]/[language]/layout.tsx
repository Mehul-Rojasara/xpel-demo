import { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { NewHeader } from '@/components/layout/NewHeader';

interface LanguageLayoutProps {
  readonly children: ReactNode;
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function LanguageLayout({ children, params }: LanguageLayoutProps) {
  const resolvedParams = await params;

  return (
    <div className="language-layout" data-lang={resolvedParams.language}>
      <NewHeader />
      <main>
        {children}
      </main>
      <Footer 
        country={resolvedParams.country} 
        language={resolvedParams.language}
      />
    </div>
  );
}

export async function generateStaticParams() {
  // Generate static params for all supported language combinations
  const countries = ['us', 'ca', 'uk', 'au', 'de', 'fr', 'es'];
  const languages = ['en', 'es', 'fr', 'de'];
  
  return countries.flatMap(country => 
    languages.map(language => ({
      country,
      language,
    }))
  );
} 