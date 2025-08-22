import BecomeAnInstaller from "@/components/pages/Become-an-installer";

interface BecomeAnInstallerPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function BecomeAnInstallerPage({ params }: BecomeAnInstallerPageProps) {
  return (
    <BecomeAnInstaller country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 