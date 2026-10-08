import Container from "@/components/ui/Container";

const differentiators = [
  {
    title: "Deep AI Engineering Capability",
    description:
      "Our team combines AI research knowledge with enterprise engineering discipline - we can design architectures and build the software, not just advise on it.",
  },
  {
    title: "Platform-Agnostic Approach",
    description:
      "We select the right model, platform, and tooling for each client's context - Azure OpenAI, open-source models, or hybrid architectures - without vendor lock-in.",
  },
  {
    title: "Enterprise-Ready from Day One",
    description:
      "Security, data governance, and integration architecture are never afterthoughts. We build solutions that pass enterprise procurement and InfoSec review.",
  },
  {
    title: "Embedded Delivery Teams",
    description:
      "We work alongside your teams, not in isolation. Knowledge transfer and capability uplift are built into every engagement.",
  },
];

export default function WhyAyora() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--bg-elevated)" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "var(--brand)" }}>
              Why AYORA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance leading-snug">
              Built for the complexity of real enterprise AI
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
              Most AI projects fail not because the technology doesn&apos;t work, but because the delivery approach doesn&apos;t account for enterprise reality - legacy systems, governance requirements, and organisational change. We do.
            </p>

            {/* Decorative line element */}
            <div className="flex gap-2 mt-2">
              <div className="w-12 h-0.5 rounded-full" style={{ background: "var(--brand)" }} />
              <div className="w-4 h-0.5 rounded-full" style={{ background: "var(--border-mid)" }} />
            </div>
          </div>

          {/* Right: differentiators */}
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
            {differentiators.map((item, i) => (
              <div key={i} className="py-6 flex gap-5 first:pt-0 last:pb-0">
                <span
                  className="text-xs font-mono font-semibold mt-1 flex-shrink-0 tabular-nums"
                  style={{ color: "var(--brand)" }}
                >
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
