import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { VisionStatsSection } from "@/components/sections/VisionStatsSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function ImpactPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.impactTitle")} 
        description={t(locale, "pages.impactDesc")}
      />
      <VisionStatsSection />
      <ContentSection content={t(locale, "pages.impactContent")} />
    </>
  );
}
