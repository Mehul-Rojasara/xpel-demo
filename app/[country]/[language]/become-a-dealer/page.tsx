import BecomeDealer from "@/components/pages/Become-a-dealer";

interface BecomeDealerPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function BecomeDealerPage({ params }: BecomeDealerPageProps) {
  return (
    <BecomeDealer country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 