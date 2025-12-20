import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import React from "react";

interface ContentSectionProps {
  content?: string;
  children?: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ content, children }) => {
  return (
    <Section>
      <Container className="prose prose-lg max-w-4xl mx-auto">
        {content && (
          <Typography variant="body">
            {content}
          </Typography>
        )}
        {children}
      </Container>
    </Section>
  );
};
