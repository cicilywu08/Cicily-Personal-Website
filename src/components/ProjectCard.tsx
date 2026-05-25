import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  href: string;
  year?: number;
  archived?: boolean;
  gradient?: string;
  category?: string;
}

const gradients = [
  "from-amber-200 via-orange-200 to-rose-200",
  "from-teal-200 via-cyan-200 to-sky-200",
  "from-violet-200 via-purple-200 to-pink-200",
  "from-lime-200 via-green-200 to-emerald-200",
  "from-rose-200 via-pink-200 to-fuchsia-200",
  "from-sky-200 via-blue-200 to-indigo-200",
];

function getGradient(title: string) {
  const index =
    title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    gradients.length;
  return gradients[index];
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  href,
  year,
  archived = false,
  category,
}: ProjectCardProps) {
  const gradient = getGradient(title);

  const isExternal = href.startsWith("http");
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
        {children}
      </a>
    ) : href === "#" ? (
      <div className="block group cursor-default">{children}</div>
    ) : (
      <Link href={href} className="block group">
        {children}
      </Link>
    );

  return (
    <Wrapper>
      <article
        className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Image / Placeholder — gradient always shows as a mat */}
        <div
          className={`aspect-video w-full relative bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={title}
              className="w-[88%] h-[80%] object-cover rounded-xl shadow-sm"
            />
          ) : null}
          {archived && (
            <span
              className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.7)",
                color: "#6B6B6B",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                backdropFilter: "blur(4px)",
              }}
            >
              {category ?? "Archive"}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              className="text-xl font-semibold leading-tight"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#1a1a1a",
              }}
            >
              {title}
            </h3>
            {year && (
              <span
                className="text-xs font-medium shrink-0 mt-0.5"
                style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {year}
              </span>
            )}
          </div>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#4a4a4a", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
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
      </article>
    </Wrapper>
  );
}
