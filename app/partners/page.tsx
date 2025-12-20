import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { PartnersLogosSection } from "@/components/sections/PartnersLogosSection";
import { ContentSection } from "@/components/sections/ContentSection";

export default function PartnersPage() {
  return (
    <>
      <PageHeaderSection 
        title="Our Partners" 
        description="Collaborating for a better world."
      />
      <PartnersLogosSection />
      <ContentSection content="We work with organizations that share our vision for youth empowerment and community development." />
    </>
  );
}
