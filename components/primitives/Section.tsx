import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "none" | "sm" | "md" | "lg";
}

export const Section: React.FC<SectionProps> = ({
  as: Component = "section",
  className,
  children,
  spacing = "lg",
  ...props
}) => {
  const spacingStyles = {
    none: "",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
  };

  return (
    <Component
      className={cn(spacingStyles[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
