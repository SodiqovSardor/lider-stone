"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { fadeUp } from "@/src/lib/motion";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {images.map((src, i) => (
          <motion.button
            key={src}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => setSelected(i)}
            className={cn(
              "group relative overflow-hidden rounded-sm border border-stone-700/20",
              i === 0 ? "col-span-2 row-span-2" : "",
            )}
          >
            <div className={cn("relative", i === 0 ? "aspect-[4/3]" : "aspect-square")}>
              <Image
                src={src}
                alt={`${alt} — image ${i + 1}`}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
              />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 z-10 text-stone-400 transition-colors hover:text-stone-100"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={() => setSelected((selected - 1 + images.length) % images.length)}
                  className="absolute left-6 z-10 text-stone-400 transition-colors hover:text-stone-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={() => setSelected((selected + 1) % images.length)}
                  className="absolute right-6 top-1/2 z-10 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-full max-h-[85vh] w-full max-w-5xl"
            >
              <Image
                src={images[selected]}
                alt={`${alt} — image ${selected + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
