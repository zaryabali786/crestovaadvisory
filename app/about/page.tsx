import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "A SECP-registered, Chartered Accountant-led advisory firm with Big 4 experience, serving seven markets." };

const values = [
  { t: "Integrity", d: "We report what you need to know, not what is most convenient to hear." },
  { t: "Excellence", d: "Accurate, well-documented work, reviewed at senior level before it reaches you." },
  { t: "Client commitment", d: "Timely communication and practical solutions, because your deadlines cannot wait." },
  { t: "Commercial insight", d: "Regulation translated into business-ready action for your market and industry." },
  { t: "Innovation", d: "Cloud platforms, dashboards and automation for faster, better information." },
  { t: "Long-term value", d: "We aim to be the firm you grow into, and never feel the need to grow out of." },
];

const leaders = [
  { i: "MA", n: "Muhammad Ali", r: "Founder & Managing Partner", q: "ACA (ICAP)", d: "Over eight years across external audit, financial reporting, controls and advisory, including EY MENA and Grant Thornton." },
  { i: "MF", n: "Muhammad Fiaz", r: "Director, Assurance & Corporate Finance", q: "ACA (ICAP)", d: "11+ years spanning KPMG Pakistan, Grant Thornton and senior finance roles in industry." },
  { i: "UT", n: "Usama Bin Tariq", r: "Director, Taxation & Business Advisory", q: "CAF (ICAP)", d: "Seven-plus years in direct and indirect tax, SECP compliance and cross-border advisory." },
  { i: "ZA", n: "Zain Ali", r: "Director, Audit & Financial Reporting", q: "ACCA", d: "Nine-plus years in IFRS and ISA audits at EY MENA and Grant Thornton." },
  { i: "AH", n: "Muhammad Atif Hameed", r: "Director, Technology Risk & Cyber", q: "CISA · CISM", d: "Technology risk specialist with EY Ford Rhodes, Deloitte and Ecovis experience." },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Crestova" title="Big 4 standards, with the attention of a boutique firm.">
        <p>We are a SECP-registered, Chartered Accountant-led firm. Our team brings experience from EY, KPMG, Grant Thornton and Deloitte to the businesses that most need it.</p>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="h-section mt-4">Closing the gap between large-firm expertise and real access.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg text-slate-600">
            <p>The businesses that most need sophisticated financial guidance are often the ones large firms deprioritise: the SME seeking international financing, the start-up facing a new tax regime, the exporter outgrowing its bookkeeper.</p>
            <p>Crestova was built for them. We bring Big 4 technical standards together with the senior attention, practical delivery and fast responses that growing businesses actually need.</p>
            <p>{site.legal} operates as Crestova Advisory from offices in Lahore and Rawalpindi, serving clients across the US, UK, Canada, UAE, Saudi Arabia, Australia and Pakistan.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="card p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-blue-950">To give clients reliable financial information, timely compliance, strong controls and practical advice that supports sustainable growth.</p>
          </Reveal>
          <Reveal delay={0.1} className="card bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white">
            <p className="eyebrow !text-cyan-glow before:!bg-cyan-glow">Vision</p>
            <p className="mt-4 font-serif text-2xl leading-snug">To be the trusted international finance and advisory partner for businesses across our seven markets.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Leadership</p>
            <h2 className="h-section mt-4">The people behind every engagement.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 0.08}>
                <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-glow font-serif text-xl font-semibold text-white">{p.i}</span>
                  <h3 className="mt-5 text-2xl font-medium">{p.n}</h3>
                  <p className="text-sm font-semibold text-blue-600">{p.r}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{p.q}</p>
                  <p className="mt-4 text-slate-600">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Values</p>
            <h2 className="h-section mt-4">Principles behind every piece of work.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) * 0.07}>
                <div className="card h-full p-6">
                  <h3 className="text-xl font-medium">{v.t}</h3>
                  <p className="mt-2 text-slate-600">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link href="/contact" className="btn btn-primary">Talk to our team</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
