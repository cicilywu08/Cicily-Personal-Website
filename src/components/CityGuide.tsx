"use client";

import { useState, useEffect, useRef } from "react";

interface CityGuideProps {
  script: string[];
  cityColor: string;
  audioSrc?: string;
  position?: "fixed" | "inline";
}

export default function CityGuide({
  script,
  cityColor,
  audioSrc,
  position = "fixed",
}: CityGuideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [audioReady, setAudioReady] = useState(false); // user has opted in to hear audio
  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isTalking, setIsTalking] = useState(false);

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      setDisplayed("");
      setLineIndex(0);
      setCharIndex(0);
      setIsDone(false);
      setIsTalking(false);
      setAudioReady(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setAudioProgress(0);
      }
    }
  }, [isOpen]);

  // Typewriter (only used when no audio)
  useEffect(() => {
    if (!isOpen || isDone || audioSrc) return;

    const currentLine = script[lineIndex];
    if (!currentLine) { setIsDone(true); setIsTalking(false); return; }

    setIsTalking(true);

    if (charIndex < currentLine.length) {
      timerRef.current = setTimeout(() => {
        setDisplayed((prev) => prev + currentLine[charIndex]);
        setCharIndex((c) => c + 1);
      }, 22);
    } else {
      const isLast = lineIndex >= script.length - 1;
      if (isLast) {
        setIsDone(true);
        setIsTalking(false);
      } else {
        timerRef.current = setTimeout(() => {
          setDisplayed((prev) => prev + "\n\n");
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }, 500);
      }
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isOpen, lineIndex, charIndex, isDone, script, audioSrc]);

  const handleOpen = () => {
    setIsOpen(true);
    // Show teaser first — user must opt in before audio plays
  };

  const handleStartAudio = () => {
    if (!audioRef.current) return;
    setAudioReady(true);
    audioRef.current.play();
    setIsPlaying(true);
    setIsTalking(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleSkip = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDisplayed(script.join("\n\n"));
    setLineIndex(script.length);
    setCharIndex(0);
    setIsDone(true);
    setIsTalking(false);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsTalking(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setIsTalking(true);
    }
  };

  return (
    <div
      className={`${position === "inline" ? "absolute" : "fixed"} bottom-6 right-6 z-50 flex flex-col items-end gap-3`}
    >
      {/* Hidden audio element */}
      {audioSrc && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onEnded={() => { setIsPlaying(false); setIsTalking(false); setIsDone(true); }}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setAudioProgress(audioRef.current.currentTime / (audioRef.current.duration || 1));
            }
          }}
        />
      )}

      {/* Speech bubble */}
      {isOpen && (
        <div
          className="guide-bubble-in relative rounded-2xl px-5 py-4 shadow-lg"
          style={{
            background: "#FFFDF9",
            border: "1.5px solid #E8E8E2",
            maxWidth: "300px",
            width: "300px",
          }}
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-base leading-none transition-opacity hover:opacity-50"
            style={{ color: "#AAAAAA" }}
            aria-label="Close"
          >
            ×
          </button>

          {audioSrc ? (
            /* Audio mode */
            <div>
              {!audioReady ? (
                /* Teaser — before user opts in */
                <>
                  <p
                    className="text-sm leading-relaxed mb-4 pr-4"
                    style={{ color: "#3a2a24", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    psst, I left you a little voice note about this city 🎙
                    <br />
                    <span style={{ color: "#AAAAAA" }}>(put in your earphones if you&apos;re somewhere quiet!)</span>
                  </p>
                  <button
                    onClick={handleStartAudio}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: cityColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <PlayIcon /> I&apos;m ready, play it
                  </button>
                </>
              ) : (
                /* Playing */
                <>
                  <p
                    className="text-sm mb-4 pr-4"
                    style={{ color: "#3a2a24", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {isDone ? "that's all from me ✨" : isPlaying ? "playing..." : "paused"}
                  </p>
                  <div className="w-full h-1.5 rounded-full mb-3" style={{ backgroundColor: "#F0EDE8" }}>
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{ width: `${audioProgress * 100}%`, backgroundColor: cityColor }}
                    />
                  </div>
                  {!isDone && (
                    <button
                      onClick={toggleAudio}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                      style={{ color: cityColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {isPlaying ? <><PauseIcon /> Pause</> : <><PlayIcon /> Resume</>}
                    </button>
                  )}
                  {isDone && (
                    <p className="text-xs" style={{ color: "#AAAAAA", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      ~ Cicily
                    </p>
                  )}
                </>
              )}
            </div>
          ) : (
            /* Typewriter text mode */
            <div>
              <p
                className="text-sm leading-relaxed pr-4 whitespace-pre-wrap"
                style={{ color: "#3a2a24", fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: "60px" }}
              >
                {displayed}
                {!isDone && (
                  <span
                    className="inline-block w-0.5 h-3.5 ml-0.5 align-middle animate-pulse"
                    style={{ backgroundColor: cityColor }}
                  />
                )}
              </p>
              {!isDone && (
                <button
                  onClick={handleSkip}
                  className="mt-2 text-xs transition-opacity hover:opacity-60"
                  style={{ color: "#AAAAAA", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  skip →
                </button>
              )}
              {isDone && (
                <p className="mt-2 text-xs" style={{ color: "#AAAAAA", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  ~ Cicily
                </p>
              )}
            </div>
          )}

          {/* Bubble tail */}
          <div className="absolute -bottom-2 right-6 w-4 h-2 overflow-hidden">
            <div
              className="w-3 h-3 rotate-45 origin-top-left"
              style={{ background: "#FFFDF9", border: "1.5px solid #E8E8E2", marginTop: "-1px" }}
            />
          </div>
        </div>
      )}

      {/* Character button */}
      {!isOpen ? (
        <button
          onClick={handleOpen}
          className="guide-float relative flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110 active:scale-95"
          style={{
            width: 56,
            height: 56,
            background: "linear-gradient(135deg, #FCD34D, #FDBA74)",
            border: "2.5px solid rgba(255,255,255,0.8)",
          }}
          aria-label="Hear Cicily's take"
          title="Hear Cicily's voice note"
        >
          <FaceIdle />
          <span
            className="absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-white animate-pulse"
            style={{ backgroundColor: "#E07A5F" }}
          />
        </button>
      ) : (
        <button
          onClick={audioReady ? toggleAudio : handleClose}
          className="relative flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-105"
          style={{
            width: 56,
            height: 56,
            background: "linear-gradient(135deg, #FCD34D, #FDBA74)",
            border: "2.5px solid rgba(255,255,255,0.8)",
          }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isTalking ? <FaceTalking /> : isDone ? <FaceDone /> : <FaceIdle />}
        </button>
      )}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <polygon points="2,1 13,7 2,13" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <rect x="2" y="1" width="4" height="12" rx="1" />
      <rect x="8" y="1" width="4" height="12" rx="1" />
    </svg>
  );
}

// Shared hair for all face states
// viewBox is 40×40; face circle at cx=20 cy=24 r=14
function Hair() {
  return (
    <>
      {/* Back hair: dome + straight sides all the way down */}
      <path d="M 4 40 L 4 16 Q 4 4 20 4 Q 36 4 36 16 L 36 40 Z" fill="#1a1a1a" />
      {/* Bangs: big solid block covering forehead, 八字 W-bottom edge */}
      {/* W shape: outer edges dip to y≈21, inner sections rise to y≈17, center dip y≈19 */}
      <path d="M 4 16 Q 4 4 20 4 Q 36 4 36 16 Q 32 22 26 20 L 23 17 L 20 19 L 17 17 L 14 20 Q 8 22 4 16 Z" fill="#1a1a1a" />
    </>
  );
}

function FaceIdle() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <Hair />
      <circle cx="20" cy="24" r="14" fill="#FDE68A" />
      {/* Bangs over face */}
      <path d="M 4 16 Q 4 4 20 4 Q 36 4 36 16 Q 32 22 26 20 L 23 17 L 20 19 L 17 17 L 14 20 Q 8 22 4 16 Z" fill="#1a1a1a" />
      {/* Eyes */}
      <circle cx="15" cy="23" r="2.2" fill="#1a1a1a" />
      <circle cx="25" cy="23" r="2.2" fill="#1a1a1a" />
      <circle cx="15.8" cy="22.2" r="0.8" fill="white" />
      <circle cx="25.8" cy="22.2" r="0.8" fill="white" />
      {/* Smile */}
      <path d="M 14 28 Q 20 32 26 28" stroke="#C05A3F" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FaceTalking() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <Hair />
      <circle cx="20" cy="24" r="14" fill="#FDE68A" />
      <path d="M 4 16 Q 4 4 20 4 Q 36 4 36 16 Q 32 22 26 20 L 23 17 L 20 19 L 17 17 L 14 20 Q 8 22 4 16 Z" fill="#1a1a1a" />
      {/* Wide excited eyes */}
      <circle cx="15" cy="22" r="2.6" fill="#1a1a1a" />
      <circle cx="25" cy="22" r="2.6" fill="#1a1a1a" />
      <circle cx="15.9" cy="21.1" r="0.9" fill="white" />
      <circle cx="25.9" cy="21.1" r="0.9" fill="white" />
      {/* Open mouth */}
      <ellipse cx="20" cy="29" rx="5" ry="3.5" fill="#C05A3F" />
      <ellipse cx="20" cy="28" rx="4" ry="2" fill="#FCA5A5" />
    </svg>
  );
}

function FaceDone() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <Hair />
      <circle cx="20" cy="24" r="14" fill="#FDE68A" />
      <path d="M 4 16 Q 4 4 20 4 Q 36 4 36 16 Q 32 22 26 20 L 23 17 L 20 19 L 17 17 L 14 20 Q 8 22 4 16 Z" fill="#1a1a1a" />
      {/* Squint happy eyes */}
      <path d="M 12 23 Q 15 20 18 23" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 22 23 Q 25 20 28 23" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Big happy smile */}
      <path d="M 13 27.5 Q 20 34 27 27.5" stroke="#C05A3F" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
