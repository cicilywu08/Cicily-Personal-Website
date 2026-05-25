import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import CityGuide from "@/components/CityGuide";
import { cityPicks } from "@/data/picks";

export const metadata: Metadata = {
  title: "Cicily's Pick — Cicily",
  description: "Places Cicily would send a friend — eats, sights, and voice notes.",
};

function PlaceList({
  title,
  places,
}: {
  title: string;
  places: { name: string; category: string; note: string; mapsUrl: string }[];
}) {
  return (
    <div>
      <h3
        className="text-lg font-semibold mb-4"
        style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {places.map((place) => (
          <li key={place.name}>
            <a
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl p-4 transition-all hover:shadow-md"
              style={{
                backgroundColor: "#FAFAF7",
                border: "1px solid #E8E8E2",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className="font-semibold mb-0.5 group-hover:underline"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "#1a1a1a",
                    }}
                  >
                    {place.name}
                  </p>
                  <p
                    className="text-xs mb-2"
                    style={{
                      color: "#E07A5F",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {place.category}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#4a4a4a",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {place.note}
                  </p>
                </div>
                <span
                  className="text-xs shrink-0 mt-1"
                  style={{ color: "#C8C8C2", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Maps ↗
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PicksPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Life"
        title="Cicily's Pick"
        subtitle="Places I'd send a friend to — a short list of eats, sights, and the occasional voice note."
      />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <Link
            href="/life"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ← Stories
          </Link>
        </div>

        <div className="flex flex-col gap-20">
          {cityPicks.map((city) => (
            <article
              key={city.slug}
              id={city.slug}
              className="relative rounded-2xl overflow-hidden shadow-md"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div
                className="px-8 py-10 md:px-10 md:py-12"
                style={{ background: city.gradient }}
              >
                <p
                  className="text-sm font-semibold tracking-wide uppercase mb-2"
                  style={{
                    color: "#92400E",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    opacity: 0.8,
                  }}
                >
                  {city.country}
                </p>
                <h2
                  className="text-3xl md:text-4xl font-semibold mb-2"
                  style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
                >
                  {city.city}
                </h2>
                <p
                  className="text-base italic mb-3"
                  style={{ fontFamily: "'DM Serif Display', serif", color: "#3a2a24" }}
                >
                  {city.tagline}
                </p>
                <p
                  className="text-lg leading-relaxed max-w-xl"
                  style={{
                    color: "#3a2a24",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    opacity: 0.9,
                  }}
                >
                  {city.openingLine}
                </p>
              </div>

              <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10">
                <PlaceList title="Eat" places={city.eats} />
                <PlaceList title="See" places={city.see} />
              </div>

              <div className="h-24 md:h-28" aria-hidden />

              <CityGuide
                script={city.guideScript}
                cityColor="#E07A5F"
                audioSrc={city.audioSrc}
                position="inline"
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
