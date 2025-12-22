import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function YouthEmpowermentEventsPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection
        title={t(locale, "pages.youthEventsTitle")}
        description={t(locale, "pages.youthEventsDesc")}
      />
      <ContentSection content={t(locale, "pages.youthEventsContent")} />
    </>
  );
}
