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
      {/* Hero — full-width gradient with layered waves */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #FCD34D 0%, #FDBA74 22%, #FDA4AF 50%, #FECDD3 72%, #FAFAF7 100%)",
        }}
      >
        <HeroWaves />

        {/* Decorative scattered dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          {[
            { top: "18%", left: "62%", size: 10, opacity: 0.30, color: "#F97316" },
            { top: "32%", left: "70%", size: 7,  opacity: 0.25, color: "#FB7185" },
            { top: "12%", left: "75%", size: 12, opacity: 0.22, color: "#F59E0B" },
            { top: "48%", left: "78%", size: 8,  opacity: 0.18, color: "#FB7185" },
            { top: "22%", left: "85%", size: 6,  opacity: 0.28, color: "#F97316" },
            { top: "55%", left: "66%", size: 9,  opacity: 0.15, color: "#F59E0B" },
            { top: "8%",  left: "55%", size: 5,  opacity: 0.22, color: "#FB7185" },
            { top: "40%", left: "88%", size: 11, opacity: 0.14, color: "#F97316" },
            { top: "28%", left: "58%", size: 6,  opacity: 0.25, color: "#F59E0B" },
            { top: "60%", left: "82%", size: 7,  opacity: 0.12, color: "#FB7185" },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute rounded-sm rotate-45"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                backgroundColor: dot.color,
                opacity: dot.opacity,
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
