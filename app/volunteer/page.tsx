import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";

export default function VolunteerPage() {
  return (
    <>
      <PageHeaderSection 
        title="Volunteer" 
        description="Join our global team of changemakers."
      />
      <ContentSection>
        <div className="text-center">
          <p className="mb-8">
            Whether you have skills in marketing, project management, or just a passion for helping others,
            we have a place for you.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact" className="text-white no-underline hover:text-white">Apply Now</Link>
          </Button>
        </div>
      </ContentSection>
    </>
  );
}
