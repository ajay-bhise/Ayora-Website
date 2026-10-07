import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { capabilities } from "@/lib/content/capabilities";

export default function Capabilities() {
  return (
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <Container>
        <SectionHeader
          eyebrow="Core Capabilities"
          title="AI expertise across the full stack"
          subtitle="From strategy and architecture through to production deployment and ongoing optimisation."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="group flex flex-col gap-4 rounded-xl border p-6 transition-all duration-200 hover:border-brand/40"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: "var(--brand-dim)" }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--brand)" }}
                  aria-hidden="true"
                >
                  <path d={cap.icon} />
                </svg>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {cap.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
