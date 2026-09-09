import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import { archivedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Archive | Cicily",
  description: "Earlier data science and machine learning projects.",
};

const categories = ["Business", "Research", "Healthcare"] as const;

export default function ArchivePage() {
  return (
    <div>
      <PageIntro
        eyebrow="Earlier work"
        title="Archive"
        subtitle="Data science and machine learning projects from grad school and my SharkNinja days."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
        {categories.map((category) => {
          const items = archivedProjects.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
              >
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    href={project.href}
                    year={project.year}
                    imageUrl={project.imageUrl}
                    archived
                    category={project.category}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
