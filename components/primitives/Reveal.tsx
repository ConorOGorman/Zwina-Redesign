"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useReducedMotion } from "framer-motion";
import React from "react";

export type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  /** seconds */
  delay?: number;
  /** seconds */
  duration?: number;
  /** px */
  y?: number;
  once?: boolean;
  /** 0..1 */
  amount?: number;
};

export function Reveal({
  as = "div",
  className,
  children,
  delay = 0,
  duration = 0.7,
  y = 16,
  // Default to replaying when re-entering viewport (down or up)
  once = false,
  amount = 0.35,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once, amount });

  if (prefersReducedMotion) {
    const Tag = as as any;
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  const MotionTag = ((motion as any)[as] ?? motion.div) as any;

  return (
    <MotionTag
      ref={ref}
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={
        isInView
          ? { duration, delay, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0.01, delay: 0 }
      }
    >
      {children}
    </MotionTag>
  );
}
