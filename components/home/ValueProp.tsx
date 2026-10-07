import Container from "@/components/ui/Container";

const props = [
  {
    label: "Outcome-Focused Delivery",
    description:
      "We define success in business terms — cost reduction, time savings, revenue impact — not just model accuracy or deployment velocity.",
  },
  {
    label: "Enterprise-Grade Architecture",
    description:
      "Every solution is built for security, scalability, and integration with your existing technology estate from day one.",
  },
  {
    label: "Pragmatic AI Adoption",
    description:
      "We match the right AI approach to each problem — avoiding over-engineering and focusing on what actually works in production.",
  },
];

export default function ValueProp() {
  return (
    <section
      className="py-20 border-y"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border)",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {props.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div
                className="w-8 h-0.5 rounded-full"
                style={{ background: "var(--brand)" }}
              />
              <h3 className="text-lg font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
