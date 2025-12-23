import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";
import { ZwinaChallengeClient } from "./ZwinaChallengeClient";

export default function ZwinaChallengePage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.challengeTitle")} 
        description={t(locale, "pages.challengeDesc")}
      />
      <ZwinaChallengeClient />
    </>
  );
}
