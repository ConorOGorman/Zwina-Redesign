"use client";

import React from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export type ScrollFillTextProps = {
  text: string;
  className?: string;
  baseClassName?: string;
  fillClassName?: string;
  as?: React.ElementType;
};

function clamp01(value: number) {
  if (value <= 0) return 0;
  if (value >= 1) return 1;
  return value;
}

export function ScrollFillText({
  text,
  className,
  baseClassName,
  fillClassName,
  as: Component = "p",
}: ScrollFillTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);

  const [progress, setProgress] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Start filling when the block approaches viewport bottom,
    // finish when it reaches around the middle.
    offset: ["start 0.85", "end 0.2"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  const words = React.useMemo(() => {
    const trimmed = text.trim();
    return trimmed.length ? trimmed.split(/\s+/) : [];
  }, [text]);

  const totalChars = React.useMemo(() => {
    return words.reduce((sum, word) => sum + word.length, 0);
  }, [words]);

  if (prefersReducedMotion) {
    return (
      <Component ref={ref as React.Ref<HTMLElement>} className={cn(className, fillClassName)}>
        {text}
      </Component>
    );
  }

  // Hatamex-style effect: each character has a dim base layer + a fill layer
  // whose opacity increases sequentially as the user scrolls.
  // We avoid hooks inside loops by subscribing to scroll progress once
  // and calculating per-character opacity in render.
  const stagger = totalChars > 0 ? 1 / totalChars : 1;
  const fadeDuration = Math.max(stagger * 12, 0.15);

  let charIndex = 0;

  return (
    <Component ref={ref as React.Ref<HTMLElement>} className={cn("flex flex-wrap", className)}>
      <span aria-hidden className="contents">
        {words.map((word, wordIdx) => {
          return (
            <span key={`${word}-${wordIdx}`} className="relative mr-1 md:mr-2 inline-flex">
              {Array.from(word).map((ch, chIdx) => {
                const i = charIndex++;
                const start = i * stagger;
                const end = start + fadeDuration;
                const opacity = clamp01((progress - start) / (end - start));

                return (
                  <span
                    key={`${wordIdx}-${chIdx}`}
                    className="relative inline-block"
                    style={{ lineHeight: "inherit" }}
                  >
                    <span
                      className={cn("absolute inset-0 select-none", baseClassName ?? "opacity-[30%]")}
                    >
                      {ch}
                    </span>
                    <span className={cn(fillClassName)} style={{ opacity }}>
                      {ch}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
      <span className="sr-only">{text}</span>
    </Component>
  );
}
