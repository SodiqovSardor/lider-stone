"use client";

import { motion } from "framer-motion";
import { usePathname } from "@/src/lib/i18n/navigation";
import { cn } from "@/src/lib/utils";
import { Link } from "@/src/lib/i18n/Link";
import { useI18n } from "@/src/lib/i18n/I18nProvider";

export default function MaterialFilter() {
  const pathname = usePathname();
  const { dict } = useI18n();

  const materials = [
    { slug: "marble", label: dict.materialLabels.marble },
    { slug: "quartzite", label: dict.materialLabels.quartzite },
    { slug: "granite", label: dict.materialLabels.granite },
    { slug: "onyx", label: dict.materialLabels.onyx },
    { slug: "travertine", label: dict.materialLabels.travertine },
  ];

  function linkCn(href: string) {
    return cn(
      "relative rounded-sm px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-all",
      pathname === href
        ? "text-bronze"
        : "text-stone-400 hover:text-stone-100",
    );
  }

  return (
    <div className="relative flex flex-wrap gap-1">
      <Link href="/sklad" className={linkCn("/sklad")}>
        {dict.common.all}
        {pathname === "/sklad" && (
          <motion.div layoutId="filter-active" className="absolute bottom-0 left-2 right-2 h-[1px] bg-bronze" />
        )}
      </Link>
      {materials.map((m) => (
        <Link key={m.slug} href={`/sklad/${m.slug}`} className={linkCn(`/sklad/${m.slug}`)}>
          {m.label}
          {pathname === `/sklad/${m.slug}` && (
            <motion.div layoutId="filter-active" className="absolute bottom-0 left-2 right-2 h-[1px] bg-bronze" />
          )}
        </Link>
      ))}
    </div>
  );
}
