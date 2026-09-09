import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import { currentProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Cicily",
  description: "Things Cicily is actively building and thinking about.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Work"
        title="Current Projects"
        subtitle="Things I'm actively building and thinking about."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={project.href}
              year={project.year}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
