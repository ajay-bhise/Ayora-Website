import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We assess your AI readiness, map high-value opportunities, and define success metrics before a single line of code is written.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect the solution - model selection, data strategy, integration design, and a phased delivery roadmap - with your team.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Agile, incremental delivery with regular demonstrations. Early value realisation built into every sprint - not just at go-live.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We operationalise the solution, embed monitoring and governance, and build internal capability for long-term ownership.",
  },
];

export default function EngagementProcess() {
  return (
    <section className="py-24" style={{ background: "var(--bg-elevated)" }}>
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          title="A process built for enterprise delivery"
          subtitle="Structured enough to be predictable. Flexible enough to work within your constraints."
          className="mb-16"
        />

        <div className="relative">
          {/* Connector line - desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px"
            style={{ background: "var(--border-mid)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                {/* Step marker */}
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <div
                    className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 font-mono text-sm font-bold flex-shrink-0"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--brand)",
                      color: "var(--brand)",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground lg:mt-4">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
