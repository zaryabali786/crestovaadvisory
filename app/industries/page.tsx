import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { industries } from "@/lib/data";

export const metadata: Metadata = { title: "Industries", description: "Sector-specific accounting, tax and advisory support." };

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Sector knowledge that shows in the numbers.">
        <p>Every industry has its own accounting traps and tax rules. We work with the sectors below every day.</p>
      </PageHero>
      <div className="container-x grid gap-6 pb-24 pt-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((x, i) => (
          <Reveal key={x.slug} delay={(i % 3) * 0.07}>
            <Link href={`/industries/${x.slug}`} className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
              <span className="font-serif text-5xl font-semibold text-blue-100 transition-colors group-hover:text-blue-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl font-medium">{x.title}</h3>
              <p className="mt-2 flex-1 text-slate-600">{x.blurb}</p>
              <span className="mt-6 text-sm font-semibold text-blue-600">Explore →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
