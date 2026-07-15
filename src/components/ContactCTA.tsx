"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import { fadeUp } from "@/src/lib/motion";

export default function ContactCTA() {
  const { dict } = useI18n();

  return (
    <section className="border-t border-white/5 py-32 md:py-44">
      <div className="container-section text-center">
        <SectionHeading
          eyebrow={dict.home.ctaEyebrow}
          title={dict.home.ctaTitle}
          description={dict.home.ctaDesc}
          align="center"
          index="03"
          className="mb-14"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://t.me/liderstone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-bronze px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian transition-all hover:bg-bronze-dim"
          >
            <Send className="h-4 w-4" />
            {dict.common.telegram}
          </a>
          <a
            href="https://wa.me/998901234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-bronze/60 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-bronze transition-all hover:bg-bronze hover:text-obsidian"
          >
            <MessageCircle className="h-4 w-4" />
            {dict.common.whatsapp}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
