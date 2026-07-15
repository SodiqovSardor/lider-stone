"use client";

import { forwardRef } from "react";
import NextLink from "next/link";
import { useI18n } from "./I18nProvider";
import { localizeHref } from "./navigation";

/**
 * Locale-aware Link component. Automatically prepends the current locale.
 */
export const Link = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(function Link({ href, ...props }, ref) {
  const { locale } = useI18n();
  const localizedHref =
    typeof href === "string" ? localizeHref(href, locale) : href;
  return <NextLink ref={ref} href={localizedHref} {...props} />;
});
