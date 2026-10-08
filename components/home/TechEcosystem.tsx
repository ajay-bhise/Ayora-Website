import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const ecosystem = [
  {
    category: "Cloud AI Platforms",
    items: ["Azure OpenAI Service", "Azure AI Foundry", "AWS Bedrock", "Google Vertex AI"],
  },
  {
    category: "Microsoft Ecosystem",
    items: ["Microsoft 365 Copilot", "Copilot Studio", "Power Platform", "Microsoft Fabric"],
  },
  {
    category: "AI Frameworks",
    items: ["LangChain", "Semantic Kernel", "AutoGen", "LlamaIndex"],
  },
  {
    category: "Foundation Models",
    items: ["OpenAI GPT Series", "Meta Llama", "Mistral", "Phi Models"],
  },
];

export default function TechEcosystem() {
  return (
    <section className="py-24" style={{ background: "var(--bg-section)" }}>
      <Container>
        <SectionHeader
          eyebrow="Technology Ecosystem"
          title="The platforms we work with"
          subtitle="We are platform-agnostic and select the right technology for each engagement - no single-vendor lock-in."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ecosystem.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-4 rounded-xl border p-5"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "var(--brand)" }}>
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--border-mid)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
