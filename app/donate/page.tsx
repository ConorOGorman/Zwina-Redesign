import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";

export default function DonatePage() {
  return (
    <>
      <PageHeaderSection 
        title="Donate" 
        description="Your contribution helps us empower more communities and inspire more generations."
      />
      <ContentSection>
        <div className="text-center space-y-8">
          <p className="text-lg">
            We rely on the generosity of individuals like you to fund our projects in Morocco, Bangladesh, and beyond.
            100% of your donation goes directly to the field.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#" className="text-white no-underline hover:text-white">Donate via PayPal</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#" className="no-underline">Bank Transfer</Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
