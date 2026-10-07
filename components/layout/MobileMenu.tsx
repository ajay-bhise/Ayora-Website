"use client";

import Link from "next/link";
import { useEffect } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col"
      style={{ background: "var(--bg)" }}
      role="dialog"
      aria-modal="true"
    >
      {/* top bar spacer */}
      <div className="h-16" />

      <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-2xl font-semibold py-3 border-b text-foreground hover:text-brand transition-colors duration-150"
            style={{ borderColor: "var(--border)" }}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center justify-center w-full rounded-lg px-6 py-4 text-base font-semibold text-white transition-colors duration-150 hover:opacity-90"
            style={{ background: "var(--brand)" }}
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
}
