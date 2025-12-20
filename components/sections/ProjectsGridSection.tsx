import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

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
      country: "Morocco",
      flag: "🇲🇦",
      title: "Sewing & Social Business",
      description: "In the village of Talat'N Minoun, we trained 100 women in sewing and entrepreneurship through a 6-month course.",
      link: "/projects/morocco-sewing",
      imageSrc: "/images/projects/Morocco/morocco-workshop-1.png",
      imageAlt: "Women participating in a sewing workshop in Talat'N Minoun, Morocco"
    },
    {
      country: "Bangladesh",
      flag: "🇧🇩",
      title: "Global Language Bridge",
      description: "With only €1,000, we launched weekly online English classes for 120 orphaned children in partnership with the Bidyanondo Foundation.",
      link: "/projects/bangladesh-english",
      imageSrc: "/images/projects/Bangladesh/bangladesh-classroom-2.jpeg",
      imageAlt: "Students in an English classroom in Bangladesh"
    },
    {
      country: "The Hague, Netherlands",
      flag: "🇳🇱",
      title: "Youth Empowerment Events",
      description: "Two large events in The Hague with 400+ participants. Workshops on project design, storytelling, and cultural exchange with real-world impact.",
      link: "/projects/youth-empowerment-events",
      imageSrc: "/images/projects/Youth%20Empowerment%20events/Empowerment-and-Participation.jpg",
      imageAlt: "Youth empowerment workshop in The Hague"
    },
    {
      country: "Europe & Beyond",
      flag: "🌍",
      title: "The Zwina Challenge",
      description: "Incubating youth-led social businesses for a fair and sustainable Europe. A 12-month cohort supporting young changemakers from idea to launch.",
      link: "/projects/zwina-challenge",
      imageSrc: "/images/projects/Zwina%20Challenge/zwina-challenge-CTr7CwXX.jpg",
      imageAlt: "The Zwina Challenge program"
    }
  ];

  const filteredProjects = projects.filter((p) => !excludeLinks.includes(p.link));

  const topProjects = filteredProjects.slice(0, 2);
  const bottomProjects = filteredProjects.slice(2);

  const renderProjectCard = (project: (typeof projects)[number], index: number, priority: boolean) => (
    <Reveal key={`${project.link}-${index}`} as="div" delay={0.06 + index * 0.06}>
      <div className="group relative transition-transform duration-500 ease-default hover:-translate-y-1">
        <div className="aspect-video bg-secondary mb-6 overflow-hidden">
        {project.imageSrc ? (
          <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              unoptimized
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
          Read Case Study <span className="ml-2">→</span>
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
            <Typography variant="h2">Our Projects</Typography>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link href="/projects" className="no-underline">View All Work</Link>
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topProjects.map((project, index) => renderProjectCard(project, index, index === 0))}
        </div>

        {bottomProjects.length > 0 && (
          <div className="mt-2.5 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bottomProjects.map((project, index) => renderProjectCard(project, index + topProjects.length, false))}
          </div>
        )}
      </Container>
    </Section>
  );
};
