"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`card overflow-hidden transition-colors ${isOpen ? "border-blue-300" : ""}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="font-serif text-lg font-medium text-blue-950 sm:text-xl">{it.q}</span>
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-blue-200 text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-45 bg-blue-600 text-white" : ""}`}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 1v12M1 7h12" /></svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="px-6 pb-6 pr-16 text-slate-600">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
