import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export type ProjectsGridSectionProps = {
  excludeLinks?: string[];
  variant?: "standalone" | "embedded";
  className?: string;
};

export const ProjectsGridSection: React.FC<ProjectsGridSectionProps> = ({
  excludeLinks = [],
  variant = "standalone",
  className,
}) => {
  const locale = getLocale();
  const isEmbedded = variant === "embedded";

  const projects: Array<{
    country: string;
    flag: string;
    title: string;
    description: string;
    link: string;
    imageSrc?: string;
    imageAlt?: string;
  }> = [
    {
      country: t(locale, "home.projects.cards.moroccoCountry"),
      flag: "🇲🇦",
      title: t(locale, "home.projects.cards.moroccoTitle"),
      description: t(locale, "home.projects.cards.moroccoDesc"),
      link: "/projects/morocco-sewing",
      imageSrc: "/images/projects/Morocco/morocco-workshop-1.png",
      imageAlt: "Women participating in a sewing workshop in Talat'N Minoun, Morocco"
    },
    {
      country: t(locale, "home.projects.cards.bangladeshCountry"),
      flag: "🇧🇩",
      title: t(locale, "home.projects.cards.bangladeshTitle"),
      description: t(locale, "home.projects.cards.bangladeshDesc"),
      link: "/projects/bangladesh-english",
      imageSrc: "/images/projects/Bangladesh/bangladesh-classroom-2.jpeg",
      imageAlt: "Students in an English classroom in Bangladesh"
    },
    {
      country: t(locale, "home.projects.cards.hagueCountry"),
      flag: "🇳🇱",
      title: t(locale, "home.projects.cards.hagueTitle"),
      description: t(locale, "home.projects.cards.hagueDesc"),
      link: "/projects/youth-empowerment-events",
      imageSrc: "/images/projects/Youth%20Empowerment%20events/Empowerment-and-Participation.jpg",
      imageAlt: "Youth empowerment workshop in The Hague"
    },
    {
      country: t(locale, "home.projects.cards.europeCountry"),
      flag: "🌍",
      title: t(locale, "home.projects.cards.europeTitle"),
      description: t(locale, "home.projects.cards.europeDesc"),
      link: "/projects/zwina-challenge",
      imageSrc: "/images/projects/Zwina%20Challenge/zwina-challenge-CTr7CwXX.jpg",
      imageAlt: "The Zwina Challenge program"
    }
  ];

  const filteredProjects = projects.filter((p) => !excludeLinks.includes(p.link));

  const topProjects = filteredProjects.slice(0, 2);
  const bottomProjects = filteredProjects.slice(2);

  const renderProjectCard = (project: (typeof projects)[number], index: number, priority: boolean) => (
    <Reveal key={`${project.link}-${index}`} as="div" delay={0.02 + index * 0.04}>
      <div className="group relative transition-transform duration-500 ease-default hover:-translate-y-1">
        <div className="aspect-video bg-secondary mb-6 overflow-hidden">
        {project.imageSrc ? (
          <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority={priority}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-foreground/5 group-hover:scale-105 transition-transform duration-700" />
        )}
        </div>
        <div className="flex items-baseline gap-4 mb-4">
          <Typography variant="caption" className="text-accent">{project.country}</Typography>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>
        <Typography variant="h3" className="mb-4 group-hover:text-accent transition-colors">{project.title}</Typography>
        <Typography variant="body" className="mb-6 max-w-md">
          {project.description}
        </Typography>
        <Link href={project.link} className="inline-flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors">
          {t(locale, "home.projects.readCaseStudy")} <span className="ml-2">→</span>
        </Link>
      </div>
    </Reveal>
  );

  return (
    <Section
      spacing={isEmbedded ? "md" : "lg"}
      className={cn(!isEmbedded && "border-t border-black/5", className)}
    >
      <Container>
        {!isEmbedded && (
          <div className="flex justify-between items-end mb-16">
            <Typography variant="h2">{t(locale, "home.projects.title")}</Typography>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link href="/projects" className="no-underline">{t(locale, "home.projects.viewAll")}</Link>
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topProjects.map((project, index) => renderProjectCard(project, index, index === 0))}
        </div>

        {bottomProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bottomProjects.map((project, index) => renderProjectCard(project, index + topProjects.length, false))}
          </div>
        )}
      </Container>
    </Section>
  );
};
