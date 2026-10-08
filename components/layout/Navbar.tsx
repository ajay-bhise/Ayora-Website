"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b backdrop-blur-md"
            : "border-transparent"
        }`}
        style={{
          background: scrolled ? "rgba(7,6,14,0.88)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
            >
              <Image
                src="/ayora-wordmark.png"
                width={1203}
                height={458}
                alt="Ayora AI"
                className="h-10 w-auto brightness-150 sm:h-11"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-150"
                  style={{ color: "var(--fg-secondary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--fg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--fg-secondary)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors duration-150 hover:opacity-90"
                style={{ background: "var(--brand)" }}
              >
                Get in Touch
              </Link>

              <button
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-white/5 transition-colors"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span
                  className={`block h-0.5 w-5 rounded-full transition-all duration-200 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                  style={{ background: "var(--fg)" }}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full transition-all duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                  style={{ background: "var(--fg)" }}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full transition-all duration-200 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                  style={{ background: "var(--fg)" }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
