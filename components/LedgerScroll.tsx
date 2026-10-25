"use client";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import Wave from "./Wave";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

const steps = [
  { t: "Record", d: "Every transaction captured and coded the day it happens." },
  { t: "Reconcile", d: "Bank, card and ledger balances matched line by line." },
  { t: "Report", d: "Statements prepared to IFRS or local GAAP standards." },
  { t: "Review", d: "A senior Chartered Accountant signs off before delivery." },
];

// [label, value, start, end, kind]
const rows: { label: string; value: number; a: number; b: number; kind: "plain" | "neg" | "total" }[] = [
  { label: "Revenue", value: 1250000, a: 0.04, b: 0.2, kind: "plain" },
  { label: "Cost of sales", value: 640000, a: 0.16, b: 0.32, kind: "neg" },
  { label: "Gross profit", value: 610000, a: 0.3, b: 0.46, kind: "total" },
  { label: "Operating expenses", value: 355000, a: 0.44, b: 0.6, kind: "neg" },
  { label: "Profit before tax", value: 255000, a: 0.58, b: 0.76, kind: "total" },
];

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "$", "£", "%", "Σ", "=", "+", "÷", "×", "₨", "€"];
const floats = Array.from({ length: 22 }, (_, i) => ({
  ch: digits[(i * 7) % digits.length],
  left: `${(i * 37) % 96}%`,
  top: `${(i * 53) % 92}%`,
  size: 18 + ((i * 11) % 34),
  dur: 9 + ((i * 5) % 9),
  delay: -((i * 3) % 11),
}));

function Row({ r, p }: { r: (typeof rows)[number]; p: MotionValue<number> }) {
  const op = useTransform(p, [r.a, r.a + 0.06], [0, 1]);
  const x = useTransform(p, [r.a, r.a + 0.08], [28, 0]);
  const val = useTransform(p, [r.a, r.b], [0, r.value]);
  const text = useTransform(val, (v) => (r.kind === "neg" ? "(" + fmt(v) + ")" : fmt(v)));
  const bar = useTransform(p, [r.a, r.b], [0, r.value / 1250000]);
  const total = r.kind === "total";
  return (
    <motion.div style={{ opacity: op, x }} className={`relative py-3 ${total ? "border-t border-blue-200 font-semibold text-blue-950" : "text-slate-700"}`}>
      <div className="flex items-baseline justify-between gap-4">
        <span className={total ? "font-serif text-[1.05rem]" : "text-[15px]"}>{r.label}</span>
        <motion.span className="tabular-nums font-medium">{text}</motion.span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-blue-50">
        <motion.div style={{ scaleX: bar, transformOrigin: "left" }} className={`h-full rounded-full ${r.kind === "neg" ? "bg-blue-300" : "bg-gradient-to-r from-blue-600 to-cyan-glow"}`} />
      </div>
    </motion.div>
  );
}

