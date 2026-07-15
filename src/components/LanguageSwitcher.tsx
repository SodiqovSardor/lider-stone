"use client";

import { useRouter } from "next/navigation";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { locales, localeLabels, localeFullLabels } from "@/src/lib/i18n/config";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { locale } = useI18n();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function switchTo(target: string) {
    setOpen(false);
    const current = window.location.pathname;
    const newPath = current.replace(/^\/[a-z]{2}/, `/${target}`);
    router.push(newPath);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white/80"
        aria-label="Switch language"
        aria-expanded={open}
      >
        {localeLabels[locale]}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="rounded-sm border border-stone-700/30 bg-charcoal py-1 shadow-xl shadow-obsidian/50 absolute right-0 top-full z-50 mt-2 w-32"
          >
            {locales.map((loc) =>
              loc === locale ? null : (
                <button
                  key={loc}
                  onClick={() => switchTo(loc)}
                  className="block w-full px-4 py-2 text-left font-sans text-[11px] uppercase tracking-[0.1em] text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white/80"
                >
                  {localeFullLabels[loc]}
                </button>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
