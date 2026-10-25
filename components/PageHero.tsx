import type { ReactNode } from "react";
import Wave from "./Wave";

export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pb-32 pt-36 text-white sm:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(53,212,245,.25),transparent_50%)]" />
      <div className="absolute -left-24 top-20 h-72 w-72 animate-floaty rounded-full bg-blue-400/20 blur-3xl" />
      <div className="container-x relative">
        <p className="eyebrow !text-cyan-glow before:!bg-cyan-glow">{eyebrow}</p>
        <h1 className="h-display mt-4 max-w-4xl !text-white">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-blue-100">{children}</div>}
      </div>
      <Wave fill="#ffffff" height={80} />
    </section>
  );
}