export default function LedgerScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(3, Math.floor(v * 4.2))));

  const running = useTransform(p, [0.04, 0.76], [0, 255000]);
  const runningText = useTransform(running, (v) => fmt(v));
  const line = useTransform(p, [0.1, 0.9], [0, 1]);
  const stamp = useTransform(p, [0.82, 0.92], [0, 1]);
  const stampScale = useTransform(p, [0.82, 0.92], [2.2, 1]);
  const stampRot = useTransform(p, [0.82, 0.92], [-18, -6]);
  const barsH = [0.35, 0.5, 0.42, 0.65, 0.8, 0.95];

  return (
    <section ref={ref} className="relative h-[360vh] bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      <Wave fill="#ffffff" flip height={70} />
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
          {floats.map((f, i) => (
            <motion.span
              key={i}
              className="absolute font-serif text-blue-300/[0.09]"
              style={{ left: f.left, top: f.top, fontSize: f.size }}
              animate={{ y: [0, -28, 0], rotate: [0, 8, 0] }}
              transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              {f.ch}
            </motion.span>
          ))}
        </div>
        <div className="absolute -left-40 top-1/4 h-[460px] w-[460px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="container-x relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow !text-cyan-glow before:!bg-cyan-glow">Numbers, done right</p>
            <h2 className="h-section mt-4 !text-white">Watch the books add up.</h2>
            <p className="mt-4 max-w-md text-blue-200">Scroll to see how a month of transactions becomes a statement you can rely on.</p>
            <ol className="mt-8 space-y-3">
              {steps.map((s, i) => (
                <li key={s.t} className={`flex gap-4 rounded-2xl border px-4 py-3 transition-all duration-500 ${active === i ? "border-cyan-glow/60 bg-white/10" : "border-white/10 opacity-50"}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold transition-colors duration-500 ${active >= i ? "bg-cyan-glow text-blue-950" : "bg-white/10 text-white"}`}>{i + 1}</span>
                  <div>
                    <p className="font-serif text-lg">{s.t}</p>
                    <p className={`overflow-hidden text-sm text-blue-200 transition-all duration-500 ${active === i ? "max-h-12 opacity-100" : "max-h-0 opacity-0"}`}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Statement card */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="rounded-3xl bg-white p-6 text-ink shadow-[0_40px_100px_-20px_rgba(0,0,0,.6)] sm:p-8">
              <div className="flex items-center justify-between border-b border-blue-100 pb-4">
                <div>
                  <p className="font-serif text-xl font-medium text-blue-950">Income statement</p>
                  <p className="text-xs text-slate-500">Illustrative example · USD</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">Month-end</span>
              </div>
              <div className="mt-1">
                {rows.map((r) => (
                  <Row key={r.label} r={r} p={p} />
                ))}
              </div>

              <div className="mt-5 grid grid-cols-[1.1fr_1fr] gap-5">
                <div className="flex h-24 items-end gap-2 rounded-xl bg-blue-50 p-3">
                  {barsH.map((h, i) => (
                    <BarGrow key={i} p={p} h={h} i={i} />
                  ))}
                </div>
                <div className="rounded-xl bg-blue-50 p-2">
                  <svg viewBox="0 0 120 80" className="h-full w-full">
                    <motion.path d="M4 70 C 22 66, 30 44, 48 48 S 76 30, 90 24 S 108 10, 116 8" fill="none" stroke="#1456D6" strokeWidth="3" strokeLinecap="round" style={{ pathLength: line }} />
                    <motion.circle r="4" fill="#35D4F5" cx="116" cy="8" style={{ opacity: stamp }} />
                  </svg>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-5 py-4 text-white">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span className="font-serif text-xl">Σ</span> Running total
                </span>
                <motion.span className="font-serif text-2xl tabular-nums">{runningText}</motion.span>
              </div>
            </div>

            <motion.div
              style={{ opacity: stamp, scale: stampScale, rotate: stampRot }}
              className="absolute -right-3 -top-5 rounded-2xl border-[3px] border-cyan-glow bg-blue-950/90 px-4 py-2 text-center font-serif text-lg font-semibold uppercase tracking-wider text-cyan-glow shadow-glow backdrop-blur sm:-right-6"
            >
              ✓ Reconciled
              <span className="block font-sans text-[10px] font-semibold tracking-[0.2em] text-blue-200">BOOKS BALANCED</span>
            </motion.div>
          </div>
        </div>
      </div>
      <Wave fill="#ffffff" height={80} />
    </section>
  );
}

function BarGrow({ p, h, i }: { p: MotionValue<number>; h: number; i: number }) {
  const s = useTransform(p, [0.2 + i * 0.06, 0.34 + i * 0.07], [0, h]);
  return <motion.div style={{ scaleY: s, transformOrigin: "bottom" }} className={`h-full flex-1 rounded-t-md ${i === 5 ? "bg-blue-600" : "bg-blue-300"}`} />;
}
