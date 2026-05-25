import { currentProjects, archivedProjects, type Project } from "@/data/projects";
import { stories, type Story } from "@/data/stories";
import { cityPicks, type CityPick } from "@/data/picks";

export function projectSlug(project: Project): string {
  if (project.href.startsWith("/projects/")) {
    return project.href.replace("/projects/", "");
  }
  return project.id;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return currentProjects.find((p) => projectSlug(p) === slug);
}

export function getArchiveBySlug(slug: string): Project | undefined {
  const href = `/archive/${slug}`;
  return archivedProjects.find((p) => p.href === href);
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string): CityPick | undefined {
  return cityPicks.find((c) => c.slug === slug);
}

export const projectSlugs = currentProjects.map(projectSlug);

export const archiveSlugs = archivedProjects
  .filter((p) => p.href.startsWith("/archive/"))
  .map((p) => p.href.replace("/archive/", ""));

export const storySlugs = stories.map((s) => s.slug);
