import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { serviceGroups, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Accounting, IFRS reporting, tax, audit support, controls, CFO and advisory services." };

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Every financial service your business will need.">
        <p>{services.length} service lines across accounting, tax, assurance and advisory, delivered under direct Chartered Accountant oversight.</p>
      </PageHero>
      <div className="container-x space-y-20 pb-24 pt-8">
        {serviceGroups.map((g) => (
          <section key={g}>
            <Reveal>
              <h2 className="h-section border-b border-blue-100 pb-4">{g}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {services
                .filter((s) => s.group === g)
                .map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                    <Link href={`/services/${s.slug}`} className="card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                      <h3 className="text-2xl font-medium transition-colors group-hover:text-blue-600">{s.title}</h3>
                      <p className="mt-3 text-slate-600">{s.summary}</p>
                      <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 text-sm font-semibold text-blue-600">Learn more →</span>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
