import DapNext from "@/components/pages/DapNext";

interface DapNextPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function DapNextPage({ params }: DapNextPageProps) {
  return (
    <DapNext country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 