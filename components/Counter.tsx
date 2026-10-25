"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => { node.textContent = prefix + Math.round(v) + suffix; } });
    return () => c.stop();
  }, [inView, to, suffix, prefix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}
