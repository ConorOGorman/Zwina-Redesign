import Image from "next/image";
import React from "react";
import { BookOpen, MapPin } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";

type Anchor = { label: string; href: string };

export default function AboutPage() {
  const onThisPage: Anchor[] = [
    { label: "Overview", href: "#overview" },
    { label: "Mission", href: "#mission" },
    { label: "Approach", href: "#approach" },
    { label: "Team", href: "#team" },
  ];

	  const story = {
	    title: "From Students to Changemakers",
	    paragraphs: [
	      "Zwina Foundation began as a group of students from across Europe, brought together by a shared desire to make a difference while studying in the Netherlands.",
	      "With no funding, no experience, and no roadmap, we chose not to wait for the perfect moment. We simply started.",
	    ],
	    firstStepsTitle: "Our first steps were small but meaningful",
	    firstSteps: [
	      {
	        location: "Morocco",
	        bullets: ["Empowered women in remote villages.", "Provided tools and skills for economic independence."],
	      },
	      {
	        location: "Bangladesh",
	        bullets: ["Created access to English education.", "For orphaned children."],
	      },
	    ],
	    missionLine:
	      "Underlying everything is a simple belief: even the smallest actions, when rooted in community and driven by purpose, can create lasting change.",
	  };

  const howWeWork = [
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

  const transparencyLinks = [
    { href: "/donate", title: "Where funds go", description: "Support us and see how you can help." },
    { href: "/impact", title: "Annual report / updates", description: "Follow progress across our projects and communities." },
    { href: "/privacy", title: "Policies", description: "Privacy Policy and Terms of Service." },
    { href: "/terms", title: "Terms of Service", description: "Review site terms and usage information." },
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

  const featuredProjectBullets = [
    "Community-led skills training designed with local insight.",
    "Tools and practical pathways toward sustainable income.",
    "Designed for social businesses and self-sufficiency.",
    "Led by local youth who understand their communities' needs.",
  ];

  const featuredTeam = team.slice(0, 6);
  const moreTeam = team.slice(6);

  return (
    <>
      <Section
        spacing="none"
        className="relative overflow-hidden bg-secondary pt-[93px] pb-12 lg:pt-[109px] lg:pb-14 border-b border-foreground/10"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
	              <Reveal as="div" delay={0.02} y={16}>
	                <Typography variant="caption" className="text-accent mb-6 block font-medium tracking-widest">
	                  About
	                </Typography>
	                <Typography variant="h1" className="mb-5 text-balance">
	                  About Zwina Foundation
	                </Typography>
                <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
	                  A youth-led foundation empowering rural women through community-led skills training and social business.
	                </Typography>
	              </Reveal>

              <Reveal as="div" delay={0.14}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button variant="primary" size="lg" asChild effect="none" className="shadow-none">
                    <Link href="/donate" className="no-underline">
                      Donate
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild effect="none" className="shadow-none">
                    <Link href="/volunteer" className="no-underline">
                      Get involved
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal as="div" delay={0.08} y={12}>
                <div>
                  <div className="relative aspect-[4/3] bg-secondary overflow-hidden border border-foreground/10">
                    <Image
                      src="/images/projects/Morocco/morocco-community-1.png"
                      alt="Zwina Foundation community work in Morocco"
                      fill
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal as="div" delay={0.18}>
            <div className="mt-10 pt-6 border-t border-foreground/10">
              <div className="flex items-center gap-3">
                <Typography variant="caption" className="text-muted-foreground whitespace-nowrap">
                  On this page
                </Typography>
                <div className="h-px flex-1 bg-foreground/10" />
              </div>
              <nav className="mt-3 overflow-x-auto">
                <div className="flex gap-2 min-w-max pb-1">
                  {onThisPage.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center rounded-[var(--radius-button)] border border-foreground/10 bg-background/70 px-3 py-2 text-xs uppercase tracking-widest text-foreground/80 transition-colors hover:border-foreground/20 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary motion-reduce:transition-none"
                      variant="default"
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

	        <Section id="overview" className="border-t border-foreground/10 scroll-mt-32" spacing="lg">
	          <Container>
	            <Reveal as="div" delay={0.02}>
	              <div className="mx-auto max-w-6xl text-left">
	                <Typography variant="caption" className="text-accent mb-4 block">
	                  Overview
	                </Typography>
	                <Typography variant="h2" className="mb-4">
	                  What we do, where we work, and why it matters.
	                </Typography>
	                <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
	                  Clear essentials first: a short story, a clear mission, and a practical model you can verify.
	                </Typography>
	              </div>
	            </Reveal>

		            <Reveal as="div" delay={0.06} y={12}>
		              <article className="mt-12 mx-auto max-w-6xl">
		                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
		                  <div className="lg:col-span-5">
		                    <Typography variant="h3" className="m-0">
		                      {story.title}
	                    </Typography>
	                  </div>

		                  <div className="lg:col-span-7">
		                    <Typography
		                      as="p"
		                      variant="body"
		                      className="text-foreground max-w-[70ch]"
		                    >
		                      <span className="text-foreground">{story.paragraphs[0]} </span>
		                      <span className="text-foreground/55">{story.paragraphs[1]}</span>
		                    </Typography>
		                  </div>
		                </div>

	                <div className="mt-14 border-t border-foreground/10 pt-12">
	                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mx-auto max-w-6xl">
	                    <div>
	                      <div className="h-12 w-12 rounded-full border border-foreground/10 bg-background flex items-center justify-center mb-6">
	                        <MapPin className="h-5 w-5 text-foreground/70" aria-hidden="true" />
	                      </div>
		                      <Typography variant="h5" className="m-0">
		                        In Morocco
		                      </Typography>
		                      <Typography variant="body-sm" className="text-muted-foreground mt-3 max-w-[56ch]">
		                        {story.firstStepsTitle}
		                      </Typography>
		                      <ul className="mt-6 space-y-3">
	                        {story.firstSteps
	                          .find((s) => s.location === "Morocco")
	                          ?.bullets.map((bullet) => (
	                            <li key={bullet} className="flex gap-3">
	                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
	                              <Typography variant="body-sm" className="text-muted-foreground m-0">
	                                {bullet}
	                              </Typography>
	                            </li>
	                          ))}
	                      </ul>
	                    </div>

	                    <div>
	                      <div className="h-12 w-12 rounded-full border border-foreground/10 bg-background flex items-center justify-center mb-6">
	                        <BookOpen className="h-5 w-5 text-foreground/70" aria-hidden="true" />
	                      </div>
		                      <Typography variant="h5" className="m-0">
		                        In Bangladesh
		                      </Typography>
		                      <Typography variant="body-sm" className="text-muted-foreground mt-3 max-w-[56ch]">
		                        {story.firstStepsTitle}
		                      </Typography>
		                      <ul className="mt-6 space-y-3">
	                        {story.firstSteps
	                          .find((s) => s.location === "Bangladesh")
	                          ?.bullets.map((bullet) => (
	                            <li key={bullet} className="flex gap-3">
	                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
	                              <Typography variant="body-sm" className="text-muted-foreground m-0">
	                                {bullet}
	                              </Typography>
	                            </li>
	                          ))}
	                      </ul>
	                    </div>
	                  </div>
	                </div>
	              </article>
	            </Reveal>
	          </Container>
	        </Section>

	      <Section id="mission" className="border-t border-foreground/10 scroll-mt-32 bg-background-soft" spacing="lg">
	        <Container>
	          <Reveal as="div" delay={0.02}>
	            <div className="mx-auto max-w-6xl text-left">
	              <Typography variant="caption" className="text-accent mb-4 block">
	                Mission
	              </Typography>
	              <Typography variant="h2" className="mb-4">
	                Mission and model
	              </Typography>
		              <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
		                {story.missionLine}
		              </Typography>
	            </div>
	          </Reveal>

          <Reveal as="div" delay={0.06} y={12}>
            <div className="mt-10 mx-auto max-w-6xl">
              <div className="flex items-center gap-3 mb-6">
                <Typography variant="caption" className="text-muted-foreground m-0">
                  Model
                </Typography>
                <div className="h-px flex-1 bg-foreground/10" />
              </div>

              <ol className="space-y-8">
                {howWeWork.map((step, idx) => (
                  <li key={step.step}>
                    <Reveal as="div" delay={0.02 + idx * 0.04} y={10}>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start py-3">
                        <div className="md:col-span-2">
                          <Typography variant="h3" className="text-accent">
                            {step.step}
                          </Typography>
                        </div>
	                        <div className="md:col-span-10">
	                          <Typography variant="h4" className="mb-2">
	                            {step.title}
	                          </Typography>
		                          <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
		                            {step.description}
		                          </Typography>
	                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </Section>

	      <Section id="approach" className="border-t border-foreground/10 scroll-mt-32" spacing="lg">
	        <Container>
	          <Reveal as="div" delay={0.02}>
	            <div className="mx-auto max-w-6xl text-left">
	              <Typography variant="caption" className="text-accent mb-4 block">
	                Approach
	              </Typography>
	              <Typography variant="h2" className="mb-4">
	                The principles we build with.
	              </Typography>
		              <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
		                A practical framework that keeps projects accountable, community-led, and sustainable.
		              </Typography>
	            </div>
	          </Reveal>

          <div className="mt-12 mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {approach.map((item, idx) => (
                <Reveal key={item.title} as="div" delay={0.04 + idx * 0.04} y={10}>
	                  <div className="border-t border-foreground/10 pt-6">
	                    <Typography variant="h4" className="mb-2">
	                      {item.title}
	                    </Typography>
		                    <Typography variant="body" className="text-muted-foreground m-0">
		                      {item.description}
		                    </Typography>
	                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      

	      <Section id="team" className="border-t border-foreground/10 scroll-mt-32" spacing="lg">
	        <Container>
	          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10 items-end">
	            <div className="lg:col-span-6">
	              <Reveal as="div" delay={0.02} y={12}>
                <Typography variant="caption" className="text-accent mb-4 block">
                  Team
                </Typography>
	                <Typography variant="h2" className="mb-4">
	                  Meet our team
	                </Typography>
		                <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
		                  The passionate change-makers behind Zwina Foundation.
		                </Typography>
	              </Reveal>
	            </div>
            <div className="lg:col-span-6 lg:flex lg:justify-end">
              <Reveal as="div" delay={0.08}>
                <Button variant="outline" asChild effect="none" className="shadow-none w-full lg:w-auto">
                  <Link href="/contact" className="no-underline">
                    Contact us
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTeam.map((person, idx) => (
              <Reveal key={person.name} as="div" delay={0.03 + idx * 0.04} y={10}>
                <div className="h-full border-t border-foreground/10 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-secondary border border-foreground/10">
                      <Image src={person.imageSrc} alt={person.name} width={56} height={56} className="h-14 w-14 object-cover" />
                    </div>
                    <div className="min-w-0">
                      <Typography variant="h6" className="m-0">
                        {person.name}
                      </Typography>
                      <Typography variant="caption" className="text-accent mt-2 block">
                        {person.role}
                      </Typography>
                      <Typography variant="body-sm" className="text-muted-foreground mt-2 m-0">
                        {person.location}
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="body-sm" className="text-muted-foreground mt-4 m-0">
                    {person.bio}
                  </Typography>
                </div>
              </Reveal>
            ))}
          </div>

          {moreTeam.length > 0 && (
            <div className="mt-10 border-t border-foreground/10 pt-8">
              <Reveal as="div" delay={0.02} y={10}>
                <Typography variant="h6" className="mb-4">
                  Additional team
                </Typography>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moreTeam.map((person, idx) => (
                  <Reveal key={person.name} as="div" delay={0.03 + idx * 0.04} y={8}>
                    <div className="border-t border-foreground/10 pt-5">
                      <Typography variant="h6" className="m-0">
                        {person.name}
                      </Typography>
                      <Typography variant="caption" className="text-accent mt-2 block">
                        {person.role} • {person.location}
                      </Typography>
                      <Typography variant="body-sm" className="text-muted-foreground mt-3 m-0">
                        {person.bio}
                      </Typography>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          
        </Container>
      </Section>
    </>
  );
}
