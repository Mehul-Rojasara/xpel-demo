import Management from "@/components/pages/Management";

interface ManagementPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function ManagementPage({ params }: ManagementPageProps) {
  return (
    <Management country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 