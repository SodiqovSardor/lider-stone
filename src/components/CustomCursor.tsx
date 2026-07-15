"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    };

    document.addEventListener("mousemove", onMove);
    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ transform: "translate(-100px, -100px)" }}
    >
      {/* Outer ring — shadow ensures visibility on light bg */}
      <div className="h-8 w-8 rounded-full border border-bronze/60 shadow-[0_0_6px_rgba(176,141,87,0.3)]" />
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze shadow-[0_0_4px_rgba(176,141,87,0.5)]" />
    </div>
  );
}
