import { ReactNode } from 'react';
interface CountryLayoutProps {
  children: ReactNode;
  params: Promise<{
    country: string;
  }>;
}

export default async function CountryLayout({ children, params }: CountryLayoutProps) {
  const resolvedParams = await params;

  return (
    <div className="min-h-screen flex flex-col" data-country={resolvedParams.country}>
      {children}
    </div>
  );
}

export async function generateStaticParams() {
  // Generate static params for all supported countries
  return [
    { country: 'us' },
    { country: 'ca' },
    { country: 'uk' },
    { country: 'au' },
    { country: 'de' },
    { country: 'fr' },
    { country: 'es' },
  ];
} 