import PartnerShip from "@/components/pages/Partnership";

interface PartnerShipPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function PartnerShipPage({ params }: PartnerShipPageProps) {
  return (
    <PartnerShip country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 