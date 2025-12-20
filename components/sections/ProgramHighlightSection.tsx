import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import Image from "next/image";
import React from "react";

export const ProgramHighlightSection: React.FC = () => {
  return (
    <Section className="bg-secondary relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <Typography variant="caption" className="text-accent mb-4 block">Incubator Program</Typography>
            <Typography variant="h2" className="mb-8">
              Be a Changemaker – <br />
              Join the Zwina Challenge
            </Typography>
            <Typography variant="body" className="mb-8 text-lg">
              The Zwina Challenge is a one-year incubator for youth-led social change. It
              empowers students and recent graduates (under 30) to launch their own philanthropic
              or micro-social business projects—with no prior funding or experience.
            </Typography>
            
            <ul className="space-y-6 mb-12 border-l border-foreground/10 pl-8">
              <li className="flex flex-col">
                <Typography variant="h6" className="text-foreground mb-1">Mentorship</Typography>
                <Typography variant="body-sm">From experienced changemakers</Typography>
              </li>
              <li className="flex flex-col">
                <Typography variant="h6" className="text-foreground mb-1">Hands-on Learning</Typography>
                <Typography variant="body-sm">Project design and execution</Typography>
              </li>
              <li className="flex flex-col">
                <Typography variant="h6" className="text-foreground mb-1">Platform Access</Typography>
                <Typography variant="body-sm">Zwina Foundation&apos;s support network</Typography>
              </li>
            </ul>

            <Button asChild variant="primary">
              <Link href="/projects/zwina-challenge" className="no-underline">
                Learn More
              </Link>
            </Button>
          </div>
          <div className="aspect-[4/5] bg-foreground/5 rounded-sm border border-foreground/10 relative overflow-hidden group">
            <Image
              src="/images/projects/Products/933dbb93-fc90-4ca9-a1e2-8c92aa7a3350.png"
              alt="Zwina Challenge"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
