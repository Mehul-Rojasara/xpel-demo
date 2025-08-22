import SingleProductPpf from "@/components/pages/SingleProductPpfPage";
import { productCategoryData } from "@/config/productCategoryData";

interface SingleProductPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function SingleProductPage({ params }: SingleProductPageProps) {
  return (
    <SingleProductPpf country={(await params).country} language={(await params).language}   faqTitle={productCategoryData.faqTitle}
            faqDescription={productCategoryData.faqDescription}
            faqs={productCategoryData.faqs}
            seeAllFaqsHref="/faqs"
            faqAnchorId={productCategoryData.faqAnchorId}
            />
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 