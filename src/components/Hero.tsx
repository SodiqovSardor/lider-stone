"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { Link } from "@/src/lib/i18n/Link";
import { imageReveal, fadeUp as _ } from "@/src/lib/motion";
const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroImages = [
  "https://picsum.photos/seed/hero-stone-1/1920/1080",
  "https://picsum.photos/seed/hero-stone-2/1920/1080",
  "https://picsum.photos/seed/hero-stone-3/1920/1080",
];

export default function Hero() {
  const { dict } = useI18n();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-dvh min-h-[40rem] items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt="Natural stone slab texture"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Radial vignette overlay */}
      <div className="hero-overlay absolute inset-0" />

      <div className="container-section relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
          className="mb-8 font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-white/50"
        >
          {dict.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: luxuryEase }}
          className="font-sans text-6xl font-thin leading-[0.9] tracking-[-0.04em] text-white md:text-8xl lg:text-9xl"
        >
          {dict.hero.title}<br />
          <span className="text-[#c9a55c]">{dict.hero.titleAccent}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: luxuryEase }}
          className="mx-auto mt-8 max-w-sm font-sans text-sm font-light leading-relaxed text-white/60 md:text-base"
        >
          {dict.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: luxuryEase }}
          className="mt-14"
        >
          <Link
            href="/sklad"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
          >
            {dict.common.openCatalog}
          </Link>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[1px] rounded-full transition-all duration-700 ${
              i === current ? "w-8 bg-white/30" : "w-4 bg-white/10"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
