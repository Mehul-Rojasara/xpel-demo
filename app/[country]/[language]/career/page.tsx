import Career from "@/components/pages/Career";

interface CareerPagePageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function CareerPage({ params }: CareerPagePageProps) {
  return (
    <Career country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 