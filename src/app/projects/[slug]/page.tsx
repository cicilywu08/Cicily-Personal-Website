import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectDemoVideo from "@/components/ProjectDemoVideo";
import ProseHtml from "@/components/ProseHtml";
import { getProjectBySlug, projectSlugs } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project | Cicily" };
  return {
    title: `${project.title} | Cicily`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const bodyHtml =
    project.detail ??
    `<p>${project.description}</p><p><em>More detail coming soon.</em></p>`;

  return (
    <div>
      {/* ── Gradient header ───────────────────────────────── */}
      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(150deg, #FCD34D 0%, #FDBA74 28%, #FECDD3 55%, #FAFAF7 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-14 md:pt-14 md:pb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold mb-10 transition-opacity hover:opacity-60"
            style={{ color: "#92400E", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ← Projects
          </Link>

          <div className="flex items-start gap-10 md:gap-16">
            {/* Left: year + title + description + tags */}
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{
                  color: "#92400E",
                  opacity: 0.65,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {project.year}
              </p>

              <h1
                className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-5"
                style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
              >
                {project.title}
              </h1>

              <p
                className="text-base md:text-lg leading-relaxed mb-7"
                style={{
                  color: "#3a2a24",
                  opacity: 0.82,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  maxWidth: "36rem",
                }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.55)",
                      color: "#92400E",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#FFFFFF",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                )}

                {project.linkedinUrl && (
                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: "#0A66C2",
                      color: "#FFFFFF",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}

                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#1a1a1a",
                      border: "1.5px solid rgba(26,26,26,0.18)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                )}

                {project.subscribeUrl && (
                  <a
                    href={project.subscribeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                    style={{
                      background:
                        "linear-gradient(135deg, #EC4899 0%, #8B5CF6 55%, #6366F1 100%)",
                      color: "#FFFFFF",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    Subscribe
                  </a>
                )}
              </div>
            </div>

            {/* Right: frosted glass icon card */}
            {project.imageUrl && (
              <div
                className="hidden md:flex shrink-0 items-center justify-center rounded-3xl"
                style={{
                  width: 172,
                  height: 172,
                  background: "rgba(255,255,255,0.52)",
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 4px 24px rgba(146,64,14,0.10), 0 1px 4px rgba(146,64,14,0.06)",
                  border: "1px solid rgba(255,255,255,0.7)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{ width: 104, height: 104, objectFit: "contain" }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Preview images ───────────────────────────────── */}
      {project.previewImages && project.previewImages.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 pt-10 md:pt-12">
          {project.previewNote && (
            <p
              className="text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto text-center"
              style={{
                color: "#4a4a4a",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {project.previewNote}
            </p>
          )}
          <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8">
            {project.previewImages.map((img) => (
              <figure key={img.src} className="w-full max-w-xs mx-auto md:mx-0">
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{
                    border: "1px solid #E8E8E2",
                    boxShadow: "0 8px 28px rgba(60,40,20,0.08)",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto block"
                  />
                </div>
                {img.caption && (
                  <figcaption
                    className="mt-2.5 text-center text-xs"
                    style={{
                      color: "#6B6B6B",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* ── Demo video (autoplay) ─────────────────────────── */}
      {project.videoUrl && (
        <div className="max-w-4xl mx-auto px-6 pt-10 md:pt-12 flex justify-center">
          <div className="w-full max-w-md">
            <ProjectDemoVideo src={project.videoUrl} title={project.title} />
          </div>
        </div>
      )}

      {/* ── Body prose ───────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-16 md:pt-14 md:pb-20">
        <ProseHtml html={bodyHtml} />
      </div>
    </div>
  );
}
