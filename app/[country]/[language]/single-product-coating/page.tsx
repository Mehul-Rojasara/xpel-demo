import SingleProductCoating from "@/components/pages/SingleProductPageCoating";

interface SingleProductCoatingPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function SingleProductCoatingPage({ params }: SingleProductCoatingPageProps) {
  return (
    <SingleProductCoating country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 