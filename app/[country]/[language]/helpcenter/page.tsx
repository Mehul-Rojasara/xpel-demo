import HelpCenter from "@/components/pages/HelpCenter";

interface HelpCenterPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function InstallerLocatorPage({ params }: HelpCenterPageProps) {
  return (
    <HelpCenter country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 