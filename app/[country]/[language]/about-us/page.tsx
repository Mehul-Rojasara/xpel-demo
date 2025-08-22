import AboutUs from "@/components/pages/AboutUsPage";

interface AboutUsPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function AboutUsPage({ params }: AboutUsPageProps) {
  return (
    <AboutUs params={params}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 