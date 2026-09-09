import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProseHtml from "@/components/ProseHtml";
import { getArchiveBySlug, archiveSlugs } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return archiveSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getArchiveBySlug(slug);
  if (!project) return { title: "Archive | Cicily" };
  return {
    title: `${project.title} | Cicily`,
    description: project.description,
  };
}

export default async function ArchiveDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getArchiveBySlug(slug);
  if (!project) notFound();

  const bodyHtml = project.detail ?? `<p>${project.description}</p>`;

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
            href="/archive"
            className="inline-flex items-center gap-1.5 text-sm font-semibold mb-10 transition-opacity hover:opacity-60"
            style={{ color: "#92400E", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ← Archive
          </Link>

          <div className="flex items-start gap-10 md:gap-16">
            {/* Left: meta + title + description + tags */}
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{
                  color: "#92400E",
                  opacity: 0.65,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {project.year}{project.category ? ` · ${project.category}` : ""}
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

              <div className="flex flex-wrap gap-2">
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
              </div>
            </div>

            {/* Right: frosted glass image card */}
            {project.imageUrl && (
              <div
                className="hidden md:flex shrink-0 items-center justify-center rounded-3xl overflow-hidden"
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
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Body prose ───────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-16 md:pt-14 md:pb-20">
        <ProseHtml html={bodyHtml} />
      </div>
    </div>
  );
}
