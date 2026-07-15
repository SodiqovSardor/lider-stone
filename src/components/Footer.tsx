"use client";

import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { Link } from "@/src/lib/i18n/Link";
import { Phone, Mail, MapPin, ArrowUpRight, Send } from "lucide-react";

export default function Footer() {
  const { dict } = useI18n();

  const materials = [
    { slug: "marble", label: dict.materialLabels.marble },
    { slug: "quartzite", label: dict.materialLabels.quartzite },
    { slug: "granite", label: dict.materialLabels.granite },
    { slug: "onyx", label: dict.materialLabels.onyx },
    { slug: "travertine", label: dict.materialLabels.travertine },
  ];

  return (
    <footer className="border-t border-stone-700/20 bg-obsidian">
      <div className="container-section py-24 md:py-36">
        <div className="grid gap-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-sans text-lg tracking-[0.3em] text-stone-100 transition-colors hover:text-stone-400"
            >
              {dict.common.logo}
            </Link>
            <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-stone-400">
              {dict.footer.tagline}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://t.me/liderstone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700/50 text-stone-400 transition-colors hover:border-bronze/60 hover:text-bronze"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/998901234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700/50 text-stone-400 transition-colors hover:border-bronze/60 hover:text-bronze"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@liderstone.uz"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700/50 text-stone-400 transition-colors hover:border-bronze/60 hover:text-bronze"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400">
              {dict.footer.materials}
            </h4>
            <ul className="space-y-3">
              {materials.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/${m.slug}`}
                    className="inline-flex items-center gap-1 font-sans text-sm text-stone-400 transition-colors hover:text-stone-100"
                  >
                    {m.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400">
              {dict.footer.navigate}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: dict.nav.home },
                { href: "/sklad", label: dict.nav.inventory },
                { href: "/projects", label: dict.nav.projects },
                { href: "/contact", label: dict.nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-stone-400 transition-colors hover:text-stone-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400">
              {dict.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze/70" />
                <a
                  href="https://maps.google.com/?q=Yashnabod+Tashkent+Uzbekistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-stone-400 transition-colors hover:text-stone-100"
                >
                  Yashnabod district,<br />Tashkent, Uzbekistan
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-bronze/70" />
                <a href="tel:+998901234567" className="font-sans text-sm text-stone-400 transition-colors hover:text-stone-100">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-bronze/70" />
                <a href="mailto:info@liderstone.uz" className="font-sans text-sm text-stone-400 transition-colors hover:text-stone-100">
                  info@liderstone.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-stone-700/20 pt-8 text-[11px] text-stone-700 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Lider Stone. {dict.common.copyright}</p>
          <p>
            <span className="opacity-50">{dict.common.coordinates}: </span>
            41°19&prime;N 69°17&prime;E
          </p>
        </div>
      </div>
    </footer>
  );
}
