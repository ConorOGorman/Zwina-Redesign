import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { ContentSection } from "@/components/sections/ContentSection";
import Image from "next/image";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export default function MoroccoSewingPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection 
        title={t(locale, "pages.moroccoTitle")} 
        description={t(locale, "pages.moroccoDesc")}
      />
      <ContentSection>
        <div className="not-prose mb-10">
          <div className="relative aspect-video overflow-hidden bg-secondary">
            <Image
              src="/images/projects/Morocco/morocco-workshop-1.png"
              alt="Women participating in a sewing workshop in Talat'N Minoun, Morocco"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p>
          {t(locale, "pages.moroccoBody")}
        </p>
      </ContentSection>
    </>
  );
}
