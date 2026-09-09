"use client";

interface ProjectDemoVideoProps {
  src: string;
  title: string;
}

export default function ProjectDemoVideo({ src, title }: ProjectDemoVideoProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl" style={{ backgroundColor: "#1a1a1a" }}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        className="w-full h-auto block"
        aria-label={`${title} demo video`}
      />
    </div>
  );
}
