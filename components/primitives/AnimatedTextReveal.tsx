"use client";

import React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimatedTextRevealProps = {
  text: string;
  className?: string;
  as?: React.ElementType;
  /** seconds */
  duration?: number;
  /** seconds */
  stagger?: number;
  /** seconds */
  delay?: number;
};

function splitWordsPreserveSpacing(text: string) {
  // Split into tokens of words and spaces so spacing stays identical.
  // Example: ["Hello", " ", "world"]
  return text.split(/(\s+)/).filter((t) => t.length > 0);
}

export function AnimatedTextReveal({
  text,
  className,
  as: Component = "p",
  duration = 0.7,
  stagger = 0.02,
  delay = 0,
}: AnimatedTextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const tokens = React.useMemo(() => splitWordsPreserveSpacing(text), [text]);

  if (prefersReducedMotion) {
    return (
      <Component ref={ref as any} className={className}>
        {text}
      </Component>
    );
  }

  return (
    <Component ref={ref as any} className={cn(className)} aria-label={text}>
      <motion.span
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
      >
        {tokens.map((token, index) => {
          // Don’t animate whitespace tokens; just render them.
          if (/^\s+$/.test(token)) {
            return <span key={`space-${index}`}>{token}</span>;
          }

          return (
            <span key={`word-${index}`} className="inline-block overflow-hidden align-baseline" aria-hidden>
              <motion.span
                className="inline-block will-change-transform"
                variants={{
                  hidden: { y: "0.85em", opacity: 0 },
                  show: {
                    y: "0em",
                    opacity: 1,
                    transition: {
                      duration,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {token}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
