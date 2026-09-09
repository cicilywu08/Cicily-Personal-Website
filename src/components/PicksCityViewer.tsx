"use client";

import { useState } from "react";
import CityGuide from "@/components/CityGuide";
import type { CityPick, Place } from "@/data/picks";

function PlaceCard({ place }: { place: Place }) {
  return (
    <a
      href={place.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 py-4 transition-opacity hover:opacity-75"
      style={{ borderBottom: "1px solid #EEEAE4" }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-0.5">
          <p
            className="font-semibold group-hover:underline"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a", fontSize: "1rem" }}
          >
            {place.name}
          </p>
          <span
            className="text-xs shrink-0"
            style={{ color: "#E07A5F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {place.category}
          </span>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {place.note}
        </p>
      </div>
      <span
        className="text-xs shrink-0 mt-1"
        style={{ color: "#C8C8C2", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        ↗
      </span>
    </a>
  );
}

function PlaceSection({ title, places }: { title: string; places: Place[] }) {
  if (places.length === 0) return null;
  return (
    <div>
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-1"
        style={{ color: "#92400E", fontFamily: "'Plus Jakarta Sans', sans-serif", opacity: 0.7 }}
      >
        {title}
      </p>
      <div>
        {places.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </div>
  );
}

export default function PicksCityViewer({ cities }: { cities: CityPick[] }) {
  const [activeSlug, setActiveSlug] = useState(cities[0].slug);
  const city = cities.find((c) => c.slug === activeSlug)!;

  return (
    <div>
      {/* City tab bar */}
      <div
        className="flex gap-1 overflow-x-auto pb-1 mb-10"
        style={{ scrollbarWidth: "none" }}
      >
        {cities.map((c) => {
          const active = c.slug === activeSlug;
          return (
            <button
              key={c.slug}
              onClick={() => setActiveSlug(c.slug)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                backgroundColor: active ? "#E07A5F" : "transparent",
                color: active ? "#fff" : "#9A8A80",
                border: active ? "1.5px solid #E07A5F" : "1.5px solid #E8E3DA",
              }}
            >
              {c.city}
            </button>
          );
        })}
      </div>

      {/* City content */}
      <div key={activeSlug}>
        {/* Header band */}
        <div
          className="rounded-2xl px-8 py-10 md:px-10 md:py-12 mb-8"
          style={{ background: city.gradient }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#92400E", fontFamily: "'Plus Jakarta Sans', sans-serif", opacity: 0.75 }}
          >
            {city.country}
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-2"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a", lineHeight: 1.1 }}
          >
            {city.city}
          </h2>
          <p
            className="text-base italic mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#4a3028" }}
          >
            {city.tagline}
          </p>
          <p
            className="text-base leading-relaxed max-w-lg"
            style={{ color: "#3a2a24", fontFamily: "'Plus Jakarta Sans', sans-serif", opacity: 0.9 }}
          >
            {city.openingLine}
          </p>
        </div>

        {/* Places — two columns on md+ */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <PlaceSection title="Eat" places={city.eats} />
          <PlaceSection title="See" places={city.see} />
        </div>

        {/* Audio guide */}
        <CityGuide
          script={city.guideScript}
          cityColor="#E07A5F"
          audioSrc={city.audioSrc}
          position="inline"
        />
      </div>
    </div>
  );
}
