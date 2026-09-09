import type { Metadata } from "next";
import AboutNarrative from "@/components/AboutNarrative";
import LetterModal from "@/components/LetterModal";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About | Cicily",
  description:
    "About Cicily. From a petroleum town in China to Boston, product management, AI, and the worlds beyond STEM.",
};

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        eyebrow="About"
        title="Hi, I'm Cicily."
        subtitle="Product manager and builder. Grew up in engineering, ended up in AI. History, literature, and old cities keep the rest of me occupied."
      />

      {/* Narrative */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="py-16 md:py-20">
          <AboutNarrative />
        </section>
      </div>

      {/* Say hello — full-width warm strip */}
      <section
        className="w-full text-center"
        style={{ backgroundColor: "#F5EBE5" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
          >
            Say hello
          </h2>
          <p
            className="text-base leading-relaxed mb-8 mx-auto"
            style={{
              color: "#6B6B6B",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              maxWidth: "28rem",
            }}
          >
            If something here resonates: a project, a story, a half-formed idea.
            I&apos;d love to hear from you.
          </p>
          <LetterModal />
        </div>
      </section>
    </div>
  );
}
