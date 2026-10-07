import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { caseStudies } from "@/lib/content/case-studies";

export default function CaseStudiesStrip() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Case Studies"
            title="Results that speak for themselves"
            subtitle="A selection of recent engagements across industries."
            align="left"
          />
          <Link
            href="/case-studies"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--brand)" }}
          >
            All case studies
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((cs) => (
            <Link
              key={cs.id}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col gap-5 rounded-xl border p-6 transition-all duration-200 hover:border-border-mid"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Industry tag */}
              <Badge variant="brand">{cs.industry}</Badge>

              <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-brand transition-colors duration-150">
                {cs.title}
              </h3>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--fg-secondary)" }}>
                {cs.summary}
              </p>

              {/* Key result */}
              <div
                className="rounded-lg px-4 py-3 border"
                style={{
                  background: "var(--brand-dim)",
                  borderColor: "rgba(124,58,237,0.15)",
                }}
              >
                <p className="text-xs font-medium" style={{ color: "var(--fg-secondary)" }}>
                  Key outcome
                </p>
                <p className="text-sm font-semibold mt-0.5 text-foreground">
                  {cs.result}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cs.tags.map((tag) => (
                  <Badge key={tag} variant="muted">{tag}</Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
