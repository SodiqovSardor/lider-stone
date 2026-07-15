import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru", "uz"] as const;
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const acceptLang = request.headers.get("Accept-Language");
  let preferred = defaultLocale;

  if (acceptLang) {
    const detected = acceptLang
      .split(",")
      .map((l) => l.split(";")[0].trim().split("-")[0].toLowerCase())
      .find((l) => (locales as readonly string[]).includes(l));
    if (detected) preferred = detected;
  }

  const url = new URL(`/${preferred}${pathname}`, request.url);
  url.search = request.nextUrl.search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
