import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/src/lib/data/projects";
import { getStoneBySlug } from "@/src/lib/data/stones";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import type { Locale } from "@/src/lib/i18n/config";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const dict = getDictionary(locale as Locale);
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} \u00B7 Lider Stone`,
    description: `${project.title} — ${dict.projects.roomTypes[project.roomType.toLowerCase() as keyof typeof dict.projects.roomTypes] ?? project.roomType} project. ${project.description.slice(0, 120)}`,
    openGraph: {
      title: `${project.title} \u00B7 Lider Stone`,
      description: `${project.roomType} project. ${project.description.slice(0, 120)}`,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const stones = project.stonesUsed
    .map((s) => getStoneBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getStoneBySlug>>[];

  return <ProjectDetailClient project={project} stones={stones} />;
}
