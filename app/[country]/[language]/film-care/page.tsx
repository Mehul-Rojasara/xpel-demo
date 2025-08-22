import { FilmCare } from "@/components/pages/FilmCare";

interface FilmCarePageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function FilmCarePage({ params }: FilmCarePageProps) {
  return (
    <FilmCare country={(await params).country} language={(await params).language}/>
  );
}

// Page metadata for SEO and browser tab title
export const metadata = {
  title: 'XPEL - Film Care',
  description: 'Learn about XPEL film care and maintenance solutions for optimal performance and longevity.'
};

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 