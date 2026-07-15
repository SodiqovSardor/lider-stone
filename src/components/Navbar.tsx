"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { Link } from "@/src/lib/i18n/Link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "@/src/lib/ThemeProvider";

const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const { dict } = useI18n();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/sklad", label: dict.nav.inventory },
    { href: "/projects", label: dict.nav.projects },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-stone-700/20 bg-obsidian/90 backdrop-blur-xl"
          : "border-transparent",
      )}
    >
      <nav className="container-section flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-sans text-sm tracking-[0.35em] text-stone-100 transition-colors hover:text-stone-400 md:text-base"
        >
          {dict.common.logo}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[10px] uppercase tracking-[0.25em] text-stone-400/70 transition-colors hover:text-stone-100"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-4">
            <LanguageSwitcher />
            <button onClick={toggle} className="text-stone-400/70 transition-colors hover:text-stone-100" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="https://t.me/liderstone"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
            >
              {dict.common.telegram}
            </a>
          </div>
        </div>

        <button
          className="relative z-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-stone-100" />
          ) : (
            <Menu className="h-5 w-5 text-stone-100" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: luxuryEase }}
            className="bg-[rgba(11,10,8,0.85)] fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 backdrop-blur-2xl"
          >
            
            <div className="relative z-10 flex flex-col items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-2xl tracking-[0.15em] text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex items-center gap-6">
                <LanguageSwitcher />
                <button onClick={toggle} className="text-white/60 transition-colors hover:text-white" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <a
                  href="https://t.me/liderstone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
                >
                  {dict.common.telegram}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
