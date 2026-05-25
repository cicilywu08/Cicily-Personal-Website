interface PageIntroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
}

export default function PageIntro({ title, subtitle, eyebrow }: PageIntroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #FCD34D 0%, #FDBA74 28%, #FECDD3 55%, #FAFAF7 100%)",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20">
        {eyebrow && (
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{
              color: "#92400E",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              opacity: 0.75,
            }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-4"
          style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
        >
          {title}
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{
            color: "#3a2a24",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            opacity: 0.85,
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
