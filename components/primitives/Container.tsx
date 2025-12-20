import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
