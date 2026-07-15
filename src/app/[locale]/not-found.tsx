import Link from "next/link";
import type { Locale } from "@/src/lib/i18n/config";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";

export default async function LocaleNotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  let locale = "en" as Locale;
  try {
    const p = await params;
    if (p?.locale) locale = p.locale as Locale;
  } catch {}

  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-stone-700">Error</p>
      <h1 className="font-sans text-7xl font-thin tracking-[-0.03em] text-stone-100 md:text-9xl">
        404
      </h1>
      <p className="mt-6 font-sans text-base font-light text-stone-400">
        {dict.common.notFound}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-stone-700/50 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400 transition-all hover:border-bronze/60 hover:text-bronze"
      >
        {dict.common.backToHome}
      </Link>
    </div>
  );
}
