import Link from "next/link";
import CopyrightYear from "@/components/ui/CopyrightYear";

const serviceLinks = [
  { label: "Generative AI", href: "/services#generative-ai" },
  { label: "AI Agents & Automation", href: "/services#ai-agents" },
  { label: "Microsoft AI & Copilot", href: "/services#microsoft-ai" },
  { label: "Data & Analytics AI", href: "/services#data-analytics" },
  { label: "Custom AI Development", href: "/services#custom-ai" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-xl tracking-tight text-foreground mb-4"
            >
              <span
                className="inline-flex w-7 h-7 rounded-md items-center justify-center"
                style={{ background: "var(--brand)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 13H2L8 2Z" fill="white" />
                </svg>
              </span>
              <span>
                AYOR<span style={{ color: "var(--brand)" }}>A</span>
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--fg-muted)" }}
            >
              Enterprise AI and technology consulting. We help organizations adopt AI, intelligent automation, and generative AI to deliver measurable business impact.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--fg-muted)" }}>
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-foreground"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--fg-muted)" }}>
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-foreground"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--fg-muted)" }}>
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-2.5 text-sm"
              style={{ color: "var(--fg-secondary)" }}>
              <span>[PLACEHOLDER: City, Country]</span>
              <a
                href="mailto:hello@ayoraai.com"
                className="transition-colors duration-150 hover:text-foreground"
              >
                hello@ayoraai.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t text-xs"
          style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
        >
          <p>
            &copy; <CopyrightYear /> AYORA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-150">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
