import SingleProductPpf from "@/components/pages/SingleProductPpfPage";
import { productCategoryData } from "@/config/productCategoryData";

export default async function SingleProductPage() {
  return (
    <SingleProductPpf faqTitle={productCategoryData.faqTitle}
            faqDescription={productCategoryData.faqDescription}
            faqs={productCategoryData.faqs}
            seeAllFaqsHref="/faqs"
            faqAnchorId={productCategoryData.faqAnchorId}
            />
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 