import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import React from "react";

export const NewsletterSection: React.FC = () => {
  return (
    <Section className="border-t border-foreground/10">
      <Container className="text-center max-w-2xl">
        <Typography variant="h3" className="mb-6">Stay connected.</Typography>
        <Typography variant="body" className="mb-12 text-muted-foreground">
          Subscribe to our newsletter for updates on projects, impact stories, and ways to
          get involved.
        </Typography>
        
        <form className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 border border-foreground/15 bg-surface p-1 rounded-[var(--radius-button)]">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-0 flex-1 h-12 px-6 bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground rounded-[calc(var(--radius-button)-2px)] sm:rounded-r-none"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto sm:rounded-l-none"
          >
            Subscribe
          </Button>
        </form>
      </Container>
    </Section>
  );
};
