import { HeroSection } from "@/components/sections/HeroSection";
import { IntroValuesSection } from "@/components/sections/IntroValuesSection";
import { ProgramHighlightSection } from "@/components/sections/ProgramHighlightSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { VisionStatsSection } from "@/components/sections/VisionStatsSection";
import { ContentSplitSection } from "@/components/sections/ContentSplitSection";
import { ProductCarouselSection } from "@/components/sections/ProductCarouselSection";
import { PartnersLogosSection } from "@/components/sections/PartnersLogosSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroValuesSection />
      <VisionStatsSection />
      <ProjectsGridSection
        excludeLinks={["/projects/youth-empowerment-events", "/projects/zwina-challenge"]}
      />
      <ProgramHighlightSection />
      <CampaignSection />
      <ContentSplitSection />
      <ProductCarouselSection />
      <PartnersLogosSection />
    </>
  );
}
