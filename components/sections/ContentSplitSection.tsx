import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import Image from "next/image";
import React from "react";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export const ContentSplitSection: React.FC = () => {
  const locale = getLocale();
  return (
    <Section className="bg-secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-foreground/15 bg-surface">
              <Image
                src="/images/projects/Products/Jacket%20Safi.png"
                alt="Jacket Safi"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
          <div className="order-1 lg:order-2">
            <Typography variant="h2" className="mb-8">
              {t(locale, "home.handcrafted.titleA")} <br />
              <span className="italic text-primary">{t(locale, "home.handcrafted.titleB")}</span>
            </Typography>
            <Typography variant="body" className="mb-8 text-lg">
              {t(locale, "home.handcrafted.body")}
            </Typography>
            <Button asChild variant="outline" effect="none">
              <Link href="/shop" className="no-underline">
                {t(locale, "home.handcrafted.cta")}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
