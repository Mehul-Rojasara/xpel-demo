import PartnerShipIndividual from "@/components/pages/PartnerShipIndividual";

interface PartnerShipIndividualPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function PartnerShipIndividualPage({ params }: PartnerShipIndividualPageProps) {
  return (
    <PartnerShipIndividual country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 