"use client";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import React from "react";
import Image from "next/image";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { t } from "@/lib/i18n/t";

type MarqueeImage = {
  src: string;
  alt: string;
};

function MarqueeColumn({
  images,
  direction,
  priorityFirstImage,
}: {
  images: MarqueeImage[];
  direction: "up" | "down";
  priorityFirstImage?: boolean;
}) {
  const loop = [...images, ...images];

  return (
    <div className="relative h-full overflow-hidden">
      <div className={direction === "up" ? "hero-marquee-up" : "hero-marquee-down"}>
        <div className="flex flex-col gap-4 md:gap-5">
          {loop.map((img, idx) => (
            <div key={`${img.src}-${idx}`} className="relative overflow-hidden h-72 md:h-80">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 280px, 0px"
                className="object-cover"
                unoptimized
                priority={priorityFirstImage && idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const HeroSection: React.FC = () => {
  const { locale } = useLocale();
  const leftColumn: MarqueeImage[] = [
    { src: "/images/projects/Products/Fez Bomber.png", alt: "Fez Bomber" },
    { src: "/images/projects/Products/Desert Coat.png", alt: "Desert Coat" },
    { src: "/images/projects/Products/Blazer Ourzazate.png", alt: "Blazer Ourzazate" },
    { src: "/images/projects/Products/Jacket Safi.png", alt: "Jacket Safi" },
    { src: "/images/projects/Products/Pants Taghazut.png", alt: "Pants Taghazut" },
    { src: "/images/projects/Products/Lino Outfit.png", alt: "Lino Outfit" },
  ];

  const rightColumn: MarqueeImage[] = [
    { src: "/images/projects/Products/African Coffee Coat.png", alt: "African Coffee Coat" },
    { src: "/images/projects/Products/Salopette Marrakesh.png", alt: "Salopette Marrakesh" },
    { src: "/images/projects/Products/Essauria.png", alt: "Essauria" },
    { src: "/images/projects/Products/Blazer Agadir.png", alt: "Blazer Agadir" },
    { src: "/images/projects/Products/Blazer ourzazate.png", alt: "Blazer ourzazate" },
    { src: "/images/projects/Products/A Walk in the spring.png", alt: "A Walk in the spring" },
  ];

  return (
    <Section className="relative overflow-hidden bg-secondary pt-[93px] pb-16 lg:pt-[109px] lg:pb-20">
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="max-w-xl">
              <Reveal as="div" delay={0.02}>
                <Typography variant="caption" className="text-primary mb-6 block font-medium tracking-widest">
                  {t(locale, "home.hero.caption")}
                </Typography>
              </Reveal>

              <Reveal as="div" delay={0.08}>
                <Typography
                  variant="h1"
                  className="mb-7 leading-[1.05] text-5xl md:text-6xl lg:text-7xl"
                >
                  {t(locale, "home.hero.titleA")} <br />
                  <span className="text-primary italic font-serif pr-4">{t(locale, "home.hero.titleB")}</span>
                  <span className="text-primary"> {t(locale, "home.hero.titleAnd")}</span> <br />
                  {t(locale, "home.hero.titleC")}
                </Typography>
              </Reveal>

              <Reveal as="div" delay={0.14}>
                <Typography variant="body" className="mb-10 text-lg md:text-xl text-primary/90">
                  {t(locale, "home.hero.body")}
                </Typography>
              </Reveal>

              <Reveal as="div" delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" asChild variant="primary" effect="sweep">
                    <Link href="/projects" className="no-underline">
                      {t(locale, "home.hero.ctaProjects")}
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-primary/30 text-primary hover:bg-primary/5"
                  >
                    <Link href="/about" className="no-underline">
                      {t(locale, "home.hero.ctaStory")}
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6">
            <Reveal as="div" delay={0.1}>
              <div className="mx-auto w-full max-w-xl">
                <div aria-label="Hero image collage" className="relative">
                  <div className="hero-collage-fade grid grid-cols-2 gap-4 md:gap-5 h-[600px] md:h-[680px]">
                    <MarqueeColumn images={leftColumn} direction="up" priorityFirstImage />
                    <MarqueeColumn images={rightColumn} direction="down" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
};
