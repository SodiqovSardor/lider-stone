import Image from "next/image";
import Hero from "@/src/components/Hero";
import SectionHeading from "@/src/components/SectionHeading";
import StoneCard from "@/src/components/StoneCard";
import ProjectCard from "@/src/components/ProjectCard";
import ContactCTA from "@/src/components/ContactCTA";
import { Link } from "@/src/lib/i18n/Link";
import { getFeaturedStones, materials } from "@/src/lib/data/stones";
import projects from "@/src/lib/data/projects";
import { getDictionary } from "@/src/lib/i18n/get-dictionary";
import type { Locale } from "@/src/lib/i18n/config";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Lider Stone \u00B7 Premium Natural Stone Atelier in Tashkent"
      : `Lider Stone \u00B7 ${dict.hero.eyebrow}`,
    description: dict.hero.subtitle,
    openGraph: {
      title: `Lider Stone \u00B7 ${dict.hero.eyebrow}`,
      description: dict.hero.subtitle,
      url: `https://liderstone.uz/${locale}`,
      siteName: "Lider Stone",
      locale: locale === "uz" ? "uz_UZ" : locale === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
  };
}

const materialImages: Record<string, string> = {
  marble: "marble-category",
  quartzite: "quartzite-category",
  granite: "granite-category",
  onyx: "onyx-category",
  travertine: "travertine-category",
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const featuredStones = getFeaturedStones();
  const featuredProjects = projects.slice(0, 3);
  const h = dict.home;

  return (
    <>
      <Hero />

      {/* 01 — Featured */}
      <section className="py-32 md:py-44">
        <div className="container-section">
          <SectionHeading
            eyebrow={h.featuredEyebrow}
            title={h.featuredTitle}
            description={h.featuredDesc}
            index="01"
            className="mb-16"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredStones.map((stone) => (
              <StoneCard key={stone.slug} stone={stone} />
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Studio */}
      <section className="border-t border-stone-700/20 py-32 md:py-44">
        <div className="container-section">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://picsum.photos/seed/about-stone/800/1000"
                alt="Natural stone slab texture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow={h.studioEyebrow}
                title={h.studioTitle}
                description=""
                index="02"
              />
              <p className="mt-6 max-w-lg font-sans text-base font-light leading-relaxed text-stone-400 md:text-lg">
                {h.studioP1}
              </p>
              <p className="mt-4 max-w-lg font-sans text-base font-light leading-relaxed text-stone-400 md:text-lg">
                {h.studioP2}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 border-b border-bronze/60 pb-0.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-bronze transition-colors hover:text-bronze-dim"
              >
                {dict.common.visitShowroom}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Materials */}
      <section className="border-t border-stone-700/20 py-32 md:py-44">
        <div className="container-section">
          <SectionHeading
            eyebrow={h.materialsEyewbrow}
            title={h.materialsTitle}
            description={h.materialsDesc}
            index="03"
            className="mb-16"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {materials.map((m) => (
              <Link
                key={m.slug}
                href={`/sklad/${m.slug}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-stone-700/20 bg-charcoal"
              >
                <Image
                  src={`https://picsum.photos/seed/${materialImages[m.slug]}/600/800`}
                  alt={m.label}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-sans text-xl font-light tracking-[-0.01em] text-stone-100">
                    {m.label}
                  </h3>
                  <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
                    {dict.common.explore}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Portfolio */}
      <section className="border-t border-stone-700/20 py-32 md:py-44">
        <div className="container-section">
          <SectionHeading
            eyebrow={h.portfolioEyebrow}
            title={h.portfolioTitle}
            description={h.portfolioDesc}
            index="04"
            className="mb-16"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-stone-700/50 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400 transition-all hover:border-stone-100/30 hover:text-stone-100"
            >
              {dict.common.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
