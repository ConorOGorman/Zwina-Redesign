import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { ProgramHighlightSection } from "@/components/sections/ProgramHighlightSection";

export default function ProjectsPage() {
  return (
    <>
      <PageHeaderSection 
        title="Our Projects" 
        description="Discover how we are creating lasting impact through social entrepreneurship and education."
      />
      <ProjectsGridSection variant="embedded" />
      <ProgramHighlightSection />
    </>
  );
}
