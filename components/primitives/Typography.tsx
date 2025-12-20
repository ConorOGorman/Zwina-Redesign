import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "body-sm" | "caption";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

const variants: Record<TypographyVariant, string> = {
  h1: "font-serif text-foreground text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight",
  h2: "font-serif text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight",
  h3: "font-serif text-foreground text-3xl md:text-4xl leading-snug",
  h4: "font-sans text-foreground text-xl md:text-2xl uppercase tracking-widest font-medium",
  h5: "font-sans text-foreground text-lg md:text-xl uppercase tracking-widest font-medium",
  h6: "font-sans text-foreground text-base md:text-lg uppercase tracking-widest font-medium",
  body: "font-sans text-base md:text-lg leading-relaxed text-foreground-muted font-normal",
  "body-sm": "font-sans text-sm leading-relaxed text-foreground-muted font-normal",
  caption: "font-sans text-xs text-foreground-muted tracking-widest uppercase",
};

const defaultTags: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || defaultTags[variant];
  
  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};
