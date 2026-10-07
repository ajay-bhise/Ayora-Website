import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
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
        title="AI delivered — real outcomes, real organisations"
        subtitle="A selection of engagements across industries. Client names are disclosed upon request where confidentiality applies."
      />

      <section className="py-20" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col gap-5 rounded-xl border p-7 transition-all duration-200 hover:border-border-mid"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <Badge variant="brand">{cs.industry}</Badge>
                </div>

                <h2 className="text-lg font-semibold text-foreground leading-snug group-hover:text-brand transition-colors duration-150">
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

                <span className="flex items-center gap-1.5 text-sm font-semibold mt-auto"
                  style={{ color: "var(--brand)" }}>
                  Read more
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
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
