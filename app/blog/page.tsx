import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogExplorer from "@/components/BlogExplorer";
import { categories, posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Insights", description: "Practical articles on tax, audit, reporting, real estate, construction and running a financially healthy business." };

export default function Blog() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Practical thinking on tax, audit and growth.">
        <p>{posts.length} plain-language articles for business owners and finance teams. Search by topic or filter by category.</p>
      </PageHero>
      <BlogExplorer posts={posts} categories={categories} />
    </>
  );
}
