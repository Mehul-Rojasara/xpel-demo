import Management from "@/components/pages/Management";

interface ManagementPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function ManagementPage({ params }: ManagementPageProps) {
  return (
    <Management country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 