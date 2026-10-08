import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { services } from "@/lib/content/services";
import { capabilities } from "@/lib/content/capabilities";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AYORA's enterprise AI and technology consulting services - from generative AI and AI agents to Microsoft Copilot, intelligent automation, and custom AI application development.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end AI and technology consulting"
        subtitle="From initial opportunity assessment through to scaled production deployment, we partner with organisations at every stage of the AI adoption journey."
      />

      {/* Services detail */}
      <section className="py-20" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-10 border-b first:pt-0"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tabular-nums"
                      style={{ color: "var(--brand)" }}>
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "var(--fg-muted)" }}>
                    Included capabilities
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "var(--fg-secondary)" }}
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          style={{ color: "var(--brand)" }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* All capabilities */}
      <section className="py-20" style={{ background: "var(--bg-section)" }}>
        <Container>
          <div className="max-w-xl mb-10">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "var(--brand)" }}>
              Full capability set
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
              All AI capability areas
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {capabilities.map((cap) => (
              <Badge key={cap.id} variant="default">
                {cap.label}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
