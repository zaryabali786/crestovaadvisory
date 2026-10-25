"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section className="section relative bg-blue-50">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="h-section mt-4">From first call to first close, in four clear steps.</h2>
            <p className="lead mt-5 max-w-md">No account managers and no hidden costs. A senior Chartered Accountant stays on your engagement from the discovery call onwards.</p>
          </Reveal>
        </div>
        <div ref={ref} className="relative pl-10 sm:pl-14">
          <div className="absolute bottom-2 left-[15px] top-2 w-px bg-blue-200 sm:left-[23px]" />
          <motion.div style={{ scaleY: h, transformOrigin: "top" }} className="absolute bottom-2 left-[14px] top-2 w-[3px] rounded-full bg-gradient-to-b from-blue-500 to-cyan-glow sm:left-[22px]" />
          <ul className="space-y-10">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.05} className="relative">
                <span className="absolute -left-10 top-1 grid h-8 w-8 place-items-center rounded-full border-2 border-blue-500 bg-white text-[11px] font-bold text-blue-600 sm:-left-14 sm:h-12 sm:w-12 sm:text-sm">{s.n}</span>
                <div className="card p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                  <h3 className="text-2xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
