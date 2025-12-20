import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import React from "react";

export const CampaignSection: React.FC = () => {
  return (
    <Section className="bg-secondary text-foreground border-t border-foreground/10">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Typography variant="caption" className="text-primary mb-4 block">
            Seasonal Campaign
          </Typography>
          <Typography variant="h2" className="mb-6 text-balance">
            Gifts That <span className="italic text-primary">Change Lives</span>
          </Typography>
          <Typography variant="body" className="mx-auto max-w-2xl text-pretty text-foreground-muted text-lg md:text-xl">
            This Christmas, give something meaningful. Our ethical gifts are handcrafted by women in Morocco,
            turning your generosity into lasting opportunities.
          </Typography>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 text-center">
          {[
            { title: "40+ Women Trained", desc: "In sewing & entrepreneurship skills" },
            { title: "Fair Pay Guaranteed", desc: "Per piece + paid training hours" },
            { title: "100% Reinvested", desc: "Profits fund more community projects" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface px-8 py-10 md:px-10 md:py-12 hover:bg-background transition-colors duration-500"
            >
              <Typography variant="h4" className="text-foreground text-balance text-2xl md:text-3xl">
                {item.title}
              </Typography>
              <Typography variant="body-sm" className="mt-3">{item.desc}</Typography>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-14">
          <Button size="lg" variant="primary" effect="sweep" asChild>
            <Link href="/shop" className="no-underline">
              View Full Catalogue
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
