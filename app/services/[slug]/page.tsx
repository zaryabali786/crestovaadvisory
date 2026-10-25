import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = services.filter((x) => x.group === s.group && x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={s.group} title={s.title}>
        <p>{s.short}</p>
      </PageHero>
      <section className="section !pt-10">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <p className="text-xl leading-relaxed text-slate-700">{s.summary}</p>
              <h2 className="mt-12 text-3xl font-medium">What is included</h2>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {s.points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 0.06} className="card flex items-center gap-4 px-5 py-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7.5l3 3 7-7" /></svg>
                  </span>
                  <span className="font-medium text-blue-950">{p}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-10 rounded-2xl bg-blue-50 p-7">
              <p className="eyebrow">The outcome</p>
              <p className="mt-3 font-serif text-2xl text-blue-950">{s.outcome}</p>
            </Reveal>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="card overflow-hidden">
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-7 text-white">
                <h3 className="!text-white text-2xl font-medium">Get a fixed-fee proposal</h3>
                <p className="mt-2 text-sm text-blue-100">Within 48 hours of a 30-minute discovery call.</p>
                <Link href="/contact" className="btn btn-light mt-5 w-full">Book a consultation</Link>
              </div>
              <div className="p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Related services</p>
                <ul className="space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/services/${o.slug}`} className="text-blue-700 hover:underline">{o.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
