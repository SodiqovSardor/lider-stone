import type { Metadata } from "next";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import type { Locale } from "@/src/lib/i18n/config";
import ContactClient from "./ContactClient";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: `${dict.contact.title} \u00B7 Lider Stone`,
    description: dict.contact.desc,
    openGraph: {
      title: `${dict.contact.title} \u00B7 Lider Stone`,
      description: dict.contact.desc,
    },
  };
}

export default async function ContactPage() {
  return <ContactClient />;
}
