import Link from "next/link";
import HeroWaves from "@/components/HeroWaves";
import ProjectCard from "@/components/ProjectCard";
import StoryCard from "@/components/StoryCard";
import Timeline from "@/components/Timeline";
import { currentProjects } from "@/data/projects";
import { stories } from "@/data/stories";
import { timelineEntries } from "@/data/timeline";

const featuredProjects = currentProjects.slice(0, 3);
const featuredStories = stories.filter((s) => s.featured).slice(0, 2);

export default function Home() {
  return (
    <div>
      {/* Hero — flowing gradient, soft blobs, and drifting waves */}
      <section
        className="hero-aurora relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #FCD34D 0%, #FDBA74 22%, #FDA4AF 45%, #FECDD3 68%, #FBCFE8 85%, #FAFAF7 100%)",
        }}
      >
        {/* Soft drifting color washes behind the headline */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
          <div
            className="hero-blob hero-blob-a"
            style={{
              top: "-12%",
              right: "8%",
              width: "42vw",
              maxWidth: 520,
              height: "42vw",
              maxHeight: 520,
              background: "radial-gradient(circle, rgba(251,113,133,0.55) 0%, rgba(251,113,133,0) 70%)",
            }}
          />
          <div
            className="hero-blob hero-blob-b"
            style={{
              top: "18%",
              right: "28%",
              width: "32vw",
              maxWidth: 380,
              height: "32vw",
              maxHeight: 380,
              background: "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(251,191,36,0) 70%)",
            }}
          />
          <div
            className="hero-blob hero-blob-c"
            style={{
              bottom: "8%",
              left: "12%",
              width: "36vw",
              maxWidth: 440,
              height: "36vw",
              maxHeight: 440,
              background: "radial-gradient(circle, rgba(253,164,175,0.4) 0%, rgba(253,164,175,0) 70%)",
            }}
          />
        </div>

        <HeroWaves />

        {/* Decorative scattered dots — gentle drift */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          {[
            { top: "18%", left: "62%", size: 10, opacity: 0.30, color: "#F97316", x: "12px", y: "-14px", delay: "0s" },
            { top: "32%", left: "70%", size: 7,  opacity: 0.25, color: "#FB7185", x: "-10px", y: "8px", delay: "1.2s" },
            { top: "12%", left: "75%", size: 12, opacity: 0.22, color: "#F59E0B", x: "8px", y: "12px", delay: "0.6s" },
            { top: "48%", left: "78%", size: 8,  opacity: 0.18, color: "#FB7185", x: "-14px", y: "-6px", delay: "2s" },
            { top: "22%", left: "85%", size: 6,  opacity: 0.28, color: "#F97316", x: "6px", y: "-10px", delay: "1.5s" },
            { top: "55%", left: "66%", size: 9,  opacity: 0.15, color: "#F59E0B", x: "-8px", y: "14px", delay: "0.3s" },
            { top: "8%",  left: "55%", size: 5,  opacity: 0.22, color: "#FB7185", x: "10px", y: "6px", delay: "2.4s" },
            { top: "40%", left: "88%", size: 11, opacity: 0.14, color: "#F97316", x: "-6px", y: "-12px", delay: "1.8s" },
            { top: "28%", left: "58%", size: 6,  opacity: 0.25, color: "#F59E0B", x: "14px", y: "4px", delay: "0.9s" },
            { top: "60%", left: "82%", size: 7,  opacity: 0.12, color: "#FB7185", x: "-12px", y: "10px", delay: "2.8s" },
          ].map((dot, i) => (
            <div
              key={i}
              className="hero-dot absolute rounded-sm"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                backgroundColor: dot.color,
                opacity: dot.opacity,
                ["--dot-x" as string]: dot.x,
                ["--dot-y" as string]: dot.y,
                animationDelay: dot.delay,
                animationDuration: `${8 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-[2] max-w-6xl mx-auto px-6 pt-16 pb-32 md:pb-36">
          <div className="max-w-2xl">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{
                color: "#92400E",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                opacity: 0.75,
              }}
            >
              Hello there
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6"
              style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
            >
              Hi, I&apos;m{" "}
              <span style={{ color: "#92400E" }}>Cicily</span>.
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{
                color: "#3a2a24",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                maxWidth: "520px",
                opacity: 0.8,
              }}
            >
              AI product manager and builder.
              <br /><span style={{ whiteSpace: "nowrap" }}>I turn emerging AI into practical tools people can rely on.</span>
              <br />Currently building small things and occasionally disappearing somewhere in the world to think.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  backgroundColor: "#92400E",
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                See my work
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
                style={{
                  backgroundColor: "rgba(255,255,255,0.45)",
                  color: "#3a2a24",
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  backdropFilter: "blur(4px)",
                }}
              >
                About me
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Timeline entries={timelineEntries} />
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr style={{ borderColor: "#E8E8E2" }} />
      </div>

      {/* Projects preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-1"
              style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
            >
              Current Projects
            </h2>
            <p
              className="text-base"
              style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Things I&apos;m actively building and thinking about.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold hidden md:inline-block transition-opacity hover:opacity-70"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
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

        <div className="mt-8 md:hidden">
          <Link
            href="/projects"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr style={{ borderColor: "#E8E8E2" }} />
      </div>

      {/* Life preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-1"
              style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
            >
              From the Field
            </h2>
            <p
              className="text-base"
              style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Travel stories and personal essays.
            </p>
          </div>
          <Link
            href="/life"
            className="text-sm font-semibold hidden md:inline-block transition-opacity hover:opacity-70"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Read more →
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {featuredStories.map((story) => (
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

        <div className="mt-8 md:hidden">
          <Link
            href="/life"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Read more stories →
          </Link>
        </div>
      </section>
    </div>
  );
}
