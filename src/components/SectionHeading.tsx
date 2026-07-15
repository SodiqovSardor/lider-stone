"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { fadeUp } from "@/src/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  index?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  index,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn(align === "center" && "text-center", className)}
    >
      {index && (
        <p className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-stone-700">
          {index}
        </p>
      )}
      {eyebrow && (
        <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-bronze/70">
          {eyebrow}
        </p>
      )}
      <h2 className="font-sans text-3xl font-thin leading-[1.1] tracking-[-0.03em] text-stone-100 md:text-4xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-lg font-sans text-sm font-light leading-relaxed text-stone-400/80 md:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
