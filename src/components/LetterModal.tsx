"use client";

import { useState, useEffect } from "react";

const CONTACT_EMAIL = "cwuxiaoto@gmail.com";

function EnvelopeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function LetterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [sent, setSent] = useState(false);

  // Format today's date like: March 13, 2026
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  function handleClose() {
    setIsOpen(false);
    setTimeout(() => { setContent(""); setSent(false); }, 300);
  }

  function handleSend() {
    if (content.trim().length === 0) return;
    const subject = encodeURIComponent("Hello from your website");
    const body = encodeURIComponent(content);
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
    setSent(true);
  }

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-85 hover:scale-[1.02]"
        style={{
          backgroundColor: "#E07A5F",
          color: "#FFFFFF",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        Write me a letter <EnvelopeIcon />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(20, 12, 8, 0.55)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Letter paper */}
          <div
            className="relative w-full max-w-lg rounded-sm"
            style={{
              backgroundColor: "#FDFAF5",
              boxShadow: "0 24px 64px rgba(20,12,8,0.28), 0 4px 16px rgba(20,12,8,0.12)",
            }}
          >
            {/* Top paper header — unlined cream strip */}
            <div
              className="relative px-10 pt-8 pb-4"
              style={{
                backgroundColor: "#FDFAF5",
                borderBottom: "1px solid #EBE5DA",
              }}
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-6 text-xl leading-none transition-opacity hover:opacity-40"
                style={{ color: "#B0A89E" }}
                aria-label="Close"
              >
                ×
              </button>

              {/* Wax seal decoration */}
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg select-none"
                  style={{
                    background: "linear-gradient(135deg, #E07A5F, #C05A3F)",
                    boxShadow: "0 2px 8px rgba(192,90,63,0.35)",
                    color: "white",
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  C
                </div>

                {/* Date */}
                <p
                  className="text-xs pt-2"
                  style={{
                    color: "#B0A89E",
                    fontFamily: "'DM Serif Display', serif",
                    fontStyle: "italic",
                    letterSpacing: "0.02em",
                  }}
                >
                  {today}
                </p>
              </div>

              {/* Greeting */}
              <p
                className="mt-5 text-2xl"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#2a1f1a",
                  fontStyle: "italic",
                }}
              >
                Hello Cicily,
              </p>
            </div>

            {/* Writing area */}
            <div className="px-10 py-0">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write whatever you'd like: a hello, a thought, a question, something you've been meaning to say..."
                autoFocus
                rows={9}
                className="w-full resize-none outline-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: "32px",
                  color: "#2a1f1a",
                  padding: "0",
                  border: "none",
                  caretColor: "#E07A5F",
                  backgroundImage: `repeating-linear-gradient(
                    transparent,
                    transparent 31px,
                    #EBE5DA 31px,
                    #EBE5DA 32px
                  )`,
                  backgroundSize: "100% 32px",
                  backgroundPositionY: "0px",
                }}
              />
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between px-10 py-6"
              style={{ borderTop: "1px solid #EBE5DA", backgroundColor: "#FDFAF5" }}
            >
              <p
                className="text-xs italic"
                style={{ color: "#C0B8B0", fontFamily: "'DM Serif Display', serif" }}
              >
                {sent ? "Sent. Thank you." : content.length === 0 ? "Take your time." : `${content.length} characters`}
              </p>

              {sent ? (
                <button
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-80"
                  style={{
                    backgroundColor: "#E8E3DA",
                    color: "#6B6B6B",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Close
                </button>
              ) : (
                <button
                  onClick={handleSend}
                  disabled={content.trim().length === 0}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-85"
                  style={{
                    backgroundColor: content.trim().length > 0 ? "#E07A5F" : "#E8E3DA",
                    color: content.trim().length > 0 ? "#fff" : "#B0A89E",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    cursor: content.trim().length > 0 ? "pointer" : "default",
                    transition: "all 0.2s ease",
                  }}
                >
                  Send this letter <EnvelopeIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
