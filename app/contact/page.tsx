import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { processSteps, site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: "Book a free 30-minute consultation with a senior Chartered Accountant." };

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-b border-blue-100 py-4 last:border-0">
    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{label}</p>
    <div className="mt-1 text-blue-950">{children}</div>
  </div>
);

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Every engagement begins with a conversation.">
        <p>A free 30-minute consultation with a senior adviser. No sales process, just an honest look at your business.</p>
      </PageHero>
      <section className="container-x grid gap-10 pb-20 pt-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal><ContactForm /></Reveal>
        <Reveal delay={0.1}>
          <div className="card p-7">
            <Row label="Email"><a className="font-medium hover:text-blue-600" href={`mailto:${site.email}`}>{site.email}</a><p className="text-sm text-slate-500">Reply within one business day</p></Row>
            <Row label="Phone & WhatsApp"><a className="font-medium hover:text-blue-600" href={`tel:${site.phoneHref}`}>{site.phone}</a></Row>
            <Row label="Hours">{site.hours}<p className="text-sm text-slate-500">Extended hours for UAE, KSA and APAC by arrangement</p></Row>
            <Row label="Offices">{site.offices.map((o) => <p key={o.city}><span className="font-medium">{o.city}:</span> {o.line}</p>)}</Row>
            <Row label="LinkedIn"><a className="font-medium hover:text-blue-600" href={site.linkedin} target="_blank" rel="noreferrer">Crestova Advisory</a></Row>
          </div>
        </Reveal>
      </section>
      <section className="bg-blue-50 py-20">
        <div className="container-x">
          <Reveal><h2 className="h-section max-w-xl">What happens after you get in touch.</h2></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="card h-full p-6">
                  <span className="font-serif text-4xl font-semibold text-blue-300">{s.n}</span>
                  <h3 className="mt-2 text-xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
