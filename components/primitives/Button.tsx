"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  /** Visual motion effect; respects reduced-motion. */
  effect?: "default" | "sweep" | "none";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  effect = "default",
  className,
  children,
  asChild = false,
  ...props
}) => {
  const handlePointerMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--btn-x", `${Math.max(0, Math.min(100, x))}%`);
    el.style.setProperty("--btn-y", `${Math.max(0, Math.min(100, y))}%`);
  };

  const handlePointerLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty("--btn-x", "50%");
    el.style.setProperty("--btn-y", "50%");
  };

  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-button)] font-semibold uppercase tracking-wide text-xs md:text-sm transform-gpu [--btn-x:50%] [--btn-y:50%] " +
    "transition-[transform,background-color,border-color,box-shadow,opacity] duration-normal ease-default " +
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "disabled:pointer-events-none disabled:opacity-60 " +
    "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 " +
    // Subtle edge definition that doesn't change color system
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-[var(--radius-button)] after:ring-1 after:ring-inset after:ring-foreground/10 hover:after:ring-foreground/20 ";

  const effectStyles: Record<NonNullable<ButtonProps["effect"]>, string> = {
    none: "before:hidden",
    default:
      // Cursor-following highlight (keeps palette; works on all variants)
      "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 " +
      "before:bg-[radial-gradient(circle_at_var(--btn-x)_var(--btn-y),rgba(255,255,255,0.32),transparent_60%)] " +
      "before:transition-opacity before:duration-slow before:ease-default hover:before:opacity-100 " +
      "motion-reduce:before:hidden",
    sweep:
      // Shine sweep (Hatamex-ish): subtle white sheen traveling across the button on hover
      "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 " +
      "before:bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.35),transparent)] " +
      "before:translate-x-[-120%] hover:before:translate-x-[120%] " +
      "before:transition-[transform,opacity] before:duration-slow before:ease-default hover:before:opacity-100 " +
      "motion-reduce:before:hidden",
  };
  
  const variants = {
    primary: "bg-accent text-white shadow-sm hover:bg-accent/90",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/85",
    outline: "border border-foreground/15 bg-surface text-foreground hover:border-foreground/30 hover:bg-foreground/5",
    ghost: "text-foreground hover:bg-foreground/5",
  };

  const sizes = {
    sm: "h-8 px-4",
    md: "h-10 px-6",
    lg: "h-12 px-8",
  };

  const classes = cn(baseStyles, effectStyles[effect], variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    const childProps = (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>).props;

    const mergedOnMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
      childProps.onMouseMove?.(e);
      props.onMouseMove?.(e as React.MouseEvent<HTMLButtonElement>);
      handlePointerMove(e);
    };

    const mergedOnMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
      childProps.onMouseLeave?.(e);
      props.onMouseLeave?.(e as React.MouseEvent<HTMLButtonElement>);
      handlePointerLeave(e);
    };

    return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
      className: cn(classes, children.props.className),
      ...props,
      onMouseMove: mergedOnMouseMove,
      onMouseLeave: mergedOnMouseLeave,
    });
  }

  return (
    <button
      className={classes}
      {...props}
      onMouseMove={(e) => {
        props.onMouseMove?.(e);
        handlePointerMove(e);
      }}
      onMouseLeave={(e) => {
        props.onMouseLeave?.(e);
        handlePointerLeave(e);
      }}
    >
      {children}
    </button>
  );
};
