import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrollFillText } from "@/components/primitives/ScrollFillText";
import React from "react";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export const IntroValuesSection: React.FC = () => {
  const locale = getLocale();
  const ValueIcon: React.FC<{ kind: "youth" | "community" | "global"; className?: string }> = ({
    kind,
    className,
  }) => {
    switch (kind) {
      case "youth":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Rising spark */}
            <path d="M12 20v-8" />
            <path d="M8.5 15.5L12 12l3.5 3.5" />
            {/* Small starburst */}
            <path d="M12 4v2" />
            <path d="M6.5 6.5l1.4 1.4" />
            <path d="M17.5 6.5l-1.4 1.4" />
            <path d="M4 12h2" />
            <path d="M18 12h2" />
          </svg>
        );
      case "community":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Two people holding hands */}
            <circle cx="8" cy="8" r="2" />
            <circle cx="16" cy="8" r="2" />
            {/* Bodies */}
            <path d="M4.5 19c.6-2.7 1.8-4.5 3.5-4.5s2.9 1.8 3.5 4.5" />
            <path d="M13 19c.6-2.7 1.8-4.5 3.5-4.5s2.9 1.8 3.5 4.5" />
            {/* Arms meeting in the middle */}
            <path d="M7 15.5l3.5 2.5" />
            <path d="M17 15.5l-3.5 2.5" />
          </svg>
        );
      case "global":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Globe */}
            <circle cx="12" cy="12" r="8" />
            <path d="M4 12h16" />
            <path d="M12 4c2.2 2.1 3.5 4.9 3.5 8s-1.3 5.9-3.5 8" />
            <path d="M12 4C9.8 6.1 8.5 8.9 8.5 12s1.3 5.9 3.5 8" />
          </svg>
        );
      default:
        return null;
    }
  };

  const values = [
    {
      icon: "youth" as const,
      title: t(locale, "home.intro.values.youthTitle"),
      description: t(locale, "home.intro.values.youthDesc"),
    },
    {
      icon: "community" as const,
      title: t(locale, "home.intro.values.communityTitle"),
      description: t(locale, "home.intro.values.communityDesc"),
    },
    {
      icon: "global" as const,
      title: t(locale, "home.intro.values.globalTitle"),
      description: t(locale, "home.intro.values.globalDesc"),
    },
  ];

  return (
    <Section className="border-t border-foreground/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <Typography variant="h2" className="mb-4">
              {t(locale, "home.intro.title")}
            </Typography>
          </div>
          <div className="lg:col-span-8">
            <ScrollFillText
              as="p"
              text={t(locale, "home.intro.body")}
              className="m-0 text-2xl md:text-3xl leading-relaxed font-sans text-foreground-muted font-normal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {values.map((value, index) => (
            <Reveal key={value.title} as="div" delay={0.06 + index * 0.06}>
              <div className="p-12 bg-background hover:bg-secondary transition-colors duration-500 group">
                <div className="w-12 h-12 border border-foreground/15 rounded-full mb-8 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <ValueIcon kind={value.icon} className="h-5 w-5" />
                </div>
                <Typography variant="h4" className="mb-4 text-foreground">{value.title}</Typography>
                <Typography variant="body-sm">{value.description}</Typography>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
