"use client";

import {
  usePathname as useNextPathname,
  useRouter as useNextRouter,
} from "next/navigation";
import { useCallback } from "react";
import { useI18n } from "./I18nProvider";

export function localizeHref(href: string, locale: string) {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  )
    return href;
  if (href === "/") return `/${locale}`;
  if (href.startsWith("/")) return `/${locale}${href}`;
  return `/${href}`;
}

/**
 * Returns the current pathname with the locale prefix stripped.
 * e.g. "/en/sklad/marble" → "/sklad/marble", "/en" → "/"
 */
export function usePathname() {
  const { locale } = useI18n();
  const pathname = useNextPathname();

  const prefix = `/${locale}`;
  if (pathname === prefix || pathname === `${prefix}/`) return "/";
  if (pathname.startsWith(prefix + "/")) return pathname.slice(prefix.length);
  return pathname;
}

/**
 * Locale-aware router.
 */
export function useRouter() {
  const { locale } = useI18n();
  const nextRouter = useNextRouter();

  const push = useCallback(
    (to: string) => {
      nextRouter.push(localizeHref(to, locale));
    },
    [locale, nextRouter],
  );

  return { push };
}
