import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cicily | Designer & Builder",
  description:
    "Personal website of Cicily. Designer, builder, and curious traveler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen" style={{ backgroundColor: "#FAFAF7", color: "#1a1a1a" }}>
        <Nav />
        <main>{children}</main>
        <footer
          className="mt-24 border-t py-8 text-center text-sm"
          style={{
            borderColor: "#E8E8E2",
            color: "#6B6B6B",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
            <a
              href="https://www.linkedin.com/in/cicily-wu-749983177/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: "#6B6B6B" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <div>
              <span style={{ fontFamily: "'DM Serif Display', serif", color: "#E07A5F" }}>
                Cicily
              </span>{" "}
              · made with care · {new Date().getFullYear()}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
