import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Stories — Cicily",
  description: "Travel essays and personal field notes by Cicily.",
};

export default function LifePage() {
  const featured = stories.filter((s) => s.featured);
  const rest = stories.filter((s) => !s.featured);

  return (
    <div>
      <PageIntro
        eyebrow="Life"
        title="From the Field"
        subtitle="Travel essays and personal notes — places, memory, and the particular magic of moving slowly."
      />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div
          className="flex flex-wrap items-center justify-between gap-4 mb-10 rounded-2xl px-5 py-4"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E8E2",
          }}
        >
          <p
            className="text-sm"
            style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Looking for restaurant and city picks instead?
          </p>
          <Link
            href="/life/picks"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Cicily&apos;s Pick →
          </Link>
        </div>

        {featured.length > 0 && (
          <div className="flex flex-col gap-6 mb-12">
            {featured.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                slug={story.slug}
                excerpt={story.excerpt}
                location={story.location}
                date={story.date}
                readTime={story.readTime}
                imageGradient={story.imageGradient}
                variant="featured"
              />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                slug={story.slug}
                excerpt={story.excerpt}
                location={story.location}
                date={story.date}
                readTime={story.readTime}
                imageGradient={story.imageGradient}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
