import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";

export default function UpcomingProjectsPage() {
  return (
    <>
      <PageHeaderSection 
        title="Upcoming Initiatives" 
        description="What's next for Zwina Foundation."
      />
      <ContentSection content="Sneak peeks at our future projects in new regions." />
    </>
  );
}
