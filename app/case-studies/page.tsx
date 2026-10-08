import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world AI and technology delivery outcomes from AYORA engagements across financial services, professional services, and operations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="AI delivered - real outcomes, real organisations"
        subtitle="A selection of engagements across industries. Client names are disclosed upon request where confidentiality applies."
      />

      <section className="py-20" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <article
                key={cs.id}
                className="flex flex-col gap-5 rounded-xl border p-7"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <Badge variant="brand">{cs.industry}</Badge>
                </div>

                <h2 className="text-lg font-semibold text-foreground leading-snug">
                  {cs.title}
                </h2>

                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                  {cs.summary}
                </p>

                <div
                  className="rounded-lg px-4 py-3 border"
                  style={{
                    background: "var(--brand-dim)",
                    borderColor: "rgba(124,58,237,0.15)",
                  }}
                >
                  <p className="text-xs font-medium mb-1" style={{ color: "var(--fg-muted)" }}>
                    Key outcome
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {cs.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <Badge key={tag} variant="muted">{tag}</Badge>
                  ))}
                </div>

              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Want to know more about how we work?"
        subtitle="We're happy to discuss specific case studies or walk through our delivery approach."
      />
    </>
  );
}
