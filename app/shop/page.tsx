import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ProductCarouselSection } from "@/components/sections/ProductCarouselSection";
import { ContentSplitSection } from "@/components/sections/ContentSplitSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function ShopPage() {
  return (
    <>
      <PageHeaderSection 
        title="Shop" 
        description="Support our mission by purchasing ethical, handcrafted goods."
      />
      <ProductCarouselSection />
      <ContentSplitSection />
      <CtaSection />
    </>
  );
}
