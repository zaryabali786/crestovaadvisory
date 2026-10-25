"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });
  return <motion.div aria-hidden style={{ scaleX: x, transformOrigin: "left" }} className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-blue-600 to-cyan-glow" />;
}
