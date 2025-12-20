import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import Image from "next/image";

export default function MoroccoSewingPage() {
  return (
    <>
      <PageHeaderSection 
        title="Morocco – Sewing & Social Business" 
        description="Empowering women in Talat'N Minoun through entrepreneurship."
      />
      <ContentSection>
        <div className="not-prose mb-10">
          <div className="relative aspect-video overflow-hidden bg-secondary">
            <Image
              src="/images/projects/Morocco/morocco-workshop-1.png"
              alt="Women participating in a sewing workshop in Talat'N Minoun, Morocco"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p>
          Project details, timeline, and impact metrics for the sewing initiative.
        </p>
      </ContentSection>
    </>
  );
}
