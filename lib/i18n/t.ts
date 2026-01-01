import { DEFAULT_LOCALE, MESSAGES, type Locale } from "@/lib/i18n/messages";

function getFromPath(obj: Record<string, unknown>, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

export function t(locale: Locale, key: string): string {
  const value = getFromPath(MESSAGES[locale], key);
  if (typeof value === "string") return value;

  const fallback = getFromPath(MESSAGES[DEFAULT_LOCALE], key);
  if (typeof fallback === "string") return fallback;

  return key;
}

