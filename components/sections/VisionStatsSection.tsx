import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { AnimatedNumber } from "@/components/primitives/AnimatedNumber";
import { Reveal } from "@/components/primitives/Reveal";
import React from "react";

export const VisionStatsSection: React.FC = () => {
  const stats = [
    { label: "Launch 20+ micro-social businesses", value: "20+" },
    { label: "Support 100+ youth leaders", value: "100+" },
    { label: "Expand to 4 new countries", value: "04" },
    { label: "Reach 100,000+ young people", value: "100k" },
  ];

  return (
    <Section className="border-t border-foreground/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <Typography variant="h2">
            Our Vision <br />
            <span className="text-primary italic">for 2027</span>
          </Typography>
          <Typography variant="body" className="self-end">
            We aim to scale our impact globally, creating a network of youth leaders and sustainable social enterprises.
          </Typography>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} as="div" delay={0.06 + index * 0.06}>
              <div className="bg-background p-8 hover:bg-secondary transition-colors duration-300">
                <Typography variant="h1" className="text-accent mb-4 text-6xl">
                  <AnimatedNumber value={stat.value} delay={index * 0.08} duration={2.5} />
                </Typography>
                <Typography variant="body-sm" className="uppercase tracking-widest">
                  {stat.label}
                </Typography>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
