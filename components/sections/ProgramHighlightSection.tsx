import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import Image from "next/image";
import React from "react";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export const ProgramHighlightSection: React.FC = () => {
  const locale = getLocale();
  return (
    <Section className="bg-secondary relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <Typography variant="caption" className="text-accent mb-4 block">
              {t(locale, "home.incubator.caption")}
            </Typography>
            <Typography variant="h2" className="mb-8">
              {t(locale, "home.incubator.titleA")} <br />
              {t(locale, "home.incubator.titleB")}
            </Typography>
            <Typography variant="body" className="mb-8 text-lg">
              {t(locale, "home.incubator.body")}
            </Typography>
            
            <ul className="space-y-6 mb-12 border-l border-foreground/10 pl-8">
              <li className="flex flex-col">
                <Typography variant="h6" className="text-foreground mb-1">{t(locale, "home.incubator.mentorshipTitle")}</Typography>
                <Typography variant="body-sm">{t(locale, "home.incubator.mentorshipDesc")}</Typography>
              </li>
              <li className="flex flex-col">
                <Typography variant="h6" className="text-foreground mb-1">{t(locale, "home.incubator.handsOnTitle")}</Typography>
                <Typography variant="body-sm">{t(locale, "home.incubator.handsOnDesc")}</Typography>
              </li>
              <li className="flex flex-col">
                <Typography variant="h6" className="text-foreground mb-1">{t(locale, "home.incubator.accessTitle")}</Typography>
                <Typography variant="body-sm">{t(locale, "home.incubator.accessDesc")}</Typography>
              </li>
            </ul>

            <Button asChild variant="primary" effect="none">
              <Link href="/projects/zwina-challenge" className="no-underline">
                {t(locale, "home.incubator.learnMore")}
              </Link>
            </Button>
          </div>
          <div className="aspect-[4/5] bg-foreground/5 rounded-sm border border-foreground/10 relative overflow-hidden group">
            <Image
              src="/images/projects/Products/933dbb93-fc90-4ca9-a1e2-8c92aa7a3350.png"
              alt="Zwina Challenge"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
