"use client";

import React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ParsedValue = {
  target: number;
  suffix: string;
  minimumIntegerDigits?: number;
  maximumFractionDigits: number;
};

function parseAnimatedValue(value: string | number): ParsedValue {
  if (typeof value === "number") {
    const maximumFractionDigits = Number.isInteger(value) ? 0 : 2;
    return { target: value, suffix: "", maximumFractionDigits };
  }

  const raw = value.trim();

  // Supports values like: "20+", "04", "100k", "100,000+"
  const cleaned = raw.replace(/,/g, "");
  const match = cleaned.match(/^([+-]?\d*(?:\.\d+)?)([^\d.]*)$/);

  const numberPart = match?.[1] ?? "0";
  const suffix = match?.[2] ?? "";

  const target = Number(numberPart || 0);
  const fraction = numberPart.includes(".") ? numberPart.split(".")[1]?.length ?? 0 : 0;

  let minimumIntegerDigits: number | undefined;
  if (!suffix && /^0\d+$/.test(cleaned)) {
    // Preserve leading zeroes for values like "04".
    minimumIntegerDigits = cleaned.length;
  }

  return {
    target: Number.isFinite(target) ? target : 0,
    suffix,
    minimumIntegerDigits,
    maximumFractionDigits: Math.min(3, Math.max(0, fraction)),
  };
}

export type AnimatedNumberProps = {
  value: string | number;
  className?: string;
  duration?: number;
  delay?: number;
  start?: number;
};

export function AnimatedNumber({
  value,
  className,
  duration = 1.1,
  delay = 0,
  start = 0,
}: AnimatedNumberProps) {
  const prefersReducedMotion = useReducedMotion();
  const parsed = React.useMemo(() => parseAnimatedValue(value), [value]);

  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });

  const [displayValue, setDisplayValue] = React.useState<number>(start);

  React.useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(parsed.target);
      return;
    }

    const controls = animate(start, parsed.target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (parsed.maximumFractionDigits === 0) {
          setDisplayValue(Math.round(latest));
        } else {
          setDisplayValue(latest);
        }
      },
    });

    return () => controls.stop();
  }, [delay, duration, isInView, parsed.maximumFractionDigits, parsed.target, prefersReducedMotion, start]);

  const formatter = React.useMemo(() => {
    return new Intl.NumberFormat(undefined, {
      minimumIntegerDigits: parsed.minimumIntegerDigits,
      maximumFractionDigits: parsed.maximumFractionDigits,
    });
  }, [parsed.maximumFractionDigits, parsed.minimumIntegerDigits]);

  const formatted = `${formatter.format(displayValue)}${parsed.suffix}`;

  return (
    <span
      ref={ref}
      className={cn("tabular-nums", className)}
      aria-label={typeof value === "string" ? value : formatter.format(parsed.target)}
    >
      {formatted}
    </span>
  );
}
