"use client";

import Image from "next/image";
import ImageGallery from "@/src/components/ImageGallery";
import { Link } from "@/src/lib/i18n/Link";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/src/types/project";
import type { Stone } from "@/src/types/stone";

interface Props {
  project: Project;
  stones: Stone[];
}

export default function ProjectDetailClient({ project, stones }: Props) {
  const { locale, dict } = useI18n();
  const roomKey = project.roomType.toLowerCase() as keyof typeof dict.projects.roomTypes;
  const roomLabel = dict.projects.roomTypes[roomKey] ?? project.roomType;

  return (
    <div className="pt-40 pb-32 md:pt-52 md:pb-44">
      <div className="container-section">
        <Link
          href="/projects"
          className="mb-12 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-100"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {dict.projects.back}
        </Link>

        <div className="relative mb-16 aspect-[21/9] overflow-hidden rounded-sm">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        </div>

        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-bronze/70">{roomLabel}</p>
          <h1 className="font-sans text-4xl font-light leading-tight tracking-[-0.02em] text-stone-100 md:text-5xl">{project.title}</h1>
        </div>

        <div className="mb-20 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="font-sans text-base font-light leading-relaxed text-stone-400 md:text-lg">{locale === "ru" && project.descriptionRu ? project.descriptionRu : locale === "uz" && project.descriptionUz ? project.descriptionUz : project.description}</p>
          </div>
          {stones.length > 0 && (
            <div className="rounded-sm border border-stone-700/20 bg-charcoal p-6">
              <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{dict.projects.stonesUsed}</p>
              <ul className="space-y-3">
                {stones.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/sklad/${s.material}/${s.slug}`} className="inline-flex items-center gap-1 font-sans text-sm text-stone-100 transition-colors hover:text-bronze">
                      {s.name} <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <p className="font-sans text-xs text-stone-400">{s.material} &middot; {s.origin}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ImageGallery images={project.images} alt={project.title} />

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-bronze/60 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-bronze transition-all hover:bg-bronze hover:text-obsidian"
          >
            {dict.common.enquire}
          </Link>
        </div>
      </div>
    </div>
  );
}
