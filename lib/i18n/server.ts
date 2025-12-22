import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/messages";

import { LOCALE_COOKIE } from "@/lib/i18n/constants";

export function getLocale(): Locale {
  const store = cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  if (raw && (LOCALES as readonly string[]).includes(raw)) return raw as Locale;
  return DEFAULT_LOCALE;
}
