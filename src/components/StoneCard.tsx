"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { Link } from "@/src/lib/i18n/Link";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { fadeUp } from "@/src/lib/motion";
const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
import type { Stone } from "@/src/types/stone";

interface StoneCardProps {
  stone: Stone;
  index?: number;
}

export default function StoneCard({ stone, index = 0 }: StoneCardProps) {
  const { dict } = useI18n();
  const materialLabel =
    dict.materialLabels[stone.material as keyof typeof dict.materialLabels] ??
    stone.material;

  return (
    <motion.div
      variants={fadeUp}
      className="card-hover"
    >
      <Link
        href={`/sklad/${stone.material}/${stone.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-sm border border-stone-700/20 bg-charcoal transition-colors hover:bg-charcoal/80"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="h-full w-full"
          >
            <Image
              src={stone.images[0]}
              alt={`${stone.name} — ${materialLabel}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="flex flex-col gap-2 p-7">
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-bronze/70">
            {materialLabel}
          </span>
          <h3 className="font-sans text-base font-light tracking-[-0.01em] text-stone-100">
            {stone.name}
          </h3>
          <p className="font-sans text-xs text-stone-400">
            {stone.origin} &middot; {stone.finish.join(" / ")}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
