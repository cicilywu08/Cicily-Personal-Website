import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import PicksCityViewer from "@/components/PicksCityViewer";
import { cityPicks } from "@/data/picks";

export const metadata: Metadata = {
  title: "Cicily's Pick | Cicily",
  description: "Places Cicily would send a friend. Eats, sights, and voice notes.",
};

export default function PicksPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Life"
        title="Cicily's Pick"
        subtitle="Places I'd send a friend to: eats, sights, and the occasional voice note."
      />

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <Link
            href="/life"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ← Stories
          </Link>
        </div>

        <PicksCityViewer cities={cityPicks} />
      </section>
    </div>
  );
}
