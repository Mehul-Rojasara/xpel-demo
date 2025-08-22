import { TechnicalDataSheet } from "@/components/pages/TechnicalDataSheet";

interface TechnicalDataSheetPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function TechnicalDataSheetPage({ params }: TechnicalDataSheetPageProps) {
  return (
    <TechnicalDataSheet country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 