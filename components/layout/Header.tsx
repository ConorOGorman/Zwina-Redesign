"use client";

import { Container } from "@/components/primitives/Container";
import { Link } from "@/components/primitives/Link";
import { Button } from "@/components/primitives/Button";
import React from "react";
import { ChevronDown, ShoppingCart, Check } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { LANGUAGE_LABEL, LANGUAGE_NAME, LOCALES, type Locale } from "@/lib/i18n/messages";
import { t } from "@/lib/i18n/t";
import { useLocale } from "@/components/i18n/LocaleProvider";

export const Header: React.FC = () => {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const { locale: language, setLocale } = useLocale();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const languageMenuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!isLangOpen) return;
      if (!languageMenuRef.current) return;
      const target = event.target as Node | null;
      if (target && !languageMenuRef.current.contains(target)) setIsLangOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLangOpen) return;
      if (event.key === "Escape") setIsLangOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLangOpen]);

  const navLinks = React.useMemo(
    () => [
      { href: "/", label: t(language, "nav.home") },
      { href: "/about", label: t(language, "nav.about") },
      { href: "/projects", label: t(language, "nav.projects") },
      { href: "/shop", label: t(language, "nav.shop") },
      { href: "/contact", label: t(language, "nav.contact") },
    ],
    [language],
  );

  const languageOptions = React.useMemo(
    () => LOCALES.map((value) => ({ value, label: LANGUAGE_NAME[value] })),
    [],
  );

  React.useEffect(() => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  }, [pathname]);

  const isNavActive = React.useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      if (href === "/projects") return pathname.startsWith("/projects");
      if (href === "/shop") return pathname === "/shop" || pathname.startsWith("/product") || pathname.startsWith("/cart");
      if (href === "/about") return pathname === "/about" || pathname.startsWith("/impact") || pathname.startsWith("/partners");
      return pathname.startsWith(href);
    },
    [pathname],
  );

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

  const applyLocale = React.useCallback(
    (nextLocale: Locale) => {
      setLocale(nextLocale);
      setIsLangOpen(false);
    },
    [setLocale],
  );

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-foreground/10 bg-background/90 backdrop-blur-2xl shadow-sm">
        <Container className="flex h-20 md:h-24 items-center justify-between">
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
                className={[
                  "inline-flex items-center rounded-[var(--radius-button)] px-3 py-2 text-xs uppercase tracking-[0.22em] transition-[color,background-color] duration-200",
                  isNavActive(link.href)
                    ? "bg-secondary text-foreground"
                    : "text-foreground/75 hover:text-foreground hover:bg-foreground/5",
                ].join(" ")}
                variant="default"
                aria-current={isNavActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative hidden md:block" ref={languageMenuRef}>
              <Button
                variant="outline"
                size="sm"
                effect="none"
                type="button"
                className="h-10 px-4"
                aria-haspopup="menu"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-label={t(language, "nav.language")}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <span className="text-xs uppercase tracking-[0.22em]">{LANGUAGE_LABEL[language]}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </Button>

              <div
                role="menu"
                aria-label="Select language"
                className={`absolute right-0 top-[calc(100%+0.75rem)] z-50 w-52 overflow-hidden rounded-md border border-foreground/10 bg-background shadow-[0_20px_44px_-34px_rgba(0,0,0,0.65)] transition-[transform,opacity] duration-200 ease-out ${
                  isLangOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-2">
                  {languageOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      role="menuitemradio"
                      aria-checked={language === option.value}
                      onClick={() => applyLocale(option.value)}
                      className={`w-full rounded-[var(--radius-button)] px-3 py-2 text-left text-xs uppercase tracking-[0.22em] transition-colors ${
                        language === option.value
                          ? "bg-secondary/50 text-foreground"
                          : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                      } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button variant="outline" size="sm" effect="none" asChild className="hidden md:inline-flex h-10 px-3 sm:px-4">
              <Link href="/cart" className="no-underline inline-flex items-center justify-center gap-2" aria-label={t(language, "nav.cart")}>
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline text-xs uppercase tracking-[0.22em]">{t(language, "nav.cart")}</span>
              </Link>
            </Button>

            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition hover:border-foreground/25 hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
              aria-label={t(language, "nav.menu")}
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
          </div>
        </Container>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="absolute inset-0 bg-foreground/35" onClick={closeMenu} />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(22rem,88%)] flex-col border-l border-foreground/10 bg-background shadow-[0_28px_80px_-44px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out rounded-l-2xl ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-5">
            <Link
              href="/"
              className="flex items-center gap-2 no-underline"
              variant="default"
              onClick={closeMenu}
              aria-label="Zwina Foundation"
            >
              <div className="flex items-center gap-0.5 text-xl font-black tracking-tighter leading-none text-foreground">
                <span className="text-[var(--logo-z)]">Z</span>
                <span className="text-[var(--logo-yellow)]">W</span>
                <span className="text-[var(--accent)]">I</span>
                <span className="text-[var(--logo-n)]">N</span>
                <span className="text-[var(--logo-yellow)]">A</span>
              </div>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition hover:border-foreground/25 hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
              onClick={closeMenu}
              aria-label={t(language, "nav.close")}
            >
              <span className="relative h-4 w-4">
                <span className="absolute left-1/2 top-0 h-0.5 w-full -translate-x-1/2 rotate-45 rounded-full bg-foreground" />
                <span className="absolute left-1/2 top-0 h-0.5 w-full -translate-x-1/2 -rotate-45 rounded-full bg-foreground" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "inline-flex min-h-12 items-center rounded-[var(--radius-button)] px-4 text-[15px] font-medium transition-colors duration-200",
                  isNavActive(link.href)
                    ? "bg-secondary/70 text-foreground"
                    : "text-foreground/85 hover:text-foreground hover:bg-foreground/5",
                ].join(" ")}
                variant="default"
                onClick={closeMenu}
                aria-current={isNavActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-foreground/10 px-4 py-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
                {t(language, "nav.language")}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80">
                {LANGUAGE_LABEL[language]}
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {languageOptions.map((option) => {
                const isSelected = language === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      applyLocale(option.value);
                      setIsMenuOpen(false);
                    }}
                    className={[
                      "inline-flex h-10 items-center gap-2 rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                      isSelected
                        ? "border-foreground/15 bg-secondary/60 text-foreground"
                        : "border-foreground/10 bg-background text-foreground/80 hover:bg-foreground/5 hover:text-foreground",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    ].join(" ")}
                    aria-pressed={isSelected}
                  >
                    <span className="whitespace-nowrap">{option.label}</span>
                    {isSelected ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
