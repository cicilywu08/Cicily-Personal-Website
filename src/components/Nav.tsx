"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

const lifeDropdown = [
  {
    href: "/life",
    label: "Stories",
    description: "Travel essays & field notes",
  },
  {
    href: "/life/picks",
    label: "Cicily's Pick",
    description: "Places I'd send a friend to",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isLifeActive = pathname.startsWith("/life");

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLifeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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

          {/* Life dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLifeOpen((o) => !o)}
              className="text-base font-medium transition-colors"
              style={{
                color: isLifeActive ? "#E07A5F" : "#1a1a1a",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: isLifeActive ? "underline" : "none",
                textDecorationColor: "#E07A5F",
                textUnderlineOffset: "4px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Life
            </button>

            {/* Dropdown panel */}
            {lifeOpen && (
              <div
                className="absolute right-0 top-full pt-3"
                style={{ width: "240px" }}
              >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "#FFFDF9",
                  border: "1px solid #EAE7E2",
                  boxShadow: "0 8px 32px rgba(60,40,20,0.10), 0 2px 8px rgba(60,40,20,0.06)",
                }}
              >
                {/* Subtle top accent line */}
                <div style={{ height: "2px", background: "linear-gradient(90deg, #FDBA74, #FDA4AF)" }} />

                <div className="p-2">
                  {lifeDropdown.map((item) => {
                    const isActive = item.href === "/life"
                      ? pathname === "/life"
                      : pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setLifeOpen(false)}
                        className="flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-colors hover:bg-[#F5F0EB]"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          className="text-sm font-semibold"
                          style={{
                            color: isActive ? "#E07A5F" : "#1a1a1a",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}
                        >
                          {item.label}
                          {isActive && (
                            <span
                              className="ml-2 text-xs font-medium"
                              style={{ color: "#E07A5F" }}
                            >
                              ●
                            </span>
                          )}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            color: "#A09890",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}
                        >
                          {item.description}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              </div>
            )}
          </div>
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

          {/* Life section on mobile */}
          <div className="flex flex-col gap-1 pl-0">
            <span
              className="text-base font-medium"
              style={{ color: isLifeActive ? "#E07A5F" : "#1a1a1a", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Life
            </span>
            {lifeDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm pl-4"
                style={{
                  color: pathname.startsWith(item.href) ? "#E07A5F" : "#6B6B6B",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
