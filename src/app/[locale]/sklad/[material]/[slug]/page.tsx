import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStoneBySlug, getRelatedStones } from "@/src/lib/data/stones";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import type { Locale } from "@/src/lib/i18n/config";
import StoneDetailClient from "./StoneDetailClient";

interface Props {
  params: Promise<{ locale: string; material: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const dict = getDictionary(locale as Locale);
  const stone = getStoneBySlug(slug);
  if (!stone) return { title: "Not Found" };
  return {
    title: `${stone.name} \u00B7 Lider Stone`,
    description: `${stone.name} — ${dict.materialLabels[stone.material as keyof typeof dict.materialLabels]} from ${stone.origin}.`,
    openGraph: {
      title: `${stone.name} \u00B7 Lider Stone`,
      description: `${stone.material} from ${stone.origin}. ${stone.description.slice(0, 120)}`,
      images: [{ url: stone.images[0] }],
    },
  };
}

export default async function StoneDetailPage({ params }: Props) {
  const { slug } = await params;
  const stone = getStoneBySlug(slug);
  if (!stone) notFound();
  const related = getRelatedStones(stone.slug);
  return <StoneDetailClient stone={stone} related={related} />;
}
