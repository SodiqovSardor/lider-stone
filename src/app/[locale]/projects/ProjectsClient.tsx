"use client";

import { useState } from "react";
import SectionHeading from "@/src/components/SectionHeading";
import ProjectCard from "@/src/components/ProjectCard";
import { cn } from "@/src/lib/utils";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import projects from "@/src/lib/data/projects";

export default function ProjectsClient() {
  const { dict } = useI18n();
  const [active, setActive] = useState("all");
  const rt = dict.projects.roomTypes;

  const roomFilters = [
    { slug: "all", label: rt.all },
    { slug: "Interior", label: rt.interior },
    { slug: "Kitchen", label: rt.kitchen },
    { slug: "Staircase", label: rt.staircase },
    { slug: "Facade", label: rt.facade },
  ];

  const filtered = active === "all" ? projects : projects.filter((p) => p.roomType === active);

  return (
    <div className="pt-40 pb-32 md:pt-52 md:pb-44">
      <div className="container-section">
        <SectionHeading
          eyebrow={dict.projects.eyebrow}
          title={dict.projects.title}
          description={dict.projects.desc}
          className="mb-14"
        />
        <div className="mb-12 flex flex-wrap gap-2">
          {roomFilters.map((r) => (
            <button
              key={r.slug}
              onClick={() => setActive(r.slug)}
              className={cn(
                "rounded-sm px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-all",
                active === r.slug
                  ? "text-bronze"
                  : "text-stone-400 hover:text-stone-100",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center font-sans text-base text-stone-400">{dict.projects.noCategory}</p>
        )}
      </div>
    </div>
  );
}
