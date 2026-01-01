import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";
import { partners } from "@/lib/data/partners";

export const PartnersLogosSection: React.FC = () => {
  const locale = getLocale();

  const defaultLogoClassName = "object-contain transition-opacity opacity-70 hover:opacity-100";
  const defaultLogoSizes = "(min-width: 1024px) 180px, (min-width: 640px) 200px, 40vw";

  const topPartners = partners.slice(0, 4);
  const bottomPartners = partners.slice(4);

  return (
    <Section className="border-t border-foreground/10">
      <Container>
        <Typography variant="caption" className="text-center mb-12 block text-muted-foreground">
          {t(locale, "home.trustedBy")}
        </Typography>

        <div className="mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-x-10 md:gap-x-16 gap-y-10">
            {topPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default"
              >
                {partner.logoSrc ? (
                  <div className={cn("relative h-8 w-[180px] max-w-[40vw]", partner.logoContainerClassName)}>
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      fill
                      sizes={partner.logoSizes ?? defaultLogoSizes}
                      unoptimized={partner.unoptimized}
                      className={cn(defaultLogoClassName, partner.logoImageClassName)}
                    />
                  </div>
                ) : (
                  <div className="text-sm uppercase tracking-widest">{partner.name}</div>
                )}
              </div>
            ))}
          </div>

          {bottomPartners.length > 0 && (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 items-center justify-items-center gap-x-10 md:gap-x-16 gap-y-10">
              {bottomPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {partner.logoSrc ? (
                    <div className={cn("relative h-8 w-[180px] max-w-[40vw]", partner.logoContainerClassName)}>
                      <Image
                        src={partner.logoSrc}
                        alt={partner.name}
                        fill
                        sizes={partner.logoSizes ?? defaultLogoSizes}
                        unoptimized={partner.unoptimized}
                        className={cn(defaultLogoClassName, partner.logoImageClassName)}
                      />
                    </div>
                  ) : (
                    <div className="text-sm uppercase tracking-widest">{partner.name}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
