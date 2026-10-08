import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "AYORA is an enterprise AI and technology consulting company helping organisations adopt AI, generative AI, and intelligent automation to transform their operations.",
};

const values = [
  {
    title: "Honest about what AI can do",
    description:
      "We won't oversell capabilities or timelines. When a use case isn't ready for AI, we'll tell you - and help you get ready.",
  },
  {
    title: "Enterprise discipline",
    description:
      "We bring software engineering rigour to AI delivery. Security, testing, observability, and integration are not afterthoughts.",
  },
  {
    title: "Client capability first",
    description:
      "Our goal is to leave every client more capable than before we arrived - not to create dependency on AYORA.",
  },
  {
    title: "Outcomes over outputs",
    description:
      "We measure success in business terms, not technical deliverables. A model in production that nobody uses is a failure.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AYORA"
        title="We exist to make enterprise AI actually work"
        subtitle="AYORA is an AI and technology consulting company that partners with organisations to design, build, and scale AI solutions that deliver measurable business value."
      />

      {/* Mission */}
      <section className="py-20" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: "var(--brand)" }}>
                Our mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                Bridging the gap between AI capability and enterprise delivery
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed"
                style={{ color: "var(--fg-secondary)" }}>
                <p>
                  The gap between what AI can do and what organisations actually deploy is large - and growing. It isn&apos;t a technology problem. It&apos;s a delivery problem: choosing the right approach, integrating with existing systems, navigating governance requirements, and building the internal confidence to commit.
                </p>
                <p>
                  AYORA was founded to close that gap. We bring together AI engineering expertise, enterprise delivery discipline, and a straightforward approach to getting AI into production.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: "var(--fg-muted)" }}>
                What we believe
              </span>
              <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
                {values.map((value) => (
                  <div key={value.title} className="py-5 first:pt-0 flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Talk to us about your AI ambitions"
        subtitle="We're always open to a straightforward conversation about where AI can create value for your organisation."
      />
    </>
  );
}
