"use client";

import { useParams } from "next/navigation";
import { locales, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./get-dictionary";

const dictCache = new Map<string, Dictionary>();

/**
 * Hook that returns the current locale and its dictionary.
 * Reads locale from route params — no context needed.
 */
export function useI18n(): { locale: Locale; dict: Dictionary } {
  const params = useParams();
  const localeRaw = params?.locale as string | undefined;
  const locale = (
    localeRaw && (locales as readonly string[]).includes(localeRaw)
      ? localeRaw
      : "en"
  ) as Locale;

  if (!dictCache.has(locale)) {
    dictCache.set(locale, getDictionary(locale));
  }

  return { locale, dict: dictCache.get(locale)! };
}
