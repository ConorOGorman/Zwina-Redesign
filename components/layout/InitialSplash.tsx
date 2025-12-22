"use client";

import React from "react";
import { INITIAL_SPLASH_HTML_CLASS_ACTIVE } from "@/components/layout/initialSplashConfig";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function InitialSplash() {
  const [state, setState] = React.useState<"idle" | "active" | "exiting">("idle");
  const [render, setRender] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const isActive = document.documentElement.classList.contains(INITIAL_SPLASH_HTML_CLASS_ACTIVE);
    if (!isActive) {
      setRender(false);
      return;
    }

    setState("active");
    const showMs = prefersReducedMotion() ? 3000 : 3800;
    const fadeMs = 450;
    const progressMs = prefersReducedMotion() ? 0 : Math.max(800, showMs - 650);

    let rafId = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (progressMs === 0) {
        setProgress(100);
        return;
      }
      const t = Math.min(1, (now - start) / progressMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(100, Math.round(eased * 100)));
      if (t < 1) rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    const exitTimer = window.setTimeout(() => {
      setState("exiting");
      document.documentElement.classList.remove(INITIAL_SPLASH_HTML_CLASS_ACTIVE);
    }, showMs);

    const unmountTimer = window.setTimeout(() => {
      setRender(false);
    }, showMs + fadeMs);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(exitTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!render) return null;

  return (
    <div className="zwina-initial-splash" data-state={state} aria-hidden={state !== "active"}>
      <div className="zwina-splash-inner">
        <div className="zwina-splash-logo" aria-label="Zwina">
          <span className="zwina-splash-letter zwina-splash-letter--z">Z</span>
          <span className="zwina-splash-letter zwina-splash-letter--w">W</span>
          <span className="zwina-splash-letter zwina-splash-letter--i">I</span>
          <span className="zwina-splash-letter zwina-splash-letter--n">N</span>
          <span className="zwina-splash-letter zwina-splash-letter--a">A</span>
        </div>
        <div className="zwina-splash-progress" aria-hidden="true">
          <div className="zwina-splash-progress-track">
            <div className="zwina-splash-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="zwina-splash-progress-meta">
            <div className="zwina-splash-caption">Zwina Foundation</div>
            <div className="zwina-splash-percent">{progress}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
