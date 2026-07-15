"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const words = ["Marble", "Quartzite", "Onyx", "Granite", "Travertine"];

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const [wordIdx, setWordIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (sessionStorage.getItem("ls-loaded")) { setShow(false); return; }
    mq.addEventListener("change", (e) => setReduced(e.matches));
  }, []);

  useEffect(() => {
    if (reduced || !show) return;
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 250);
    return () => clearInterval(t);
  }, [reduced, show]);

  const onComplete = useCallback(() => {
    setDone(true);
    sessionStorage.setItem("ls-loaded", "1");
    setTimeout(() => setShow(false), 600);
  }, []);

  if (reduced) {
    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[100] flex items-center justify-center"
              onAnimationComplete={() => { sessionStorage.setItem("ls-loaded", "1"); setShow(false); }}
            />
          )}
        </AnimatePresence>
        {!show && children}
      </>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key="preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              <span className="font-sans text-2xl tracking-[0.35em] text-white/80">
                LIDER STONE
              </span>
              <div className="h-[1px] w-40 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  onAnimationComplete={onComplete}
                  transition={{ duration: 1.6, ease: luxuryEase }}
                  className="h-full w-full origin-left rounded-full bg-white/40"
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIdx]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/40"
                >
                  {words[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={done ? { opacity: 1 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: luxuryEase }}
      >
        {children}
      </motion.div>
    </>
  );
}
