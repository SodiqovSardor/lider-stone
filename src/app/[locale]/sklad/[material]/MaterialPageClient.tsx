"use client";

import MaterialFilter from "@/src/components/MaterialFilter";
import SectionHeading from "@/src/components/SectionHeading";
import StoneCard from "@/src/components/StoneCard";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import type { Stone } from "@/src/types/stone";

interface Props {
  material: { slug: string; label: string };
  stones: Stone[];
}

export default function MaterialPageClient({ material, stones }: Props) {
  const { dict } = useI18n();
  const materialLabel = dict.materialLabels[material.slug as keyof typeof dict.materialLabels] ?? material.label;

  return (
    <div className="pt-40 pb-32 md:pt-52 md:pb-44">
      <div className="container-section">
        <SectionHeading
          eyebrow={materialLabel}
          title={dict.material.title.replace("{m}", materialLabel)}
          description={dict.material.desc.replace("{m}", materialLabel)}
          className="mb-14"
        />
        <div className="mb-12">
          <MaterialFilter />
        </div>
        {stones.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stones.map((stone) => (
              <StoneCard key={stone.slug} stone={stone} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center font-sans text-base text-stone-400">
            {dict.inventory.noMaterial.replace("{m}", materialLabel)}
          </p>
        )}
      </div>
    </div>
  );
}
