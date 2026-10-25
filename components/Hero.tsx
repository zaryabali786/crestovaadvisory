"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroVisual from "./HeroVisual";
import Wave from "./Wave";

const chips = ["SECP Registered", "Xero Certified", "QBO ProAdvisor", "NetSuite Alliance"];

const word = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  show: (i: number) => ({ opacity: 1, y: 0, rotateX: 0, transition: { delay: 0.15 + i * 0.07, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const headline = ["Financial", "clarity", "for", "businesses", "that", "think", "globally."];

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100/70 pb-36 pt-28 lg:pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <motion.div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-blue-300/30 blur-3xl" animate={{ x: [0, 60, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="pointer-events-none absolute -right-32 bottom-10 h-[520px] w-[520px] rounded-full bg-cyan-glow/20 blur-3xl" animate={{ x: [0, -50, 0], y: [0, -40, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />

      <div className="container-x relative grid items-center gap-6 lg:grid-cols-[1.02fr_1fr]">
        <motion.div style={{ y: yText, opacity }} className="relative z-10 min-w-0 py-8">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow">
            Chartered Accountants · 7 Global Markets
          </motion.p>
          <h1 className="h-display mt-5" style={{ perspective: 800 }}>
            {headline.map((w, i) => (
              <motion.span key={i} custom={i} variants={word} initial="hidden" animate="show" className={`mr-[0.25em] inline-block ${i >= 5 ? "pb-[0.14em] bg-gradient-to-r from-blue-600 to-cyan-glow bg-clip-text text-transparent" : ""}`}>
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="lead mt-6 max-w-xl">
            Crestova Advisory is a CA-led firm delivering accounting, tax, audit support and CFO-level strategy to growing businesses across the US, UK, Canada, UAE, Saudi Arabia, Australia and Pakistan.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation →</Link>
            <Link href="/services" className="btn btn-ghost">Explore Services</Link>
          </motion.div>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }} className="mt-10 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c} className="rounded-full border border-blue-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-blue-800 backdrop-blur">{c}</li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative h-[440px] sm:h-[560px] lg:h-[700px]">
          <HeroVisual />
          <motion.div style={{ y: yCard1 }} className="pointer-events-none absolute left-0 top-[14%] sm:-left-4">
            <div className="animate-floaty rounded-2xl border border-white/70 bg-white/75 px-5 py-4 shadow-card backdrop-blur-xl">
              <p className="font-serif text-3xl font-semibold text-blue-700">5 Days</p>
              <p className="text-xs font-medium text-slate-600">Month-end close, in writing</p>
            </div>
          </motion.div>
          <motion.div style={{ y: yCard2 }} className="pointer-events-none absolute bottom-[10%] right-0 sm:-right-2">
            <div className="animate-floaty rounded-2xl border border-white/70 bg-white/75 px-5 py-4 shadow-card backdrop-blur-xl" style={{ animationDelay: "-3s" }}>
              <p className="font-serif text-3xl font-semibold text-blue-700">48 hrs</p>
              <p className="text-xs font-medium text-slate-600">To a fixed-fee proposal</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 lg:flex">
        Scroll
        <span className="relative h-9 w-px overflow-hidden bg-blue-200">
          <motion.span className="absolute inset-x-0 top-0 h-3 bg-blue-600" animate={{ y: [-12, 36] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
        </span>
      </motion.div>

      <Wave fill="#0A2C6B" height={110} />
    </section>
  );
}
