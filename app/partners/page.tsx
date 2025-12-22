import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { PartnersLogosSection } from "@/components/sections/PartnersLogosSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function PartnersPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.partnersTitle")} 
        description={t(locale, "pages.partnersDesc")}
      />
      <PartnersLogosSection />
      <ContentSection content={t(locale, "pages.partnersContent")} />
    </>
  );
}
