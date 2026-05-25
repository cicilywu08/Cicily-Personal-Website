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
  if (!project) return { title: "Archive — Cicily" };
  return {
    title: `${project.title} — Cicily`,
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
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #FCD34D 0%, #FDBA74 28%, #FECDD3 55%, #FAFAF7 100%)",
        }}
      >
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-12">
          <Link
            href="/archive"
            className="inline-flex items-center gap-1 text-sm font-semibold mb-8 transition-opacity hover:opacity-70"
            style={{ color: "#92400E", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ← Archive
          </Link>

          {project.imageUrl && (
            <div className="rounded-2xl overflow-hidden mb-8 shadow-md aspect-video flex items-center justify-center bg-gradient-to-br from-teal-200 via-cyan-200 to-sky-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-[88%] h-[80%] object-cover rounded-xl shadow-sm"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: "#F5E6E0",
                color: "#C05A3F",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {project.category}
            </span>
            <span
              className="text-sm"
              style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {project.year}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
          >
            {project.title}
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20 -mt-4">
        <div
          className="rounded-2xl p-8 md:p-10 shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <p
            className="text-lg leading-relaxed mb-8 pb-8"
            style={{
              color: "#4a4a4a",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              borderBottom: "1px solid #E8E8E2",
            }}
          >
            {project.description}
          </p>

          <ProseHtml html={bodyHtml} />

          <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid #E8E8E2" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "#F5E6E0",
                  color: "#C05A3F",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
