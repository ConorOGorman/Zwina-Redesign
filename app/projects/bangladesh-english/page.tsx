import { PageHeaderSection } from "@/components/sections/PageHeaderSection";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";
import Image from "next/image";

export default function BangladeshEnglishPage() {
  const locale = getLocale();
  return (
    <>
      <PageHeaderSection
        className="pt-24 md:pt-32"
        containerClassName="px-8 sm:px-8"
        title={t(locale, "pages.bangladeshTitle")}
        description={t(locale, "pages.bangladeshDesc")}
      />

      <Section className="bg-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-2 lg:col-span-7">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-foreground/15 bg-surface">
                <Image
                  src="/images/projects/Bangladesh/bangladesh-classroom-2.jpeg"
                  alt="Students in an English classroom in Bangladesh"
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-1 lg:col-span-5">
              <Typography variant="caption" className="text-primary mb-6 block">
                Bangladesh • 2024
              </Typography>

              <Typography variant="h3" className="mb-6">
                Project Overview
              </Typography>
              <Typography variant="body" className="mb-10">
                English opens doors to education, jobs, and digital access, but remains out of reach for many
                children in Bangladesh. Many of these children are orphans, rescued from child marriage or
                child labor, and supported by the Bidyanondo Foundation.
              </Typography>

              <Typography variant="h4" className="mb-4">
                Context and Motivation
              </Typography>
              <Typography variant="body">
                English opens doors to education, jobs, and digital access, but remains out of reach for many
                children in Bangladesh. Many of these children are orphans, rescued from child marriage or
                child labor, and supported by the Bidyanondo Foundation.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-7">
              <Typography variant="h3" className="mb-6">
                What We Built
              </Typography>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Weekly online English classes with Bengali international teachers.",
                  "Reached 700 children on a budget of just €1,000.",
                  "Volunteer-driven, with infrastructure already in place.",
                  "Collaboration with a trusted local NGO that operates schools and orphanages across Bangladesh.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-foreground/15 bg-surface px-6 py-5 hover:bg-secondary transition-colors duration-500"
                  >
                    <Typography variant="body-sm" className="text-foreground">
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Typography variant="h4" className="mb-4">
                Why It Matters
              </Typography>
              <Typography variant="body" className="mb-10">
                This project gives orphaned children a voice in a globalized world, builds confidence, and opens
                new educational and professional opportunities. It contributes directly to SDG 4 (Quality
                Education) and SDG 10 (Reduced Inequalities).
              </Typography>

              <Typography variant="h4" className="mb-4">
                Scaling Plan
              </Typography>
              <div className="space-y-4">
                {[
                  "Expand to 6 orphanages, reaching 600+ children.",
                  "Deliver a structured 6-month curriculum with standardized exams.",
                  "Build a team of 17 teachers with one project manager per 100–150 students.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-none" aria-hidden />
                    <Typography variant="body-sm">{item}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-secondary border-t border-foreground/10">
        <Container className="max-w-5xl">
          <Typography variant="h3" className="mb-6 text-center">
            Impact
          </Typography>
          <Typography variant="body" className="text-center max-w-3xl mx-auto mb-12">
            Children gain confidence, communication skills, and access to higher education—unlocking new futures
            that would otherwise be out of reach.
          </Typography>

          <div className="rounded-2xl border border-foreground/15 bg-surface p-8 md:p-10">
            <Typography variant="body" className="text-foreground">
              “Education is the most powerful weapon which you can use to change the world, and English opens
              global doors for these children.”
            </Typography>
            <Typography variant="caption" className="mt-4 block text-primary">
              — Zwina Foundation Team
            </Typography>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 text-center">
            {[
              { value: "700", label: "Children Reached" },
              { value: "€1,000", label: "Budget" },
              { value: "5", label: "Teachers" },
              { value: "600+", label: "Future Reach" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-6 py-8 md:px-8 md:py-10 hover:bg-background transition-colors duration-500"
              >
                <div className="text-3xl md:text-4xl font-semibold text-accent">{stat.value}</div>
                <Typography variant="caption" className="mt-3 block">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div>
              <Typography variant="caption" className="text-primary mb-4 block">
                Moments From The Field
              </Typography>
              <Typography variant="h3">Project Gallery</Typography>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/projects/Bangladesh/bangladesh-classroom-1.jpeg", alt: "Project image 1" },
              { src: "/images/projects/Bangladesh/bangladesh-classroom-2.jpeg", alt: "Project image 2" },
              { src: "/images/projects/Bangladesh/bangladesh-classroom-3.jpg", alt: "Project image 3" },
              { src: "/images/projects/Bangladesh/bangladesh-classroom-4.jpg", alt: "Project image 4" },
              { src: "/images/projects/Bangladesh/bangladesh-teacher-teaching.jpg", alt: "Project image 5" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
