import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import React from "react";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export const CtaSection: React.FC = () => {
  const locale = getLocale();

  return (
    <Section className="text-center border-t border-foreground/10">
      <Container className="max-w-3xl">
        <Typography variant="h2" className="mb-8">
          {t(locale, "cta.ready")}
        </Typography>
        <Typography variant="body" className="mb-12 text-xl text-muted-foreground">
          {t(locale, "cta.body")}
        </Typography>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button variant="outline" asChild size="lg" effect="none">
            <Link href="https://www.instagram.com/zwina.foundation/" className="no-underline">
              Instagram
            </Link>
          </Button>
          <Button variant="primary" asChild size="lg" effect="none">
            <Link href="https://wa.me/393493804960" className="no-underline">
              WhatsApp
            </Link>
          </Button>
        </div>

        <Typography variant="caption" className="text-muted-foreground max-w-md mx-auto block">
          {t(locale, "cta.note")}
        </Typography>
      </Container>
    </Section>
  );
};
