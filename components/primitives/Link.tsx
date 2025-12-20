import { cn } from "@/lib/utils";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

interface LinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "underline" | "hover-underline";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  variant = "default",
  onClick,
  ...props
}) => {
  const variants = {
    default: "text-[var(--foreground)] hover:text-[var(--primary)]",
    underline: "underline underline-offset-4 hover:text-[var(--primary)]",
    "hover-underline": "hover:underline underline-offset-4",
  };

  return (
    <NextLink className={cn(variants[variant], className)} onClick={onClick} {...props}>
      {children}
    </NextLink>
  );
};
