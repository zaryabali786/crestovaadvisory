"use client";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";

const days = [
  { d: 1, t: "Capture", x: "Transactions captured, bank feeds and cards reconciled." },
  { d: 2, t: "Post", x: "Payables, receivables, payroll and accruals posted." },
  { d: 3, t: "Reconcile", x: "Control accounts, intercompany and stock balances cleared." },
  { d: 4, t: "Analyse", x: "Management accounts drafted, variances explained." },
  { d: 5, t: "Review & deliver", x: "Senior CA review, then your pack lands in your inbox." },
];

export default function CloseTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
  const [day, setDay] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setDay(Math.max(0, Math.min(5, Math.ceil(v * 5.2)))));
  const fill = useTransform(p, [0, 1], ["0%", "100%"]);

  return (
    <section className="section bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Month-end close</p>
          <h2 className="h-section mt-4">Five days. Every month. In writing.</h2>
          <p className="lead mt-5">Your close deadline sits in the engagement agreement, not in a promise. Here is what happens, day by day.</p>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <div className="mx-auto mb-12 flex w-fit items-baseline gap-3 rounded-full border border-blue-100 bg-blue-50 px-8 py-3">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Day</span>
            <span className="relative h-14 w-12 overflow-hidden font-serif text-5xl font-semibold text-blue-700">
              <motion.span key={day} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="absolute inset-0 text-center">
                {day === 0 ? "–" : day}
              </motion.span>
            </span>
            <span className="text-sm text-slate-500">of 5</span>
          </div>

          {/* progress track */}
          <div className="absolute left-0 right-0 top-[118px] hidden h-1 rounded-full bg-blue-100 lg:block">
            <motion.div style={{ width: fill }} className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-glow" />
          </div>

          <ol className="grid gap-5 lg:grid-cols-5">
            {days.map((x) => {
              const done = day >= x.d;
              return (
                <li key={x.d} className="relative">
                  <div className="relative z-10 mx-auto mb-5 hidden h-12 w-12 lg:block">
                    <motion.span
                      animate={{ scale: done ? 1 : 0.85, backgroundColor: done ? "#1456D6" : "#ffffff" }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="grid h-12 w-12 place-items-center rounded-full border-2 border-blue-500 text-white shadow-card"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={done ? "#fff" : "#9CC2FF"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <motion.path d="M5 12.5l4.5 4.5L19 7.5" initial={false} animate={{ pathLength: done ? 1 : 0 }} transition={{ duration: 0.5 }} />
                      </svg>
                    </motion.span>
                  </div>
                  <motion.div
                    animate={{ y: done ? -6 : 0, borderColor: done ? "#5E9BFF" : "#E4EEFF" }}
                    transition={{ duration: 0.4 }}
                    className="card border-2 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Day {x.d}</p>
                    <h3 className="mt-1 text-xl font-medium">{x.t}</h3>
                    <p className="mt-2 text-sm text-slate-600">{x.x}</p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
