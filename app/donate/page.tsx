import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function DonatePage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.donateTitle")} 
        description={t(locale, "pages.donateDesc")}
      />
      <ContentSection>
        <div className="text-center space-y-8">
          <p className="text-lg">
            {t(locale, "pages.donateBody")}
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild effect="none">
              <Link href="#" className="text-white no-underline hover:text-white">{t(locale, "pages.donatePaypal")}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild effect="none">
              <Link href="#" className="no-underline">{t(locale, "pages.donateBank")}</Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
