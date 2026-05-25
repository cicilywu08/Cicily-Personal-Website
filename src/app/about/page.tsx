import type { Metadata } from "next";
import AboutNarrative from "@/components/AboutNarrative";
import PageIntro from "@/components/PageIntro";
import LetterModal from "@/components/LetterModal";
import HeartWidget from "@/components/HeartWidget";
import Timeline from "@/components/Timeline";
import { timelineEntries } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About — Cicily",
  description:
    "About Cicily — from a petroleum town in China to Boston, product management, AI, and the worlds beyond STEM.",
};

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        eyebrow="About"
        title="Hi, I'm Cicily."
        subtitle="I grew up in a small town in China, built around one of the country's largest petroleum bases — practical, unglamorous, proud of what your hands could do."
      />

      <section className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <div
          className="rounded-3xl px-8 py-10 md:px-12 md:py-14 mb-16 md:mb-20"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(26,26,26,0.06), 0 8px 32px rgba(146,64,14,0.06)",
            border: "1px solid #E8E8E2",
          }}
        >
          <AboutNarrative />
        </div>

        <div className="mb-16 md:mb-20">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
          >
            Where I&apos;ve been
          </h2>
          <Timeline entries={timelineEntries} />
        </div>

        <div
          className="rounded-3xl px-8 py-10 md:px-12 md:py-14"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(26,26,26,0.06), 0 8px 32px rgba(146,64,14,0.06)",
            border: "1px solid #E8E8E2",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
          >
            Say hello
          </h2>
          <p
            className="text-base leading-relaxed mb-8 max-w-xl"
            style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            If something here resonates — a project, a story, a half-formed idea — I&apos;d love to
            hear from you. Leave a note, or just some love below.
          </p>

          <LetterModal />
          <HeartWidget />
        </div>
      </section>
    </div>
  );
}
