"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/life", label: "Life" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#FAFAF7", borderBottom: "1px solid #E8E8E2" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight transition-opacity hover:opacity-80"
          style={{ fontFamily: "'DM Serif Display', serif", color: "#E07A5F" }}
        >
          Cicily
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium transition-colors"
                style={{
                  color: isActive ? "#E07A5F" : "#1a1a1a",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textDecoration: isActive ? "underline" : "none",
                  textDecorationColor: "#E07A5F",
                  textUnderlineOffset: "4px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5" style={{ backgroundColor: "#1a1a1a" }} />
          <span className="block w-5 h-0.5" style={{ backgroundColor: "#1a1a1a" }} />
          <span className="block w-5 h-0.5" style={{ backgroundColor: "#1a1a1a" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ borderColor: "#E8E8E2", backgroundColor: "#FAFAF7" }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium"
                style={{
                  color: isActive ? "#E07A5F" : "#1a1a1a",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
