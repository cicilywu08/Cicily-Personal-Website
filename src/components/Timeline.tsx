const companyLinks: Record<string, string> = {
  DigitalOcean: "https://www.digitalocean.com/",
  PointClickCare: "https://www.pointclickcare.com/",
  eBay: "https://www.ebay.com/",
  SharkNinja: "https://www.sharkninja.com/",
};

function renderRole(role: string) {
  for (const [company, url] of Object.entries(companyLinks)) {
    if (role.startsWith(company)) {
      const rest = role.slice(company.length);
      return (
        <>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
            className="no-underline hover:underline hover:underline-offset-2 transition-opacity"
          >
            {company}
          </a>
          {rest}
        </>
      );
    }
  }
  return role;
}

interface TimelineProps {
  entries: { year: string; role: string; detail: string }[];
  showHeading?: boolean;
}

export default function Timeline({ entries, showHeading = true }: TimelineProps) {
  return (
    <div>
      {showHeading && (
        <>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-2"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}
          >
            My Journey
          </h2>
          <p
            className="text-base mb-12"
            style={{ color: "#6B6B6B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A brief history of where I&apos;ve been and what I&apos;ve built along the way.
          </p>
        </>
      )}

      <div className="relative">
        <div
          className="absolute left-[88px] top-2 bottom-10 w-px hidden md:block"
          style={{ backgroundColor: "#E8E8E2" }}
        />
        <div className="flex flex-col gap-0">
          {entries.map((entry, i) => (
            <div key={i} className="flex gap-0 md:gap-8 group">
              <div className="hidden md:flex flex-col items-end w-20 shrink-0 pt-1">
                <span
                  className="text-base font-bold"
                  style={{
                    color: "#E07A5F",
                    fontFamily: "'DM Serif Display', serif",
                  }}
                >
                  {entry.year}
                </span>
              </div>
              <div className="hidden md:flex flex-col items-center shrink-0 pt-2">
                <div
                  className="w-3 h-3 rounded-full border-2 z-10 transition-all group-hover:scale-125"
                  style={{ borderColor: "#E07A5F", backgroundColor: "#FAFAF7" }}
                />
              </div>
              <div className="flex-1 pb-10 pl-0 md:pl-6">
                <span
                  className="md:hidden text-base font-bold block mb-1"
                  style={{
                    color: "#E07A5F",
                    fontFamily: "'DM Serif Display', serif",
                  }}
                >
                  {entry.year}
                </span>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#1a1a1a",
                  }}
                >
                  {renderRole(entry.role)}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "#6B6B6B",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {entry.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
