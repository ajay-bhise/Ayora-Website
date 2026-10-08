import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/content/services";

export default function ServicesOverview() {
  return (
    <section className="py-24" style={{ background: "var(--bg-section)" }}>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Services"
            title="What we deliver"
            subtitle="End-to-end AI and technology consulting - from strategy through to scaled deployment."
            align="left"
          />
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--brand)" }}
          >
            All services
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="group flex flex-col gap-4 rounded-xl border p-6 transition-all duration-200 hover:border-border-mid"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-brand transition-colors duration-150">
                  {service.title}
                </h3>
                <span
                  className="text-xs font-mono mt-0.5 flex-shrink-0"
                  style={{ color: "var(--fg-muted)" }}
                >
                  0{i + 1}
                </span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--fg-secondary)" }}>
                {service.description}
              </p>
              <ul className="flex flex-col gap-1.5 mt-1">
                {service.capabilities.slice(0, 3).map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "var(--brand)" }}
                    />
                    {cap}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
