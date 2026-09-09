"use client";

import { useState, useEffect } from "react";

const MAX_CLICKS = 10;
const STORAGE_KEY = "cicily-heart-clicks";
const HEART_PATH =
  "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z";

const HEART_TOP = 6;
const HEART_HEIGHT = 16;

export default function HeartWidget() {
  const [userClicks, setUserClicks] = useState(0);
  const [totalLikes, setTotalLikes] = useState<number | null>(null);
  const [isPumping, setIsPumping] = useState(false);
  const [popKey, setPopKey] = useState(0);

  const fillLevel = userClicks / MAX_CLICKS;
  const isFull = userClicks >= MAX_CLICKS;
  const translateY = (1 - fillLevel) * HEART_HEIGHT;

  useEffect(() => {
    const saved = Math.min(
      parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10),
      MAX_CLICKS
    );
    setUserClicks(saved);
    fetch("/api/likes")
      .then((r) => r.json())
      .then((d) => setTotalLikes(d.count))
      .catch(() => {});
  }, []);

  async function handleClick() {
    if (isFull || isPumping) return;
    const next = userClicks + 1;
    setUserClicks(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    setIsPumping(true);
    setPopKey((k) => k + 1);
    setTimeout(() => setIsPumping(false), 250);
    setTotalLikes((p) => (p ?? 0) + 1);
    try {
      const res = await fetch("/api/likes", { method: "POST" });
      const d = await res.json();
      setTotalLikes(d.count);
    } catch {}
  }

  const hint = isFull
    ? "thank you ♡"
    : userClicks === 0
    ? "leave some love"
    : `${MAX_CLICKS - userClicks} left`;

  return (
    <>
      <style>{`
        @keyframes h-pump {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.18); }
          70%  { transform: scale(0.94); }
          100% { transform: scale(1); }
        }
        @keyframes h-slosh {
          0%, 100% { transform: scaleX(1); }
          50%       { transform: scaleX(1.12); }
        }
        @keyframes h-float {
          0%   { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
      `}</style>

      {/* Pill container — mirrors the LetterModal button's height/shape */}
      <button
        onClick={handleClick}
        disabled={isFull}
        aria-label="Give some love"
        className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full transition-all"
        style={{
          border: `1.5px solid ${isFull ? "#E07A5F" : "#E8E8E2"}`,
          backgroundColor: isFull ? "#FFF0EB" : "transparent",
          cursor: isFull ? "default" : "pointer",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "border-color 0.4s, background-color 0.4s",
        }}
      >
        {/* Heart SVG */}
        <span style={{ position: "relative", flexShrink: 0, display: "flex" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{
              display: "block",
              animation: isPumping
                ? "h-pump 0.25s cubic-bezier(0.34,1.56,0.64,1) both"
                : "none",
              filter: isFull ? "drop-shadow(0 0 4px rgba(224,122,95,0.5))" : "none",
              transition: "filter 0.8s ease",
            }}
          >
            <defs>
              <clipPath id="h-clip">
                <path d={HEART_PATH} />
              </clipPath>
              <linearGradient id="h-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FECDD3" />
                <stop offset="100%" stopColor="#E07A5F" />
              </linearGradient>
            </defs>
            <path d={HEART_PATH} fill="rgba(224,122,95,0.12)" />
            <g clipPath="url(#h-clip)">
              <g
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <rect
                  x={-3}
                  y={HEART_TOP}
                  width={30}
                  height={HEART_HEIGHT + 3}
                  fill="url(#h-grad)"
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    animation:
                      userClicks > 0 && !isFull
                        ? "h-slosh 3s ease-in-out infinite"
                        : "none",
                  }}
                />
              </g>
            </g>
            <path
              d={HEART_PATH}
              fill="none"
              stroke="#E07A5F"
              strokeWidth="0.6"
              opacity={0.55}
            />
          </svg>

          {popKey > 0 && (
            <span
              key={popKey}
              style={{
                position: "absolute",
                top: -2,
                left: "50%",
                fontSize: "9px",
                fontWeight: 700,
                color: "#E07A5F",
                animation: "h-float 0.6s ease-out forwards",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              +1
            </span>
          )}
        </span>

        {/* Count */}
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: isFull ? "#E07A5F" : "#1a1a1a",
            transition: "color 0.4s",
            lineHeight: 1,
          }}
        >
          {totalLikes !== null ? totalLikes.toLocaleString() : "·"}
        </span>

        {/* Separator dot */}
        <span style={{ color: "#D0D0CA", fontSize: "0.75rem", lineHeight: 1 }}>·</span>

        {/* Hint */}
        <span
          style={{
            fontSize: "0.8rem",
            color: isFull ? "#E07A5F" : "#9B9B95",
            transition: "color 0.4s",
            lineHeight: 1,
          }}
        >
          {hint}
        </span>
      </button>
    </>
  );
}
