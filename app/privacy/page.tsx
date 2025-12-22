import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function PrivacyPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection title={t(locale, "pages.privacyTitle")} />
      <ContentSection content="[Privacy Policy Placeholder Text - Legal compliance text would go here]" />
    </>
  );
}
