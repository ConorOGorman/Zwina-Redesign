"use client";

import { Container } from "@/components/primitives/Container";
import { Link } from "@/components/primitives/Link";
import { Button } from "@/components/primitives/Button";
import React from "react";

export const Header: React.FC = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-foreground/10 bg-background/90 backdrop-blur-2xl shadow-sm">
        <Container className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline group" variant="default" aria-label="Zwina Foundation">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-0.5 text-3xl font-black tracking-tighter leading-none text-foreground">
                <span className="text-[var(--logo-z)] inline-block will-change-transform transition-transform duration-normal ease-default group-hover:-translate-y-0.5 motion-reduce:transform-none">
                  Z
                </span>
                <span className="text-[var(--logo-yellow)] inline-block will-change-transform transition-transform duration-normal ease-default delay-75 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                  W
                </span>
                <span className="text-[var(--accent)] inline-block will-change-transform transition-transform duration-normal ease-default delay-100 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                  I
                </span>
                <span className="text-[var(--logo-n)] inline-block will-change-transform transition-transform duration-normal ease-default delay-150 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                  N
                </span>
                <span className="text-[var(--logo-yellow)] inline-block will-change-transform transition-transform duration-normal ease-default delay-200 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                  A
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full origin-left scale-x-90 rounded-full bg-[var(--color-sky)] opacity-80 transition-[transform,opacity] duration-normal ease-default group-hover:scale-x-110 group-hover:opacity-100 motion-reduce:transition-none" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block text-xs uppercase tracking-[0.22em] text-foreground/75 transition-colors duration-200 hover:text-foreground"
                variant="default"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              asChild
              className="shadow-[0_12px_24px_-12px_rgba(46,125,162,0.55)] hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-16px_rgba(46,125,162,0.55)]"
            >
              <Link href="/donate" className="no-underline">
                Donate
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition hover:border-foreground/25 hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span
              className={`relative h-4 w-5 transition-transform duration-200 ease-out ${
                isMenuOpen ? "rotate-45" : ""
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-foreground transition-all duration-200 ease-out ${
                  isMenuOpen ? "translate-y-2" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-foreground transition-all duration-200 ease-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-foreground transition-all duration-200 ease-out ${
                  isMenuOpen ? "-translate-y-2" : ""
                }`}
              />
            </span>
          </button>
        </Container>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={closeMenu} />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(20rem,80%)] flex-col border-l border-foreground/10 bg-background shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-foreground/10 px-4 sm:px-6 lg:px-8 py-5">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition hover:border-foreground/25 hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <span className="relative h-4 w-4">
                <span className="absolute left-1/2 top-0 h-0.5 w-full -translate-x-1/2 rotate-45 rounded-full bg-foreground" />
                <span className="absolute left-1/2 top-0 h-0.5 w-full -translate-x-1/2 -rotate-45 rounded-full bg-foreground" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold uppercase tracking-[0.25em] text-foreground/80 transition-colors duration-200 hover:text-foreground"
                variant="default"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-foreground/10 px-4 sm:px-6 lg:px-8 py-6">
            <Button
              variant="primary"
              size="md"
              asChild
              className="w-full justify-center shadow-[0_18px_32px_-16px_rgba(46,125,162,0.55)] hover:-translate-y-0.5"
            >
              <Link href="/donate" className="no-underline" onClick={closeMenu}>
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
