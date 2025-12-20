import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { VisionStatsSection } from "@/components/sections/VisionStatsSection";
import { ContentSection } from "@/components/sections/ContentSection";

export default function ImpactPage() {
  return (
    <>
      <PageHeaderSection 
        title="Our Impact" 
        description="Measuring the change we create together."
      />
      <VisionStatsSection />
      <ContentSection content="Detailed impact reports and stories will be available here soon." />
    </>
  );
}
