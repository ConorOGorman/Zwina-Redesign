import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function TermsPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection title={t(locale, "pages.termsTitle")} />
      <ContentSection content="[Terms of Service Placeholder Text - Legal compliance text would go here]" />
    </>
  );
}
