import { SearchResult } from "@/components/pages/SearchResult";

interface SearchResultPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function SearchResultPage({ params }: SearchResultPageProps) {
  return (
    <SearchResult country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 