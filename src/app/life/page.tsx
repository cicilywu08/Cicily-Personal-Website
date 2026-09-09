import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Stories | Cicily",
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
        subtitle="Travel essays and personal notes. Places, memory, and the particular magic of moving slowly."
      />

      <section className="max-w-6xl mx-auto px-6 py-12">
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
