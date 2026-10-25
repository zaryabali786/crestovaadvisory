import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { industries } from "@/lib/data";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const x = industries.find((i) => i.slug === params.slug);
  return x ? { title: x.title, description: x.blurb } : {};
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const x = industries.find((i) => i.slug === params.slug);
  if (!x) notFound();
  return (
    <>
      <PageHero eyebrow="Industry" title={x.title}>
        <p>{x.blurb}</p>
      </PageHero>
      <section className="section !pt-10">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-medium">Challenges we address</h2>
            <ul className="mt-6 space-y-3">
              {x.challenges.map((c) => (
                <li key={c} className="card flex gap-3 px-5 py-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span className="font-medium text-blue-950">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-medium">How we support you</h2>
            <ul className="mt-6 space-y-3">
              {x.support.map((c) => (
                <li key={c} className="flex gap-3 rounded-2xl bg-blue-50 px-5 py-4">
                  <svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 14 14" fill="none" stroke="#1456D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7.5l3 3 7-7" /></svg>
                  <span className="text-slate-700">{c}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary mt-8">Discuss your business</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
