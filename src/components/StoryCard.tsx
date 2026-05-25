import Link from "next/link";

interface StoryCardProps {
  title: string;
  slug: string;
  excerpt: string;
  location: string;
  date: string;
  readTime: number;
  featured?: boolean;
  imageUrl?: string;
  imageGradient?: string;
  variant?: "default" | "featured";
}

export default function StoryCard({
  title,
  slug,
  excerpt,
  location,
  date,
  readTime,
  imageUrl,
  imageGradient = "from-amber-200 via-orange-200 to-rose-200",
  variant = "default",
}: StoryCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/life/${slug}`} className="block group">
        <article
          className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg flex flex-col md:flex-row"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Image — gradient mat always visible */}
          <div
            className={`md:w-2/5 aspect-video md:aspect-auto min-h-48 bg-gradient-to-br ${imageGradient} shrink-0 flex items-center justify-center`}
          >
            {imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={title}
                className="w-[85%] h-[80%] object-cover rounded-xl shadow-sm"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "#F5E6E0",
                    color: "#C05A3F",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Featured
                </span>
                <span
                  className="text-xs"
                  style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {location}
                </span>
              </div>

              <h3
                className="text-2xl font-semibold leading-snug mb-3"
                style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
              >
                {title}
              </h3>

              <p
                className="text-base leading-relaxed"
                style={{ color: "#4a4a4a", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {excerpt}
              </p>
            </div>

            <div
              className="flex items-center gap-3 mt-4 text-xs"
              style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>{date}</span>
              <span>·</span>
              <span>{readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/life/${slug}`} className="block group">
      <article
        className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Image — gradient mat always visible */}
        <div
          className={`aspect-video w-full bg-gradient-to-br ${imageGradient} flex items-center justify-center`}
        >
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={title}
              className="w-[88%] h-[80%] object-cover rounded-xl shadow-sm"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-medium"
              style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {location}
            </span>
          </div>

          <h3
            className="text-xl font-semibold leading-snug mb-2"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
          >
            {title}
          </h3>

          <p
            className="text-base leading-relaxed mb-4 line-clamp-3"
            style={{ color: "#4a4a4a", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {excerpt}
          </p>

          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>{date}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
