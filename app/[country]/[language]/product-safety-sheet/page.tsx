import ProductSafetySheet from "@/components/pages/ProductSafetySheet";

interface ProductSafetySheetPageProps {
  params: Promise<{
    country: string;
    language: string;
  }>;
}

export default async function ProductSafetySheetPage({ params }: ProductSafetySheetPageProps) {
  return (
    <ProductSafetySheet country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 