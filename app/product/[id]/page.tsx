import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <PageHeaderSection 
        title={`Product Details (ID: ${params.id})`} 
        description="Handcrafted with care."
      />
      <ContentSection content="Product description, materials, and sizing information." />
      <CtaSection />
    </>
  );
}
