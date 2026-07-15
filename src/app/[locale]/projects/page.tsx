import type { Metadata } from "next";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import type { Locale } from "@/src/lib/i18n/config";
import ProjectsClient from "./ProjectsClient";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: `${dict.projects.title} \u00B7 Lider Stone`,
    description: dict.projects.desc,
    openGraph: {
      title: `${dict.projects.title} \u00B7 Lider Stone`,
      description: dict.projects.desc,
    },
  };
}

export default async function ProjectsPage() {
  return <ProjectsClient />;
}
