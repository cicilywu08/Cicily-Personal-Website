/**
 * Bottom hero transition — same layered SVG as original home (Drive backup).
 * Static only; no horizontal scroll or mid-hero blobs.
 */
export default function HeroWaves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        className="w-full block"
        aria-hidden
      >
        <path
          d="M0,60 C200,110 400,20 600,65 C800,110 1000,15 1200,60 C1320,85 1380,50 1440,60 L1440,130 L0,130 Z"
          fill="rgba(250,245,240,0.35)"
        />
        <path
          d="M0,80 C180,40 360,105 540,75 C720,45 900,100 1080,70 C1260,40 1360,95 1440,80 L1440,130 L0,130 Z"
          fill="rgba(250,247,244,0.55)"
        />
        <path
          d="M0,100 C300,65 600,120 900,95 C1100,78 1300,108 1440,100 L1440,130 L0,130 Z"
          fill="rgba(250,250,247,0.75)"
        />
        <path
          d="M0,115 C400,90 800,128 1200,110 C1320,104 1390,118 1440,115 L1440,130 L0,130 Z"
          fill="#FAFAF7"
        />
      </svg>
    </div>
  );
}
