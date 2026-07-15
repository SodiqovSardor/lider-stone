"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/src/lib/i18n/Link";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { fadeUp } from "@/src/lib/motion";
const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
import type { Project } from "@/src/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { dict } = useI18n();
  const roomKey = project.roomType.toLowerCase() as keyof typeof dict.projects.roomTypes;
  const roomLabel = dict.projects.roomTypes[roomKey] ?? project.roomType;

  return (
    <motion.div
      variants={fadeUp}
      className="card-hover"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-sm border border-stone-700/20 bg-charcoal transition-colors hover:bg-charcoal/80"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="h-full w-full"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="flex items-start justify-between gap-4 p-7">
          <div className="flex flex-col gap-1.5">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-bronze/70">
              {roomLabel}
            </span>
            <h3 className="font-sans text-base font-light tracking-[-0.01em] text-stone-100">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-bronze" aria-hidden />
        </div>
      </Link>
    </motion.div>
  );
}
