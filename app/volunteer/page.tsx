import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function VolunteerPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.volunteerTitle")} 
        description={t(locale, "pages.volunteerDesc")}
      />
      <ContentSection>
        <div className="text-center">
          <p className="mb-8">
            {t(locale, "pages.volunteerBody")}
          </p>
          <Button size="lg" asChild effect="none">
            <Link href="/contact" className="text-white no-underline hover:text-white">{t(locale, "pages.volunteerApply")}</Link>
          </Button>
        </div>
      </ContentSection>
    </>
  );
}
