"use client";

import { useState } from "react";
import MaterialFilter from "@/src/components/MaterialFilter";
import SectionHeading from "@/src/components/SectionHeading";
import StoneCard from "@/src/components/StoneCard";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { Search } from "lucide-react";
import stones from "@/src/lib/data/stones";

export default function InventoryClient() {
  const { dict } = useI18n();
  const [query, setQuery] = useState("");

  const filtered = stones.filter((s) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return s.name.toLowerCase().includes(q) || s.material.toLowerCase().includes(q) || s.origin.toLowerCase().includes(q);
  });

  return (
    <div className="pt-40 pb-32 md:pt-52 md:pb-44">
      <div className="container-section">
        <SectionHeading
          eyebrow={dict.inventory.eyebrow}
          title={dict.inventory.title}
          description={dict.inventory.desc}
          className="mb-14"
        />
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <MaterialFilter />
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-700" />
            <input
              type="text"
              placeholder={dict.inventory.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-sm border border-stone-700/30 bg-charcoal px-10 py-2.5 font-sans text-sm text-stone-100 placeholder:text-stone-700 focus:border-bronze/50 focus:outline-none md:w-72"
              aria-label="Search stones"
            />
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((stone) => (
              <StoneCard key={stone.slug} stone={stone} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center font-sans text-base text-stone-400">{dict.common.noResults}</p>
        )}
      </div>
    </div>
  );
}
