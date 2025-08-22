import TrainingCertificate from "@/components/pages/TrainingCertification";

interface TrainingCertificationPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function TrainingCertificationPage({ params }: TrainingCertificationPageProps) {
  return (
    <TrainingCertificate country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 