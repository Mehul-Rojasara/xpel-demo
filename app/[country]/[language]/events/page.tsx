import Events from "@/components/pages/Events";

interface EventsPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function EventsPage({ params }: EventsPageProps) {
  return (
    <Events country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 