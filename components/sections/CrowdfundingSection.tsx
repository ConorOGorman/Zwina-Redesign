import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import React from "react";

export const CrowdfundingSection: React.FC = () => {
  return (
    <Section className="bg-accent text-white py-32">
      <Container className="text-center">
        <Typography variant="caption" className="text-white/70 mb-4 block">The Movement</Typography>
        <Typography variant="h2" className="mb-8 text-white font-serif text-6xl md:text-8xl">
          Change Philanthropy
        </Typography>
        <Typography variant="body" className="max-w-3xl mx-auto text-white/85 text-xl font-medium">
          Support our crowdfunding campaign! Your pre-orders help us partner with women in
          Taalat N&apos;Mimoun to build Morocco&apos;s first Zwina social enterprise.
        </Typography>
      </Container>
    </Section>
  );
};
