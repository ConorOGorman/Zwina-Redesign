/**
 * Animation constants for consistent timing across the application
 */

export const ANIMATION_DELAYS = {
  /**  Short delay for staggered animations (seconds) */
  SHORT: 0.02,
  /** Medium delay for staggered animations (seconds) */
  MEDIUM: 0.06,
  /** Long delay for staggered animations (seconds) */
  LONG: 0.08,
  /** Extra long delay (seconds) */
  EXTRA_LONG: 0.14,
} as const;

export const ANIMATION_DURATIONS = {
  /** Quick transitions (seconds) */
  QUICK: 0.45,
  /** Standard duration (seconds) */
  NORMAL: 0.7,
  /** Slower transitions (seconds) */
  SLOW: 1.1,
} as const;

export const SCROLL_THRESHOLDS = {
  /** Lower threshold for scroll-triggered animations */
  LOW: 0.35,
  /** Medium threshold for scroll-triggered animations */
  MEDIUM: 0.45,
} as const;

export const SHARE_NOTIFICATION_DURATION_MS = 1200;

export const SPLASH_TIMINGS = {
  /** Show duration in milliseconds (normal motion) */
  SHOW_MS_NORMAL: 3800,
  /** Show duration in milliseconds (reduced motion) */
  SHOW_MS_REDUCED: 3000,
  /** Fade duration in milliseconds */
  FADE_MS: 450,
  /** Calculate progress timing based on show duration */
  getProgressMs: (showMs: number) => Math.max(800, showMs - 650),
} as const;
