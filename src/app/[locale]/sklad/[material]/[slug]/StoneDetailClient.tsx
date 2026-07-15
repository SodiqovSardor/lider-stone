"use client";

import ImageGallery from "@/src/components/ImageGallery";
import StoneCard from "@/src/components/StoneCard";
import SectionHeading from "@/src/components/SectionHeading";
import { useI18n } from "@/src/lib/i18n/I18nProvider";
import type { Stone } from "@/src/types/stone";
import { Send, MessageCircle, Ruler, MapPin } from "lucide-react";

interface Props {
  stone: Stone;
  related: Stone[];
}

export default function StoneDetailClient({ stone, related }: Props) {
  const { locale, dict } = useI18n();
  const materialLabel = dict.materialLabels[stone.material as keyof typeof dict.materialLabels] ?? stone.material;

  return (
    <div className="pt-40 pb-32 md:pt-52 md:pb-44">
      <div className="container-section">
        <ImageGallery images={stone.images} alt={stone.name} />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-bronze/70">
              {materialLabel}
            </p>
            <h1 className="font-sans text-4xl font-light leading-tight tracking-[-0.02em] text-stone-100 md:text-5xl">
              {stone.name}
            </h1>
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-stone-400 md:text-lg">
              {locale === "ru" && stone.descriptionRu ? stone.descriptionRu : locale === "uz" && stone.descriptionUz ? stone.descriptionUz : stone.description}
            </p>
          </div>

          <div className="space-y-6 rounded-sm border border-stone-700/20 bg-charcoal p-6">
            <div className="space-y-5">
              {stone.origin && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze/70" />
                  <div>
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{dict.stoneDetail.origin}</p>
                    <p className="font-sans text-sm text-stone-100">{stone.origin}</p>
                  </div>
                </div>
              )}
              {stone.finish.length > 0 && (
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-bronze/60" />
                  <div>
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{dict.stoneDetail.finish}</p>
                    <p className="font-sans text-sm text-stone-100">{stone.finish.join(", ")}</p>
                  </div>
                </div>
              )}
              {(stone.dimensions || stone.thickness) && (
                <div className="flex items-start gap-3">
                  <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-bronze/70" />
                  <div>
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{dict.stoneDetail.dimensions}</p>
                    {stone.dimensions && <p className="font-sans text-sm text-stone-100">{stone.dimensions}</p>}
                    {stone.thickness && <p className="font-sans text-sm text-stone-100">{stone.thickness}</p>}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-stone-700/20 pt-6">
              <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">{dict.stoneDetail.ask}</p>
              <div className="flex flex-col gap-3">
                <a href={`https://t.me/liderstone?text=Hi,%20I'm%20interested%20in%20${stone.name}%20(${stone.material})`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-bronze px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-obsidian transition-all hover:bg-bronze-dim">
                  <Send className="h-3.5 w-3.5" /> {dict.common.telegram}
                </a>
                <a href={`https://wa.me/998901234567?text=Hi,%20I'm%20interested%20in%20${stone.name}%20(${stone.material})`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-bronze/60 px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-bronze transition-all hover:bg-bronze hover:text-obsidian">
                  <MessageCircle className="h-3.5 w-3.5" /> {dict.common.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-28">
            <SectionHeading
              eyebrow={dict.stoneDetail.relatedEyebrow}
              title={dict.stoneDetail.related.replace("{m}", materialLabel)}
              className="mb-14"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <StoneCard key={s.slug} stone={s} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
