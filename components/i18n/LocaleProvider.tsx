"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/messages";
import { LOCALE_COOKIE } from "@/lib/i18n/constants";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale ?? DEFAULT_LOCALE);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_COOKIE);
    if (stored && (LOCALES as readonly string[]).includes(stored)) {
      setLocaleState(stored as Locale);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_COOKIE, locale);
    document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [locale]);

  const setLocale = React.useCallback(
    (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      window.localStorage.setItem(LOCALE_COOKIE, nextLocale);
      document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(nextLocale)}; Path=/; Max-Age=31536000; SameSite=Lax`;
      router.refresh();
    },
    [router],
  );

  const value = React.useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

