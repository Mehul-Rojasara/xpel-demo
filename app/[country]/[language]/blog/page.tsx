import Blog from "@/components/pages/Blog";

interface BlogPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  return (
    <Blog country={(await params).country} language={(await params).language}/>
  );
}

// ISR Configuration - revalidate every 60 seconds
export const revalidate = 60; 