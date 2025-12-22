import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function BangladeshEnglishPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.bangladeshTitle")} 
        description={t(locale, "pages.bangladeshDesc")}
      />
      <ContentSection content={t(locale, "pages.bangladeshContent")} />
    </>
  );
}
