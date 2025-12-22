import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ProjectsGridSection } from "@/components/sections/ProjectsGridSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function ProjectsPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.projectsTitle")} 
        description={t(locale, "pages.projectsDesc")}
      />
      <ProjectsGridSection variant="embedded" />
      <NewsletterSection />
    </>
  );
}
