import type { Metadata } from "next";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import type { Locale } from "@/src/lib/i18n/config";
import InventoryClient from "./InventoryClient";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: `${dict.inventory.eyebrow} \u00B7 Lider Stone`,
    description: dict.inventory.desc,
    openGraph: {
      title: `${dict.inventory.eyebrow} \u00B7 Lider Stone`,
      description: dict.inventory.desc,
    },
  };
}

export default async function InventoryPage() {
  return <InventoryClient />;
}
