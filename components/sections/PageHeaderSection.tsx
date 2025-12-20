import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { cn } from "@/lib/utils";
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  align?: "center" | "left";
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}

export const PageHeaderSection: React.FC<PageHeaderProps> = ({
  title,
  description,
  align = "center",
  titleClassName,
  descriptionClassName,
  className,
}) => {
  const isLeft = align === "left";

  return (
    <Section className={cn("bg-surface border-b", className)}>
      <Container className={cn(isLeft ? "text-left" : "text-center")}>
        <Typography variant="h1" className={cn("mb-4", titleClassName)}>
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body"
            className={cn(
              isLeft ? "max-w-[52ch]" : "max-w-2xl mx-auto",
              "text-muted-foreground",
              descriptionClassName
            )}
          >
            {description}
          </Typography>
        )}
      </Container>
    </Section>
  );
};
