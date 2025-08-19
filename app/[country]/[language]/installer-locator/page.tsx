import InstallerLocatorByLocation from "@/components/pages/InstallerLocatorByLocation";

interface InstallerLocatorPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function InstallerLocatorPage({ params }: InstallerLocatorPageProps) {
  return (
    <InstallerLocatorByLocation country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 