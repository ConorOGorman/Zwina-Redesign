import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function ZwinaChallengePage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.challengeTitle")} 
        description={t(locale, "pages.challengeDesc")}
      />
      <ContentSection content={t(locale, "pages.challengeContent")} />
    </>
  );
}
