import Image from "next/image";
import React from "react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import { AnimatedTextReveal } from "@/components/primitives/AnimatedTextReveal";

export default function AboutPage() {
  const onThisPage = [
    { label: "At a glance", href: "#overview" },
    { label: "Mission", href: "#mission" },
    { label: "Our approach", href: "#approach" },
    { label: "Values", href: "#values" },
    { label: "Transparency", href: "#transparency" },
    { label: "Featured project", href: "#featured-project" },
    { label: "Team", href: "#team" },
  ];

  const atAGlance = [
    {
      title: "Youth-led, Europe-based",
      description: "A youth-led foundation driven by students and young professionals.",
    },
    {
      title: "Where we work",
      description: "Projects in Morocco and Bangladesh.",
    },
    {
      title: "Skills training + social business",
      description: "Community-led skills training and sustainable livelihoods.",
    },
    {
      title: "Low-cost, high-impact",
      description: "Volunteer energy, built for long-term impact.",
    },
  ];

  const approach = [
    {
      title: "Decentralised Leadership",
      description: "Projects led by local youth who understand their communities’ needs.",
    },
    {
      title: "Sustainability",
      description: "Focus on social businesses and self-sufficiency for long-term impact.",
    },
    {
      title: "Youth Activation",
      description: "Volunteers empowered to launch initiatives in their own communities.",
    },
    {
      title: "Low-Cost, High-Impact",
      description: "Leveraging volunteer energy to maximize impact with minimal resources.",
    },
    {
      title: "Collaborative Growth",
      description: "Shared learning and resources across projects and communities.",
    },
  ];

  const values = [
    { title: "Community-led", description: "Local solutions created with and by the communities we serve." },
    { title: "Dignity-first", description: "Built to empower—never to replace local agency." },
    { title: "Transparency", description: "Clear, accountable use of resources and progress." },
    { title: "Sustainability", description: "Designed for long-term impact through self-sufficiency." },
    { title: "Youth-powered", description: "Students and young professionals driving community change." },
  ];

  const team = [
    {
      imageSrc: "/Team%20Members/Isabel.png",
      name: "Isabel Rottlaan Sánchez",
      role: "Co-Founder & Board Member",
      location: "Spain",
      bio: "Isabel, 21, is a European Studies student at THUAS. She co-founded Zwina Foundation and is active in social impact through her work with Global Shapers, Everyone.org, and the THUAS Green Office.",
    },
    {
      imageSrc: "/Team%20Members/Davide.png",
      name: "Davide Menguzzato",
      role: "Co-Founder & Board Member",
      location: "Italy",
      bio: "Davide co-founded Zwina Foundation and advises organizations across Africa and Europe. A Global Shaper and social entrepreneur, he combines strategic vision with grassroots experience.",
    },
    {
      imageSrc: "/Team%20Members/Caterina.png",
      name: "Caterina Morandini",
      role: "Program Coordinator",
      location: "Italy",
      bio: "Caterina began her career in cybersecurity in the Netherlands. After visiting Zwina's first project in Morocco with Isabel and Davide, she was inspired by its local impact and joined the team to focus on community empowerment.",
    },
    {
      imageSrc: "/Team%20Members/Nikilas.png",
      name: "Niklas Schnüriger",
      role: "Board Member",
      location: "Switzerland",
      bio: "Niklas, 23, studied Political Science and lives in Amsterdam. Passionate about reducing inequality, he joined Zwina Foundation to support community-driven development alongside his career.",
    },
    {
      imageSrc: "/Team%20Members/mateo-bilbao-lopez.jpeg",
      name: "Mateo Bilbao Lopez",
      role: "Board Member",
      location: "Spain",
      bio: "With a background in political science and international development, Mateo has worked with NGOs and organizations across the world. These experiences have shaped his strong belief in community-driven development, guiding his commitment to supporting local knowledge systems rather than substituting them.",
    },
    {
      imageSrc: "/Team%20Members/adeline-curtis.jpeg",
      name: "Adeline Curtis",
      role: "Social Media Officer",
      location: "United Kingdom",
      bio: "My role at Zwina as Social Media officer is to create visuals for both Instagram and LinkedIn which are engaging and educational.",
    },
    {
      imageSrc: "/Team%20Members/Veronica%20.jpeg",
      name: "Veronica Vaudi",
      role: "Project Manager",
      location: "Italy",
      bio: "I'm passionate about using data to inform strategy, improving online visibility through meaningful communication, and collaborating across teams to deliver real value.",
    },
    {
      imageSrc: "/Team%20Members/Wassim.jpeg",
      name: "Wassim Nejjiar",
      role: "Fundraising Support",
      location: "France/Morocco",
      bio: "Wassim joined us to support the team on the fundraising. As a French-Moroccan, the first Zwina project resonated with him and he reached out to us. Before moving to Amsterdam, he was involved in various charity projects in France related to education and equal opportunities.",
    },
  ];

  return (
    <>
      {/* 1) Hero: One sentence + two primary actions */}
      <Section
        spacing="none"
        className="relative overflow-hidden bg-secondary pt-[93px] pb-16 lg:pt-[109px] lg:pb-20 border-b border-black/5"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal as="div" delay={0.02} duration={0.85} y={18}>
                <Typography variant="caption" className="text-accent mb-6 block font-medium tracking-widest">
                  About
                </Typography>
                <Typography variant="h1" className="mb-5 text-balance">
                  About Zwina Foundation
                </Typography>
              </Reveal>
              <AnimatedTextReveal
                as="p"
                text="A youth-led foundation empowering rural women through community-led skills training and social business."
                className="font-sans text-base md:text-lg leading-relaxed text-foreground max-w-[62ch] mb-10"
                stagger={0.018}
                duration={0.75}
                delay={0.05}
              />

              <Reveal as="div" delay={0.18}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button variant="primary" size="lg" asChild effect="sweep">
                    <Link href="/donate" className="no-underline">
                      Donate
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-foreground/20 hover:bg-foreground/5"
                  >
                    <Link href="/volunteer" className="no-underline">
                      Get involved
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal as="div" delay={0.12} y={14}>
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary group">
                  <Image
                    src="/images/projects/Morocco/morocco-community-1.png"
                    alt="Zwina Foundation community work in Morocco"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover transition-transform duration-slow ease-default group-hover:scale-[1.03]"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Navigation improvement: On this page anchor bar */}
          <Reveal as="div" delay={0.24}>
            <div className="mt-10 pt-6 border-t border-foreground/10">
              <div className="flex items-center gap-3">
                <Typography variant="caption" className="text-muted-foreground whitespace-nowrap">
                  On this page
                </Typography>
                <div className="h-px flex-1 bg-foreground/10" />
              </div>
              <nav className="mt-3 overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                  {onThisPage.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs uppercase tracking-widest px-3 py-2 bg-background/70 border border-foreground/10 hover:border-foreground/20 hover:bg-background transition-colors backdrop-blur"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 2) Overview: At-a-glance + Mission & model + Approach + Values + Transparency */}
      <Section spacing="lg" className="border-b border-black/5" id="overview">
        <Container>
          <div className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <Reveal as="div" delay={0.02}>
                  <Typography variant="caption" className="text-muted-foreground">
                    Overview
                  </Typography>
                  <Typography variant="h2" className="mt-3 mb-3">
                    Mission, model, and proof.
                  </Typography>
                  <Typography variant="body" className="text-muted-foreground max-w-[44ch]">
                    A single scan-friendly section: key facts, how we work, what we value, and where to verify it.
                  </Typography>
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                {/* At a glance */}
                <div>
                  <div className="flex items-end justify-between gap-6 flex-wrap mb-5">
                    <Reveal as="div" delay={0.02}>
                      <Typography variant="h3" className="mb-2">
                        At a glance
                      </Typography>
                      <Typography variant="body-sm" className="text-muted-foreground max-w-[62ch]">
                        Tight highlights so you can orient quickly.
                      </Typography>
                    </Reveal>
                  </div>

                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                    {atAGlance.map((card, index) => (
                      <Reveal key={card.title} as="div" delay={0.04 + index * 0.05}>
                        <div className="border-t border-foreground/10 pt-4">
                          <dt>
                            <Typography variant="h5" className="m-0">
                              {card.title}
                            </Typography>
                          </dt>
                          <dd className="mt-2">
                            <Typography variant="body-sm" className="text-muted-foreground m-0">
                              {card.description}
                            </Typography>
                          </dd>
                        </div>
                      </Reveal>
                    ))}
                  </dl>
                </div>

                {/* Mission & model */}
                <div className="mt-12" id="mission">
                  <div className="scroll-mt-32">
                    <Reveal as="div" delay={0.02}>
                      <div className="flex items-center gap-3 mb-4">
                        <Typography variant="h3" className="m-0">
                          Mission & model
                        </Typography>
                        <div className="h-px flex-1 bg-foreground/10" />
                      </div>
                      <Typography variant="body-sm" className="text-muted-foreground max-w-[70ch]">
                        Clear mission, clear model—then the supporting proof.
                      </Typography>
                    </Reveal>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
                    <div className="lg:col-span-5">
                      <Reveal as="div" delay={0.03}>
                        <div className="bg-surface border border-foreground/10 p-7">
                          <Typography variant="caption" className="text-accent block mb-3">
                            Mission
                          </Typography>
                          <AnimatedTextReveal
                            as="p"
                            text="Underlying everything is a simple belief: even the smallest actions, when rooted in community and driven by purpose, can create lasting change."
                            className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground"
                            stagger={0.012}
                            duration={0.7}
                            delay={0.02}
                          />
                        </div>
                      </Reveal>
                    </div>

                    <div className="lg:col-span-7">
                      <Reveal as="div" delay={0.06}>
                        <div className="bg-background border border-foreground/10 p-7">
                          <Typography variant="caption" className="text-accent block mb-3">
                            From Students to Changemakers
                          </Typography>
                          <div className="space-y-4">
                            <Typography variant="body" className="text-muted-foreground">
                              Zwina Foundation began as a group of students from across Europe, brought together by a shared desire to make a difference while studying in the Netherlands.
                            </Typography>
                            <Typography variant="body" className="text-muted-foreground">
                              With no funding, no experience, and no roadmap, we chose not to wait for the perfect moment. We simply started.
                            </Typography>
                          </div>

                          <Typography variant="h6" className="mt-8 mb-4">
                            Our first steps were small but meaningful
                          </Typography>
                          <ul className="space-y-3">
                            <li className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                              <Typography variant="body-sm" className="text-muted-foreground m-0">
                                In Morocco, we empowered women in remote villages with tools and skills for economic independence.
                              </Typography>
                            </li>
                            <li className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                              <Typography variant="body-sm" className="text-muted-foreground m-0">
                                In Bangladesh, we created access to English education for orphaned children.
                              </Typography>
                            </li>
                          </ul>
                        </div>
                      </Reveal>
                    </div>
                  </div>

                  {/* How we work */}
                  <div className="mt-10" id="how-we-work">
                    <div className="scroll-mt-32">
                      <Reveal as="div" delay={0.02}>
                        <Typography variant="caption" className="text-muted-foreground mb-3">
                          How we work
                        </Typography>
                      </Reveal>
                    </div>

                    <ol className="space-y-5">
                      {[
                        {
                          step: "01",
                          title: "Co-design with communities",
                          description: "Community-led solutions shaped with local insight.",
                        },
                        {
                          step: "02",
                          title: "Train + equip",
                          description: "Practical skills and tools for economic independence.",
                        },
                        {
                          step: "03",
                          title: "Launch sustainable social business models",
                          description: "Designed for self-sufficiency and long-term impact.",
                        },
                      ].map((item, index) => (
                        <Reveal key={item.step} as="li" delay={0.04 + index * 0.06}>
                          <div className="flex gap-4 border-t border-foreground/10 pt-5">
                            <Typography variant="caption" className="text-accent w-16 shrink-0">
                              Step {item.step}
                            </Typography>
                            <div className="min-w-0">
                              <Typography variant="h5" className="mb-1">
                                {item.title}
                              </Typography>
                              <Typography variant="body-sm" className="text-muted-foreground m-0">
                                {item.description}
                              </Typography>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Our Approach */}
                <div className="mt-12" id="approach">
                  <div className="scroll-mt-32">
                    <Reveal as="div" delay={0.02}>
                      <div className="flex items-center gap-3 mb-4">
                        <Typography variant="h3" className="m-0">
                          Our Approach
                        </Typography>
                        <div className="h-px flex-1 bg-foreground/10" />
                      </div>
                    </Reveal>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                    {approach.map((item, index) => (
                      <Reveal key={item.title} as="li" delay={0.04 + index * 0.03}>
                        <div className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" aria-hidden="true" />
                          <div>
                            <Typography variant="h5" className="mb-1">
                              {item.title}
                            </Typography>
                            <Typography variant="body-sm" className="text-muted-foreground m-0">
                              {item.description}
                            </Typography>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                </div>

                {/* Values */}
                <div className="mt-12" id="values">
                  <div className="scroll-mt-32">
                    <Reveal as="div" delay={0.02}>
                      <div className="flex items-center gap-3 mb-4">
                        <Typography variant="h3" className="m-0">
                          Values
                        </Typography>
                        <div className="h-px flex-1 bg-foreground/10" />
                      </div>
                      <Typography variant="body-sm" className="text-muted-foreground max-w-[70ch]">
                        Five principles that keep our work community-led and accountable.
                      </Typography>
                    </Reveal>
                  </div>

                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                    {values.map((value, index) => (
                      <Reveal key={value.title} as="li" delay={0.03 + index * 0.03}>
                        <div className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" aria-hidden="true" />
                          <div>
                            <Typography variant="h5" className="mb-1">
                              {value.title}
                            </Typography>
                            <Typography variant="body-sm" className="text-muted-foreground m-0">
                              {value.description}
                            </Typography>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                </div>

                {/* Transparency */}
                <div className="mt-12" id="transparency">
                  <div className="scroll-mt-32">
                    <Reveal as="div" delay={0.02}>
                      <div className="flex items-center gap-3 mb-4">
                        <Typography variant="h3" className="m-0">
                          Transparency
                        </Typography>
                        <div className="h-px flex-1 bg-foreground/10" />
                      </div>
                      <Typography variant="body-sm" className="text-muted-foreground max-w-[62ch]">
                        Clear links so it never feels like a black box.
                      </Typography>
                    </Reveal>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                    {[
                      {
                        href: "/donate",
                        title: "Where funds go",
                        description: "Support Us and see how you can help.",
                      },
                      {
                        href: "/impact",
                        title: "Annual report / updates",
                        description: "Follow progress across our projects and communities.",
                      },
                      {
                        href: "/privacy",
                        title: "Policies",
                        description: "Privacy Policy and Terms of Service.",
                      },
                      {
                        href: "/terms",
                        title: "Terms of Service",
                        description: "Review site terms and usage information.",
                      },
                    ].map((card, index) => (
                      <Reveal key={card.href} as="div" delay={0.05 + index * 0.03}>
                        <div className="border-t border-foreground/10 pt-4">
                          <Link href={card.href} variant="underline" className="text-sm">
                            {card.title}
                          </Link>
                          <Typography variant="body-sm" className="text-muted-foreground mt-2 m-0">
                            {card.description}
                          </Typography>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5) Proof of work (featured project) */}
      <Section className="border-t border-black/5" spacing="lg" id="featured-project">
        <Container>
          <div className="scroll-mt-32">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
              <div>
                <Reveal as="div">
                  <Typography variant="h2" className="mb-3">
                    Proof of work
                  </Typography>
                  <Typography variant="body-sm" className="text-muted-foreground max-w-[62ch]">
                    One featured initiative, then explore the full project library.
                  </Typography>
                </Reveal>
              </div>
              <Reveal as="div" delay={0.08}>
                <Button variant="outline" asChild>
                  <Link href="/projects" className="no-underline">
                    Explore all projects
                  </Link>
                </Button>
              </Reveal>
            </div>

            <Reveal as="div" delay={0.06}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border border-foreground/10 bg-surface">
              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[240px] lg:min-h-[340px] overflow-hidden bg-secondary group">
                  <Image
                    src="/images/projects/Morocco/morocco-workshop-1.png"
                    alt="Women participating in a sewing workshop in Talat'N Minoun, Morocco"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover transition-transform duration-slow ease-default group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 p-8 md:p-10">
                <Typography variant="caption" className="text-accent">
                  Featured initiative
                </Typography>
                <Typography variant="h3" className="mt-3 mb-5">
                  Morocco — Sewing & Social Business
                </Typography>
                <Typography variant="body" className="text-muted-foreground mb-8 max-w-[70ch]">
                  In Morocco, we empowered women in remote villages with tools and skills for economic independence.
                </Typography>

                <ul className="space-y-3 mb-10">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <Typography variant="body-sm" className="text-muted-foreground">
                      Community-led skills training designed with local insight.
                    </Typography>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <Typography variant="body-sm" className="text-muted-foreground">
                      Tools and practical pathways toward sustainable income.
                    </Typography>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <Typography variant="body-sm" className="text-muted-foreground">
                      Designed for social businesses and self-sufficiency.
                    </Typography>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <Typography variant="body-sm" className="text-muted-foreground">
                      Led by local youth who understand their communities&apos; needs.
                    </Typography>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" asChild>
                    <Link href="/projects/sewing-hope" className="no-underline">
                      See project
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/projects" className="no-underline">
                      See our impact <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  </Button>
                </div>
              </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6) Team */}
      <Section className="border-t border-black/5" spacing="lg" id="team">
        <Container>
          <div className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
              <div className="lg:col-span-4">
                <Reveal as="div">
                  <Typography variant="h2" className="mb-3">
                    Meet Our Team
                  </Typography>
                  <Typography variant="body-sm" className="text-muted-foreground">
                    The passionate change-makers behind Zwina Foundation.
                  </Typography>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <Reveal as="div" delay={0.06}>
                  <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
                    We’re a youth-led, Europe-based non-profit empowering rural women in developing countries.
                  </Typography>
                </Reveal>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {team.map((person, index) => (
                <Reveal key={person.name} as="div" delay={0.03 + index * 0.04}>
                  <div className="bg-background p-6 hover:bg-secondary transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-secondary border border-foreground/10">
                        <Image
                          src={person.imageSrc}
                          alt={person.name}
                          width={64}
                          height={64}
                          className="h-16 w-16 object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-3 mb-1">
                          <Typography variant="h5" className="m-0">
                            {person.name}
                          </Typography>
                          <span className="h-px flex-1 bg-foreground/10" />
                        </div>
                        <Typography variant="caption" className="text-accent block">
                          {person.role}
                        </Typography>
                        <Typography variant="body-sm" className="text-muted-foreground mt-2">
                          {person.location}
                        </Typography>
                      </div>
                    </div>

                    <Typography variant="body-sm" className="text-muted-foreground mt-4">
                      {person.bio}
                    </Typography>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8">
              <Typography variant="body-sm" className="text-muted-foreground">
                Want to connect or collaborate? <Link href="/contact" variant="underline">Contact us</Link>.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}
