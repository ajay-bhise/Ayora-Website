import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AYORA's industry-aligned AI solutions for financial services, professional services, operations, and more.",
};

const industries = [
  {
    id: "financial-services",
    title: "Financial Services",
    description:
      "AI solutions for financial services organisations - from intelligent document processing for loan origination and compliance, to AI-augmented risk analytics and regulatory reporting automation.",
    useCases: [
      "Loan and contract document processing",
      "Regulatory and compliance reporting",
      "AI-augmented risk and credit analysis",
      "Fraud detection and anomaly monitoring",
      "Client-facing intelligent assistants",
    ],
  },
  {
    id: "professional-services",
    title: "Professional Services",
    description:
      "Productivity and quality solutions for consulting, legal, and advisory firms - embedding AI into knowledge work, proposal generation, and delivery operations.",
    useCases: [
      "Enterprise knowledge retrieval (RAG)",
      "Proposal and report generation",
      "Microsoft 365 Copilot deployment",
      "AI-assisted research and due diligence",
      "Timesheet and project intelligence",
    ],
  },
  {
    id: "operations",
    title: "Operations & Logistics",
    description:
      "AI and automation solutions that optimise high-volume operational processes - combining intelligent document processing, AI agents, and workflow automation.",
    useCases: [
      "Intelligent order and invoice processing",
      "Agentic workflow automation",
      "Operational anomaly detection",
      "Supply chain visibility and analytics",
      "Demand forecasting models",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    description:
      "[PLACEHOLDER] Solutions for healthcare and life sciences organisations - clinical documentation, research analytics, and regulatory compliance.",
    useCases: [
      "Clinical note processing",
      "Medical literature analysis",
      "Regulatory submission automation",
      "Patient journey analytics",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="AI solutions shaped around your industry"
        subtitle="We combine deep AI engineering capability with industry knowledge to deliver solutions that fit how your organisation actually works."
      />

      <section className="py-20" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="flex flex-col gap-12">
            {industries.map((industry, i) => (
              <div
                key={industry.id}
                id={industry.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 py-10 border-b first:pt-0"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="lg:col-span-3 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tabular-nums"
                      style={{ color: "var(--brand)" }}>
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {industry.title}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                    {industry.description}
                  </p>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <h3 className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "var(--fg-muted)" }}>
                    Common use cases
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {industry.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--fg-secondary)" }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: "var(--brand)" }} />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Don't see your industry listed?"
        subtitle="We work across sectors. Tell us your challenge and we'll explain how we can help."
      />
    </>
  );
}
