import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/data";

export const metadata: Metadata = { title: "FAQ", description: "Answers to common questions about working with Crestova Advisory." };

export default function FAQ() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero eyebrow="FAQ" title="Questions we hear most often.">
        <p>Cannot find your answer? Our team replies within one business day.</p>
      </PageHero>
      <div className="container-x max-w-3xl pb-24 pt-6">
        <Accordion items={faqs} />
        <Reveal className="mt-14 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-center text-white">
          <h2 className="!text-white text-3xl font-medium">Still have a question?</h2>
          <p className="mt-2 text-blue-100">Speak to a senior adviser, free of charge.</p>
          <Link href="/contact" className="btn btn-light mt-6">Contact us</Link>
        </Reveal>
      </div>
    </>
  );
}
