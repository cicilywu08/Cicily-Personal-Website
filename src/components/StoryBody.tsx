"use client";

import { useState } from "react";

interface StoryBodyProps {
  body: string;
  bodyEn?: string;
  lang?: "en" | "zh";
  title: string;
  location: string;
  readTime: number;
  date: string;
}

export default function StoryBody({ body, bodyEn, lang, title, location, readTime, date }: StoryBodyProps) {
  const [showEnglish, setShowEnglish] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [translatedBody, setTranslatedBody] = useState<string | null>(null);
  const [translatedTitle, setTranslatedTitle] = useState<string | null>(null);
  const [translatedLocation, setTranslatedLocation] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState(false);
  const isZh = lang === "zh";

  async function handleToggle() {
    if (showEnglish) {
      setShowEnglish(false);
      return;
    }
    if (bodyEn || translatedBody) {
      setShowEnglish(true);
      return;
    }
    setIsTranslating(true);
    setError(false);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html: body, title, location }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setTranslatedBody(data.translatedBody);
      setTranslatedTitle(data.translatedTitle);
      setTranslatedLocation(data.translatedLocation);
      setShowEnglish(true);
    } catch {
      setError(true);
    } finally {
      setIsTranslating(false);
    }
  }

  const currentTitle = showEnglish ? (translatedTitle ?? title) : title;
  const currentLocation = showEnglish ? (translatedLocation ?? location) : location;
  const currentBody = showEnglish ? (bodyEn ?? translatedBody ?? body) : body;
  const currentClass = showEnglish ? "prose-custom" : isZh ? "prose-zh" : "prose-custom";

  return (
    <>
      {/* Translation banner — zh only */}
      {isZh && !dismissed && (
        <div
          className="mb-8 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-end gap-4 relative"
          style={{
            backgroundColor: "rgba(224, 122, 95, 0.07)",
            border: "1px solid rgba(224, 122, 95, 0.18)",
          }}
        >
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="absolute top-3 right-3 flex items-center justify-center w-5 h-5 rounded-full transition-opacity hover:opacity-60"
            style={{ color: "#A0A0A0" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex gap-3 flex-1 min-w-0 pr-4">
            <span className="shrink-0 mt-0.5 text-base" aria-hidden="true">🌐</span>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              These essays were originally written in Chinese, my native language.
              The English version you&apos;re reading is automatically translated.
              When writing about life, I still prefer my mother tongue :)
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-auto flex flex-col items-start sm:items-end gap-1">
            <button
              onClick={handleToggle}
              disabled={isTranslating}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:opacity-80 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                backgroundColor: showEnglish ? "#E07A5F" : "transparent",
                color: showEnglish ? "#ffffff" : "#E07A5F",
                border: "1.5px solid #E07A5F",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {isTranslating ? (
                <>
                  <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Translating…
                </>
              ) : showEnglish ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  读中文版
                </>
              ) : (
                <>
                  Read in English
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </>
              )}
            </button>
            {error && (
              <span className="text-xs" style={{ color: "#C05A3F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Translation failed. Try again.
              </span>
            )}
          </div>
        </div>
      )}

      {/* Location + date metadata */}
      <div
        className="flex flex-wrap items-center gap-3 mb-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <span
          className="text-sm font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: "#F5E6E0", color: "#C05A3F" }}
        >
          {currentLocation}
        </span>
        <span className="text-sm" style={{ color: "#6B6B6B" }}>{date}</span>
        <span style={{ color: "#C8C8C2" }}>·</span>
        <span className="text-sm" style={{ color: "#6B6B6B" }}>
          {isZh && !showEnglish ? `${readTime} 分钟` : `${readTime} min read`}
        </span>
      </div>

      {/* Title */}
      <h1
        className="text-3xl md:text-4xl font-semibold leading-snug mb-6"
        style={{
          fontFamily: isZh && !showEnglish ? "'Noto Sans SC', sans-serif" : "'DM Serif Display', serif",
          fontWeight: isZh && !showEnglish ? 700 : undefined,
          color: "#1a1a1a",
          letterSpacing: isZh && !showEnglish ? "0.04em" : undefined,
        }}
      >
        {currentTitle}
      </h1>

      {/* Article body */}
      <div
        className={currentClass}
        dangerouslySetInnerHTML={{ __html: currentBody }}
      />
    </>
  );
}
