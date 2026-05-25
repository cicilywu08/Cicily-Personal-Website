import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StoryBody from "@/components/StoryBody";
import { getStoryBySlug, storySlugs } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return storySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story — Cicily" };
  return {
    title: `${story.title} — Cicily`,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story || !story.body) notFound();

  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        <Link
          href="/life"
          className="inline-flex items-center gap-1 text-sm font-semibold mb-10 transition-opacity hover:opacity-70"
          style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          ← All stories
        </Link>

        {story.imageGradient && (
          <div
            className={`rounded-2xl aspect-[2/1] mb-10 bg-gradient-to-br ${story.imageGradient}`}
          />
        )}

        <StoryBody
          body={story.body}
          bodyEn={story.bodyEn}
          lang={story.lang}
          title={story.title}
          location={story.location}
          readTime={story.readTime}
          date={story.date}
        />
      </section>
    </div>
  );
}
