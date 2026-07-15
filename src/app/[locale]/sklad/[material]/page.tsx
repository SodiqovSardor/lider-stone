import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { materials as materialDefs, getStonesByMaterial } from "@/src/lib/data/stones";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import type { Locale } from "@/src/lib/i18n/config";
import MaterialPageClient from "./MaterialPageClient";

interface Props {
  params: Promise<{ locale: string; material: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, material } = await params;
  const dict = getDictionary(locale as Locale);
  const m = materialDefs.find((m) => m.slug === material);
  if (!m) return { title: "Not Found" };
  return {
    title: `${dict.materialLabels[m.slug as keyof typeof dict.materialLabels]} \u00B7 Lider Stone`,
    description: dict.material.desc.replace(
      "{m}",
      dict.materialLabels[m.slug as keyof typeof dict.materialLabels],
    ),
    openGraph: {
      title: `${dict.materialLabels[m.slug as keyof typeof dict.materialLabels]} \u00B7 Lider Stone`,
      description: dict.material.desc.replace(
        "{m}",
        dict.materialLabels[m.slug as keyof typeof dict.materialLabels],
      ),
    },
  };
}

export default async function MaterialPage({ params }: Props) {
  const { material } = await params;
  const m = materialDefs.find((m) => m.slug === material);
  if (!m) notFound();
  const stones = getStonesByMaterial(material);
  return <MaterialPageClient material={m} stones={stones} />;
}
