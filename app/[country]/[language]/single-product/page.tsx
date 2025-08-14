import SingleProductPpf from "@/components/pages/SingleProductPpfPage";

interface SingleProductPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function SingleProductPage({ params }: SingleProductPageProps) {
  return (
    <SingleProductPpf country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 